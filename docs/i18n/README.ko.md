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
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/banner.svg" alt="screenshot-time-machine: localhost 앱의 모든 페이지를 명령 하나로 스크린샷하고, 날짜별로 저장하고, 변경점을 비교합니다" width="100%">
</p>

<p align="center">
  <b>명령 하나로 웹사이트의 모든 페이지를 전체 화면 스크린샷으로 남기세요.</b><br>
  날짜별 폴더에 저장됩니다. 다음에 다시 실행하면 어떤 페이지가 바뀌었는지 정확히 알려줍니다.<br>
  <b>무료 오픈소스입니다. 전부 내 컴퓨터에서만 돌아갑니다.</b>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/screenshot-time-machine"><img src="https://img.shields.io/npm/v/screenshot-time-machine?style=flat-square&label=npm&color=FF6600&labelColor=0A0E14" alt="npm 버전"></a>
  <a href="https://github.com/mdsohaib/screenshot-time-machine/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/mdsohaib/screenshot-time-machine/ci.yml?branch=main&style=flat-square&label=tests&color=FF6600&labelColor=0A0E14" alt="테스트"></a>
  <img src="https://img.shields.io/badge/dependencies-1-FF6600?style=flat-square&labelColor=0A0E14" alt="의존성 하나">
  <img src="https://img.shields.io/badge/node-22%2B-FF6600?style=flat-square&labelColor=0A0E14&logo=nodedotjs&logoColor=white" alt="Node 22 이상">
  <a href="../../LICENSE"><img src="https://img.shields.io/badge/license-MIT-FF6600?style=flat-square&labelColor=0A0E14" alt="MIT 라이선스"></a>
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/LinkedIn-Mohammed%20Sohaib%20Uddin-FF6600?style=flat-square&labelColor=0A0E14&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
</p>

```bash
npx screenshot-time-machine@latest               # your app is on localhost? that is the whole setup
npx skills add mdsohaib/screenshot-time-machine  # teach Claude Code, Cursor, Codex and friends to run it
```

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/hero.svg" alt="터미널에서 변경된 페이지 하나를 알려주는 stm, 그 옆에 날짜별 스냅샷이 담긴 폴더" width="820">
</p>

<p align="center">
  <b>함께 쓰는 도구</b><br>
  <img src="https://img.shields.io/badge/Claude%20Code-0A0E14?style=flat-square&logo=claude&logoColor=FF6600" alt="Claude Code">
  <img src="https://img.shields.io/badge/Codex-0A0E14?style=flat-square" alt="Codex">
  <img src="https://img.shields.io/badge/Cursor-0A0E14?style=flat-square&logo=cursor&logoColor=FF6600" alt="Cursor">
  <img src="https://img.shields.io/badge/Gemini%20CLI-0A0E14?style=flat-square&logo=googlegemini&logoColor=FF6600" alt="Gemini CLI">
  <img src="https://img.shields.io/badge/Antigravity-0A0E14?style=flat-square" alt="Antigravity">
  <img src="https://img.shields.io/badge/Copilot-0A0E14?style=flat-square&logo=githubcopilot&logoColor=FF6600" alt="GitHub Copilot">
  <img src="https://img.shields.io/badge/Windsurf-0A0E14?style=flat-square&logo=windsurf&logoColor=FF6600" alt="Windsurf">
  <img src="https://img.shields.io/badge/OpenCode-0A0E14?style=flat-square&logo=opencode&logoColor=FF6600" alt="OpenCode">
  <img src="https://img.shields.io/badge/Cline-0A0E14?style=flat-square" alt="Cline">
  <br><i>그리고 이들에게 프롬프트를 쓰는 사람들</i>
</p>

---

## 무엇인가

`stm`은 무료 오픈소스 명령줄 도구입니다. 내 컴퓨터에서 웹사이트를 띄워 둔 상태로 실행하면 이렇게 동작합니다.

1. localhost에서 **사이트를 자동으로 찾습니다.** `--url`로 직접 지정할 수도 있습니다.
2. 사이트맵과 링크에서 **모든 페이지를 찾아냅니다.**
3. **각 페이지를 위에서 아래까지 통째로 스크린샷**하고, 빠르게 훑어보기 좋은 페이지 상단 뷰도 함께 남깁니다.
4. 날짜와 시각으로 이름 붙인 폴더에 **평범한 PNG 파일로 저장합니다.**
5. **지난번과 비교해서** 어떤 페이지가 바뀌었는지 정확히 알려줍니다.

