// @ts-check
// The browser side: start a browser, load each page, get it into a stable
// state, take the two screenshots, collect links for the crawl.
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { availableParallelism } from 'node:os';
import { dirname, join } from 'node:path';
import { chromium, devices } from 'playwright-core';
import { pathFromLink, sameOrigin } from './discover.js';

/** @typedef {import('playwright-core').Browser} Browser */
/** @typedef {import('playwright-core').BrowserContext} BrowserContext */
/** @typedef {import('playwright-core').Page} Page */
/** @typedef {import('./types.js').PageResult} PageResult */
/** @typedef {import('./types.js').Viewport} Viewport */

const require = createRequire(import.meta.url);
const PLAYWRIGHT_VERSION = require('playwright-core/package.json').version;

export const DESKTOP = { width: 1440, height: 900 };
export const MOBILE = { width: 390, height: 844 };
export const MOBILE_USER_AGENT = devices['Pixel 7'].userAgent;
export const MAX_CAPTURE_HEIGHT = 16384; // Chromium's compositor limit; taller pages get cut here

// Dev-server toolbars that would otherwise sit in every screenshot. Error
// overlays are deliberately NOT in this list: if the app is broken, the
// screenshot should show it.
const HIDE_CSS = [
  'astro-dev-toolbar',
  '[id^="nuxt-devtools"]',
  '#__next-build-watcher',
  'nextjs-portal[data-stm-hide]',
]
  .join(',')
  .concat('{display:none!important}');

// The only warnings a page can report. Anything else coming back from the
// page is dropped, because page scripts run in the same world as our checks.
const KNOWN_WARNINGS = ['dev-error-overlay', 'inner-scroll'];

/**
 * Start a browser without making the user download anything if we can help it:
 * a cached Playwright build first, then the Chrome or Edge already on the
 * machine, and only then a one-time download of the small headless shell.
 * @param {{ log: (line: string) => void }} opts
 * @returns {Promise<{ browser: Browser, name: string, version: string }>}
 */
