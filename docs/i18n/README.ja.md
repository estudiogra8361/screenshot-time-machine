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
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/banner.svg" alt="screenshot-time-machine: localhost アプリの全ページを、コマンド1つでスクリーンショットし、日付を付けて差分を出す" width="100%">
</p>

<p align="center">
  <b>コマンド1つで、サイトの全ページをフルページでスクリーンショット。</b><br>
  日付付きのフォルダに保存されます。次に実行すると、どのページが変わったかを正確に教えてくれます。<br>
  <b>無料でオープンソース。すべて自分のマシンだけで動きます。</b>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/screenshot-time-machine"><img src="https://img.shields.io/npm/v/screenshot-time-machine?style=flat-square&label=npm&color=FF6600&labelColor=0A0E14" alt="npm バージョン"></a>
  <a href="https://github.com/mdsohaib/screenshot-time-machine/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/mdsohaib/screenshot-time-machine/ci.yml?branch=main&style=flat-square&label=tests&color=FF6600&labelColor=0A0E14" alt="テスト"></a>
  <img src="https://img.shields.io/badge/dependencies-1-FF6600?style=flat-square&labelColor=0A0E14" alt="依存パッケージは1つ">
  <img src="https://img.shields.io/badge/node-22%2B-FF6600?style=flat-square&labelColor=0A0E14&logo=nodedotjs&logoColor=white" alt="Node 22 以上">
  <a href="../../LICENSE"><img src="https://img.shields.io/badge/license-MIT-FF6600?style=flat-square&labelColor=0A0E14" alt="MIT ライセンス"></a>
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/LinkedIn-Mohammed%20Sohaib%20Uddin-FF6600?style=flat-square&labelColor=0A0E14&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
</p>

```bash
npx screenshot-time-machine@latest               # your app is on localhost? that is the whole setup
npx skills add mdsohaib/screenshot-time-machine  # teach Claude Code, Cursor, Codex and friends to run it
```

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/hero.svg" alt="変更されたページを1件ターミナルに報告する stm と、日付付きスナップショットが並んだフォルダ" width="820">
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

`stm` は無料でオープンソースのコマンドラインツールです。自分のパソコンでサイトを起動した状態で実行します。動作は次のとおりです。

1. **サイトを見つける**。localhost を自動で探すか、`--url` で指定した場所を使います。
2. **全ページを見つける**。サイトマップとページ内のリンクからたどります。
3. **各ページをフルページで撮影**。上から下まで撮り、さらにひと目で読める上部ビューも撮ります。
4. **ふつうの PNG ファイルとして保存**。日付と時刻を名前にしたフォルダに入ります。
5. **前回と比較**し、どのページが変わったかを正確に伝えます。

```
$ stm
7 pages saved → screenshots/localhost-3000_2026-08-15_14-32/
   1 changed since last snapshot (Aug 12, 09:10): /pricing
```

アカウント不要。クラウド不要。サブスクリプション不要。設定ファイル不要。常駐プロセスなし。依存パッケージは1つ、MIT ライセンス、ずっとあなたのものです。

## 解決したい問題

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/the-problem.svg" alt="12枚のページのサムネイル。1枚は自分で確認したページとして印が付き、4枚は壊れた状態で戻ってきている" width="820">
</p>

共通コンポーネントやレイアウト、スタイルシートを1つ変えると、残り40ページに何が起きたのか誰にも分かりません。正直に確かめる唯一の方法は全ページを開いて見ることですが、だから誰もやらないのです。

AI コーディングエージェントの登場で、この問題はさらに鋭くなりました。料金ページの修正を頼むと、エージェントは共通ファイルを編集し、会社概要ページには気付かれないまま余白が生まれます。エージェントは結果を見ませんし、あなたも見ません。

Git はコードの1行1行を追跡しますが、サイトのピクセルは1つも追跡しません。ビジュアルテストのサービスは CI パイプラインと月額料金を要求します。手作業のスクリーンショットは4ページ目で挫折し、そのファイルは誰も保存しません。

## 何が良くなるか

