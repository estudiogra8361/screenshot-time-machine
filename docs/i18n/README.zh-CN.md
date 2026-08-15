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
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/banner.svg" alt="screenshot-time-machine：一条命令，给 localhost 应用的每个页面截图、标注日期并对比差异" width="100%">
</p>

<p align="center">
  <b>一条命令，为网站的每个页面拍一张整页截图。</b><br>
  截图按日期存进文件夹。下次再运行，它会直接告诉你哪些页面变了。<br>
  <b>免费开源。全部在你自己的电脑上运行。</b>
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
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/hero.svg" alt="终端里 stm 报告有一个页面发生变化，旁边是按日期归档的快照文件夹" width="820">
</p>

<p align="center">
  <b>支持这些工具</b><br>
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

`stm` 是一个免费开源的命令行工具。你的网站在本机跑起来之后运行它，它会：

1. **找到你的站点**：自动在 localhost 上查找，或者用 `--url` 指定位置。
2. **找出所有页面**：从 sitemap 和页面链接里发现。
3. **给每个页面拍整页截图**，从顶到底，另外再拍一张便于快速查看的首屏视图。
4. **保存为普通 PNG 文件**，放进以日期和时间命名的文件夹。
5. **和上一次对比**，明确告诉你哪些页面变了。

```
$ stm
7 pages saved → screenshots/localhost-3000_2026-08-15_14-32/
   1 changed since last snapshot (Aug 12, 09:10): /pricing
```

不需要账号。不上云。不用订阅。没有配置文件。没有后台进程。一个依赖，MIT 许可，永远归你。

## 它解决的问题

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/the-problem.svg" alt="十二张页面缩略图。其中一张标注为你查看过的页面，另有四张已经出问题。" width="820">
</p>

改动一个共享组件、布局或样式表之后，你根本不知道另外四十个页面变成了什么样。唯一诚实的办法是把每个页面都打开看一遍，所以没人真的会做。

AI 编码助手让这个问题更尖锐了。你让它修一下定价页，它改了一个共享文件，关于页面就悄悄多出一块空白。助手看不到结果，你也看不到。

Git 记录了你代码里的每一行，却记不下站点的任何一个像素。视觉测试服务要求你搭 CI 流水线，还要按月付费。手动截图撑不过第四个页面，而且文件根本没人留。

## 它带来什么

- **在用户发现之前先发现坏掉的页面。** 一条命令，覆盖所有页面，给出一份变更清单。
- **让你的 AI 助手看得见。** `stm --json` 把变更页面的文件路径交给它，它只打开这些页面，修好自己弄坏的地方。
- **留下一份视觉历史。** 每次运行都是一个按日期命名、装满普通 PNG 的文件夹。往回翻就能看到站点三月份的样子，在访达或资源管理器里直接看。

## 快速上手

你的应用需要在 localhost 上运行（`npm run dev`、`rails s`、`python manage.py runserver`、静态服务器，任何能提供 HTML 的方式都行）。然后：

```bash
npx screenshot-time-machine@latest
```

改点东西，再运行一次，看 `changed` 那一行。整个工作流就这么多。

<details>
<summary><b>装一次，之后直接用 <code>stm</code></b></summary>

```bash
npm install -g screenshot-time-machine
stm
```

请始终写 `npx screenshot-time-machine@latest`，不要写 `npx stm`。npm 上的 `stm` 这个名字属于 2014 年一个毫无关系的包。
</details>

<details>
<summary><b>第一次运行时会发生什么</b></summary>

- `stm` 按顺序探测 3000、3001、5173、5174、8080、4321、4322、8000、4200 和 5000 端口，使用第一个有响应的应用。如果多个都有响应，它会优先选这个项目上次用过的那个，并告诉你还有哪些。
- 它会使用你已有的 Playwright 浏览器，或者你机器上的 Chrome、Edge。如果都没有，它会下载一次无头 Chrome（约 120 MB），并明确告知。
- 如果你的项目有 `.gitignore`，它会往里追加一次 `screenshots/` 并告诉你。它从不创建 `.gitignore`，也从不删除任何东西。
</details>

**运行要求：** Node 22 或更高版本。如果你能跑 `npm run dev`，那基本上已经有了。不确定？运行 `node -v`。

## 在 AI 编码助手里安装

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/agent-loop.svg" alt="循环流程：助手修改界面，运行 stm --json，拿到变更清单，查看首屏图片，修复后再跑一次" width="820">
</p>

