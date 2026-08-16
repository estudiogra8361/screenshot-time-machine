<p align="center">
  <a href="../../README.md">English</a> ·
  <a href="README.zh-CN.md">简体中文</a> ·
  <a href="README.es.md">Español</a> ·
  <a href="README.hi.md">हिन्दी</a> ·
  <a href="README.pt-BR.md">Português</a> ·
  日本語 ·
  <a href="README.de.md">Deutsch</a> ·
  <a href="README.fr.md">Français</a> ·
  <a href="README.ko.md">한국어</a> ·
  <a href="README.ru.md">Русский</a> ·
  <a href="README.ar.md">العربية</a>
</p>

*英語版 README からの翻訳です。判断に迷う場合は英語版を基準としてください。*

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/banner.svg" alt="screenshot-time-machine: サイトの全ページのフルページスクリーンショットを、コマンド 1 つで" width="100%">
</p>

<h1 align="center">screenshot-time-machine</h1>

<p align="center">
  <b>Wayback Machine のように、あなた自身のサイトのために。</b><br>
  <code>stm</code> はサイトを 1 ページずつ巡回し、すべてのページのフルページスクリーンショットを、<br>
  日付と時刻を付けたフォルダに保存します。<br>
  任意の URL を指定しても、localhost で動いているアプリを見つけさせても構いません。<br>
  何かをリリースするたびに実行すれば、ビジュアルの履歴がひとりでに積み上がります。<br>
  すべてのページ、すべてのバージョンが、自分のディスクの上に、ただの PNG として残ります。<br>
  <b>無料でオープンソース。すべて自分のマシンの中だけで動きます。</b>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/screenshot-time-machine"><img src="https://img.shields.io/npm/v/screenshot-time-machine?style=flat-square&label=npm&color=FF8C1A&labelColor=0A0E14" alt="npm バージョン"></a>
  <a href="../../LICENSE"><img src="https://img.shields.io/badge/license-MIT-FFC24A?style=flat-square&labelColor=0A0E14" alt="MIT ライセンス"></a>
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/LinkedIn-Mohammed%20Sohaib%20Uddin-F0509F?style=flat-square&labelColor=0A0E14&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
</p>

```bash
npx screenshot-time-machine@latest                              # the app you have running on localhost
npx screenshot-time-machine@latest --url https://your-site.com  # or any site you are allowed to capture
npx skills add mdsohaib/screenshot-time-machine                 # teach Claude Code, Cursor, Codex and friends to run it
```

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/demo.gif" alt="あるストアのトップページを、最初のラフから完成したレイアウトまで 10 バージョン分" width="820">
</p>

<p align="center"><i>同じページの 10 バージョンを順番に再生しています。日付ごとのスクリーンショットのフォルダは、こうなります。</i></p>

<h3 align="center">対応ツール</h3>

<p align="center">
  <a href="#ai-コーディングエージェントに導入する"><img src="https://img.shields.io/badge/Claude%20Code-FF8C1A?style=for-the-badge&logo=claude&logoColor=white" alt="Claude Code"></a>
  <a href="#ai-コーディングエージェントに導入する"><img src="https://img.shields.io/badge/Codex-0A0E14?style=for-the-badge" alt="Codex"></a>
  <a href="#ai-コーディングエージェントに導入する"><img src="https://img.shields.io/badge/Cursor-7FB0F5?style=for-the-badge&logo=cursor&logoColor=0A0E14" alt="Cursor"></a>
  <a href="#ai-コーディングエージェントに導入する"><img src="https://img.shields.io/badge/Gemini%20CLI-A98BEB?style=for-the-badge&logo=googlegemini&logoColor=0A0E14" alt="Gemini CLI"></a>
  <a href="#ai-コーディングエージェントに導入する"><img src="https://img.shields.io/badge/Antigravity-C88AE0?style=for-the-badge&logo=google&logoColor=0A0E14" alt="Antigravity"></a>
  <br>
  <a href="#ai-コーディングエージェントに導入する"><img src="https://img.shields.io/badge/GitHub%20Copilot-F0509F?style=for-the-badge&logo=githubcopilot&logoColor=white" alt="GitHub Copilot"></a>
  <a href="#ai-コーディングエージェントに導入する"><img src="https://img.shields.io/badge/Windsurf-FFC24A?style=for-the-badge&logo=windsurf&logoColor=0A0E14" alt="Windsurf"></a>
  <a href="#ai-コーディングエージェントに導入する"><img src="https://img.shields.io/badge/OpenCode-4FC3A1?style=for-the-badge&logo=opencode&logoColor=white" alt="OpenCode"></a>
  <a href="#ai-コーディングエージェントに導入する"><img src="https://img.shields.io/badge/Cline-6C7CE0?style=for-the-badge&logo=cline&logoColor=white" alt="Cline"></a>
  <a href="#導入できるエージェント一覧"><img src="https://img.shields.io/badge/Zed-3B4B5F?style=for-the-badge&logo=zedindustries&logoColor=white" alt="Zed"></a>
  <a href="#導入できるエージェント一覧"><img src="https://img.shields.io/badge/Warp-2A8FB5?style=for-the-badge&logo=warp&logoColor=white" alt="Warp"></a>
  <a href="#導入できるエージェント一覧"><img src="https://img.shields.io/badge/Devin-8B6FD4?style=for-the-badge" alt="Devin"></a>
  <a href="#導入できるエージェント一覧"><img src="https://img.shields.io/badge/Amp-C4653B?style=for-the-badge" alt="Amp"></a>
  <a href="#導入できるエージェント一覧"><img src="https://img.shields.io/badge/Full%20list-5A6478?style=for-the-badge" alt="エージェントの全一覧"></a>
