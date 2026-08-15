// @ts-check
// The programmatic API. `run()` is one snapshot from start to finish;
// the CLI only formats what comes back from here.
import { mkdirSync, readFileSync } from 'node:fs';
import { basename, join, resolve, sep } from 'node:path';
import {
  capturePage,
  concurrency,
  DESKTOP,
  isRetryable,
  launchBrowser,
  MOBILE,
  MOBILE_USER_AGENT,
} from './capture.js';
import { detect } from './detect.js';
import { normalizePath, sitemapPaths } from './discover.js';
import {
  appLabel,
  createSnapshotDir,
  ensureGitignore,
  gitInfo,
  listSnapshots,
  ManifestWriter,
  pageKey,
  previousPages,
  sha256File,
  shortHash,
  slug,
} from './store.js';

/** @typedef {import('./types.js').RunOptions} RunOptions */
/** @typedef {import('./types.js').RunResult} RunResult */
/** @typedef {import('./types.js').PageResult} PageResult */
/** @typedef {import('./types.js').ChangedEntry} ChangedEntry */
/** @typedef {import('./types.js').Viewport} Viewport */
/** @typedef {import('./types.js').Manifest} Manifest */

export const VERSION = JSON.parse(
  readFileSync(new URL('../package.json', import.meta.url), 'utf8'),
).version;
export const DEFAULT_TIMEOUT_MS = 30000;
export const DEFAULT_MAX = 100;
const JSON_LIST_CAP = 25;

/**
 * Take one snapshot.
 * @param {RunOptions} options
 * @returns {Promise<RunResult>}
 */
