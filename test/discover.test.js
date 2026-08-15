// @ts-check
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { normalizePath, parseSitemap, pathFromLink, sameOrigin } from '../src/discover.js';

const base = 'http://localhost:3000';

test('pathFromLink: keeps pages, drops everything else', () => {
  const keep = {
    '/about': '/about',
    '/about/': '/about',
    '/about?utm=1#team': '/about',
    'http://localhost:3000/pricing': '/pricing',
    'http://127.0.0.1:3000/pricing': '/pricing',
    'http://[::1]:3000/pricing': '/pricing',
    '/Blog/Hello': '/Blog/Hello',
    pricing: '/pricing',
  };
  for (const [href, expected] of Object.entries(keep)) {
    assert.equal(pathFromLink(href, base), expected, href);
  }
  const drop = [
    'https://example.com/',
    'http://localhost:3001/',
    'mailto:hi@example.com',
    'tel:123',
    'javascript:void(0)',
    '/file.pdf',
    '/image.PNG',
    '/api/data',
    '/api',
    '/logout',
    '/account/delete',
    '/reset/',
    '/screenshots/localhost-3000_2026-08-15_14-32/index_2026-08-15_14-32.png',
    'http://[not-a-host',
    `/${'a'.repeat(3000)}`,
  ];
  // a protocol-relative looking link must stay on this app
  const tricky = pathFromLink('http://localhost:3000//evil.com/x', base);
  const nav = new URL(base);
  nav.pathname = tricky || '/';
  assert.equal(nav.hostname, 'localhost');
  for (const href of drop) assert.equal(pathFromLink(href, base), null, href);
});

test('normalizePath: accepts what people type on the command line', () => {
  assert.equal(normalizePath('about'), '/about');
  assert.equal(normalizePath('/about/'), '/about');
  assert.equal(normalizePath('/'), '/');
  assert.equal(normalizePath('///'), '/');
  // never let a typed route turn into another host
  assert.equal(normalizePath('//example.com/x'), '/example.com/x');
  assert.equal(normalizePath('/pricing?plan=pro#top'), '/pricing');
  // Git Bash on Windows rewrites a leading slash into the Git install path
  assert.equal(normalizePath('C:/Program Files/Git/pricing'), '/pricing');
});

test('sameOrigin: loopback aliases are the same app, other ports are not', () => {
  assert.ok(sameOrigin('http://localhost:3000/a', 'http://127.0.0.1:3000/b'));
  assert.ok(sameOrigin('http://[::1]:3000/', 'http://localhost:3000/'));
  assert.ok(!sameOrigin('http://localhost:3000/', 'http://localhost:3001/'));
  assert.ok(!sameOrigin('http://localhost:3000/', 'https://localhost:3000/'));
  assert.ok(!sameOrigin('nope', 'http://localhost:3000/'));
});

test('parseSitemap: rebases production hosts, decodes entities, ignores junk', () => {
  const xml = `<?xml version="1.0"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>https://example.com/</loc></url>
    <url><loc> https://example.com/pricing </loc></url>
    <url><loc>https://example.com/search?q=a&amp;b=c</loc></url>
    <url><loc>https://example.com/brochure.pdf</loc></url>
    <url><loc>https://example.com/pricing</loc></url>
  </urlset>`;
  const { paths, sitemaps } = parseSitemap(xml, base);
  assert.deepEqual(paths, ['/', '/pricing', '/search']);
  assert.deepEqual(sitemaps, []);
});

test('parseSitemap: a sitemap index yields same-origin child sitemaps only', () => {
  const xml = `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap><loc>http://localhost:3000/sitemap-posts.xml</loc></sitemap>
    <sitemap><loc>https://cdn.example.com/sitemap-other.xml</loc></sitemap>
  </sitemapindex>`;
  const { paths, sitemaps } = parseSitemap(xml, base);
  assert.deepEqual(paths, []);
  assert.deepEqual(sitemaps, ['http://localhost:3000/sitemap-posts.xml']);
});