</p>

<p align="center"><i>そして、それらに指示を出す人間たち</i></p>

---

## コマンド 1 つ

開発中で、アプリは localhost で動いています。3 文字だけ打ちます。

```
$ stm
7 pages saved → screenshots/localhost-3000_2026-08-15_14-32/
   Run stm again after your next change to see which pages look different.
```

上から下まで丸ごと撮った 7 枚のフルページスクリーンショットが、コードの隣にある日付付きフォルダに並びました。Finder や Explorer で開けば、サイト全体がそのままコンタクトシートになります。ホーム、価格、About、すべての商品ページ、丸ごと全部が、今日そのままの姿で見られます。

すでに公開済みですか。本番サイトに向けても同じように動き、`sitemap.xml` を読んでページを見つけます。

```
$ stm --url https://your-site.com
24 pages saved → screenshots/your-site-com_2026-08-15_14-40/
```

ツールの中身はこれだけです。以下に書いてあるのは、このシンプルな仕組みを何度か動かしたあとに、それが何になるかという話です。

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/hero.svg" alt="ターミナルで動く stm と、日付付きスナップショットのフォルダ。各フォルダには全ページのフルページスクリーンショットが入っている" width="820">
</p>

## 手に入るもの

**サイト全体が 1 つのフォルダに。** たまたま開いていた 1 ページではありません。すべてのページを上から下まで丸ごと、10 秒でスクロールして見渡せるフォルダに収めます。「今のサイトは実際どう見えているのか」に答える、いちばん速い方法です。

**自分では開かなかったであろうページ。** 価格ページで潰れた余白。不格好に折り返した見出し。画像が抜けたカード。少しずつずれていったフッター。報告されるのを待つのではなく、同じフォルダの中で気づかれるのを待っています。

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/the-problem.svg" alt="1 回の実行で撮れた 12 ページのサムネイルを横並びにしたもの。うち 4 ページは手当てが必要なレイアウトになっている" width="820">
</p>

<p align="center"><i>1 回の実行で撮れた 12 ページを並べたところ。手当てが必要だったのは 4 ページで、その 4 つはいずれも誰も開いていなかったページでした。</i></p>

**ひとりでに積み上がる履歴。** 実行のたびに日付付きの独立したフォルダができるので、それ自体が時系列に並びます。先月のホームページと今日のホームページは、行き来できる 2 つのファイルです。半年も経てば、ここまで来たという証拠が手元にあります。

**同じ実行でスマートフォン表示も。** `stm --mobile` を付けると 390x844 の表示も全ページ分撮るので、スマートフォンで不格好に折り返す見出しが、デスクトップの 1 枚のすぐ隣に並びます。

**40 個のタブではなく、短いリストを。** 2 回目以降の実行では、`stm` は前回とスクリーンショットが違って出たページを一覧します。そこから見始めてください。

**エージェントに目を。** `stm --json` は、Claude Code、Cursor、Codex に、たった今作ったページすべての絶対パスを渡します。エージェントは自分の作業を目で見て、完了と言う前に直せます。

