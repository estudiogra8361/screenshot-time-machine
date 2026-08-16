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
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/banner.svg" alt="screenshot-time-machine: каждая страница вашего локального приложения, снятая, датированная и сравненная, одной командой" width="100%">
</p>

<h1 align="center">screenshot-time-machine</h1>

<p align="center">
  <b>CLI для полностраничных скриншотов: снимите каждую страницу своего локального сайта одной командой.</b><br>
  Полностраничный скриншот каждой страницы приложения, которое вы делаете, за один заход.<br>
  Всё складывается в папки с датой. При следующем запуске вы точно узнаете, какие страницы изменились.<br>
  <b>Бесплатно и с открытым кодом. Работает целиком на вашей машине.</b>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/screenshot-time-machine"><img src="https://img.shields.io/npm/v/screenshot-time-machine?style=flat-square&label=npm&color=FF6600&labelColor=0A0E14" alt="npm version"></a>
  <a href="https://github.com/mdsohaib/screenshot-time-machine/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/mdsohaib/screenshot-time-machine/ci.yml?branch=main&style=flat-square&label=tests&color=FF6600&labelColor=0A0E14" alt="tests"></a>
  <img src="https://img.shields.io/badge/dependencies-1-FF6600?style=flat-square&labelColor=0A0E14" alt="one dependency">
  <img src="https://img.shields.io/badge/node-22%2B-FF6600?style=flat-square&labelColor=0A0E14&logo=nodedotjs&logoColor=white" alt="Node 22+">
  <a href="../../LICENSE"><img src="https://img.shields.io/badge/license-MIT-FF6600?style=flat-square&labelColor=0A0E14" alt="MIT license"></a>
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/LinkedIn-Mohammed%20Sohaib%20Uddin-FF6600?style=flat-square&labelColor=0A0E14&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
</p>

```bash
npx screenshot-time-machine@latest               # your app is on localhost? that is the whole setup
npx skills add mdsohaib/screenshot-time-machine  # teach Claude Code, Cursor, Codex and friends to run it
```

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/hero.svg" alt="stm сообщает в терминале об одной изменившейся странице, рядом папка с датированными снимками" width="820">
</p>

<p align="center">
  <b>Работает с</b><br>
  <img src="https://img.shields.io/badge/Claude%20Code-0A0E14?style=flat-square&logo=claude&logoColor=FF6600" alt="Claude Code">
  <img src="https://img.shields.io/badge/Codex-0A0E14?style=flat-square" alt="Codex">
  <img src="https://img.shields.io/badge/Cursor-0A0E14?style=flat-square&logo=cursor&logoColor=FF6600" alt="Cursor">
  <img src="https://img.shields.io/badge/Gemini%20CLI-0A0E14?style=flat-square&logo=googlegemini&logoColor=FF6600" alt="Gemini CLI">
  <img src="https://img.shields.io/badge/Antigravity-0A0E14?style=flat-square" alt="Antigravity">
  <img src="https://img.shields.io/badge/Copilot-0A0E14?style=flat-square&logo=githubcopilot&logoColor=FF6600" alt="GitHub Copilot">
  <img src="https://img.shields.io/badge/Windsurf-0A0E14?style=flat-square&logo=windsurf&logoColor=FF6600" alt="Windsurf">
  <img src="https://img.shields.io/badge/OpenCode-0A0E14?style=flat-square&logo=opencode&logoColor=FF6600" alt="OpenCode">
  <img src="https://img.shields.io/badge/Cline-0A0E14?style=flat-square" alt="Cline">
  <br><i>и с людьми, которые ими управляют</i>
</p>

---

## Что это

`stm` это бесплатная консольная утилита с открытым кодом. Вы запускаете её, пока ваш сайт работает на вашем компьютере. Она:

