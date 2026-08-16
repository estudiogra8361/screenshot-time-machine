<p align="center">
  <a href="../../README.md">English</a> ·
  <a href="README.zh-CN.md">简体中文</a> ·
  <a href="README.es.md">Español</a> ·
  <a href="README.hi.md">हिन्दी</a> ·
  <a href="README.pt-BR.md">Português</a> ·
  <a href="README.ja.md">日本語</a> ·
  <a href="README.de.md">Deutsch</a> ·
  <a href="README.fr.md">Français</a> ·
  한국어 ·
  <a href="README.ru.md">Русский</a> ·
  <a href="README.ar.md">العربية</a>
</p>

*영문 README를 번역한 문서입니다. 내용이 모호할 때는 영문판이 기준입니다.*

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/banner.svg" alt="screenshot-time-machine: 명령 한 번으로 웹사이트의 모든 페이지를 전체 페이지 스크린샷으로 남깁니다" width="100%">
</p>

<h1 align="center">screenshot-time-machine</h1>

<p align="center">
  <b>Wayback Machine처럼, 당신의 웹사이트를 위해.</b><br>
  <code>stm</code>은 사이트를 페이지 단위로 훑으면서 모든 페이지의 전체 스크린샷을<br>
  날짜와 시각이 찍힌 폴더에 저장합니다.<br>
  원하는 URL을 지정해도 되고, localhost에서 돌고 있는 앱을 알아서 찾게 두어도 됩니다.<br>
  무언가를 배포할 때마다 실행하면 시각적 기록이 저절로 쌓입니다.<br>
  모든 페이지, 모든 버전이 평범한 PNG 파일로 내 디스크에 남습니다.<br>
  <b>무료 오픈소스입니다. 전부 내 컴퓨터 안에서 실행됩니다.</b>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/screenshot-time-machine"><img src="https://img.shields.io/npm/v/screenshot-time-machine?style=flat-square&label=npm&color=FF8C1A&labelColor=0A0E14" alt="npm 버전"></a>
  <a href="../../LICENSE"><img src="https://img.shields.io/badge/license-MIT-FFC24A?style=flat-square&labelColor=0A0E14" alt="MIT 라이선스"></a>
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/LinkedIn-Mohammed%20Sohaib%20Uddin-F0509F?style=flat-square&labelColor=0A0E14&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
</p>

```bash
npx screenshot-time-machine@latest                              # the app you have running on localhost
npx screenshot-time-machine@latest --url https://your-site.com  # or any site you are allowed to capture
npx skills add mdsohaib/screenshot-time-machine                 # teach Claude Code, Cursor, Codex and friends to run it
```

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/demo.gif" alt="한 스토어 홈페이지의 디자인 열 개 버전, 첫 초안부터 완성된 레이아웃까지" width="820">
</p>

<p align="center"><i>같은 페이지의 열 개 버전을 순서대로 재생한 것입니다. 날짜별 스크린샷 폴더는 결국 이런 모습이 됩니다.</i></p>

<h3 align="center">이런 도구와 함께 씁니다</h3>

<p align="center">
  <a href="#ai-코딩-에이전트에-설치하기"><img src="https://img.shields.io/badge/Claude%20Code-FF8C1A?style=for-the-badge&logo=claude&logoColor=white" alt="Claude Code"></a>
  <a href="#ai-코딩-에이전트에-설치하기"><img src="https://img.shields.io/badge/Codex-0A0E14?style=for-the-badge" alt="Codex"></a>
  <a href="#ai-코딩-에이전트에-설치하기"><img src="https://img.shields.io/badge/Cursor-7FB0F5?style=for-the-badge&logo=cursor&logoColor=0A0E14" alt="Cursor"></a>
  <a href="#ai-코딩-에이전트에-설치하기"><img src="https://img.shields.io/badge/Gemini%20CLI-A98BEB?style=for-the-badge&logo=googlegemini&logoColor=0A0E14" alt="Gemini CLI"></a>
  <a href="#ai-코딩-에이전트에-설치하기"><img src="https://img.shields.io/badge/Antigravity-C88AE0?style=for-the-badge&logo=google&logoColor=0A0E14" alt="Antigravity"></a>
  <br>
  <a href="#ai-코딩-에이전트에-설치하기"><img src="https://img.shields.io/badge/GitHub%20Copilot-F0509F?style=for-the-badge&logo=githubcopilot&logoColor=white" alt="GitHub Copilot"></a>
  <a href="#ai-코딩-에이전트에-설치하기"><img src="https://img.shields.io/badge/Windsurf-FFC24A?style=for-the-badge&logo=windsurf&logoColor=0A0E14" alt="Windsurf"></a>
  <a href="#ai-코딩-에이전트에-설치하기"><img src="https://img.shields.io/badge/OpenCode-4FC3A1?style=for-the-badge&logo=opencode&logoColor=white" alt="OpenCode"></a>
  <a href="#ai-코딩-에이전트에-설치하기"><img src="https://img.shields.io/badge/Cline-6C7CE0?style=for-the-badge&logo=cline&logoColor=white" alt="Cline"></a>
  <a href="#설치할-수-있는-모든-에이전트"><img src="https://img.shields.io/badge/Zed-3B4B5F?style=for-the-badge&logo=zedindustries&logoColor=white" alt="Zed"></a>
  <a href="#설치할-수-있는-모든-에이전트"><img src="https://img.shields.io/badge/Warp-2A8FB5?style=for-the-badge&logo=warp&logoColor=white" alt="Warp"></a>
  <a href="#설치할-수-있는-모든-에이전트"><img src="https://img.shields.io/badge/Devin-8B6FD4?style=for-the-badge" alt="Devin"></a>
  <a href="#설치할-수-있는-모든-에이전트"><img src="https://img.shields.io/badge/Amp-C4653B?style=for-the-badge" alt="Amp"></a>
  <a href="#설치할-수-있는-모든-에이전트"><img src="https://img.shields.io/badge/Full%20list-5A6478?style=for-the-badge" alt="에이전트 전체 목록"></a>
