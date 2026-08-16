<p align="center">
  <a href="../../README.md">English</a> ·
  <a href="README.zh-CN.md">简体中文</a> ·
  <a href="README.es.md">Español</a> ·
  <a href="README.hi.md">हिन्दी</a> ·
  <a href="README.pt-BR.md">Português</a> ·
  <a href="README.ja.md">日本語</a> ·
  <a href="README.de.md">Deutsch</a> ·
  <a href="README.fr.md">Français</a> ·
  <a href="README.ko.md">한국어</a> ·
  Русский ·
  <a href="README.ar.md">العربية</a>
</p>

*Перевод с английского README. В спорных случаях эталоном считается английская версия.*

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/banner.svg" alt="screenshot-time-machine: полностраничный скриншот каждой страницы вашего сайта, одной командой" width="100%">
</p>

<h1 align="center">screenshot-time-machine</h1>

<p align="center">
  <b>Снимите каждую страницу своего сайта одной командой.</b><br>
  <code>stm</code> обходит сайт страница за страницей и сохраняет полностраничный скриншот<br>
  каждой из них в папку с отметкой даты и времени.<br>
  Укажите любой URL или дайте ему самому найти приложение, запущенное у вас на localhost.<br>
  Запускайте его каждый раз, когда что-то выкатываете, и визуальная история соберётся сама:<br>
  каждая страница, каждая версия, на вашем собственном диске, обычными PNG.<br>
  <b>Бесплатно и с открытым кодом. Работает целиком на вашей машине.</b>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/screenshot-time-machine"><img src="https://img.shields.io/npm/v/screenshot-time-machine?style=flat-square&label=npm&color=FF8C1A&labelColor=0A0E14" alt="npm version"></a>
  <a href="../../LICENSE"><img src="https://img.shields.io/badge/license-MIT-FFC24A?style=flat-square&labelColor=0A0E14" alt="MIT license"></a>
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/LinkedIn-Mohammed%20Sohaib%20Uddin-F0509F?style=flat-square&labelColor=0A0E14&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
</p>

```bash
npx screenshot-time-machine@latest                              # the app you have running on localhost
npx screenshot-time-machine@latest --url https://your-site.com  # or any site you are allowed to capture
npx skills add mdsohaib/screenshot-time-machine                 # teach Claude Code, Cursor, Codex and friends to run it
```

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/demo.gif" alt="Главная страница магазина в десяти версиях дизайна, от первого черновика до финального макета" width="820">
</p>

<p align="center"><i>Десять версий одной страницы по порядку. Вот во что превращается папка со скриншотами по датам.</i></p>

<h3 align="center">Работает с</h3>

<p align="center">
  <a href="#установка-в-ваш-ии-агент"><img src="https://img.shields.io/badge/Claude%20Code-FF8C1A?style=for-the-badge&logo=claude&logoColor=white" alt="Claude Code"></a>
  <a href="#установка-в-ваш-ии-агент"><img src="https://img.shields.io/badge/Codex-0A0E14?style=for-the-badge" alt="Codex"></a>
  <a href="#установка-в-ваш-ии-агент"><img src="https://img.shields.io/badge/Cursor-7FB0F5?style=for-the-badge&logo=cursor&logoColor=0A0E14" alt="Cursor"></a>
  <a href="#установка-в-ваш-ии-агент"><img src="https://img.shields.io/badge/Gemini%20CLI-A98BEB?style=for-the-badge&logo=googlegemini&logoColor=0A0E14" alt="Gemini CLI"></a>
  <a href="#установка-в-ваш-ии-агент"><img src="https://img.shields.io/badge/Antigravity-C88AE0?style=for-the-badge&logo=google&logoColor=0A0E14" alt="Antigravity"></a>
  <br>
  <a href="#установка-в-ваш-ии-агент"><img src="https://img.shields.io/badge/GitHub%20Copilot-F0509F?style=for-the-badge&logo=githubcopilot&logoColor=white" alt="GitHub Copilot"></a>
  <a href="#установка-в-ваш-ии-агент"><img src="https://img.shields.io/badge/Windsurf-FFC24A?style=for-the-badge&logo=windsurf&logoColor=0A0E14" alt="Windsurf"></a>
  <a href="#установка-в-ваш-ии-агент"><img src="https://img.shields.io/badge/OpenCode-4FC3A1?style=for-the-badge&logo=opencode&logoColor=white" alt="OpenCode"></a>
  <a href="#установка-в-ваш-ии-агент"><img src="https://img.shields.io/badge/Cline-6C7CE0?style=for-the-badge&logo=cline&logoColor=white" alt="Cline"></a>
  <a href="#все-агенты-в-которые-можно-установить"><img src="https://img.shields.io/badge/Zed-3B4B5F?style=for-the-badge&logo=zedindustries&logoColor=white" alt="Zed"></a>
  <a href="#все-агенты-в-которые-можно-установить"><img src="https://img.shields.io/badge/Warp-2A8FB5?style=for-the-badge&logo=warp&logoColor=white" alt="Warp"></a>
  <a href="#все-агенты-в-которые-можно-установить"><img src="https://img.shields.io/badge/Devin-8B6FD4?style=for-the-badge" alt="Devin"></a>
  <a href="#все-агенты-в-которые-можно-установить"><img src="https://img.shields.io/badge/Amp-C4653B?style=for-the-badge" alt="Amp"></a>
  <a href="#все-агенты-в-которые-можно-установить"><img src="https://img.shields.io/badge/Full%20list-5A6478?style=for-the-badge" alt="полный список агентов"></a>