```
$ stm
7 pages saved → screenshots/localhost-3000_2026-08-15_14-32/
   1 changed since last snapshot (Aug 12, 09:10): /pricing
```

계정 없음. 클라우드 없음. 구독 없음. 설정 파일 없음. 백그라운드 프로세스 없음. 의존성은 하나, MIT 라이선스, 영원히 내 것입니다.

## 어떤 문제를 푸는가

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/the-problem.svg" alt="페이지 썸네일 열두 개. 하나는 직접 확인한 페이지로 표시되어 있고, 네 개는 깨진 채 돌아왔습니다." width="820">
</p>

공용 컴포넌트나 레이아웃, 스타일시트를 하나 고치면 나머지 마흔 개 페이지가 어떻게 됐는지 알 길이 없습니다. 정직하게 확인하는 방법은 모든 페이지를 열어서 눈으로 보는 것뿐이고, 그래서 아무도 하지 않습니다.

AI 코딩 에이전트가 이 문제를 더 날카롭게 만들었습니다. 가격 페이지를 고쳐 달라고 했더니 에이전트가 공용 파일을 건드리고, 소개 페이지에 조용히 여백이 생깁니다. 에이전트는 그 결과를 보지 못하고, 당신도 마찬가지입니다.

Git은 코드의 모든 줄을 추적하지만 사이트의 픽셀은 단 하나도 추적하지 않습니다. 비주얼 테스트 서비스는 CI 파이프라인과 월 사용료를 요구합니다. 손으로 스크린샷을 찍는 방식은 네 번째 페이지를 넘기지 못하고, 그 파일을 보관하는 사람도 없습니다.

## 무엇이 좋아지는가

- **사용자보다 먼저 깨진 페이지를 잡습니다.** 명령 하나, 모든 페이지, 그리고 바뀐 것들의 목록.
- **AI 에이전트에게 눈을 줍니다.** `stm --json`은 변경된 페이지의 파일 경로를 건네주므로, 에이전트는 그 페이지만 열어 자기가 망친 부분을 고칩니다.
- **시각적 기록을 남깁니다.** 실행할 때마다 평범한 PNG가 담긴 날짜별 폴더가 생깁니다. Finder나 탐색기에서 바로 거슬러 올라가 3월의 사이트 모습을 확인하세요.

## 빠른 시작

앱이 localhost에서 돌아가고 있어야 합니다(`npm run dev`, `rails s`, `python manage.py runserver`, 정적 서버 등 HTML을 서빙하는 무엇이든). 그다음:

```bash
npx screenshot-time-machine@latest
```

무언가를 바꾸고, 다시 실행하고, `changed` 줄을 읽으세요. 이게 전부입니다.

<details>
<summary><b>한 번 설치해서 <code>stm</code>으로 실행하기</b></summary>

```bash
npm install -g screenshot-time-machine
stm
```

항상 `npx screenshot-time-machine@latest`라고 쓰세요. `npx stm`은 안 됩니다. npm의 `stm`이라는 이름은 2014년에 등록된 전혀 다른 패키지의 것입니다.
</details>

<details>
<summary><b>첫 실행에서 벌어지는 일</b></summary>

- `stm`은 3000, 3001, 5173, 5174, 8080, 4321, 4322, 8000, 4200, 5000 포트를 이 순서대로 확인해서 가장 먼저 응답하는 앱을 사용합니다. 여러 개가 응답하면 이 프로젝트에서 지난번에 쓴 것을 우선하고, 나머지도 알려줍니다.
- 이미 설치된 Playwright 브라우저나 컴퓨터에 있는 Chrome 또는 Edge를 사용합니다. 아무것도 없으면 헤드리스 Chrome을 한 번만 내려받고(약 120 MB), 그 사실을 알려줍니다.
- 프로젝트에 `.gitignore`가 있으면 `screenshots/`를 한 번 추가하고 알려줍니다. `.gitignore`를 새로 만들지 않고, 무엇도 삭제하지 않습니다.
</details>

**요구 사항:** Node 22 이상. `npm run dev`를 쓰고 있다면 거의 확실히 갖고 있습니다. 확실하지 않다면 `node -v`.

## AI 코딩 에이전트에 설치하기

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/agent-loop.svg" alt="반복 흐름: 에이전트가 UI를 수정하고, stm --json을 실행하고, 변경 목록을 받고, fold 이미지를 보고, 고치고, 다시 실행합니다" width="820">
</p>

