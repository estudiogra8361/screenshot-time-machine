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

*مترجم عن ملف README الإنجليزي. عند أي التباس، النسخة الإنجليزية هي المرجع.*

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/banner.svg" alt="screenshot-time-machine: كل صفحة في تطبيقك على localhost، بلقطة شاشة مؤرخة ومقارنة، بأمر واحد" width="100%">
</p>

<p align="center">
  <b>التقط لقطة شاشة كاملة لكل صفحة في موقعك بأمر واحد.</b><br>
  تُحفظ في مجلدات مؤرخة. وفي المرة التالية التي تشغّله فيها، يخبرك بالضبط أي صفحة تغيّرت.<br>
  <b>مجاني ومفتوح المصدر. يعمل بالكامل على جهازك.</b>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/screenshot-time-machine"><img src="https://img.shields.io/npm/v/screenshot-time-machine?style=flat-square&label=npm&color=FF6600&labelColor=0A0E14" alt="إصدار npm"></a>
  <a href="https://github.com/mdsohaib/screenshot-time-machine/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/mdsohaib/screenshot-time-machine/ci.yml?branch=main&style=flat-square&label=tests&color=FF6600&labelColor=0A0E14" alt="الاختبارات"></a>
  <img src="https://img.shields.io/badge/dependencies-1-FF6600?style=flat-square&labelColor=0A0E14" alt="اعتمادية واحدة">
  <img src="https://img.shields.io/badge/node-22%2B-FF6600?style=flat-square&labelColor=0A0E14&logo=nodedotjs&logoColor=white" alt="Node 22 أو أحدث">
  <a href="../../LICENSE"><img src="https://img.shields.io/badge/license-MIT-FF6600?style=flat-square&labelColor=0A0E14" alt="رخصة MIT"></a>
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/LinkedIn-Mohammed%20Sohaib%20Uddin-FF6600?style=flat-square&labelColor=0A0E14&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
</p>

```bash
npx screenshot-time-machine@latest               # your app is on localhost? that is the whole setup
npx skills add mdsohaib/screenshot-time-machine  # teach Claude Code, Cursor, Codex and friends to run it
```

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/hero.svg" alt="stm يعرض صفحة واحدة متغيّرة في الطرفية، بجانب مجلد لقطات مؤرخة" width="820">
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

## ما هي الأداة

`stm` أداة سطر أوامر مجانية ومفتوحة المصدر. تشغّلها بينما يعمل موقعك على جهازك، فتقوم بالتالي:

1. **تجد موقعك** على localhost تلقائياً، أو حيثما توجّهها بـ `--url`.
2. **تجد كل صفحة** من خريطة الموقع ومن روابطك.
3. **تصوّر كل صفحة بالكامل**، من أعلاها إلى أسفلها، مع لقطة لأعلى الصفحة سريعة القراءة.
4. **تحفظها كملفات PNG عادية** في مجلد يحمل اسم التاريخ والوقت.
5. **تقارنها بالمرة السابقة** وتخبرك بالضبط أي الصفحات تغيّرت.

```
$ stm
7 pages saved → screenshots/localhost-3000_2026-08-15_14-32/
   1 changed since last snapshot (Aug 12, 09:10): /pricing
```

بلا حساب. بلا سحابة. بلا اشتراك. بلا ملف إعدادات. بلا عملية تعمل في الخلفية. اعتمادية واحدة، برخصة MIT، ملكك إلى الأبد.

## المشكلة التي تحلّها

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/the-problem.svg" alt="اثنتا عشرة صورة مصغّرة لصفحات. واحدة مؤشّر عليها بأنها الصفحة التي نظرت إليها. أربع منها عادت معطوبة." width="820">
</p>

تغيّر مكوّناً مشتركاً واحداً أو تخطيطاً أو ملف أنماط، ولا تملك أي فكرة عمّا فعله ذلك بالأربعين صفحة الأخرى. الطريقة الصادقة الوحيدة لمعرفة ذلك هي فتح كل صفحة والنظر إليها، ولهذا لا يفعلها أحد.