一条命令就能把 `stm` 装成一个技能，助手因此知道什么时候该运行它、怎么读结果。挑你的助手：

| 助手 | 命令 | 技能安装位置 |
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
| **其他任意助手** | `npx skills add mdsohaib/screenshot-time-machine` | 从 70 多个助手的列表里选 |

在上面任意一条命令后加 `-g`，就是为所有项目安装，而不只是当前这个。

或者直接用大白话告诉你的助手：

> 安装 screenshot-time-machine，在我的应用上运行 `stm`，然后告诉我哪些页面变了。

接着，在助手会读取的记忆文件里（`CLAUDE.md`、`AGENTS.md`、`GEMINI.md`、`.cursor/rules`）加上一行，让它不用你开口也会自己验证成果：

```
After changing anything a user can see, run `stm --json` and view the `fold` image of every entry in `changed` and `new` before saying you're done. Never claim a UI change is verified without viewing a screenshot.
```

<details>
<summary><b>Claude Code：以插件方式安装，以及这个循环用起来是什么感觉</b></summary>

技能是最省事的路径。如果你更喜欢插件，在 Claude Code 里运行：

```
/plugin marketplace add mdsohaib/screenshot-time-machine
/plugin install stm@stm
```

GitHub 上没配 SSH 密钥？用 URL 形式：`/plugin marketplace add https://github.com/mdsohaib/screenshot-time-machine.git`

Claude Code 用它的 Read 工具打开截图，而 `stm --json` 给的正是绝对路径。循环是这样的：修改，跑 `stm --json`，Read 变更页面的 `fold` 图片，修复，再来一遍。你只要说“检查一下界面”，它自己就会去用这个技能。
</details>

<details>
<summary><b>Codex</b></summary>

把那行记忆指令放进 `AGENTS.md`。Codex 用 `view_image` 打开图片，所以如果它犹豫不决，就说“查看每个变更页面的 fold 图片”。
</details>

<details>
<summary><b>Cursor</b></summary>

把那行记忆指令放进 `.cursor/rules/` 下的一条规则里。助手会在终端运行 `stm --json`，然后打开返回的 PNG 路径。Cursor 自带的浏览器一次只能看一个页面；`stm` 把所有页面连同差异一起交给它。
</details>

<details>
<summary><b>任何不支持技能的助手</b></summary>

`stm skill` 会打印技能文本。把它粘贴到你的助手会读的那个指令文件里。

```bash
stm skill
```
</details>

### 助手拿到的是什么

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

stdout 上只有一份 JSON 文档，stderr 上最多两行，即使部分页面失败也照样输出。`code` 与退出码一致。`truncated` 统计的是清单里被省略的条目（上限是 25 条，manifest 里则全都有）。输出中永远不含页面文本，只有路径和数字。

**关于 token。** 没有变化的页面看一眼都不花钱，因为助手根本不会打开它们。摘要大约 150 个 token，每个变更页面再加大约 50 个。查看一个变更页面的成本是一张 1440x900 的图片。特别长的整页截图会被视觉模型缩放到文字看不清为止，这正是每个页面还会额外生成一张 `fold` 图片的原因，也是技能会让助手先打开那一张的原因。

## 硬盘上的视觉历史

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

每次运行都会新建一个文件夹，以应用名和运行的那一分钟命名。里面每个文件都带同样的时间戳，所以一张截图被拖出文件夹之后，依然说得清自己是什么、什么时候拍的。同一分钟内跑两次，时间戳后面会加 `-2`、`-3`。高于 16,384 px 的页面会在该高度处截断，这是 Chromium 的上限，并标记为 `truncated`。

在访达或资源管理器里打开这个文件夹，你就有了一本项目相册。历史记录是普通 PNG，因此它比这个工具活得更久。卸载之后什么都不会留下，只剩 `screenshots/` 文件夹，以及你原本就有 `.gitignore` 的话里面多的那一行。

## 命令