- **ユーザーより先に壊れたページに気付ける。** コマンド1つ、全ページ、そして変わったものの一覧。
- **AI エージェントに目を与える。** `stm --json` は変更されたページのファイルパスを渡すので、エージェントはそこだけを開き、自分が壊した箇所を直せます。
- **ビジュアルな履歴を残せる。** 実行のたびに、日付付きフォルダにただの PNG が並びます。3月のサイトがどんな姿だったか、Finder やエクスプローラーからそのまま遡って見られます。

## クイックスタート

アプリが localhost で動いている必要があります（`npm run dev`、`rails s`、`python manage.py runserver`、静的サーバー、HTML を返すものなら何でも）。その状態で次を実行します。

```bash
npx screenshot-time-machine@latest
```

何かを変更して、もう一度実行し、`changed` の行を読む。ワークフローはこれだけです。

<details>
<summary><b>一度インストールして <code>stm</code> として使う</b></summary>

```bash
npm install -g screenshot-time-machine
stm
```

必ず `npx screenshot-time-machine@latest` と書いてください。`npx stm` は使わないこと。npm の `stm` という名前は、2014年の無関係なパッケージのものです。
</details>

<details>
<summary><b>初回実行時に何が起きるか</b></summary>

- `stm` はポート 3000、3001、5173、5174、8080、4321、4322、8000、4200、5000 をこの順に調べ、最初に応答したアプリを使います。複数が応答した場合は、このプロジェクトで前回使ったものを優先し、他のものについても知らせます。
- すでに入っている Playwright のブラウザ、またはマシンにある Chrome か Edge を使います。どれも見つからない場合は、ヘッドレス版 Chrome を一度だけダウンロードし（約 120 MB）、その旨を表示します。
- プロジェクトに `.gitignore` があれば、一度だけ `screenshots/` を追記して知らせます。`.gitignore` を新規作成することはなく、何かを削除することもありません。
</details>

**必要環境:** Node 22 以上。`npm run dev` を使っているなら、ほぼ確実に入っています。不安なら `node -v` で確認してください。

## AI コーディングエージェントに導入する

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/agent-loop.svg" alt="ループ図: エージェントが UI を編集し、stm --json を実行し、変更一覧を受け取り、fold 画像を見て、修正してまた実行する" width="820">
</p>

コマンド1つで `stm` をスキルとしてインストールできます。エージェントは、いつ実行すべきか、結果をどう読むかを理解した状態になります。使っているエージェントを選んでください。

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
| **その他** | `npx skills add mdsohaib/screenshot-time-machine` | 70種類以上のエージェント一覧から選択 |

どのコマンドにも `-g` を付ければ、このプロジェクトだけでなく全プロジェクトにインストールできます。

あるいは、ふつうの言葉でエージェントに頼むだけでも構いません。

> screenshot-time-machine をインストールして、私のアプリで `stm` を実行し、何が変わったか見せて。

そのうえで、エージェントが読むメモリファイル（`CLAUDE.md`、`AGENTS.md`、`GEMINI.md`、`.cursor/rules`）に次の1行を足しておくと、言われなくても自分の作業を検証するようになります。

```
After changing anything a user can see, run `stm --json` and view the `fold` image of every entry in `changed` and `new` before saying you're done. Never claim a UI change is verified without viewing a screenshot.
```

<details>
<summary><b>Claude Code: プラグインでの導入と、ループの実感</b></summary>

スキルを使うのが一番簡単な道です。プラグインの方が好みなら、Claude Code の中で次を実行します。

```
/plugin marketplace add mdsohaib/screenshot-time-machine
/plugin install stm@stm
```

GitHub に SSH 鍵を登録していない場合は URL 形式を使ってください: `/plugin marketplace add https://github.com/mdsohaib/screenshot-time-machine.git`

Claude Code は Read ツールでスクリーンショットを開き、`stm --json` は絶対パスを渡します。ループはこうです。編集し、`stm --json` を実行し、変更されたページの `fold` 画像を Read し、修正し、繰り返す。「UI を確認して」と頼めば、自分からこのスキルを使いに行きます。
</details>

<details>
<summary><b>Codex</b></summary>

