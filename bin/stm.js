#!/usr/bin/env node
// Runs before anything else and uses only syntax old Node versions can parse,
// so users on Node 18/20 get a friendly message instead of a stack trace.
const major = Number(process.versions.node.split('.')[0]);
if (process.versions.bun) {
  console.error('stm needs Node. Run: npx screenshot-time-machine@latest');
  process.exit(1);
}
if (major < 22) {
  console.error(
    `stm needs Node 22 or newer (you have ${process.version}). Get it at https://nodejs.org`,
  );
  process.exit(1);
}
process.stdout.on('error', (/** @type {NodeJS.ErrnoException} */ e) => {
  if (e.code === 'EPIPE') process.exit(0);
});
const { main } = await import('../src/cli.js');
try {
  process.exitCode = await main(process.argv.slice(2));
} catch (err) {
  // Anything unexpected: no stack trace for the user, still a JSON document for agents.
  const message = err instanceof Error ? err.message : String(err);
  if (process.argv.includes('--json')) {
    const doc = {
      error: 'crashed',
      message,
      fix: 'Run again. If it repeats, open an issue with this message.',
    };
    process.stdout.write(`${JSON.stringify(doc)}\n`);
  } else {
    process.stderr.write(
      `stm hit a problem it did not expect: ${message}\nIf it repeats, open an issue with that message.\n`,
    );
  }
  process.exitCode = 1;
}
