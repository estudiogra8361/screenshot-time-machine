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
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/banner.svg" alt="screenshot-time-machine: localhost アプリの全ページを、コマンド 1 つでスクリーンショットし、日付を付けて差分を出す" width="100%">
</p>

<h1 align="center">screenshot-time-machine</h1>

<p align="center">
  <b>フルページスクリーンショット CLI。localhost で動くサイトの全ページを、コマンド 1 つで撮影します。</b><br>
  いま作っているアプリのすべてのページを、まとめてページ全体で撮影。<br>
  日付付きのフォルダに保存され、次に実行したときには、どのページが変わったかを正確に教えてくれます。<br>
  <b>無料でオープンソース。すべて自分のマシンの中だけで動きます。</b>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/screenshot-time-machine"><img src="https://img.shields.io/npm/v/screenshot-time-machine?style=flat-square&label=npm&color=FF6600&labelColor=0A0E14" alt="npm バージョン"></a>
  <a href="https://github.com/mdsohaib/screenshot-time-machine/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/mdsohaib/screenshot-time-machine/ci.yml?branch=main&style=flat-square&label=tests&color=FF6600&labelColor=0A0E14" alt="テスト"></a>
  <img src="https://img.shields.io/badge/dependencies-1-FF6600?style=flat-square&labelColor=0A0E14" alt="依存は 1 つだけ">
  <img src="https://img.shields.io/badge/node-22%2B-FF6600?style=flat-square&labelColor=0A0E14&logo=nodedotjs&logoColor=white" alt="Node 22 以上">
  <a href="../../LICENSE"><img src="https://img.shields.io/badge/license-MIT-FF6600?style=flat-square&labelColor=0A0E14" alt="MIT ライセンス"></a>
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/LinkedIn-Mohammed%20Sohaib%20Uddin-FF6600?style=flat-square&labelColor=0A0E14&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
</p>

```bash
npx screenshot-time-machine@latest               # your app is on localhost? that is the whole setup
npx skills add mdsohaib/screenshot-time-machine  # teach Claude Code, Cursor, Codex and friends to run it
```

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/hero.svg" alt="変更されたページを 1 件ターミナルに報告する stm と、日付付きスナップショットが並ぶフォルダ" width="820">
</p>

<p align="center">
  <b>対応ツール</b><br>
  <img src="https://img.shields.io/badge/Claude%20Code-0A0E14?style=flat-square&logo=claude&logoColor=FF6600" alt="Claude Code">
  <img src="https://img.shields.io/badge/Codex-0A0E14?style=flat-square" alt="Codex">
  <img src="https://img.shields.io/badge/Cursor-0A0E14?style=flat-square&logo=cursor&logoColor=FF6600" alt="Cursor">
  <img src="https://img.shields.io/badge/Gemini%20CLI-0A0E14?style=flat-square&logo=googlegemini&logoColor=FF6600" alt="Gemini CLI">
  <img src="https://img.shields.io/badge/Antigravity-0A0E14?style=flat-square" alt="Antigravity">
  <img src="https://img.shields.io/badge/Copilot-0A0E14?style=flat-square&logo=githubcopilot&logoColor=FF6600" alt="GitHub Copilot">
  <img src="https://img.shields.io/badge/Windsurf-0A0E14?style=flat-square&logo=windsurf&logoColor=FF6600" alt="Windsurf">
  <img src="https://img.shields.io/badge/OpenCode-0A0E14?style=flat-square&logo=opencode&logoColor=FF6600" alt="OpenCode">
  <img src="https://img.shields.io/badge/Cline-0A0E14?style=flat-square" alt="Cline">
  <br><i>そして、それらに指示を出す人間たち</i>
</p>

---

## これは何か

`stm` は無料でオープンソースのコマンドラインツールです。自分のパソコンでサイトを動かしたまま実行すると、次のことをします。

1. **サイトを見つける**。localhost を自動で探すか、`--url` で指定した場所を使います。
2. **ページを見つける**。ページ上の `<a href>` リンクをたどり、`sitemap.xml` があればそれも読み、1 回の実行で最大 100 ページまで探します。ボタンのクリックでしか到達できないページや、`/#/about` のようなハッシュルートはたどれません。その場合は自分で指定してください: `stm /about /pricing`。
3. **各ページを上から下まで丸ごと撮影**し、さらにページ最上部だけ、つまり 1 画面に収まる範囲の画像をもう 1 枚撮ります。この 2 枚目が `fold` 画像で、まず最初に見るべきものです。
4. **ふつうの PNG ファイルとして保存**します。保存先は日付と時刻の名前が付いたフォルダです。
5. **前回と比較**し、どのページが変わったかを正確に伝えます。

