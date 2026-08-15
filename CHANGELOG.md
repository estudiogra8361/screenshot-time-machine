# Changelog

All notable changes to this project are documented here. Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/); versions follow [SemVer](https://semver.org/).

## [Unreleased]

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

