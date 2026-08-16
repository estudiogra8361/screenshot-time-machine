<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/banner.svg" alt="screenshot-time-machine: every page of your localhost app, screenshotted, dated and diffed, in one command" width="100%">
</p>

<h1 align="center">screenshot-time-machine</h1>

<p align="center">
  <b>Full-page screenshot CLI: screenshot every page of your localhost website with one command.</b><br>
  Take a full-page screenshot of every page of the app you are building, in one go.<br>
  Saved in dated folders. Next time you run it, it tells you exactly which pages changed.<br>
  <b>Free and open source. Runs entirely on your own machine.</b>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/screenshot-time-machine"><img src="https://img.shields.io/npm/v/screenshot-time-machine?style=flat-square&label=npm&color=FF6600&labelColor=0A0E14" alt="npm version"></a>
  <a href="https://github.com/mdsohaib/screenshot-time-machine/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/mdsohaib/screenshot-time-machine/ci.yml?branch=main&style=flat-square&label=tests&color=FF6600&labelColor=0A0E14" alt="tests"></a>
  <img src="https://img.shields.io/badge/dependencies-1-FF6600?style=flat-square&labelColor=0A0E14" alt="one dependency">
  <img src="https://img.shields.io/badge/node-22%2B-FF6600?style=flat-square&labelColor=0A0E14&logo=nodedotjs&logoColor=white" alt="Node 22+">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-FF6600?style=flat-square&labelColor=0A0E14" alt="MIT license"></a>
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/LinkedIn-Mohammed%20Sohaib%20Uddin-FF6600?style=flat-square&labelColor=0A0E14&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
</p>

<p align="center">
  <a href="README.md">English</a> ·
  <a href="docs/i18n/README.zh-CN.md">简体中文</a> ·
  <a href="docs/i18n/README.es.md">Español</a> ·
  <a href="docs/i18n/README.hi.md">हिन्दी</a> ·
  <a href="docs/i18n/README.pt-BR.md">Português</a> ·
  <a href="docs/i18n/README.ja.md">日本語</a> ·
  <a href="docs/i18n/README.de.md">Deutsch</a> ·
  <a href="docs/i18n/README.fr.md">Français</a> ·
  <a href="docs/i18n/README.ko.md">한국어</a> ·
  <a href="docs/i18n/README.ru.md">Русский</a> ·
  <a href="docs/i18n/README.ar.md">العربية</a>
</p>

```bash
npx screenshot-time-machine@latest               # your app is on localhost? that is the whole setup
npx skills add mdsohaib/screenshot-time-machine  # teach Claude Code, Cursor, Codex and friends to run it
```

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/hero.svg" alt="stm reporting one changed page in the terminal, next to a folder of dated snapshots" width="820">
</p>

<p align="center">
  <b>Works with</b><br>
  <img src="https://img.shields.io/badge/Claude%20Code-0A0E14?style=flat-square&logo=claude&logoColor=FF6600" alt="Claude Code">
  <img src="https://img.shields.io/badge/Codex-0A0E14?style=flat-square" alt="Codex">
  <img src="https://img.shields.io/badge/Cursor-0A0E14?style=flat-square&logo=cursor&logoColor=FF6600" alt="Cursor">
  <img src="https://img.shields.io/badge/Gemini%20CLI-0A0E14?style=flat-square&logo=googlegemini&logoColor=FF6600" alt="Gemini CLI">
  <img src="https://img.shields.io/badge/Antigravity-0A0E14?style=flat-square" alt="Antigravity">
  <img src="https://img.shields.io/badge/Copilot-0A0E14?style=flat-square&logo=githubcopilot&logoColor=FF6600" alt="GitHub Copilot">
  <img src="https://img.shields.io/badge/Windsurf-0A0E14?style=flat-square&logo=windsurf&logoColor=FF6600" alt="Windsurf">
  <img src="https://img.shields.io/badge/OpenCode-0A0E14?style=flat-square&logo=opencode&logoColor=FF6600" alt="OpenCode">
  <img src="https://img.shields.io/badge/Cline-0A0E14?style=flat-square" alt="Cline">
  <br><i>and the humans who prompt them</i>
