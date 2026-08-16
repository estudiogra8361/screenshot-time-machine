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
  <a href="README.ru.md">Русский</a> ·
  العربية
</p>

*ترجمة عن ملف README الإنجليزي. عند أي التباس، النسخة الإنجليزية هي المرجع.*

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/banner.svg" alt="screenshot-time-machine: لقطة شاشة كاملة لكل صفحة في موقعك، بأمر واحد" width="100%">
</p>

<h1 align="center">screenshot-time-machine</h1>

<p align="center">
  <b>مثل Wayback Machine، لكن لموقعك أنت.</b><br>
  تمشي <code>stm</code> في موقعك صفحة صفحة وتحفظ لقطة شاشة كاملة<br>
  لكل واحدة منها في مجلد يحمل التاريخ والوقت.<br>
  وجّهها إلى أي رابط، أو دعها تعثر على التطبيق الذي يعمل لديك على localhost.<br>
  شغّلها كلما شحنت شيئًا، فيبني السجل البصري نفسه بنفسه:<br>
  كل صفحة، وكل نسخة، على قرصك أنت، كملفات PNG عادية.<br>
  <b>مجانية ومفتوحة المصدر. تعمل بالكامل على جهازك.</b>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/screenshot-time-machine"><img src="https://img.shields.io/npm/v/screenshot-time-machine?style=flat-square&label=npm&color=FF8C1A&labelColor=0A0E14" alt="إصدار npm"></a>
  <a href="../../LICENSE"><img src="https://img.shields.io/badge/license-MIT-FFC24A?style=flat-square&labelColor=0A0E14" alt="رخصة MIT"></a>
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/LinkedIn-Mohammed%20Sohaib%20Uddin-F0509F?style=flat-square&labelColor=0A0E14&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
</p>

```bash
npx screenshot-time-machine@latest                              # the app you have running on localhost
npx screenshot-time-machine@latest --url https://your-site.com  # or any site you are allowed to capture
npx skills add mdsohaib/screenshot-time-machine                 # teach Claude Code, Cursor, Codex and friends to run it
```

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/demo.gif" alt="الصفحة الرئيسية لمتجر عبر عشر نسخ من التصميم، من المسودة الأولى إلى التخطيط النهائي" width="820">
</p>

<p align="center"><i>عشر نسخ من الصفحة نفسها، بالترتيب. هذا ما يتحول إليه مجلد من لقطات الشاشة المؤرخة.</i></p>

<h3 align="center">تعمل مع</h3>

<p align="center">
  <a href="#التثبيت-في-وكيل-البرمجة-لديك"><img src="https://img.shields.io/badge/Claude%20Code-FF8C1A?style=for-the-badge&logo=claude&logoColor=white" alt="Claude Code"></a>
  <a href="#التثبيت-في-وكيل-البرمجة-لديك"><img src="https://img.shields.io/badge/Codex-0A0E14?style=for-the-badge" alt="Codex"></a>
  <a href="#التثبيت-في-وكيل-البرمجة-لديك"><img src="https://img.shields.io/badge/Cursor-7FB0F5?style=for-the-badge&logo=cursor&logoColor=0A0E14" alt="Cursor"></a>
  <a href="#التثبيت-في-وكيل-البرمجة-لديك"><img src="https://img.shields.io/badge/Gemini%20CLI-A98BEB?style=for-the-badge&logo=googlegemini&logoColor=0A0E14" alt="Gemini CLI"></a>
  <a href="#التثبيت-في-وكيل-البرمجة-لديك"><img src="https://img.shields.io/badge/Antigravity-C88AE0?style=for-the-badge&logo=google&logoColor=0A0E14" alt="Antigravity"></a>
  <br>
  <a href="#التثبيت-في-وكيل-البرمجة-لديك"><img src="https://img.shields.io/badge/GitHub%20Copilot-F0509F?style=for-the-badge&logo=githubcopilot&logoColor=white" alt="GitHub Copilot"></a>
  <a href="#التثبيت-في-وكيل-البرمجة-لديك"><img src="https://img.shields.io/badge/Windsurf-FFC24A?style=for-the-badge&logo=windsurf&logoColor=0A0E14" alt="Windsurf"></a>
  <a href="#التثبيت-في-وكيل-البرمجة-لديك"><img src="https://img.shields.io/badge/OpenCode-4FC3A1?style=for-the-badge&logo=opencode&logoColor=white" alt="OpenCode"></a>
  <a href="#التثبيت-في-وكيل-البرمجة-لديك"><img src="https://img.shields.io/badge/Cline-6C7CE0?style=for-the-badge&logo=cline&logoColor=white" alt="Cline"></a>
  <a href="#كل-الوكلاء-الذين-يمكنك-التثبيت-فيهم"><img src="https://img.shields.io/badge/Zed-3B4B5F?style=for-the-badge&logo=zedindustries&logoColor=white" alt="Zed"></a>
  <a href="#كل-الوكلاء-الذين-يمكنك-التثبيت-فيهم"><img src="https://img.shields.io/badge/Warp-2A8FB5?style=for-the-badge&logo=warp&logoColor=white" alt="Warp"></a>
  <a href="#كل-الوكلاء-الذين-يمكنك-التثبيت-فيهم"><img src="https://img.shields.io/badge/Devin-8B6FD4?style=for-the-badge" alt="Devin"></a>
  <a href="#كل-الوكلاء-الذين-يمكنك-التثبيت-فيهم"><img src="https://img.shields.io/badge/Amp-C4653B?style=for-the-badge" alt="Amp"></a>
  <a href="#كل-الوكلاء-الذين-يمكنك-التثبيت-فيهم"><img src="https://img.shields.io/badge/Full%20list-5A6478?style=for-the-badge" alt="القائمة الكاملة للوكلاء"></a>