وكلاء البرمجة بالذكاء الاصطناعي جعلوا الأمر أوضح. تطلب إصلاحاً في صفحة الأسعار، فيعدّل الوكيل ملفاً مشتركاً، وتظهر في صفحة "من نحن" فجوة بصمت. الوكيل لا يرى النتيجة أبداً، وأنت كذلك.

Git يتتبّع كل سطر من شيفرتك ولا يتتبّع بكسلاً واحداً من موقعك. خدمات الاختبار البصري تريد منك خط إنتاج CI وفاتورة شهرية. والتصوير اليدوي لا يصمد بعد الصفحة الرابعة، ولا أحد يحتفظ بالملفات.

## لماذا تفيدك

- **اكتشف الصفحات المعطوبة قبل أن يكتشفها مستخدموك.** أمر واحد، كل الصفحات، وقائمة بما تغيّر.
- **امنح وكيل الذكاء الاصطناعي عينين.** يسلّمه `stm --json` مسارات ملفات الصفحات المتغيّرة، فيفتح تلك الصفحات فقط ويصلح ما كسره.
- **احتفظ بتاريخ بصري.** كل تشغيل هو مجلد مؤرخ من ملفات PNG عادية. ارجع بالتمرير وشاهد كيف كان موقعك في مارس، مباشرة من Finder أو Explorer.

## البداية السريعة

يجب أن يكون تطبيقك قيد التشغيل على localhost (`npm run dev` أو `rails s` أو `python manage.py runserver` أو خادم ملفات ثابتة، أي شيء يقدّم HTML). ثم:

```bash
npx screenshot-time-machine@latest
```

غيّر شيئاً، شغّله مرة أخرى، واقرأ سطر `changed`. هذه هي كامل الدورة.

<details>
<summary><b>ثبّتها مرة واحدة، وشغّلها بالاسم <code>stm</code></b></summary>

```bash
npm install -g screenshot-time-machine
stm
```

اكتب دائماً `npx screenshot-time-machine@latest`، ولا تكتب أبداً `npx stm`. فالاسم `stm` على npm يعود لحزمة غير ذات صلة من عام 2014.
</details>

<details>
<summary><b>ماذا يحدث في التشغيل الأول</b></summary>

- يفحص `stm` المنافذ 3000 و3001 و5173 و5174 و8080 و4321 و4322 و8000 و4200 و5000، بهذا الترتيب، ويستخدم أول تطبيق يستجيب. وإن استجاب أكثر من واحد، يفضّل الذي استخدمه هذا المشروع آخر مرة ويخبرك بالبقية.
- يستخدم متصفح Playwright موجوداً لديك أصلاً، أو Chrome أو Edge المثبّت على جهازك. وإن لم يجد شيئاً، ينزّل نسخة Chrome بلا واجهة مرة واحدة (نحو 120 ميغابايت) ويعلمك بذلك.
- إن كان مشروعك يحتوي على `.gitignore`، يضيف إليه `screenshots/` مرة واحدة ويخبرك. لا ينشئ ملف `.gitignore` أبداً، ولا يحذف أي شيء أبداً.
</details>

**المتطلبات:** Node 22 أو أحدث. إن كنت تشغّل `npm run dev` فأنت تملكه على الأرجح. لست متأكداً؟ اكتب `node -v`.

## ثبّتها داخل وكيل البرمجة لديك

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/agent-loop.svg" alt="الدورة: الوكيل يعدّل الواجهة، يشغّل stm --json، يحصل على قائمة المتغيّر، يعاين صور fold، يصلح ويشغّل من جديد" width="820">
</p>

أمر واحد يثبّت `stm` كمهارة، فيعرف الوكيل متى يشغّلها وكيف يقرأ النتيجة. اختر وكيلك:

| الوكيل | الأمر | مكان المهارة |
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
| **أي وكيل آخر** | `npx skills add mdsohaib/screenshot-time-machine` | اختر من قائمة تضم أكثر من 70 وكيلاً |

أضف `-g` إلى أي من هذه الأوامر لتثبيتها لكل مشاريعك بدل هذا المشروع وحده.

أو ببساطة اطلب من وكيلك بكلمات عادية:

> ثبّت screenshot-time-machine، وشغّل `stm` على تطبيقي، وأرني ما الذي تغيّر.

