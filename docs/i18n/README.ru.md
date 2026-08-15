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

<i>Перевод английского README. Если возникают сомнения, эталоном считается английская версия.</i>

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/banner.svg" alt="screenshot-time-machine: каждая страница вашего localhost-приложения, снята, датирована и сравнена, одной командой" width="100%">
</p>

<p align="center">
  <b>Снимайте полностраничные скриншоты всех страниц вашего сайта одной командой.</b><br>
  Всё сохраняется в папках с датой. При следующем запуске вы точно узнаете, какие страницы изменились.<br>
  <b>Бесплатно и с открытым исходным кодом. Работает целиком на вашей машине.</b>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/screenshot-time-machine"><img src="https://img.shields.io/npm/v/screenshot-time-machine?style=flat-square&label=npm&color=FF6600&labelColor=0A0E14" alt="версия в npm"></a>
  <a href="https://github.com/mdsohaib/screenshot-time-machine/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/mdsohaib/screenshot-time-machine/ci.yml?branch=main&style=flat-square&label=tests&color=FF6600&labelColor=0A0E14" alt="тесты"></a>
  <img src="https://img.shields.io/badge/dependencies-1-FF6600?style=flat-square&labelColor=0A0E14" alt="одна зависимость">
  <img src="https://img.shields.io/badge/node-22%2B-FF6600?style=flat-square&labelColor=0A0E14&logo=nodedotjs&logoColor=white" alt="Node 22+">
  <a href="../../LICENSE"><img src="https://img.shields.io/badge/license-MIT-FF6600?style=flat-square&labelColor=0A0E14" alt="лицензия MIT"></a>
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/LinkedIn-Mohammed%20Sohaib%20Uddin-FF6600?style=flat-square&labelColor=0A0E14&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
</p>

```bash
npx screenshot-time-machine@latest               # your app is on localhost? that is the whole setup
npx skills add mdsohaib/screenshot-time-machine  # teach Claude Code, Cursor, Codex and friends to run it
```

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/hero.svg" alt="stm сообщает в терминале об одной изменившейся странице, рядом папка снимков с датами" width="820">
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

`stm` это бесплатный консольный инструмент с открытым исходным кодом. Вы запускаете его, пока ваш сайт работает на вашем компьютере. Он:

1. **Находит ваш сайт** на localhost автоматически или там, куда вы укажете через `--url`.
2. **Находит все страницы** по вашему sitemap и по ссылкам.
3. **Снимает каждую страницу целиком**, сверху донизу, плюс вид верхней части страницы, который удобно читать.
4. **Сохраняет их как обычные PNG-файлы** в папку, названную по дате и времени.
5. **Сравнивает с прошлым разом** и говорит, какие именно страницы изменились.

```
$ stm
7 pages saved → screenshots/localhost-3000_2026-08-15_14-32/
   1 changed since last snapshot (Aug 12, 09:10): /pricing
```

Без аккаунта. Без облака. Без подписки. Без конфигурационного файла. Без фонового процесса. Одна зависимость, лицензия MIT, ваш навсегда.

## Какую задачу это решает

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/the-problem.svg" alt="Двенадцать миниатюр страниц. Одна отмечена как та, которую вы посмотрели. Четыре оказались сломаны." width="820">
</p>

Меняете один общий компонент, макет или таблицу стилей, и понятия не имеете, что это сделало с остальными сорока страницами. Единственный честный способ выяснить это: открыть каждую страницу и посмотреть, поэтому этого не делает никто.

ИИ-агенты обострили проблему. Вы просите исправить страницу с ценами, агент правит общий файл, и на странице «О нас» тихо появляется дыра в вёрстке. Агент никогда не видит результат, и вы тоже.

Git отслеживает каждую строку вашего кода и ни одного пикселя вашего сайта. Сервисы визуального тестирования требуют CI-пайплайн и ежемесячный счёт. Скриншоты вручную заканчиваются на четвёртой странице, и файлы никто не хранит.

## Чем это помогает

