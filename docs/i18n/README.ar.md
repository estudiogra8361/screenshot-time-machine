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
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/banner.svg" alt="screenshot-time-machine: كل صفحة في تطبيقك على localhost، لقطة شاشة مؤرخة ومقارنة، بأمر واحد" width="100%">
</p>

<h1 align="center">screenshot-time-machine</h1>

<p align="center">
  <b>أداة سطر أوامر للقطات الشاشة الكاملة: صوّر كل صفحة من موقعك على localhost بأمر واحد.</b><br>
  التقط لقطة شاشة كاملة لكل صفحة في التطبيق الذي تبنيه، دفعة واحدة.<br>
  تُحفظ في مجلدات مؤرخة. وفي المرة التالية التي تشغّلها فيها، تخبرك بالضبط أي الصفحات تغيّرت.<br>
  <b>مجانية ومفتوحة المصدر. تعمل بالكامل على جهازك.</b>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/screenshot-time-machine"><img src="https://img.shields.io/npm/v/screenshot-time-machine?style=flat-square&label=npm&color=FF6600&labelColor=0A0E14" alt="إصدار npm"></a>
  <a href="https://github.com/mdsohaib/screenshot-time-machine/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/mdsohaib/screenshot-time-machine/ci.yml?branch=main&style=flat-square&label=tests&color=FF6600&labelColor=0A0E14" alt="الاختبارات"></a>
  <img src="https://img.shields.io/badge/dependencies-1-FF6600?style=flat-square&labelColor=0A0E14" alt="اعتمادية واحدة">
  <img src="https://img.shields.io/badge/node-22%2B-FF6600?style=flat-square&labelColor=0A0E14&logo=nodedotjs&logoColor=white" alt="Node 22 وما فوق">
  <a href="../../LICENSE"><img src="https://img.shields.io/badge/license-MIT-FF6600?style=flat-square&labelColor=0A0E14" alt="رخصة MIT"></a>
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/LinkedIn-Mohammed%20Sohaib%20Uddin-FF6600?style=flat-square&labelColor=0A0E14&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
</p>

```bash
npx screenshot-time-machine@latest               # your app is on localhost? that is the whole setup
npx skills add mdsohaib/screenshot-time-machine  # teach Claude Code, Cursor, Codex and friends to run it
```

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/hero.svg" alt="stm يعرض صفحة واحدة متغيرة في الطرفية، بجانب مجلد من اللقطات المؤرخة" width="820">
</p>

<p align="center">
  <b>يعمل مع</b><br>
  <img src="https://img.shields.io/badge/Claude%20Code-0A0E14?style=flat-square&logo=claude&logoColor=FF6600" alt="Claude Code">
  <img src="https://img.shields.io/badge/Codex-0A0E14?style=flat-square" alt="Codex">
  <img src="https://img.shields.io/badge/Cursor-0A0E14?style=flat-square&logo=cursor&logoColor=FF6600" alt="Cursor">
  <img src="https://img.shields.io/badge/Gemini%20CLI-0A0E14?style=flat-square&logo=googlegemini&logoColor=FF6600" alt="Gemini CLI">
  <img src="https://img.shields.io/badge/Antigravity-0A0E14?style=flat-square" alt="Antigravity">
  <img src="https://img.shields.io/badge/Copilot-0A0E14?style=flat-square&logo=githubcopilot&logoColor=FF6600" alt="GitHub Copilot">
  <img src="https://img.shields.io/badge/Windsurf-0A0E14?style=flat-square&logo=windsurf&logoColor=FF6600" alt="Windsurf">
  <img src="https://img.shields.io/badge/OpenCode-0A0E14?style=flat-square&logo=opencode&logoColor=FF6600" alt="OpenCode">
  <img src="https://img.shields.io/badge/Cline-0A0E14?style=flat-square" alt="Cline">
  <br><i>ومع البشر الذين يوجّهونها</i>
</p>

---

## ما هي

`stm` أداة سطر أوامر مجانية ومفتوحة المصدر. تشغّلها بينما موقعك يعمل على جهازك، فتقوم بالتالي:

