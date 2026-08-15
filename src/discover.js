// @ts-check
// Which links count as "a page of your app". Pure functions, no browser here.

const SKIP_PROTOCOLS = new Set(['mailto:', 'tel:', 'javascript:', 'blob:', 'data:']);
const SKIP_EXTENSIONS =
  /\.(pdf|zip|gz|tar|rar|7z|dmg|exe|msi|png|jpe?g|gif|svg|webp|avif|ico|css|js|mjs|map|json|xml|txt|csv|md|mp3|mp4|webm|mov|wav|woff2?|ttf|otf)$/i;
// GET links that change state on apps without auth. Never follow these.
const SKIP_DESTRUCTIVE =
  /(^|\/)(logout|log-out|log_out|signout|sign-out|sign_out|delete|destroy|remove|reset|clear|purge|deactivate|unsubscribe|revoke)(\/|$)/i;

/**
 * localhost, 127.0.0.1 and [::1] are the same app to us.
 * @param {URL} u
 */
export function originKey(u) {
  const host = /^(localhost|127\.0\.0\.1|\[::1\])$/i.test(u.hostname)
    ? 'localhost'
    : u.hostname.toLowerCase();
  const port = u.port || (u.protocol === 'https:' ? '443' : '80');
  return `${u.protocol}//${host}:${port}`;
}

/** @param {string} a @param {string} b */
export function sameOrigin(a, b) {
  try {
    return originKey(new URL(a)) === originKey(new URL(b));
  } catch {
    return false;
  }
}

/**
 * Turn a link into a page path, or null if it is not a page we should visit.
 * @param {string} href absolute or relative
 * @param {string} baseUrl the app's URL
 * @param {string} outDir the screenshots folder name, so we never crawl our own output
 * @returns {string | null}
 */
export function pathFromLink(href, baseUrl, outDir = 'screenshots') {
  let u;
  try {
    u = new URL(href, baseUrl);
  } catch {
    return null;
  }
  if (SKIP_PROTOCOLS.has(u.protocol)) return null;
  if (u.protocol !== 'http:' && u.protocol !== 'https:') return null;
  if (originKey(u) !== originKey(new URL(baseUrl))) return null;
  const path = normalizePath(u.pathname);
  if (path.length > 2048) return null;
  if (SKIP_EXTENSIONS.test(path)) return null;
  if (SKIP_DESTRUCTIVE.test(path)) return null;
  if (path.startsWith('/api/') || path === '/api') return null;
  if (outDir && (path === `/${outDir}` || path.startsWith(`/${outDir}/`))) return null;
  return path;
}

/**
 * Trailing slash off (except "/"), query and hash gone, case kept.
 * Accepts routes typed on the command line too: "about" -> "/about".
 * @param {string} p
 */
export function normalizePath(p) {
  let path = p.split('#')[0].split('?')[0];
  // Git Bash on Windows rewrites "/pricing" into "C:/Program Files/Git/pricing"
  const gitBash = path.match(/^[A-Za-z]:\/.*?\/Git(\/.*)$/i);
  if (gitBash) path = gitBash[1];
  // "//host/x" would be read as a different host by URL parsers; make it a plain path
  path = path.replace(/^\/{2,}/, '/');
  if (!path.startsWith('/')) path = `/${path}`;
  if (path.length > 1) path = path.replace(/\/+$/, '');
  return path || '/';
}

/**
 * Pull page paths out of a sitemap. Dev sitemaps often list the production
 * host, so we only keep the pathname. Nested sitemap files are returned
 * separately (same origin only) for the caller to fetch.
 * @param {string} xml
 * @param {string} baseUrl
 * @returns {{ paths: string[], sitemaps: string[] }}
 */
export function parseSitemap(xml, baseUrl) {
  /** @type {string[]} */
  const paths = [];
  /** @type {string[]} */
  const sitemaps = [];
  const isIndex = /<sitemapindex[\s>]/i.test(xml);
  for (const m of xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)) {
    const loc = decodeEntities(m[1]);
    let u;
    try {
      u = new URL(loc, baseUrl);
    } catch {
      continue;
    }
    if (isIndex) {
      if (sameOrigin(u.href, baseUrl)) sitemaps.push(u.href);
      continue;
    }
    // rebase onto the app we're actually looking at
    const rebased = new URL(u.pathname, baseUrl).href;
    const path = pathFromLink(rebased, baseUrl, '');
    if (path && !paths.includes(path)) paths.push(path);
  }
  return { paths, sitemaps };
}

/** @param {string} s */
function decodeEntities(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'");
}

/**
 * Fetch /sitemap.xml (and one level of nested sitemaps). Returns [] when there
 * is none. Never throws.
 * @param {string} baseUrl
 * @returns {Promise<string[]>}
 */
export async function sitemapPaths(baseUrl) {
  const xml = await fetchSmall(new URL('/sitemap.xml', baseUrl).href);
  if (!xml) return [];
  const top = parseSitemap(xml, baseUrl);
  const paths = [...top.paths];
  for (const nested of top.sitemaps.slice(0, 20)) {
    const inner = await fetchSmall(nested);
    if (!inner) continue;
    for (const p of parseSitemap(inner, baseUrl).paths) if (!paths.includes(p)) paths.push(p);
  }
  return paths;
}

const MAX_SITEMAP_BYTES = 5 * 1024 * 1024;

/** @param {string} url */
async function fetchSmall(url) {
  try {
    // Follow at most one redirect, and only within the app.
    let res = await fetch(url, { signal: AbortSignal.timeout(5000), redirect: 'manual' });
    const hop = res.headers.get('location');
    if (res.status >= 300 && res.status < 400 && hop) {
      const next = new URL(hop, url).href;
      if (!sameOrigin(next, url)) return null;
      res = await fetch(next, { signal: AbortSignal.timeout(5000), redirect: 'manual' });
    }
    if (!res.ok) return null;
    if (Number(res.headers.get('content-length') || 0) > MAX_SITEMAP_BYTES) return null;
    const type = res.headers.get('content-type') || '';
    if (!/xml|text/i.test(type)) return null;
    const text = await res.text();
    if (text.length > MAX_SITEMAP_BYTES) return null;
    return /<(urlset|sitemapindex)[\s>]/i.test(text) ? text : null;
  } catch {
    return null;
  }
}