</p>

<p align="center"><i>и с людьми, которые ими управляют</i></p>

---

## Одна команда

Вы работаете над проектом. Приложение запущено на localhost. Вы набираете три буквы:

```
$ stm
7 pages saved → screenshots/localhost-3000_2026-08-15_14-32/
   Run stm again after your next change to see which pages look different.
```

Семь полностраничных скриншотов, сверху донизу, уже лежат в датированной папке рядом с вашим кодом. Откройте её в Finder или Explorer, и весь сайт перед вами как на одном листе: главная, цены, страница о проекте, каждая страница товара, всё целиком, ровно так, как оно выглядит сегодня.

Сайт уже в сети? Наведите утилиту на него, и она сработает точно так же, найдя страницы по вашему `sitemap.xml`:

```
$ stm --url https://your-site.com
24 pages saved → screenshots/your-site-com_2026-08-15_14-40/
```

Вот и весь инструмент. Всё, что ниже, это про то, во что эта простая вещь превращается после нескольких запусков.

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/hero.svg" alt="stm в терминале рядом с папкой датированных снимков, в каждом из которых полностраничный скриншот каждой страницы" width="820">
</p>

## Что вы получаете

**Весь сайт в одной папке.** Не та единственная страница, которая у вас сейчас открыта. Каждая страница целиком, сверху донизу, в папке, которую можно пролистать за десять секунд. Это самый быстрый способ ответить на вопрос «а как мой сайт выглядит прямо сейчас».

**Страницы, которые вы бы никогда не открыли.** Схлопнувшиеся отступы на странице с ценами. Неудачно перенесённый заголовок. Карточка, потерявшая картинку. Уехавший футер. Всё это лежит в одной папке и ждёт, когда вы это заметите, а не когда вам об этом сообщат.

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/the-problem.svg" alt="Двенадцать миниатюр страниц из одного запуска, выложенные рядом; на четырёх из них вёрстка требует внимания" width="820">
</p>

<p align="center"><i>Двенадцать страниц из одного запуска, рядом друг с другом. Четыре потребовали внимания, и все четыре оказались страницами, которых никто не открывал.</i></p>

**История, которая пишется сама.** Каждый запуск это отдельная датированная папка, так что они сами складываются в ленту времени. Главная страница месяц назад и главная сегодня это два файла, между которыми можно переключаться. Через полгода у вас будет свидетельство того, как далеко всё продвинулось.

**Мобильный вид в том же запуске.** `stm --mobile` дополнительно снимает каждую страницу в размере 390x844, так что заголовок, который неудачно переносится на телефоне, оказывается прямо рядом с десктопным кадром.

**Короткий список вместо сорока вкладок.** Начиная со второго запуска `stm` печатает страницы, скриншоты которых получились не такими, как в прошлый раз. Начните с них.

**Глаза для вашего агента.** `stm --json` отдаёт Claude Code, Cursor или Codex абсолютный путь к каждой странице, которую он только что собрал, чтобы он посмотрел на собственную работу и починил её до того, как отчитается о готовности.

