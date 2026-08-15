// @ts-check
// End to end against the fixture site with a real browser. This is the test
// that matters: if the capture pipeline flakes, this is where it shows.
import assert from 'node:assert/strict';
import { existsSync, mkdtempSync, readdirSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { after, before, test } from 'node:test';
import { list, run } from '../src/index.js';
import { startFixture } from './fixture/site.js';

/** @type {Awaited<ReturnType<typeof startFixture>>} */
let site;
const cwd = mkdtempSync(join(tmpdir(), 'stm-e2e-'));
const quiet = { cwd, quiet: true, timeoutMs: 15000 };
/** @param {number} n */
const at = (n) => new Date(2026, 7, 15, 10, n);
/** @param {string} dir */
const manifestOf = (dir) => {
  const file = readdirSync(dir).find((f) => f.startsWith('manifest_'));
  return JSON.parse(readFileSync(join(dir, file || 'missing'), 'utf8'));
};
/** @param {string} dir the snapshot folder */
const stampOfDir = (dir) => dir.replace(/^.*_(\d{4}-\d{2}-\d{2}_\d{2}-\d{2}(-\d+)?)$/, '$1');

before(async () => {
  site = await startFixture({ pages: 6 });
});
after(async () => {
  await site.close();
});

test('first snapshot: discovers, captures, records, skips what it should', async () => {
  const r = await run({ ...quiet, url: site.url, now: at(0) });
  assert.equal(r.code, 2, 'the linked 404 makes it exit 2');
  assert.equal(r.first, true);
  assert.ok(r.dir && existsSync(join(r.dir, `manifest_${stampOfDir(r.dir)}.json`)));
  assert.match(r.dir, /localhost-\d+_2026-08-15_10-00$/, 'folder is <app>_<timestamp>');

  const m = manifestOf(r.dir || '');
  const paths = m.pages.map((/** @type {any} */ p) => p.path);
  for (const p of [
    '/',
    '/about',
    '/pricing',
    '/blog',
    '/blog/hello',
    '/long',
    '/animated',
    '/con',
    '/p/1',
    '/p/6',
    '/sse',
    '/redirect',
    '/missing',
  ]) {
    assert.ok(paths.includes(p), `captured ${p}`);
  }
  for (const p of ['/logout', '/api/data', '/file.pdf', '/screenshots']) {
    assert.ok(!paths.includes(p), `skipped ${p}`);
  }

  const by = Object.fromEntries(m.pages.map((/** @type {any} */ p) => [p.path, p]));
  assert.equal(by['/missing'].status, 'failed');
  assert.equal(by['/missing'].httpStatus, 404);
  assert.match(by['/missing'].error, /404/);
  assert.equal(by['/away'].status, 'redirected');
  assert.equal(by['/away'].file, null);
  assert.equal(by['/redirect'].status, 'ok');
  assert.match(by['/redirect'].finalUrl, /\/about$/);
  assert.deepEqual(by['/overlay'].warnings, ['dev-error-overlay']);
  assert.ok(by['/long'].height > 8000, `long page is full height (${by['/long'].height})`);
  assert.equal(by['/con'].file, `page-con_${stampOfDir(r.dir || '')}.png`);
  assert.ok(existsSync(join(r.dir || '', 'fold', `long_${stampOfDir(r.dir || '')}.png`)));
  assert.ok(m.browser?.version);
  assert.equal(m.previous, null);
  for (const p of m.pages) {
    assert.ok(!('title' in p), 'no page-derived text in the manifest');
    if (p.file) assert.match(p.sha256, /^[a-f0-9]{64}$/);
  }
});

test('second snapshot: nothing changed, so nothing is reported as changed', async () => {
  const r = await run({ ...quiet, url: site.url, now: at(1) });
  assert.equal(r.first, false);
  assert.deepEqual(r.changed, []);
  assert.deepEqual(r.new, []);
  assert.deepEqual(r.removed, []);
  assert.match(r.hint || '', /No pages changed/);
});

test('third snapshot: one page changed, exactly that page is reported with absolute paths', async () => {
  site.state.version = 2;
  const r = await run({ ...quiet, url: site.url, now: at(2) });
  assert.deepEqual(
    (r.changed || []).map((c) => c.path),
    ['/pricing'],
  );
  const c = (r.changed || [])[0];
  assert.ok(c.file.startsWith(r.dir || '#'));
  assert.ok(existsSync(c.file) && existsSync(c.fold));
  assert.equal(c.height, 900);
});

test('a capped crawl never reports removed pages', async () => {
  const r = await run({ ...quiet, url: site.url, max: 3, now: at(7) });
  assert.equal(r.total, 3);
  assert.deepEqual(r.removed, []);
});

test('--url with a path starts the crawl there and reports overlays as warnings', async () => {
  const r = await run({
    ...quiet,
    url: `${site.url}/overlay`,
    routes: undefined,
    max: 1,
    now: at(8),
  });
  const m = manifestOf(r.dir || '');
  assert.equal(m.url, site.url, 'the manifest keeps the origin');
  assert.equal(m.pages[0].path, '/overlay');
  assert.deepEqual(r.warnings, [{ path: '/overlay', warnings: ['dev-error-overlay'] }]);
});

test('route-scoped run: only those pages, compared against the last snapshot that had them', async () => {
  const r = await run({ ...quiet, url: site.url, routes: ['pricing', '/about/'], now: at(3) });
  assert.equal(r.code, 0);
  assert.equal(r.total, 2);
  assert.deepEqual(r.changed, []);
  assert.deepEqual(r.removed, [], 'route-scoped runs never report removed pages');
  const m = manifestOf(r.dir || '');
  assert.deepEqual(m.routes, ['/pricing', '/about']);
});

test('a page that never answers is recorded as a timeout and does not block the others', async () => {
  const r = await run({
    ...quiet,
    url: site.url,
    routes: ['/about', '/hang'],
    timeoutMs: 3000,
    now: at(4),
  });
  assert.equal(r.code, 2);
  assert.deepEqual(
    (r.failures || []).map((f) => f.path),
    ['/hang'],
  );
  assert.match((r.failures || [])[0].error, /took longer than 3s/);
  const m = manifestOf(r.dir || '');
  assert.equal(m.pages.find((/** @type {any} */ p) => p.path === '/about').status, 'ok');
});

test('smooth-scroll lazy sections all load; hostile page scripts never reach the output', async () => {
  const r = await run({ ...quiet, url: site.url, routes: ['/smooth', '/hostile'], now: at(9) });
  const m = manifestOf(r.dir || '');
  const by = Object.fromEntries(m.pages.map((/** @type {any} */ p) => [p.path, p]));
  assert.ok(
    by['/smooth'].height >= 12 * 600,
    `smooth page is full height (${by['/smooth'].height})`,
  );
  const text = JSON.stringify(r) + JSON.stringify(m);
  assert.ok(
    !/IGNORE PREVIOUS|INJECTED|rm -rf/.test(text),
    'no page text leaked into JSON or manifest',
  );
  assert.equal(by['/hostile'].height, null, 'a lying scrollHeight is dropped');
});

test('--mobile adds a second file per page', async () => {
  const r = await run({ ...quiet, url: site.url, routes: ['/pricing'], mobile: true, now: at(5) });
  assert.equal(r.total, 2);
  const dir = r.dir || '';
  const stamp = stampOfDir(dir);
  assert.ok(existsSync(join(dir, `pricing_${stamp}.png`)));
  assert.ok(existsSync(join(dir, `pricing@mobile_${stamp}.png`)));
  assert.ok(existsSync(join(dir, 'fold', `pricing@mobile_${stamp}.png`)));
});

test('list: newest first with counts', () => {
  const rows = list({ cwd });
  assert.equal(rows.length, 9);
  assert.equal(rows[0].stamp, '2026-08-15_10-09');
  assert.equal(rows[rows.length - 1].stamp, '2026-08-15_10-00');
  const third = rows.find((r) => r.stamp === '2026-08-15_10-02');
  assert.equal(third?.changed, 1, 'the third snapshot had one changed page');
});

test('an app that stopped answering: failed pages, not a crash', async () => {
  // grab a free port and release it, so nothing listens there
  const gone = await startFixture({ pages: 1 });
  await gone.close();
  const r = await run({ ...quiet, url: gone.url, routes: ['/'], timeoutMs: 2000, now: at(6) });
  assert.equal(r.code, 2);
  assert.match((r.failures || [])[0].error, /stopped responding/);
});
