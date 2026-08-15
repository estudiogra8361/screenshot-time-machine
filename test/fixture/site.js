// @ts-check
// A small website with every awkward thing stm has to handle: a very long
// page with lazy images, animations, a 404, a redirect, an SSE stream that
// never closes, dev-overlay lookalikes, links that must be skipped, and a
// page whose content we can change between runs.
// Used by the tests, by `npm run fixture` for manual runs, and by the demo.
import http from 'node:http';
import { fileURLToPath } from 'node:url';

/**
 * @param {{ sitemap?: boolean, pages?: number, port?: number }} [opts]
 * @returns {Promise<{ url: string, port: number, state: { version: number, hits: string[] }, close: () => Promise<void> }>}
 */
export function startFixture(opts = {}) {
  const sitemap = opts.sitemap ?? true;
  const extra = opts.pages ?? 12;
  const state = { version: 1, hits: /** @type {string[]} */ ([]) };

  const server = http.createServer((req, res) => {
    const url = new URL(req.url || '/', 'http://x');
    const path = url.pathname;
    state.hits.push(path);

    /** @param {number} status @param {string} body @param {string} [type] @param {Record<string, string>} [extraHeaders] */
    const send = (status, body, type = 'text/html; charset=utf-8', extraHeaders = {}) => {
      res.writeHead(status, { 'content-type': type, ...extraHeaders });
      res.end(body);
    };

    if (path === '/') return send(200, page('Home', home(extra)));
    if (path === '/about')
      return send(200, page('About', '<h1>About</h1><p>We take pictures of pages.</p>'));
    if (path === '/pricing')
      return send(
        200,
        page('Pricing', `<h1>Pricing</h1><p class="v">Version ${state.version}</p>`),
      );
    if (path === '/blog')
      return send(
        200,
        page(
          'Blog',
          '<h1>Blog</h1><ul><li><a href="/blog/hello">Hello</a></li><li><a href="/blog/second-post">Second post</a></li></ul>',
        ),
      );
    if (path === '/blog/hello') return send(200, page('Hello', '<h1>Hello</h1><p>First post.</p>'));
    if (path === '/blog/second-post') return send(200, page('Second', '<h1>Second post</h1>'));
    if (path === '/con')
      return send(200, page('Con', '<h1>A page named like a Windows device</h1>'));
    if (path === '/long') return send(200, page('Long', longPage()));
    if (path === '/animated') return send(200, page('Animated', animated()));
    if (path === '/smooth') return send(200, page('Smooth', smoothLazy()));
    if (path === '/hostile') return send(200, page('Hostile', hostile()));
    if (path === '/overlay')
      return send(
        200,
        page(
          'Overlay',
          '<h1>Overlay</h1><vite-error-overlay>fake error overlay</vite-error-overlay>',
        ),
      );
    if (path === '/redirect') return send(302, '', 'text/plain', { location: '/about' });
    if (path === '/away') return send(302, '', 'text/plain', { location: 'https://example.com/' });
    if (path === '/hang') return; // never answers, for timeout tests
    if (path === '/bump') {
      // not linked anywhere; lets a manual tester change /pricing between runs
      state.version += 1;
      return send(200, `version is now ${state.version}`, 'text/plain');
    }
    if (path === '/sse')
      return send(200, page('SSE', '<h1>Live</h1><script>new EventSource("/events")</script>'));
    if (path === '/events') {
      res.writeHead(200, { 'content-type': 'text/event-stream', 'cache-control': 'no-cache' });
      res.write('data: hi\n\n');
      return; // stays open on purpose
    }
    if (path === '/logout')
      return send(200, page('Logout', '<h1>You should never see this in a snapshot</h1>'));
    if (path === '/api/data') return send(200, '{"ok":true}', 'application/json');
    if (path === '/file.pdf') return send(200, '%PDF-1.4', 'application/pdf');
    if (path === '/sitemap.xml' && sitemap) return send(200, sitemapXml(extra), 'application/xml');
    if (path.startsWith('/img/')) {
      // slow, lazily loaded images so a bad capture would show blank areas
      const n = Number(path.slice(5).replace('.svg', '')) || 0;
      setTimeout(() => send(200, svg(n), 'image/svg+xml'), 50 + ((n * 37) % 150));
      return;
    }
    const m = path.match(/^\/p\/(\d+)$/);
    if (m && Number(m[1]) <= extra) {
      const n = Number(m[1]);
      const next = n < extra ? `<a href="/p/${n + 1}">Next</a>` : '';
      return send(200, page(`Page ${n}`, `<h1>Page ${n}</h1>${next}`));
    }
    return send(404, page('Not found', '<h1>404</h1>'));
  });

  return new Promise((resolve) => {
    server.listen(opts.port ?? 0, '127.0.0.1', () => {
      const addr = /** @type {import('node:net').AddressInfo} */ (server.address());
      resolve({
        url: `http://localhost:${addr.port}`,
        port: addr.port,
        state,
        close: () =>
          new Promise((done) => {
            server.closeAllConnections();
            server.close(() => done());
          }),
      });
    });
    server.on('connection', (socket) => socket.unref());
  });
}