</p>

---

## What it is

`stm` is a free, open-source command-line tool. You run it while your website is running on your computer. It:

1. **Finds your site** on localhost automatically, or wherever you point it with `--url`.
2. **Finds your pages** by following the `<a href>` links on them, and by reading your `sitemap.xml` if you have one, up to 100 pages per run. Pages reached only by a button click, and hash routes like `/#/about`, cannot be followed. Name those yourself: `stm /about /pricing`.
3. **Screenshots each page in full**, top to bottom, plus a second image of just the top of the page, the part that fits on one screen. That second one is called the `fold` image, and it is the one to look at first.
4. **Saves them as ordinary PNG files** in a folder named after the date and time.
5. **Compares with last time** and tells you exactly which pages changed.

```
$ stm
7 pages saved → screenshots/localhost-3000_2026-08-15_14-32/
   1 changed since last snapshot (Aug 12, 09:10): /pricing
```

No account. No cloud. No subscription. No config file. No background process. One dependency, MIT licensed, yours forever.

## The problem it solves

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/the-problem.svg" alt="Twelve page thumbnails. One is marked as the page you looked at. Four came back broken." width="820">
</p>

Change one shared component, layout or stylesheet and you have no idea what it did to the other forty pages. The only honest way to find out is to open every page and look, so nobody does it.

AI coding agents made this sharper. You ask for a fix on the pricing page, the agent edits a shared file, and the About page quietly grows a gap. The agent never sees the result, and neither do you.

Git tracks every line of your code and not a single pixel of your site. Visual testing services want a CI pipeline and a monthly bill. Screenshotting by hand does not survive page four, and nobody keeps the files.

## Why it helps

- **Catch broken pages before your users do.** One command, every page, a list of what changed.
- **Give your AI agent eyes.** `stm --json` hands it the file paths of the changed pages, so it opens only those and fixes what it broke.
- **Keep a visual history.** Every run is a dated folder of plain PNGs. Scroll back and see what your site looked like in March, straight from Finder or Explorer.

## Quick start

Your app needs to be running on localhost (`npm run dev`, `rails s`, `python manage.py runserver`, a static server, anything that serves HTML). Then:

```bash
npx screenshot-time-machine@latest
```

