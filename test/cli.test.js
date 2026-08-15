// @ts-check
// The CLI as a child process: exit codes, what goes to stdout vs stderr,
// and that --json is exactly one JSON document.
import assert from 'node:assert/strict';
import { execFile, spawn } from 'node:child_process';
import { existsSync, mkdtempSync, readdirSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { after, before, test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import { startFixture } from './fixture/site.js';

const exec = promisify(execFile);
const bin = fileURLToPath(new URL('../bin/stm.js', import.meta.url));
const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
const cwd = mkdtempSync(join(tmpdir(), 'stm-cli-'));

/** @type {Awaited<ReturnType<typeof startFixture>>} */
let site;
before(async () => {
  site = await startFixture({ pages: 2 });
});
after(async () => {
  await site.close();
});

/** @param {string[]} args */
async function stm(args) {
  try {
    const { stdout, stderr } = await exec(process.execPath, [bin, ...args], { cwd });
    return { code: 0, stdout, stderr };
  } catch (err) {
    const e = /** @type {{ code: number, stdout: string, stderr: string }} */ (err);
    return { code: e.code, stdout: e.stdout, stderr: e.stderr };
  }
}

test('--version and --help', async () => {
  assert.equal((await stm(['--version'])).stdout.trim(), pkg.version);
  const help = await stm(['--help']);
  assert.equal(help.code, 0);
  assert.match(help.stdout, /stm \/pricing \/about/);
});

test('unknown flag: exit 1, points at --help, JSON when asked', async () => {
  const r = await stm(['--nope']);
  assert.equal(r.code, 1);
  assert.match(r.stderr, /Try: stm --help/);
  const j = await stm(['--nope', '--json']);
  assert.equal(j.code, 1);
  assert.equal(JSON.parse(j.stdout).error, 'bad_args');
});

test('a bad --url: exit 1 with a clear message, or a JSON error', async () => {
  const r = await stm(['--url', 'not-a-url']);
  assert.equal(r.code, 1);
  assert.match(r.stderr, /--url must be a full http/);
  const j = await stm(['--url', 'not-a-url', '--json']);
  assert.equal(JSON.parse(j.stdout).error, 'bad_args');
});

test('--json: one JSON document on stdout, at most two lines on stderr, exit 2 still prints it', async () => {
  const r = await stm(['/pricing', '/missing', '--url', site.url, '--json']);
  assert.equal(r.code, 2);
  const doc = JSON.parse(r.stdout);
  assert.equal(doc.ok, 1);
  assert.equal(doc.failed, 1);
  // absolute, and always with forward slashes (see forwardSlashes in src/index.js)
  assert.ok(doc.dir.startsWith('/') || /^[A-Za-z]:\//.test(doc.dir), `absolute dir: ${doc.dir}`);
  assert.ok(r.stderr.trim().split('\n').filter(Boolean).length <= 2, `stderr:\n${r.stderr}`);
  assert.equal(doc.first, undefined, 'human-only fields are not in the JSON');
});

test('human output: the summary line, and stdout is only the summary', async () => {
  const r = await stm(['/pricing', '--url', site.url]);
  assert.equal(r.code, 0);
  assert.match(r.stdout, /1 page saved → screenshots\/localhost-\d+_\d{4}-\d{2}-\d{2}_\d{2}-\d{2}/);
  assert.match(r.stdout, /Tip: stm --json/);
});

test('every path stm prints uses forward slashes, on every platform', async () => {
  const r = await stm(['/pricing', '--url', site.url, '--json']);
  const doc = JSON.parse(r.stdout);
  for (const value of [doc.dir, doc.manifest, doc.previous].filter(Boolean)) {
    assert.ok(!value.includes('\\'), `backslash in ${value}`);
  }
  const human = await stm(['/pricing', '--url', site.url]);
  assert.ok(!human.stdout.includes('\\'), `backslash in: ${human.stdout}`);
  assert.match(human.stdout, /screenshots\/localhost-\d+_/);
});

test('list and open work on the snapshots this test made', async () => {
  const l = await stm(['list']);
  assert.equal(l.code, 0);
  assert.match(l.stdout, /snapshots since/);
  const j = await stm(['list', '--json']);
  assert.ok(Array.isArray(JSON.parse(j.stdout)));
  const s = await stm(['skill']);
  assert.match(s.stdout, /^---\nname: stm/);
});

test('SIGTERM mid-run leaves a valid manifest behind', async () => {
  const dir = mkdtempSync(join(tmpdir(), 'stm-sig-'));
  const child = spawn(
    process.execPath,
    [bin, '/long', '/about', '/pricing', '/p/1', '/p/2', '--url', site.url],
    {
      cwd: dir,
      stdio: 'ignore',
    },
  );
  // wait until the snapshot folder exists (the browser is up and the first page started)
  const rootDir = join(dir, 'screenshots');
  for (let i = 0; i < 300 && !(existsSync(rootDir) && readdirSync(rootDir).length); i++) {
    await new Promise((r) => setTimeout(r, 100));
  }
  await new Promise((r) => setTimeout(r, 800));
  child.kill('SIGTERM');
  await new Promise((r) => child.on('exit', r));
  const root = join(dir, 'screenshots');
  const snaps = existsSync(root) ? readdirSync(root) : [];
  assert.ok(snaps.length === 1, 'one snapshot folder');
  const folder = join(dir, 'screenshots', snaps[0]);
  const manifestFile = readdirSync(folder).find((f) => f.startsWith('manifest_')) || '';
  const m = JSON.parse(readFileSync(join(folder, manifestFile), 'utf8'));
  assert.ok(Array.isArray(m.pages));
});
