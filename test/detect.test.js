// @ts-check
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { detect, probe } from '../src/detect.js';
import { startFixture } from './fixture/site.js';

test('detect: finds a running app, prefers the one used last time, reports the others', async () => {
  const a = await startFixture({ pages: 1 });
  const b = await startFixture({ pages: 1 });
  try {
    assert.equal(await probe(a.port), true);
    const first = await detect({ ports: [a.port, b.port] });
    assert.equal(first?.url, a.url);
    assert.deepEqual(first?.others, [b.url]);
    const sticky = await detect({ ports: [a.port, b.port], previousUrl: b.url });
    assert.equal(sticky?.url, b.url);
  } finally {
    await a.close();
    await b.close();
  }
});

test('detect: nothing listening means null', async () => {
  const gone = await startFixture({ pages: 1 });
  await gone.close();
  assert.equal(await probe(gone.port), false);
  assert.equal(await detect({ ports: [gone.port] }), null);
});