export async function launchBrowser({ log }) {
  const attempts = [
    { name: 'chromium', options: {} },
    { name: 'chrome', options: { channel: 'chrome' } },
    { name: 'msedge', options: { channel: 'msedge' } },
  ];
  const problems = [];
  for (const attempt of attempts) {
    const outcome = await tryLaunch(attempt);
    if (outcome.browser) return outcome;
    problems.push(outcome.message);
  }
  if (problems.some(missingLibraries)) throw librariesError();
  if (!problems.some((m) => /Executable doesn't exist|is not found at/i.test(m))) {
    // A browser exists but would not start. Downloading another one would not help.
    throw browserError('Could not start a browser.', `Details: ${problems[0].split('\n')[0]}`);
  }
  // Nothing usable on this machine. Download the headless shell once, then try again.
  log(
    'One-time setup: downloading a headless Chrome for screenshots (about a 120 MB download, 200 MB on disk). Next runs skip this.',
  );
  installHeadlessShell();
  const retry = await tryLaunch(attempts[0]);
  if (retry.browser) return retry;
  if (missingLibraries(retry.message)) throw librariesError();
  throw browserError(
    'Could not start a browser.',
    `Install Google Chrome, or run: npx playwright-core@${PLAYWRIGHT_VERSION} install chromium-headless-shell`,
  );
}

/**
 * @param {{ name: string, options: object }} attempt
 * @returns {Promise<{ browser: Browser, name: string, version: string } | { browser: null, message: string }>}
 */
async function tryLaunch(attempt) {
  try {
    const browser = await chromium.launch({
      ...attempt.options,
      handleSIGINT: false,
      handleSIGTERM: false,
      handleSIGHUP: false,
    });
    return { browser, name: attempt.name, version: browser.version() };
  } catch (err) {
    return { browser: null, message: String(/** @type {Error} */ (err).message || err) };
  }
}

/** @param {string} message */
function missingLibraries(message) {
  return /missing dependencies/i.test(message);
}

function librariesError() {
  return browserError(
    'The browser is installed but this system is missing libraries it needs.',
    `Run: sudo npx playwright-core@${PLAYWRIGHT_VERSION} install-deps chromium`,
  );
}

/** @param {string} message @param {string} fix */
function browserError(message, fix) {
  const err = /** @type {Error & { code?: string, fix?: string }} */ (new Error(message));
  err.code = 'no_browser';
  err.fix = fix;
  return err;
}

function installHeadlessShell() {
  const cli = join(dirname(require.resolve('playwright-core/package.json')), 'cli.js');
  // The installer prints progress on stdout. Send it to stderr so --json stays clean.
  spawnSync(process.execPath, [cli, 'install', 'chromium-headless-shell', '--no-progress'], {
    stdio: ['ignore', 2, 2],
  });
}

/** How many pages we load at once. */
export function concurrency() {
  return Math.max(1, Math.min(4, availableParallelism()));
}

/**
 * Run a function inside the page, with a deadline. Playwright's evaluate has
 * no timeout of its own, so a page stuck in a loop would otherwise hang the
 * whole run. Errors thrown by the page's own scripts are replaced with a
 * fixed message so page text never reaches the manifest.
 * @template T
 * @param {Page} page
 * @param {() => T | Promise<T>} fn
 * @param {number} ms
 * @returns {Promise<T>}
 */
async function inPage(page, fn, ms) {
  /** @type {PromiseWithResolvers<never>} */
  const deadline = Promise.withResolvers();
  const timer = setTimeout(
    () => deadline.reject(new Error('Timeout: the page did not settle in time')),
    ms,
  );
  try {
    return await Promise.race([page.evaluate(fn), deadline.promise]);
  } catch (err) {
    const message = String(/** @type {Error} */ (err)?.message || err);
    if (
      /Timeout|Execution context was destroyed|Target closed|frame was detached|has been closed/i.test(
        message,
      )
    ) {
      throw err;
    }
    throw new Error("the page's own scripts kept stm from settling it");
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Load one page, settle it, screenshot it. Never throws for page problems;
 * those come back as a failed PageResult.
 * @param {object} args
 * @param {BrowserContext} args.context
 * @param {string} args.baseUrl the app's origin
 * @param {string} args.path
 * @param {Viewport} args.viewport
 * @param {string} args.file absolute path for the full-page PNG
 * @param {string} args.fold absolute path for the viewport PNG
 * @param {number} args.timeoutMs
 * @param {boolean} args.collectLinks
 * @param {string} args.outDir
 * @returns {Promise<{ result: PageResult, links: string[] }>}
 */
export async function capturePage(args) {
  const { context, baseUrl, path, viewport, timeoutMs, collectLinks, outDir } = args;
  const started = Date.now();
  const deadline = started + timeoutMs;
  const left = () => Math.max(1, deadline - Date.now());
  // Set the pathname on a copy of the base. `new URL(path, base)` would let a
  // path like "//evil.com/x" change the host; this never can.
  const target = new URL(baseUrl);
  target.pathname = path;
  const url = target.href;

  /** @type {PageResult} */
  const result = {
    path,
    viewport,
    file: null,
    fold: null,
    status: 'failed',
    httpStatus: null,
    ms: 0,
    width: null,
    height: null,
    truncated: false,
    sha256: null,
    warnings: [],
    changed: null,
    error: null,
  };
  /** @type {string[]} */
  let links = [];
  /** @type {Page | null} */
  let page = null;

  try {
    page = await context.newPage();
    const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: left() });
    result.httpStatus = response ? response.status() : null;

    if (!sameOrigin(page.url(), baseUrl)) {
      result.status = 'redirected';
      result.finalUrl = new URL(page.url()).origin;
      result.error = 'redirected to another site';
      return finish();
    }
    const type = response ? response.headers()['content-type'] || '' : '';
    if (response && type && !/html/i.test(type)) {
      const mime = type.split(';')[0].trim().toLowerCase();
      result.status = 'skipped';
      result.error = `not a page (${/^[\w.+-]+\/[\w.+-]+$/.test(mime) ? mime.slice(0, 60) : 'unknown type'})`;
      return finish();
    }

    // Best effort waits. Dev servers hold connections open, so we never block long on these.
    await page.waitForLoadState('load', { timeout: Math.min(10000, left()) }).catch(() => {});
    await page.waitForLoadState('networkidle', { timeout: Math.min(2000, left()) }).catch(() => {});

    const size = await inPage(page, settlePage, left());
    result.width = dimension(size?.width);
    result.height = dimension(size?.height);

    const final = new URL(page.url());
    if (final.pathname !== path && final.pathname !== `${path}/`) {
      result.finalUrl = final.origin + final.pathname.slice(0, 2048);
    }

    const found = await inPage(page, detectOverlays, left());
    result.warnings = KNOWN_WARNINGS.filter((w) => Array.isArray(found) && found.includes(w));

    const tooTall = (result.height ?? 0) > MAX_CAPTURE_HEIGHT;
    result.truncated = tooTall;
    const width = result.width ?? page.viewportSize()?.width ?? DESKTOP.width;
    await page.screenshot({
      path: args.file,
      fullPage: true,
      animations: 'disabled',
      style: HIDE_CSS,
      clip: tooTall ? { x: 0, y: 0, width, height: MAX_CAPTURE_HEIGHT } : undefined,
      timeout: left(),
    });
    await page.screenshot({
      path: args.fold,
      fullPage: false,
      animations: 'disabled',
      style: HIDE_CSS,
      timeout: left(),
    });
    result.file = args.file;
    result.fold = args.fold;

    if (collectLinks) {
      const hrefs = await inPage(page, collectHrefs, left());
      links = (Array.isArray(hrefs) ? hrefs : [])
        .filter((h) => typeof h === 'string')
        .map((h) => pathFromLink(h, baseUrl, outDir))
        .filter((p) => p !== null);
    }

    const status = result.httpStatus ?? 0;
    if (status >= 400) {
      result.status = 'failed';
      result.error =
        status === 404 ? 'page not found, 404' : `the app returned an error, ${status}`;
    } else {
      result.status = 'ok';
    }
    return finish();
  } catch (err) {
    result.status = 'failed';
    result.error = describeError(err, timeoutMs);
    return finish();
  } finally {
    if (page) {
      await Promise.race([page.close(), new Promise((r) => setTimeout(r, 5000).unref())]).catch(
        () => {},
      );
    }
  }

  function finish() {
    result.ms = Date.now() - started;
    return { result, links };
  }
}

/**
 * Only accept a sane number back from the page; scripts there can override
 * anything, including scrollHeight.
 * @param {unknown} value
 */
function dimension(value) {
  return Number.isInteger(value) &&
    /** @type {number} */ (value) >= 0 &&
    /** @type {number} */ (value) < 1e7
    ? /** @type {number} */ (value)
    : null;
}

/**
 * Runs inside the page. Wakes lazy content by scrolling through the page,
 * waits for images, freezes animations, scrolls back up.
 */
function settlePage() {
  return (async () => {
    for (const el of document.querySelectorAll('img[loading="lazy"],iframe[loading="lazy"]')) {
      /** @type {any} */ (el).loading = 'eager';
    }
    const step = Math.max(200, window.innerHeight);
    let y = 0;
    let lastHeight = -1;
    for (let i = 0; i < 25 && y <= 20000; i++) {
      // "instant" matters: with scroll-behavior:smooth the page would still be
      // gliding when we measure it.
      window.scrollTo({ top: y, left: 0, behavior: 'instant' });
      await new Promise((r) => setTimeout(r, 80));
      const h = document.documentElement.scrollHeight;
      if (y >= h && h === lastHeight) break;
      lastHeight = h;
      y += step;
    }
    const pending = Array.from(document.images).filter((img) => !img.complete);
    /** @param {HTMLImageElement} img */
    const settled = (img) =>
      new Promise((done) => {
        img.addEventListener('load', done, { once: true });
        img.addEventListener('error', done, { once: true });
      });
    await Promise.race([
      Promise.all(pending.map(settled)),
      new Promise((r) => setTimeout(r, 3000)),
    ]);
    // Wait for webfonts as well. Without this a page can render with a
    // fallback font on one run and the real font on the next, which moves
    // pixels and reports a page as changed when nothing about it changed.
    if (document.fonts?.ready) {
      await Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 3000))]);
    }
    try {
      for (const a of document.getAnimations()) a.pause();
    } catch {
      // a page can break or override this API; the screenshot still happens
    }
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    return {
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight,
    };
  })();
}