**Ваше навсегда.** Обычные PNG-файлы на вашем диске. Никаких аккаунтов, облака, подписки, файла конфигурации, фоновых процессов. Одна зависимость, лицензия MIT, ваше навсегда.

## Кому это пригодится

- **Вы пишете промпт, агент делает, а вы узнаёте потом.** Вы просили одну страницу, он поправил общий компонент, и следом уехало ещё одиннадцать. Одна команда показывает все одиннадцать.
- **Вы выкатываете в час ночи в одиночку.** В моменте казалось, что с дизайном всё получилось. Папка со вторника скажет, так ли это на самом деле.
- **Вы третью неделю в редизайне** и уже не очень помните, как всё выглядело раньше. Снимите сайт в первый же день, и каждый следующий скриншот станет сравнением, которое вам не пришлось настраивать.
- **Вы передаёте работу.** Папка полностраничных скриншотов это самый понятный отчёт о состоянии дел, который когда-либо получит клиент или коллега.
- **Вам нужно свидетельство проделанной работы.** Первую версию чего угодно стоит сохранить. Большинство понимает это где-то к четвёртой.

## Быстрый старт

Если вы работаете локально, запустите приложение так, как делаете это обычно (`npm run dev`, `rails s`, `python manage.py runserver`, статический сервер, что угодно, отдающее HTML), и выполните:

```bash
npx screenshot-time-machine@latest
```

Если сайт уже в сети, всё это можно пропустить и просто указать адрес:

```bash
npx screenshot-time-machine@latest --url https://your-site.com
```