1. **تعثر على موقعك** على localhost تلقائيًا، أو حيثما توجّهها بـ `--url`.
2. **تعثر على صفحاتك** بتتبع روابط `<a href>` الموجودة فيها، وبقراءة ملف `sitemap.xml` إن كان لديك واحد، حتى 100 صفحة في كل تشغيل. الصفحات التي لا يمكن الوصول إليها إلا بالضغط على زر، ومسارات الهاش مثل `/#/about`، لا يمكن تتبعها. سمّها بنفسك: `stm /about /pricing`.
3. **تصوّر كل صفحة بكاملها**، من أعلاها إلى أسفلها، إضافة إلى صورة ثانية لأعلى الصفحة فقط، أي الجزء الذي يظهر على شاشة واحدة. هذه الصورة الثانية تُسمى صورة `fold`، وهي التي ينبغي أن تنظر إليها أولًا.
4. **تحفظها كملفات PNG عادية** في مجلد يحمل اسم التاريخ والوقت.
5. **تقارنها بالمرة السابقة** وتخبرك بالضبط أي الصفحات تغيّرت.

```
$ stm
7 pages saved → screenshots/localhost-3000_2026-08-15_14-32/
   1 changed since last snapshot (Aug 12, 09:10): /pricing
```

بلا حساب. بلا سحابة. بلا اشتراك. بلا ملف إعدادات. بلا عملية تعمل في الخلفية. اعتمادية واحدة، برخصة MIT، وهي لك إلى الأبد.

## المشكلة التي تحلها

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/the-problem.svg" alt="اثنتا عشرة صورة مصغرة لصفحات. واحدة مؤشَّرة بأنها الصفحة التي نظرت إليها. وأربع منها عادت مكسورة." width="820">
</p>

تغيّر مكوّنًا مشتركًا واحدًا أو تخطيطًا أو ملف أنماط، ولا فكرة لديك عما فعله ذلك بالأربعين صفحة الأخرى. الطريقة الصادقة الوحيدة لمعرفة ذلك هي فتح كل صفحة والنظر إليها، ولهذا لا يفعلها أحد.

وكلاء البرمجة بالذكاء الاصطناعي جعلوا الأمر أوضح. تطلب إصلاحًا في صفحة الأسعار، فيعدّل الوكيل ملفًا مشتركًا، وتظهر فجوة صامتة في صفحة "من نحن". الوكيل لا يرى النتيجة أبدًا، وأنت كذلك.

Git يتتبع كل سطر من شيفرتك ولا يتتبع بكسلًا واحدًا من موقعك. خدمات الاختبار البصري تطلب خط أنابيب CI وفاتورة شهرية. والتصوير اليدوي لا يصمد بعد الصفحة الرابعة، ولا أحد يحتفظ بالملفات.

## لماذا تفيدك

- **اكتشف الصفحات المكسورة قبل مستخدميك.** أمر واحد، كل الصفحات، وقائمة بما تغيّر.
- **امنح وكيلك عيونًا.** الأمر `stm --json` يسلّمه مسارات ملفات الصفحات المتغيرة، فيفتح تلك فقط ويصلح ما كسره.
- **احتفظ بسجل بصري.** كل تشغيل هو مجلد مؤرخ من ملفات PNG عادية. ارجع بالتمرير وشاهد كيف كان موقعك في مارس، مباشرة من Finder أو Explorer.

## البداية السريعة

يجب أن يكون تطبيقك قيد التشغيل على localhost (`npm run dev`، `rails s`، `python manage.py runserver`، خادم ثابت، أي شيء يقدّم HTML). ثم:

```bash
npx screenshot-time-machine@latest
```