メモリの1行は `AGENTS.md` に入れてください。Codex は `view_image` で画像を開くので、動きが鈍いときは「変更された全ページの fold 画像を見て」と伝えてください。
</details>

<details>
<summary><b>Cursor</b></summary>

メモリの1行は `.cursor/rules/` 配下のルールに入れてください。エージェントはターミナルで `stm --json` を実行し、返ってきた PNG のパスを開きます。Cursor 内蔵のブラウザは一度に1ページしか見せませんが、`stm` は全ページに加えて差分まで渡します。
</details>

<details>
<summary><b>スキル非対応のエージェント全般</b></summary>

`stm skill` はスキルの本文を出力します。エージェントが読む指示ファイルに貼り付けてください。

```bash
stm skill
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

stdout には JSON ドキュメントが1つ、stderr には最大2行。いくつかのページが失敗しても必ず出力されます。`code` は終了コードと同じ値です。`truncated` は一覧から省かれた件数です（上限は25件。マニフェストにはすべて入っています）。出力にページ本文のテキストが含まれることはなく、あるのはパスと数値だけです。

**トークンについて。** 変更のないページは見に行かないので、コストはゼロです。サマリーはおよそ150トークン、加えて変更ページ1件あたり約50トークン。変更ページを1枚見るコストは、1440x900 の画像1枚分です。非常に縦長のフルページスクリーンショットは、ビジョンモデルによって文字が読めなくなるまで縮小されます。だからこそ全ページに `fold` 画像も用意され、スキルはエージェントにまずそちらを開くよう指示しています。

## ディスクに残るビジュアル履歴

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

実行のたびに、アプリ名と実行した分単位の時刻を名前にした新しいフォルダができます。中のファイルはすべて同じタイムスタンプを持つので、フォルダから引き出したスクリーンショット1枚でも、それが何でいつのものかが分かります。同じ分に2回実行すると、タイムスタンプに `-2`、`-3` が付きます。高さが 16,384 px を超えるページは Chromium の上限であるその高さで切られ、`truncated` として記録されます。

そのフォルダを Finder やエクスプローラーで開けば、プロジェクトの写真アルバムになります。履歴はただの PNG なので、このツールより長く残ります。アンインストールしても残るのは `screenshots/` フォルダと、`.gitignore` があった場合はその中の1行だけです。

## コマンド

| コマンド | 何をするか |
|---|---|
| `stm` | localhost で動いているアプリの全ページをスナップショット |
| `stm /pricing /about` | 指定したページだけを数秒でスナップショット。編集と確認のループはこれ |
| `stm --url http://localhost:4321` | 自動検出せず、このアプリを対象にする。パスを付けるとそこからクロール開始 |
| `stm --mobile` | 390x844 のスマートフォン表示も撮影（`@mobile` ファイル） |
| `stm --max 100` | この件数までページを探したら打ち切る（既定は100） |
| `stm --out screenshots` | スナップショットの保存先（既定は `screenshots`） |
| `stm --json` | エージェント向けに、機械可読なサマリーを stdout へ |
| `stm list` | 過去のスナップショット: フォルダ、ページ数、変更、失敗 |
| `stm open` | 最新のスナップショットフォルダを開く |
| `stm skill` | エージェント用スキルを出力 |

終了コード: `0` すべて撮影できた、`1` 何も撮影できなかった（アプリなし、ブラウザなし、引数が不正）、`2` 一部のページが失敗した、または実行が中断された。ページの失敗で実行全体が止まることはありません。

## ページの見つけ方と、変更の追跡方法

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/how-it-works.svg" alt="検出、探索、撮影、比較、報告" width="820">
</p>

スクリーンショットを信頼できるものにしている細部は次のとおりです。