```
$ stm
7 pages saved → screenshots/localhost-3000_2026-08-15_14-32/
   1 changed since last snapshot (Aug 12, 09:10): /pricing
```

アカウント不要。クラウド不要。サブスクリプション不要。設定ファイル不要。常駐プロセスなし。依存は 1 つだけ、MIT ライセンス、ずっとあなたのものです。

## 解決する問題

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/the-problem.svg" alt="12 個のページサムネイル。1 つは自分が確認したページとして印が付き、4 つは壊れて戻ってきている。" width="820">
</p>

共通コンポーネントやレイアウト、スタイルシートを 1 つ変えると、残り 40 ページに何が起きたのかは分かりません。正直に確かめる唯一の方法は全ページを開いて目で見ることですが、誰もやりません。

AI コーディングエージェントの登場で、これはさらに深刻になりました。価格ページの修正を頼むと、エージェントは共通ファイルを編集し、About ページには静かに余白が生まれます。エージェントは結果を見ませんし、あなたも見ません。

Git はコードの 1 行 1 行を追跡しますが、サイトのピクセルは 1 つも追跡しません。ビジュアルテストのサービスは CI パイプラインと月額料金を求めてきます。手作業のスクリーンショットは 4 ページ目でくじけますし、そのファイルを保管し続ける人もいません。

## なぜ役に立つのか

- **ユーザーより先に壊れたページを見つける。** コマンド 1 つ、全ページ、そして変わったものの一覧。
- **AI エージェントに目を与える。** `stm --json` は変更されたページのファイルパスを渡すので、エージェントはそこだけを開いて、自分が壊した箇所を直せます。
- **見た目の履歴を残す。** 実行のたびに、日付付きフォルダにただの PNG が並びます。3 月のサイトがどうだったかを、Finder やエクスプローラーからそのまま遡って見られます。

## クイックスタート

アプリが localhost で動いている必要があります (`npm run dev`、`rails s`、`python manage.py runserver`、静的サーバー、HTML を配信するものなら何でも)。準備ができたら:

```bash
npx screenshot-time-machine@latest
```