</p>

<p align="center"><i>ومع البشر الذين يوجّهونها</i></p>

---

## الأمر الواحد

أنت في وسط البناء. تطبيقك يعمل على localhost. تكتب ثلاثة أحرف:

```
$ stm
7 pages saved → screenshots/localhost-3000_2026-08-15_14-32/
   Run stm again after your next change to see which pages look different.
```

سبع لقطات شاشة كاملة، من أعلى كل صفحة إلى أسفلها، صارت الآن في مجلد مؤرخ بجانب شيفرتك. افتحه في Finder أو Explorer وسيكون موقعك كله أمامك كلوحة عرض واحدة: الصفحة الرئيسية، والأسعار، ومن نحن، وكل صفحة منتج، كل شيء، تمامًا كما يبدو اليوم.

موقعك منشور بالفعل؟ وجّهها إلى الموقع الحقيقي وستعمل بالطريقة نفسها، إذ تقرأ ملف `sitemap.xml` لتعثر على الصفحات:

```
$ stm --url https://your-site.com
24 pages saved → screenshots/your-site-com_2026-08-15_14-40/
```

هذه هي الأداة. وكل ما يلي هو ما يتحول إليه هذا الشيء البسيط بعد أن تشغّله بضع مرات.

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/hero.svg" alt="stm في الطرفية بجانب مجلد من اللقطات المؤرخة، يحمل كل منها لقطة شاشة كاملة لكل صفحة" width="820">
</p>

## ما الذي تحصل عليه

**موقعك كله في مجلد واحد.** ليست الصفحة التي تصادف أنها مفتوحة أمامك وحدها. كل صفحة، بطولها الكامل من أعلاها إلى أسفلها، في مجلد تمرّ عليه بالتمرير في عشر ثوانٍ. إنها أسرع طريقة للإجابة عن سؤال: كيف يبدو موقعي فعلًا الآن.

**الصفحات التي ما كنت لتفتحها أبدًا.** حشوة انهارت في صفحة الأسعار. عنوان التفّ سطره بشكل سيئ. بطاقة فقدت صورتها. تذييل انزاح عن مكانه. كل ذلك موجود في المجلد نفسه ينتظر من يلاحظه، بدل أن ينتظر من يبلّغ عنه.

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/the-problem.svg" alt="اثنتا عشرة صورة مصغرة لصفحات من تشغيل واحد، مصفوفة جنبًا إلى جنب، أربع منها تُظهر تخطيطات تحتاج إلى انتباه" width="820">
</p>

<p align="center"><i>اثنتا عشرة صفحة من تشغيل واحد، جنبًا إلى جنب. أربع منها احتاجت إلى انتباه، وكانت الأربع كلها صفحات لم يفتحها أحد.</i></p>

**سجل يبني نفسه بنفسه.** كل تشغيل هو مجلد مؤرخ مستقل، فتتراكم المجلدات في خط زمني من تلقاء نفسها. الصفحة الرئيسية في الشهر الماضي والصفحة الرئيسية اليوم صارتا ملفين تنتقل بينهما. وبعد ستة أشهر يصبح لديك دليل على المسافة التي قطعها المشروع.

**عروض الهاتف في التشغيل نفسه.** الأمر `stm --mobile` يلتقط أيضًا عرضًا بقياس 390x844 لكل صفحة، فيحطّ العنوان الذي يلتف بشكل سيئ على الهاتف بجوار لقطة سطح المكتب مباشرة.

**قائمة قصيرة بدل أربعين تبويبًا.** ابتداءً من التشغيل الثاني، تطبع `stm` الصفحات التي جاءت لقطاتها مختلفة عن المرة السابقة. ابدأ من هناك.

**عيون لوكيلك.** الأمر `stm --json` يسلّم Claude Code أو Cursor أو Codex المسار المطلق لكل صفحة بناها للتو، فينظر إلى عمله ويصلحه قبل أن يخبرك بأنه انتهى.

**ملكك، وإلى الأبد.** ملفات PNG عادية على قرصك أنت. بلا حساب، بلا سحابة، بلا اشتراك، بلا ملف إعدادات، بلا عملية تعمل في الخلفية. اعتمادية واحدة، برخصة MIT، وهي لك إلى الأبد.

## من يلجأ إليها