명령 하나로 `stm`을 스킬로 설치하면 에이전트가 언제 실행해야 하는지, 결과를 어떻게 읽어야 하는지 알게 됩니다. 쓰는 에이전트를 고르세요.

| 에이전트 | 명령 | 스킬이 설치되는 곳 |
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
| **그 밖의 모든 것** | `npx skills add mdsohaib/screenshot-time-machine` | 70개가 넘는 에이전트 목록에서 선택 |

어느 명령에든 `-g`를 붙이면 이 프로젝트가 아니라 모든 프로젝트에 설치됩니다.

아니면 그냥 에이전트에게 말로 시켜도 됩니다.

> screenshot-time-machine을 설치하고, 내 앱에 `stm`을 실행해서, 뭐가 바뀌었는지 보여줘.

그다음 에이전트가 읽는 메모리 파일(`CLAUDE.md`, `AGENTS.md`, `GEMINI.md`, `.cursor/rules`)에 한 줄을 추가하세요. 그러면 시키지 않아도 스스로 자기 작업을 검증합니다.

```
After changing anything a user can see, run `stm --json` and view the `fold` image of every entry in `changed` and `new` before saying you're done. Never claim a UI change is verified without viewing a screenshot.
```

<details>
<summary><b>Claude Code: 플러그인 설치, 그리고 반복 흐름의 감각</b></summary>

스킬이 가장 간단한 길입니다. 플러그인을 선호한다면 Claude Code 안에서 이렇게 실행하세요.

```
/plugin marketplace add mdsohaib/screenshot-time-machine
/plugin install stm@stm
```

GitHub에 SSH 키가 없나요? URL 형태를 쓰세요: `/plugin marketplace add https://github.com/mdsohaib/screenshot-time-machine.git`

Claude Code는 Read 도구로 스크린샷을 열고, `stm --json`은 절대 경로를 건네줍니다. 반복 흐름은 이렇습니다. 수정하고, `stm --json`을 실행하고, 변경된 `fold` 이미지를 Read하고, 고치고, 반복. "UI 좀 확인해 줘"라고만 해도 알아서 스킬을 집어 듭니다.
</details>

<details>
<summary><b>Codex</b></summary>

메모리 한 줄은 `AGENTS.md`에 넣으세요. Codex는 `view_image`로 이미지를 여니, 망설이는 것 같으면 "변경된 모든 페이지의 fold 이미지를 봐"라고 말해 주세요.
</details>

<details>
<summary><b>Cursor</b></summary>

메모리 한 줄은 `.cursor/rules/` 아래의 규칙 파일에 넣으세요. 에이전트가 터미널에서 `stm --json`을 실행하고 반환된 PNG 경로를 엽니다. Cursor의 내장 브라우저는 한 번에 한 페이지만 보여주지만, `stm`은 전부를 한꺼번에, 변경 목록까지 얹어서 건네줍니다.
</details>

<details>
<summary><b>스킬을 지원하지 않는 에이전트</b></summary>

`stm skill`은 스킬 텍스트를 출력합니다. 에이전트가 읽는 지시 파일이 무엇이든 거기에 붙여 넣으세요.

```bash
stm skill
```
</details>

### 에이전트가 돌려받는 것

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

stdout에는 JSON 문서 하나, stderr에는 최대 두 줄. 일부 페이지가 실패해도 그대로 출력됩니다. `code`는 종료 코드와 같습니다. `truncated`는 목록에서 빠진 항목 수입니다(상한은 25개이고, manifest에는 전부 들어 있습니다). 출력에는 페이지 텍스트가 절대 포함되지 않고 경로와 숫자만 담깁니다.

**토큰 이야기.** 바뀌지 않은 페이지는 에이전트가 아예 열지 않으므로 보는 비용이 0입니다. 요약은 대략 150토큰에 변경된 페이지당 50토큰 정도가 더해집니다. 변경된 페이지 하나를 보는 비용은 1440x900 이미지 한 장입니다. 아주 긴 전체 페이지 스크린샷은 비전 모델이 축소하다 보면 글자를 읽을 수 없게 되는데, 모든 페이지에 `fold` 이미지가 함께 생기는 이유, 그리고 스킬이 에이전트에게 그것부터 열라고 시키는 이유가 바로 이것입니다.

## 디스크에 남는 시각적 기록