ثم أضف سطراً واحداً إلى ملف الذاكرة الذي يقرأه وكيلك (`CLAUDE.md` أو `AGENTS.md` أو `GEMINI.md` أو `.cursor/rules`)، حتى يتحقق من عمله دون أن تطلب منه:

```
After changing anything a user can see, run `stm --json` and view the `fold` image of every entry in `changed` and `new` before saying you're done. Never claim a UI change is verified without viewing a screenshot.
```

<details>
<summary><b>Claude Code: التثبيت كإضافة، وكيف تبدو الدورة</b></summary>

المهارات هي المسار البسيط. وإن كنت تفضّل الإضافات، شغّل هذا داخل Claude Code:

```
/plugin marketplace add mdsohaib/screenshot-time-machine
/plugin install stm@stm
```

لا تملك مفتاح SSH على GitHub؟ استخدم صيغة الرابط: `/plugin marketplace add https://github.com/mdsohaib/screenshot-time-machine.git`

يفتح Claude Code لقطات الشاشة بأداة Read لديه، و`stm --json` يسلّمه مسارات مطلقة. الدورة هي: تعديل، ثم `stm --json`، ثم قراءة صور `fold` المتغيّرة، ثم إصلاح، ثم إعادة. اطلب منه "افحص الواجهة" وسيلجأ إلى المهارة من تلقاء نفسه.
</details>

<details>
<summary><b>Codex</b></summary>

ضع سطر الذاكرة في `AGENTS.md`. يفتح Codex الصور عبر `view_image`، فإن تردّد، قل له "عاين صورة fold لكل صفحة تغيّرت".
</details>

<details>
<summary><b>Cursor</b></summary>

ضع سطر الذاكرة في قاعدة داخل `.cursor/rules/`. يشغّل الوكيل `stm --json` في طرفيته ويفتح مسارات PNG التي يعيدها. متصفح Cursor المدمج يعرض صفحة واحدة في كل مرة، بينما يسلّمه `stm` كل الصفحات، ومعها المقارنة.
</details>

<details>
<summary><b>أي وكيل لا يدعم المهارات</b></summary>

الأمر `stm skill` يطبع نص المهارة. الصقه في أي ملف تعليمات يقرأه وكيلك.

```bash
stm skill
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

مستند JSON واحد على stdout، وسطران على الأكثر على stderr، ويُطبع حتى لو أخفقت بعض الصفحات. الحقل `code` يطابق رمز الخروج. والحقل `truncated` يعدّ العناصر التي لم تدخل القائمة (الحد الأقصى 25، والـ manifest يحوي جميعها). المخرجات لا تحتوي أبداً على نص الصفحات، بل على المسارات والأرقام فقط.

**عن الرموز.** الصفحات التي لم تتغيّر لا تكلّف شيئاً، لأن الوكيل لا يفتحها أصلاً. الملخّص يقارب 150 رمزاً، بالإضافة إلى نحو 50 رمزاً لكل صفحة متغيّرة. ومعاينة صفحة واحدة متغيّرة تكلّف صورة واحدة بمقاس 1440x900. لقطات الصفحات الكاملة شديدة الطول تصغّرها نماذج الرؤية حتى يصبح النص غير مقروء، ولهذا بالضبط تحصل كل صفحة على صورة `fold`، ولهذا تخبر المهارة الوكيل بفتح تلك الصورة أولاً.

## تاريخ بصري على القرص

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

كل تشغيل ينشئ مجلداً جديداً يحمل اسم التطبيق والدقيقة التي جرى فيها. وكل ملف بداخله يحمل الطابع الزمني نفسه، فتبقى أي لقطة تُسحب خارج مجلدها معرّفة بما هي ومتى التُقطت. تشغيلان في الدقيقة نفسها يحصلان على `-2` و`-3` في الطابع الزمني. والصفحات التي يتجاوز ارتفاعها 16,384 بكسل تُقطع عند ذلك الحد، وهو حد Chromium، وتُوسم بـ `truncated`.

افتح المجلد في Finder أو Explorer وستجد ألبوم صور لمشروعك. التاريخ مجرد ملفات PNG، فهو يعمّر أطول من هذه الأداة. وإلغاء التثبيت لا يترك خلفه سوى مجلد `screenshots/`، وسطر واحد في `.gitignore` إن كان لديك واحد.

## الأوامر

| الأمر | ماذا يفعل |
|---|---|
| `stm` | يلتقط لقطة لكل صفحة في التطبيق العامل على localhost |
| `stm /pricing /about` | يلتقط هذه الصفحات فقط، في ثوانٍ. هذه هي دورة التعديل والفحص |
| `stm --url http://localhost:4321` | يلتقط هذا التطبيق بدل الاكتشاف التلقائي. وتحديد مسار يبدأ الزحف من عنده |
| `stm --mobile` | يلتقط أيضاً عرض هاتف بمقاس 390x844 (ملفات `@mobile`) |
| `stm --max 100` | يتوقف عن اكتشاف الصفحات بعد هذا العدد (الافتراضي 100) |
| `stm --out screenshots` | مكان حفظ اللقطات (الافتراضي `screenshots`) |
| `stm --json` | ملخّص مقروء آلياً على stdout، مخصص للوكلاء |
| `stm list` | اللقطات السابقة: المجلد، عدد الصفحات، ما تغيّر، ما أخفق |
| `stm open` | يفتح مجلد أحدث لقطة |
| `stm skill` | يطبع مهارة الوكيل |

