# Changelog

All notable changes to this project are documented here. Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/); versions follow [SemVer](https://semver.org/).

## [Unreleased]
### Changed
- Repositioned the README around what the tool does first: screenshot every page with one command, look at them, and build a visual history you can watch evolve. The changed-pages list is still there and still works, but it is now a supporting benefit rather than the headline, and it is worded so it cannot be read as a visual diff.
- The docs now say "website" rather than "localhost app". `--url` has always accepted any http(s) origin, and a capture of a live site was verified end to end, so the copy no longer implies stm is localhost-only.
- Restored the nine agent badges under "Works with", each in its own colour, and added a "70+ more" badge. Every badge links to the install section.
- `package.json` description and keywords rewritten to match, including terms people actually search for (website-screenshot, screenshot-every-page, sitemap-screenshots, bulk-screenshots).
- All ten translations regenerated against the new English. They had been lagging since 0.1.1 and still carried the retired badge row and the old brand colour.

### Added
- `docs/assets/demo.gif`: one store home page played through ten design versions, from the first rough draft to the finished layout, so the README shows what a visual history actually looks like.

### Fixed
- The "70+ more" badge sat next to nine named agents, which implied 79. The installer lists 76 agents in total, so the badge now reads "60+ more" and the table gives the real number. Counted from the installer itself, not estimated.
- `docs/assets/the-problem.svg` marked four pages as broken, but one of them was not. The injected CSS targeted `.hero`, which product pages do not have, so that thumbnail rendered perfectly while being labelled a failure. Re-shot with a failure the page can actually suffer.
- The README said `stm` was four letters.

## [0.1.3] - 2026-08-15
### Fixed
- A page could be reported as changed when nothing about it had changed, on a busy machine. Two causes, both in the settle step before the screenshot. It waited for images but not for webfonts, so a page could render with a fallback font on one run and the real font on the next. And it scrolled back to the top after waiting for paint rather than before, so that final scroll never got a paint cycle. Caught by the macOS CI job, which reported a different unchanged page on each run. The capture now waits for `document.fonts.ready`, scrolls to the top first, then waits for two frames, a short settle and one more frame.

### Changed
- The README no longer claims to show what changed inside a page. stm names the pages that changed and hands you the files; there is no visual diff, and that limit is now stated where the mechanism is explained.
- Trimmed the badge row to the version, the licence and the author, and replaced the nine agent logos with plain text.

## [0.1.1] - 2026-08-15
### Fixed
- `npx skills add mdsohaib/screenshot-time-machine` installed nothing. The `description` in `skills/stm/SKILL.md` contained an unquoted `": "`, which YAML reads as a nested mapping, so the installer rejected the file and reported "No skills found". Reworded, and a test now fails if any frontmatter value can break the parser again.

### Changed
- README and artwork corrections found by a full audit against the code: the browser order (a cached Playwright build is used before system Chrome), the token estimates (measured with a tokenizer: about 200 tokens plus 90 per changed page), the stderr guarantee (the one-time browser download also writes there), and the `bad_args` JSON shape.
- The page previews inside the README images are now real screenshots of a real site, including the four genuinely broken pages, instead of drawn placeholder boxes.
- Wording that promised more than the tool does: the banner no longer says "diffed", and the artwork now says which screenshots changed rather than which pages actually changed.

## [0.1.0] - 2026-08-15
### Added
- `stm`: find the app on localhost, discover pages (sitemap, then links), full-page screenshots into `screenshots/<app>_<timestamp>/`, every file named `<page>_<timestamp>.png`, plus a `fold/` viewport image per page.
- Change detection against the previous snapshot (sha256), with `changed`, `new` and `removed` lists.
- `--json` for agents: absolute paths, one line on stdout, printed even when pages failed.
- `stm list`, `stm open`, `stm skill`, `--mobile`, `--max`, `--out`, `--url`.
- Agent skill (`skills/stm/SKILL.md`) installable with `npx skills add mdsohaib/screenshot-time-machine`, and a Claude Code plugin marketplace file.
- Browser bootstrap: cached Playwright build, then Chrome, then Edge, then a one-time headless-shell download.
- Dev toolbars hidden, dev error overlays flagged; animations frozen; lazy images loaded; incremental manifest; graceful SIGINT/SIGTERM.
- Paths in the summary and in `--json` always use forward slashes, on every platform.