- **أنت تكتب الطلب، والوكيل يبني، وتكتشف النتيجة لاحقًا.** طلبت صفحة واحدة، فعدّل مكوّنًا مشتركًا، وجاءت معه إحدى عشرة صفحة في الطريق. أمر واحد يريك الإحدى عشرة كلها.
- **تشحن وحدك في الواحدة صباحًا.** بدت لك جولة التصميم صحيحة في تلك اللحظة. مجلد يوم الثلاثاء يخبرك إن كانت كذلك فعلًا.
- **مضى عليك ثلاثة أسابيع في إعادة تصميم**، ولم تعد تتذكر تمامًا كيف كان الشكل من قبل. صوّر الموقع في اليوم الأول، وكل لقطة بعد ذلك تصبح مقارنة لم تضطر إلى إعدادها.
- **تسلّم عملًا إلى غيرك.** مجلد من لقطات الشاشة الكاملة هو أوضح تحديث حالة قد يصل إلى عميل أو زميل.
- **تريد دليلًا على العمل.** النسخة الأولى من أي شيء تستحق الاحتفاظ بها. ومعظم الناس يدركون ذلك عند النسخة الرابعة تقريبًا.

## البداية السريعة

إن كنت تبني محليًا، شغّل تطبيقك بالطريقة التي تعتادها (`npm run dev`، `rails s`، `python manage.py runserver`، خادم ثابت، أي شيء يقدّم HTML)، ثم شغّل:

```bash
npx screenshot-time-machine@latest
```

وإن كان الموقع منشورًا على الإنترنت أصلًا، تجاوز ذلك كله وسمّه:

```bash
npx screenshot-time-machine@latest --url https://your-site.com
```