رموز الخروج: `0` تم التقاط كل شيء، `1` لم يُلتقط شيء (لا تطبيق، أو لا متصفح، أو وسائط خاطئة)، `2` انتهى التشغيل مع إخفاق بعض الصفحات أو مع مقاطعة. الصفحة المخفقة لا توقف التشغيل أبداً.

## كيف تجد الصفحات وتتتبّع ما تغيّر

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/how-it-works.svg" alt="اكتشاف التطبيق، ثم اكتشاف الصفحات، ثم الالتقاط، ثم المقارنة، ثم التقرير" width="820">
</p>

التفاصيل التي تجعل اللقطات جديرة بالثقة:

- تُمرَّر الصفحات إلى أسفلها قبل الالتقاط لتحميل الصور والأقسام المؤجّلة، ثم تُعاد إلى الأعلى. والمواقع ذات التمرير الانسيابي مدعومة.
- تُجمَّد الحركات عند حالتها النهائية، فتظهر تأثيرات الظهور التدريجي وتثبت المؤشرات الدوّارة. تشغيلان على الجهاز نفسه ينتجان ملفات PNG متطابقة بايتاً ببايت، وهذا ما يجعل لكلمة "تغيّر" معنى.
- تُخفى أشرطة أدوات التطوير (Astro وNuxt وشارة Next.js). أما طبقات **أخطاء** التطوير فلا تُخفى أبداً: تُلتقط الصفحة كما هي وتُوسم بتحذير، لأن الصفحة المعطوبة هي بالضبط ما تريد رؤيته.
- الاتصالات طويلة الأمد (مقابس HMR ومجاري الأحداث) لا تعطّل أي التقاط. كل صفحة تحصل على مهلة 30 ثانية ومحاولة إعادة واحدة، ثم تُسجَّل كمخفقة ويمضي التشغيل.
- يُكتب الـ manifest بعد كل صفحة، فحتى التشغيل المقاطَع يترك مجلداً يستطيع `stm list` قراءته، ويذكر الملخّص أنه توقف مبكراً.
- الروابط المؤدية إلى `/logout` و`/delete` وأمثالها لا تُتبع أبداً. وكذلك الملفات و`/api/` والمصادر الأخرى ومجلد `screenshots/` الخاص بك.

## كيف تقارَن بغيرها

| | stm | التحقق التلقائي في Claude Code Desktop | Playwright MCP وagent-browser وDevTools MCP | Percy وChromatic |
|---|---|---|---|---|
| كل الصفحات بأمر واحد | نعم | صفحة واحدة في كل مرة | صفحة واحدة لكل استدعاء أداة | نعم، داخل CI |
| يخبرك أي الصفحات تغيّرت | نعم | لا | لا | نعم، في السحابة |
| يعمل في الطرفية وCursor وCodex | نعم | على سطح المكتب فقط | نعم | داخل CI فقط |
| تاريخ على القرص يمكنك تصفّحه | نعم | لا | لا | في سحابتهم |
| يعمل بالكامل على جهازك | نعم | نعم | نعم | لا |