**Needs Node 22 or newer.** Run `node -v` to check. If it prints 21 or lower, update Node from [nodejs.org](https://nodejs.org) first.

The first run uses the Chrome or Edge already on your machine. If you have neither, it downloads a headless browser once, about a 120 MB download that takes roughly 200 MB on disk, and tells you before it does. That download is the only thing stm ever fetches from the internet.

Change something, run it again, and read the `changed` line. That is the whole workflow.

Everything below this point writes the command as `stm` for short. To get that short name, install it once:

```bash
npm install -g screenshot-time-machine
```

Not installing is fine. Write `npx screenshot-time-machine@latest` wherever you see `stm`. Never write `npx stm`: that is an unrelated package from 2014.

<details>
<summary><b>What else happens on the first run</b></summary>

- `stm` probes ports 3000, 3001, 5173, 5174, 8080, 4321, 4322, 8000, 4200 and 5000, in that order, and uses the first app that answers. If several answer, it prefers the one this project used last time and tells you about the others.
- If your project has a `.gitignore`, it adds `screenshots/` to it once and tells you. It never creates a `.gitignore`, and it never deletes anything.
</details>

## Install it in your AI coding agent

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/agent-loop.svg" alt="The loop: the agent edits UI, runs stm --json, gets the changed list, views the fold images, fixes and runs again" width="820">
</p>

One command installs `stm` as a skill: a short instruction file your agent reads, so it knows when to run `stm` and how to read the result. `npx skills add` is a separate open-source installer that copies that one folder into your project and changes nothing else. Pick your agent:

| Agent | Command | Skill lands in |
|---|---|---|
| **Claude Code** | `npx skills add mdsohaib/screenshot-time-machine -a claude-code -y` | `.claude/skills/stm/` |
| **Codex** | `npx skills add mdsohaib/screenshot-time-machine -a codex -y` | `.agents/skills/stm/` |
| **Cursor** | `npx skills add mdsohaib/screenshot-time-machine -a cursor -y` | `.agents/skills/stm/` |
| **Gemini CLI** | `npx skills add mdsohaib/screenshot-time-machine -a gemini-cli -y` | `.agents/skills/stm/` |
| **Antigravity** | `npx skills add mdsohaib/screenshot-time-machine -a antigravity -y` | `.agents/skills/stm/` |
| **GitHub Copilot** | `npx skills add mdsohaib/screenshot-time-machine -a github-copilot -y` | `.agents/skills/stm/` |
| **Windsurf** | `npx skills add mdsohaib/screenshot-time-machine -a windsurf -y` | `.windsurf/skills/stm/` |
| **OpenCode** | `npx skills add mdsohaib/screenshot-time-machine -a opencode -y` | `.agents/skills/stm/` |
| **Cline** | `npx skills add mdsohaib/screenshot-time-machine -a cline -y` | `.agents/skills/stm/` |
| **Anything else** | `npx skills add mdsohaib/screenshot-time-machine` | pick from the list of 70+ agents |

Add `-g` to any of those to install it for every project instead of this one.

Or just tell your agent, in plain words:

> Install screenshot-time-machine, run `stm` on my app, and show me what changed.

Then add one line to the file your agent reads on every request, so it verifies its own work without being asked:

```
After changing anything a user can see, run `stm --json` (or `npx -y screenshot-time-machine@latest --json` if `stm` is not installed) and view the `fold` image of every entry in `changed` and `new` before saying you're done. On the very first snapshot both lists are empty, so view the fold images of the pages you edited instead. Never claim a UI change is verified without viewing a screenshot.
```

Where that line goes, by agent:

| Agent | File |
|---|---|
| Claude Code | `CLAUDE.md` |
| Codex, Antigravity, OpenCode | `AGENTS.md` |
| Gemini CLI | `GEMINI.md` |
| Cursor | `.cursor/rules/stm.mdc`, starting with `---`, then `alwaysApply: true`, then `---` |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Windsurf | `.windsurf/rules/stm.md` |
| Cline | `.clinerules/stm.md` |

<details>
<summary><b>Claude Code: plugin install, and how the loop feels</b></summary>

Skills are the simple path. If you prefer plugins, run this inside Claude Code:

```
/plugin marketplace add mdsohaib/screenshot-time-machine
/plugin install stm@stm
```

No SSH key on GitHub? Use the URL form: `/plugin marketplace add https://github.com/mdsohaib/screenshot-time-machine.git`

Claude Code opens screenshots with its Read tool, and `stm --json` hands it absolute paths. The loop is: edit, `stm --json`, Read the changed `fold` images, fix, repeat. Ask it to "check the UI" and it will reach for the skill on its own.
</details>

<details>
<summary><b>Codex</b></summary>

Put the memory line in `AGENTS.md`. Codex opens images with `view_image`, so if it hesitates, say "view the fold image of every changed page".
</details>

<details>
<summary><b>Cursor</b></summary>

Put the memory line in a rule under `.cursor/rules/`. The agent runs `stm --json` in its terminal and opens the PNG paths it returns. Cursor's built-in browser shows one page at a time; `stm` hands it all of them, plus the diff.
</details>

<details>
<summary><b>Any agent, no skills support</b></summary>

`stm skill` prints the skill text. Paste it into whatever instruction file your agent reads. This works without installing anything:

```bash
npx screenshot-time-machine@latest skill
```
</details>

### What the agent gets back

```json
{
  "code": 0,
  "url": "http://localhost:3000",
  "dir": "/Users/you/app/screenshots/localhost-3000_2026-08-15_14-32",
  "previous": "/Users/you/app/screenshots/localhost-3000_2026-08-12_09-10",
  "ok": 7, "failed": 0, "saved": 7, "total": 7,
  "changed": [
    { "path": "/pricing",
      "file": "/Users/you/app/screenshots/localhost-3000_2026-08-15_14-32/pricing_2026-08-15_14-32.png",
      "fold": "/Users/you/app/screenshots/localhost-3000_2026-08-15_14-32/fold/pricing_2026-08-15_14-32.png",
      "height": 2140 }
  ],
  "new": [], "removed": [], "truncated": 0,
  "failures": [], "warnings": [], "interrupted": false,
  "browserChanged": null,
  "manifest": "/Users/you/app/screenshots/localhost-3000_2026-08-15_14-32/manifest_2026-08-15_14-32.json",
  "hint": "View the fold image of each changed/new page; full-page PNGs taller than ~2000px are downscaled by the model.",
  "gitignoreAdded": false
}
```

One JSON document on stdout, at most two lines on stderr, printed even when some pages fail. `code` mirrors the exit code.

A run that cannot start prints a much smaller object instead: `{"code": 1, "error": "no_server" | "no_browser", "message": "...", "fix": "..."}`. Bad arguments print `{"error": "bad_args", "message": "...", "fix": "Run stm --help"}`. Check `error` before you read `changed`. `truncated` counts entries left out of the list (the cap is 25; the manifest has them all). The output never contains page text, only paths and numbers.

**About tokens.** Unchanged pages cost nothing to look at, because the agent never opens them. The summary is roughly 150 tokens plus about 50 per changed page. Viewing one changed page costs a single 1440x900 image. Very tall full-page screenshots get downscaled by vision models until the text is unreadable, which is exactly why every page also gets a `fold` image, and why the skill tells the agent to open that one first.

## A visual history on disk

```
screenshots/
└── localhost-3000_2026-08-15_14-32/
    ├── manifest_2026-08-15_14-32.json          what was captured, from where, with which browser, what changed
    ├── index_2026-08-15_14-32.png              full page, 1440 px wide, as tall as the page
    ├── pricing_2026-08-15_14-32.png
    ├── blog--hello-world_2026-08-15_14-32.png  "/" becomes "--" in file names
    └── fold/
        ├── index_2026-08-15_14-32.png          the top 1440x900 of each page, for quick reading
        └── pricing_2026-08-15_14-32.png
```

Every run is a new folder named after the app and the minute it ran. Every file inside carries the same timestamp, so a screenshot dragged out of its folder still says what it is and when it happened. Two runs in the same minute get `-2`, `-3` on the timestamp. Pages taller than 16,384 px are cut at that height, Chromium's limit, and marked `truncated`.

Open the folder in Finder or Explorer and you have a photo album of your project. The history is plain PNGs, so it outlives this tool. Uninstalling leaves nothing behind but the `screenshots/` folder and, if you had a `.gitignore`, one line in it.

## Commands

| Command | What it does |
|---|---|
| `stm` | Snapshot every page of the app running on localhost |
| `stm /pricing /about` | Snapshot only these pages, in seconds. This is the edit-check loop |
| `stm --url http://localhost:4321` | Snapshot this app instead of auto-detecting. A path starts the crawl there |
| `stm --mobile` | Also capture a 390x844 phone view (`@mobile` files) |
| `stm --max 100` | Stop discovering after this many pages (default 100) |
| `stm --out screenshots` | Where snapshots go (default `screenshots`) |
| `stm --json` | Machine-readable summary on stdout, for agents |
| `stm list` | Past snapshots: folder, page count, changed, failed |
| `stm open` | Open the latest snapshot folder |
| `stm skill` | Print the agent skill |

Exit codes: `0` everything captured, `1` nothing captured (no app, no browser, bad arguments), `2` finished with some pages failed or the run interrupted. A failing page never stops the run.

## How it finds pages and tracks what changed

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/how-it-works.svg" alt="detect, discover, capture, compare, report" width="820">
</p>

### How it knows what changed

It screenshots every page on every run. What it compares is not the images, it is their fingerprints:

1. After saving a page's PNG, stm computes a **sha256 hash** of that file's bytes.
2. The hash is stored in that run's manifest, next to the page path.
3. On the next run, stm looks up the same page in the **previous run's manifest** and compares the two hashes.
4. Different hash means the page changed. Same hash means it did not. No earlier entry means it is new.

Old screenshots are never reopened, only the small manifest is read, so comparing a hundred pages is instant.

This only works because an unchanged page produces a byte-for-byte identical file. That is the point of the work below: freezing animations, pinning the device pixel ratio, waiting for fonts and images, and hiding dev toolbars. Without it every page would look changed on every run and the number would be meaningless.

The details that make the screenshots trustworthy:

- Pages are scrolled to the bottom before capture so lazy images and lazy sections load, then scrolled back. Smooth-scroll sites are handled.
- Animations are frozen at their end state, so fade-ins are visible and spinners hold still. Two runs on the same machine produce byte-identical PNGs of a page whose content did not change, which is what makes "changed" mean something. A page showing a clock, a relative time, a rotating hero image or a canvas animation will always report as changed.
- Dev toolbars (Astro, Nuxt, the Next.js badge) are hidden. Dev **error** overlays never are: the page is captured as it is and flagged with a warning, because a broken page is exactly what you want to see.
- Long-lived connections (HMR sockets, event streams) never stall a capture. Each page gets a 30 second budget and one retry, then it is recorded as failed and the run moves on.
- The manifest is written after every page, so an interrupted run still leaves a folder `stm list` can read, and the summary says it stopped early.
- Links to `/logout`, `/delete` and friends are never followed. Neither are files, `/api/`, other origins, or your own `screenshots/` folder.

## How it compares to visual regression tools

| | stm | Claude Code Desktop auto-verify | Playwright MCP, agent-browser, DevTools MCP | Percy, Chromatic |
|---|---|---|---|---|
| Every page in one command | yes | one page at a time | one page per tool call | yes, in CI |
| Tells you which pages changed | yes | no | no | yes, in the cloud |
| Works in the terminal, Cursor, Codex | yes | Desktop only | yes | CI only |
| History on disk you can browse | yes | no | no | in their cloud |
| Runs entirely on your machine | yes | yes | yes | no |

`stm` is the free, local half of visual regression testing: it tells you which pages changed and hands you the pixels, with no CI pipeline, no account and no monthly bill. These tools are complementary, not rivals. Use a browser tool when your agent needs to click around. Use `stm` when it needs to see everything it just touched.

## Privacy

**Runs 100% locally.** `stm` talks only to your app's URL and, once, to Playwright's browser CDN if you have no Chrome or Edge. Your screenshots never leave your machine. No accounts, no API keys, no telemetry. The pages you capture load their own resources exactly as they would in your browser. Full threat model in [SECURITY.md](SECURITY.md).

## FAQ

<details>
<summary><b>Is it really free?</b></summary>
Yes. MIT licensed, open source, no paid tier, no hosted service, nothing to sign up for. Install it, use it forever, fork it if you like.
</details>

<details>
<summary><b>Does it work with Next.js, Vite, Astro, SvelteKit, Rails, Django, static sites?</b></summary>
Yes. Anything that serves HTML on localhost. The usual ports for all of those are probed automatically; use <code>--url</code> for anything else.
</details>

<details>
<summary><b>It only found my home page.</b></summary>
Pages are discovered from your sitemap and from <code>&lt;a href&gt;</code> links. Apps that navigate with buttons or hash routes (<code>/#/about</code>) have no links to follow. Name the pages: <code>stm /about /pricing</code>. Agents are told to pass the pages they touched.
</details>

<details>
<summary><b>Most of my screenshots show the login page.</b></summary>
Your app redirects to sign-in. <code>stm</code> cannot sign in yet, and it tells you when this happens. Signed-in captures are on the roadmap.
</details>

<details>
<summary><b>Everything shows as changed after a while.</b></summary>
Usual causes: your browser updated, which shifts rendering slightly (<code>stm</code> records the browser version and warns you), or a page shows something that moves on its own, like a clock, "3 minutes ago", a random hero image, a canvas animation, or a cookie banner that disappears after the first visit. Pass those pages explicitly and eyeball them until <code>stm diff</code> lands.
</details>

<details>
<summary><b>Can it run automatically, watching my files?</b></summary>
No, on purpose. <code>stm</code> is a save-point button, like <code>git commit</code>: you, or your agent, decide when a moment is worth keeping. If you want it automatic, put the one-line instruction in your agent's memory file and let the agent decide.
</details>

<details>
<summary><b>Can I turn my history into a timelapse?</b></summary>
A first-class <code>stm timelapse</code> is on the roadmap. Today, with ffmpeg:
<pre><code>ffmpeg -framerate 1 -pattern_type glob -i 'screenshots/*/pricing_*.png' \
  -vf "scale=720:-1,split[a][b];[a]palettegen[p];[b][p]paletteuse" pricing.gif</code></pre>
</details>

<details>
<summary><b>I use Lovable, Bolt or v0. Can I use this?</b></summary>
Those run your app in their cloud, so there is no localhost to screenshot. Export the project, run it locally, and <code>stm</code> works. Anything built with Claude Code, Cursor, Codex, Windsurf or Copilot on your own machine works out of the box.
</details>

<details>
<summary><b>Why not just write a Playwright script?</b></summary>
You could. <code>stm</code> is that script, plus page discovery, a stable folder layout, change detection, agent-friendly output, dev-overlay handling, and all the edge cases, maintained. It is also one command your agent already knows.
</details>

<details>
<summary><b>Linux says the browser is missing libraries.</b></summary>
Run the <code>install-deps</code> command it prints, once. WSL and Codespaces need it too.
</details>

<details>
<summary><b>Where does the downloaded browser live?</b></summary>
Playwright's cache: <code>~/Library/Caches/ms-playwright</code> on macOS, <code>~/.cache/ms-playwright</code> on Linux, <code>%LOCALAPPDATA%\ms-playwright</code> on Windows. Delete it any time; <code>stm</code> downloads it again when needed.
</details>

<details>
<summary><b>Can I point it at a site that is not on localhost?</b></summary>
Yes: <code>stm --url https://staging.example.com</code>. It stays on that origin and skips destructive-looking links. Please only screenshot sites you are allowed to.
</details>

## Roadmap

Small on purpose. Vote by opening an issue.

- `stm diff`: show exactly which regions of a page changed, and hand agents crops instead of whole pages
- `stm timelapse`: turn a page's history into a GIF or MP4, with git commit captions
- `stm backfill`: walk your git history and build the visual history you never captured
- Signed-in captures (`--storage-state`)
- A local gallery with a time slider

Not planned: cloud sync, accounts, telemetry, a watch mode, a config file.

## Contributing

Bug reports with a real run attached are the most useful thing right now. Start with [CONTRIBUTING.md](CONTRIBUTING.md), then [AGENTS.md](AGENTS.md) for the module map and the rules. Every decision and its reason lives in [DECISIONS.md](DECISIONS.md).

## About

Built by **Mohammed Sohaib Uddin**, because agents that ship UI nobody looks at needed a way to look.

<p align="left">
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/Connect%20on%20LinkedIn-FF6600?style=for-the-badge&logo=linkedin&logoColor=white" alt="Connect on LinkedIn"></a>
  <a href="https://github.com/mdsohaib"><img src="https://img.shields.io/badge/Follow%20on%20GitHub-0A0E14?style=for-the-badge&logo=github&logoColor=white" alt="Follow on GitHub"></a>
</p>

If `stm` saves you from shipping a broken page, a star costs nothing and helps other people find it.

MIT © Mohammed Sohaib Uddin
