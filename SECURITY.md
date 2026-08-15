# Security

## Supported versions

Only the latest minor release receives fixes.

## Reporting a vulnerability

Use GitHub's **private vulnerability reporting**: *Security → Report a vulnerability* on this repo. Please don't open a public issue for security problems. You'll get a reply within a few days.

## Threat model (what stm does and doesn't do)

- **Network:** unless you pass `--url`, stm sends one GET to `/` on ten common ports on 127.0.0.1 and ::1 to find your app, then talks only to that app (its pages and `/sitemap.xml`). If your app redirects a page to another site, the headless browser loads that page the way yours would, but stm takes no screenshot and records only the destination origin. Once, it downloads Playwright's headless shell over TLS if no Chrome, Edge or cached shell is found (Playwright performs no separate checksum step). Certificate errors are ignored only for localhost, so self-signed dev certificates work. The pages you capture load their own resources exactly as they would in your browser (fonts, analytics, third-party scripts).
- **Subprocesses:** stm runs `git check-ignore`, `git rev-parse` and `git status` in the current folder (via `execFile`, never a shell; nothing is printed, all failures are ignored) and `stm open` runs `open`, `xdg-open` or `explorer` with the snapshot folder. Nothing else is executed.
- **Filesystem:** stm writes only inside `--out` (default `./screenshots`), may append one announced line to an *existing* `.gitignore`, and never deletes anything.
- **Crawl scope:** same origin as the target only (localhost, 127.0.0.1 and ::1 count as one); links that look destructive (`/logout`, `/delete`, ...), `/api/`, files and your own `--out` folder are skipped; only GET requests are made.
- **Output hygiene:** `--json` and the manifest never contain page text (titles, headings, body). Numbers coming back from the page are range-checked, warnings are matched against a fixed list, and any error a page's own scripts throw is replaced with a fixed phrase. This matters because AI agents read that output.
- **Supply chain:** one runtime dependency (`playwright-core`, exact-pinned, no install scripts). No telemetry. Published from GitHub Actions via npm trusted publishing with provenance.
