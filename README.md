<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/banner.svg" alt="screenshot-time-machine: a full-page screenshot of every page of your website, in one command" width="100%">
</p>

<h1 align="center">screenshot-time-machine</h1>

<p align="center">
  <b>Screenshot every page of your website with one command.</b><br>
  <code>stm</code> walks your site page by page and saves a full-page screenshot<br>
  of every one into a folder stamped with the date and time.<br>
  Point it at any URL, or let it find the app you have running on localhost.<br>
  Run it whenever you ship something and a visual history builds itself:<br>
  every page, every version, on your own disk, as plain PNGs.<br>
  <b>Free and open source. Runs entirely on your machine.</b>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/screenshot-time-machine"><img src="https://img.shields.io/npm/v/screenshot-time-machine?style=flat-square&label=npm&color=FF8C1A&labelColor=0A0E14" alt="npm version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-FFC24A?style=flat-square&labelColor=0A0E14" alt="MIT license"></a>
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/LinkedIn-Mohammed%20Sohaib%20Uddin-F0509F?style=flat-square&labelColor=0A0E14&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
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
npx screenshot-time-machine@latest                              # the app you have running on localhost
npx screenshot-time-machine@latest --url https://your-site.com  # or any site you are allowed to capture
npx skills add mdsohaib/screenshot-time-machine                 # teach Claude Code, Cursor, Codex and friends to run it
```

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/demo.gif" alt="The same page across three dated snapshots, replaying how the design evolved" width="820">
</p>

<p align="center"><i>Three runs during one evening's redesign, replayed from the dated folders stm saved them in.</i></p>

<h3 align="center">Works with</h3>

<p align="center">
  <a href="#install-it-in-your-ai-coding-agent"><img src="https://img.shields.io/badge/Claude%20Code-FF8C1A?style=for-the-badge&logo=claude&logoColor=white" alt="Claude Code"></a>
  <a href="#install-it-in-your-ai-coding-agent"><img src="https://img.shields.io/badge/Codex-0A0E14?style=for-the-badge" alt="Codex"></a>
  <a href="#install-it-in-your-ai-coding-agent"><img src="https://img.shields.io/badge/Cursor-7FB0F5?style=for-the-badge&logo=cursor&logoColor=0A0E14" alt="Cursor"></a>
  <a href="#install-it-in-your-ai-coding-agent"><img src="https://img.shields.io/badge/Gemini%20CLI-A98BEB?style=for-the-badge&logo=googlegemini&logoColor=0A0E14" alt="Gemini CLI"></a>
  <a href="#install-it-in-your-ai-coding-agent"><img src="https://img.shields.io/badge/Antigravity-C88AE0?style=for-the-badge&logo=google&logoColor=0A0E14" alt="Antigravity"></a>
  <br>
  <a href="#install-it-in-your-ai-coding-agent"><img src="https://img.shields.io/badge/GitHub%20Copilot-F0509F?style=for-the-badge&logo=githubcopilot&logoColor=white" alt="GitHub Copilot"></a>
  <a href="#install-it-in-your-ai-coding-agent"><img src="https://img.shields.io/badge/Windsurf-FFC24A?style=for-the-badge&logo=windsurf&logoColor=0A0E14" alt="Windsurf"></a>
  <a href="#install-it-in-your-ai-coding-agent"><img src="https://img.shields.io/badge/OpenCode-4FC3A1?style=for-the-badge&logo=opencode&logoColor=white" alt="OpenCode"></a>
  <a href="#install-it-in-your-ai-coding-agent"><img src="https://img.shields.io/badge/Cline-6C7CE0?style=for-the-badge&logo=cline&logoColor=white" alt="Cline"></a>
  <a href="#install-it-in-your-ai-coding-agent"><img src="https://img.shields.io/badge/70%2B%20more-5A6478?style=for-the-badge" alt="70+ more agents"></a>
</p>

<p align="center"><i>and the humans who prompt them</i></p>

---

## The one command

You are building. Your app is running on localhost. You type three letters:

```
$ stm
7 pages saved → screenshots/localhost-3000_2026-08-15_14-32/
   Run stm again after your next change to see which pages look different.