هذه أدوات متكاملة لا متنافسة. استخدم أداة متصفح حين يحتاج وكيلك إلى النقر والتنقّل. واستخدم `stm` حين يحتاج إلى رؤية كل ما لمسه للتو.

## الخصوصية

**يعمل محلياً بنسبة 100%.** لا يتصل `stm` إلا بعنوان تطبيقك، ومرة واحدة بشبكة توصيل متصفحات Playwright إن لم يكن لديك Chrome أو Edge. لقطاتك لا تغادر جهازك أبداً. لا حسابات، ولا مفاتيح API، ولا قياسات استخدام. والصفحات التي تلتقطها تحمّل مواردها تماماً كما تفعل في متصفحك. نموذج التهديد الكامل في [SECURITY.md](../../SECURITY.md).

## الأسئلة الشائعة

<details>
<summary><b>هل هي مجانية فعلاً؟</b></summary>
نعم. برخصة MIT، مفتوحة المصدر، بلا باقة مدفوعة، وبلا خدمة مستضافة، ولا شيء يستدعي التسجيل. ثبّتها، واستخدمها إلى الأبد، واعمل نسخة منها إن أحببت.
</details>

<details>
<summary><b>هل تعمل مع Next.js وVite وAstro وSvelteKit وRails وDjango والمواقع الثابتة؟</b></summary>
نعم. مع أي شيء يقدّم HTML على localhost. المنافذ المعتادة لكل هذه تُفحص تلقائياً، واستخدم <code>--url</code> لأي شيء آخر.
</details>

