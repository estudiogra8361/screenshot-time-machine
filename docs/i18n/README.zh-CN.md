<p align="center">
  <a href="../../README.md">English</a> ·
  简体中文 ·
  <a href="README.es.md">Español</a> ·
  <a href="README.hi.md">हिन्दी</a> ·
  <a href="README.pt-BR.md">Português</a> ·
  <a href="README.ja.md">日本語</a> ·
  <a href="README.de.md">Deutsch</a> ·
  <a href="README.fr.md">Français</a> ·
  <a href="README.ko.md">한국어</a> ·
  <a href="README.ru.md">Русский</a> ·
  <a href="README.ar.md">العربية</a>
</p>

*本文译自英文 README。如有疑问，请以英文版为准。*

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/banner.svg" alt="screenshot-time-machine：一条命令，为你 localhost 应用的每个页面截图、标注日期并对比差异" width="100%">
</p>

<h1 align="center">screenshot-time-machine</h1>

<p align="center">
  <b>整页截图命令行工具：一条命令为本地网站的每个页面截图。</b><br>
  一次性为你正在开发的应用的每个页面拍下整页截图。<br>
  截图按日期存进文件夹。下次再运行时，它会准确告诉你哪些页面变了。<br>
  <b>免费开源，全程在你自己的机器上运行。</b>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/screenshot-time-machine"><img src="https://img.shields.io/npm/v/screenshot-time-machine?style=flat-square&label=npm&color=FF6600&labelColor=0A0E14" alt="npm 版本"></a>
  <a href="https://github.com/mdsohaib/screenshot-time-machine/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/mdsohaib/screenshot-time-machine/ci.yml?branch=main&style=flat-square&label=tests&color=FF6600&labelColor=0A0E14" alt="测试"></a>
  <img src="https://img.shields.io/badge/dependencies-1-FF6600?style=flat-square&labelColor=0A0E14" alt="仅一个依赖">
  <img src="https://img.shields.io/badge/node-22%2B-FF6600?style=flat-square&labelColor=0A0E14&logo=nodedotjs&logoColor=white" alt="Node 22+">
  <a href="../../LICENSE"><img src="https://img.shields.io/badge/license-MIT-FF6600?style=flat-square&labelColor=0A0E14" alt="MIT 许可证"></a>
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/LinkedIn-Mohammed%20Sohaib%20Uddin-FF6600?style=flat-square&labelColor=0A0E14&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
</p>

```bash
npx screenshot-time-machine@latest               # your app is on localhost? that is the whole setup
npx skills add mdsohaib/screenshot-time-machine  # teach Claude Code, Cursor, Codex and friends to run it
```

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/hero.svg" alt="stm 在终端里报告一个发生变化的页面，旁边是一个按日期归档的快照文件夹" width="820">
</p>

<p align="center">
  <b>支持以下工具</b><br>
  <img src="https://img.shields.io/badge/Claude%20Code-0A0E14?style=flat-square&logo=claude&logoColor=FF6600" alt="Claude Code">
  <img src="https://img.shields.io/badge/Codex-0A0E14?style=flat-square" alt="Codex">
  <img src="https://img.shields.io/badge/Cursor-0A0E14?style=flat-square&logo=cursor&logoColor=FF6600" alt="Cursor">
  <img src="https://img.shields.io/badge/Gemini%20CLI-0A0E14?style=flat-square&logo=googlegemini&logoColor=FF6600" alt="Gemini CLI">
  <img src="https://img.shields.io/badge/Antigravity-0A0E14?style=flat-square" alt="Antigravity">
  <img src="https://img.shields.io/badge/Copilot-0A0E14?style=flat-square&logo=githubcopilot&logoColor=FF6600" alt="GitHub Copilot">
  <img src="https://img.shields.io/badge/Windsurf-0A0E14?style=flat-square&logo=windsurf&logoColor=FF6600" alt="Windsurf">
  <img src="https://img.shields.io/badge/OpenCode-0A0E14?style=flat-square&logo=opencode&logoColor=FF6600" alt="OpenCode">
  <img src="https://img.shields.io/badge/Cline-0A0E14?style=flat-square" alt="Cline">
  <br><i>以及使用它们的人</i>
</p>

---

## 这是什么

`stm` 是一个免费开源的命令行工具。在你的网站于本机运行时启动它，它会：

