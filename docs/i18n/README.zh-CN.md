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

*本文译自英文 README。如有不清楚的地方，请以英文版为准。*

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/banner.svg" alt="screenshot-time-machine：一条命令，为你网站的每个页面拍下整页截图" width="100%">
</p>

<h1 align="center">screenshot-time-machine</h1>

<p align="center">
  <b>一条命令，为你网站的每个页面截图。</b><br>
  <code>stm</code> 会逐个页面走遍你的站点，把每个页面的整页截图<br>
  存进一个以日期和时间命名的文件夹。<br>
  可以指向任意 URL，也可以让它自己找到你跑在 localhost 上的应用。<br>
  每次发布点什么就跑一次，一份视觉历史便自行积累起来：<br>
  每个页面，每个版本，都在你自己的磁盘上，就是普通的 PNG。<br>
  <b>免费开源，全程在你自己的机器上运行。</b>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/screenshot-time-machine"><img src="https://img.shields.io/npm/v/screenshot-time-machine?style=flat-square&label=npm&color=FF8C1A&labelColor=0A0E14" alt="npm 版本"></a>
  <a href="../../LICENSE"><img src="https://img.shields.io/badge/license-MIT-FFC24A?style=flat-square&labelColor=0A0E14" alt="MIT 许可证"></a>
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/LinkedIn-Mohammed%20Sohaib%20Uddin-F0509F?style=flat-square&labelColor=0A0E14&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
</p>

```bash
npx screenshot-time-machine@latest                              # the app you have running on localhost
npx screenshot-time-machine@latest --url https://your-site.com  # or any site you are allowed to capture
npx skills add mdsohaib/screenshot-time-machine                 # teach Claude Code, Cursor, Codex and friends to run it
```

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/demo.gif" alt="同一个页面在三个按日期归档的快照中的样子，重放出设计一路演进的过程" width="820">
</p>

<p align="center"><i>一个晚上的改版里跑了三次，从 stm 保存它们的日期文件夹中重放出来。</i></p>

<h3 align="center">支持以下工具</h3>

<p align="center">
  <a href="#装进你的-ai-编码智能体"><img src="https://img.shields.io/badge/Claude%20Code-FF8C1A?style=for-the-badge&logo=claude&logoColor=white" alt="Claude Code"></a>
  <a href="#装进你的-ai-编码智能体"><img src="https://img.shields.io/badge/Codex-0A0E14?style=for-the-badge&logo=openai&logoColor=white" alt="Codex"></a>
  <a href="#装进你的-ai-编码智能体"><img src="https://img.shields.io/badge/Cursor-7FB0F5?style=for-the-badge&logo=cursor&logoColor=0A0E14" alt="Cursor"></a>
  <a href="#装进你的-ai-编码智能体"><img src="https://img.shields.io/badge/Gemini%20CLI-A98BEB?style=for-the-badge&logo=googlegemini&logoColor=0A0E14" alt="Gemini CLI"></a>
  <a href="#装进你的-ai-编码智能体"><img src="https://img.shields.io/badge/Antigravity-C88AE0?style=for-the-badge&logo=google&logoColor=0A0E14" alt="Antigravity"></a>
  <br>
  <a href="#装进你的-ai-编码智能体"><img src="https://img.shields.io/badge/GitHub%20Copilot-F0509F?style=for-the-badge&logo=githubcopilot&logoColor=white" alt="GitHub Copilot"></a>
  <a href="#装进你的-ai-编码智能体"><img src="https://img.shields.io/badge/Windsurf-FFC24A?style=for-the-badge&logo=windsurf&logoColor=0A0E14" alt="Windsurf"></a>
  <a href="#装进你的-ai-编码智能体"><img src="https://img.shields.io/badge/OpenCode-4FC3A1?style=for-the-badge&logo=opencode&logoColor=white" alt="OpenCode"></a>
  <a href="#装进你的-ai-编码智能体"><img src="https://img.shields.io/badge/Cline-6C7CE0?style=for-the-badge&logo=cline&logoColor=white" alt="Cline"></a>
  <a href="#装进你的-ai-编码智能体"><img src="https://img.shields.io/badge/70%2B%20more-5A6478?style=for-the-badge" alt="另有 70 多个智能体"></a>
</p>