**تتطلب Node 22 أو أحدث.** شغّل `node -v` للتحقق. إن طبع 21 أو أقل، حدّث Node من [nodejs.org](https://nodejs.org) أولًا.

لالتقاط اللقطات، تستخدم `stm` متصفح Playwright المخزّن لديك مسبقًا، وإن لم يوجد فمتصفح Chrome أو Edge الموجود على جهازك أصلًا. وإن لم يكن لديك أي منهما، تنزّل متصفحًا بلا واجهة مرة واحدة، بحجم 120 ميغابايت تقريبًا يشغل نحو 200 ميغابايت على القرص، وتخبرك قبل أن تفعل. وهذا هو الشيء الوحيد الذي تجلبه `stm` نفسها من الإنترنت؛ أما الصفحات التي تصوّرها فتحمّل مواردها الخاصة تمامًا كما تفعل في متصفحك.

غيّر شيئًا، ثم شغّلها مرة أخرى. هذا هو سير العمل كله.

وكل ما يلي هنا يكتب الأمر باختصار `stm`. للحصول على هذا الاسم القصير، ثبّتها مرة واحدة:

```bash
npm install -g screenshot-time-machine
```

عدم التثبيت أمر مقبول تمامًا. اكتب `npx screenshot-time-machine@latest` في كل موضع ترى فيه `stm`. ولا تكتب أبدًا `npx stm`: تلك حزمة أخرى لا علاقة لها بالأمر، من عام 2014.

<details>
<summary><b>ماذا يحدث أيضًا في التشغيل الأول</b></summary>

- تفحص `stm` المنافذ 3000 و3001 و5173 و5174 و8080 و4321 و4322 و8000 و4200 و5000، بهذا الترتيب، وتستخدم أول تطبيق يستجيب. وإن استجاب أكثر من واحد، تفضّل الذي استخدمه هذا المشروع في المرة السابقة وتخبرك بالبقية.
- إن كان في مشروعك ملف `.gitignore`، تضيف إليه `screenshots/` مرة واحدة وتخبرك بذلك. لا تنشئ ملف `.gitignore` أبدًا، ولا تحذف أي شيء أبدًا.
- تُكتشف الصفحات بتتبع روابط `<a href>` الموجودة فيها، وبقراءة ملف `sitemap.xml` إن كان لديك واحد، حتى 100 صفحة في كل تشغيل. أما الصفحات التي لا يمكن الوصول إليها إلا بالضغط على زر، ومسارات الهاش مثل `/#/about`، فلا رابط لها يُتتبع، فسمّها بنفسك: `stm /about /pricing`.
</details>

## التثبيت في وكيل البرمجة لديك

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/agent-loop.svg" alt="الحلقة: الوكيل يعدّل الواجهة، يشغّل stm --json، يقرأ مسارات اللقطات، يعاين صور fold، يصلح ثم يشغّل مجددًا" width="820">
</p>

وكيلك كتب صفحة الأسعار. وكتب شريط التنقل. ولمس مكوّنًا مشتركًا فتحركت معه إحدى عشرة صفحة. لكنه لم ينظر إلى أي منها فعلًا، لأنه بلا عيون.

الأمر `stm --json` يمنحه شيئًا من ذلك. يشغّل الوكيل أمرًا واحدًا، فيستعيد المسار المطلق لكل صفحة بناها للتو، ويفتح صورة `fold` للصفحات التي جاءت مختلفة، ويراجع عمله بنفسه قبل أن يخبرك بأنه انتهى.

والجانب الأجمل هو ما تتوقف أنت عن فعله. لا نقر عبر إحدى عشرة صفحة. ولا عبارة "تبدو سليمة" يتضح لاحقًا أنها لم تكن كذلك. تحصل على مجلد، تمرّ عليه في عشر ثوانٍ، وتعرف من الآن أي الصفحات تفتحها أولًا.

أمر واحد يثبّت `stm` كمهارة: ملف تعليمات قصير يقرأه وكيلك، فيعرف متى يشغّل `stm` وماذا يفعل بالنتيجة. و`npx skills add` مثبّت مستقل مفتوح المصدر ينسخ ذلك المجلد الواحد إلى مشروعك ولا يغيّر أي شيء آخر. اختر وكيلك:

| الوكيل | الأمر | تُثبَّت المهارة في |
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
| **أي شيء آخر** | `npx skills add mdsohaib/screenshot-time-machine` | اختر وكيلك من القائمة أدناه |

أضف `-g` إلى أي منها لتثبيتها لكل مشاريعك بدلًا من هذا المشروع وحده.

### كل الوكلاء الذين يمكنك التثبيت فيهم

هذه هي الأسماء التي يقبلها المثبّت بعد `-a`. مرّر أيًا منها، أو اترك `-a` واختر من القائمة التي يعرضها عليك.

`adal` · `aider-desk` · `amp` · `antigravity` · `antigravity-cli` · `astrbot` · `augment` · `autohand-code` · `bob` · `claude-code` · `cline` · `codearts-agent` · `codebuddy` · `codemaker` · `codestudio` · `codex` · `command-code` · `continue` · `cortex` · `crush` · `cursor` · `deepagents` · `devin` · `dexto` · `droid` · `eve` · `firebender` · `forgecode` · `gemini-cli` · `github-copilot` · `goose` · `grok` · `hermes-agent` · `iflow-cli` · `inference-sh` · `jazz` · `junie` · `kilo` · `kimchi` · `kimi-code-cli` · `kiro-cli` · `kode` · `lingma` · `loaf` · `mcpjam` · `minimax-code` · `mistral-vibe` · `moxby` · `mux` · `neovate` · `ona` · `openclaw` · `opencode` · `openhands` · `pi` · `pochi` · `promptscript` · `qoder` · `qoder-cn` · `qwen-code` · `reasonix` · `replit` · `roo` · `rovodev` · `tabnine-cli` · `terramind` · `tinycloud` · `trae` · `trae-cn` · `universal` · `warp` · `windsurf` · `zcode` · `zed` · `zencoder` · `zenflow`

و`universal` هو الاسم الذي تستخدمه حين لا يكون وكيلك مذكورًا أعلاه: فهو يكتب المهارة في `.agents/skills/stm/`، وهو الموضع المشترك الذي يقرأه عدد من هؤلاء الوكلاء. والقائمة موجودة في المثبّت لا هنا، فهي تنمو دون أن يتغير ملف README هذا. ولرؤية القائمة الحالية، اطلب وكيلًا غير موجود فيطبعها كلها:

```bash
npx skills add mdsohaib/screenshot-time-machine -a list-them-please
```

أو ببساطة اطلب من وكيلك بكلمات عادية:

> ثبّت screenshot-time-machine، وشغّل `stm` على تطبيقي، وأرني كيف تبدو الصفحات.

ثم أضف سطرًا واحدًا إلى الملف الذي يقرأه وكيلك مع كل طلب، حتى يتحقق من عمله بنفسه دون أن تطلب منه:

```
After changing anything a user can see, run `stm --json` (or `npx -y screenshot-time-machine@latest --json` if `stm` is not installed) and view the `fold` image of every entry in `changed` and `new` before saying you're done. On the very first snapshot both lists are empty, so view the fold images of the pages you edited instead. Never claim a UI change is verified without viewing a screenshot.
```

أين يوضع ذلك السطر، حسب الوكيل:

| الوكيل | الملف |
|---|---|
| Claude Code | `CLAUDE.md` |
| Codex، Antigravity، OpenCode | `AGENTS.md` |
| Gemini CLI | `GEMINI.md` |
| Cursor | `.cursor/rules/stm.mdc`، يبدأ بـ `---`، ثم `alwaysApply: true`، ثم `---` |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Windsurf | `.windsurf/rules/stm.md` |
| Cline | `.clinerules/stm.md` |

<details>
<summary><b>Claude Code: التثبيت كإضافة، وكيف تبدو الحلقة</b></summary>

المهارات هي الطريق الأبسط. وإن كنت تفضّل الإضافات، شغّل هذا داخل Claude Code:

```
/plugin marketplace add mdsohaib/screenshot-time-machine
/plugin install stm@stm
```

لا يوجد مفتاح SSH على GitHub؟ استخدم صيغة الرابط: `/plugin marketplace add https://github.com/mdsohaib/screenshot-time-machine.git`

يفتح Claude Code لقطات الشاشة بأداة Read لديه، والأمر `stm --json` يسلّمه مسارات مطلقة. الحلقة هي: عدّل، ثم `stm --json`، ثم اقرأ صور `fold`، ثم أصلح، وكرر. اطلب منه "تحقق من الواجهة" وسيمد يده إلى المهارة من تلقاء نفسه.
</details>

<details>
<summary><b>Codex</b></summary>

ضع سطر الذاكرة في `AGENTS.md`. يفتح Codex الصور عبر `view_image`، فإن تردد، قل له "عاين صورة fold لكل صفحة لمستها".
</details>

<details>
<summary><b>Cursor</b></summary>

ضع سطر الذاكرة في قاعدة داخل `.cursor/rules/`. يشغّل الوكيل `stm --json` في طرفيته ويفتح مسارات PNG التي تعود إليه. متصفح Cursor المدمج يعرض صفحة واحدة في كل مرة، بينما تسلّمه `stm` كل الصفحات دفعة واحدة.
</details>

<details>
<summary><b>أي وكيل، بلا دعم للمهارات</b></summary>

الأمر `stm skill` يطبع نص المهارة. الصقه في أي ملف تعليمات يقرأه وكيلك. وهذا يعمل دون تثبيت أي شيء:

```bash
npx screenshot-time-machine@latest skill
```
</details>

### ما الذي يستعيده الوكيل

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

مستند JSON واحد على stdout، وسطران على الأكثر على stderr، ويُطبعان حتى حين تفشل بعض الصفحات. والاستثناء الوحيد هو تنزيل المتصفح لمرة واحدة: مثبّته يكتب هو أيضًا على stderr. والحقل `code` يعكس رمز الخروج.

أما التشغيل الذي يتعذر بدؤه فيطبع كائنًا أصغر بكثير بدلًا من ذلك: `{"code": 1, "error": "no_server" | "no_browser", "message": "...", "fix": "..."}`. والوسائط الخاطئة تطبع `{"error": "bad_args", "message": "...", "fix": "..."}`، حيث يكون `fix` هو `Run stm --help` في حالة راية غير معروفة، ومثالًا عمليًا في حالة `--url` مكتوب بصيغة خاطئة. تحقق من `error` قبل أن تقرأ `changed`. والحقل `truncated` يعدّ المدخلات المستبعدة من القائمة (الحد 25، والمانيفست يحتوي عليها كلها). الخرج يحمل المسارات والأرقام فقط، ولا يحمل أبدًا نصًا مأخوذًا من صفحاتك.

**عن التوكنات.** تُلتقط كل صفحة في كل تشغيل، لكن الوكيل لا يفتح إلا الصفحات التي توجّهه إليها، فالتشغيل الهادئ لا تكاد قراءته تكلف شيئًا. الملخص يبلغ نحو 200 توكن، زائد نحو 90 لكل صفحة مدرجة في القائمة. ومعاينة صفحة واحدة تكلف صورة واحدة بقياس 1440x900. أما لقطات الصفحات الكاملة الطويلة جدًا فتصغّرها نماذج الرؤية حتى يصبح النص غير مقروء، وهذا بالضبط سبب حصول كل صفحة أيضًا على صورة `fold`، وسبب توجيه المهارة الوكيلَ إلى فتح تلك أولًا.

## سجل بصري على القرص

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

كل تشغيل هو مجلد جديد يحمل اسم التطبيق والدقيقة التي جرى فيها. وكل ملف بداخله يحمل الطابع الزمني نفسه، فلقطة الشاشة المسحوبة خارج مجلدها تظل تقول ما هي ومتى حدثت. وتشغيلان في الدقيقة ذاتها يحصلان على `-2` و`-3` في الطابع الزمني. أما الصفحات الأطول من 16,384 بكسل فتُقص عند ذلك الارتفاع، وهو حد Chromium، وتُعلَّم بـ `truncated`.

رتّب المجلدات حسب التاريخ فأنت تنظر إلى الخط الزمني لمنتجك. اختر صفحة واحدة وتنقّل بين ملفها في كل مجلد فأنت تشاهدها وهي تتحسن. الأمر كله ملفات PNG عادية، فيبقى هذا السجل بعد عمر الأداة التي صنعته: بلا قاعدة بيانات، بلا صيغة خاصة، ولا شيء يحتاج إلى تصدير. وإزالة التثبيت لا تترك خلفها سوى مجلد `screenshots/`، وسطر واحد في `.gitignore` إن كان لديك واحد.

## الأوامر

| الأمر | ما الذي يفعله |
|---|---|
| `stm` | التقاط لقطة لكل صفحة في التطبيق العامل لديك على localhost |
| `stm /pricing /about` | التقاط هذه الصفحات فقط، في ثوانٍ. هذه هي حلقة التعديل والتحقق |
| `stm --url https://your-site.com` | التقاط أي موقع عبر رابطه، محليًا كان أو منشورًا. المسار يبدأ الزحف من عنده |
| `stm --mobile` | التقاط عرض هاتف بقياس 390x844 أيضًا (ملفات `@mobile`) |
| `stm --max 100` | التوقف عن اكتشاف الصفحات بعد هذا العدد (الافتراضي 100) |
| `stm --out screenshots` | أين تذهب اللقطات (الافتراضي `screenshots`) |
| `stm --json` | ملخص قابل للقراءة آليًا على stdout، للوكلاء |
| `stm list` | اللقطات السابقة: المجلد، عدد الصفحات، ما تغيّر، ما فشل |
| `stm open` | فتح مجلد أحدث لقطة |
| `stm skill` | طباعة مهارة الوكيل |

رموز الخروج: `0` تم التقاط كل شيء، `1` لم يُلتقط شيء (لا تطبيق، لا متصفح، وسائط خاطئة)، `2` انتهى التشغيل مع فشل بعض الصفحات أو مع مقاطعته. والصفحة الفاشلة لا توقف التشغيل أبدًا.

### أشياء قليلة تستحق التجربة

```bash
stm --mobile                     # desktop and phone views of every page, same run
stm /checkout --mobile           # the one flow you just touched, both sizes, in seconds
stm --url https://staging.example.com   # any site you are allowed to capture, not just localhost
stm list                         # every snapshot you have ever taken, oldest to newest
stm open                         # jump straight into the latest folder
```

## كيف تعمل

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/how-it-works.svg" alt="الكشف، الاكتشاف، الالتقاط، المقارنة، التقرير" width="820">
</p>

1. **الكشف.** فحص منافذ localhost المعتادة واختيار التطبيق الذي يستجيب، أو استخدام `--url`.
2. **الاكتشاف.** قراءة `sitemap.xml` إن وُجد، ثم تتبع روابط `<a href>` من صفحة إلى أخرى، مع البقاء على المصدر نفسه.
3. **الالتقاط.** تحميل كل صفحة، وتمريرها حتى يصل المحتوى المؤجل، وتثبيت كل شيء، ثم حفظ ملف PNG للصفحة كاملة إضافة إلى صورة `fold` لأعلى الشاشة.
4. **الحفظ.** كتابة كل شيء في مجلد يحمل اسم التطبيق والدقيقة، مع تحديث المانيفست بعد كل صفحة على حدة.
5. **التقرير.** طباعة ملخص من سطر واحد، يتضمن أي الصفحات جاءت مختلفة عن التشغيل السابق.

### لماذا تأتي اللقطات ثابتة

قيمة أي أداة لقطات شاشة من ثباتها: صوّر الصفحة نفسها مرتين وينبغي أن تحصل على الصورة نفسها. وهذا يتطلب عملًا حقيقيًا، وفيه يقع معظم شيفرة هذا المشروع.

- تُمرَّر الصفحات إلى أسفلها قبل الالتقاط حتى تُحمّل الصور والأقسام المؤجلة، ثم تُعاد إلى الأعلى. والمواقع ذات التمرير الناعم مدعومة.
- يُنتظر تحميل خطوط الويب، فلا تُلتقط الصفحة في منتصف التبديل من الخط الاحتياطي.
- تُجمَّد الحركات عند حالتها النهائية، فتظهر تأثيرات الظهور التدريجي كاملة وتثبت المؤشرات الدوارة.
- تُثبَّت نسبة بكسل الجهاز عند 1 ومساحة العرض عند 1440x900، فتأتي اللقطة نفسها على حاسبك المحمول وحاسبك المكتبي وفي CI.
- تُخفى أشرطة أدوات التطوير (Astro وNuxt وشارة Next.js). أما طبقات **الأخطاء** التطويرية فلا تُخفى أبدًا: تُلتقط الصفحة كما هي وتُعلَّم بتحذير، لأن الصفحة المكسورة هي بالضبط ما تريد أن تراه.
- الاتصالات طويلة الأمد (مقابس HMR، تدفقات الأحداث) لا توقف عملية التقاط أبدًا. كل صفحة تحصل على مهلة 30 ثانية ومحاولة إعادة واحدة، ثم تُسجَّل ويمضي التشغيل قدمًا.
- يُكتب المانيفست بعد كل صفحة، فالتشغيل المقاطَع يترك مع ذلك مجلدًا يستطيع `stm list` قراءته.
- الروابط إلى `/logout` و`/delete` وأمثالها لا تُتبع أبدًا. ولا الملفات، ولا `/api/`، ولا المصادر الأخرى، ولا مجلد `screenshots/` الخاص بك.

والنتيجة: تشغيلان على الجهاز نفسه ينتجان ملفي PNG متطابقين بايتًا ببايت لصفحة لم يتغير محتواها.

<details>
<summary><b>كيف يُستخرج سطر الصفحات المتغيرة</b></summary>

تُلتقط كل صفحة في كل تشغيل. وما تجري مقارنته ليس الصور نفسها، بل بصماتها:

1. بعد حفظ ملف PNG لصفحة ما، تحسب `stm` **بصمة sha256** لبايتات ذلك الملف.
2. تذهب البصمة إلى مانيفست ذلك التشغيل، بجانب مسار الصفحة.
3. في التشغيل التالي، تبحث `stm` عن الصفحة نفسها في **مانيفست التشغيل السابق** وتقارن البصمتين.
4. اختلاف البصمة يعني أن اللقطة جاءت مختلفة. وتطابقها يعني أنها لم تختلف. وغياب مدخلة سابقة يعني أن الصفحة جديدة.

لا تُفتح اللقطات القديمة مرة أخرى أبدًا، بل يُقرأ المانيفست الصغير وحده، فتصبح مقارنة مئة صفحة فورية. تحصل على أسماء الصفحات ومسارات الملفات، وهو بالضبط ما تحتاج إليه لتفتح اللقطات الصحيحة أولًا، أو لتسلّم وكيلك الصحيحة منها. أما المقارنة البصرية على مستوى المناطق فهي `stm diff` في خارطة الطريق.

والصفحة التي تعرض ساعة، أو وقتًا نسبيًا مثل "قبل 3 دقائق"، أو صورة رئيسية متبدلة، أو حركة على canvas، تبدو مختلفة فعلًا في كل تشغيل، وستُدرج في كل تشغيل.
</details>

## كيف تقارن بغيرها

| | stm | التحقق التلقائي في Claude Code Desktop | Playwright MCP، agent-browser، DevTools MCP | Percy، Chromatic |
|---|---|---|---|---|
| كل الصفحات بأمر واحد | نعم | صفحة واحدة في كل مرة | صفحة واحدة لكل استدعاء أداة | نعم، داخل CI |
| سجل على القرص يمكنك تصفحه | نعم | لا | لا | في سحابتهم |
| تسرد أي الصفحات جاءت مختلفة | نعم | لا | لا | نعم، في السحابة |
| تعمل في الطرفية وCursor وCodex | نعم | Desktop فقط | نعم | CI فقط |
| تعمل بالكامل على جهازك | نعم | نعم | نعم | لا |
| مجانية | نعم | نعم | نعم | مدفوعة فوق الحد المجاني |

هذه الأدوات مكمّلة لبعضها، لا منافسة. استخدم أداة متصفح حين يحتاج وكيلك إلى النقر والتفاعل. واستخدم `stm` حين تحتاج أنت أو وكيلك إلى رؤية كل شيء دفعة واحدة، والاحتفاظ به.

## الخصوصية

**تعمل محليًا بنسبة 100%.** لا تتصل `stm` إلا برابط تطبيقك، ومرة واحدة بشبكة توزيع متصفحات Playwright إن لم يكن لديك Chrome أو Edge. لقطات شاشتك لا تغادر جهازك أبدًا. بلا حسابات، بلا مفاتيح API، بلا قياسات تتبع. والصفحات التي تصوّرها تحمّل مواردها الخاصة تمامًا كما تفعل في متصفحك. نموذج التهديد الكامل في [SECURITY.md](../../SECURITY.md).

## الأسئلة الشائعة

<details>
<summary><b>هل هي مجانية فعلًا؟</b></summary>
نعم. برخصة MIT، مفتوحة المصدر، بلا خطة مدفوعة، بلا خدمة مستضافة، ولا شيء تسجّل فيه. ثبّتها، واستخدمها إلى الأبد، واعمل منها نسخة خاصة إن أردت.
</details>

<details>
<summary><b>هل تعمل مع Next.js وVite وAstro وSvelteKit وRails وDjango والمواقع الثابتة؟</b></summary>
نعم. أي شيء يقدّم HTML، سواء كان على جهازك أو على الإنترنت. المنافذ المعتادة لكل هذه على localhost تُفحص تلقائيًا، واستخدم <code>--url</code> لأي شيء آخر.
</details>

<details>
<summary><b>كم يستغرق التشغيل الواحد؟</b></summary>
تُلتقط الصفحات بضعًا بضعًا، ومعظم المواقع الصغيرة تنتهي في أقل من دقيقة بكثير. أما الموقع الكبير على خادم تطوير بارد فيستغرق وقتًا أطول، لأن الزيارة الأولى لكل صفحة هي إطار العمل وهو يبنيها. مرّر الصفحات التي تهمك (<code>stm /pricing /about</code>) حين تريد النتيجة فورًا.
</details>

<details>
<summary><b>لم تعثر إلا على الصفحة الرئيسية.</b></summary>
تُكتشف الصفحات من خريطة موقعك ومن روابط <code>&lt;a href&gt;</code>. والتطبيقات التي تتنقل بالأزرار أو بمسارات الهاش (<code>/#/about</code>) لا روابط فيها لتتبعها. سمّ الصفحات: <code>stm /about /pricing</code>. والوكلاء مُوجَّهون لتمرير الصفحات التي عدّلوها.
</details>

<details>
<summary><b>معظم لقطاتي تظهر صفحة تسجيل الدخول.</b></summary>
تطبيقك يعيد التوجيه إلى تسجيل الدخول. لا يستطيع <code>stm</code> تسجيل الدخول بعد، وهو يخبرك حين يحدث ذلك. واللقطات في حالة تسجيل الدخول مدرجة في خارطة الطريق.
</details>

<details>
<summary><b>كل صفحة تُدرج على أنها مختلفة بعد فترة.</b></summary>
الأسباب المعتادة: تحدّث متصفحك، ما يغيّر العرض قليلًا (يسجّل <code>stm</code> إصدار المتصفح ويخبرك)، أو أن صفحاتك تعرض شيئًا يتحرك من تلقاء نفسه، مثل ساعة، أو "قبل 3 دقائق"، أو صورة رئيسية عشوائية، أو حركة على canvas، أو لافتة ملفات تعريف الارتباط التي لا تظهر إلا في الزيارة الأولى. اللقطات صحيحة على أي حال، فافتح ما يهمك منها.
</details>

<details>
<summary><b>هل يمكنها العمل تلقائيًا، بمراقبة ملفاتي؟</b></summary>
تعمل حين تطلب منها ذلك، مثل <code>git commit</code>: أنت، أو وكيلك، تقرران متى تستحق اللحظة أن تُحفظ. وللالتقاط التلقائي، ضع سطر التعليمات الواحد في ملف ذاكرة وكيلك ودعه يشغّلها بعد كل تغيير في الواجهة.
</details>

<details>
<summary><b>هل أستطيع تحويل سجلي إلى فيديو متسارع؟</b></summary>
أمر <code>stm timelapse</code> بالمعنى الكامل مدرج في خارطة الطريق. أما اليوم فعبر ffmpeg:
<pre><code>ffmpeg -framerate 1 -pattern_type glob -i 'screenshots/*/pricing_*.png' \
  -vf "scale=720:-1,split[a][b];[a]palettegen[p];[b][p]paletteuse" pricing.gif</code></pre>
</details>

<details>
<summary><b>أستخدم Lovable أو Bolt أو v0. هل يمكنني استخدام هذه الأداة؟</b></summary>
نعم، بطريقتين. وجّه <code>stm</code> إلى الرابط الذي تنشره لك تلك الخدمات: <code>stm --url https://your-project.lovable.app</code>. أو صدّر المشروع وشغّله محليًا، وستعثر عليه <code>stm</code> بنفسها. وأي شيء مبني بـ Claude Code أو Cursor أو Codex أو Windsurf أو Copilot على جهازك يعمل مباشرة.
</details>

<details>
<summary><b>لماذا لا أكتب سكربت Playwright وحسب؟</b></summary>
يمكنك ذلك. <code>stm</code> هو ذلك السكربت، إضافة إلى اكتشاف الصفحات، وبنية مجلدات ثابتة، والتقاط ثابت قابل للتكرار، وخرج صديق للوكلاء، ومعالجة طبقات التطوير، وكل الحالات الحدية، مع صيانة مستمرة. وهو أيضًا أمر واحد يعرفه وكيلك أصلًا.
</details>

<details>
<summary><b>Linux يقول إن المتصفح تنقصه مكتبات.</b></summary>
شغّل أمر <code>install-deps</code> الذي يطبعه، مرة واحدة. وWSL وCodespaces يحتاجانه أيضًا.
</details>

<details>
<summary><b>أين يوجد المتصفح المُنزَّل؟</b></summary>
في ذاكرة Playwright المؤقتة: <code>~/Library/Caches/ms-playwright</code> على macOS، و<code>~/.cache/ms-playwright</code> على Linux، و<code>%LOCALAPPDATA%\ms-playwright</code> على Windows. احذفها متى شئت، وستنزّلها <code>stm</code> مجددًا عند الحاجة.
</details>

<details>
<summary><b>هل أستطيع استخدامها على موقعي المنشور أو موقع staging؟</b></summary>
نعم: <code>stm --url https://staging.example.com</code>. تقرأ ملف <code>sitemap.xml</code> الخاص بذلك الموقع وتتبع روابطه تمامًا كما تفعل محليًا، وتبقى على ذلك المصدر وحده، ولا تتبع أبدًا الروابط التي تبدو مدمّرة مثل <code>/logout</code> أو <code>/delete</code>. من فضلك لا تصوّر إلا المواقع المسموح لك بتصويرها.
</details>

## خارطة الطريق

صغيرة عن قصد. صوّت بفتح issue.

- `stm diff`: إظهار المناطق التي تغيّرت في الصفحة بالضبط، وتسليم الوكلاء قصاصات بدل صفحات كاملة
- `stm timelapse`: تحويل سجل صفحة إلى GIF أو MP4، مع تعليقات من رسائل git commit
- `stm backfill`: المرور على سجل git وبناء السجل البصري الذي لم تلتقطه قط
- لقطات في حالة تسجيل الدخول (`--storage-state`)
- معرض محلي بشريط زمني

غير مخطط له: المزامنة السحابية، الحسابات، القياسات التتبعية، وضع المراقبة، ملف الإعدادات.

## المساهمة

تقارير الأخطاء المرفقة بتشغيل حقيقي هي أنفع شيء في الوقت الحالي. ابدأ بـ [CONTRIBUTING.md](../../CONTRIBUTING.md)، ثم [AGENTS.md](../../AGENTS.md) لخريطة الوحدات والقواعد. وكل قرار وسببه موجود في [DECISIONS.md](../../DECISIONS.md).

## عن المشروع

بناها **Mohammed Sohaib Uddin**، لأن البرمجيات التي تتغير كل يوم تستحق سجلًا لما كانت تبدو عليه.

<p align="left">
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/Connect%20on%20LinkedIn-FF8C1A?style=for-the-badge&logo=linkedin&logoColor=white" alt="تواصل على LinkedIn"></a>
  <a href="https://github.com/mdsohaib"><img src="https://img.shields.io/badge/Follow%20on%20GitHub-0A0E14?style=for-the-badge&logo=github&logoColor=white" alt="تابعني على GitHub"></a>
</p>

إن أرتك `stm` شيئًا سعدت برؤيته، فالنجمة لا تكلفك شيئًا وتساعد آخرين على العثور عليها.

MIT © Mohammed Sohaib Uddin
