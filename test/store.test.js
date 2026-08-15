// @ts-check
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import {
  appLabel,
  createSnapshotDir,
  ensureGitignore,
  listSnapshots,
  ManifestWriter,
  previousPages,
  readManifest,
  stampOf,
} from '../src/store.js';

const scratch = () => mkdtempSync(join(tmpdir(), 'stm-store-'));

/** @returns {import('../src/types.js').Manifest} */
const manifest = (url = 'http://localhost:3000') => ({
  tool: 'screenshot-time-machine',
  version: '0.0.0',
  url,
  startedAt: new Date().toISOString(),
  finishedAt: null,
  viewports: ['desktop'],
  browser: null,
  node: process.version,
  platform: process.platform,
  git: null,
  previous: null,
  routes: null,
  pages: [],
});

/** @param {Partial<import('../src/types.js').PageResult>} over */
const page = (over) => ({
  path: '/',
  viewport: /** @type {const} */ ('desktop'),
  file: 'index.png',
  fold: 'fold/index.png',
  status: /** @type {const} */ ('ok'),
  httpStatus: 200,
  ms: 1,
  width: 1440,
  height: 900,
  truncated: false,
  sha256: 'a',
  warnings: [],
  changed: null,
  error: null,
  ...over,
});

test('createSnapshotDir: <app>_<timestamp>, fold/ inside, same-minute runs get -2, -3 on the timestamp', () => {
  const root = join(scratch(), 'screenshots');
  const now = new Date(2026, 7, 15, 14, 32);
  const a = createSnapshotDir(root, 'localhost-3000', now);
  const b = createSnapshotDir(root, 'localhost-3000', now);
  const c = createSnapshotDir(root, 'localhost-3000', now);
  assert.equal(a.dir, join(root, 'localhost-3000_2026-08-15_14-32'));
  assert.equal(a.stamp, '2026-08-15_14-32');
  assert.equal(b.dir, join(root, 'localhost-3000_2026-08-15_14-32-2'));
  assert.equal(b.stamp, '2026-08-15_14-32-2');
  assert.equal(c.stamp, '2026-08-15_14-32-3');
  assert.ok(existsSync(join(a.dir, 'fold')));
});

test('appLabel and stampOf: the two halves of a folder name', () => {
  assert.equal(appLabel('http://localhost:3000'), 'localhost-3000');
  assert.equal(appLabel('http://[::1]:5173'), 'localhost-5173');
  assert.equal(appLabel('http://127.0.0.1:5173'), 'localhost-5173');
  assert.equal(appLabel('https://staging.example.com'), 'staging-example-com');
  assert.equal(stampOf('localhost-3000_2026-08-15_14-32'), '2026-08-15_14-32');
  assert.equal(stampOf('localhost-3000_2026-08-15_14-32-2'), '2026-08-15_14-32-2');
  assert.equal(stampOf('pricing_2026-08-15_14-32.png'), '2026-08-15_14-32');
  assert.equal(stampOf('random-folder'), null);
});

test('ManifestWriter: manifest_<timestamp>.json, written after every page, always valid JSON', () => {
  const { dir, stamp } = createSnapshotDir(join(scratch(), 's'), 'localhost-3000', new Date());
  const w = new ManifestWriter(dir, stamp, manifest());
  assert.ok(existsSync(join(dir, `manifest_${stamp}.json`)));
  assert.deepEqual(readManifest(dir)?.pages, []);
  w.add(page({ path: '/a' }));
  w.add(page({ path: '/b' }));
  assert.equal(readManifest(dir)?.pages.length, 2);
  assert.equal(readManifest(dir)?.finishedAt, null);
  w.finish();
  assert.ok(readManifest(dir)?.finishedAt);
});

test('listSnapshots + previousPages: newest first, corrupt manifests tolerated, older snapshots fill gaps', () => {
  const root = join(scratch(), 'screenshots');
  const older = createSnapshotDir(root, 'localhost-3000', new Date(2026, 7, 10, 9, 0));
  const newer = createSnapshotDir(root, 'localhost-3000', new Date(2026, 7, 12, 9, 0));
  const broken = createSnapshotDir(root, 'localhost-3000', new Date(2026, 7, 13, 9, 0));
  const olderWriter = new ManifestWriter(older.dir, older.stamp, manifest());
  olderWriter.add(page({ path: '/only-in-older', sha256: 'old' }));
  olderWriter.add(page({ path: '/flaky', sha256: 'good' }));
  const newerWriter = new ManifestWriter(newer.dir, newer.stamp, manifest());
  newerWriter.add(page({ path: '/', sha256: 'new' }));
  newerWriter.add(page({ path: '/flaky', status: 'failed', file: null, sha256: null }));
  writeFileSync(join(broken.dir, `manifest_${broken.stamp}.json`), '{ not json');
  mkdirSync(join(root, 'not-a-snapshot'));

  const snaps = listSnapshots(root);
  assert.deepEqual(
    snaps.map((s) => s.name),
    [
      'localhost-3000_2026-08-13_09-00',
      'localhost-3000_2026-08-12_09-00',
      'localhost-3000_2026-08-10_09-00',
    ],
  );
  assert.equal(snaps[0].manifest, null);

  const prev = previousPages(snaps);
  assert.equal(prev.get('desktop /')?.sha256, 'new');
  assert.equal(prev.get('desktop /only-in-older')?.sha256, 'old');
  assert.equal(prev.get('desktop /flaky')?.sha256, 'good', 'a failed capture is not a baseline');
  assert.equal(prev.get('desktop /nope'), undefined);
});

test('ensureGitignore: appends once, only in a git repo with an existing .gitignore, never outside cwd', () => {
  const cwd = scratch();
  // no .gitignore -> nothing
  assert.equal(ensureGitignore(cwd, 'screenshots'), false);
  assert.ok(!existsSync(join(cwd, '.gitignore')));

  // .gitignore but no git repo -> nothing (we can't ask git)
  writeFileSync(join(cwd, '.gitignore'), 'node_modules/');
  assert.equal(ensureGitignore(cwd, 'screenshots'), false);

  execFileSync('git', ['init', '-q'], { cwd });
  assert.equal(ensureGitignore(cwd, 'screenshots'), true);
  assert.equal(readFileSync(join(cwd, '.gitignore'), 'utf8'), 'node_modules/\nscreenshots/\n');
  // second time: already ignored
  assert.equal(ensureGitignore(cwd, 'screenshots'), false);
  // outside the project: never
  assert.equal(ensureGitignore(cwd, join(tmpdir(), 'elsewhere')), false);
});