export async function run(options = {}) {
  const cwd = options.cwd || process.cwd();
  const outRoot = resolve(cwd, options.out || 'screenshots');
  const outDirName = basename(outRoot);
  const max = options.max || DEFAULT_MAX;
  const timeoutMs = options.timeoutMs || DEFAULT_TIMEOUT_MS;
  /** @param {string} line */
  const stderr = options.log || ((line) => process.stderr.write(`${line}\n`));
  // Quiet mode (agents, --json): only one start line and the browser-download notice get through.
  const log = options.quiet ? () => {} : stderr;
  const notice = stderr;
  const routes = options.routes?.length ? unique(options.routes.map(normalizePath)) : null;

  // Everything we know from earlier snapshots, before we create a new folder.
  const earlier = listSnapshots(outRoot);
  const latest = earlier.find((s) => s.manifest) || null;
  const lastFull = earlier.find((s) => s.manifest && s.manifest.routes === null) || null;
  const previous = previousPages(earlier);
  // Read git state before we write anything, or our own files would make it look dirty.
  const git = gitInfo(cwd);

  // 1. Where is the app?
  let url = options.url || null;
  /** @type {string[]} */
  let others = [];
  let start = '/';
  if (url) {
    if (!URL.canParse(url) || !/^https?:$/.test(new URL(url).protocol)) {
      return fail(
        'bad_args',
        `--url must be a full http:// or https:// address (got ${url})`,
        'Example: stm --url http://localhost:5173',
      );
    }
    // The origin is the app; a path in --url is where the crawl starts.
    const parsed = new URL(url);
    start = normalizePath(parsed.pathname);
    url = parsed.origin;
  } else {
    const found = await detect({ previousUrl: latest?.manifest?.url || null });
    if (!found) {
      return fail(
        'no_server',
        "Couldn't find your app running on localhost.",
        'Start your app (usually npm run dev), then run stm again. Or point stm at it: stm --url http://localhost:5173',
      );
    }
    url = found.url;
    others = found.others;
    log(`Found your app at ${url}`);
  }

  // Fail fast on an unwritable --out, before a browser is started.
  mkdirSync(outRoot, { recursive: true });

  // 2. A browser.
  let launched;
  try {
    launched = await launchBrowser({ log: notice });
  } catch (err) {
    const e = /** @type {Error & { code?: string, fix?: string }} */ (err);
    return fail(
      'no_browser',
      e.message,
      e.fix || 'Install Google Chrome or Microsoft Edge, then run stm again.',
    );
  }
  const { browser } = launched;

  // 3. The pages to visit. Command-line routes skip discovery entirely.
  let queue = routes ? [...routes] : unique([start, ...(await sitemapPaths(url))]);
  if (queue.length > max) queue = queue.slice(0, max);
  const seen = new Set(queue);
  if (options.quiet) {
    const what = routes ? `${queue.length} page${queue.length === 1 ? '' : 's'} on ${url}` : url;
    notice(`stm: snapshotting ${what}, please wait`);
  }
  if (!routes) {
    log(
      `Finding pages... ${queue.length === 1 ? 'starting from the home page' : `${queue.length} in the sitemap`}`,
    );
  }

  // 4. The snapshot folder and its manifest, written after every page.
  const first = earlier.length === 0;
  const { dir, stamp } = createSnapshotDir(outRoot, appLabel(url), options.now || new Date());
  const gitignoreAdded = first ? ensureGitignore(cwd, options.out || 'screenshots') : false;
  const viewports = /** @type {Viewport[]} */ (
    options.mobile ? ['desktop', 'mobile'] : ['desktop']
  );
  const writer = new ManifestWriter(dir, stamp, {
    tool: 'screenshot-time-machine',
    version: VERSION,
    url,
    startedAt: new Date().toISOString(),
    finishedAt: null,
    viewports,
    browser: { name: launched.name, version: launched.version },
    node: process.version,
    platform: process.platform,
    git,
    previous: latest ? latest.name : null,
    routes,
    pages: [],
  });

  // 5. Capture. One context per viewport; pages within a context share its cache.
  // Certificate errors are only ignored for localhost, where self-signed certs are normal.
  const loopback = /^(localhost|127\.0\.0\.1|\[::1\]|.*\.localhost)$/i.test(new URL(url).hostname);
  const contexts = {
    desktop: await browser.newContext({
      viewport: DESKTOP,
      deviceScaleFactor: 1,
      serviceWorkers: 'block',
      ignoreHTTPSErrors: loopback,
    }),
    mobile: options.mobile
      ? await browser.newContext({
          viewport: MOBILE,
          deviceScaleFactor: 1,
          isMobile: true,
          hasTouch: true,
          userAgent: MOBILE_USER_AGENT,
          serviceWorkers: 'block',
          ignoreHTTPSErrors: loopback,
        })
      : null,
  };

  // File names. Two paths that slug to the same name get a short hash suffix.
  // Order-dependent on purpose: the first path to arrive keeps the plain name.
  const stems = new Map();
  const takenStems = new Set();
  /** @param {string} path */
  const stemFor = (path) => {
    let stem = stems.get(path);
    if (stem) return stem;
    stem = slug(path);
    if (takenStems.has(stem)) stem = `${stem}-${shortHash(path)}`;
    takenStems.add(stem);
    stems.set(path, stem);
    return stem;
  };

  let stopping = false;
  const stop = () => {
    if (!stopping) log('Stopping after the pages in progress (press Ctrl+C again to quit now).');
    stopping = true;
  };
  options.signal?.addEventListener('abort', stop, { once: true });
  process.once('SIGINT', stop);
  process.once('SIGTERM', stop);

  /** @param {string} path @param {Viewport} viewport */
  async function captureOne(path, viewport) {
    const stem = stemFor(path);
    const suffix = viewport === 'mobile' ? '@mobile' : '';
    const fileName = `${stem}${suffix}_${stamp}.png`;
    const context = /** @type {NonNullable<typeof contexts.desktop>} */ (contexts[viewport]);
    const args = {
      context,
      baseUrl: /** @type {string} */ (url),
      path,
      viewport,
      file: join(dir, fileName),
      fold: join(dir, 'fold', fileName),
      timeoutMs: path === queue[0] && viewport === 'desktop' ? timeoutMs * 2 : timeoutMs,
      collectLinks: !routes && viewport === 'desktop',
      outDir: outDirName,
    };
    let { result, links } = await capturePage(args);
    if (result.status === 'failed' && isRetryable(result.error) && !stopping) {
      ({ result, links } = await capturePage(args));
    }
    if (result.file) {
      result.sha256 = sha256File(result.file);
      result.file = fileName;
      result.fold = `fold/${fileName}`;
      const before = previous.get(pageKey(viewport, path));
      result.changed = before?.sha256 ? before.sha256 !== result.sha256 : null;
    }
    writer.add(result);
    const mark = result.status === 'ok' ? '✓' : result.status === 'failed' ? '✗' : '-';
    log(
      `${mark} ${path}${suffix ? ' (mobile)' : ''}  ${(result.ms / 1000).toFixed(1)}s${result.error ? `  ${result.error}` : ''}`,
    );
    for (const link of links) {
      if (seen.size >= max || seen.has(link)) continue;
      seen.add(link);
      queue.push(link);
    }
  }

  // Warm up on the first page alone (dev servers compile on first hit), then fan out.
  // A worker that finds the queue empty waits while others are still loading pages,
  // because those pages may add more links.
  let next = 0;
  let inFlight = 0;
  await captureOne(queue[next++], 'desktop');
  const worker = async () => {
    while (!stopping) {
      if (next < queue.length) {
        const path = queue[next++];
        inFlight++;
        try {
          await captureOne(path, 'desktop');
        } finally {
          inFlight--;
        }
      } else if (inFlight > 0) {
        await new Promise((r) => setTimeout(r, 50));
      } else {
        break;
      }
    }
  };
  await Promise.all(Array.from({ length: concurrency() }, worker));

  if (options.mobile && !stopping) {
    // Only pages that produced a desktop screenshot; a 404 does not need a phone view too.
    const captured = queue.filter((p) =>
      writer.manifest.pages.some((r) => r.path === p && r.viewport === 'desktop' && r.file),
    );
    let m = 0;
    const mobileWorker = async () => {
      while (m < captured.length && !stopping) await captureOne(captured[m++], 'mobile');
    };
    await Promise.all(Array.from({ length: concurrency() }, mobileWorker));
  }

  writer.finish();
  process.off('SIGINT', stop);
  process.off('SIGTERM', stop);
  // Give the browser five seconds to close, without letting that timer keep the process alive.
  await Promise.race([browser.close(), new Promise((r) => setTimeout(r, 5000).unref())]).catch(
    () => {},
  );

  // "removed" only means something after a full, uncapped, uninterrupted crawl.
  const complete = !routes && !stopping && seen.size < max;
  return summarize({
    writer,
    dir,
    latest,
    lastFull,
    previous,
    first,
    gitignoreAdded,
    others,
    routes,
    launched,
    stopping,
    complete,
  });
}