<p align="center"><i>以及使用它们的人</i></p>

---

## 就这一条命令

你正在开发，应用跑在 localhost 上。你敲下三个字母：

```
$ stm
7 pages saved → screenshots/localhost-3000_2026-08-15_14-32/
   Run stm again after your next change to see which pages look different.
```

七张从头到尾的整页截图，此刻就躺在代码旁边一个带日期的文件夹里。在访达或资源管理器里打开它，整个站点像一张样片表一样铺在眼前：首页、定价页、关于页、每个产品页，全都在，就是它今天的样子。

站点已经上线了？把它指过去，用法完全一样，它会读取你的 `sitemap.xml` 来找页面：

```
$ stm --url https://your-site.com
24 pages saved → screenshots/your-site-com_2026-08-15_14-40/
```

工具本身就这么多。下面写的，是这件简单的事在你跑过几次之后会变成什么。

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/hero.svg" alt="终端里的 stm，旁边是一排按日期归档的快照文件夹，每个都装着所有页面的整页截图" width="820">
</p>

## 你会得到什么

**整个站点装进一个文件夹。** 不只是你碰巧开着的那一页。每个页面，从头到尾的完整长度，装在一个十秒钟就能翻完的文件夹里。想知道「我的站点现在到底长什么样」，这是最快的答案。

**那些你根本不会打开的页面。** 定价页上塌掉的内边距。折行折得很难看的标题。丢了图的卡片。跑偏了的页脚。它们全都在同一个文件夹里等着被看见，而不是等着被别人报上来。

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/the-problem.svg" alt="一次运行得到的十二个页面缩略图并排铺开，其中四个的布局需要留意" width="820">
</p>

<p align="center"><i>一次运行拍下的十二个页面，并排放在一起。其中四个需要留意，而这四个都是没人开着的页面。</i></p>

**一份自己长出来的历史。** 每次运行都是独立的带日期文件夹，它们自然而然地叠成一条时间线。上个月的首页和今天的首页，就是两个可以来回翻看的文件。半年之后，你手上就有这东西走了多远的凭据。

**手机视图在同一次运行里拿到。** `stm --mobile` 会额外为每个页面拍一张 390x844 的视图，于是在手机上折行难看的那个标题，就紧挨着桌面版截图摆在一起。

**一份短名单，而不是四十个标签页。** 从第二次运行开始，`stm` 会列出哪些页面的截图跟上次不一样。从这些开始看。

**给你的智能体一双眼睛。** `stm --json` 把它刚刚做出来的每个页面的绝对路径交给 Claude Code、Cursor 或 Codex，于是它可以看看自己的活儿，在跟你说「做完了」之前先修好。

**永远属于你。** 就是你自己磁盘上的普通 PNG 文件。无需账号，没有云端，不用订阅，没有配置文件，没有后台进程。仅一个依赖，MIT 许可，永远是你的。

## 谁会用得上

- **你出提示，智能体动手，事后你才知道结果。** 你只要求改一个页面，它改了一个共享组件，十一个页面跟着一起变了。一条命令，把这十一个全给你看。
- **凌晨一点，你一个人在发版。** 那轮设计改动当时感觉挺对。周二那个文件夹会告诉你它是不是真的对。
- **你的改版已经进行了三周**，却记不太清它原来长什么样。第一天先把站点拍下来，之后的每一张截图都是一次你从没费心搭建过的对比。
- **你要交接工作。** 一个装着整页截图的文件夹，是客户或同事能收到的最清楚的进度汇报。
- **你想留下工作的凭据。** 任何东西的第一版都值得留着。大多数人是到第四版才想明白这一点。

## 快速开始

如果你在本地开发，就照平时的方式启动应用（`npm run dev`、`rails s`、`python manage.py runserver`、静态服务器，任何能提供 HTML 的东西都行），然后运行：

```bash
npx screenshot-time-machine@latest
```

如果站点已经在线上，这些都可以跳过，直接指名：

```bash
npx screenshot-time-machine@latest --url https://your-site.com
```