- **Ловите сломанные страницы раньше, чем их увидят пользователи.** Одна команда, все страницы, список изменений.
- **Дайте вашему ИИ-агенту глаза.** `stm --json` выдаёт ему пути к файлам изменившихся страниц, так что он открывает только их и чинит то, что сломал.
- **Ведите визуальную историю.** Каждый запуск это папка с датой и обычными PNG. Пролистайте назад и посмотрите, как выглядел ваш сайт в марте, прямо из Finder или Проводника.

## Быстрый старт

Ваше приложение должно быть запущено на localhost (`npm run dev`, `rails s`, `python manage.py runserver`, статический сервер, что угодно, что отдаёт HTML). Дальше:

```bash
npx screenshot-time-machine@latest
```

Измените что-нибудь, запустите снова и прочитайте строку `changed`. Вот и весь рабочий процесс.

<details>
<summary><b>Установите один раз и запускайте как <code>stm</code></b></summary>

```bash
npm install -g screenshot-time-machine
stm
```

Всегда пишите `npx screenshot-time-machine@latest`, никогда `npx stm`. Имя `stm` в npm принадлежит постороннему пакету с 2014 года.
</details>

<details>
<summary><b>Что происходит при первом запуске</b></summary>

- `stm` проверяет порты 3000, 3001, 5173, 5174, 8080, 4321, 4322, 8000, 4200 и 5000 в этом порядке и берёт первое приложение, которое ответит. Если ответят несколько, он предпочтёт то, которое этот проект использовал в прошлый раз, и сообщит об остальных.
- Он использует браузер Playwright, который у вас уже есть, либо Chrome или Edge на вашей машине. Если ничего не найдено, он один раз скачивает headless-версию Chrome (примерно 120 МБ) и говорит об этом.
- Если в проекте есть `.gitignore`, он один раз добавляет туда `screenshots/` и сообщает вам. Он никогда не создаёт `.gitignore` и никогда ничего не удаляет.
</details>

**Требования:** Node 22 или новее. Если вы запускаете `npm run dev`, он у вас почти наверняка есть. Не уверены? `node -v`.

## Установка в ваш ИИ-агент

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/agent-loop.svg" alt="Цикл: агент правит интерфейс, запускает stm --json, получает список изменений, смотрит изображения fold, исправляет и запускает снова" width="820">
</p>

Одна команда ставит `stm` как навык, чтобы агент знал, когда его запускать и как читать результат. Выберите своего агента:

| Агент | Команда | Куда попадёт навык |
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
| **Что-то ещё** | `npx skills add mdsohaib/screenshot-time-machine` | выберите из списка 70+ агентов |

Добавьте `-g` к любой из этих команд, чтобы установить навык для всех проектов, а не только для текущего.

Или просто скажите агенту обычными словами:

> Установи screenshot-time-machine, запусти `stm` на моём приложении и покажи, что изменилось.

Затем добавьте одну строку в файл памяти, который читает ваш агент (`CLAUDE.md`, `AGENTS.md`, `GEMINI.md`, `.cursor/rules`), чтобы он проверял свою работу сам, без напоминаний:

```
After changing anything a user can see, run `stm --json` and view the `fold` image of every entry in `changed` and `new` before saying you're done. Never claim a UI change is verified without viewing a screenshot.
```

<details>
<summary><b>Claude Code: установка плагина и как ощущается цикл</b></summary>

Навыки это простой путь. Если вы предпочитаете плагины, выполните это внутри Claude Code:

```
/plugin marketplace add mdsohaib/screenshot-time-machine
/plugin install stm@stm
```

Нет SSH-ключа на GitHub? Используйте форму с URL: `/plugin marketplace add https://github.com/mdsohaib/screenshot-time-machine.git`

Claude Code открывает скриншоты своим инструментом Read, а `stm --json` выдаёт ему абсолютные пути. Цикл такой: правка, `stm --json`, чтение изменившихся изображений `fold`, исправление, повтор. Попросите его «проверить интерфейс», и он сам возьмётся за навык.
</details>

<details>
<summary><b>Codex</b></summary>