```

Seven full-page screenshots, top to bottom, are now sitting in a dated folder next to your code. Open it in Finder or Explorer and your entire site is right there as a contact sheet: home, pricing, about, every product page, the whole thing, exactly as it looks today.

Already live? Point it at the real thing and it works the same way, reading your `sitemap.xml` to find the pages:

```
$ stm --url https://your-site.com
24 pages saved → screenshots/your-site-com_2026-08-15_14-40/
```

That is the tool. Everything below is what that simple thing turns into once you have run it a few times.

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/hero.svg" alt="stm in the terminal beside a folder of dated snapshots, each holding a full-page screenshot of every page" width="820">
</p>

## What you get

**Your whole site in one folder.** Not the one page you happen to have open. Every page, full length, top to bottom, in a folder you can scroll through in ten seconds. It is the fastest way to answer "how does my site actually look right now".

**The pages you would never have opened.** Padding that collapsed on the pricing page. A heading that wrapped badly. A card that lost its image. A footer that drifted. It is all sitting in the same folder waiting to be noticed, instead of waiting to be reported.

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/the-problem.svg" alt="Twelve page thumbnails from one run, laid out side by side, with four of them showing layouts that need attention" width="820">
</p>

<p align="center"><i>Twelve pages from a single run, side by side. Four of them wanted attention, and all four were pages nobody had open.</i></p>

**A history that builds itself.** Every run is its own dated folder, so they stack into a timeline on their own. Last month's home page and today's home page are two files you can flip between. Six months in, you have proof of how far the thing came.

**Phone views in the same run.** `stm --mobile` also captures a 390x844 view of every page, so the heading that wraps badly on a phone lands right next to the desktop shot.

**A shortlist instead of forty tabs.** From the second run onward, `stm` prints the pages whose screenshots came out different from last time. Start there.

**Eyes for your agent.** `stm --json` hands Claude Code, Cursor or Codex the absolute path of every page it just built, so it can look at its own work and fix it before telling you it is done.

**Yours, permanently.** Plain PNG files on your own disk. No account, no cloud, no subscription, no config file, no background process. One dependency, MIT licensed, yours forever.

## Who reaches for it

- **You prompt, the agent builds, and you find out later.** You asked for one page, it edited a shared component, and eleven pages came along for the ride. One command shows you all eleven.
- **You are shipping alone at 1am.** The design pass felt right in the moment. The folder from Tuesday tells you whether it actually was.
- **You are three weeks into a redesign** and cannot quite remember what it used to look like. Capture the site on day one and every screenshot after that is a comparison you never had to set up.
- **You are handing work over.** A folder of full-page screenshots is the clearest status update a client or a teammate will ever get.
- **You want proof of the work.** Version one of anything is worth keeping. Most people work that out around version four.

## Quick start

If you are building locally, start your app the way you normally do (`npm run dev`, `rails s`, `python manage.py runserver`, a static server, anything that serves HTML) and run:

```bash
npx screenshot-time-machine@latest
```

If the site is already online, skip all of that and name it:

```bash
npx screenshot-time-machine@latest --url https://your-site.com
```

**Needs Node 22 or newer.** Run `node -v` to check. If it prints 21 or lower, update Node from [nodejs.org](https://nodejs.org) first.

For screenshots, `stm` uses a Playwright browser you already have cached, or failing that the Chrome or Edge already on your machine. If you have neither, it downloads a headless browser once, about a 120 MB download that takes roughly 200 MB on disk, and tells you before it does. That is the only thing `stm` itself fetches from the internet; the pages you capture load their own resources, exactly as they would in your browser.

Change something, run it again. That is the whole workflow.

Everything below writes the command as `stm` for short. To get that short name, install it once:

```bash
npm install -g screenshot-time-machine
```

Not installing is fine. Write `npx screenshot-time-machine@latest` wherever you see `stm`. Never write `npx stm`: that is an unrelated package from 2014.

<details>
<summary><b>What else happens on the first run</b></summary>

- `stm` probes ports 3000, 3001, 5173, 5174, 8080, 4321, 4322, 8000, 4200 and 5000, in that order, and uses the first app that answers. If several answer, it prefers the one this project used last time and tells you about the others.
- If your project has a `.gitignore`, it adds `screenshots/` to it once and tells you. It never creates a `.gitignore`, and it never deletes anything.
- Pages are found by following the `<a href>` links on them and by reading your `sitemap.xml` if you have one, up to 100 pages per run. Pages reached only by a button click, and hash routes like `/#/about`, have no link to follow, so name those yourself: `stm /about /pricing`.
</details>