<details>
<summary><b>لم تجد سوى صفحتي الرئيسية.</b></summary>
تُكتشف الصفحات من خريطة موقعك ومن روابط <code>&lt;a href&gt;</code>. التطبيقات التي تتنقّل بالأزرار أو بمسارات الوسم (<code>/#/about</code>) لا تملك روابط تُتبع. سمّ الصفحات صراحة: <code>stm /about /pricing</code>. والوكلاء مُوجَّهون لتمرير الصفحات التي عدّلوها.
</details>

<details>
<summary><b>معظم لقطاتي تعرض صفحة تسجيل الدخول.</b></summary>
تطبيقك يعيد التوجيه إلى تسجيل الدخول. لا يستطيع <code>stm</code> تسجيل الدخول بعد، وهو يخبرك حين يحدث ذلك. اللقطات في حالة تسجيل الدخول مدرجة في خارطة الطريق.
</details>

<details>
<summary><b>كل شيء يظهر كمتغيّر بعد فترة.</b></summary>
الأسباب المعتادة: تحديث متصفحك، وهو ما يزيح طريقة العرض قليلاً (يسجّل <code>stm</code> إصدار المتصفح وينبّهك)، أو وجود شيء يتحرك من تلقاء نفسه في الصفحة، مثل ساعة، أو عبارة "قبل 3 دقائق"، أو صورة رئيسية عشوائية، أو حركة على canvas، أو شريط ملفات تعريف الارتباط الذي يختفي بعد الزيارة الأولى. مرّر تلك الصفحات صراحة وافحصها بعينك ريثما يصدر <code>stm diff</code>.
</details>

<details>
<summary><b>هل يمكن أن تعمل تلقائياً وتراقب ملفاتي؟</b></summary>
لا، وهذا مقصود. <code>stm</code> زر نقطة حفظ، مثل <code>git commit</code>: أنت، أو وكيلك، من يقرر متى تستحق اللحظة الحفظ. وإن أردتها تلقائية، ضع سطر التعليمات الواحد في ملف ذاكرة وكيلك ودع الوكيل يقرر.
</details>

<details>
<summary><b>هل يمكنني تحويل تاريخي إلى فيديو متسارع؟</b></summary>
الأمر <code>stm timelapse</code> بشكل مدمج مدرج في خارطة الطريق. أما اليوم، فمع ffmpeg:
<pre><code>ffmpeg -framerate 1 -pattern_type glob -i 'screenshots/*/pricing_*.png' \
  -vf "scale=720:-1,split[a][b];[a]palettegen[p];[b][p]paletteuse" pricing.gif</code></pre>
</details>

<details>
<summary><b>أستخدم Lovable أو Bolt أو v0. هل يمكنني استخدام هذه الأداة؟</b></summary>
تلك المنصات تشغّل تطبيقك في سحابتها، فلا يوجد localhost لتصويره. صدّر المشروع، وشغّله محلياً، وسيعمل <code>stm</code>. وأي شيء بُني بـ Claude Code أو Cursor أو Codex أو Windsurf أو Copilot على جهازك يعمل مباشرة.
</details>

<details>
<summary><b>لماذا لا أكتب سكربت Playwright وحسب؟</b></summary>
يمكنك ذلك. <code>stm</code> هو ذلك السكربت، مضافاً إليه اكتشاف الصفحات، وبنية مجلدات ثابتة، وكشف التغيير، ومخرجات صديقة للوكلاء، ومعالجة طبقات التطوير، وكل الحالات الحدّية، مع صيانة مستمرة. وهو أيضاً أمر واحد يعرفه وكيلك أصلاً.
</details>

<details>
<summary><b>Linux يقول إن المتصفح تنقصه مكتبات.</b></summary>
شغّل أمر <code>install-deps</code> الذي يطبعه، مرة واحدة. وWSL وCodespaces يحتاجانه أيضاً.
</details>

<details>
<summary><b>أين يوجد المتصفح المنزَّل؟</b></summary>
في ذاكرة Playwright المؤقتة: <code>~/Library/Caches/ms-playwright</code> على macOS، و<code>~/.cache/ms-playwright</code> على Linux، و<code>%LOCALAPPDATA%\ms-playwright</code> على Windows. احذفها متى شئت، وسينزّلها <code>stm</code> مجدداً عند الحاجة.
</details>

<details>
<summary><b>هل يمكنني توجيهها إلى موقع ليس على localhost؟</b></summary>
نعم: <code>stm --url https://staging.example.com</code>. تبقى داخل ذلك المصدر وتتجاهل الروابط ذات الطابع التدميري. من فضلك لا تصوّر إلا المواقع المسموح لك بتصويرها.
</details>

## خارطة الطريق

صغيرة عن قصد. صوّت بفتح issue.

- `stm diff`: يعرض بالضبط أي مناطق الصفحة تغيّرت، ويسلّم الوكلاء قصاصات بدل صفحات كاملة
- `stm timelapse`: يحوّل تاريخ صفحة إلى GIF أو MP4، مع تعليقات من رسائل commit
- `stm backfill`: يمشي في تاريخ git ويبني التاريخ البصري الذي لم تلتقطه قط
- لقطات في حالة تسجيل الدخول (`--storage-state`)
- معرض محلي بشريط زمني

غير مخطط له: مزامنة سحابية، حسابات، قياسات استخدام، وضع مراقبة، ملف إعدادات.

## المساهمة

تقارير الأخطاء المرفقة بتشغيل حقيقي هي أنفع شيء في الوقت الحالي. ابدأ من [CONTRIBUTING.md](../../CONTRIBUTING.md)، ثم [AGENTS.md](../../AGENTS.md) لخريطة الوحدات والقواعد. كل قرار وسببه موجود في [DECISIONS.md](../../DECISIONS.md).

## عن المشروع

بناه **Mohammed Sohaib Uddin**، لأن الوكلاء الذين يطلقون واجهات لا ينظر إليها أحد كانوا بحاجة إلى وسيلة للنظر.

<p align="left">
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/Connect%20on%20LinkedIn-FF6600?style=for-the-badge&logo=linkedin&logoColor=white" alt="تواصل على LinkedIn"></a>
  <a href="https://github.com/mdsohaib"><img src="https://img.shields.io/badge/Follow%20on%20GitHub-0A0E14?style=for-the-badge&logo=github&logoColor=white" alt="تابع على GitHub"></a>
</p>

إن أنقذك `stm` من إطلاق صفحة معطوبة، فنجمة واحدة لا تكلّفك شيئاً وتساعد غيرك على العثور عليه.

MIT © Mohammed Sohaib Uddin