/**
 * @param {'no_server' | 'no_browser' | 'bad_args'} error
 * @param {string} message
 * @param {string} fix
 * @returns {RunResult}
 */
function fail(error, message, fix) {
  return { code: 1, error, message, fix };
}

/**
 * Turn the manifest into the summary the CLI prints and --json emits.
 * @param {object} a
 * @param {ManifestWriter} a.writer
 * @param {string} a.dir
 * @param {{ name: string, stamp: string, manifest: Manifest | null } | null} a.latest
 * @param {{ name: string, stamp: string, manifest: Manifest | null } | null} a.lastFull
 * @param {Map<string, PageResult>} a.previous
 * @param {boolean} a.first
 * @param {boolean} a.gitignoreAdded
 * @param {string[]} a.others
 * @param {string[] | null} a.routes
 * @param {{ name: string, version: string }} a.launched
 * @param {boolean} a.stopping
 * @param {boolean} a.complete
 * @returns {RunResult}
 */
function summarize({
  writer,
  dir,
  latest,
  lastFull,
  previous,
  first,
  gitignoreAdded,
  others,
  routes,
  launched,
  stopping,
  complete,
}) {
  const pages = writer.manifest.pages;
  const url = writer.manifest.url;
  const desktop = pages.filter((p) => p.viewport === 'desktop');
  /** @param {string} rel */
  const abs = (rel) => join(dir, rel);
  /** @param {PageResult} p @returns {ChangedEntry} */
  const entry = (p) => ({
    path: p.path,
    file: forwardSlashes(abs(p.file || '')),
    fold: forwardSlashes(abs(p.fold || '')),
    height: p.height,
  });

  const ok = pages.filter((p) => p.status === 'ok').length;
  const failed = pages.filter((p) => p.status === 'failed').length;
  const saved = desktop.filter((p) => p.file).length;
  const good = desktop.filter((p) => p.status === 'ok');
  const changed = good.filter((p) => p.changed === true).map(entry);
  const fresh = good.filter((p) => p.changed === null && previous.size > 0).map(entry);
  const removed = complete
    ? (lastFull?.manifest?.pages || [])
        .filter((p) => p.viewport === 'desktop' && !desktop.some((d) => d.path === p.path))
        .map((p) => p.path)
    : [];
  // Everything that did not produce a normal screenshot, so nothing goes unmentioned.
  const failures = pages
    .filter((p) => p.status !== 'ok')
    .map((p) => ({ path: p.path, error: p.error || p.status }));
  const warnings = desktop
    .filter((p) => p.warnings.length > 0)
    .map((p) => ({ path: p.path, warnings: p.warnings }));

  const previousBrowser = latest?.manifest?.browser;
  const browserChanged =
    previousBrowser && previousBrowser.version !== launched.version
      ? `${previousBrowser.version}→${launched.version}`
      : null;

  const landings = good
    .map((p) => (p.finalUrl ? new URL(p.finalUrl).pathname : null))
    .filter((p) => p !== null);
  const authWall = mostCommon(landings, Math.ceil(desktop.length / 2));

  const truncated = Math.max(0, changed.length + fresh.length - JSON_LIST_CAP);
  const changedOut = changed.slice(0, JSON_LIST_CAP);
  const freshOut = fresh.slice(0, Math.max(0, JSON_LIST_CAP - changedOut.length));

  let hint =
    'View the fold image of each changed/new page; full-page PNGs taller than ~2000px are downscaled by the model.';
  if (latest && changed.length === 0 && fresh.length === 0) {
    hint = `No pages changed since ${latest.stamp}. If you expected a change, pass the route explicitly and confirm the app reloaded.`;
  }
  if (stopping) hint = 'Run was interrupted; the manifest lists the pages that finished.';

  return {
    code: failed > 0 || stopping ? 2 : 0,
    url,
    dir: forwardSlashes(dir),
    previous: latest ? forwardSlashes(join(dir, '..', latest.name)) : null,
    ok,
    failed,
    saved,
    total: pages.length,
    changed: changedOut,
    new: freshOut,
    removed,
    truncated,
    failures,
    warnings,
    interrupted: stopping,
    browserChanged,
    manifest: forwardSlashes(writer.file),
    hint,
    first,
    gitignoreAdded,
    others,
    onlyHome: !routes && desktop.length === 1,
    authWall,
    browserNotice:
      browserChanged && changed.length > 0 && changed.length === good.length
        ? browserChanged
        : null,
  };
}