</p>

<p align="center"><i>그리고 이 도구들에게 프롬프트를 쓰는 사람들</i></p>

---

## 명령 하나

한창 개발 중입니다. 앱은 localhost에서 돌아가고 있습니다. 세 글자를 입력합니다.

```
$ stm
7 pages saved → screenshots/localhost-3000_2026-08-15_14-32/
   Run stm again after your next change to see which pages look different.
```

위에서 아래까지 전부 담긴 전체 페이지 스크린샷 일곱 장이 코드 옆 날짜별 폴더에 놓였습니다. Finder나 Explorer에서 열어 보면 사이트 전체가 한 장의 인덱스 시트처럼 펼쳐집니다. 홈, 가격, 소개, 모든 제품 페이지까지 오늘 보이는 모습 그대로입니다.

이미 서비스 중인가요. 실제 사이트를 지정하면 `sitemap.xml`을 읽어 페이지를 찾아내면서 똑같이 동작합니다.

```
$ stm --url https://your-site.com
24 pages saved → screenshots/your-site-com_2026-08-15_14-40/
```

이것이 이 도구의 전부입니다. 아래 내용은 이 단순한 동작을 몇 번 반복하고 나면 무엇이 되는지에 대한 이야기입니다.

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/hero.svg" alt="터미널의 stm과 그 옆에 놓인 날짜별 스냅샷 폴더들, 각 폴더에는 모든 페이지의 전체 스크린샷이 들어 있습니다" width="820">
</p>

## 무엇을 얻나요

**사이트 전체가 폴더 하나에.** 마침 열어 두었던 그 한 페이지가 아닙니다. 모든 페이지를 위에서 아래까지 전부 담아, 10초면 훑어볼 수 있는 폴더 하나로 만듭니다. "지금 내 사이트가 실제로 어떻게 보이는가"에 답하는 가장 빠른 방법입니다.

**평소라면 열어 볼 일 없던 페이지들.** 가격 페이지에서 무너진 여백. 어색하게 줄바꿈된 제목. 이미지를 잃어버린 카드. 슬쩍 어긋난 푸터. 이런 것들이 누군가 제보해 주기를 기다리는 대신, 같은 폴더 안에서 눈에 띄기를 기다리고 있습니다.

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/the-problem.svg" alt="한 번의 실행에서 나온 열두 페이지 썸네일을 나란히 배치했고, 그중 네 개는 손봐야 할 레이아웃을 보여 줍니다" width="820">
</p>

<p align="center"><i>한 번의 실행에서 나온 열두 페이지를 나란히 놓았습니다. 그중 넷은 손볼 곳이 있었고, 넷 다 아무도 열어 보지 않던 페이지였습니다.</i></p>

**저절로 쌓이는 기록.** 실행할 때마다 날짜가 붙은 폴더가 하나씩 생기니, 별다른 정리 없이도 타임라인이 됩니다. 지난달의 홈 페이지와 오늘의 홈 페이지는 그저 번갈아 열어 보면 되는 두 개의 파일입니다. 반년이 지나면 이 프로젝트가 얼마나 멀리 왔는지 보여 주는 증거가 남습니다.

**같은 실행에서 모바일 화면까지.** `stm --mobile`을 쓰면 모든 페이지의 390x844 화면도 함께 찍어 두므로, 휴대폰에서 어색하게 줄바꿈되는 제목이 데스크톱 스크린샷 바로 옆에 놓입니다.

**탭 마흔 개 대신 짧은 목록.** 두 번째 실행부터 `stm`은 지난번과 다르게 나온 스크린샷의 페이지들을 출력합니다. 거기서부터 보면 됩니다.

**에이전트에게 주는 눈.** `stm --json`은 방금 만들어진 모든 페이지의 절대 경로를 Claude Code, Cursor, Codex에 건네줍니다. 덕분에 에이전트가 다 됐다고 말하기 전에 자기 작업물을 직접 보고 고칠 수 있습니다.

**영원히 내 것.** 내 디스크에 남는 평범한 PNG 파일입니다. 계정도, 클라우드도, 구독도, 설정 파일도, 백그라운드 프로세스도 없습니다. 의존성 하나, MIT 라이선스, 그리고 계속 내 것입니다.

## 어떤 사람이 찾게 되나요