/**
 * Runs inside the page. Reports dev error overlays (never hidden, always
 * flagged) and app shells that scroll inside a panel instead of the window
 * (full-page screenshots can't see past those). Also marks the Next.js dev
 * badge for hiding, but only when it is not showing an error.
 */
function detectOverlays() {
  const warnings = [];
  const portal = document.querySelector('nextjs-portal');
  if (portal) {
    const root = portal.shadowRoot;
    if (root?.querySelector('[data-nextjs-dialog-overlay]')) warnings.push('dev-error-overlay');
    else portal.setAttribute('data-stm-hide', '');
  }
  if (document.querySelector('vite-error-overlay,#webpack-dev-server-client-overlay')) {
    warnings.push('dev-error-overlay');
  }
  const doc = document.documentElement;
  if (doc.scrollHeight <= window.innerHeight + 5) {
    const scrollers = Array.from(document.querySelectorAll('body *')).slice(0, 3000);
    const inner = scrollers.some((el) => {
      const overflow = getComputedStyle(el).overflowY;
      return (
        (overflow === 'auto' || overflow === 'scroll') && el.scrollHeight > el.clientHeight + 200
      );
    });
    if (inner) warnings.push('inner-scroll');
  }
  return warnings;
}

/** Runs inside the page. Every link target, resolved by the browser. */
function collectHrefs() {
  return Array.from(document.querySelectorAll('a[href]:not([download])')).map(
    (a) => /** @type {HTMLAnchorElement} */ (a).href,
  );
}