- 撮影前にページを最下部までスクロールし、遅延読み込みの画像やセクションを読み込ませてから戻します。スムーススクロールのサイトにも対応します。
- アニメーションは終了状態で固定されるので、フェードインは見える状態になり、スピナーは静止します。同じマシンで2回実行すればバイト単位で同一の PNG が得られます。これが「変更あり」に意味を持たせています。
- 開発用ツールバー（Astro、Nuxt、Next.js のバッジ）は隠します。開発用の**エラー**オーバーレイは決して隠しません。ページはそのまま撮影され、警告が付きます。壊れたページこそ、あなたが見たいものだからです。
- 長時間つながり続ける接続（HMR ソケット、イベントストリーム）が撮影を止めることはありません。各ページには30秒の持ち時間と1回の再試行があり、それを超えると失敗として記録し、次に進みます。
- マニフェストはページごとに書き込まれるので、途中で中断された実行でも `stm list` が読めるフォルダが残り、サマリーには早期終了したことが示されます。
- `/logout` や `/delete` のようなリンクは決してたどりません。ファイル、`/api/`、別オリジン、そして自分の `screenshots/` フォルダも同様です。

## 他の手段との比較

| | stm | Claude Code Desktop の自動検証 | Playwright MCP、agent-browser、DevTools MCP | Percy、Chromatic |
|---|---|---|---|---|
| コマンド1つで全ページ | はい | 一度に1ページ | ツール呼び出し1回につき1ページ | はい、CI 上で |
| どのページが変わったか教える | はい | いいえ | いいえ | はい、クラウド上で |
| ターミナル、Cursor、Codex で動く | はい | Desktop のみ | はい | CI のみ |
| ディスク上で辿れる履歴 | はい | いいえ | いいえ | 各社のクラウド内 |
| すべて自分のマシンで動く | はい | はい | はい | いいえ |

これらは競合ではなく補完関係です。エージェントに画面を操作させたいときはブラウザツールを使ってください。触った箇所をすべて確認させたいときは `stm` を使ってください。

## プライバシー

**100% ローカルで動作します。** `stm` が通信するのはあなたのアプリの URL だけで、Chrome も Edge も無い場合に一度だけ Playwright のブラウザ CDN にアクセスします。スクリーンショットがマシンの外に出ることはありません。アカウントも API キーもテレメトリもありません。撮影されるページは、ブラウザで開いたときとまったく同じようにリソースを読み込みます。脅威モデルの全文は [SECURITY.md](../../SECURITY.md) にあります。

## FAQ

<details>
<summary><b>本当に無料ですか。</b></summary>
はい。MIT ライセンスのオープンソースで、有料プランもホスティングサービスも、登録手続きもありません。インストールして、ずっと使って、気に入ればフォークしてください。
</details>

<details>
<summary><b>Next.js、Vite、Astro、SvelteKit、Rails、Django、静的サイトで動きますか。</b></summary>
はい。localhost で HTML を返すものなら何でも動きます。これらの一般的なポートは自動で調べます。それ以外は <code>--url</code> を使ってください。
</details>

<details>
<summary><b>ホームページしか見つかりませんでした。</b></summary>
ページはサイトマップと <code>&lt;a href&gt;</code> リンクから探します。ボタンやハッシュルート（<code>/#/about</code>）で遷移するアプリには、たどれるリンクがありません。ページ名を直接指定してください: <code>stm /about /pricing</code>。エージェントには、自分が触ったページを渡すよう指示してあります。
</details>

<details>
<summary><b>スクリーンショットのほとんどがログインページになります。</b></summary>
アプリがサインインへリダイレクトしています。<code>stm</code> はまだサインインできませんが、この状況が起きたことは知らせます。サインイン済みの撮影はロードマップに入っています。
</details>

<details>
<summary><b>しばらくすると全ページが「変更あり」になります。</b></summary>
よくある原因は2つ。ブラウザが更新されてレンダリングがわずかにずれた場合（<code>stm</code> はブラウザのバージョンを記録し、警告します）。もう1つは、時計、「3分前」、ランダムなヒーロー画像、canvas アニメーション、初回訪問後に消えるクッキーバナーなど、勝手に動くものがページにある場合です。そうしたページは明示的に指定し、<code>stm diff</code> が登場するまでは目視で確認してください。
</details>

<details>
<summary><b>ファイルを監視して自動実行できますか。</b></summary>
いいえ、意図的にできません。<code>stm</code> は <code>git commit</code> のようなセーブポイントのボタンです。どの瞬間を残す価値があるかは、あなた、またはあなたのエージェントが決めます。自動にしたいなら、エージェントのメモリファイルにあの1行を入れて、エージェントに判断させてください。
</details>