| 命令 | 作用 |
|---|---|
| `stm` | 为 localhost 上运行的应用的每个页面拍快照 |
| `stm /pricing /about` | 只拍这些页面，几秒钟搞定。这就是改动后的检查循环 |
| `stm --url http://localhost:4321` | 拍指定的这个应用，不再自动检测。带路径则从该路径开始抓取 |
| `stm --mobile` | 额外拍一张 390x844 的手机视图（`@mobile` 文件） |
| `stm --max 100` | 发现到这么多页面后停止（默认 100） |
| `stm --out screenshots` | 快照存放位置（默认 `screenshots`） |
| `stm --json` | 在 stdout 输出机器可读的摘要，供助手使用 |
| `stm list` | 历史快照：文件夹、页面数、变更数、失败数 |
| `stm open` | 打开最新的快照文件夹 |
| `stm skill` | 打印助手技能 |

退出码：`0` 表示全部拍完，`1` 表示什么都没拍到（没有应用、没有浏览器、参数有误），`2` 表示结束时有页面失败或运行被中断。单个页面失败绝不会终止整次运行。

## 它如何发现页面并追踪变化

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/how-it-works.svg" alt="检测、发现、拍摄、对比、报告" width="820">
</p>

让截图值得信赖的那些细节：

- 拍摄前页面会先滚动到底，让懒加载的图片和区块都加载出来，然后再滚回去。平滑滚动的站点也能处理。
- 动画会被冻结在结束状态，于是淡入内容可见，加载转圈也不会动。同一台机器上跑两次会得到字节级一致的 PNG，正因如此，“变了”才是有意义的。
- 开发工具条（Astro、Nuxt、Next.js 的角标）会被隐藏。开发**错误**浮层则绝不隐藏：页面被原样拍下并附上警告，因为坏掉的页面正是你最该看到的。
- 长连接（HMR 套接字、事件流）绝不会拖住拍摄。每个页面有 30 秒的额度和一次重试，之后记为失败，运行继续。
- manifest 在每个页面之后都会写入，所以即使运行被中断，留下的文件夹 `stm list` 依然读得了，摘要也会说明它提前结束了。
- 指向 `/logout`、`/delete` 之类的链接绝不会被跟进。文件、`/api/`、其他源站，以及你自己的 `screenshots/` 文件夹也一样。

## 它与其他方案的比较

| | stm | Claude Code Desktop 自动验证 | Playwright MCP、agent-browser、DevTools MCP | Percy、Chromatic |
|---|---|---|---|---|
| 一条命令覆盖所有页面 | 是 | 一次一个页面 | 一次工具调用一个页面 | 是，在 CI 里 |
| 告诉你哪些页面变了 | 是 | 否 | 否 | 是，在云端 |
| 可在终端、Cursor、Codex 里用 | 是 | 仅桌面端 | 是 | 仅 CI |
| 硬盘上可浏览的历史 | 是 | 否 | 否 | 在他们的云上 |
| 完全在你的机器上运行 | 是 | 是 | 是 | 否 |

它们是互补关系，不是竞争关系。需要助手到处点击时，用浏览器类工具。需要它看清自己刚刚改过的一切时，用 `stm`。

## 隐私

**100% 本地运行。** `stm` 只与你应用的 URL 通信；如果你既没有 Chrome 也没有 Edge，它还会访问一次 Playwright 的浏览器 CDN。你的截图从不离开你的机器。没有账号，没有 API 密钥，没有遥测。被拍摄的页面加载自己的资源，和在你浏览器里完全一样。完整的威胁模型见 [SECURITY.md](../../SECURITY.md)。

## 常见问题

<details>
<summary><b>真的是免费的吗？</b></summary>
是的。MIT 许可，开源，没有付费档位，没有托管服务，什么都不用注册。装上它，一直用下去，想 fork 就 fork。
</details>

<details>
<summary><b>它支持 Next.js、Vite、Astro、SvelteKit、Rails、Django、静态站点吗？</b></summary>
支持。任何在 localhost 上提供 HTML 的东西都行。这些框架的常用端口都会被自动探测；其他情况用 <code>--url</code>。
</details>

<details>
<summary><b>它只找到了我的首页。</b></summary>
页面是从 sitemap 和 <code>&lt;a href&gt;</code> 链接里发现的。用按钮跳转或哈希路由（<code>/#/about</code>）的应用没有可跟进的链接。直接点名页面即可：<code>stm /about /pricing</code>。助手已经被告知要把自己改动过的页面传进来。
</details>

<details>
<summary><b>我的截图大部分都是登录页。</b></summary>
你的应用把请求重定向到了登录页。<code>stm</code> 目前还不能登录，遇到这种情况它会告诉你。登录态拍摄已在路线图上。
</details>