/**
 * The most common value if it appears at least `min` times, else null.
 * @param {string[]} values
 * @param {number} min
 * @returns {string | null}
 */
function mostCommon(values, min) {
  /** @type {Map<string, number>} */
  const counts = new Map();
  for (const v of values) counts.set(v, (counts.get(v) || 0) + 1);
  let best = null;
  for (const [v, n] of counts) {
    if (n >= min && (best === null || n > (counts.get(best) || 0))) best = v;
  }
  return best;
}

/**
 * Paths we print or hand to an agent always use forward slashes, on every
 * platform. Windows accepts them, JSON does not have to escape them, and the
 * output reads the same everywhere.
 * @param {string} p
 */
export function forwardSlashes(p) {
  return sep === '/' ? p : p.split(sep).join('/');
}

/** @template T @param {T[]} list @returns {T[]} */
function unique(list) {
  return [...new Set(list)];
}

/**
 * Past snapshots, newest first, for `stm list`.
 * @param {{ cwd?: string, out?: string }} options
 */
export function list(options = {}) {
  const outRoot = resolve(options.cwd || process.cwd(), options.out || 'screenshots');
  return listSnapshots(outRoot).map((s) => {
    const pages = s.manifest?.pages || [];
    return {
      name: s.name,
      stamp: s.stamp,
      dir: s.dir,
      url: s.manifest?.url || null,
      pages: pages.filter((p) => p.viewport === 'desktop' && p.file).length,
      ok: pages.filter((p) => p.status === 'ok').length,
      failed: pages.filter((p) => p.status === 'failed').length,
      changed: pages.filter((p) => p.changed === true && p.viewport === 'desktop').length,
      valid: s.manifest !== null,
    };
  });
}
