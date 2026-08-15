// @ts-check
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { shortHash, slug, timestamp } from '../src/store.js';

test('slug: the rules, one case each', () => {
  const cases = [
    ['/', 'index'],
    ['', 'index'],
    ['/about', 'about'],
    ['/About/', 'about'],
    ['/blog/hello-world', 'blog--hello-world'],
    ['/Blog/Hello World/', 'blog--hello-world'],
    ['/café', 'cafe'],
    ['/docs/%E2%9C%93/ok', 'docs-----ok'],
    ['/con', 'page-con'],
    ['/COM1', 'page-com1'],
    ['/nul.txt', 'nul-txt'],
    ['/-leading-dash', 'leading-dash'],
    ['/a b?c=d', 'a-b-c-d'],
    ['/%zz', 'zz'],
  ];
  for (const [input, expected] of cases) assert.equal(slug(input), expected, `slug(${input})`);
});

test('slug: never longer than 64 characters', () => {
  const long = `/${'a'.repeat(200)}`;
  assert.equal(slug(long).length, 64);
});

test('slug: same input, same output (it is a file name contract)', () => {
  assert.equal(slug('/pricing'), slug('/pricing'));
  assert.equal(shortHash('/pricing'), shortHash('/pricing'));
  assert.notEqual(shortHash('/pricing'), shortHash('/pricing/'));
});

test('timestamp: local time, minute precision, sortable', () => {
  assert.equal(timestamp(new Date(2026, 7, 15, 14, 32, 59)), '2026-08-15_14-32');
  assert.equal(timestamp(new Date(2026, 0, 5, 9, 7)), '2026-01-05_09-07');
});