<details>
<summary><b>过了一段时间，所有页面都显示为已变更。</b></summary>
常见原因：你的浏览器升级了，渲染会略有偏移（<code>stm</code> 会记录浏览器版本并提醒你）；或者页面上有会自己变化的东西，比如时钟、“3 分钟前”、随机的主视觉图、canvas 动画，或者首次访问后就消失的 cookie 横幅。把这些页面显式传进来，先用肉眼看，等 <code>stm diff</code> 上线。
</details>

<details>
<summary><b>它能自动运行，监听我的文件吗？</b></summary>
不能，这是有意为之。<code>stm</code> 是一个存档按钮，就像 <code>git commit</code>：由你或你的助手决定哪个时刻值得留下。如果你想要自动化，把那行指令放进助手的记忆文件，让助手来决定。
</details>

<details>
<summary><b>我能把历史做成延时视频吗？</b></summary>
原生的 <code>stm timelapse</code> 已在路线图上。眼下可以用 ffmpeg：
<pre><code>ffmpeg -framerate 1 -pattern_type glob -i 'screenshots/*/pricing_*.png' \
  -vf "scale=720:-1,split[a][b];[a]palettegen[p];[b][p]paletteuse" pricing.gif</code></pre>
</details>

<details>
<summary><b>我用 Lovable、Bolt 或 v0，能用这个工具吗？</b></summary>
它们在自己的云端运行你的应用，因此没有可截图的 localhost。把项目导出，在本地跑起来，<code>stm</code> 就能用。凡是用 Claude Code、Cursor、Codex、Windsurf 或 Copilot 在你自己机器上做出来的项目，开箱即用。
</details>

<details>
<summary><b>为什么不直接写一个 Playwright 脚本？</b></summary>
你当然可以。<code>stm</code> 就是那个脚本，外加页面发现、稳定的文件夹结构、变更检测、对助手友好的输出、开发浮层处理，以及所有边角情况，而且有人维护。它还是一条你的助手早就会用的命令。
</details>

<details>
<summary><b>Linux 提示浏览器缺少库。</b></summary>
把它打印出来的 <code>install-deps</code> 命令跑一次即可。WSL 和 Codespaces 也需要。
</details>

<details>
<summary><b>下载的浏览器放在哪里？</b></summary>
Playwright 的缓存目录：macOS 上是 <code>~/Library/Caches/ms-playwright</code>，Linux 上是 <code>~/.cache/ms-playwright</code>，Windows 上是 <code>%LOCALAPPDATA%\ms-playwright</code>。随时可以删；需要时 <code>stm</code> 会重新下载。
</details>

<details>
<summary><b>能让它对准不在 localhost 的站点吗？</b></summary>
可以：<code>stm --url https://staging.example.com</code>。它会留在那个源站内，并跳过看起来有破坏性的链接。请只截取你有权限截取的站点。
</details>

## 路线图

刻意保持简短。想投票就开一个 issue。

- `stm diff`：精确显示页面上哪些区域变了，并把裁剪片段而不是整页交给助手
- `stm timelapse`：把一个页面的历史做成 GIF 或 MP4，配上 git commit 说明
- `stm backfill`：遍历你的 git 历史，补出那段你从未拍过的视觉历史
- 登录态拍摄（`--storage-state`）
- 带时间滑块的本地图库

不打算做：云同步、账号体系、遥测、监听模式、配置文件。

## 参与贡献

现在最有用的东西，是附上一次真实运行记录的 bug 报告。先看 [CONTRIBUTING.md](../../CONTRIBUTING.md)，再看 [AGENTS.md](../../AGENTS.md) 里的模块地图和规则。每一个决定及其理由都记在 [DECISIONS.md](../../DECISIONS.md)。

## 关于

由 **Mohammed Sohaib Uddin** 打造，因为那些交付了却没人看的界面，需要一个能看它们的办法。

<p align="left">
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/Connect%20on%20LinkedIn-FF6600?style=for-the-badge&logo=linkedin&logoColor=white" alt="在 LinkedIn 上联系"></a>
  <a href="https://github.com/mdsohaib"><img src="https://img.shields.io/badge/Follow%20on%20GitHub-0A0E14?style=for-the-badge&logo=github&logoColor=white" alt="在 GitHub 上关注"></a>
</p>

如果 `stm` 帮你拦下了一个坏掉的页面，点个 star 不花钱，还能让更多人找到它。

MIT © Mohammed Sohaib Uddin