**Node 22 以降が必要です。** `node -v` で確認してください。21 以下と表示されたら、先に [nodejs.org](https://nodejs.org) から Node を更新してください。

初回はマシンにすでにある Chrome または Edge を使います。どちらもない場合はブラウザを 1 回だけダウンロードします。約 120 MB で、実行前に知らせます。stm がインターネットから取得するのは、このダウンロードだけです。

何かを変更して、もう一度実行し、`changed` の行を読む。ワークフローはこれだけです。

以下では、コマンドを短く `stm` と書きます。この短い名前を使うには、一度インストールしてください。

```bash
npm install -g screenshot-time-machine
```

インストールしなくても問題ありません。`stm` と書かれている箇所は `npx screenshot-time-machine@latest` に読み替えてください。`npx stm` とは絶対に書かないでください。それは 2014 年の無関係なパッケージです。

<details>
<summary><b>初回実行時に他に起きること</b></summary>

- `stm` はポート 3000、3001、5173、5174、8080、4321、4322、8000、4200、5000 をこの順に調べ、最初に応答したアプリを使います。複数が応答した場合は、このプロジェクトで前回使ったものを優先し、他の候補も知らせます。
- プロジェクトに `.gitignore` があれば、`screenshots/` を 1 回だけ追記して知らせます。`.gitignore` を新規作成することはなく、何かを削除することもありません。
</details>

## AI コーディングエージェントに導入する

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/agent-loop.svg" alt="ループの図: エージェントが UI を編集し、stm --json を実行し、変更一覧を受け取り、fold 画像を見て、修正して、また実行する" width="820">
</p>

コマンド 1 つで `stm` をスキルとして導入できます。スキルとは、エージェントが読む短い指示ファイルで、`stm` をいつ実行し、結果をどう読むかを伝えるものです。`npx skills add` は独立したオープンソースのインストーラーで、そのフォルダ 1 つをプロジェクトにコピーするだけで、他は何も変更しません。お使いのエージェントを選んでください。

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
| **その他すべて** | `npx skills add mdsohaib/screenshot-time-machine` | 70 以上のエージェント一覧から選択 |

どのコマンドにも `-g` を付ければ、このプロジェクトだけでなく全プロジェクトに導入できます。

あるいは、エージェントに普通の言葉で伝えるだけでも構いません。

> screenshot-time-machine を導入して、私のアプリで `stm` を実行し、何が変わったか見せて。

さらに、エージェントがリクエストのたびに読むファイルに次の 1 行を追加しておくと、頼まなくても自分の作業を検証するようになります。

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

シンプルなのはスキルです。プラグインの方が好みなら、Claude Code の中で次を実行してください。

```
/plugin marketplace add mdsohaib/screenshot-time-machine
/plugin install stm@stm
```

GitHub に SSH 鍵がない場合は URL 形式を使ってください: `/plugin marketplace add https://github.com/mdsohaib/screenshot-time-machine.git`

Claude Code は Read ツールでスクリーンショットを開き、`stm --json` は絶対パスを渡します。ループはこうです。編集し、`stm --json`、変更された `fold` 画像を Read し、修正し、繰り返す。「UI を確認して」と頼めば、自分からスキルを使います。
</details>

<details>
<summary><b>Codex</b></summary>

メモリ行は `AGENTS.md` に置いてください。Codex は `view_image` で画像を開くので、ためらうようなら「変更された各ページの fold 画像を見て」と伝えてください。
</details>

<details>
<summary><b>Cursor</b></summary>

メモリ行は `.cursor/rules/` 以下のルールに置いてください。エージェントはターミナルで `stm --json` を実行し、返ってきた PNG のパスを開きます。Cursor 内蔵のブラウザは 1 ページずつしか見せませんが、`stm` は全ページと差分をまとめて渡します。
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

stdout には JSON ドキュメントが 1 つ、stderr には最大 2 行。一部のページが失敗しても必ず出力されます。`code` は終了コードと同じ値です。

そもそも実行できなかった場合は、もっと小さなオブジェクトが出ます: `{"code": 1, "error": "no_server" | "no_browser", "message": "...", "fix": "..."}`。引数が不正な場合は `{"error": "bad_args", "message": "...", "fix": "Run stm --help"}` です。`changed` を読む前に `error` を確認してください。`truncated` は一覧から省かれた件数です (上限は 25 件で、マニフェストにはすべて入っています)。出力にページのテキストが含まれることはなく、パスと数値だけです。

**トークンについて。** 変更のないページは、エージェントが開かないので閲覧コストはゼロです。サマリーはおよそ 150 トークン、加えて変更ページごとに約 50 トークン。変更されたページを 1 枚見るコストは、1440x900 の画像 1 枚分です。非常に縦長のフルページスクリーンショットは、ビジョンモデルによって文字が読めなくなるまで縮小されます。だからこそ、どのページにも `fold` 画像が付き、スキルはエージェントにまずそちらを開くよう指示しています。

## ディスク上に残る、見た目の履歴

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

実行のたびに、アプリ名と実行した分単位の時刻を名前にした新しいフォルダができます。中のファイルはすべて同じタイムスタンプを持つので、フォルダから 1 枚取り出しても、それが何で、いつのものかが分かります。同じ分内に 2 回実行すると、タイムスタンプに `-2`、`-3` が付きます。高さ 16,384 px を超えるページは Chromium の上限であるその高さで切られ、`truncated` として記録されます。

Finder やエクスプローラーでフォルダを開けば、プロジェクトのフォトアルバムになります。履歴はただの PNG なので、このツールより長く残ります。アンインストールしても後に残るのは `screenshots/` フォルダと、`.gitignore` があった場合はそこに追記された 1 行だけです。

## コマンド

| コマンド | 何をするか |
|---|---|
| `stm` | localhost で動いているアプリの全ページをスナップショット |
| `stm /pricing /about` | 指定したページだけを数秒でスナップショット。これが編集と確認のループ |
| `stm --url http://localhost:4321` | 自動検出ではなくこのアプリを撮影。パスを付けるとそこから探索を開始 |
| `stm --mobile` | 390x844 のスマートフォン表示も撮影 (`@mobile` ファイル) |
| `stm --max 100` | この件数でページ探索を打ち切る (既定は 100) |
| `stm --out screenshots` | スナップショットの保存先 (既定は `screenshots`) |
| `stm --json` | エージェント向けに、機械可読なサマリーを stdout へ出力 |
| `stm list` | 過去のスナップショット: フォルダ、ページ数、変更、失敗 |
| `stm open` | 最新のスナップショットフォルダを開く |
| `stm skill` | エージェント用スキルを出力 |

終了コード: `0` すべて撮影できた、`1` 何も撮影できなかった (アプリがない、ブラウザがない、引数が不正)、`2` 一部のページが失敗した、または実行が中断された。1 ページの失敗で実行が止まることはありません。

## ページの見つけ方と、変更の追跡のしかた

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/how-it-works.svg" alt="検出、探索、撮影、比較、報告" width="820">
</p>

スクリーンショットを信頼できるものにしている細部は次のとおりです。

- 撮影前にページを最下部までスクロールして遅延読み込みの画像やセクションを表示させ、その後もとに戻します。スムーススクロールのサイトにも対応しています。
- アニメーションは終了状態で停止させるので、フェードインは見えるようになり、スピナーは静止します。同じマシンで 2 回実行すると、内容が変わっていないページの PNG はバイト単位で同一になります。これが「変更あり」に意味を持たせています。時計、相対時間表示、切り替わるヒーロー画像、canvas アニメーションを表示するページは、常に変更ありと報告されます。
- 開発用ツールバー (Astro、Nuxt、Next.js のバッジ) は隠します。開発用の**エラー**オーバーレイは決して隠しません。ページはそのまま撮影して警告を付けます。壊れたページこそ、あなたが見たいものだからです。
- 長時間つながり続ける接続 (HMR ソケット、イベントストリーム) が撮影を止めることはありません。各ページには 30 秒の持ち時間と 1 回のリトライがあり、それを過ぎたら失敗として記録して次に進みます。
- マニフェストは 1 ページごとに書き出されるので、途中で中断された実行でも `stm list` が読めるフォルダが残り、サマリーには早期終了したことが記されます。
- `/logout` や `/delete` のようなリンクは決してたどりません。ファイル、`/api/`、別オリジン、そして自分の `screenshots/` フォルダも同様です。

## ビジュアルリグレッションツールとの比較

| | stm | Claude Code Desktop の自動検証 | Playwright MCP、agent-browser、DevTools MCP | Percy、Chromatic |
|---|---|---|---|---|
| コマンド 1 つで全ページ | はい | 1 ページずつ | ツール呼び出しごとに 1 ページ | はい、CI 上で |
| どのページが変わったか教える | はい | いいえ | いいえ | はい、クラウド上で |
| ターミナル、Cursor、Codex で動く | はい | Desktop のみ | はい | CI のみ |
| 閲覧できる履歴がディスクに残る | はい | いいえ | いいえ | 各社のクラウド上に |
| すべて自分のマシンで動く | はい | はい | はい | いいえ |

`stm` はビジュアルリグレッションテストの、無料でローカルな半分です。どのページが変わったかを伝え、そのピクセルを手渡します。CI パイプラインもアカウントも月額料金もいりません。これらのツールは競合ではなく補完関係です。エージェントが画面を操作する必要があるときはブラウザツールを、いま触ったものすべてを見る必要があるときは `stm` を使ってください。

## プライバシー

**100% ローカルで動作します。** `stm` が通信するのはあなたのアプリの URL だけです。Chrome も Edge もない場合に限り、Playwright のブラウザ CDN に 1 回だけ接続します。スクリーンショットがマシンの外に出ることはありません。アカウントも API キーもテレメトリーもありません。撮影対象のページは、ブラウザで開いたときとまったく同じように自身のリソースを読み込みます。脅威モデルの全文は [SECURITY.md](../../SECURITY.md) にあります。

## FAQ

<details>
<summary><b>本当に無料ですか。</b></summary>
はい。MIT ライセンスのオープンソースで、有料プランもホスティングサービスも、登録が必要なものもありません。インストールして、ずっと使って、好きならフォークしてください。
</details>

<details>
<summary><b>Next.js、Vite、Astro、SvelteKit、Rails、Django、静的サイトで動きますか。</b></summary>
はい。localhost で HTML を配信するものなら何でも動きます。これらの一般的なポートは自動で調べます。それ以外は <code>--url</code> を使ってください。
</details>

<details>
<summary><b>ホームページしか見つかりませんでした。</b></summary>
ページはサイトマップと <code>&lt;a href&gt;</code> リンクから見つけます。ボタンやハッシュルート (<code>/#/about</code>) で遷移するアプリには、たどれるリンクがありません。ページ名を指定してください: <code>stm /about /pricing</code>。エージェントには、自分が触ったページを渡すよう指示してあります。
</details>

<details>
<summary><b>スクリーンショットのほとんどがログインページになります。</b></summary>
アプリがサインインへリダイレクトしています。<code>stm</code> はまだサインインできませんが、そうなったことは知らせます。サインイン状態での撮影はロードマップに入っています。
</details>

<details>
<summary><b>しばらくすると全ページが変更ありになります。</b></summary>
よくある原因は 2 つです。ブラウザが更新されてレンダリングがわずかにずれた (<code>stm</code> はブラウザのバージョンを記録し、警告します)。または、時計、「3 分前」、ランダムなヒーロー画像、canvas アニメーション、初回訪問後に消える Cookie バナーなど、勝手に動くものがページにある。そうしたページは明示的に指定して、<code>stm diff</code> が出るまでは目視で確認してください。
</details>

<details>
<summary><b>ファイルを監視して自動実行できますか。</b></summary>
できません。意図的にそうしています。<code>stm</code> は <code>git commit</code> と同じセーブポイントのボタンです。どの瞬間を残す価値があるかは、あなたかエージェントが決めます。自動にしたければ、あの 1 行の指示をエージェントのメモリファイルに入れて、エージェントに判断させてください。
</details>

<details>
<summary><b>履歴をタイムラプスにできますか。</b></summary>
本格的な <code>stm timelapse</code> はロードマップにあります。今日のところは ffmpeg で:
<pre><code>ffmpeg -framerate 1 -pattern_type glob -i 'screenshots/*/pricing_*.png' \
  -vf "scale=720:-1,split[a][b];[a]palettegen[p];[b][p]paletteuse" pricing.gif</code></pre>
</details>

<details>
<summary><b>Lovable、Bolt、v0 を使っています。これは使えますか。</b></summary>
それらはアプリを各社のクラウドで動かすので、撮影する localhost がありません。プロジェクトをエクスポートしてローカルで動かせば <code>stm</code> は動きます。Claude Code、Cursor、Codex、Windsurf、Copilot で自分のマシン上に作ったものは、そのまま動きます。
</details>

<details>
<summary><b>Playwright スクリプトを書けば済むのでは。</b></summary>
書けます。<code>stm</code> はそのスクリプトに、ページ探索、安定したフォルダ構成、変更検出、エージェントに優しい出力、開発用オーバーレイの処理、そしてあらゆるエッジケースへの対応を加えて、保守し続けているものです。しかも、あなたのエージェントがすでに知っているコマンド 1 つで済みます。
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
<summary><b>localhost 以外のサイトに向けられますか。</b></summary>
はい: <code>stm --url https://staging.example.com</code>。そのオリジンの中だけを回り、破壊的に見えるリンクは避けます。撮影の許可があるサイトだけにしてください。
</details>

## ロードマップ

意図して小さく保っています。投票は Issue を立ててください。

- `stm diff`: ページのどの領域が変わったかを正確に示し、ページ全体ではなく切り出した画像をエージェントに渡す
- `stm timelapse`: あるページの履歴を GIF や MP4 にし、git のコミットメッセージをキャプションに
- `stm backfill`: git の履歴をたどり、撮っていなかった見た目の履歴を作る
- サインイン状態での撮影 (`--storage-state`)
- タイムスライダー付きのローカルギャラリー

予定なし: クラウド同期、アカウント、テレメトリー、ウォッチモード、設定ファイル。

## コントリビュート

いま最も助かるのは、実際の実行結果を添えたバグ報告です。まず [CONTRIBUTING.md](../../CONTRIBUTING.md) を読み、次にモジュール構成とルールについて [AGENTS.md](../../AGENTS.md) を見てください。すべての決定とその理由は [DECISIONS.md](../../DECISIONS.md) にあります。

## このプロジェクトについて

作者は **Mohammed Sohaib Uddin**。誰も見ない UI を出荷するエージェントに、見る手段が必要だったからです。

<p align="left">
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/Connect%20on%20LinkedIn-FF6600?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn でつながる"></a>
  <a href="https://github.com/mdsohaib"><img src="https://img.shields.io/badge/Follow%20on%20GitHub-0A0E14?style=for-the-badge&logo=github&logoColor=white" alt="GitHub でフォロー"></a>
</p>

`stm` のおかげで壊れたページを出さずに済んだなら、スターは無料ですし、他の人がこれを見つける助けになります。

MIT © Mohammed Sohaib Uddin