**ずっと自分のもの。** 自分のディスクにあるただの PNG ファイル。アカウントなし、クラウドなし、サブスクリプションなし、設定ファイルなし、常駐プロセスなし。依存は 1 つだけ、MIT ライセンス、ずっとあなたのものです。

## こんなときに使われています

- **指示を出し、エージェントが作り、気づくのはあとになってから。** 1 ページだけ頼んだつもりが、共通コンポーネントが編集され、11 ページが道連れになっていた。コマンド 1 つで、その 11 ページ全部が見られます。
- **深夜 1 時に、ひとりでリリース作業。** デザインの調整は、そのときは良い感じに思えました。火曜のフォルダが、本当にそうだったかを教えてくれます。
- **リデザインを始めて 3 週間**、前がどんな見た目だったか、もう思い出せない。初日にサイトを撮っておけば、それ以降のスクリーンショットはすべて、準備なしで手に入る比較対象になります。
- **仕事を引き渡すとき。** フルページスクリーンショットのフォルダは、クライアントや同僚が受け取れる最も分かりやすい進捗報告です。
- **仕事の証拠を残したいとき。** どんなものでもバージョン 1 は取っておく価値があります。たいていの人はバージョン 4 あたりでそれに気づきます。

## クイックスタート

ローカルで開発しているなら、いつもどおりにアプリを起動して (`npm run dev`、`rails s`、`python manage.py runserver`、静的サーバー、HTML を配信するものなら何でも)、次を実行します。

```bash
npx screenshot-time-machine@latest
```

サイトがすでに公開されているなら、その手順は飛ばして、URL を指定するだけです。

```bash
npx screenshot-time-machine@latest --url https://your-site.com
```