**Нужен Node 22 или новее.** Проверьте командой `node -v`. Если печатает 21 или ниже, сначала обновите Node с [nodejs.org](https://nodejs.org).

Для съёмки `stm` берёт браузер Playwright, который уже есть у вас в кеше, а если его нет, то Chrome или Edge, уже установленные на машине. Если нет ни того, ни другого, один раз скачивается headless-браузер: около 120 МБ загрузки, примерно 200 МБ на диске, и вас предупредят об этом заранее. Это единственное, что сам `stm` берёт из интернета; снимаемые страницы подгружают свои ресурсы ровно так же, как в вашем браузере.

Поменяйте что-нибудь, запустите снова. В этом весь рабочий процесс.

Дальше по тексту команда пишется коротко: `stm`. Чтобы получить это короткое имя, установите утилиту один раз:

```bash
npm install -g screenshot-time-machine
```

Можно и не устанавливать. Пишите `npx screenshot-time-machine@latest` везде, где видите `stm`. Никогда не пишите `npx stm`: это посторонний пакет 2014 года.

<details>
<summary><b>Что ещё происходит при первом запуске</b></summary>

- `stm` проверяет порты 3000, 3001, 5173, 5174, 8080, 4321, 4322, 8000, 4200 и 5000 в этом порядке и берёт первое приложение, которое ответит. Если ответят несколько, предпочтение отдаётся тому, которое этот проект использовал в прошлый раз, а про остальные вам скажут.
- Если в вашем проекте есть `.gitignore`, туда один раз добавляется `screenshots/`, и вам об этом сообщат. Утилита никогда не создаёт `.gitignore` и никогда ничего не удаляет.
- Страницы находятся переходами по ссылкам `<a href>` на них и чтением вашего `sitemap.xml`, если он у вас есть, до 100 страниц за запуск. На страницы, куда можно попасть только нажатием кнопки, и на хеш-маршруты вроде `/#/about` ссылок нет, так что назовите их сами: `stm /about /pricing`.
</details>

## Установка в ваш ИИ-агент

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/agent-loop.svg" alt="Цикл: агент правит интерфейс, запускает stm --json, читает пути к скриншотам, смотрит fold-кадры, чинит и запускает снова" width="820">
</p>

Ваш агент написал страницу с ценами. Написал навигацию. Тронул общий компонент, и вместе с ним съехало ещё одиннадцать страниц. Ни на одну из них он на самом деле не посмотрел, потому что у него нет глаз.

`stm --json` их даёт. Агент выполняет одну команду, получает абсолютный путь к каждой странице, которую только что собрал, открывает `fold`-кадры тех, что получились другими, и проверяет собственную работу до того, как скажет, что закончил.

Самое приятное здесь то, чего вы больше не делаете. Не надо прокликивать одиннадцать страниц. Не будет «вроде нормально», которое потом оказывается не нормально. Вы получаете папку, пролистываете её за десять секунд и уже знаете, какие страницы открыть первыми.

Одна команда ставит `stm` как навык: короткий файл с инструкцией, который читает ваш агент, чтобы понимать, когда запускать `stm` и что делать с результатом. `npx skills add` это отдельный установщик с открытым кодом, который копирует одну папку в ваш проект и больше ничего не трогает. Выберите своего агента:

| Агент | Команда | Куда встанет навык |
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
| **Что-то другое** | `npx skills add mdsohaib/screenshot-time-machine` | выберите своего агента из списка ниже |

Добавьте `-g` к любой из этих команд, чтобы поставить навык для всех проектов, а не только для текущего.

### Все агенты, в которые можно установить

Это имена, которые установщик принимает после `-a`. Передайте любое из них или не указывайте `-a` и выберите из меню, которое он покажет.

`adal` · `aider-desk` · `amp` · `antigravity` · `antigravity-cli` · `astrbot` · `augment` · `autohand-code` · `bob` · `claude-code` · `cline` · `codearts-agent` · `codebuddy` · `codemaker` · `codestudio` · `codex` · `command-code` · `continue` · `cortex` · `crush` · `cursor` · `deepagents` · `devin` · `dexto` · `droid` · `eve` · `firebender` · `forgecode` · `gemini-cli` · `github-copilot` · `goose` · `grok` · `hermes-agent` · `iflow-cli` · `inference-sh` · `jazz` · `junie` · `kilo` · `kimchi` · `kimi-code-cli` · `kiro-cli` · `kode` · `lingma` · `loaf` · `mcpjam` · `minimax-code` · `mistral-vibe` · `moxby` · `mux` · `neovate` · `ona` · `openclaw` · `opencode` · `openhands` · `pi` · `pochi` · `promptscript` · `qoder` · `qoder-cn` · `qwen-code` · `reasonix` · `replit` · `roo` · `rovodev` · `tabnine-cli` · `terramind` · `tinycloud` · `trae` · `trae-cn` · `universal` · `warp` · `windsurf` · `zcode` · `zed` · `zencoder` · `zenflow`

`universal` стоит брать, когда вашего агента нет в списке выше: он записывает навык в `.agents/skills/stm/`, общее место, которое читают несколько из этих агентов. Список живёт в установщике, а не здесь, поэтому он пополняется без правок этого README. Чтобы увидеть актуальный, запросите несуществующего агента, и он напечатает их все.

```bash
npx skills add mdsohaib/screenshot-time-machine -a list-them-please
```

Или просто скажите агенту обычными словами:

> Установи screenshot-time-machine, запусти `stm` на моём приложении и покажи, как выглядят страницы.

Затем добавьте одну строку в файл, который ваш агент читает при каждом запросе, чтобы он проверял свою работу без напоминаний:

```
After changing anything a user can see, run `stm --json` (or `npx -y screenshot-time-machine@latest --json` if `stm` is not installed) and view the `fold` image of every entry in `changed` and `new` before saying you're done. On the very first snapshot both lists are empty, so view the fold images of the pages you edited instead. Never claim a UI change is verified without viewing a screenshot.
```

Куда именно кладётся эта строка, по агентам:

| Агент | Файл |
|---|---|
| Claude Code | `CLAUDE.md` |
| Codex, Antigravity, OpenCode | `AGENTS.md` |
| Gemini CLI | `GEMINI.md` |
| Cursor | `.cursor/rules/stm.mdc`, начиная с `---`, затем `alwaysApply: true`, затем `---` |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Windsurf | `.windsurf/rules/stm.md` |
| Cline | `.clinerules/stm.md` |

<details>
<summary><b>Claude Code: установка плагином и как ощущается цикл</b></summary>

Навыки это простой путь. Если вам ближе плагины, выполните внутри Claude Code:

```
/plugin marketplace add mdsohaib/screenshot-time-machine
/plugin install stm@stm
```

Нет SSH-ключа на GitHub? Используйте форму с URL: `/plugin marketplace add https://github.com/mdsohaib/screenshot-time-machine.git`

Claude Code открывает скриншоты своим инструментом Read, а `stm --json` отдаёт ему абсолютные пути. Цикл такой: правка, `stm --json`, чтение `fold`-кадров, починка, повтор. Попросите его «проверить интерфейс», и он сам возьмётся за навык.
</details>

<details>
<summary><b>Codex</b></summary>

Положите строку памяти в `AGENTS.md`. Codex открывает картинки через `view_image`, так что, если он мнётся, скажите «посмотри fold-кадр каждой страницы, которой ты касался».
</details>

<details>
<summary><b>Cursor</b></summary>

Положите строку памяти в правило в `.cursor/rules/`. Агент запускает `stm --json` в своём терминале и открывает пути к PNG, которые получит в ответ. Встроенный браузер Cursor показывает по одной странице за раз, а `stm` отдаёт сразу все.
</details>

<details>
<summary><b>Любой агент без поддержки навыков</b></summary>

`stm skill` печатает текст навыка. Вставьте его в тот файл инструкций, который читает ваш агент. Это работает вообще без установки:

```bash
npx screenshot-time-machine@latest skill
```
</details>

### Что получает агент в ответ

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

Один JSON-документ в stdout, не более двух строк в stderr, и печатается он даже когда часть страниц не снялась. Исключение одно: разовая загрузка браузера, её установщик тоже пишет в stderr. `code` повторяет код выхода.

Запуск, который вообще не смог начаться, печатает объект куда меньше: `{"code": 1, "error": "no_server" | "no_browser", "message": "...", "fix": "..."}`. Неверные аргументы дают `{"error": "bad_args", "message": "...", "fix": "..."}`, где `fix` это `Run stm --help` для неизвестного флага и разобранный пример для неправильного `--url`. Проверяйте `error` до того, как читать `changed`. `truncated` считает записи, не попавшие в список (предел 25, в манифесте есть все). В выводе только пути и числа, никогда не текст с ваших страниц.

**Про токены.** Каждая страница снимается при каждом запуске, но агент открывает только те, на которые вы его направите, так что спокойный запуск почти ничего не стоит прочитать. Сводка это примерно 200 токенов плюс около 90 на каждую перечисленную страницу. Просмотр одной страницы стоит одной картинки 1440x900. Очень высокие полностраничные скриншоты модели зрения ужимают до нечитаемого текста, и именно поэтому у каждой страницы есть ещё и `fold`-кадр, и именно поэтому навык велит агенту открывать сначала его.

## Визуальная история на диске

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

Каждый запуск это новая папка, названная по приложению и минуте запуска. У каждого файла внутри та же метка времени, так что скриншот, вытащенный из своей папки, всё равно говорит, что это и когда было. Два запуска в одну минуту получают `-2`, `-3` в метке времени. Страницы выше 16 384 px обрезаются на этой высоте, это предел Chromium, и помечаются как `truncated`.

Отсортируйте папки по дате, и перед вами лента развития вашего продукта. Возьмите одну страницу, пройдите по её файлу в каждой папке, и вы увидите, как она становилась лучше. Здесь всюду обычные PNG, поэтому такая история переживёт саму утилиту: никакой базы данных, никакого проприетарного формата, нечего экспортировать. После удаления не останется ничего, кроме папки `screenshots/` и, если у вас был `.gitignore`, одной строки в нём.

## Команды

| Команда | Что делает |
|---|---|
| `stm` | Снимает каждую страницу приложения, работающего на localhost |
| `stm /pricing /about` | Снимает только эти страницы, за секунды. Это и есть цикл «правка и проверка» |
| `stm --url https://your-site.com` | Снимает любой сайт по URL, локальный или живой. Путь в адресе задаёт точку начала обхода |
| `stm --mobile` | Дополнительно снимает мобильный вид 390x844 (файлы `@mobile`) |
| `stm --max 100` | Прекратить поиск после стольких страниц (по умолчанию 100) |
| `stm --out screenshots` | Куда складывать снимки (по умолчанию `screenshots`) |
| `stm --json` | Машиночитаемая сводка в stdout, для агентов |
| `stm list` | Прошлые снимки: папка, число страниц, изменения, ошибки |
| `stm open` | Открыть папку последнего снимка |
| `stm skill` | Напечатать навык для агента |

Коды выхода: `0` всё снято, `1` не снято ничего (нет приложения, нет браузера, неверные аргументы), `2` работа завершена, но часть страниц не снялась или запуск был прерван. Одна сбойная страница никогда не останавливает весь запуск.

### Что ещё стоит попробовать

```bash
stm --mobile                     # desktop and phone views of every page, same run
stm /checkout --mobile           # the one flow you just touched, both sizes, in seconds
stm --url https://staging.example.com   # any site you are allowed to capture, not just localhost
stm list                         # every snapshot you have ever taken, oldest to newest
stm open                         # jump straight into the latest folder
```

## Как это работает

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/how-it-works.svg" alt="определить, обойти, снять, сравнить, отчитаться" width="820">
</p>

1. **Определение.** Проверяем обычные порты localhost и берём приложение, которое ответит, либо используем `--url`.
2. **Обход.** Читаем `sitemap.xml`, если он есть, затем переходим по ссылкам `<a href>` со страницы на страницу, не выходя за пределы одного домена.
3. **Съёмка.** Загружаем каждую страницу, прокручиваем её, чтобы подгрузился ленивый контент, останавливаем всё движение, а затем сохраняем полностраничный PNG плюс `fold`-кадр верхнего экрана.
4. **Раскладка по файлам.** Пишем всё в папку, названную по приложению и минуте запуска, обновляя манифест после каждой отдельной страницы.
5. **Отчёт.** Печатаем сводку в одну строку, включая то, какие страницы получились не такими, как в предыдущем запуске.

### Почему скриншоты стабильны

Инструмент для скриншотов хорош ровно настолько, насколько он предсказуем: снимите одну и ту же страницу дважды, и картинка должна получиться той же. Это требует настоящей работы, и именно в этом живёт большая часть кода.

- Страницы прокручиваются до самого низа перед съёмкой, чтобы подгрузились ленивые картинки и ленивые секции, а потом прокручиваются обратно наверх. Сайты с плавной прокруткой обрабатываются корректно.
- Веб-шрифты дожидаются загрузки, так что ничего не снимается в момент подмены запасного начертания.
- Анимации замораживаются в конечном состоянии, поэтому появления видны полностью, а спиннеры стоят на месте.
- Плотность пикселей зафиксирована на 1, а область просмотра на 1440x900, поэтому скриншот одинаков на вашем ноутбуке, на вашем десктопе и в CI.
- Панели разработчика (Astro, Nuxt, значок Next.js) скрываются. А вот оверлеи **ошибок** не скрываются никогда: страница снимается как есть и помечается предупреждением, потому что сломанная страница это ровно то, что вы хотите увидеть.
- Долгоживущие соединения (сокеты HMR, потоки событий) никогда не подвешивают съёмку. Каждой странице даётся 30 секунд и одна повторная попытка, после чего результат записывается и работа идёт дальше.
- Манифест пишется после каждой страницы, поэтому даже прерванный запуск оставляет папку, которую прочитает `stm list`.
- Ссылки на `/logout`, `/delete` и подобные никогда не открываются. Как и файлы, `/api/`, чужие домены и ваша собственная папка `screenshots/`.

Отдача такая: два запуска на одной машине дают побайтово одинаковые PNG страницы, содержимое которой не менялось.

<details>
<summary><b>Как вычисляется строка «changed»</b></summary>

Каждая страница снимается при каждом запуске. Сравниваются при этом не картинки, а их отпечатки:

1. Сохранив PNG страницы, `stm` считает **хеш sha256** от байтов этого файла.
2. Хеш попадает в манифест этого запуска, рядом с путём страницы.
3. При следующем запуске `stm` находит ту же страницу в **манифесте предыдущего запуска** и сравнивает два хеша.
4. Другой хеш означает, что скриншот получился другим. Тот же хеш означает, что нет. Если прежней записи нет, страница новая.

Старые скриншоты никогда не открываются заново, читается только небольшой манифест, поэтому сравнение сотни страниц происходит мгновенно. Вы получаете имена страниц и пути к файлам, а это ровно то, что нужно, чтобы открыть правильные скриншоты первыми или отдать агенту именно те, что надо. Визуальное сравнение по областям это `stm diff` в планах.

Страница с часами, относительным временем вроде «3 минуты назад», ротацией картинки в шапке или анимацией на canvas действительно выглядит по-разному при каждом запуске и будет попадать в список каждый раз.
</details>

## Сравнение с другими инструментами

| | stm | Автопроверка в Claude Code Desktop | Playwright MCP, agent-browser, DevTools MCP | Percy, Chromatic |
|---|---|---|---|---|
| Все страницы одной командой | да | по одной странице за раз | по одной странице на вызов инструмента | да, в CI |
| История на диске, которую можно листать | да | нет | нет | в их облаке |
| Перечисляет страницы, которые получились другими | да | нет | нет | да, в облаке |
| Работает в терминале, Cursor, Codex | да | только Desktop | да | только в CI |
| Работает целиком на вашей машине | да | да | да | нет |
| Бесплатно | да | да | да | платно сверх бесплатного тарифа |

Эти инструменты дополняют друг друга, а не конкурируют. Берите браузерный инструмент, когда агенту нужно покликать и повзаимодействовать со страницей. Берите `stm`, когда вам или вашему агенту нужно увидеть всё сразу и сохранить это.

## Приватность

**Работает на 100% локально.** `stm` обращается только к URL вашего приложения и, один раз, к CDN браузеров Playwright, если у вас нет ни Chrome, ни Edge. Ваши скриншоты никогда не покидают вашу машину. Никаких аккаунтов, ключей API и телеметрии. Снимаемые страницы подгружают свои ресурсы ровно так же, как в вашем браузере. Полная модель угроз в [SECURITY.md](../../SECURITY.md).

## Частые вопросы

<details>
<summary><b>Это правда бесплатно?</b></summary>
Да. Лицензия MIT, открытый код, никакого платного тарифа, никакого хостинга, ничего, где надо регистрироваться. Установите, пользуйтесь сколько угодно, форкните, если хочется.
</details>

<details>
<summary><b>Работает ли это с Next.js, Vite, Astro, SvelteKit, Rails, Django, статическими сайтами?</b></summary>
Да. С чем угодно, что отдаёт HTML, хоть на вашей машине, хоть в интернете. Обычные порты localhost для всего перечисленного проверяются автоматически, для остального есть <code>--url</code>.
</details>

<details>
<summary><b>Сколько времени занимает запуск?</b></summary>
Страницы снимаются по несколько за раз, и большинство небольших сайтов укладывается заметно меньше чем в минуту. Большой сайт на непрогретом сервере займёт больше времени, потому что первый заход на каждую страницу это компиляция во фреймворке. Передайте те страницы, которые вам важны (<code>stm /pricing /about</code>), когда результат нужен мгновенно.
</details>

<details>
<summary><b>Нашлась только моя главная страница.</b></summary>
Страницы находятся по вашему sitemap и по ссылкам <code>&lt;a href&gt;</code>. В приложениях, где навигация идёт кнопками или хеш-маршрутами (<code>/#/about</code>), переходить просто не по чему. Назовите страницы сами: <code>stm /about /pricing</code>. Агентам сказано передавать те страницы, которых они касались.
</details>

<details>
<summary><b>На большинстве скриншотов страница входа.</b></summary>
Ваше приложение перенаправляет на вход. <code>stm</code> пока не умеет авторизоваться и сообщает вам, когда это происходит. Съёмка под учётной записью есть в планах.
</details>

<details>
<summary><b>Через некоторое время все страницы попадают в список изменившихся.</b></summary>
Обычные причины: обновился ваш браузер, из-за чего рендеринг слегка сдвинулся (<code>stm</code> записывает версию браузера и предупреждает вас), либо на страницах есть что-то, что меняется само: часы, «3 минуты назад», случайная картинка в шапке, анимация на canvas или баннер про cookie, появляющийся только при первом визите. Скриншоты при этом верны, так что открывайте те, которые вам важны.
</details>

<details>
<summary><b>Может ли это работать автоматически, следя за файлами?</b></summary>
Утилита запускается тогда, когда вы скажете, как <code>git commit</code>: вы или ваш агент решаете, какой момент стоит сохранить. Для автоматической съёмки положите строку-инструкцию в файл памяти вашего агента и пусть он запускает её после каждого изменения интерфейса.
</details>

<details>
<summary><b>Можно ли сделать из истории таймлапс?</b></summary>
Полноценная команда <code>stm timelapse</code> есть в планах. Сегодня, через ffmpeg:
<pre><code>ffmpeg -framerate 1 -pattern_type glob -i 'screenshots/*/pricing_*.png' \
  -vf "scale=720:-1,split[a][b];[a]palettegen[p];[b][p]paletteuse" pricing.gif</code></pre>
</details>

<details>
<summary><b>Я работаю в Lovable, Bolt или v0. Мне это подойдёт?</b></summary>
Да, двумя способами. Наведите <code>stm</code> на URL, который они для вас публикуют: <code>stm --url https://your-project.lovable.app</code>. Либо экспортируйте проект, запустите его локально, и <code>stm</code> найдёт его сам. Всё, что сделано с Claude Code, Cursor, Codex, Windsurf или Copilot на вашей машине, работает сразу.
</details>

<details>
<summary><b>Почему бы просто не написать скрипт на Playwright?</b></summary>
Можно. <code>stm</code> и есть такой скрипт, плюс поиск страниц, устойчивая структура папок, стабильные повторяемые снимки, вывод, удобный для агентов, обработка оверлеев разработчика и все крайние случаи, причём с поддержкой. А ещё это одна команда, которую ваш агент уже знает.
</details>

<details>
<summary><b>Linux говорит, что браузеру не хватает библиотек.</b></summary>
Выполните один раз команду <code>install-deps</code>, которую он печатает. WSL и Codespaces тоже её требуют.
</details>

<details>
<summary><b>Где лежит скачанный браузер?</b></summary>
В кеше Playwright: <code>~/Library/Caches/ms-playwright</code> на macOS, <code>~/.cache/ms-playwright</code> на Linux, <code>%LOCALAPPDATA%\ms-playwright</code> на Windows. Удаляйте когда угодно, <code>stm</code> скачает заново, когда понадобится.
</details>

<details>
<summary><b>Можно ли использовать его на живом или staging-сайте?</b></summary>
Да: <code>stm --url https://staging.example.com</code>. Он читает <code>sitemap.xml</code> этого сайта и ходит по его ссылкам ровно так же, как делал бы это локально, остаётся в пределах одного домена и никогда не переходит по ссылкам, похожим на разрушительные, вроде <code>/logout</code> или <code>/delete</code>. Снимайте, пожалуйста, только те сайты, которые вам разрешено снимать.
</details>

## Планы

Список намеренно короткий. Голосуйте, открывая issue.

- `stm diff`: показывать, какие именно области страницы изменились, и отдавать агентам вырезки вместо целых страниц
- `stm timelapse`: превращать историю страницы в GIF или MP4 с подписями из git-коммитов
- `stm backfill`: пройти по вашей истории git и построить визуальную историю, которую вы так и не сняли
- Съёмка под учётной записью (`--storage-state`)
- Локальная галерея с ползунком времени

Не планируется: облачная синхронизация, аккаунты, телеметрия, режим слежения за файлами, файл конфигурации.

## Как помочь проекту

Сейчас полезнее всего баг-репорты с приложенным реальным запуском. Начните с [CONTRIBUTING.md](../../CONTRIBUTING.md), затем загляните в [AGENTS.md](../../AGENTS.md) за картой модулей и правилами. Каждое решение и его причина живут в [DECISIONS.md](../../DECISIONS.md).

## Об авторе

Сделано **Mohammed Sohaib Uddin**, потому что софт, который меняется каждый день, заслуживает того, чтобы осталась запись, как он выглядел.

<p align="left">
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/Connect%20on%20LinkedIn-FF8C1A?style=for-the-badge&logo=linkedin&logoColor=white" alt="Connect on LinkedIn"></a>
  <a href="https://github.com/mdsohaib"><img src="https://img.shields.io/badge/Follow%20on%20GitHub-0A0E14?style=for-the-badge&logo=github&logoColor=white" alt="Follow on GitHub"></a>
</p>

Если `stm` показал вам то, что вы рады были увидеть, звезда ничего не стоит и помогает другим найти проект.

MIT © Mohammed Sohaib Uddin
