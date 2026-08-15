// @ts-check
// Everything that touches the screenshots folder: naming snapshots, turning a
// page path into a file name, writing the manifest as we go, finding the
// previous snapshot to compare against, and the one .gitignore line.
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import {
  appendFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  renameSync,
  writeFileSync,
} from 'node:fs';
import { isAbsolute, join, relative, resolve } from 'node:path';

/** @typedef {import('./types.js').Manifest} Manifest */
/** @typedef {import('./types.js').PageResult} PageResult */

const WINDOWS_RESERVED = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])$/i;

/**
 * Turn a URL path into a safe, stable file name (without extension).
 * "/" -> "index", "/Blog/Hello World/" -> "blog--hello-world".
 * Deterministic on purpose: the same path must give the same name on every run,
 * otherwise "changed" would break.
 * @param {string} pathname
 */
export function slug(pathname) {
  let s = pathname;
  try {
    s = decodeURIComponent(s);
  } catch {
    // keep the raw string, the character filter below handles it
  }
  s = s
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/^\/+|\/+$/g, '')
    .replace(/\//g, '--')
    .replace(/[^a-z0-9_-]/g, '-')
    .replace(/^-+/, '')
    .slice(0, 64);
  // "con", "nul", "com1" and friends are not valid file names on Windows
  if (WINDOWS_RESERVED.test(s)) s = `page-${s}`;
  return s || 'index';
}

/**
 * Short stable hash used when two paths slug to the same name.
 * @param {string} text
 */
export function shortHash(text) {
  return createHash('sha1').update(text).digest('hex').slice(0, 6);
}

/**
 * Local time, "2026-08-15_14-32". This is the timestamp that ends every
 * snapshot folder name and every file name inside it.
 * @param {Date} date
 */
