// @ts-check
// `stm list`: a table of past snapshots, newest first.
import { list } from './index.js';

/**
 * @param {{ cwd?: string, out?: string }} options
 * @returns {{ rows: ReturnType<typeof list>, text: string }}
 */
export function formatList(options) {
  const rows = list(options);
  const out = options.out || 'screenshots';
  if (rows.length === 0) {
    return { rows, text: `No snapshots yet in ${out}/. Run stm while your app is running.` };
  }
  const oldest = rows[rows.length - 1];
  const since = oldest ? humanDate(oldest.stamp, { year: true }) : '';
  const width = Math.max(...rows.map((r) => r.name.length));
  const lines = [`${out}/  ${rows.length} snapshot${rows.length === 1 ? '' : 's'} since ${since}`];
  for (const r of rows) {
    if (!r.valid) {
      lines.push(`${r.name}  (manifest missing or unreadable)`);
      continue;
    }
    const parts = [`${r.pages} page${r.pages === 1 ? '' : 's'}`];
    if (r.changed) parts.push(`${r.changed} changed`);
    if (r.failed) parts.push(`${r.failed} failed`);
    lines.push(`${r.name.padEnd(width)}  ${parts.join('   ')}`.trimEnd());
  }
  return { rows, text: lines.join('\n') };
}

/**
 * "2026-08-12_09-10" -> "Aug 12, 09:10" (or "Aug 12, 2026" with year).
 * Accepts a whole folder name too.
 * @param {string} stampOrName
 * @param {{ year?: boolean }} [opts]
 */
export function humanDate(stampOrName, opts = {}) {
  const m = stampOrName.match(/(\d{4})-(\d{2})-(\d{2})_(\d{2})-(\d{2})/);
  if (!m) return stampOrName;
  const [, y, mo, d, h, mi] = m;
  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ][Number(mo) - 1];
  return opts.year ? `${month} ${Number(d)}, ${y}` : `${month} ${Number(d)}, ${h}:${mi}`;
}