- **프롬프트를 쓰고, 에이전트가 만들고, 문제는 나중에 알게 되는 경우.** 페이지 하나를 부탁했는데 공용 컴포넌트가 수정되었고 열한 개 페이지가 함께 딸려 왔습니다. 명령 한 번이면 그 열한 개를 전부 보여 줍니다.
- **새벽 한 시에 혼자 배포하는 경우.** 그 순간에는 디자인 작업이 잘된 것처럼 느껴집니다. 실제로 그랬는지는 화요일 폴더가 말해 줍니다.
- **리디자인 3주 차에 접어들어** 예전 모습이 잘 기억나지 않는 경우. 첫날에 사이트를 찍어 두면, 그 뒤의 모든 스크린샷은 따로 준비할 필요가 없었던 비교 자료가 됩니다.
- **작업물을 넘겨야 하는 경우.** 전체 페이지 스크린샷이 담긴 폴더는 고객이나 동료가 받아 볼 수 있는 가장 명확한 진행 보고입니다.
- **작업의 증거를 남기고 싶은 경우.** 무엇이든 버전 1은 남겨 둘 가치가 있습니다. 대부분은 버전 4쯤에서 그 사실을 깨닫습니다.

## 빠른 시작

로컬에서 개발 중이라면 평소처럼 앱을 띄우고(`npm run dev`, `rails s`, `python manage.py runserver`, 정적 서버 등 HTML을 서빙하는 것이면 무엇이든 좋습니다) 다음을 실행합니다.

```bash
npx screenshot-time-machine@latest
```

사이트가 이미 온라인에 있다면 그 과정은 건너뛰고 주소만 알려 주면 됩니다.

```bash
npx screenshot-time-machine@latest --url https://your-site.com
```