export function timestamp(date) {
  /** @param {number} n */
  const pad = (n) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}_${pad(date.getHours())}-${pad(date.getMinutes())}`;
}

const STAMP_RE = /(\d{4}-\d{2}-\d{2}_\d{2}-\d{2}(?:-\d+)?)$/;

/**
 * The timestamp at the end of a folder or file name, or null.
 * "localhost-3000_2026-08-15_14-32-2" -> "2026-08-15_14-32-2"
 * @param {string} name
 */
export function stampOf(name) {
  const m = name.replace(/\.[a-z0-9]+$/i, '').match(STAMP_RE);
  return m ? m[1] : null;
}

/**
 * The app part of a snapshot folder name: "http://localhost:3000" -> "localhost-3000".
 * @param {string} url
 */
export function appLabel(url) {
  const u = new URL(url);
  // every loopback spelling is the same app to us
  const host = /^(localhost|127\.0\.0\.1|\[::1\])$/i.test(u.hostname) ? 'localhost' : u.hostname;
  return `${host}${u.port ? `-${u.port}` : ''}`.toLowerCase().replace(/[^a-z0-9-]+/g, '-');
}

/**
 * Create the snapshot folder "<app>_<timestamp>". Two runs in the same minute
 * get -2, -3, ... on the timestamp, and that suffixed timestamp is what every
 * file inside is named with.
 * @param {string} outRoot absolute
 * @param {string} label from appLabel()
 * @param {Date} now
 * @returns {{ dir: string, stamp: string }}
 */
export function createSnapshotDir(outRoot, label, now) {
  mkdirSync(outRoot, { recursive: true });
  const base = timestamp(now);
  for (let n = 1; ; n++) {
    const stamp = n === 1 ? base : `${base}-${n}`;
    const dir = join(outRoot, `${label}_${stamp}`);
    try {
      mkdirSync(dir, { recursive: false });
      mkdirSync(join(dir, 'fold'));
      return { dir, stamp };
    } catch (err) {
      if (/** @type {NodeJS.ErrnoException} */ (err).code !== 'EEXIST') throw err;
    }
  }
}

/**
 * All snapshot folders under outRoot, newest first, with their manifest if it
 * parses. Corrupt or missing manifests are reported as null, never thrown.
 * @param {string} outRoot
 * @returns {{ name: string, stamp: string, dir: string, manifest: Manifest | null }[]}
 */
export function listSnapshots(outRoot) {
  if (!existsSync(outRoot)) return [];
  return readdirSync(outRoot, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => ({ name: d.name, stamp: stampOf(d.name) }))
    .filter((d) => d.stamp !== null)
    .sort((a, b) => (a.stamp || '').localeCompare(b.stamp || '') || a.name.localeCompare(b.name))
    .reverse()
    .map((d) => ({
      name: d.name,
      stamp: /** @type {string} */ (d.stamp),
      dir: join(outRoot, d.name),
      manifest: readManifest(join(outRoot, d.name)),
    }));
}

/**
 * The manifest in a snapshot folder ("manifest_<timestamp>.json").
 * @param {string} dir
 * @returns {Manifest | null}
 */
export function readManifest(dir) {
  try {
    const file = readdirSync(dir).find((f) => /^manifest_.*\.json$/.test(f));
    if (!file) return null;
    const m = JSON.parse(readFileSync(join(dir, file), 'utf8'));
    return m && Array.isArray(m.pages) ? m : null;
  } catch {
    return null;
  }
}

/**
 * Build the "what did this page look like last time" lookup. The newest
 * snapshot wins, but a page missing there (route-scoped runs) falls back to
 * the last snapshot that has it.
 * @param {ReturnType<typeof listSnapshots>} snapshots newest first, current run excluded
 * @returns {Map<string, PageResult>} key = viewport + path
 */
export function previousPages(snapshots) {
  const map = new Map();
  for (const snap of snapshots) {
    if (!snap.manifest) continue;
    for (const page of snap.manifest.pages) {
      if (!page.sha256) continue; // a failed capture is not a baseline
      const key = pageKey(page.viewport, page.path);
      if (!map.has(key)) map.set(key, page);
    }
  }
  return map;
}

/** @param {string} viewport @param {string} path */
export function pageKey(viewport, path) {
  return `${viewport} ${path}`;
}

/**
 * sha256 of a file on disk.
 * @param {string} file
 */
export function sha256File(file) {
  return createHash('sha256').update(readFileSync(file)).digest('hex');
}

/**
 * Writes manifest_<timestamp>.json after every page (tmp file + rename, so a
 * killed run still leaves a valid file behind).
 */
export class ManifestWriter {
  /**
   * @param {string} dir absolute snapshot folder
   * @param {string} stamp the folder's timestamp
   * @param {Manifest} manifest
   */
  constructor(dir, stamp, manifest) {
    this.dir = dir;
    this.file = join(dir, `manifest_${stamp}.json`);
    this.manifest = manifest;
    this.flush();
  }

  /** @param {PageResult} page */
  add(page) {
    this.manifest.pages.push(page);
    this.flush();
  }

  finish() {
    this.manifest.finishedAt = new Date().toISOString();
    this.flush();
  }

  flush() {
    const tmp = `${this.file}.tmp`;
    writeFileSync(tmp, `${JSON.stringify(this.manifest, null, 2)}\n`);
    renameSync(tmp, this.file);
  }
}

/**
 * Add "<out>/" to an existing .gitignore, only if the folder is inside the
 * project and git does not already ignore it. Never creates a .gitignore.
 * @param {string} cwd
 * @param {string} outRoot
 * @returns {boolean} true if a line was added
 */
export function ensureGitignore(cwd, outRoot) {
  const gitignore = join(cwd, '.gitignore');
  if (!existsSync(gitignore)) return false;
  const rel = relative(cwd, resolve(cwd, outRoot)).split('\\').join('/');
  if (!rel || rel.startsWith('..') || isAbsolute(rel)) return false;
  const line = `${rel}/`;
  try {
    // exit 0 means already ignored, 1 means not ignored, anything else means no git.
    // Ask about "screenshots/" (with the slash) so it works before the folder exists.
    execFileSync('git', ['check-ignore', '-q', '--', line], { cwd, stdio: 'ignore' });
    return false;
  } catch (err) {
    if (/** @type {{ status?: number }} */ (err).status !== 1) return false;
  }
  const current = readFileSync(gitignore, 'utf8');
  const sep = current.endsWith('\n') || current === '' ? '' : '\n';
  appendFileSync(gitignore, `${sep}${line}\n`);
  return true;
}

/**
 * Commit, branch and dirty flag for the manifest. Null when there is no git,
 * no repo, or anything else goes wrong. Nothing is ever printed.
 * @param {string} cwd
 * @returns {import('./types.js').GitInfo | null}
 */
export function gitInfo(cwd) {
  /** @param {string[]} args */
  const git = (args) =>
    execFileSync('git', args, {
      cwd,
      stdio: ['ignore', 'pipe', 'ignore'],
      encoding: 'utf8',
      timeout: 5000,
    }).trim();
  try {
    return {
      commit: git(['rev-parse', 'HEAD']),
      branch: git(['rev-parse', '--abbrev-ref', 'HEAD']),
      dirty: git(['status', '--porcelain']) !== '',
    };
  } catch {
    return null;
  }
}