/**
 * Turn Playwright's errors into something a person can act on. Anything we do
 * not recognise becomes a fixed phrase, because the page's own scripts can
 * throw and their text must never reach the manifest.
 * @param {unknown} err
 * @param {number} timeoutMs
 */
export function describeError(err, timeoutMs) {
  const message = String(/** @type {Error} */ (err)?.message || err).split('\n')[0];
  if (/Timeout|timeout|TIMED_OUT/.test(message))
    return `took longer than ${Math.round(timeoutMs / 1000)}s`;
  if (/ERR_CONNECTION_REFUSED|ECONNREFUSED/.test(message)) return 'the app stopped responding';
  if (/ERR_NAME_NOT_RESOLVED/.test(message)) return 'could not resolve the host';
  if (/kept stm from settling/.test(message)) return message;
  const net = message.match(/net::ERR_[A-Z0-9_]+/);
  if (net) return net[0];
  const playwright = message.match(
    /Target closed|Execution context was destroyed|frame was detached/i,
  );
  if (playwright) return playwright[0];
  return 'could not capture this page';
}

/**
 * Errors worth one retry: flaky navigation, not a broken page.
 * @param {string | null} error
 */
export function isRetryable(error) {
  return /took longer|stopped responding|net::ERR_|Target closed|Execution context was destroyed|frame was detached/i.test(
    error || '',
  );
}
