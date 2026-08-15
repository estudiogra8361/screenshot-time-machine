# Contributing

Thanks for looking. This is a small tool with a deliberately small surface, so the most useful contributions are **bug reports with a real run attached**, **capture fixes for a framework we get wrong**, and **fixture cases** that reproduce a problem.

## Ground rules

1. **You must understand your change.** Using AI tools is fine. This project is built for people who use them. Submitting generated output you haven't reviewed and can't explain is not. Say in the PR if an agent wrote most of it.
2. **Open an issue before adding a flag, command, or dependency.** The answer is usually no; the reason is in [DECISIONS.md](DECISIONS.md). A good-first-issue never adds a flag.
3. **Paste your real run.** Bug reports and PRs include the `stm` summary line (or `--json`) from the fixture or your app.
4. Vocabulary in anything user-facing: a folder is a *snapshot*, a PNG is a *screenshot*, URLs are *pages*, the target is *your app*.

## Dev setup

```bash
git clone https://github.com/mdsohaib/screenshot-time-machine && cd screenshot-time-machine
npm ci
npm test            # node:test against the built-in fixture site
npm run check       # TypeScript over JSDoc
npm run lint        # Biome
```

The module map, hard rules, and PR checklist live in [AGENTS.md](AGENTS.md). It is written for both humans and coding agents.

## Good first issues

Look for the `good first issue` label. Each one links to the exact module and says what "done" looks like.

## Releasing (maintainer)

Move the `## [Unreleased]` items into a new `## [x.y.z] - YYYY-MM-DD` section directly below it → `npm version <patch|minor>` → `git push --follow-tags`. GitHub Actions publishes to npm via trusted publishing (no tokens) and creates the GitHub release from that top versioned section.