<details>
<summary><b>履歴をタイムラプスにできますか。</b></summary>
正式な <code>stm timelapse</code> はロードマップにあります。今のところは ffmpeg でどうぞ。
<pre><code>ffmpeg -framerate 1 -pattern_type glob -i 'screenshots/*/pricing_*.png' \
  -vf "scale=720:-1,split[a][b];[a]palettegen[p];[b][p]paletteuse" pricing.gif</code></pre>
</details>

<details>
<summary><b>Lovable、Bolt、v0 を使っています。これは使えますか。</b></summary>
これらはアプリを各社のクラウドで動かすので、撮影できる localhost がありません。プロジェクトをエクスポートしてローカルで動かせば <code>stm</code> は動きます。Claude Code、Cursor、Codex、Windsurf、Copilot で自分のマシンに作ったものなら、そのまま動きます。
</details>

<details>
<summary><b>Playwright のスクリプトを自分で書けば済むのでは。</b></summary>
書けます。<code>stm</code> はまさにそのスクリプトに、ページ探索、安定したフォルダ構成、変更検出、エージェントに優しい出力、開発用オーバーレイの処理、そしてあらゆる例外ケースへの対応を足して、保守し続けているものです。しかも、あなたのエージェントがすでに知っているコマンド1つです。
</details>

<details>
<summary><b>Linux でブラウザのライブラリが足りないと言われます。</b></summary>
表示された <code>install-deps</code> コマンドを一度だけ実行してください。WSL と Codespaces でも必要です。
</details>

<details>
<summary><b>ダウンロードされたブラウザはどこに置かれますか。</b></summary>
Playwright のキャッシュです。macOS は <code>~/Library/Caches/ms-playwright</code>、Linux は <code>~/.cache/ms-playwright</code>、Windows は <code>%LOCALAPPDATA%\ms-playwright</code>。いつ削除しても構いません。<code>stm</code> は必要になれば再びダウンロードします。
</details>

<details>
<summary><b>localhost 以外のサイトを対象にできますか。</b></summary>
はい: <code>stm --url https://staging.example.com</code>。そのオリジン内にとどまり、破壊的に見えるリンクは避けます。撮影が許可されているサイトだけを対象にしてください。
</details>

## ロードマップ

意図的に小さく保っています。賛成の投票は issue を立てる形でどうぞ。

- `stm diff`: ページのどの領域が変わったかを正確に示し、ページ全体ではなく切り抜きをエージェントに渡す
- `stm timelapse`: あるページの履歴を GIF や MP4 にする。git のコミットをキャプションに添えて
- `stm backfill`: git の履歴をたどり、撮り逃していたビジュアル履歴を作る
- サインイン済みの撮影（`--storage-state`）
- タイムスライダー付きのローカルギャラリー

予定にないもの: クラウド同期、アカウント、テレメトリ、ウォッチモード、設定ファイル。

## コントリビュート

今もっとも役に立つのは、実際の実行結果を添えたバグ報告です。まず [CONTRIBUTING.md](../../CONTRIBUTING.md) を読み、続いてモジュール構成とルールについては [AGENTS.md](../../AGENTS.md) を読んでください。すべての決定とその理由は [DECISIONS.md](../../DECISIONS.md) にあります。

## このプロジェクトについて

作者は **Mohammed Sohaib Uddin**。誰も見ないままの UI を出荷するエージェントに、見るための手段が必要だったからです。

<p align="left">
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/Connect%20on%20LinkedIn-FF6600?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn でつながる"></a>
  <a href="https://github.com/mdsohaib"><img src="https://img.shields.io/badge/Follow%20on%20GitHub-0A0E14?style=for-the-badge&logo=github&logoColor=white" alt="GitHub でフォロー"></a>
</p>

`stm` のおかげで壊れたページを出さずに済んだなら、スターは無料ですし、他の人がこのツールを見つける助けになります。

MIT © Mohammed Sohaib Uddin