**需要 Node 22 或更高版本。** 运行 `node -v` 检查。如果显示 21 或更低，请先从 [nodejs.org](https://nodejs.org) 更新 Node。

截图时，`stm` 会使用你已经缓存的 Playwright 浏览器；如果没有，就用你机器上已装的 Chrome 或 Edge。两者都没有的话，它会一次性下载一个无头浏览器，大约 120 MB 的下载量，在磁盘上约占 200 MB，并会在下载前告诉你。这是 `stm` 本身唯一一次从互联网获取内容；你拍摄的页面会加载它们自己的资源，和在你浏览器里完全一样。

改点东西，再跑一次。整个工作流就是这样。

下文都把命令简写为 `stm`。想用这个短名字，安装一次即可：

```bash
npm install -g screenshot-time-machine
```

不装也完全没问题。看到 `stm` 的地方，写成 `npx screenshot-time-machine@latest` 就行。千万不要写 `npx stm`：那是 2014 年一个毫不相干的包。

<details>
<summary><b>首次运行还会发生什么</b></summary>

- `stm` 会按顺序探测端口 3000、3001、5173、5174、8080、4321、4322、8000、4200 和 5000，使用第一个有响应的应用。如果有多个都响应，它会优先选择本项目上次用过的那个，并把其他的告诉你。
- 如果你的项目里有 `.gitignore`，它会往里加一次 `screenshots/` 并告知你。它从不创建 `.gitignore`，也从不删除任何东西。
- 页面是通过跟随页面上的 `<a href>` 链接找到的，如果你有 `sitemap.xml` 也会一并读取，每次运行最多 100 个页面。只能靠点击按钮到达的页面，以及 `/#/about` 这类哈希路由，没有链接可以跟随，所以请自己写出来：`stm /about /pricing`。
</details>

## 装进你的 AI 编码智能体

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/agent-loop.svg" alt="闭环流程：智能体改动界面，运行 stm --json，读取截图路径，查看 fold 图，修好后再跑一次" width="820">
</p>

定价页是你的智能体写的。导航也是它写的。它动了一个共享组件，十一个页面跟着一起变了。而这些页面它一个都没真正看过，因为它没有眼睛。

`stm --json` 给它一双。智能体跑一条命令，拿回它刚刚做出来的每个页面的绝对路径，打开那些结果不一样的页面的 `fold` 图，在跟你说「做完了」之前先核验自己的活儿。

好处在于你不用再做的那些事：不用挨个点开十一个页面，也不会再有一句「看着挺好」结果并不好。你拿到一个文件夹，十秒钟翻完，就已经知道该先打开哪几个页面。

一条命令就能把 `stm` 装成一个技能：一份简短的说明文件，智能体读了就知道何时运行 `stm`、拿到结果之后该做什么。`npx skills add` 是一个独立的开源安装器，它只把那一个文件夹复制进你的项目，别的什么都不改。选你的智能体：

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
| **其他工具** | `npx skills add mdsohaib/screenshot-time-machine` | 从 70 多个智能体的列表里挑 |

给上面任意一条加上 `-g`，就会为所有项目安装，而不只是当前这个。

或者，直接用大白话告诉你的智能体：

> 安装 screenshot-time-machine，在我的应用上运行 `stm`，然后让我看看这些页面是什么样子。

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

Claude Code 用它的 Read 工具打开截图，而 `stm --json` 给的正是绝对路径。闭环是：改代码，`stm --json`，Read 那些 `fold` 图，修，重复。让它去「检查一下 UI」，它自己就会用上这个技能。
</details>

<details>
<summary><b>Codex</b></summary>

把那行记忆写进 `AGENTS.md`。Codex 用 `view_image` 打开图片，所以如果它犹豫不决，就说「查看你改过的每个页面的 fold 图」。
</details>

<details>
<summary><b>Cursor</b></summary>

把那行记忆写进 `.cursor/rules/` 下的一条规则里。智能体会在终端里运行 `stm --json`，然后打开返回的 PNG 路径。Cursor 内置的浏览器一次只能看一个页面；`stm` 把所有页面一次性交给它。
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

stdout 上是一份 JSON 文档，stderr 上最多两行，即使部分页面失败也照样输出。一次性的浏览器下载是个例外：它的安装程序也会往 stderr 写内容。`code` 与退出码一致。

如果一次运行根本无法开始，输出的对象会小得多：`{"code": 1, "error": "no_server" | "no_browser", "message": "...", "fix": "..."}`。参数有误则输出 `{"error": "bad_args", "message": "...", "fix": "..."}`，其中遇到未知选项时 `fix` 是 `Run stm --help`，遇到格式不对的 `--url` 时是一个写好的示例。读 `changed` 之前先看 `error`。`truncated` 表示被排除在列表之外的条目数量（上限是 25；清单文件里是全的）。输出中只有路径和数字，绝不含取自你页面的文本。

**关于 token。** 每次运行都会拍下所有页面，但智能体只会打开你指给它的那些，所以一次平静的运行读起来几乎不花什么成本。摘要大约 200 个 token，每列出一个页面再加大约 90 个。查看一个页面的开销是一张 1440x900 的图片。特别长的整页截图会被视觉模型缩小到文字无法辨认，这正是每个页面都额外生成一张 `fold` 图的原因，也是技能里要求智能体先看那一张的原因。

## 磁盘上的视觉历史

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

每次运行都会新建一个文件夹，以应用名和运行的那一分钟命名。里面的每个文件都带着同样的时间戳，所以一张截图即使被拖出文件夹，也依然说得清它是什么、发生在什么时候。同一分钟内运行两次，时间戳后会加上 `-2`、`-3`。高度超过 16,384 px 的页面会在这个高度被截断，这是 Chromium 的上限，并标记为 `truncated`。

把文件夹按日期排序，你看到的就是产品的时间线。挑一个页面，逐个文件夹翻过去，你就是在看着它一点点变好。从头到尾都是普通的 PNG，所以这份历史比造出它的工具活得更久：没有数据库，没有私有格式，没有什么需要导出。卸载之后什么都不会留下，只剩 `screenshots/` 文件夹，以及你原本有 `.gitignore` 的话，里面多出的那一行。

## 命令

| 命令 | 作用 |
|---|---|
| `stm` | 为运行在 localhost 上的应用的每个页面拍快照 |
| `stm /pricing /about` | 只拍这些页面，几秒钟搞定。这就是改动即验证的闭环 |
| `stm --url https://your-site.com` | 按 URL 拍任意站点，本地或线上都行。带路径则从那里开始抓取 |
| `stm --mobile` | 额外拍一张 390x844 的手机视图（`@mobile` 文件） |
| `stm --max 100` | 发现到这个数量的页面后停止（默认 100） |
| `stm --out screenshots` | 快照存放位置（默认 `screenshots`） |
| `stm --json` | 在 stdout 输出机器可读的摘要，供智能体使用 |
| `stm list` | 过往快照：文件夹、页面数、变更数、失败数 |
| `stm open` | 打开最新的快照文件夹 |
| `stm skill` | 打印智能体技能 |

退出码：`0` 全部拍摄成功，`1` 一个都没拍到（没有应用、没有浏览器、参数有误），`2` 运行结束但有页面失败或过程被中断。单个页面失败绝不会终止整次运行。

### 几个值得一试的用法

```bash
stm --mobile                     # desktop and phone views of every page, same run
stm /checkout --mobile           # the one flow you just touched, both sizes, in seconds
stm --url https://staging.example.com   # any site you are allowed to capture, not just localhost
stm list                         # every snapshot you have ever taken, oldest to newest
stm open                         # jump straight into the latest folder
```

## 它是怎么工作的

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/how-it-works.svg" alt="探测、发现、拍摄、比对、报告" width="820">
</p>

1. **探测。** 探测 localhost 上常用的端口，挑那个有响应的应用，或者用 `--url` 指定。
2. **发现。** 如果有 `sitemap.xml` 就先读它，然后顺着 `<a href>` 链接一页页走下去，始终留在同一个源站内。
3. **拍摄。** 加载每个页面，滚动它让懒加载内容到位，让一切静止下来，然后保存一张整页 PNG，外加一张顶部一屏的 `fold` 图。
4. **归档。** 把所有东西写进一个以应用名和分钟命名的文件夹，每拍完一个页面就更新一次清单文件。
5. **报告。** 打印一行摘要，其中包括哪些页面跟上一次运行不一样。

### 为什么这些截图很稳

一个截图工具的价值全在于它的一致性：同一个页面拍两次，就该得到同一张图。做到这点需要实打实的功夫，这份代码的绝大部分也正是花在这里。

- 拍摄前页面会先滚动到底部，好让懒加载的图片和区块加载出来，然后再滚回顶部。平滑滚动的站点也能正确处理。
- 会等待 Web 字体加载完成，所以不会在字体从后备字形切换到一半时拍下来。
- 动画被冻结在结束状态，因此淡入内容完整可见，加载转圈也不会动。
- 设备像素比固定为 1，视口固定为 1440x900，所以同一张截图在你的笔记本、台式机和 CI 上都是一样的。
- 开发工具栏（Astro、Nuxt、Next.js 的角标）会被隐藏。开发**错误**浮层则永远不隐藏：页面按原样拍下来，并附一条警告，因为坏掉的页面正是你想看到的。
- 长连接（HMR 套接字、事件流）绝不会卡住拍摄。每个页面有 30 秒的额度和一次重试，之后就记录下来，运行继续往下走。
- 每拍完一个页面就写一次清单文件，所以被中断的运行也会留下一个 `stm list` 能读取的文件夹。
- 指向 `/logout`、`/delete` 之类的链接永远不会被跟随。文件、`/api/`、其他源站，以及你自己的 `screenshots/` 文件夹也一样。

由此换来的是：在同一台机器上运行两次，内容没变的页面会产出逐字节相同的 PNG。

<details>
<summary><b>「变更」这一行是怎么算出来的</b></summary>

每次运行都会拍下所有页面。被拿来比较的不是图片本身，而是它们的指纹：

1. 保存好一个页面的 PNG 之后，`stm` 会计算这个文件字节的 **sha256 哈希**。
2. 这个哈希会连同页面路径一起写进本次运行的清单文件。
3. 下次运行时，`stm` 会在**上一次运行的清单文件**里查同一个页面，比较两个哈希。
4. 哈希不同，说明这张截图拍出来不一样了。哈希相同，说明没变。查不到早先的记录，说明这是个新页面。

旧截图从不会被重新打开，只读取那个很小的清单文件，所以比较一百个页面是瞬间完成的。你拿到的是页面名称和文件路径，这恰好就是你先打开正确的截图、或者把正确的截图交给智能体所需要的。区域级别的视觉差异比对是路线图上的 `stm diff`。

页面上如果有时钟、「3 分钟前」这类相对时间、轮播的主视觉图或者 canvas 动画，那它每次运行确实都长得不一样，也就会每次都被列出来。
</details>

## 它和别的工具比起来如何

| | stm | Claude Code Desktop 自动核验 | Playwright MCP、agent-browser、DevTools MCP | Percy、Chromatic |
|---|---|---|---|---|
| 一条命令覆盖所有页面 | 是 | 一次一个页面 | 一次工具调用一个页面 | 是，在 CI 里 |
| 磁盘上可翻阅的历史 | 是 | 否 | 否 | 在他们的云端 |
| 列出哪些页面拍出来不一样 | 是 | 否 | 否 | 是，在云端 |
| 可在终端、Cursor、Codex 中使用 | 是 | 仅桌面端 | 是 | 仅限 CI |
| 全程在你的机器上运行 | 是 | 是 | 是 | 否 |
| 免费 | 是 | 是 | 是 | 免费额度之上收费 |

这些工具是互补关系，不是对手。当你的智能体需要点来点去、跟页面交互时，用浏览器工具。当你或你的智能体需要一次看清全部、并且把它留下来时，用 `stm`。

## 隐私

**100% 本地运行。** `stm` 只与你应用的 URL 通信；如果你既没有 Chrome 也没有 Edge，它还会一次性访问 Playwright 的浏览器 CDN。你的截图绝不会离开你的机器。没有账号，没有 API 密钥，没有遥测。被拍摄的页面加载自身资源的方式，和在你浏览器里完全一样。完整威胁模型见 [SECURITY.md](../../SECURITY.md)。

## 常见问题

<details>
<summary><b>真的免费吗？</b></summary>
是的。MIT 许可，开源，没有付费版，没有托管服务，什么都不用注册。装上，永久使用，喜欢的话尽管 fork。
</details>

<details>
<summary><b>它支持 Next.js、Vite、Astro、SvelteKit、Rails、Django、静态站点吗？</b></summary>
支持。任何能提供 HTML 的东西都行，不管它在你的机器上还是在互联网上。上述框架常用的 localhost 端口都会被自动探测；其他情况用 <code>--url</code>。
</details>

<details>
<summary><b>跑一次要多久？</b></summary>
页面是几个几个一起拍的，大多数小站点远不到一分钟就能跑完。大站点加上刚启动的开发环境会慢一些，因为第一次访问每个页面时，你的框架正在编译它。想要立刻出结果，就把你关心的页面传进去（<code>stm /pricing /about</code>）。
</details>

<details>
<summary><b>它只找到了我的首页。</b></summary>
页面是从你的 sitemap 和 <code>&lt;a href&gt;</code> 链接中发现的。用按钮跳转或哈希路由（<code>/#/about</code>）的应用没有可跟随的链接。把页面写出来：<code>stm /about /pricing</code>。技能里已经要求智能体传入它改过的页面。
</details>

<details>
<summary><b>我的截图大多是登录页。</b></summary>
你的应用重定向到了登录。<code>stm</code> 目前还不能登录，遇到这种情况它会告诉你。登录态拍摄已在路线图上。
</details>

<details>
<summary><b>过一段时间后每个页面都被列为不一样了。</b></summary>
常见原因：你的浏览器更新了，渲染会有细微偏移（<code>stm</code> 会记录浏览器版本并提醒你）；或者页面上有会自己变的东西，比如时钟、「3 分钟前」、随机的主视觉图、canvas 动画，或者只在首次访问时出现的 cookie 横幅。截图本身依然是对的，所以打开你关心的那些看就好。
</details>

<details>
<summary><b>它能自动运行、监听我的文件变化吗？</b></summary>
它由你说了算才运行，就像 <code>git commit</code>：由你，或者你的智能体，来决定哪个时刻值得留下来。想要自动拍摄，就把那一行说明放进智能体的记忆文件，让它在每次界面改动之后自己运行。
</details>

<details>
<summary><b>我能把历史做成延时视频吗？</b></summary>
原生的 <code>stm timelapse</code> 已在路线图上。现在可以用 ffmpeg：
<pre><code>ffmpeg -framerate 1 -pattern_type glob -i 'screenshots/*/pricing_*.png' \
  -vf "scale=720:-1,split[a][b];[a]palettegen[p];[b][p]paletteuse" pricing.gif</code></pre>
</details>

<details>
<summary><b>我用 Lovable、Bolt 或 v0，能用这个吗？</b></summary>
能，有两种办法。把 <code>stm</code> 指向它们给你发布的 URL：<code>stm --url https://your-project.lovable.app</code>。或者把项目导出来，在本地跑起来，<code>stm</code> 自己就能找到它。用 Claude Code、Cursor、Codex、Windsurf 或 Copilot 在你自己机器上构建的项目，开箱即用。
</details>

<details>
<summary><b>为什么不直接写个 Playwright 脚本？</b></summary>
你当然可以。<code>stm</code> 就是那个脚本，外加页面发现、稳定的文件夹结构、稳定可重复的拍摄、对智能体友好的输出、开发浮层处理，以及所有边角情况，而且有人维护。它还是一条你的智能体早就认识的命令。
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
<summary><b>能用在我的线上站点或预发布站点上吗？</b></summary>
可以：<code>stm --url https://staging.example.com</code>。它会像在本地那样读取该站点的 <code>sitemap.xml</code> 并跟随它的链接，始终留在那一个源站内，也绝不会跟随 <code>/logout</code> 或 <code>/delete</code> 这类看起来有破坏性的链接。请只拍摄你有权拍摄的站点。
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

由 **Mohammed Sohaib Uddin** 打造，因为每天都在变的软件，值得留下一份它当时长什么样的记录。

<p align="left">
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/Connect%20on%20LinkedIn-FF8C1A?style=for-the-badge&logo=linkedin&logoColor=white" alt="在 LinkedIn 上联系"></a>
  <a href="https://github.com/mdsohaib"><img src="https://img.shields.io/badge/Follow%20on%20GitHub-0A0E14?style=for-the-badge&logo=github&logoColor=white" alt="在 GitHub 上关注"></a>
</p>

如果 `stm` 让你看到了某个庆幸自己看到的东西，点个 star 不花什么，却能帮更多人找到它。

MIT © Mohammed Sohaib Uddin