Поместите строку памяти в `AGENTS.md`. Codex открывает изображения через `view_image`, так что если он замешкается, скажите: «посмотри изображение fold каждой изменившейся страницы».
</details>

<details>
<summary><b>Cursor</b></summary>

Поместите строку памяти в правило внутри `.cursor/rules/`. Агент запускает `stm --json` в своём терминале и открывает пути к PNG, которые получил в ответ. Встроенный браузер Cursor показывает по одной странице за раз, а `stm` отдаёт сразу все, плюс разницу.
</details>

<details>
<summary><b>Любой агент без поддержки навыков</b></summary>

`stm skill` печатает текст навыка. Вставьте его в тот файл инструкций, который читает ваш агент.

```bash
stm skill
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

Один JSON-документ в stdout, максимум две строки в stderr, и они печатаются даже когда часть страниц не удалась. `code` повторяет код возврата. `truncated` считает записи, не попавшие в список (лимит 25, в манифесте есть все). В выводе никогда нет текста со страниц, только пути и числа.

**О токенах.** Неизменившиеся страницы ничего не стоят, потому что агент их не открывает. Сводка занимает примерно 150 токенов плюс около 50 на каждую изменившуюся страницу. Просмотр одной изменившейся страницы стоит одного изображения 1440x900. Очень высокие полностраничные скриншоты модели зрения ужимают до того, что текст становится нечитаемым, и именно поэтому для каждой страницы есть ещё изображение `fold`, и именно поэтому навык велит агенту открывать сначала его.

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

Каждый запуск это новая папка, названная по приложению и минуте запуска. Каждый файл внутри несёт ту же метку времени, поэтому скриншот, вытащенный из своей папки, всё равно говорит, что он такое и когда сделан. Два запуска в одну и ту же минуту получают `-2`, `-3` в метке времени. Страницы выше 16 384 px обрезаются на этой высоте, это предел Chromium, и помечаются как `truncated`.

Откройте папку в Finder или Проводнике, и у вас фотоальбом вашего проекта. История это обычные PNG, поэтому она переживёт сам инструмент. После удаления не остаётся ничего, кроме папки `screenshots/` и одной строки в `.gitignore`, если он у вас был.

## Команды

| Команда | Что делает |
|---|---|
| `stm` | Снимает все страницы приложения, работающего на localhost |
| `stm /pricing /about` | Снимает только эти страницы, за секунды. Это и есть цикл «правка и проверка» |
| `stm --url http://localhost:4321` | Снимает это приложение вместо автоопределения. Путь в адресе задаёт точку старта обхода |
| `stm --mobile` | Дополнительно снимает мобильный вид 390x844 (файлы `@mobile`) |
| `stm --max 100` | Прекращает поиск после этого числа страниц (по умолчанию 100) |
| `stm --out screenshots` | Куда складывать снимки (по умолчанию `screenshots`) |
| `stm --json` | Машиночитаемая сводка в stdout, для агентов |
| `stm list` | Прошлые снимки: папка, число страниц, изменившиеся, неудавшиеся |
| `stm open` | Открывает папку последнего снимка |
| `stm skill` | Печатает навык для агента |

Коды возврата: `0` снято всё, `1` не снято ничего (нет приложения, нет браузера, неверные аргументы), `2` завершено, но часть страниц не удалась или запуск был прерван. Неудавшаяся страница никогда не останавливает запуск.

## Как он находит страницы и отслеживает изменения

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/how-it-works.svg" alt="определение, обход, съёмка, сравнение, отчёт" width="820">
</p>

Детали, благодаря которым скриншотам можно доверять:

- Перед съёмкой страницы прокручиваются до низа, чтобы подгрузились ленивые картинки и ленивые секции, затем прокручиваются обратно. Сайты с плавной прокруткой обрабатываются корректно.
- Анимации замораживаются в конечном состоянии, поэтому появляющиеся элементы видны, а спиннеры стоят на месте. Два запуска на одной машине дают побайтово одинаковые PNG, и именно поэтому слово «изменилось» что-то значит.
- Панели разработчика (Astro, Nuxt, значок Next.js) скрываются. А вот оверлеи **ошибок** не скрываются никогда: страница снимается как есть и помечается предупреждением, потому что сломанная страница это ровно то, что вы хотите увидеть.
- Долгоживущие соединения (сокеты HMR, потоки событий) никогда не подвешивают съёмку. Каждой странице даётся 30 секунд и одна повторная попытка, после чего она записывается как неудавшаяся и работа идёт дальше.
- Манифест пишется после каждой страницы, поэтому прерванный запуск всё равно оставляет папку, которую прочитает `stm list`, а сводка сообщит, что работа остановилась раньше срока.
- Ссылки на `/logout`, `/delete` и им подобные никогда не открываются. Как и файлы, `/api/`, другие домены и ваша собственная папка `screenshots/`.

## Сравнение

| | stm | Автопроверка в Claude Code Desktop | Playwright MCP, agent-browser, DevTools MCP | Percy, Chromatic |
|---|---|---|---|---|
| Все страницы одной командой | да | по одной странице за раз | одна страница на вызов инструмента | да, в CI |
| Говорит, какие страницы изменились | да | нет | нет | да, в облаке |
| Работает в терминале, Cursor, Codex | да | только Desktop | да | только CI |
| История на диске, которую можно листать | да | нет | нет | в их облаке |
| Работает целиком на вашей машине | да | да | да | нет |

Это дополняющие друг друга вещи, а не конкуренты. Берите браузерный инструмент, когда агенту нужно покликать. Берите `stm`, когда ему нужно увидеть всё, к чему он только что прикоснулся.

## Приватность

**Работает на 100% локально.** `stm` обращается только к URL вашего приложения и один раз к CDN браузеров Playwright, если у вас нет Chrome или Edge. Ваши скриншоты никогда не покидают вашу машину. Никаких аккаунтов, ключей API и телеметрии. Снимаемые страницы загружают свои ресурсы ровно так же, как в вашем браузере. Полная модель угроз в [SECURITY.md](../../SECURITY.md).

## Частые вопросы

<details>
<summary><b>Это правда бесплатно?</b></summary>
Да. Лицензия MIT, открытый исходный код, нет платного тарифа, нет облачного сервиса, нигде не нужно регистрироваться. Установите, пользуйтесь сколько угодно, форкните, если захотите.
</details>

<details>
<summary><b>Работает ли это с Next.js, Vite, Astro, SvelteKit, Rails, Django, статическими сайтами?</b></summary>
Да. С чем угодно, что отдаёт HTML на localhost. Обычные порты для всего перечисленного проверяются автоматически, для остального используйте <code>--url</code>.
</details>