1. **找到你的站点**，自动在 localhost 上探测，或者用 `--url` 指定位置。
2. **找到你的页面**，沿着页面上的 `<a href>` 链接抓取，如果有 `sitemap.xml` 也一并读取，每次运行最多 100 个页面。只能通过点击按钮到达的页面，以及 `/#/about` 这类哈希路由，无法被跟踪。这些页面请自己指定：`stm /about /pricing`。
3. **为每个页面拍下完整长图**，从顶到底，另外再拍一张只包含页面顶部、也就是一屏之内的图。第二张叫 `fold` 图，你应该先看它。
4. **保存为普通的 PNG 文件**，放进以日期和时间命名的文件夹里。
5. **与上一次对比**，准确告诉你哪些页面变了。

```
$ stm
7 pages saved → screenshots/localhost-3000_2026-08-15_14-32/
   1 changed since last snapshot (Aug 12, 09:10): /pricing
```

无需账号。没有云端。不用订阅。没有配置文件。没有后台进程。仅一个依赖，MIT 许可，永远属于你。

## 它解决的问题

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/the-problem.svg" alt="十二个页面缩略图。其中一个标注为你看过的页面。另有四个已经坏掉。" width="820">
</p>

改动一个共享组件、布局或样式表，你根本不知道它对另外四十个页面做了什么。唯一诚实的确认方式是逐个打开页面去看，所以没人会真的去做。

AI 编码智能体让这个问题更尖锐了。你让它修一下定价页，它改了一个共享文件，关于页面就悄悄多出一块空白。智能体从来看不到结果，你也看不到。

Git 记录了你代码的每一行，却记不下站点的任何一个像素。可视化测试服务要求你搭 CI 流水线，还要按月付费。手动截图撑不过第四个页面，而且没人会留着那些文件。

## 它带来什么

- **在用户之前发现坏掉的页面。** 一条命令，覆盖所有页面，直接给出变更清单。
- **给你的 AI 智能体一双眼睛。** `stm --json` 把变更页面的文件路径交给它，于是它只打开这些页面，修好自己弄坏的地方。
- **留下一份视觉历史。** 每次运行都是一个按日期命名、装满普通 PNG 的文件夹。往回翻，就能看到你的站点在三月是什么样子，直接在访达或资源管理器里看。

## 快速开始

你的应用需要在 localhost 上运行（`npm run dev`、`rails s`、`python manage.py runserver`、静态服务器，任何能提供 HTML 的东西都行）。然后：

```bash
npx screenshot-time-machine@latest
```