```
screenshots/
└── localhost-3000_2026-08-15_14-32/
    ├── manifest_2026-08-15_14-32.json          무엇을, 어디에서, 어떤 브라우저로 찍었고 무엇이 바뀌었는지
    ├── index_2026-08-15_14-32.png              전체 페이지, 가로 1440 px, 페이지 높이 그대로
    ├── pricing_2026-08-15_14-32.png
    ├── blog--hello-world_2026-08-15_14-32.png  파일 이름에서 "/"는 "--"가 됩니다
    └── fold/
        ├── index_2026-08-15_14-32.png          각 페이지 상단 1440x900, 빠르게 훑어보기용
        └── pricing_2026-08-15_14-32.png
```

실행할 때마다 앱 이름과 실행한 분(minute)으로 이름 붙인 새 폴더가 생깁니다. 안의 모든 파일에 같은 타임스탬프가 붙어 있어서, 스크린샷을 폴더 밖으로 꺼내도 그것이 무엇이고 언제 찍혔는지 그대로 남습니다. 같은 분에 두 번 실행하면 타임스탬프에 `-2`, `-3`이 붙습니다. 높이가 16,384 px를 넘는 페이지는 Chromium의 한계인 그 높이에서 잘리고 `truncated`로 표시됩니다.

Finder나 탐색기에서 폴더를 열면 프로젝트의 사진첩이 펼쳐집니다. 기록은 그냥 PNG라서 이 도구보다 오래 남습니다. 삭제하고 나면 `screenshots/` 폴더, 그리고 `.gitignore`가 있었다면 거기 추가된 한 줄 말고는 아무것도 남지 않습니다.

## 명령

| 명령 | 하는 일 |
|---|---|
| `stm` | localhost에서 돌아가는 앱의 모든 페이지를 스냅샷 |
| `stm /pricing /about` | 이 페이지들만 몇 초 만에 스냅샷. 수정하고 확인하는 반복 흐름의 핵심 |
| `stm --url http://localhost:4321` | 자동 감지 대신 이 앱을 스냅샷. 경로를 주면 거기서 탐색을 시작 |
| `stm --mobile` | 390x844 휴대폰 화면도 함께 캡처(`@mobile` 파일) |
| `stm --max 100` | 이만큼 찾은 뒤 페이지 탐색을 중단(기본값 100) |
| `stm --out screenshots` | 스냅샷을 저장할 위치(기본값 `screenshots`) |
| `stm --json` | 에이전트용, stdout에 기계가 읽는 요약 |
| `stm list` | 지난 스냅샷 목록: 폴더, 페이지 수, 변경, 실패 |
| `stm open` | 가장 최근 스냅샷 폴더 열기 |
| `stm skill` | 에이전트 스킬 출력 |

종료 코드: `0` 전부 캡처됨, `1` 아무것도 캡처하지 못함(앱 없음, 브라우저 없음, 잘못된 인자), `2` 일부 페이지가 실패했거나 실행이 중단된 채 종료. 페이지 하나가 실패해도 실행 전체가 멈추는 일은 없습니다.

## 페이지를 찾고 변경을 추적하는 방식

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/how-it-works.svg" alt="감지, 탐색, 캡처, 비교, 보고" width="820">
</p>

스크린샷을 믿을 수 있게 만드는 세부 사항들:

- 캡처 전에 페이지를 맨 아래까지 스크롤해서 지연 로딩 이미지와 섹션을 불러온 뒤 다시 위로 돌아옵니다. 부드러운 스크롤을 쓰는 사이트도 처리합니다.
- 애니메이션은 끝난 상태로 고정됩니다. 그래서 페이드인은 보이고 스피너는 멈춰 있습니다. 같은 컴퓨터에서 두 번 실행하면 바이트 단위로 동일한 PNG가 나오고, 그래서 "변경됨"이 의미를 갖습니다.
- 개발용 툴바(Astro, Nuxt, Next.js 배지)는 숨깁니다. 개발용 **에러** 오버레이는 절대 숨기지 않습니다. 페이지를 있는 그대로 캡처하고 경고로 표시합니다. 깨진 페이지야말로 당신이 봐야 할 것이니까요.
- 오래 유지되는 연결(HMR 소켓, 이벤트 스트림)이 캡처를 붙잡지 못합니다. 페이지마다 30초의 예산과 한 번의 재시도가 주어지고, 그래도 안 되면 실패로 기록하고 다음으로 넘어갑니다.
- manifest는 페이지마다 기록되므로, 중간에 끊긴 실행도 `stm list`가 읽을 수 있는 폴더를 남기고 요약에 일찍 멈췄다고 표시됩니다.
- `/logout`, `/delete` 같은 링크는 절대 따라가지 않습니다. 파일, `/api/`, 다른 오리진, 그리고 자기 자신의 `screenshots/` 폴더도 마찬가지입니다.