1. **Находит ваш сайт** на localhost автоматически или там, куда вы укажете через `--url`.
2. **Находит ваши страницы**, переходя по ссылкам `<a href>` и читая ваш `sitemap.xml`, если он есть, до 100 страниц за запуск. Страницы, куда можно попасть только нажатием кнопки, и хеш-маршруты вроде `/#/about` обойти нельзя. Назовите их сами: `stm /about /pricing`.
3. **Снимает каждую страницу целиком**, сверху донизу, плюс второй кадр только с верхней части страницы, той, что помещается на один экран. Этот второй кадр называется `fold`, и смотреть стоит именно на него в первую очередь.
4. **Сохраняет всё обычными PNG-файлами** в папку, названную по дате и времени.
5. **Сравнивает с прошлым разом** и точно говорит, какие страницы изменились.

```
$ stm
7 pages saved → screenshots/localhost-3000_2026-08-15_14-32/
   1 changed since last snapshot (Aug 12, 09:10): /pricing
```

Никаких аккаунтов. Никакого облака. Никакой подписки. Никакого конфига. Никаких фоновых процессов. Одна зависимость, лицензия MIT, ваше навсегда.

## Какую проблему это решает

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/the-problem.svg" alt="Двенадцать миниатюр страниц. Одна отмечена как та, которую вы смотрели. Четыре оказались сломаны." width="820">
</p>

Меняете один общий компонент, макет или таблицу стилей, и понятия не имеете, что это сделало с остальными сорока страницами. Честный способ узнать один: открыть каждую страницу и посмотреть, поэтому этого не делает никто.

ИИ-агенты обострили проблему. Вы просите починить страницу с ценами, агент правит общий файл, и на странице About тихо появляется дыра в вёрстке. Агент результат не видит, и вы тоже.

Git отслеживает каждую строку вашего кода и ни одного пикселя вашего сайта. Сервисы визуального тестирования требуют CI-пайплайн и ежемесячный счёт. Снимать вручную получается страницы до четвёртой, и файлы всё равно никто не хранит.

## Чем это помогает

- **Ловите сломанные страницы раньше пользователей.** Одна команда, все страницы, список того, что изменилось.
- **Дайте вашему ИИ-агенту глаза.** `stm --json` отдаёт ему пути к файлам изменившихся страниц, так что он открывает только их и чинит то, что сломал.
- **Ведите визуальную историю.** Каждый запуск это папка с датой и обычными PNG. Пролистайте назад и посмотрите, как ваш сайт выглядел в марте, прямо из Finder или Проводника.

## Быстрый старт

Ваше приложение должно быть запущено на localhost (`npm run dev`, `rails s`, `python manage.py runserver`, статический сервер, что угодно, отдающее HTML). Затем:

```bash
npx screenshot-time-machine@latest
```