**需要 Node 22 或更高版本。** 运行 `node -v` 检查。如果显示 21 或更低，请先从 [nodejs.org](https://nodejs.org) 更新 Node。

首次运行会使用你机器上已有的 Chrome 或 Edge。如果两者都没有，它会一次性下载一个浏览器，大约 120 MB，并在下载前告诉你。这是 stm 唯一一次从互联网获取内容。

改点东西，再运行一次，看那行 `changed`。整个工作流就是这样。

下文都把命令简写为 `stm`。想用这个短名字，安装一次即可：

```bash
npm install -g screenshot-time-machine
```

不安装也完全没问题。看到 `stm` 的地方，写成 `npx screenshot-time-machine@latest` 就行。千万不要写 `npx stm`：那是 2014 年一个毫不相干的包。

<details>
<summary><b>首次运行还会发生什么</b></summary>

- `stm` 会按顺序探测端口 3000、3001、5173、5174、8080、4321、4322、8000、4200 和 5000，使用第一个有响应的应用。如果有多个响应，它会优先选择本项目上次用过的那个，并把其他的告诉你。
- 如果你的项目里有 `.gitignore`，它会往里加一次 `screenshots/` 并告知你。它从不创建 `.gitignore`，也从不删除任何东西。
</details>

## 装进你的 AI 编码智能体

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/agent-loop.svg" alt="闭环流程：智能体改动界面，运行 stm --json，拿到变更清单，查看 fold 图，修复后再跑一次" width="820">
</p>

一条命令就能把 `stm` 装成一个技能：一份简短的说明文件，智能体读了就知道何时运行 `stm`、如何理解结果。`npx skills add` 是一个独立的开源安装器，它只把那一个文件夹复制进你的项目，不改动别的任何东西。选你的智能体：

| 智能体 | 命令 | 技能安装到 |
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
| **其他工具** | `npx skills add mdsohaib/screenshot-time-machine` | 从 70 多个智能体的列表里选 |

给上面任意一条加上 `-g`，就会为所有项目安装，而不只是当前这个。

或者，直接用大白话告诉你的智能体：

> 安装 screenshot-time-machine，在我的应用上运行 `stm`，然后告诉我有什么变化。

接着在智能体每次请求都会读取的那个文件里加一行，这样它不用你提醒也会自己核验成果：

```
After changing anything a user can see, run `stm --json` (or `npx -y screenshot-time-machine@latest --json` if `stm` is not installed) and view the `fold` image of every entry in `changed` and `new` before saying you're done. On the very first snapshot both lists are empty, so view the fold images of the pages you edited instead. Never claim a UI change is verified without viewing a screenshot.
```

这一行该放在哪里，按智能体划分：

| 智能体 | 文件 |
|---|---|
| Claude Code | `CLAUDE.md` |
| Codex、Antigravity、OpenCode | `AGENTS.md` |
| Gemini CLI | `GEMINI.md` |
| Cursor | `.cursor/rules/stm.mdc`，开头写 `---`，然后 `alwaysApply: true`，再写 `---` |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Windsurf | `.windsurf/rules/stm.md` |
| Cline | `.clinerules/stm.md` |

<details>
<summary><b>Claude Code：插件安装方式，以及这个闭环用起来什么感觉</b></summary>

技能是最省事的路子。如果你更喜欢插件，在 Claude Code 里运行：

```
/plugin marketplace add mdsohaib/screenshot-time-machine
/plugin install stm@stm
```

GitHub 上没配 SSH 密钥？用 URL 形式：`/plugin marketplace add https://github.com/mdsohaib/screenshot-time-machine.git`

Claude Code 用它的 Read 工具打开截图，而 `stm --json` 给的正是绝对路径。闭环是：改代码，`stm --json`，Read 变更页面的 `fold` 图，修，重复。让它去「检查一下 UI」，它自己就会用上这个技能。
</details>

<details>
<summary><b>Codex</b></summary>

把那行记忆写进 `AGENTS.md`。Codex 用 `view_image` 打开图片，所以如果它犹豫不决，就说「查看每个变更页面的 fold 图」。
</details>

<details>
<summary><b>Cursor</b></summary>

把那行记忆写进 `.cursor/rules/` 下的一条规则里。智能体会在终端里运行 `stm --json`，然后打开返回的 PNG 路径。Cursor 内置的浏览器一次只能看一个页面；`stm` 把所有页面连同差异一起交给它。
</details>

<details>
<summary><b>任何不支持技能的智能体</b></summary>

`stm skill` 会打印技能文本。把它粘贴到你的智能体会读取的任意说明文件里。这种做法不需要安装任何东西：

```bash
npx screenshot-time-machine@latest skill
```
</details>

### 智能体拿到的是什么

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

stdout 上是一份 JSON 文档，stderr 上最多两行，即使部分页面失败也照样输出。`code` 与退出码一致。

如果一次运行根本无法开始，输出的对象会小得多：`{"code": 1, "error": "no_server" | "no_browser", "message": "...", "fix": "..."}`。参数有误则输出 `{"error": "bad_args", "message": "...", "fix": "Run stm --help"}`。读 `changed` 之前先看 `error`。`truncated` 表示被排除在列表之外的条目数量（上限是 25；清单文件里是全的）。输出中永远不含页面文本，只有路径和数字。

**关于 token。** 未变更的页面不花任何成本，因为智能体压根不会打开它们。摘要大约 150 个 token，每个变更页面再加大约 50 个。查看一个变更页面的开销是一张 1440x900 的图片。特别长的整页截图会被视觉模型缩小到文字无法辨认，这正是每个页面都额外生成一张 `fold` 图的原因，也是技能里要求智能体先看那一张的原因。

## 磁盘上的视觉历史

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

每次运行都会新建一个文件夹，以应用名和运行的那一分钟命名。里面的每个文件都带着同样的时间戳，所以一张截图即使被拖出文件夹，也依然说得清它是什么、发生在什么时候。同一分钟内运行两次，时间戳后会加上 `-2`、`-3`。高度超过 16,384 px 的页面会在这个高度被截断，这是 Chromium 的上限，并标记为 `truncated`。

在访达或资源管理器里打开这个文件夹，你就有了一本项目相册。历史就是普通的 PNG，所以它比这个工具活得更久。卸载之后什么都不会留下，只剩 `screenshots/` 文件夹，以及你原本有 `.gitignore` 的话，里面多出的那一行。

## 命令

| 命令 | 作用 |
|---|---|
| `stm` | 为运行在 localhost 上的应用的每个页面拍快照 |
| `stm /pricing /about` | 只拍这些页面，几秒钟搞定。这就是改动即验证的闭环 |
| `stm --url http://localhost:4321` | 拍这个应用，不再自动探测。带路径则从那里开始抓取 |
| `stm --mobile` | 额外拍一张 390x844 的手机视图（`@mobile` 文件） |
| `stm --max 100` | 发现到这个数量的页面后停止（默认 100） |
| `stm --out screenshots` | 快照存放位置（默认 `screenshots`） |
| `stm --json` | 在 stdout 输出机器可读的摘要，供智能体使用 |
| `stm list` | 过往快照：文件夹、页面数、变更数、失败数 |
| `stm open` | 打开最新的快照文件夹 |
| `stm skill` | 打印智能体技能 |

退出码：`0` 全部拍摄成功，`1` 一个都没拍到（没有应用、没有浏览器、参数有误），`2` 运行结束但有页面失败或过程被中断。单个页面失败绝不会终止整次运行。

## 它如何发现页面、如何追踪变化

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/how-it-works.svg" alt="探测、发现、拍摄、比对、报告" width="820">
</p>

让截图值得信赖的那些细节：

- 拍摄前页面会先滚动到底部，好让懒加载的图片和区块加载出来，然后再滚回去。平滑滚动的站点也能正确处理。
- 动画被冻结在结束状态，因此淡入内容可见，加载转圈也不会动。在同一台机器上运行两次，内容没变的页面会产出逐字节相同的 PNG，这才让「变更」二字有意义。而显示时钟、相对时间、轮播主图或 canvas 动画的页面，会一直被报告为已变更。
- 开发工具栏（Astro、Nuxt、Next.js 的角标）会被隐藏。开发**错误**浮层则永远不隐藏：页面按原样拍下来，并附一条警告，因为坏掉的页面正是你想看到的。
- 长连接（HMR 套接字、事件流）绝不会卡住拍摄。每个页面有 30 秒的额度和一次重试，之后记为失败，运行继续往下走。
- 每拍完一个页面就写一次清单文件，所以被中断的运行也会留下一个 `stm list` 能读取的文件夹，摘要里会说明它提前结束了。
- 指向 `/logout`、`/delete` 之类的链接永远不会被跟踪。文件、`/api/`、其他源站、以及你自己的 `screenshots/` 文件夹也一样。

## 与可视化回归测试工具的对比

| | stm | Claude Code Desktop 自动核验 | Playwright MCP、agent-browser、DevTools MCP | Percy、Chromatic |
|---|---|---|---|---|
| 一条命令覆盖所有页面 | 是 | 一次一个页面 | 一次工具调用一个页面 | 是，在 CI 里 |
| 告诉你哪些页面变了 | 是 | 否 | 否 | 是，在云端 |
| 可在终端、Cursor、Codex 中使用 | 是 | 仅桌面端 | 是 | 仅 CI |
| 磁盘上可翻阅的历史 | 是 | 否 | 否 | 在他们的云上 |
| 全程在你的机器上运行 | 是 | 是 | 是 | 否 |

`stm` 是可视化回归测试中免费、本地的那一半：它告诉你哪些页面变了，并把像素交到你手上，不需要 CI 流水线，不需要账号，也没有月费。这些工具是互补关系，不是对手。当你的智能体需要点来点去时，用浏览器工具。当它需要看清自己刚刚碰过的一切时，用 `stm`。

## 隐私

**100% 本地运行。** `stm` 只与你应用的 URL 通信；如果你既没有 Chrome 也没有 Edge，它还会一次性访问 Playwright 的浏览器 CDN。你的截图绝不会离开你的机器。没有账号，没有 API 密钥，没有遥测。被拍摄的页面加载自身资源的方式，和在你浏览器里完全一样。完整威胁模型见 [SECURITY.md](../../SECURITY.md)。

## 常见问题

<details>
<summary><b>真的免费吗？</b></summary>
是的。MIT 许可，开源，没有付费版，没有托管服务，什么都不用注册。装上，永久使用，喜欢的话尽管 fork。
</details>

<details>
<summary><b>它支持 Next.js、Vite、Astro、SvelteKit、Rails、Django、静态站点吗？</b></summary>
支持。任何在 localhost 上提供 HTML 的东西都行。上述框架的常用端口都会被自动探测；其他情况用 <code>--url</code>。
</details>

<details>
<summary><b>它只找到了我的首页。</b></summary>
页面是从你的 sitemap 和 <code>&lt;a href&gt;</code> 链接中发现的。用按钮跳转或哈希路由（<code>/#/about</code>）的应用没有可跟踪的链接。把页面写出来：<code>stm /about /pricing</code>。技能里已经要求智能体传入它改过的页面。
</details>

<details>
<summary><b>我的截图大多是登录页。</b></summary>
你的应用重定向到了登录。<code>stm</code> 目前还不能登录，遇到这种情况它会告诉你。登录态拍摄已在路线图上。
</details>

<details>
<summary><b>过一段时间后所有页面都显示为已变更。</b></summary>
常见原因：你的浏览器更新了，渲染会有细微偏移（<code>stm</code> 会记录浏览器版本并提醒你）；或者页面上有会自己变的东西，比如时钟、「3 分钟前」、随机的主视觉图、canvas 动画，或者首次访问后就消失的 cookie 横幅。把这些页面单独指定出来，用眼睛看，等 <code>stm diff</code> 上线。
</details>

<details>
<summary><b>它能自动运行、监听我的文件变化吗？</b></summary>
不能，这是故意的。<code>stm</code> 是一个存档点按钮，就像 <code>git commit</code>：由你或你的智能体决定哪个时刻值得留下来。想要自动化，就把那一行说明放进智能体的记忆文件，让智能体自己决定。
</details>

<details>
<summary><b>我能把历史做成延时视频吗？</b></summary>
原生的 <code>stm timelapse</code> 已在路线图上。现在可以用 ffmpeg：
<pre><code>ffmpeg -framerate 1 -pattern_type glob -i 'screenshots/*/pricing_*.png' \
  -vf "scale=720:-1,split[a][b];[a]palettegen[p];[b][p]paletteuse" pricing.gif</code></pre>
</details>

<details>
<summary><b>我用 Lovable、Bolt 或 v0，能用这个吗？</b></summary>
它们把你的应用跑在自家云上，所以没有 localhost 可以截图。把项目导出来，在本地跑起来，<code>stm</code> 就能用。用 Claude Code、Cursor、Codex、Windsurf 或 Copilot 在你自己机器上构建的项目，开箱即用。
</details>

<details>
<summary><b>为什么不直接写个 Playwright 脚本？</b></summary>
你当然可以。<code>stm</code> 就是那个脚本，外加页面发现、稳定的文件夹结构、变更检测、对智能体友好的输出、开发浮层处理，以及所有边角情况，而且有人维护。它还是一条你的智能体早就认识的命令。
</details>

<details>
<summary><b>Linux 提示浏览器缺少库文件。</b></summary>
把它打印出来的 <code>install-deps</code> 命令运行一次即可。WSL 和 Codespaces 同样需要。
</details>

<details>
<summary><b>下载的浏览器放在哪里？</b></summary>
Playwright 的缓存目录：macOS 上是 <code>~/Library/Caches/ms-playwright</code>，Linux 上是 <code>~/.cache/ms-playwright</code>，Windows 上是 <code>%LOCALAPPDATA%\ms-playwright</code>。随时可以删；需要时 <code>stm</code> 会重新下载。
</details>

<details>
<summary><b>能指向不在 localhost 上的站点吗？</b></summary>
可以：<code>stm --url https://staging.example.com</code>。它会留在那个源站内，并跳过看起来有破坏性的链接。请只拍摄你有权拍摄的站点。
</details>

## 路线图

刻意保持精简。开一个 issue 来投票。

- `stm diff`：精确显示页面上哪些区域变了，并把裁剪片段而非整页交给智能体
- `stm timelapse`：把一个页面的历史变成 GIF 或 MP4，带 git 提交说明字幕
- `stm backfill`：遍历你的 git 历史，补出你从未拍过的视觉历史
- 登录态拍摄（`--storage-state`）
- 带时间滑块的本地画廊

不打算做：云同步、账号体系、遥测、监听模式、配置文件。

## 参与贡献

现在最有用的，是附上一次真实运行记录的缺陷报告。从 [CONTRIBUTING.md](../../CONTRIBUTING.md) 开始，然后看 [AGENTS.md](../../AGENTS.md) 里的模块地图和规则。每个决定及其理由都记在 [DECISIONS.md](../../DECISIONS.md)。

## 关于

由 **Mohammed Sohaib Uddin** 打造，因为那些交付了却没人看过的界面，需要一个能被看见的办法。

<p align="left">
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/Connect%20on%20LinkedIn-FF6600?style=for-the-badge&logo=linkedin&logoColor=white" alt="在 LinkedIn 上联系"></a>
  <a href="https://github.com/mdsohaib"><img src="https://img.shields.io/badge/Follow%20on%20GitHub-0A0E14?style=for-the-badge&logo=github&logoColor=white" alt="在 GitHub 上关注"></a>
</p>

如果 `stm` 帮你拦下了一个坏掉的页面，点个 star 不花什么，却能帮更多人找到它。

MIT © Mohammed Sohaib Uddin
