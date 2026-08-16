// @ts-check
// The skill file is the headline install path (`npx skills add ...`). Its
// frontmatter is YAML, and an unquoted value containing ": " makes the whole
// file unparseable, which silently installs nothing. That shipped once.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const skill = readFileSync(new URL('../skills/stm/SKILL.md', import.meta.url), 'utf8');

test('the skill has frontmatter delimited by ---', () => {
  assert.match(skill, /^---\n[\s\S]+?\n---\n/, 'must open with a YAML frontmatter block');
});

test('no frontmatter value can break the YAML parser', () => {
  const frontmatter = skill.split('---')[1];
  for (const line of frontmatter.split('\n')) {
    const match = line.match(/^([a-zA-Z-]+):\s+(.*)$/);
    if (!match) continue;
    const [, key, value] = match;
    const quoted = /^["']/.test(value);
    assert.ok(
      quoted || !/ [^ ]*: /.test(` ${value}`),
      `frontmatter key "${key}" is an unquoted value containing ": ", which YAML reads as a nested mapping and rejects. Quote it or reword it.`,
    );
  }
});

test('the frontmatter carries the fields agents need', () => {
  const frontmatter = skill.split('---')[1];
  assert.match(frontmatter, /^name: stm$/m);
  assert.match(frontmatter, /^description: \S/m);
  assert.match(frontmatter, /^allowed-tools: .*Bash\(stm \*\)/m);
});
