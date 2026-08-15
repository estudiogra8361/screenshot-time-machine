// @ts-check
// Argument parsing and everything a person (or an agent) sees on the terminal.
// The actual work happens in index.js.
import { execFile } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { relative } from 'node:path';
import { parseArgs, styleText } from 'node:util';
import { PORTS } from './detect.js';
import { DEFAULT_MAX, forwardSlashes, list, run, VERSION } from './index.js';
import { formatList, humanDate } from './list.js';

const HELP = `screenshot-time-machine ${VERSION}

Run \`stm\` and get a full-page screenshot of every page of your localhost app
in a dated folder, and a list of which pages changed since last time.

Usage
  stm                       snapshot every page of the app running on localhost
  stm /pricing /about       snapshot only these pages
  stm list                  show past snapshots
  stm open                  open the latest snapshot folder
  stm skill                 print the agent skill (for Claude Code, Cursor, Codex)

Options
  --url <http://…>          which app to snapshot (default: first one found on
                            ports ${PORTS.join(', ')})
  --mobile                  also capture a 390x844 phone view (@mobile files)
  --max <n>                 stop discovering after n pages (default ${DEFAULT_MAX})
  --out <folder>            where snapshots go (default screenshots)
  --json                    machine-readable summary on stdout, for agents
  -h, --help                this text
  -v, --version             version

Runs 100% locally. Screenshots are plain PNGs in screenshots/<app>_<timestamp>/.
More: https://github.com/mdsohaib/screenshot-time-machine
`;

/**
 * @param {string[]} argv
 * @returns {Promise<number>} exit code
 */
export async function main(argv) {
  let parsed;
  try {
    parsed = parseArgs({
      args: argv,
      allowPositionals: true,
      strict: true,
      options: {
        url: { type: 'string' },
        mobile: { type: 'boolean', default: false },
        max: { type: 'string' },
        out: { type: 'string', default: 'screenshots' },
        json: { type: 'boolean', default: false },
        help: { type: 'boolean', short: 'h', default: false },
        version: { type: 'boolean', short: 'v', default: false },
      },
    });
  } catch (err) {
    // parseArgs writes a second sentence about "--" that never applies here.
    const message = String(/** @type {Error} */ (err).message).split('. ')[0];
    return bad(argv.includes('--json'), message);
  }
  const { values, positionals } = parsed;
  const json = Boolean(values.json);

  if (values.version) return out(VERSION);
  if (values.help || positionals[0] === 'help') return out(HELP);

  const command = positionals[0];
  if (command === 'list') return commandList(values.out, json);
  if (command === 'open') return commandOpen(values.out);
  if (command === 'skill')
    return out(readFileSync(new URL('../skills/stm/SKILL.md', import.meta.url), 'utf8'));

  const max = values.max === undefined ? DEFAULT_MAX : Number(values.max);
  if (!Number.isInteger(max) || max < 1)
    return bad(json, `--max needs a number of 1 or more (got ${values.max})`);

  const result = await run({
    url: values.url,
    routes: positionals,
    mobile: values.mobile,
    max,
    out: values.out,
    quiet: json || !process.stderr.isTTY,
  });

  if (json) {
    // Human-only hints stay out of the JSON. gitignoreAdded stays in: an agent
    // should be able to tell the user a tracked file was touched.
    const { first, others, onlyHome, authWall, browserNotice, ...rest } = result;
    return out(JSON.stringify(rest), result.code);
  }
  return printHuman(result, values.out);
}

/**
 * The human summary. Facts first, then only the hints that apply.
 * @param {import('./types.js').RunResult} r
 * @param {string} outDir
 */