**يتطلب Node 22 أو أحدث.** شغّل `node -v` للتحقق. إن طبع 21 أو أقل، حدّث Node من [nodejs.org](https://nodejs.org) أولًا.

التشغيل الأول يستخدم Chrome أو Edge الموجود أصلًا على جهازك. إن لم يكن لديك أي منهما، تنزّل الأداة متصفحًا مرة واحدة، بحجم 120 ميغابايت تقريبًا، وتخبرك قبل أن تفعل. ذلك التنزيل هو الشيء الوحيد الذي يجلبه stm من الإنترنت على الإطلاق.

غيّر شيئًا، شغّلها مرة أخرى، واقرأ سطر `changed`. هذا هو سير العمل كله.

كل ما يلي هنا يكتب الأمر باختصار `stm`. للحصول على هذا الاسم القصير، ثبّتها مرة واحدة:

```bash
npm install -g screenshot-time-machine
```

عدم التثبيت أمر مقبول تمامًا. اكتب `npx screenshot-time-machine@latest` في كل موضع ترى فيه `stm`. لا تكتب أبدًا `npx stm`: تلك حزمة أخرى لا علاقة لها بالأمر، من عام 2014.

<details>
<summary><b>ماذا يحدث أيضًا في التشغيل الأول</b></summary>

- تفحص `stm` المنافذ 3000 و3001 و5173 و5174 و8080 و4321 و4322 و8000 و4200 و5000، بهذا الترتيب، وتستخدم أول تطبيق يستجيب. وإن استجاب أكثر من واحد، تفضّل الذي استخدمه هذا المشروع في المرة السابقة وتخبرك بالبقية.
- إن كان في مشروعك ملف `.gitignore`، تضيف إليه `screenshots/` مرة واحدة وتخبرك بذلك. لا تنشئ ملف `.gitignore` أبدًا، ولا تحذف أي شيء أبدًا.
</details>

## ثبّتها داخل وكيل البرمجة لديك

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/agent-loop.svg" alt="الحلقة: الوكيل يعدّل الواجهة، يشغّل stm --json، يحصل على قائمة المتغيرات، يعاين صور fold، يصلح ثم يشغّل مجددًا" width="820">
</p>

أمر واحد يثبّت `stm` كمهارة: ملف تعليمات قصير يقرأه وكيلك، فيعرف متى يشغّل `stm` وكيف يقرأ النتيجة. و`npx skills add` مثبّت مستقل مفتوح المصدر ينسخ ذلك المجلد الواحد إلى مشروعك ولا يغيّر أي شيء آخر. اختر وكيلك:

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
| **أي شيء آخر** | `npx skills add mdsohaib/screenshot-time-machine` | اختر من قائمة تضم أكثر من 70 وكيلًا |

أضف `-g` إلى أي منها لتثبيتها لكل مشاريعك بدلًا من هذا المشروع وحده.

أو ببساطة اطلب من وكيلك بكلمات عادية:

> ثبّت screenshot-time-machine، وشغّل `stm` على تطبيقي، وأرني ما الذي تغيّر.

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

المهارات هي الطريق الأبسط. إن كنت تفضّل الإضافات، شغّل هذا داخل Claude Code:

```
/plugin marketplace add mdsohaib/screenshot-time-machine
/plugin install stm@stm
```

لا يوجد مفتاح SSH على GitHub؟ استخدم صيغة الرابط: `/plugin marketplace add https://github.com/mdsohaib/screenshot-time-machine.git`

يفتح Claude Code لقطات الشاشة بأداة Read لديه، و`stm --json` يسلّمه مسارات مطلقة. الحلقة هي: عدّل، شغّل `stm --json`، اقرأ صور `fold` المتغيرة، أصلح، وكرر. اطلب منه "تحقق من الواجهة" وسيمد يده إلى المهارة من تلقاء نفسه.
</details>

<details>
<summary><b>Codex</b></summary>

ضع سطر الذاكرة في `AGENTS.md`. يفتح Codex الصور عبر `view_image`، فإن تردد، قل له "عاين صورة fold لكل صفحة متغيرة".
</details>

<details>
<summary><b>Cursor</b></summary>

ضع سطر الذاكرة في قاعدة داخل `.cursor/rules/`. يشغّل الوكيل `stm --json` في طرفيته ويفتح مسارات PNG التي تعود إليه. متصفح Cursor المدمج يعرض صفحة واحدة في كل مرة، بينما يسلّمه `stm` كل الصفحات، مع الفروق.
</details>

<details>
<summary><b>أي وكيل، بلا دعم للمهارات</b></summary>

الأمر `stm skill` يطبع نص المهارة. الصقه في أي ملف تعليمات يقرأه وكيلك. هذا يعمل دون تثبيت أي شيء:

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

مستند JSON واحد على stdout، وسطران على الأكثر على stderr، يُطبعان حتى حين تفشل بعض الصفحات. الحقل `code` يعكس رمز الخروج.

التشغيل الذي يتعذر بدؤه يطبع كائنًا أصغر بكثير بدلًا من ذلك: `{"code": 1, "error": "no_server" | "no_browser", "message": "...", "fix": "..."}`. والوسائط الخاطئة تطبع `{"error": "bad_args", "message": "...", "fix": "Run stm --help"}`. تحقق من `error` قبل أن تقرأ `changed`. الحقل `truncated` يعدّ المدخلات المستبعدة من القائمة (الحد 25، والمانيفست يحتوي عليها كلها). لا يحتوي الخرج أبدًا على نص الصفحات، بل على المسارات والأرقام فقط.

**عن التوكنات.** الصفحات غير المتغيرة لا تكلف شيئًا للنظر إليها، لأن الوكيل لا يفتحها أصلًا. الملخص يبلغ نحو 150 توكنًا، زائد نحو 50 لكل صفحة متغيرة. ومعاينة صفحة متغيرة واحدة تكلف صورة واحدة بقياس 1440x900. لقطات الصفحات الكاملة الطويلة جدًا تصغّرها نماذج الرؤية حتى يصبح النص غير مقروء، وهذا بالضبط سبب حصول كل صفحة أيضًا على صورة `fold`، وسبب توجيه المهارة الوكيلَ إلى فتح تلك أولًا.

## سجل بصري على القرص

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

كل تشغيل هو مجلد جديد يحمل اسم التطبيق والدقيقة التي جرى فيها. وكل ملف بداخله يحمل الطابع الزمني نفسه، فلقطة الشاشة المسحوبة خارج مجلدها تظل تقول ما هي ومتى حدثت. تشغيلان في الدقيقة ذاتها يحصلان على `-2` و`-3` في الطابع الزمني. الصفحات الأطول من 16,384 بكسل تُقص عند ذلك الارتفاع، وهو حد Chromium، وتُعلَّم بـ `truncated`.

افتح المجلد في Finder أو Explorer وستجد ألبوم صور لمشروعك. السجل ملفات PNG عادية، فيبقى بعد عمر هذه الأداة. وإزالة التثبيت لا تترك خلفها سوى مجلد `screenshots/`، وسطر واحد في `.gitignore` إن كان لديك واحد.

## الأوامر

| الأمر | ما الذي يفعله |
|---|---|
| `stm` | التقاط لقطة لكل صفحة في التطبيق العامل على localhost |
| `stm /pricing /about` | التقاط هذه الصفحات فقط، في ثوانٍ. هذه هي حلقة التعديل والتحقق |
| `stm --url http://localhost:4321` | التقاط هذا التطبيق بدلًا من الكشف التلقائي. المسار يبدأ الزحف من عنده |
| `stm --mobile` | التقاط عرض هاتف بقياس 390x844 أيضًا (ملفات `@mobile`) |
| `stm --max 100` | التوقف عن اكتشاف الصفحات بعد هذا العدد (الافتراضي 100) |
| `stm --out screenshots` | أين تذهب اللقطات (الافتراضي `screenshots`) |
| `stm --json` | ملخص قابل للقراءة آليًا على stdout، للوكلاء |
| `stm list` | اللقطات السابقة: المجلد، عدد الصفحات، ما تغيّر، ما فشل |
| `stm open` | فتح مجلد أحدث لقطة |
| `stm skill` | طباعة مهارة الوكيل |

رموز الخروج: `0` تم التقاط كل شيء، `1` لم يُلتقط شيء (لا تطبيق، لا متصفح، وسائط خاطئة)، `2` انتهى التشغيل مع فشل بعض الصفحات أو مع مقاطعته. الصفحة الفاشلة لا توقف التشغيل أبدًا.

## كيف تعثر على الصفحات وتتعقب ما تغيّر

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/how-it-works.svg" alt="الكشف، الاكتشاف، الالتقاط، المقارنة، التقرير" width="820">
</p>

التفاصيل التي تجعل لقطات الشاشة جديرة بالثقة:

- تُمرَّر الصفحات إلى أسفلها قبل الالتقاط حتى تُحمّل الصور والأقسام المؤجلة، ثم تُعاد إلى الأعلى. المواقع ذات التمرير الناعم مدعومة.
- تُجمَّد الحركات عند حالتها النهائية، فتظهر تأثيرات الظهور التدريجي وتثبت المؤشرات الدوارة. تشغيلان على الجهاز نفسه ينتجان ملفات PNG متطابقة بايتًا ببايت لصفحة لم يتغير محتواها، وهذا ما يجعل لكلمة "تغيّر" معنى حقيقيًا. الصفحة التي تعرض ساعة أو وقتًا نسبيًا أو صورة رئيسية متبدلة أو حركة على canvas ستُبلَّغ دائمًا على أنها متغيرة.
- تُخفى أشرطة أدوات التطوير (Astro وNuxt وشارة Next.js). أما طبقات **الأخطاء** التطويرية فلا تُخفى أبدًا: تُلتقط الصفحة كما هي وتُعلَّم بتحذير، لأن الصفحة المكسورة هي بالضبط ما تريد أن تراه.
- الاتصالات طويلة الأمد (مقابس HMR، تدفقات الأحداث) لا توقف عملية التقاط أبدًا. كل صفحة تحصل على 30 ثانية ومحاولة إعادة واحدة، ثم تُسجَّل على أنها فاشلة ويمضي التشغيل قدمًا.
- يُكتب المانيفست بعد كل صفحة، فالتشغيل المقاطَع يترك مع ذلك مجلدًا يستطيع `stm list` قراءته، ويقول الملخص إنه توقف مبكرًا.
- الروابط إلى `/logout` و`/delete` وأمثالها لا تُتبع أبدًا. ولا الملفات، ولا `/api/`، ولا المصادر الأخرى، ولا مجلد `screenshots/` الخاص بك.

## كيف تقارن بأدوات الاختبار البصري

| | stm | التحقق التلقائي في Claude Code Desktop | Playwright MCP، agent-browser، DevTools MCP | Percy، Chromatic |
|---|---|---|---|---|
| كل الصفحات بأمر واحد | نعم | صفحة واحدة في كل مرة | صفحة واحدة لكل استدعاء أداة | نعم، داخل CI |
| تخبرك أي الصفحات تغيّرت | نعم | لا | لا | نعم، في السحابة |
| تعمل في الطرفية وCursor وCodex | نعم | Desktop فقط | نعم | CI فقط |
| سجل على القرص يمكنك تصفحه | نعم | لا | لا | في سحابتهم |
| تعمل بالكامل على جهازك | نعم | نعم | نعم | لا |

`stm` هي النصف المجاني والمحلي من اختبار الانحدار البصري: تخبرك أي الصفحات تغيّرت وتسلّمك البكسلات، بلا خط أنابيب CI، وبلا حساب، وبلا فاتورة شهرية. هذه الأدوات مكمّلة لبعضها، لا منافسة. استخدم أداة متصفح حين يحتاج وكيلك إلى النقر والتنقل. واستخدم `stm` حين يحتاج إلى رؤية كل ما لمسه للتو.

## الخصوصية

**تعمل محليًا بنسبة 100%.** لا يتصل `stm` إلا برابط تطبيقك، ومرة واحدة بشبكة توزيع متصفحات Playwright إن لم يكن لديك Chrome أو Edge. لقطات شاشتك لا تغادر جهازك أبدًا. بلا حسابات، بلا مفاتيح API، بلا قياسات تتبع. الصفحات التي تلتقطها تحمّل مواردها الخاصة تمامًا كما تفعل في متصفحك. نموذج التهديد الكامل في [SECURITY.md](../../SECURITY.md).

## الأسئلة الشائعة

<details>
<summary><b>هل هي مجانية فعلًا؟</b></summary>
نعم. برخصة MIT، مفتوحة المصدر، بلا خطة مدفوعة، بلا خدمة مستضافة، ولا شيء تسجّل فيه. ثبّتها، استخدمها إلى الأبد، واعمل منها نسخة خاصة إن أردت.
</details>

<details>
<summary><b>هل تعمل مع Next.js وVite وAstro وSvelteKit وRails وDjango والمواقع الثابتة؟</b></summary>
نعم. أي شيء يقدّم HTML على localhost. المنافذ المعتادة لكل هذه تُفحص تلقائيًا، واستخدم <code>--url</code> لأي شيء آخر.
</details>

<details>
<summary><b>لم تعثر إلا على الصفحة الرئيسية.</b></summary>
تُكتشف الصفحات من خريطة موقعك ومن روابط <code>&lt;a href&gt;</code>. التطبيقات التي تتنقل بالأزرار أو بمسارات الهاش (<code>/#/about</code>) لا روابط فيها لتتبعها. سمّ الصفحات: <code>stm /about /pricing</code>. والوكلاء مُوجَّهون لتمرير الصفحات التي عدّلوها.
</details>

<details>
<summary><b>معظم لقطاتي تظهر صفحة تسجيل الدخول.</b></summary>
تطبيقك يعيد التوجيه إلى تسجيل الدخول. لا يستطيع <code>stm</code> تسجيل الدخول بعد، وهو يخبرك حين يحدث ذلك. اللقطات في حالة تسجيل الدخول مدرجة في خارطة الطريق.
</details>

<details>
<summary><b>كل شيء يظهر كأنه تغيّر بعد فترة.</b></summary>
الأسباب المعتادة: تحدّث متصفحك، ما يغيّر العرض قليلًا (يسجّل <code>stm</code> إصدار المتصفح وينبهك)، أو أن الصفحة تعرض شيئًا يتحرك من تلقاء نفسه، مثل ساعة أو "قبل 3 دقائق" أو صورة رئيسية عشوائية أو حركة على canvas أو لافتة ملفات تعريف الارتباط التي تختفي بعد الزيارة الأولى. مرّر تلك الصفحات صراحة وافحصها بعينك إلى أن يصل <code>stm diff</code>.
</details>

<details>
<summary><b>هل يمكنها العمل تلقائيًا، بمراقبة ملفاتي؟</b></summary>
لا، وهذا مقصود. <code>stm</code> زر نقطة حفظ، مثل <code>git commit</code>: أنت، أو وكيلك، تقرران متى تستحق اللحظة أن تُحفظ. إن أردتها تلقائية، ضع سطر التعليمات الواحد في ملف ذاكرة وكيلك ودعه هو يقرر.
</details>

<details>
<summary><b>هل أستطيع تحويل سجلي إلى فيديو متسارع؟</b></summary>
أمر <code>stm timelapse</code> بالمعنى الكامل مدرج في خارطة الطريق. أما اليوم فعبر ffmpeg:
<pre><code>ffmpeg -framerate 1 -pattern_type glob -i 'screenshots/*/pricing_*.png' \
  -vf "scale=720:-1,split[a][b];[a]palettegen[p];[b][p]paletteuse" pricing.gif</code></pre>
</details>

<details>
<summary><b>أستخدم Lovable أو Bolt أو v0. هل يمكنني استخدام هذه الأداة؟</b></summary>
تلك الخدمات تشغّل تطبيقك في سحابتها، فلا يوجد localhost لتصويره. صدّر المشروع، وشغّله محليًا، وسيعمل <code>stm</code>. وأي شيء مبني بـ Claude Code أو Cursor أو Codex أو Windsurf أو Copilot على جهازك يعمل مباشرة.
</details>

<details>
<summary><b>لماذا لا أكتب سكربت Playwright وحسب؟</b></summary>
يمكنك ذلك. <code>stm</code> هو ذلك السكربت، إضافة إلى اكتشاف الصفحات، وبنية مجلدات ثابتة، وكشف التغيّر، وخرج صديق للوكلاء، ومعالجة طبقات التطوير، وكل الحالات الحدية، مع صيانة مستمرة. وهو أيضًا أمر واحد يعرفه وكيلك أصلًا.
</details>

<details>
<summary><b>Linux يقول إن المتصفح تنقصه مكتبات.</b></summary>
شغّل أمر <code>install-deps</code> الذي يطبعه، مرة واحدة. WSL وCodespaces يحتاجانه أيضًا.
</details>

<details>
<summary><b>أين يوجد المتصفح المُنزَّل؟</b></summary>
في ذاكرة Playwright المؤقتة: <code>~/Library/Caches/ms-playwright</code> على macOS، و<code>~/.cache/ms-playwright</code> على Linux، و<code>%LOCALAPPDATA%\ms-playwright</code> على Windows. احذفها متى شئت، وسينزّلها <code>stm</code> مجددًا عند الحاجة.
</details>

<details>
<summary><b>هل أستطيع توجيهها إلى موقع ليس على localhost؟</b></summary>
نعم: <code>stm --url https://staging.example.com</code>. تبقى على ذلك المصدر وتتخطى الروابط التي تبدو مدمّرة. من فضلك لا تصوّر إلا المواقع المسموح لك بتصويرها.
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

تقارير الأخطاء المرفقة بتشغيل حقيقي هي أنفع شيء في الوقت الحالي. ابدأ بـ [CONTRIBUTING.md](../../CONTRIBUTING.md)، ثم [AGENTS.md](../../AGENTS.md) لخريطة الوحدات والقواعد. كل قرار وسببه موجود في [DECISIONS.md](../../DECISIONS.md).

## عن المشروع

بناها **Mohammed Sohaib Uddin**، لأن الوكلاء الذين يشحنون واجهات لا ينظر إليها أحد كانوا بحاجة إلى وسيلة للنظر.

<p align="left">
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/Connect%20on%20LinkedIn-FF6600?style=for-the-badge&logo=linkedin&logoColor=white" alt="تواصل على LinkedIn"></a>
  <a href="https://github.com/mdsohaib"><img src="https://img.shields.io/badge/Follow%20on%20GitHub-0A0E14?style=for-the-badge&logo=github&logoColor=white" alt="تابعني على GitHub"></a>
</p>

إن أنقذك `stm` من شحن صفحة مكسورة، فالنجمة لا تكلفك شيئًا وتساعد آخرين على العثور عليه.

MIT © Mohammed Sohaib Uddin