**Node 22 이상이 필요합니다.** `node -v`로 확인해 보세요. 21 이하가 나오면 [nodejs.org](https://nodejs.org)에서 Node를 먼저 업데이트하세요.

스크린샷을 찍을 때 `stm`은 이미 캐시되어 있는 Playwright 브라우저를 사용하고, 없으면 컴퓨터에 설치된 Chrome이나 Edge를 사용합니다. 둘 다 없으면 헤드리스 브라우저를 한 번 내려받는데, 다운로드 용량은 약 120MB이고 디스크에서는 대략 200MB를 차지하며, 내려받기 전에 미리 알려 줍니다. `stm` 자체가 인터넷에서 가져오는 것은 그것뿐입니다. 스크린샷을 찍는 페이지들은 브라우저에서 열 때와 똑같이 각자의 리소스를 불러옵니다.

무언가를 바꾸고 다시 실행합니다. 워크플로는 이게 전부입니다.

아래 내용에서는 명령을 짧게 `stm`으로 적습니다. 이 짧은 이름을 쓰려면 한 번 설치해 두면 됩니다.

```bash
npm install -g screenshot-time-machine
```

설치하지 않아도 괜찮습니다. `stm`이라고 적힌 자리에 `npx screenshot-time-machine@latest`를 쓰면 됩니다. `npx stm`은 절대 쓰지 마세요. 2014년에 올라온 전혀 다른 패키지입니다.

<details>
<summary><b>첫 실행 때 함께 일어나는 일</b></summary>

- `stm`은 3000, 3001, 5173, 5174, 8080, 4321, 4322, 8000, 4200, 5000 포트를 이 순서대로 확인해서 가장 먼저 응답하는 앱을 사용합니다. 여러 개가 응답하면 이 프로젝트에서 지난번에 썼던 앱을 우선하고, 나머지도 함께 알려 줍니다.
- 프로젝트에 `.gitignore`가 있으면 `screenshots/`를 한 번 추가하고 그 사실을 알려 줍니다. `.gitignore`를 새로 만들지는 않으며, 무엇도 삭제하지 않습니다.
- 페이지는 각 페이지의 `<a href>` 링크를 따라가며 찾고, `sitemap.xml`이 있으면 그것도 읽어서 찾습니다. 한 번 실행에 최대 100개까지입니다. 버튼 클릭으로만 갈 수 있는 페이지나 `/#/about` 같은 해시 라우트는 따라갈 링크가 없으므로 직접 지정해 주세요. `stm /about /pricing`처럼 씁니다.
</details>

## AI 코딩 에이전트에 설치하기

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/agent-loop.svg" alt="반복 흐름: 에이전트가 UI를 수정하고, stm --json을 실행하고, 스크린샷 경로를 읽고, fold 이미지를 확인하고, 고친 뒤 다시 실행합니다" width="820">
</p>

에이전트가 가격 페이지를 만들었습니다. 내비게이션도 만들었습니다. 공용 컴포넌트를 건드렸더니 열한 개 페이지가 함께 움직였습니다. 하지만 에이전트는 그중 어느 것도 실제로 본 적이 없습니다. 눈이 없기 때문입니다.

`stm --json`이 눈을 만들어 줍니다. 에이전트는 명령 하나를 실행해 방금 만든 모든 페이지의 절대 경로를 받고, 다르게 나온 페이지의 `fold` 이미지를 열어 보고, 다 됐다고 말하기 전에 자기 작업을 직접 확인합니다.

좋은 점은 하지 않아도 되는 일들입니다. 열한 개 페이지를 일일이 클릭할 필요가 없습니다. "괜찮아 보인다"고 했다가 아니었던 일도 없습니다. 폴더 하나를 받아 10초 만에 훑고 나면, 어떤 페이지부터 열어 봐야 할지 이미 알게 됩니다.

명령 하나로 `stm`을 스킬로 설치할 수 있습니다. 스킬은 에이전트가 읽는 짧은 안내 파일이며, 언제 `stm`을 실행하고 결과를 어떻게 다뤄야 하는지 알려 줍니다. `npx skills add`는 별도의 오픈소스 설치 도구로, 그 폴더 하나를 프로젝트에 복사할 뿐 다른 것은 건드리지 않습니다. 쓰는 에이전트를 골라 보세요.

| 에이전트 | 명령 | 스킬이 설치되는 위치 |
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
| **그 밖의 도구** | `npx skills add mdsohaib/screenshot-time-machine` | 아래 목록에서 원하는 에이전트를 고르세요 |

위 명령에 `-g`를 붙이면 이 프로젝트가 아니라 모든 프로젝트에 설치됩니다.

### 설치할 수 있는 모든 에이전트

설치 도구가 `-a` 뒤에 받아 주는 이름들입니다. 이 중 아무거나 넘기거나, `-a`를 빼고 실행해서 나오는 메뉴에서 고르면 됩니다.

`adal` · `aider-desk` · `amp` · `antigravity` · `antigravity-cli` · `astrbot` · `augment` · `autohand-code` · `bob` · `claude-code` · `cline` · `codearts-agent` · `codebuddy` · `codemaker` · `codestudio` · `codex` · `command-code` · `continue` · `cortex` · `crush` · `cursor` · `deepagents` · `devin` · `dexto` · `droid` · `eve` · `firebender` · `forgecode` · `gemini-cli` · `github-copilot` · `goose` · `grok` · `hermes-agent` · `iflow-cli` · `inference-sh` · `jazz` · `junie` · `kilo` · `kimchi` · `kimi-code-cli` · `kiro-cli` · `kode` · `lingma` · `loaf` · `mcpjam` · `minimax-code` · `mistral-vibe` · `moxby` · `mux` · `neovate` · `ona` · `openclaw` · `opencode` · `openhands` · `pi` · `pochi` · `promptscript` · `qoder` · `qoder-cn` · `qwen-code` · `reasonix` · `replit` · `roo` · `rovodev` · `tabnine-cli` · `terramind` · `tinycloud` · `trae` · `trae-cn` · `universal` · `warp` · `windsurf` · `zcode` · `zed` · `zencoder` · `zenflow`

쓰는 에이전트가 위에 없다면 `universal`을 고르세요. 여러 에이전트가 함께 읽는 공용 위치인 `.agents/skills/stm/`에 스킬을 씁니다. 목록은 이 README가 아니라 설치 도구 안에 있어서, 이 문서를 고치지 않아도 계속 늘어납니다. 지금 시점의 목록을 보려면 존재하지 않는 에이전트를 넘겨 보세요. 전부 출력해 줍니다.

```bash
npx skills add mdsohaib/screenshot-time-machine -a list-them-please
```

아니면 그냥 평범한 말로 에이전트에게 부탁해도 됩니다.

> screenshot-time-machine을 설치하고, 내 앱에 `stm`을 실행한 다음, 페이지들이 어떻게 보이는지 보여 줘.

그다음, 에이전트가 매 요청마다 읽는 파일에 다음 한 줄을 넣어 두면 따로 시키지 않아도 자기 작업을 확인합니다.

```
After changing anything a user can see, run `stm --json` (or `npx -y screenshot-time-machine@latest --json` if `stm` is not installed) and view the `fold` image of every entry in `changed` and `new` before saying you're done. On the very first snapshot both lists are empty, so view the fold images of the pages you edited instead. Never claim a UI change is verified without viewing a screenshot.
```

이 줄을 넣을 파일은 에이전트마다 다릅니다.

| 에이전트 | 파일 |
|---|---|
| Claude Code | `CLAUDE.md` |
| Codex, Antigravity, OpenCode | `AGENTS.md` |
| Gemini CLI | `GEMINI.md` |
| Cursor | `.cursor/rules/stm.mdc`, 맨 앞에 `---`, 그다음 `alwaysApply: true`, 그다음 다시 `---` |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Windsurf | `.windsurf/rules/stm.md` |
| Cline | `.clinerules/stm.md` |

<details>
<summary><b>Claude Code: 플러그인 설치와 반복 흐름의 감각</b></summary>

스킬이 가장 간단한 방법입니다. 플러그인 쪽이 편하다면 Claude Code 안에서 다음을 실행하세요.

```
/plugin marketplace add mdsohaib/screenshot-time-machine
/plugin install stm@stm
```

GitHub에 SSH 키가 없나요. URL 형태를 쓰면 됩니다. `/plugin marketplace add https://github.com/mdsohaib/screenshot-time-machine.git`

Claude Code는 Read 도구로 스크린샷을 열고, `stm --json`은 절대 경로를 건네줍니다. 흐름은 이렇습니다. 수정하고, `stm --json`을 실행하고, `fold` 이미지를 Read로 열고, 고치고, 반복합니다. "UI를 확인해 줘"라고만 해도 스킬을 알아서 찾아 씁니다.
</details>

<details>
<summary><b>Codex</b></summary>

메모리 한 줄을 `AGENTS.md`에 넣으세요. Codex는 `view_image`로 이미지를 엽니다. 머뭇거린다면 "네가 건드린 모든 페이지의 fold 이미지를 봐"라고 말해 주세요.
</details>

<details>
<summary><b>Cursor</b></summary>

메모리 한 줄을 `.cursor/rules/` 아래 규칙 파일에 넣으세요. 에이전트가 터미널에서 `stm --json`을 실행하고 돌아온 PNG 경로를 엽니다. Cursor에 내장된 브라우저는 한 번에 한 페이지를 보여 주지만, `stm`은 모든 페이지를 한꺼번에 건네줍니다.
</details>

<details>
<summary><b>스킬을 지원하지 않는 에이전트</b></summary>

`stm skill`은 스킬 텍스트를 출력합니다. 에이전트가 읽는 안내 파일에 그대로 붙여 넣으세요. 아무것도 설치하지 않아도 동작합니다.

```bash
npx screenshot-time-machine@latest skill
```
</details>

### 에이전트가 돌려받는 내용

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

stdout으로는 JSON 문서 하나, stderr로는 최대 두 줄이 나가며, 일부 페이지가 실패해도 그대로 출력됩니다. 브라우저를 한 번 내려받을 때만 예외로, 그 설치 프로그램도 stderr에 출력합니다. `code`는 종료 코드와 같은 값입니다.

아예 시작하지 못한 실행은 훨씬 작은 객체를 출력합니다. `{"code": 1, "error": "no_server" | "no_browser", "message": "...", "fix": "..."}` 형태입니다. 잘못된 인자는 `{"error": "bad_args", "message": "...", "fix": "..."}`를 출력하며, `fix`에는 알 수 없는 플래그일 때 `Run stm --help`가, 형식이 잘못된 `--url`일 때는 올바른 예시가 들어갑니다. `changed`를 읽기 전에 `error`를 먼저 확인하세요. `truncated`는 목록에서 빠진 항목의 개수입니다. 목록 상한은 25개이고, 매니페스트에는 전부 들어 있습니다. 출력에는 경로와 숫자만 담기며, 페이지에서 가져온 텍스트는 절대 들어가지 않습니다.

**토큰에 대해.** 모든 페이지는 매 실행마다 찍히지만 에이전트는 지시받은 페이지만 열어 보므로, 변화가 없는 실행은 읽는 비용이 거의 들지 않습니다. 요약은 대략 200 토큰에 목록에 오른 페이지당 약 90 토큰이 더해지는 정도입니다. 페이지 하나를 보는 데는 1440x900 이미지 한 장이 듭니다. 아주 긴 전체 페이지 스크린샷은 비전 모델이 축소하는 과정에서 글자를 읽을 수 없게 되는데, 모든 페이지에 `fold` 이미지가 함께 만들어지고 스킬이 에이전트에게 그것부터 열라고 안내하는 이유가 바로 이것입니다.

## 디스크에 남는 시각적 기록

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

실행할 때마다 앱 이름과 실행한 분(minute)을 딴 새 폴더가 생깁니다. 폴더 안의 모든 파일에는 같은 타임스탬프가 붙으므로, 스크린샷 하나를 폴더 밖으로 꺼내 놓아도 그게 무엇이고 언제 찍힌 것인지 그대로 알 수 있습니다. 같은 분에 두 번 실행하면 타임스탬프 뒤에 `-2`, `-3`이 붙습니다. 높이가 16,384px을 넘는 페이지는 Chromium의 한계인 그 높이에서 잘리고 `truncated`로 표시됩니다.

폴더를 날짜순으로 정렬하면 그것이 곧 제품의 타임라인입니다. 페이지 하나를 골라 폴더마다 그 파일을 차례로 넘겨 보면, 그 페이지가 좋아지는 과정을 보게 됩니다. 처음부터 끝까지 평범한 PNG일 뿐이라 이 기록은 그것을 만든 도구보다 오래 남습니다. 데이터베이스도, 독자 포맷도, 내보내기 작업도 없습니다. 삭제하고 나면 `screenshots/` 폴더와, `.gitignore`가 있었다면 거기 추가된 한 줄 말고는 아무것도 남지 않습니다.

## 명령

| 명령 | 하는 일 |
|---|---|
| `stm` | localhost에서 돌고 있는 앱의 모든 페이지를 스냅샷합니다 |
| `stm /pricing /about` | 지정한 페이지만 몇 초 만에 스냅샷합니다. 수정하고 확인하는 반복에 씁니다 |
| `stm --url https://your-site.com` | URL로 아무 사이트나 스냅샷합니다. 로컬이든 실서비스든 됩니다. 경로를 주면 거기서부터 훑습니다 |
| `stm --mobile` | 390x844 모바일 화면도 함께 찍습니다 (`@mobile` 파일) |
| `stm --max 100` | 이 개수만큼 찾으면 페이지 탐색을 멈춥니다 (기본값 100) |
| `stm --out screenshots` | 스냅샷이 저장될 위치 (기본값 `screenshots`) |
| `stm --json` | 에이전트를 위한 기계가 읽는 요약을 stdout에 출력합니다 |
| `stm list` | 지난 스냅샷 목록: 폴더, 페이지 수, 변경, 실패 |
| `stm open` | 가장 최근 스냅샷 폴더를 엽니다 |
| `stm skill` | 에이전트 스킬을 출력합니다 |

종료 코드: `0`은 전부 찍힘, `1`은 아무것도 찍지 못함(앱 없음, 브라우저 없음, 잘못된 인자), `2`는 일부 페이지가 실패했거나 실행이 중단된 채로 끝남입니다. 페이지 하나가 실패해도 실행이 멈추지는 않습니다.

### 한번 해 볼 만한 것들

```bash
stm --mobile                     # desktop and phone views of every page, same run
stm /checkout --mobile           # the one flow you just touched, both sizes, in seconds
stm --url https://staging.example.com   # any site you are allowed to capture, not just localhost
stm list                         # every snapshot you have ever taken, oldest to newest
stm open                         # jump straight into the latest folder
```

## 동작 방식

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/how-it-works.svg" alt="탐지, 탐색, 촬영, 비교, 보고" width="820">
</p>

1. **탐지.** localhost의 흔한 포트들을 확인해 응답하는 앱을 고르거나, `--url`을 사용합니다.
2. **탐색.** `sitemap.xml`이 있으면 읽고, 그다음 `<a href>` 링크를 따라 페이지에서 페이지로 이동하되 같은 오리진 안에만 머무릅니다.
3. **촬영.** 각 페이지를 불러오고, 지연 로딩 콘텐츠가 도착하도록 스크롤하고, 화면을 완전히 멈춘 뒤, 전체 페이지 PNG와 화면 상단의 `fold` 이미지를 저장합니다.
4. **정리.** 앱 이름과 실행한 분을 딴 폴더에 전부 기록하고, 매니페스트는 페이지 하나를 찍을 때마다 갱신합니다.
5. **보고.** 직전 실행과 다르게 나온 페이지를 포함해 한 줄 요약을 출력합니다.

### 스크린샷이 흔들리지 않는 이유

스크린샷 도구의 값어치는 일관성에서 나옵니다. 같은 페이지를 두 번 찍으면 같은 그림이 나와야 합니다. 여기에는 만만치 않은 작업이 들어가며, 이 코드의 대부분이 그 일을 합니다.

- 지연 이미지와 지연 섹션이 로드되도록 촬영 전에 페이지를 맨 아래까지 스크롤한 다음 다시 맨 위로 올립니다. 스무스 스크롤을 쓰는 사이트도 처리합니다.
- 웹 폰트를 기다리므로 대체 글꼴에서 전환되는 도중에 찍히는 일이 없습니다.
- 애니메이션은 마지막 상태로 고정되므로 페이드인은 완전히 보이고 스피너는 멈춰 있습니다.
- 디바이스 픽셀 비율은 1로, 뷰포트는 1440x900으로 고정되므로 노트북에서든 데스크톱에서든 CI에서든 같은 스크린샷이 나옵니다.
- 개발용 툴바(Astro, Nuxt, Next.js 배지)는 숨깁니다. 개발용 **에러** 오버레이는 절대 숨기지 않습니다. 페이지를 있는 그대로 찍고 경고로 표시합니다. 깨진 페이지야말로 꼭 봐야 할 것이기 때문입니다.
- 오래 유지되는 연결(HMR 소켓, 이벤트 스트림)이 촬영을 멈춰 세우는 일은 없습니다. 페이지마다 30초의 시간과 한 번의 재시도가 주어지고, 그 뒤에는 기록만 남기고 다음으로 넘어갑니다.
- 매니페스트는 페이지마다 기록되므로, 중간에 끊긴 실행도 `stm list`가 읽을 수 있는 폴더를 남깁니다.
- `/logout`, `/delete` 같은 링크는 절대 따라가지 않습니다. 파일, `/api/`, 다른 오리진, 그리고 내 `screenshots/` 폴더도 마찬가지입니다.

그 결과, 내용이 바뀌지 않은 페이지라면 같은 컴퓨터에서 두 번 실행했을 때 바이트 단위로 동일한 PNG가 나옵니다.

<details>
<summary><b>"변경됨" 목록은 어떻게 계산하나요</b></summary>

모든 페이지는 매 실행마다 찍힙니다. 비교하는 것은 이미지 자체가 아니라 지문입니다.

1. 페이지의 PNG를 저장한 뒤, `stm`은 그 파일 바이트의 **sha256 해시**를 계산합니다.
2. 해시는 해당 실행의 매니페스트에 페이지 경로와 함께 기록됩니다.
3. 다음 실행에서 `stm`은 **직전 실행의 매니페스트**에서 같은 페이지를 찾아 두 해시를 비교합니다.
4. 해시가 다르면 스크린샷이 다르게 나온 것이고, 같으면 그대로인 것입니다. 이전 기록이 없으면 새 페이지입니다.

예전 스크린샷을 다시 여는 일은 없고 작은 매니페스트만 읽으므로, 페이지 100개를 비교해도 순식간입니다. 얻는 것은 페이지 이름과 파일 경로이며, 어떤 스크린샷을 먼저 열어 볼지 또는 에이전트에게 어떤 것을 건넬지 정하는 데 필요한 것은 바로 그것입니다. 영역 단위의 시각적 비교는 로드맵에 있는 `stm diff`가 맡습니다.

시계, "3분 전" 같은 상대 시간, 계속 바뀌는 히어로 이미지, 캔버스 애니메이션이 있는 페이지는 실제로 매번 다르게 보이므로 매 실행마다 목록에 오릅니다.
</details>

## 다른 도구와 비교하면

| | stm | Claude Code Desktop 자동 확인 | Playwright MCP, agent-browser, DevTools MCP | Percy, Chromatic |
|---|---|---|---|---|
| 명령 하나로 모든 페이지 | 예 | 한 번에 한 페이지 | 도구 호출 한 번에 한 페이지 | 예, CI에서 |
| 디스크에서 넘겨 볼 수 있는 기록 | 예 | 아니요 | 아니요 | 각 서비스 클라우드에 |
| 다르게 나온 페이지를 알려 줌 | 예 | 아니요 | 아니요 | 예, 클라우드에서 |
| 터미널, Cursor, Codex에서 동작 | 예 | Desktop 전용 | 예 | CI 전용 |
| 전부 내 컴퓨터에서 실행 | 예 | 예 | 예 | 아니요 |
| 무료 | 예 | 예 | 예 | 무료 구간을 넘으면 유료 |

이 도구들은 경쟁 상대가 아니라 서로 보완하는 관계입니다. 에이전트가 클릭하며 조작해야 할 때는 브라우저 도구를 쓰세요. 나 또는 에이전트가 전체를 한꺼번에 보고 그것을 남겨 두어야 할 때는 `stm`을 쓰세요.

## 개인정보

**100% 로컬에서 실행됩니다.** `stm`이 통신하는 곳은 내 앱의 URL뿐이고, Chrome이나 Edge가 없을 때 한 번 Playwright의 브라우저 CDN에 접속합니다. 스크린샷은 내 컴퓨터를 벗어나지 않습니다. 계정도, API 키도, 텔레메트리도 없습니다. 스크린샷을 찍는 페이지들은 브라우저에서 열 때와 똑같이 각자의 리소스를 불러옵니다. 전체 위협 모델은 [SECURITY.md](../../SECURITY.md)에 있습니다.

## 자주 묻는 질문

<details>
<summary><b>정말 무료인가요</b></summary>
네. MIT 라이선스 오픈소스이고, 유료 요금제도, 호스팅 서비스도, 가입할 것도 없습니다. 설치해서 계속 쓰시고, 원하면 포크하셔도 됩니다.
</details>

<details>
<summary><b>Next.js, Vite, Astro, SvelteKit, Rails, Django, 정적 사이트에서도 되나요</b></summary>
네. HTML을 서빙하는 것이라면 내 컴퓨터에 있든 인터넷에 있든 됩니다. 위 프레임워크들이 흔히 쓰는 localhost 포트는 자동으로 확인하고, 그 밖의 경우에는 <code>--url</code>을 쓰면 됩니다.
</details>

<details>
<summary><b>한 번 실행하는 데 얼마나 걸리나요</b></summary>
페이지는 몇 개씩 나눠서 찍히며, 규모가 작은 사이트는 대부분 1분이 채 걸리지 않습니다. 큰 사이트를 갓 띄운 개발 서버에서 찍으면 더 걸리는데, 각 페이지의 첫 방문이 곧 프레임워크의 컴파일 시간이기 때문입니다. 곧바로 결과를 보고 싶다면 관심 있는 페이지만 지정하세요(<code>stm /pricing /about</code>).
</details>

<details>
<summary><b>홈 페이지밖에 찾지 못했습니다.</b></summary>
페이지는 사이트맵과 <code>&lt;a href&gt;</code> 링크로 찾습니다. 버튼이나 해시 라우트(<code>/#/about</code>)로 이동하는 앱은 따라갈 링크가 없습니다. 페이지를 직접 지정하세요. <code>stm /about /pricing</code>처럼 씁니다. 에이전트에게는 자기가 건드린 페이지를 넘기도록 안내되어 있습니다.
</details>

<details>
<summary><b>스크린샷 대부분이 로그인 페이지입니다.</b></summary>
앱이 로그인 화면으로 리디렉션하고 있습니다. <code>stm</code>은 아직 로그인을 하지 못하며, 이런 상황이 생기면 알려 줍니다. 로그인 상태에서의 촬영은 로드맵에 있습니다.
</details>

<details>
<summary><b>어느 시점부터 모든 페이지가 변경됨으로 나옵니다.</b></summary>
흔한 원인은 두 가지입니다. 브라우저가 업데이트되어 렌더링이 미세하게 달라졌거나(<code>stm</code>은 브라우저 버전을 기록하고 이를 알려 줍니다), 페이지에 스스로 움직이는 것이 있는 경우입니다. 시계, "3분 전", 무작위 히어로 이미지, 캔버스 애니메이션, 첫 방문에만 뜨는 쿠키 배너 같은 것들입니다. 스크린샷 자체는 여전히 정확하니, 관심 있는 것들을 열어 보시면 됩니다.
</details>

<details>
<summary><b>파일을 감시하면서 자동으로 실행할 수 있나요</b></summary>
<code>git commit</code>처럼 사람이 말할 때 실행됩니다. 남겨 둘 만한 순간인지는 나 또는 에이전트가 정합니다. 자동으로 찍고 싶다면 에이전트의 메모리 파일에 한 줄짜리 안내를 넣어 두고, UI를 바꿀 때마다 에이전트가 실행하게 하세요.
</details>

<details>
<summary><b>기록을 타임랩스로 만들 수 있나요</b></summary>
정식 <code>stm timelapse</code>는 로드맵에 있습니다. 지금은 ffmpeg로 만들 수 있습니다.
<pre><code>ffmpeg -framerate 1 -pattern_type glob -i 'screenshots/*/pricing_*.png' \
  -vf "scale=720:-1,split[a][b];[a]palettegen[p];[b][p]paletteuse" pricing.gif</code></pre>
</details>

<details>
<summary><b>Lovable, Bolt, v0을 씁니다. 사용할 수 있나요</b></summary>
네, 두 가지 방법이 있습니다. 그 서비스가 배포해 주는 URL을 <code>stm</code>에 지정하세요. <code>stm --url https://your-project.lovable.app</code>처럼 씁니다. 아니면 프로젝트를 내보내 로컬에서 실행하면 <code>stm</code>이 알아서 찾습니다. 내 컴퓨터에서 Claude Code, Cursor, Codex, Windsurf, Copilot으로 만든 것이라면 별도 설정 없이 바로 동작합니다.
</details>

<details>
<summary><b>그냥 Playwright 스크립트를 쓰면 안 되나요</b></summary>
그렇게 해도 됩니다. <code>stm</code>은 그 스크립트에 페이지 탐색, 일관된 폴더 구조, 흔들림 없이 반복 가능한 촬영, 에이전트가 다루기 좋은 출력, 개발용 오버레이 처리, 그리고 온갖 예외 상황 처리를 더해 계속 관리되는 것입니다. 게다가 에이전트가 이미 알고 있는 명령 하나이기도 합니다.
</details>

<details>
<summary><b>Linux에서 브라우저 라이브러리가 없다고 나옵니다.</b></summary>
출력된 <code>install-deps</code> 명령을 한 번 실행하세요. WSL과 Codespaces에서도 필요합니다.
</details>

<details>
<summary><b>내려받은 브라우저는 어디에 저장되나요</b></summary>
Playwright의 캐시에 저장됩니다. macOS는 <code>~/Library/Caches/ms-playwright</code>, Linux는 <code>~/.cache/ms-playwright</code>, Windows는 <code>%LOCALAPPDATA%\ms-playwright</code>입니다. 언제든 지워도 되고, <code>stm</code>이 필요할 때 다시 내려받습니다.
</details>

<details>
<summary><b>실서비스나 스테이징 사이트에도 쓸 수 있나요</b></summary>
네. <code>stm --url https://staging.example.com</code>처럼 쓰면 됩니다. 로컬에서와 똑같이 그 사이트의 <code>sitemap.xml</code>을 읽고 링크를 따라가며, 해당 오리진 안에만 머무르고, <code>/logout</code>이나 <code>/delete</code>처럼 위험해 보이는 링크는 절대 따라가지 않습니다. 스크린샷을 찍어도 되는 사이트에만 사용해 주세요.
</details>

## 로드맵

의도적으로 작게 유지합니다. 이슈를 열어 의견을 남겨 주세요.

- `stm diff`: 페이지에서 어느 영역이 바뀌었는지 정확히 보여 주고, 에이전트에게 페이지 전체 대신 잘라낸 부분을 건네줍니다
- `stm timelapse`: 한 페이지의 기록을 git 커밋 자막과 함께 GIF나 MP4로 만듭니다
- `stm backfill`: git 히스토리를 훑어 그동안 남기지 못했던 시각적 기록을 만들어 줍니다
- 로그인 상태에서의 촬영 (`--storage-state`)
- 시간 슬라이더가 있는 로컬 갤러리

계획에 없는 것: 클라우드 동기화, 계정, 텔레메트리, 감시 모드, 설정 파일.

## 기여하기

지금 가장 도움이 되는 것은 실제 실행 결과를 첨부한 버그 리포트입니다. [CONTRIBUTING.md](../../CONTRIBUTING.md)부터 보시고, 모듈 구조와 규칙은 [AGENTS.md](../../AGENTS.md)에 있습니다. 모든 결정과 그 이유는 [DECISIONS.md](../../DECISIONS.md)에 정리되어 있습니다.

## 만든 사람

**Mohammed Sohaib Uddin**이 만들었습니다. 매일 바뀌는 소프트웨어에는 그 모습에 대한 기록이 있어야 한다고 생각했기 때문입니다.

<p align="left">
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/Connect%20on%20LinkedIn-FF8C1A?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn에서 연결하기"></a>
  <a href="https://github.com/mdsohaib"><img src="https://img.shields.io/badge/Follow%20on%20GitHub-0A0E14?style=for-the-badge&logo=github&logoColor=white" alt="GitHub에서 팔로우하기"></a>
</p>

`stm` 덕분에 보길 잘했다 싶은 것을 발견하셨다면, 스타 하나는 아무 비용도 들지 않으면서 다른 사람들이 이 도구를 찾는 데 도움이 됩니다.

MIT © Mohammed Sohaib Uddin