**Node 22 以降が必要です。** `node -v` で確認してください。21 以下と表示されたら、先に [nodejs.org](https://nodejs.org) から Node を更新してください。

`stm` はスクリーンショットに、すでにキャッシュ済みの Playwright ブラウザを使います。なければ、マシンにすでに入っている Chrome または Edge を使います。どちらもない場合は、ヘッドレスブラウザを 1 回だけダウンロードします。ダウンロードは約 120 MB、ディスク上ではおよそ 200 MB で、実行する前に知らせます。`stm` 自身がインターネットから取得するのは、これだけです。撮影対象のページは、ブラウザで開いたときとまったく同じように、自身のリソースを読み込みます。

何かを変更して、もう一度実行する。ワークフローはこれだけです。

以下では、コマンドを短く `stm` と書きます。この短い名前を使うには、一度インストールしてください。

```bash
npm install -g screenshot-time-machine
```

インストールしなくても問題ありません。`stm` と書かれている箇所は `npx screenshot-time-machine@latest` に読み替えてください。`npx stm` とは絶対に書かないでください。それは 2014 年の無関係なパッケージです。

<details>
<summary><b>初回実行時に他に起きること</b></summary>

- `stm` はポート 3000、3001、5173、5174、8080、4321、4322、8000、4200、5000 をこの順に調べ、最初に応答したアプリを使います。複数が応答した場合は、このプロジェクトで前回使ったものを優先し、他の候補も知らせます。
- プロジェクトに `.gitignore` があれば、`screenshots/` を 1 回だけ追記して知らせます。`.gitignore` を新規作成することはなく、何かを削除することもありません。
- ページは、ページ上の `<a href>` リンクをたどることと、`sitemap.xml` があればそれを読むことで見つけます。1 回の実行につき最大 100 ページです。ボタンのクリックでしか到達できないページや、`/#/about` のようなハッシュルートにはたどれるリンクがないので、自分で指定してください: `stm /about /pricing`。
</details>

## AI コーディングエージェントに導入する

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/agent-loop.svg" alt="ループの図: エージェントが UI を編集し、stm --json を実行し、スクリーンショットのパスを読み、fold 画像を見て、修正してまた実行する" width="820">
</p>

エージェントは価格ページを書きました。ナビゲーションも書きました。共通コンポーネントに手を入れ、11 ページが一緒に動きました。そのどれ 1 つとして、エージェントは実際には見ていません。目がないからです。

`stm --json` はその目を渡します。エージェントはコマンドを 1 つ実行し、たった今作ったページすべての絶対パスを受け取り、前回と違って出たページの `fold` 画像を開いて、完了と言う前に自分の作業を確認します。

うれしいのは、やらなくてよくなることのほうです。11 ページをクリックして回る必要はありません。あとで違ったと分かる「問題なさそうです」もありません。フォルダを受け取って 10 秒スクロールすれば、どのページから開くべきかがもう分かっています。

コマンド 1 つで `stm` をスキルとして導入できます。スキルとは、エージェントが読む短い指示ファイルで、`stm` をいつ実行し、結果をどう扱うかを伝えるものです。`npx skills add` は独立したオープンソースのインストーラーで、そのフォルダ 1 つをプロジェクトにコピーするだけで、他は何も変更しません。お使いのエージェントを選んでください。

| エージェント | コマンド | スキルの配置先 |
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
| **その他すべて** | `npx skills add mdsohaib/screenshot-time-machine` | 下の一覧からエージェントを選択 |

どのコマンドにも `-g` を付ければ、このプロジェクトだけでなく全プロジェクトに導入できます。

### 導入できるエージェント一覧

これらは、インストーラーが `-a` の後に受け付ける名前です。どれか 1 つを渡すか、`-a` を付けずに実行して表示されるメニューから選んでください。

`adal` · `aider-desk` · `amp` · `antigravity` · `antigravity-cli` · `astrbot` · `augment` · `autohand-code` · `bob` · `claude-code` · `cline` · `codearts-agent` · `codebuddy` · `codemaker` · `codestudio` · `codex` · `command-code` · `continue` · `cortex` · `crush` · `cursor` · `deepagents` · `devin` · `dexto` · `droid` · `eve` · `firebender` · `forgecode` · `gemini-cli` · `github-copilot` · `goose` · `grok` · `hermes-agent` · `iflow-cli` · `inference-sh` · `jazz` · `junie` · `kilo` · `kimchi` · `kimi-code-cli` · `kiro-cli` · `kode` · `lingma` · `loaf` · `mcpjam` · `minimax-code` · `mistral-vibe` · `moxby` · `mux` · `neovate` · `ona` · `openclaw` · `opencode` · `openhands` · `pi` · `pochi` · `promptscript` · `qoder` · `qoder-cn` · `qwen-code` · `reasonix` · `replit` · `roo` · `rovodev` · `tabnine-cli` · `terramind` · `tinycloud` · `trae` · `trae-cn` · `universal` · `warp` · `windsurf` · `zcode` · `zed` · `zencoder` · `zenflow`

上に自分のエージェントの名前がない場合は `universal` を使ってください。スキルを `.agents/skills/stm/` に書き出します。ここは上記のいくつかのエージェントが読む共有の場所です。この一覧はここではなくインストーラー側にあるので、この README を変えなくても増えていきます。最新の一覧を見るには、存在しないエージェント名を指定してください。すべて表示されます。

```bash
npx skills add mdsohaib/screenshot-time-machine -a list-them-please
```

あるいは、エージェントに普通の言葉で伝えるだけでも構いません。

> screenshot-time-machine を導入して、私のアプリで `stm` を実行し、ページがどう見えるか見せて。

さらに、エージェントがリクエストのたびに読むファイルに次の 1 行を追加しておくと、頼まなくても自分の作業を確認するようになります。

```
After changing anything a user can see, run `stm --json` (or `npx -y screenshot-time-machine@latest --json` if `stm` is not installed) and view the `fold` image of every entry in `changed` and `new` before saying you're done. On the very first snapshot both lists are empty, so view the fold images of the pages you edited instead. Never claim a UI change is verified without viewing a screenshot.
```

この 1 行を書く場所は、エージェントごとに次のとおりです。

| エージェント | ファイル |
|---|---|
| Claude Code | `CLAUDE.md` |
| Codex、Antigravity、OpenCode | `AGENTS.md` |
| Gemini CLI | `GEMINI.md` |
| Cursor | `.cursor/rules/stm.mdc`。先頭に `---`、次に `alwaysApply: true`、そして `---` |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Windsurf | `.windsurf/rules/stm.md` |
| Cline | `.clinerules/stm.md` |

<details>
<summary><b>Claude Code: プラグインでの導入と、ループの感触</b></summary>

シンプルなのはスキルです。プラグインのほうが好みなら、Claude Code の中で次を実行してください。

```
/plugin marketplace add mdsohaib/screenshot-time-machine
/plugin install stm@stm
```

GitHub に SSH 鍵がない場合は URL 形式を使ってください: `/plugin marketplace add https://github.com/mdsohaib/screenshot-time-machine.git`

Claude Code は Read ツールでスクリーンショットを開き、`stm --json` は絶対パスを渡します。ループはこうです。編集する、`stm --json`、`fold` 画像を Read する、修正する、繰り返す。「UI を確認して」と頼めば、自分からスキルを使います。
</details>

<details>
<summary><b>Codex</b></summary>

メモリ行は `AGENTS.md` に置いてください。Codex は `view_image` で画像を開くので、ためらうようなら「触ったページすべての fold 画像を見て」と伝えてください。
</details>

<details>
<summary><b>Cursor</b></summary>

メモリ行は `.cursor/rules/` 以下のルールに置いてください。エージェントはターミナルで `stm --json` を実行し、返ってきた PNG のパスを開きます。Cursor 内蔵のブラウザは 1 ページずつしか見せませんが、`stm` は全ページをまとめて渡します。
</details>

<details>
<summary><b>スキルに対応していないエージェント全般</b></summary>

`stm skill` はスキルの本文を出力します。エージェントが読む指示ファイルに貼り付けてください。何もインストールせずに使えます。

```bash
npx screenshot-time-machine@latest skill
```
</details>

### エージェントが受け取るもの

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

stdout には JSON ドキュメントが 1 つ、stderr には最大 2 行。一部のページが失敗しても必ず出力されます。例外は 1 回だけのブラウザダウンロードで、そのインストーラーも stderr に書き込みます。`code` は終了コードと同じ値です。

そもそも実行を開始できなかった場合は、もっと小さなオブジェクトが出ます: `{"code": 1, "error": "no_server" | "no_browser", "message": "...", "fix": "..."}`。引数が不正な場合は `{"error": "bad_args", "message": "...", "fix": "..."}` で、`fix` は未知のフラグなら `Run stm --help`、`--url` の書式が不正なら具体的な記述例になります。`changed` を読む前に `error` を確認してください。`truncated` は一覧から省かれた件数です (上限は 25 件で、マニフェストにはすべて入っています)。出力に含まれるのはパスと数値だけで、ページから取ったテキストが入ることはありません。

**トークンについて。** ページは毎回すべて撮影されますが、エージェントが開くのは指し示されたものだけなので、変化の少ない実行は読むコストがほとんどかかりません。サマリーはおよそ 200 トークン、加えて一覧に載ったページ 1 件につき約 90 トークンです。1 ページを見るコストは、1440x900 の画像 1 枚分です。非常に縦長のフルページスクリーンショットは、ビジョンモデルによって文字が読めなくなるまで縮小されます。だからこそ、どのページにも `fold` 画像が付き、スキルはエージェントにまずそちらを開くよう指示しています。

## ディスク上に残るビジュアルの履歴

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

実行のたびに、アプリ名と実行した分単位の時刻を名前にした新しいフォルダができます。中のファイルはすべて同じタイムスタンプを持つので、フォルダから 1 枚取り出しても、それが何で、いつのものかが分かります。同じ分内に 2 回実行すると、タイムスタンプに `-2`、`-3` が付きます。高さ 16,384 px を超えるページは、Chromium の上限であるその高さで切られ、`truncated` として記録されます。

フォルダを日付順に並べれば、そのままプロダクトの年表になります。1 ページを選んで各フォルダの同じファイルを順に送っていけば、それが良くなっていく過程が見られます。中身は最後までただの PNG なので、この履歴は作ったツールより長く残ります。データベースも独自フォーマットもなく、エクスポートするものもありません。アンインストールしても後に残るのは `screenshots/` フォルダと、`.gitignore` があった場合はそこに追記された 1 行だけです。

## コマンド

| コマンド | 何をするか |
|---|---|
| `stm` | localhost で動いているアプリの全ページをスナップショット |
| `stm /pricing /about` | 指定したページだけを数秒でスナップショット。これが編集と確認のループ |
| `stm --url https://your-site.com` | URL を指定して任意のサイトをスナップショット。ローカルでも公開サイトでも可。パスを付けるとそこから探索を開始 |
| `stm --mobile` | 390x844 のスマートフォン表示も撮影 (`@mobile` ファイル) |
| `stm --max 100` | この件数でページ探索を打ち切る (既定は 100) |
| `stm --out screenshots` | スナップショットの保存先 (既定は `screenshots`) |
| `stm --json` | エージェント向けに、機械可読なサマリーを stdout へ出力 |
| `stm list` | 過去のスナップショット: フォルダ、ページ数、変更、失敗 |
| `stm open` | 最新のスナップショットフォルダを開く |
| `stm skill` | エージェント用スキルを出力 |

終了コード: `0` すべて撮影できた、`1` 何も撮影できなかった (アプリがない、ブラウザがない、引数が不正)、`2` 一部のページが失敗した、または実行が中断された。1 ページの失敗で実行が止まることはありません。

### 試してみる価値のあるもの

```bash
stm --mobile                     # desktop and phone views of every page, same run
stm /checkout --mobile           # the one flow you just touched, both sizes, in seconds
stm --url https://staging.example.com   # any site you are allowed to capture, not just localhost
stm list                         # every snapshot you have ever taken, oldest to newest
stm open                         # jump straight into the latest folder
```

## しくみ

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/how-it-works.svg" alt="検出、探索、撮影、比較、報告" width="820">
</p>

1. **検出。** よく使われる localhost のポートを調べて応答したアプリを選ぶか、`--url` を使います。
2. **探索。** `sitemap.xml` があればまず読み、続いて `<a href>` リンクをページからページへたどります。同じオリジンの中だけを回ります。
3. **撮影。** 各ページを読み込み、遅延コンテンツが届くまでスクロールし、すべてを静止させてから、フルページの PNG と最上部 1 画面分の `fold` 画像を保存します。
4. **保存。** アプリ名と分単位の時刻を名前にしたフォルダにすべてを書き出します。マニフェストは 1 ページごとに更新します。
5. **報告。** 前回の実行と違って出たページを含めて、1 行のサマリーを表示します。

### スクリーンショットが安定している理由

スクリーンショットツールの価値は一貫性で決まります。同じページを 2 回撮ったら、同じ絵が出てくるべきです。これは地道な作業で、このコードの大半はそこに費やされています。

- 撮影前にページを最下部までスクロールして遅延読み込みの画像やセクションを読み込ませ、その後もとの最上部に戻します。スムーススクロールのサイトにも対応しています。
- Web フォントの読み込みを待つので、フォールバックのフォントから切り替わる途中で撮られることはありません。
- アニメーションは終了状態で固定されるので、フェードインは完全に表示され、スピナーは静止します。
- デバイスピクセル比は 1 に、ビューポートは 1440x900 に固定されるので、ノートパソコンでもデスクトップでも CI でも同じスクリーンショットになります。
- 開発用ツールバー (Astro、Nuxt、Next.js のバッジ) は隠します。開発用の**エラー**オーバーレイは決して隠しません。ページはそのまま撮影して、警告を付けます。壊れたページこそ、まさに見たいものだからです。
- 長時間つながり続ける接続 (HMR ソケット、イベントストリーム) が撮影を止めることはありません。各ページには 30 秒の持ち時間と 1 回のリトライがあり、それを過ぎたら記録して次に進みます。
- マニフェストは 1 ページごとに書き出されるので、途中で中断された実行でも `stm list` が読めるフォルダが残ります。
- `/logout` や `/delete` のようなリンクは決してたどりません。ファイル、`/api/`、別のオリジン、そして自分の `screenshots/` フォルダも同様です。

その結果として、同じマシンで 2 回実行すると、内容が変わっていないページの PNG はバイト単位で同一になります。

<details>
<summary><b>「変更あり」の行がどう決まるか</b></summary>

ページは毎回すべて撮影されます。比較されるのは画像そのものではなく、その指紋です。

1. ページの PNG を保存したあと、`stm` はそのファイルのバイト列から **sha256 ハッシュ**を計算します。
2. ハッシュは、ページのパスと並べて、その実行のマニフェストに記録されます。
3. 次の実行で、`stm` は**前回の実行のマニフェスト**から同じページを探し、2 つのハッシュを比べます。
4. ハッシュが違えば、スクリーンショットが違って出たということです。同じなら変わっていません。前回のエントリがなければ、そのページは新規です。

過去のスクリーンショットを開き直すことはなく、読むのは小さなマニフェストだけなので、100 ページの比較でも一瞬で終わります。得られるのはページ名とファイルパスで、まず開くべきスクリーンショットを選んだり、エージェントに適切なものを渡したりするには、これがちょうど必要なものです。領域単位のビジュアル差分は、ロードマップにある `stm diff` の役目です。

時計や「3 分前」のような相対時間、切り替わるヒーロー画像、canvas アニメーションを表示するページは、実行のたびに本当に見た目が変わるので、毎回一覧に載ります。
</details>

## 他のツールとの比較

| | stm | Claude Code Desktop の自動検証 | Playwright MCP、agent-browser、DevTools MCP | Percy、Chromatic |
|---|---|---|---|---|
| コマンド 1 つで全ページ | はい | 1 ページずつ | ツール呼び出しごとに 1 ページ | はい、CI 上で |
| 閲覧できる履歴がディスクに残る | はい | いいえ | いいえ | 各社のクラウド上に |
| 違って出たページを一覧する | はい | いいえ | いいえ | はい、クラウド上で |
| ターミナル、Cursor、Codex で動く | はい | Desktop のみ | はい | CI のみ |
| すべて自分のマシンで動く | はい | はい | はい | いいえ |
| 無料 | はい | はい | はい | 無料枠を超えると有料 |

これらのツールは競合ではなく、補完し合う関係です。エージェントが画面をクリックして操作する必要があるときは、ブラウザツールを使ってください。あなたやエージェントが、すべてを一度にまとめて見て、それを残しておきたいときは `stm` を使ってください。

## プライバシー

**100% ローカルで動作します。** `stm` が通信するのは、あなたのアプリの URL だけです。Chrome も Edge もない場合に限り、Playwright のブラウザ CDN に 1 回だけ接続します。スクリーンショットがマシンの外に出ることはありません。アカウントも API キーもテレメトリーもありません。撮影対象のページは、ブラウザで開いたときとまったく同じように、自身のリソースを読み込みます。脅威モデルの全文は [SECURITY.md](../../SECURITY.md) にあります。

## FAQ

<details>
<summary><b>本当に無料ですか。</b></summary>
はい。MIT ライセンスのオープンソースで、有料プランもホスティングサービスも、登録が必要なものもありません。インストールして、ずっと使って、好きならフォークしてください。
</details>

<details>
<summary><b>Next.js、Vite、Astro、SvelteKit、Rails、Django、静的サイトで動きますか。</b></summary>
はい。HTML を配信するものなら、自分のマシン上にあってもインターネット上にあっても動きます。これらでよく使われる localhost のポートは自動で調べます。それ以外は <code>--url</code> を使ってください。
</details>

<details>
<summary><b>1 回の実行にどれくらいかかりますか。</b></summary>
ページは数ページずつまとめて撮影されるので、小さなサイトならたいてい 1 分もかかりません。大きなサイトを、起動直後の開発サーバーで撮ると時間がかかります。各ページへの最初のアクセスが、フレームワークによるコンパイルそのものだからです。すぐに終わらせたいときは、気になるページを指定してください (<code>stm /pricing /about</code>)。
</details>

<details>
<summary><b>ホームページしか見つかりませんでした。</b></summary>
ページはサイトマップと <code>&lt;a href&gt;</code> リンクから見つけます。ボタンやハッシュルート (<code>/#/about</code>) で遷移するアプリには、たどれるリンクがありません。ページを指定してください: <code>stm /about /pricing</code>。エージェントには、自分が触ったページを渡すよう指示してあります。
</details>

<details>
<summary><b>スクリーンショットのほとんどがログインページになります。</b></summary>
アプリがサインインへリダイレクトしています。<code>stm</code> はまだサインインできませんが、そうなったことは知らせます。サインイン状態での撮影はロードマップに入っています。
</details>

<details>
<summary><b>しばらくすると全ページが変更ありになります。</b></summary>
よくある原因は次のとおりです。ブラウザが更新されてレンダリングがわずかにずれた (<code>stm</code> はブラウザのバージョンを記録して知らせます)。あるいは、時計、「3 分前」、ランダムなヒーロー画像、canvas アニメーション、初回訪問時にだけ出る Cookie バナーなど、勝手に動くものがページにある。スクリーンショット自体は正しいので、気になるものを開いてください。
</details>

<details>
<summary><b>ファイルを監視して自動実行できますか。</b></summary>
<code>stm</code> は <code>git commit</code> と同じように、あなたが言ったときに動きます。どの瞬間を残す価値があるかは、あなたかエージェントが決めます。自動的に撮りたい場合は、あの 1 行の指示をエージェントのメモリファイルに入れて、UI を変更するたびにエージェントに実行させてください。
</details>

<details>
<summary><b>履歴をタイムラプスにできますか。</b></summary>
本格的な <code>stm timelapse</code> はロードマップにあります。今日のところは ffmpeg で:
<pre><code>ffmpeg -framerate 1 -pattern_type glob -i 'screenshots/*/pricing_*.png' \
  -vf "scale=720:-1,split[a][b];[a]palettegen[p];[b][p]paletteuse" pricing.gif</code></pre>
</details>

<details>
<summary><b>Lovable、Bolt、v0 を使っています。これは使えますか。</b></summary>
はい、方法は 2 つあります。各サービスが公開してくれる URL に <code>stm</code> を向けてください: <code>stm --url https://your-project.lovable.app</code>。または、プロジェクトをエクスポートしてローカルで動かせば、<code>stm</code> が自分で見つけます。Claude Code、Cursor、Codex、Windsurf、Copilot で自分のマシン上に作ったものは、そのまま動きます。
</details>

<details>
<summary><b>Playwright スクリプトを書けば済むのでは。</b></summary>
書けます。<code>stm</code> はそのスクリプトに、ページ探索、安定したフォルダ構成、繰り返しても揺れない撮影、エージェントに優しい出力、開発用オーバーレイの処理、そしてあらゆるエッジケースへの対応を加えて、保守し続けているものです。しかも、あなたのエージェントがすでに知っているコマンド 1 つで済みます。
</details>

<details>
<summary><b>Linux でブラウザのライブラリが足りないと言われます。</b></summary>
表示された <code>install-deps</code> コマンドを 1 回実行してください。WSL と Codespaces でも必要です。
</details>

<details>
<summary><b>ダウンロードされたブラウザはどこに置かれますか。</b></summary>
Playwright のキャッシュです。macOS は <code>~/Library/Caches/ms-playwright</code>、Linux は <code>~/.cache/ms-playwright</code>、Windows は <code>%LOCALAPPDATA%\ms-playwright</code>。いつ削除しても構いません。<code>stm</code> は必要になれば再びダウンロードします。
</details>

<details>
<summary><b>公開サイトやステージングサイトでも使えますか。</b></summary>
はい: <code>stm --url https://staging.example.com</code>。ローカルのときとまったく同じように、そのサイトの <code>sitemap.xml</code> を読み、リンクをたどります。その 1 つのオリジンの中だけを回り、<code>/logout</code> や <code>/delete</code> のような破壊的に見えるリンクは決してたどりません。撮影の許可があるサイトだけにしてください。
</details>

## ロードマップ

意図して小さく保っています。投票は Issue を立ててください。

- `stm diff`: ページのどの領域が変わったかを正確に示し、ページ全体ではなく切り出した画像をエージェントに渡す
- `stm timelapse`: あるページの履歴を GIF や MP4 にし、git のコミットメッセージをキャプションに
- `stm backfill`: git の履歴をたどり、撮っていなかったビジュアルの履歴を作る
- サインイン状態での撮影 (`--storage-state`)
- タイムスライダー付きのローカルギャラリー

予定なし: クラウド同期、アカウント、テレメトリー、ウォッチモード、設定ファイル。

## コントリビュート

いま最も助かるのは、実際の実行結果を添えたバグ報告です。まず [CONTRIBUTING.md](../../CONTRIBUTING.md) を読み、次にモジュール構成とルールについて [AGENTS.md](../../AGENTS.md) を見てください。すべての決定とその理由は [DECISIONS.md](../../DECISIONS.md) にあります。

## このプロジェクトについて

作者は **Mohammed Sohaib Uddin**。毎日変わっていくソフトウェアには、どんな見た目だったかの記録が残されるべきだと考えたからです。

<p align="left">
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/Connect%20on%20LinkedIn-FF8C1A?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn でつながる"></a>
  <a href="https://github.com/mdsohaib"><img src="https://img.shields.io/badge/Follow%20on%20GitHub-0A0E14?style=for-the-badge&logo=github&logoColor=white" alt="GitHub でフォロー"></a>
</p>

`stm` が、見られてよかったと思えるものを見せてくれたなら、スターは無料ですし、他の人がこれを見つける助けになります。

MIT © Mohammed Sohaib Uddin