## 다른 도구와 비교하면

| | stm | Claude Code Desktop 자동 검증 | Playwright MCP, agent-browser, DevTools MCP | Percy, Chromatic |
|---|---|---|---|---|
| 명령 하나로 모든 페이지 | 예 | 한 번에 한 페이지 | 도구 호출당 한 페이지 | 예, CI에서 |
| 어떤 페이지가 바뀌었는지 알려줌 | 예 | 아니요 | 아니요 | 예, 클라우드에서 |
| 터미널, Cursor, Codex에서 동작 | 예 | 데스크톱 전용 | 예 | CI 전용 |
| 직접 열어볼 수 있는 디스크상의 기록 | 예 | 아니요 | 아니요 | 자사 클라우드에 |
| 전부 내 컴퓨터에서 실행 | 예 | 예 | 예 | 아니요 |

경쟁 관계가 아니라 서로 보완합니다. 에이전트가 클릭하며 돌아다녀야 할 때는 브라우저 도구를 쓰세요. 방금 건드린 것 전부를 봐야 할 때는 `stm`을 쓰세요.

## 프라이버시

**100% 로컬에서 실행됩니다.** `stm`이 통신하는 대상은 당신 앱의 URL, 그리고 Chrome이나 Edge가 없을 때 딱 한 번 접속하는 Playwright의 브라우저 CDN뿐입니다. 스크린샷은 컴퓨터를 벗어나지 않습니다. 계정도, API 키도, 텔레메트리도 없습니다. 캡처되는 페이지는 브라우저에서와 똑같이 자기 리소스를 불러옵니다. 전체 위협 모델은 [SECURITY.md](../../SECURITY.md)에 있습니다.

## 자주 묻는 질문

<details>
<summary><b>정말 무료인가요?</b></summary>
네. MIT 라이선스 오픈소스이고, 유료 등급도, 호스팅 서비스도, 가입할 것도 없습니다. 설치해서 평생 쓰고, 원하면 포크하세요.
</details>

<details>
<summary><b>Next.js, Vite, Astro, SvelteKit, Rails, Django, 정적 사이트에서도 되나요?</b></summary>
네. localhost에서 HTML을 서빙하는 것이면 무엇이든 됩니다. 이들의 일반적인 포트는 자동으로 확인하며, 그 외에는 <code>--url</code>을 쓰세요.
</details>