<details>
<summary><b>Он нашёл только мою главную страницу.</b></summary>
Страницы находятся по вашему sitemap и по ссылкам <code>&lt;a href&gt;</code>. В приложениях, которые переходят по кнопкам или по hash-маршрутам (<code>/#/about</code>), ссылок для обхода нет. Назовите страницы явно: <code>stm /about /pricing</code>. Агентам предписано передавать те страницы, которых они касались.
</details>

<details>
<summary><b>На большинстве скриншотов страница входа.</b></summary>
Ваше приложение перенаправляет на авторизацию. <code>stm</code> пока не умеет входить в аккаунт и сообщает вам, когда так происходит. Съёмка под учётной записью есть в планах.
</details>

<details>
<summary><b>Через какое-то время всё показывается как изменившееся.</b></summary>
Обычные причины: обновился браузер, что слегка сдвигает отрисовку (<code>stm</code> записывает версию браузера и предупреждает вас), либо на странице есть что-то, что меняется само: часы, «3 минуты назад», случайная картинка в шапке, анимация на canvas или баннер о cookie, исчезающий после первого визита. Передавайте такие страницы явно и смотрите глазами, пока не выйдет <code>stm diff</code>.
</details>

<details>
<summary><b>Может ли он работать автоматически, следя за файлами?</b></summary>
Нет, и это намеренно. <code>stm</code> это кнопка сохранения, как <code>git commit</code>: вы или ваш агент решаете, какой момент стоит сохранить. Хотите автоматизма: положите однострочную инструкцию в файл памяти агента и пусть решает он.
</details>

<details>
<summary><b>Можно ли превратить историю в таймлапс?</b></summary>
Полноценная команда <code>stm timelapse</code> в планах. Сегодня, с помощью ffmpeg:
<pre><code>ffmpeg -framerate 1 -pattern_type glob -i 'screenshots/*/pricing_*.png' \
  -vf "scale=720:-1,split[a][b];[a]palettegen[p];[b][p]paletteuse" pricing.gif</code></pre>
</details>

<details>
<summary><b>Я работаю в Lovable, Bolt или v0. Мне это подойдёт?</b></summary>
Там ваше приложение работает в их облаке, так что снимать localhost попросту нечего. Выгрузите проект, запустите его локально, и <code>stm</code> заработает. Всё, что собрано с Claude Code, Cursor, Codex, Windsurf или Copilot на вашей машине, работает сразу.
</details>

<details>
<summary><b>Почему бы просто не написать скрипт на Playwright?</b></summary>
Можно. <code>stm</code> и есть этот скрипт, плюс поиск страниц, стабильная структура папок, отслеживание изменений, удобный для агентов вывод, обработка оверлеев разработчика и все крайние случаи, и всё это поддерживается. А ещё это одна команда, которую ваш агент уже знает.
</details>

<details>
<summary><b>Linux говорит, что браузеру не хватает библиотек.</b></summary>
Один раз выполните команду <code>install-deps</code>, которую он печатает. WSL и Codespaces тоже её требуют.
</details>

<details>
<summary><b>Где лежит скачанный браузер?</b></summary>
В кэше Playwright: <code>~/Library/Caches/ms-playwright</code> на macOS, <code>~/.cache/ms-playwright</code> на Linux, <code>%LOCALAPPDATA%\ms-playwright</code> на Windows. Удаляйте когда угодно, <code>stm</code> скачает его снова при необходимости.
</details>

<details>
<summary><b>Можно ли направить его на сайт не на localhost?</b></summary>
Да: <code>stm --url https://staging.example.com</code>. Он остаётся в пределах этого домена и пропускает ссылки, выглядящие разрушительно. Пожалуйста, снимайте только те сайты, на которые у вас есть право.
</details>

## Планы

Список намеренно короткий. Голосуйте, открывая issue.

- `stm diff`: показывать, какие именно области страницы изменились, и отдавать агентам вырезки вместо целых страниц
- `stm timelapse`: превращать историю страницы в GIF или MP4 с подписями из коммитов git
- `stm backfill`: пройти по вашей истории git и построить визуальную историю, которую вы никогда не снимали
- Съёмка под учётной записью (`--storage-state`)
- Локальная галерея с ползунком времени

Не планируется: облачная синхронизация, аккаунты, телеметрия, режим слежения, конфигурационный файл.

## Участие в проекте

Сейчас полезнее всего сообщения об ошибках с приложенным реальным запуском. Начните с [CONTRIBUTING.md](../../CONTRIBUTING.md), затем загляните в [AGENTS.md](../../AGENTS.md) за картой модулей и правилами. Каждое решение и его причина описаны в [DECISIONS.md](../../DECISIONS.md).

## О проекте

Сделал **Mohammed Sohaib Uddin**, потому что агентам, которые выкатывают интерфейсы, на которые никто не смотрит, нужен был способ посмотреть.

<p align="left">
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/Connect%20on%20LinkedIn-FF6600?style=for-the-badge&logo=linkedin&logoColor=white" alt="Связаться в LinkedIn"></a>
  <a href="https://github.com/mdsohaib"><img src="https://img.shields.io/badge/Follow%20on%20GitHub-0A0E14?style=for-the-badge&logo=github&logoColor=white" alt="Подписаться на GitHub"></a>
</p>

Если `stm` убережёт вас от выкатки сломанной страницы, звезда ничего не стоит и помогает другим найти проект.

MIT © Mohammed Sohaib Uddin