**Нужен Node 22 или новее.** Проверьте командой `node -v`. Если печатает 21 или ниже, сначала обновите Node с [nodejs.org](https://nodejs.org).

Первый запуск использует Chrome или Edge, которые уже стоят на вашей машине. Если нет ни того, ни другого, один раз скачивается браузер, около 120 МБ, и вас об этом предупредят. Эта загрузка единственное, что stm вообще берёт из интернета.

Поменяйте что-нибудь, запустите снова и прочитайте строку `changed`. В этом весь рабочий процесс.

Дальше по тексту команда пишется коротко: `stm`. Чтобы получить это короткое имя, установите утилиту один раз:

```bash
npm install -g screenshot-time-machine
```

Можно и не устанавливать. Пишите `npx screenshot-time-machine@latest` везде, где видите `stm`. Никогда не пишите `npx stm`: это посторонний пакет 2014 года.

<details>
<summary><b>Что ещё происходит при первом запуске</b></summary>

- `stm` проверяет порты 3000, 3001, 5173, 5174, 8080, 4321, 4322, 8000, 4200 и 5000 в этом порядке и берёт первое приложение, которое ответит. Если ответят несколько, предпочтение отдаётся тому, которое этот проект использовал в прошлый раз, а про остальные вам скажут.
- Если в вашем проекте есть `.gitignore`, туда один раз добавляется `screenshots/`, и вам об этом сообщат. Утилита никогда не создаёт `.gitignore` и никогда ничего не удаляет.
</details>

## Установка в ваш ИИ-агент

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/agent-loop.svg" alt="Цикл: агент правит интерфейс, запускает stm --json, получает список изменений, смотрит fold-кадры, чинит и запускает снова" width="820">
</p>

Одна команда ставит `stm` как навык: короткий файл с инструкцией, который читает ваш агент, чтобы понимать, когда запускать `stm` и как читать результат. `npx skills add` это отдельный установщик с открытым кодом, который копирует одну папку в ваш проект и больше ничего не трогает. Выберите своего агента:

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
| **Что-то другое** | `npx skills add mdsohaib/screenshot-time-machine` | выберите из списка 70+ агентов |

Добавьте `-g` к любой из этих команд, чтобы поставить навык для всех проектов, а не только для текущего.

Или просто скажите агенту обычными словами:

> Установи screenshot-time-machine, запусти `stm` на моём приложении и покажи, что изменилось.

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

Claude Code открывает скриншоты своим инструментом Read, а `stm --json` отдаёт ему абсолютные пути. Цикл такой: правка, `stm --json`, чтение изменившихся `fold`-кадров, починка, повтор. Попросите его "проверить интерфейс", и он сам возьмётся за навык.
</details>

<details>
<summary><b>Codex</b></summary>

Положите строку памяти в `AGENTS.md`. Codex открывает картинки через `view_image`, так что, если он мнётся, скажите "посмотри fold-кадр каждой изменившейся страницы".
</details>

<details>
<summary><b>Cursor</b></summary>

Положите строку памяти в правило в `.cursor/rules/`. Агент запускает `stm --json` в своём терминале и открывает пути к PNG, которые получит в ответ. Встроенный браузер Cursor показывает по одной странице за раз, а `stm` отдаёт сразу все, плюс список отличий.
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

Один JSON-документ в stdout, не более двух строк в stderr, и печатается он даже когда часть страниц не снялась. `code` повторяет код выхода.

Запуск, который вообще не смог начаться, печатает объект куда меньше: `{"code": 1, "error": "no_server" | "no_browser", "message": "...", "fix": "..."}`. Неверные аргументы дают `{"error": "bad_args", "message": "...", "fix": "Run stm --help"}`. Проверяйте `error` до того, как читать `changed`. `truncated` считает записи, не попавшие в список (предел 25, в манифесте есть все). В выводе никогда нет текста страниц, только пути и числа.

**Про токены.** Неизменившиеся страницы не стоят ничего, потому что агент их не открывает. Сводка это примерно 150 токенов плюс около 50 на каждую изменившуюся страницу. Просмотр одной изменившейся страницы стоит одной картинки 1440x900. Очень высокие полностраничные скриншоты модели зрения ужимают до нечитаемого текста, и именно поэтому у каждой страницы есть ещё и `fold`-кадр, и именно поэтому навык велит агенту открывать сначала его.

## Визуальная история на диске

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

Каждый запуск это новая папка, названная по приложению и минуте запуска. У каждого файла внутри та же метка времени, так что скриншот, вытащенный из своей папки, всё равно говорит, что это и когда было. Два запуска в одну минуту получают `-2`, `-3` в метке времени. Страницы выше 16 384 px обрезаются на этой высоте, это предел Chromium, и помечаются как `truncated`.

Откройте папку в Finder или Проводнике, и у вас фотоальбом вашего проекта. История это обычные PNG, так что она переживёт саму утилиту. После удаления не останется ничего, кроме папки `screenshots/` и, если у вас был `.gitignore`, одной строки в нём.

## Команды

| Команда | Что делает |
|---|---|
| `stm` | Снимает каждую страницу приложения, работающего на localhost |
| `stm /pricing /about` | Снимает только эти страницы, за секунды. Это и есть цикл "правка и проверка" |
| `stm --url http://localhost:4321` | Снимает именно это приложение вместо автоопределения. Путь в URL задаёт точку старта обхода |
| `stm --mobile` | Дополнительно снимает мобильный вид 390x844 (файлы `@mobile`) |
| `stm --max 100` | Прекратить поиск после стольких страниц (по умолчанию 100) |
| `stm --out screenshots` | Куда складывать снимки (по умолчанию `screenshots`) |
| `stm --json` | Машиночитаемая сводка в stdout, для агентов |
| `stm list` | Прошлые снимки: папка, число страниц, изменения, ошибки |
| `stm open` | Открыть папку последнего снимка |
| `stm skill` | Напечатать навык для агента |

Коды выхода: `0` всё снято, `1` не снято ничего (нет приложения, нет браузера, неверные аргументы), `2` работа завершена, но часть страниц не снялась или запуск был прерван. Одна сбойная страница никогда не останавливает весь запуск.

## Как находятся страницы и отслеживаются изменения

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/how-it-works.svg" alt="определить, обойти, снять, сравнить, отчитаться" width="820">
</p>

Детали, из-за которых скриншотам можно доверять:

- Страницы прокручиваются до самого низа перед съёмкой, чтобы подгрузились ленивые картинки и ленивые секции, а потом прокручиваются обратно. Сайты с плавной прокруткой обрабатываются корректно.
- Анимации замораживаются в конечном состоянии, поэтому появления видны, а спиннеры стоят на месте. Два запуска на одной машине дают побайтово одинаковые PNG страницы, содержимое которой не менялось, и именно это делает слово "изменилось" осмысленным. Страница с часами, относительным временем, ротацией картинок в шапке или анимацией на canvas всегда будет считаться изменившейся.
- Панели разработчика (Astro, Nuxt, значок Next.js) скрываются. А вот оверлеи **ошибок** не скрываются никогда: страница снимается как есть и помечается предупреждением, потому что сломанная страница это ровно то, что вы хотите увидеть.
- Долгоживущие соединения (сокеты HMR, потоки событий) никогда не подвешивают съёмку. Каждой странице даётся 30 секунд и одна повторная попытка, после чего она записывается как сбойная и работа идёт дальше.
- Манифест пишется после каждой страницы, поэтому даже прерванный запуск оставляет папку, которую прочитает `stm list`, а в сводке будет сказано, что он завершился раньше срока.
- Ссылки на `/logout`, `/delete` и подобные никогда не открываются. Как и файлы, `/api/`, чужие домены и ваша собственная папка `screenshots/`.

## Сравнение с инструментами визуального регресс-тестирования

| | stm | Автопроверка в Claude Code Desktop | Playwright MCP, agent-browser, DevTools MCP | Percy, Chromatic |
|---|---|---|---|---|
| Все страницы одной командой | да | по одной странице за раз | по одной странице на вызов инструмента | да, в CI |
| Говорит, какие страницы изменились | да | нет | нет | да, в облаке |
| Работает в терминале, Cursor, Codex | да | только Desktop | да | только в CI |
| История на диске, которую можно листать | да | нет | нет | в их облаке |
| Работает целиком на вашей машине | да | да | да | нет |

`stm` это бесплатная локальная половина визуального регресс-тестирования: он говорит, какие страницы изменились, и отдаёт вам пиксели, без CI-пайплайна, без аккаунта и без ежемесячного счёта. Эти инструменты дополняют друг друга, а не конкурируют. Берите браузерный инструмент, когда агенту нужно покликать. Берите `stm`, когда ему нужно увидеть всё, чего он только что коснулся.

## Приватность

**Работает на 100% локально.** `stm` обращается только к URL вашего приложения и, один раз, к CDN браузеров Playwright, если у вас нет ни Chrome, ни Edge. Ваши скриншоты никогда не покидают вашу машину. Никаких аккаунтов, ключей API и телеметрии. Снимаемые страницы подгружают свои ресурсы ровно так же, как в вашем браузере. Полная модель угроз в [SECURITY.md](../../SECURITY.md).

## Частые вопросы

<details>
<summary><b>Это правда бесплатно?</b></summary>
Да. Лицензия MIT, открытый код, никакого платного тарифа, никакого хостинга, ничего, где надо регистрироваться. Установите, пользуйтесь сколько угодно, форкните, если хочется.
</details>

<details>
<summary><b>Работает ли это с Next.js, Vite, Astro, SvelteKit, Rails, Django, статическими сайтами?</b></summary>
Да. С чем угодно, что отдаёт HTML на localhost. Обычные порты для всего перечисленного проверяются автоматически, для остального есть <code>--url</code>.
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
<summary><b>Через некоторое время всё показывается как изменившееся.</b></summary>
Обычные причины: обновился ваш браузер, из-за чего рендеринг слегка сдвинулся (<code>stm</code> записывает версию браузера и предупреждает вас), либо на странице есть что-то, что меняется само: часы, "3 минуты назад", случайная картинка в шапке, анимация на canvas или баннер про cookie, исчезающий после первого визита. Передавайте такие страницы явно и смотрите их глазами, пока не выйдет <code>stm diff</code>.
</details>

<details>
<summary><b>Может ли это работать автоматически, следя за файлами?</b></summary>
Нет, и это намеренно. <code>stm</code> это кнопка сохранения, как <code>git commit</code>: вы или ваш агент решаете, какой момент стоит сохранить. Хотите автоматики: положите строку-инструкцию в файл памяти вашего агента и пусть решает он.
</details>

<details>
<summary><b>Можно ли сделать из истории таймлапс?</b></summary>
Полноценная команда <code>stm timelapse</code> есть в планах. Сегодня, через ffmpeg:
<pre><code>ffmpeg -framerate 1 -pattern_type glob -i 'screenshots/*/pricing_*.png' \
  -vf "scale=720:-1,split[a][b];[a]palettegen[p];[b][p]paletteuse" pricing.gif</code></pre>
</details>

<details>
<summary><b>Я работаю в Lovable, Bolt или v0. Мне это подойдёт?</b></summary>
Там ваше приложение крутится в их облаке, так что снимать нечего: localhost нет. Экспортируйте проект, запустите его локально, и <code>stm</code> заработает. Всё, что сделано с Claude Code, Cursor, Codex, Windsurf или Copilot на вашей машине, работает сразу.
</details>

<details>
<summary><b>Почему бы просто не написать скрипт на Playwright?</b></summary>
Можно. <code>stm</code> и есть такой скрипт, плюс поиск страниц, устойчивая структура папок, обнаружение изменений, вывод, удобный для агентов, обработка оверлеев разработчика и все крайние случаи, причём с поддержкой. А ещё это одна команда, которую ваш агент уже знает.
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
<summary><b>Можно ли навести его на сайт не на localhost?</b></summary>
Да: <code>stm --url https://staging.example.com</code>. Он остаётся в пределах этого домена и пропускает ссылки, похожие на разрушительные. Снимайте, пожалуйста, только те сайты, которые вам разрешено снимать.
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

Сделано **Mohammed Sohaib Uddin**, потому что агентам, выкатывающим интерфейсы, на которые никто не смотрит, был нужен способ посмотреть.

<p align="left">
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/Connect%20on%20LinkedIn-FF6600?style=for-the-badge&logo=linkedin&logoColor=white" alt="Connect on LinkedIn"></a>
  <a href="https://github.com/mdsohaib"><img src="https://img.shields.io/badge/Follow%20on%20GitHub-0A0E14?style=for-the-badge&logo=github&logoColor=white" alt="Follow on GitHub"></a>
</p>

Если `stm` уберёг вас от выката сломанной страницы, звезда ничего не стоит и помогает другим найти проект.

MIT © Mohammed Sohaib Uddin