<details>
<summary><b>홈페이지 하나만 찾았어요.</b></summary>
페이지는 사이트맵과 <code>&lt;a href&gt;</code> 링크에서 찾습니다. 버튼이나 해시 라우트(<code>/#/about</code>)로 이동하는 앱에는 따라갈 링크가 없습니다. 페이지를 직접 지정하세요: <code>stm /about /pricing</code>. 에이전트는 자기가 건드린 페이지를 넘기도록 안내받습니다.
</details>

<details>
<summary><b>스크린샷 대부분이 로그인 페이지예요.</b></summary>
앱이 로그인 화면으로 리디렉션하고 있습니다. <code>stm</code>은 아직 로그인을 못 하며, 이런 상황이면 알려줍니다. 로그인 상태 캡처는 로드맵에 있습니다.
</details>

<details>
<summary><b>어느 순간부터 전부 변경됨으로 나와요.</b></summary>
흔한 원인은 두 가지입니다. 브라우저가 업데이트되어 렌더링이 미세하게 달라졌거나(<code>stm</code>은 브라우저 버전을 기록하고 경고합니다), 페이지에 스스로 움직이는 요소가 있는 경우입니다. 시계, "3분 전", 무작위 히어로 이미지, 캔버스 애니메이션, 첫 방문 뒤 사라지는 쿠키 배너 같은 것들이죠. <code>stm diff</code>가 나올 때까지는 그런 페이지를 따로 지정해 눈으로 확인하세요.
</details>

<details>
<summary><b>파일을 감시하면서 자동으로 실행할 수 있나요?</b></summary>
아니요, 의도적으로 그렇습니다. <code>stm</code>은 <code>git commit</code>처럼 저장 지점을 찍는 버튼입니다. 어떤 순간을 남길지는 당신이나 당신의 에이전트가 정합니다. 자동화하고 싶다면 에이전트의 메모리 파일에 한 줄짜리 지시를 넣고 에이전트가 판단하게 하세요.
</details>

<details>
<summary><b>기록을 타임랩스로 만들 수 있나요?</b></summary>
정식 <code>stm timelapse</code>는 로드맵에 있습니다. 지금은 ffmpeg으로:
<pre><code>ffmpeg -framerate 1 -pattern_type glob -i 'screenshots/*/pricing_*.png' \
  -vf "scale=720:-1,split[a][b];[a]palettegen[p];[b][p]paletteuse" pricing.gif</code></pre>
</details>

<details>
<summary><b>Lovable, Bolt, v0를 쓰는데 사용할 수 있나요?</b></summary>
그 서비스들은 앱을 자사 클라우드에서 실행하므로 스크린샷할 localhost가 없습니다. 프로젝트를 내보내 로컬에서 실행하면 <code>stm</code>이 동작합니다. 내 컴퓨터에서 Claude Code, Cursor, Codex, Windsurf, Copilot으로 만든 것은 별도 설정 없이 바로 됩니다.
</details>

<details>
<summary><b>그냥 Playwright 스크립트를 짜면 되지 않나요?</b></summary>
그래도 됩니다. <code>stm</code>이 바로 그 스크립트에, 페이지 탐색, 일관된 폴더 구조, 변경 감지, 에이전트 친화적인 출력, 개발용 오버레이 처리, 그리고 온갖 예외 상황 처리를 더해 계속 관리되는 형태입니다. 게다가 당신의 에이전트가 이미 아는 명령 하나입니다.
</details>

<details>
<summary><b>Linux에서 브라우저 라이브러리가 없다고 나와요.</b></summary>
출력되는 <code>install-deps</code> 명령을 한 번 실행하세요. WSL과 Codespaces에서도 필요합니다.
</details>

<details>
<summary><b>내려받은 브라우저는 어디에 있나요?</b></summary>
Playwright의 캐시입니다. macOS는 <code>~/Library/Caches/ms-playwright</code>, Linux는 <code>~/.cache/ms-playwright</code>, Windows는 <code>%LOCALAPPDATA%\ms-playwright</code>. 언제든 지워도 되고, 필요하면 <code>stm</code>이 다시 내려받습니다.
</details>

<details>
<summary><b>localhost가 아닌 사이트를 지정할 수 있나요?</b></summary>
네: <code>stm --url https://staging.example.com</code>. 해당 오리진에만 머물고 파괴적으로 보이는 링크는 건너뜁니다. 허락받은 사이트만 스크린샷해 주세요.
</details>

## 로드맵

의도적으로 작게 갑니다. 이슈를 열어 의견을 주세요.

- `stm diff`: 페이지의 어느 영역이 바뀌었는지 정확히 보여주고, 에이전트에게 전체 페이지 대신 잘라낸 부분을 전달
- `stm timelapse`: 한 페이지의 기록을 GIF나 MP4로, git 커밋 자막과 함께
- `stm backfill`: git 히스토리를 훑어 남기지 못했던 시각적 기록을 만들어 냄
- 로그인 상태 캡처(`--storage-state`)
- 시간 슬라이더가 있는 로컬 갤러리

계획에 없는 것: 클라우드 동기화, 계정, 텔레메트리, 감시 모드, 설정 파일.

## 기여하기

지금 가장 도움이 되는 것은 실제 실행 결과를 첨부한 버그 리포트입니다. [CONTRIBUTING.md](../../CONTRIBUTING.md)에서 시작해서, 모듈 지도와 규칙은 [AGENTS.md](../../AGENTS.md)를 보세요. 모든 결정과 그 이유는 [DECISIONS.md](../../DECISIONS.md)에 있습니다.

## 소개

**Mohammed Sohaib Uddin**이 만들었습니다. 아무도 보지 않는 UI를 출시하는 에이전트들에게 볼 방법이 필요했기 때문입니다.

<p align="left">
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/Connect%20on%20LinkedIn-FF6600?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn에서 연결하기"></a>
  <a href="https://github.com/mdsohaib"><img src="https://img.shields.io/badge/Follow%20on%20GitHub-0A0E14?style=for-the-badge&logo=github&logoColor=white" alt="GitHub에서 팔로우하기"></a>
</p>

`stm` 덕분에 깨진 페이지를 배포하지 않았다면, 스타 하나는 공짜이고 다른 사람들이 이 도구를 찾는 데 도움이 됩니다.

MIT © Mohammed Sohaib Uddin