## Install it in your AI coding agent

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/agent-loop.svg" alt="The loop: the agent edits UI, runs stm --json, reads the screenshot paths, views the fold images, fixes and runs again" width="820">
</p>

Your agent wrote the pricing page. It wrote the nav. It touched a shared component and eleven pages moved with it. It has never actually looked at any of them, because it has no eyes.

`stm --json` gives it some. The agent runs one command, gets back the absolute path of every page it just built, opens the `fold` image of the ones that came out different, and checks its own work before it tells you it is done.

The good part is what you stop doing. No clicking through eleven pages. No "looks fine" that turns out not to be. You get a folder, you scroll it in ten seconds, and you already know which pages to open first.

One command installs `stm` as a skill: a short instruction file your agent reads, so it knows when to run `stm` and what to do with the result. `npx skills add` is a separate open-source installer that copies that one folder into your project and changes nothing else. Pick your agent:

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

> Install screenshot-time-machine, run `stm` on my app, and show me how the pages look.

Then add one line to the file your agent reads on every request, so it checks its own work without being asked:

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

Claude Code opens screenshots with its Read tool, and `stm --json` hands it absolute paths. The loop is: edit, `stm --json`, Read the `fold` images, fix, repeat. Ask it to "check the UI" and it will reach for the skill on its own.
</details>

<details>
<summary><b>Codex</b></summary>

Put the memory line in `AGENTS.md`. Codex opens images with `view_image`, so if it hesitates, say "view the fold image of every page you touched".
</details>

<details>
<summary><b>Cursor</b></summary>

Put the memory line in a rule under `.cursor/rules/`. The agent runs `stm --json` in its terminal and opens the PNG paths it returns. Cursor's built-in browser shows one page at a time; `stm` hands it all of them at once.
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

One JSON document on stdout, at most two lines on stderr, printed even when some pages fail. The one-time browser download is the exception: its installer also writes to stderr. `code` mirrors the exit code.

A run that cannot start prints a much smaller object instead: `{"code": 1, "error": "no_server" | "no_browser", "message": "...", "fix": "..."}`. Bad arguments print `{"error": "bad_args", "message": "...", "fix": "..."}`, where `fix` is `Run stm --help` for an unknown flag and a worked example for a malformed `--url`. Check `error` before you read `changed`. `truncated` counts entries left out of the list (the cap is 25; the manifest has them all). The output carries paths and numbers only, never text taken from your pages.

**About tokens.** Every page is captured every run, but the agent only opens the ones you point it at, so a quiet run costs almost nothing to read. The summary is roughly 200 tokens plus about 90 per listed page. Viewing one page costs a single 1440x900 image. Very tall full-page screenshots get downscaled by vision models until the text is unreadable, which is exactly why every page also gets a `fold` image, and why the skill tells the agent to open that one first.

## A visual history on disk

```
screenshots/
├── localhost-3000_2026-08-01_09-14/            three weeks ago
├── localhost-3000_2026-08-08_18-02/            last Friday
└── localhost-3000_2026-08-15_14-32/            just now
    ├── manifest_2026-08-15_14-32.json          what was captured, from where, with which browser
    ├── index_2026-08-15_14-32.png              full page, 1440 px wide, as tall as the page
    ├── pricing_2026-08-15_14-32.png
    ├── blog--hello-world_2026-08-15_14-32.png  "/" becomes "--" in file names
    └── fold/
        ├── index_2026-08-15_14-32.png          the top 1440x900 of each page, for quick reading
        └── pricing_2026-08-15_14-32.png
```

Every run is a new folder named after the app and the minute it ran. Every file inside carries the same timestamp, so a screenshot dragged out of its folder still says what it is and when it happened. Two runs in the same minute get `-2`, `-3` on the timestamp. Pages taller than 16,384 px are cut at that height, Chromium's limit, and marked `truncated`.

Sort the folders by date and you are looking at your product's timeline. Pick one page and step through its file in each folder and you are watching it get better. It is plain PNGs all the way down, so this history outlives the tool that made it: no database, no proprietary format, nothing to export. Uninstalling leaves nothing behind but your `screenshots/` folder and, if you had a `.gitignore`, one line in it.

## Commands