function printHuman(r, outDir) {
  if (r.code === 1 && r.error) {
    const lines = [r.message || 'Something went wrong.'];
    if (r.error === 'no_server') {
      lines.push(`Checked ports ${PORTS.join(', ')}.`);
      lines.push('→ Start your app (usually npm run dev), then run stm again.');
      lines.push('→ Or point stm at it: stm --url http://localhost:5173');
    } else if (r.fix) {
      lines.push(`→ ${r.fix}`);
    }
    process.stderr.write(`${lines.join('\n')}\n`);
    return 1;
  }

  const tty = process.stdout.isTTY;
  /** @param {string} s */
  const bold = (s) => (tty ? styleText('bold', s) : s);
  const rel = relative(process.cwd(), r.dir || '');
  const dir = forwardSlashes(rel && !rel.startsWith('..') ? rel : r.dir || '');
  const pages = `${r.saved} page${r.saved === 1 ? '' : 's'}`;
  const lines = [];

  if (r.first) {
    lines.push(`${bold(`${pages} saved → ${dir}/`)}  (snapshot #1, future you says thanks)`);
    lines.push('   Run stm again after your next change to see which pages look different.');
  } else {
    lines.push(bold(`${pages} saved → ${dir}/`));
    const prev = r.previous ? humanDate(r.previous.split(/[\\/]/).pop() || '') : '';
    const changed = r.changed || [];
    const fresh = r.new || [];
    if (changed.length) {
      lines.push(
        bold(
          `   ${changed.length} changed since last snapshot (${prev}): ${changed.map((c) => c.path).join('  ')}${r.truncated ? `  +${r.truncated} more` : ''}`,
        ),
      );
    } else if (r.previous && r.saved) {
      lines.push(`   0 changed since last snapshot (${prev})`);
    }
    if (fresh.length)
      lines.push(bold(`   ${fresh.length} new: ${fresh.map((c) => c.path).join('  ')}`));
    if (r.removed?.length)
      lines.push(`   ${r.removed.length} gone since last snapshot: ${r.removed.join('  ')}`);
  }
  if (r.interrupted) {
    lines.push('   Stopped early, so this snapshot is partial. Run stm again for a full one.');
  }
  const failures = r.failures || [];
  if (failures.length) {
    const list = failures.map((f) => `${f.path} (${f.error})`).join('  ');
    lines.push(`   ${failures.length} couldn't be captured: ${list}`);
  }
  const warnings = r.warnings || [];
  if (warnings.length) {
    const list = warnings.map((w) => w.path).join('  ');
    lines.push(
      `   ${warnings.length} page${warnings.length === 1 ? ' shows' : 's show'} a dev error overlay or scrolls inside a panel: ${list}`,
    );
  }
  if (r.browserNotice)
    lines.push(
      '   (all pages changed and your browser updated since last snapshot, so this may be noise; spot-check one)',
    );
  if (r.onlyHome)
    lines.push(
      '   Only found the home page. If your app has more pages, name them: stm /about /pricing',
    );
  if (r.authWall)
    lines.push(
      `   Most pages landed on ${r.authWall}. stm can't sign in yet, so those screenshots show that page.`,
    );
  if (r.others?.length) {
    lines.push(
      `   Found ${r.others.length + 1} apps running: ${r.url} (using this one) and ${r.others.join(', ')}`,
    );
    lines.push(`   Want the other? stm --url ${r.others[0]}`);
  }
  if (r.gitignoreAdded) {
    lines.push(
      `   Added ${outDir}/ to .gitignore so snapshots stay on your computer and out of your commits. (Delete that line if you want them in git.)`,
    );
  }
  if (!tty) lines.push('Tip: stm --json prints absolute file paths of changed pages.');
  process.stdout.write(`${lines.join('\n')}\n`);
  return r.code;
}

/** @param {string} outDir @param {boolean} json */
function commandList(outDir, json) {
  const { rows, text } = formatList({ out: outDir });
  if (json) return out(JSON.stringify(rows));
  return out(text);
}

/** @param {string} outDir */
function commandOpen(outDir) {
  const latest = list({ out: outDir })[0];
  if (!latest) return out(`No snapshots yet in ${outDir}/. Run stm while your app is running.`);
  const opener =
    process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'explorer' : 'xdg-open';
  // explorer.exe returns 1 even on success, so we don't look at the exit code
  execFile(opener, [latest.dir], () => {});
  return out(forwardSlashes(latest.dir));
}

/**
 * Print to stdout with a trailing newline.
 * @param {string} text
 * @param {number} [code]
 */
function out(text, code = 0) {
  process.stdout.write(text.endsWith('\n') ? text : `${text}\n`);
  return code;
}

/** @param {boolean} json @param {string} message */
function bad(json, message) {
  if (json) return out(JSON.stringify({ error: 'bad_args', message, fix: 'Run stm --help' }), 1);
  process.stderr.write(`${message}\nTry: stm --help\n`);
  return 1;
}