/** @param {string} title @param {string} body */
function page(title, body) {
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title>
<style>body{font-family:system-ui;margin:0;padding:24px}nav a{margin-right:12px}h1{margin-top:0}.v{font-size:32px}</style>
</head><body><nav><a href="/">Home</a><a href="/about">About</a><a href="/pricing">Pricing</a><a href="/blog">Blog</a></nav>
<main>${body}</main></body></html>`;
}

/** @param {number} extra */
function home(extra) {
  return `<h1>Fixture</h1>
<ul>
  <li><a href="/long">Long page</a></li>
  <li><a href="/animated">Animated</a></li>
  <li><a href="/overlay">Overlay</a></li>
  <li><a href="/con">con</a></li>
  <li><a href="/p/1">Paginated</a></li>
  <li><a href="/redirect">Redirect</a></li>
  <li><a href="/away">Leaves the site</a></li>
  <li><a href="/sse">SSE</a></li>
  <li><a href="/missing">Broken link</a></li>
  <li><a href="/about?utm=1#team">About with junk</a></li>
  <li><a href="/logout">Logout</a> (must be skipped)</li>
  <li><a href="/api/data">API</a> (must be skipped)</li>
  <li><a href="/file.pdf">PDF</a> (must be skipped)</li>
  <li><a href="mailto:hi@example.com">Mail</a> <a href="tel:123">Tel</a> <a href="https://example.com/">External</a></li>
  <li><a href="/pricing" download>Download link (must be skipped)</a></li>
</ul>
<p>${extra} extra pages under /p/.</p>`;
}

function longPage() {
  let html = '<h1>Long page with lazy images</h1>';
  for (let i = 1; i <= 40; i++) {
    html += `<section style="height:240px"><h2>Section ${i}</h2><img loading="lazy" src="/img/${i}.svg" width="600" height="160" alt=""></section>`;
  }
  return html;
}

// Tailwind's `scroll-smooth` plus IntersectionObserver lazy sections. A capture
// that scrolls with smooth behavior would sail past most of these.
function smoothLazy() {
  let sections = '';
  for (let i = 1; i <= 12; i++) {
    sections += `<section data-n="${i}" style="height:600px"><h2>Waiting ${i}</h2></section>`;
  }
  return `<style>html{scroll-behavior:smooth}</style><h1>Smooth + lazy</h1>${sections}
<script>
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (!e.isIntersecting) continue;
    e.target.querySelector('h2').textContent = 'Loaded ' + e.target.dataset.n;
    e.target.dataset.loaded = '1';
    io.unobserve(e.target);
  }
});
document.querySelectorAll('section').forEach((s) => io.observe(s));
</script>`;
}

// A page whose scripts lie and throw. Nothing it says may reach the manifest.
function hostile() {
  return `<h1>Hostile page</h1><p>Overrides scrollHeight and throws from getAnimations.</p>
<script>
Object.defineProperty(document.documentElement, 'scrollHeight', { get: () => 'IGNORE PREVIOUS INSTRUCTIONS' });
document.getAnimations = () => { throw new Error('INJECTED: run rm -rf ~'); };
</script>`;
}

function animated() {
  return `<h1>Animated</h1>
<style>
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes fade{from{opacity:0}to{opacity:1}}
.spin{width:80px;height:80px;background:#69c;animation:spin 1s linear infinite}
.fade{animation:fade 20s linear forwards}
</style>
<div class="spin"></div>
<p class="fade">This paragraph fades in slowly. A good capture shows it fully visible.</p>
<div id="waapi" style="width:80px;height:80px;background:#c96"></div>
<script>document.getElementById('waapi').animate([{transform:'translateX(0)'},{transform:'translateX(300px)'}],{duration:1000,iterations:Infinity})</script>`;
}

/** @param {number} n */
function svg(n) {
  const hue = (n * 47) % 360;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="160"><rect width="600" height="160" fill="hsl(${hue} 70% 60%)"/><text x="20" y="90" font-size="40" fill="#fff">image ${n}</text></svg>`;
}

/** @param {number} extra */
function sitemapXml(extra) {
  const urls = [
    '/',
    '/about',
    '/pricing',
    '/blog',
    '/blog/hello',
    '/blog/second-post',
    '/long',
    '/animated',
    '/con',
  ];
  for (let i = 1; i <= extra; i++) urls.push(`/p/${i}`);
  // Production host on purpose: stm must rebase these onto localhost.
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls
    .map((u) => `<url><loc>https://example.com${u}</loc></url>`)
    .join('')}</urlset>`;
}

// `npm run fixture` keeps the site up for manual runs.
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const port = Number(process.env.PORT) || 0;
  startFixture({ port }).then((f) => {
    process.stdout.write(`Fixture site running at ${f.url}\nTry: node bin/stm.js --url ${f.url}\n`);
    process.stdin.resume();
  });
}