| Command | What it does |
|---|---|
| `stm` | Snapshot every page of the app you have running on localhost |
| `stm /pricing /about` | Snapshot only these pages, in seconds. This is the edit-check loop |
| `stm --url https://your-site.com` | Snapshot any site by URL, local or live. A path starts the crawl there |
| `stm --mobile` | Also capture a 390x844 phone view (`@mobile` files) |
| `stm --max 100` | Stop discovering after this many pages (default 100) |
| `stm --out screenshots` | Where snapshots go (default `screenshots`) |
| `stm --json` | Machine-readable summary on stdout, for agents |
| `stm list` | Past snapshots: folder, page count, changed, failed |
| `stm open` | Open the latest snapshot folder |
| `stm skill` | Print the agent skill |

Exit codes: `0` everything captured, `1` nothing captured (no app, no browser, bad arguments), `2` finished with some pages failed or the run interrupted. A failing page never stops the run.

### A few things worth trying

```bash
stm --mobile                     # desktop and phone views of every page, same run
stm /checkout --mobile           # the one flow you just touched, both sizes, in seconds
stm --url https://staging.example.com   # any site you are allowed to capture, not just localhost
stm list                         # every snapshot you have ever taken, oldest to newest
stm open                         # jump straight into the latest folder
```

## How it works

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/how-it-works.svg" alt="detect, discover, capture, compare, report" width="820">
</p>

1. **Detect.** Probe the usual localhost ports and pick the app that answers, or use `--url`.
2. **Discover.** Read `sitemap.xml` if there is one, then follow `<a href>` links from page to page, staying on the same origin.
3. **Capture.** Load each page, scroll it so lazy content arrives, hold everything still, then save a full-page PNG plus a `fold` image of the top screen.
4. **File.** Write everything into a folder named after the app and the minute, with the manifest updated after every single page.
5. **Report.** Print a one-line summary, including which pages came out different from the previous run.

### Why the screenshots are steady

A screenshot tool is only as good as its consistency: capture the same page twice and you should get the same picture. That takes real work, and it is where most of this code lives.

- Pages are scrolled to the bottom before capture so lazy images and lazy sections load, then scrolled back to the top. Smooth-scroll sites are handled.
- Web fonts are awaited, so nothing is captured mid-swap from the fallback face.
- Animations are frozen at their end state, so fade-ins are fully visible and spinners hold still.
- The device pixel ratio is pinned to 1 and the viewport to 1440x900, so a screenshot is the same on your laptop, your desktop and CI.
- Dev toolbars (Astro, Nuxt, the Next.js badge) are hidden. Dev **error** overlays never are: the page is captured as it is and flagged with a warning, because a broken page is exactly what you want to see.
- Long-lived connections (HMR sockets, event streams) never stall a capture. Each page gets a 30 second budget and one retry, then it is recorded and the run moves on.
- The manifest is written after every page, so an interrupted run still leaves a folder `stm list` can read.
- Links to `/logout`, `/delete` and friends are never followed. Neither are files, `/api/`, other origins, or your own `screenshots/` folder.

The payoff: two runs on the same machine produce byte-identical PNGs of a page whose content did not change.

<details>
<summary><b>How the "changed" line is worked out</b></summary>

Every page is captured on every run. What gets compared is not the images, it is their fingerprints:

1. After saving a page's PNG, `stm` computes a **sha256 hash** of that file's bytes.
2. The hash goes into that run's manifest, next to the page path.
3. On the next run, `stm` looks up the same page in the **previous run's manifest** and compares the two hashes.
4. A different hash means the screenshot came out different. The same hash means it did not. No earlier entry means the page is new.

Old screenshots are never reopened, only the small manifest is read, so comparing a hundred pages is instant. You get page names and file paths, which is exactly what you need to open the right screenshots first, or to hand your agent the right ones. Region-level visual diffing is `stm diff` on the roadmap.

A page that shows a clock, a relative time like "3 minutes ago", a rotating hero image or a canvas animation genuinely does look different every run, and will be listed every run.
</details>

## How it compares

| | stm | Claude Code Desktop auto-verify | Playwright MCP, agent-browser, DevTools MCP | Percy, Chromatic |
|---|---|---|---|---|
| Every page in one command | yes | one page at a time | one page per tool call | yes, in CI |
| Browsable history on disk | yes | no | no | in their cloud |
| Lists which pages came out different | yes | no | no | yes, in the cloud |
| Works in the terminal, Cursor, Codex | yes | Desktop only | yes | CI only |
| Runs entirely on your machine | yes | yes | yes | no |
| Free | yes | yes | yes | paid above a free tier |

These tools are complementary, not rivals. Use a browser tool when your agent needs to click around and interact. Use `stm` when you or your agent needs to see everything, all at once, and keep it.

## Privacy

**Runs 100% locally.** `stm` talks only to your app's URL and, once, to Playwright's browser CDN if you have no Chrome or Edge. Your screenshots never leave your machine. No accounts, no API keys, no telemetry. The pages you capture load their own resources exactly as they would in your browser. Full threat model in [SECURITY.md](SECURITY.md).

## FAQ

<details>
<summary><b>Is it really free?</b></summary>
Yes. MIT licensed, open source, no paid tier, no hosted service, nothing to sign up for. Install it, use it forever, fork it if you like.
</details>

<details>
<summary><b>Does it work with Next.js, Vite, Astro, SvelteKit, Rails, Django, static sites?</b></summary>
Yes. Anything that serves HTML, whether it is on your machine or on the internet. The usual localhost ports for all of those are probed automatically; use <code>--url</code> for anything else.
</details>

<details>
<summary><b>How long does a run take?</b></summary>
Pages are captured a few at a time, and most small sites finish in well under a minute. A big site on a cold dev server takes longer, because the first visit to each page is your framework compiling it. Pass the pages you care about (<code>stm /pricing /about</code>) when you want it instant.
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
<summary><b>Every page is listed as different after a while.</b></summary>
Usual causes: your browser updated, which shifts rendering slightly (<code>stm</code> records the browser version and tells you), or your pages show something that moves on its own, like a clock, "3 minutes ago", a random hero image, a canvas animation, or a cookie banner that only appears on the first visit. The screenshots are still correct, so open the ones you care about.
</details>

<details>
<summary><b>Can it run automatically, watching my files?</b></summary>
It runs when you say so, like <code>git commit</code>: you, or your agent, decide when a moment is worth keeping. For automatic capture, put the one-line instruction in your agent's memory file and let the agent run it after every UI change.
</details>

<details>
<summary><b>Can I turn my history into a timelapse?</b></summary>
A first-class <code>stm timelapse</code> is on the roadmap. Today, with ffmpeg:
<pre><code>ffmpeg -framerate 1 -pattern_type glob -i 'screenshots/*/pricing_*.png' \
  -vf "scale=720:-1,split[a][b];[a]palettegen[p];[b][p]paletteuse" pricing.gif</code></pre>
</details>

<details>
<summary><b>I use Lovable, Bolt or v0. Can I use this?</b></summary>
Yes, two ways. Point <code>stm</code> at the URL they publish for you: <code>stm --url https://your-project.lovable.app</code>. Or export the project, run it locally, and <code>stm</code> finds it by itself. Anything built with Claude Code, Cursor, Codex, Windsurf or Copilot on your own machine works out of the box.
</details>

<details>
<summary><b>Why not just write a Playwright script?</b></summary>
You could. <code>stm</code> is that script, plus page discovery, a stable folder layout, steady repeatable captures, agent-friendly output, dev-overlay handling, and all the edge cases, maintained. It is also one command your agent already knows.
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
<summary><b>Can I use it on my live or staging site?</b></summary>
Yes: <code>stm --url https://staging.example.com</code>. It reads that site's <code>sitemap.xml</code> and follows its links exactly as it would locally, stays on that one origin, and never follows destructive-looking links like <code>/logout</code> or <code>/delete</code>. Please only screenshot sites you are allowed to.
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

Built by **Mohammed Sohaib Uddin**, because software that changes every day deserves a record of how it looked.

<p align="left">
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/Connect%20on%20LinkedIn-FF8C1A?style=for-the-badge&logo=linkedin&logoColor=white" alt="Connect on LinkedIn"></a>
  <a href="https://github.com/mdsohaib"><img src="https://img.shields.io/badge/Follow%20on%20GitHub-0A0E14?style=for-the-badge&logo=github&logoColor=white" alt="Follow on GitHub"></a>
</p>

If `stm` shows you something you are glad you saw, a star costs nothing and helps other people find it.

MIT © Mohammed Sohaib Uddin
