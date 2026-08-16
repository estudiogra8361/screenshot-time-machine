<p align="center">
  <a href="../../README.md">English</a> ·
  <a href="README.zh-CN.md">简体中文</a> ·
  <a href="README.es.md">Español</a> ·
  हिन्दी ·
  <a href="README.pt-BR.md">Português</a> ·
  <a href="README.ja.md">日本語</a> ·
  <a href="README.de.md">Deutsch</a> ·
  <a href="README.fr.md">Français</a> ·
  <a href="README.ko.md">한국어</a> ·
  <a href="README.ru.md">Русский</a> ·
  <a href="README.ar.md">العربية</a>
</p>

*अंग्रेज़ी README से अनुवादित। संदेह की स्थिति में अंग्रेज़ी संस्करण ही मानक संदर्भ है।*

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/banner.svg" alt="screenshot-time-machine: आपके localhost ऐप का हर पेज, एक ही कमांड में स्क्रीनशॉट, तारीख के साथ सहेजा और तुलना किया हुआ" width="100%">
</p>

<h1 align="center">screenshot-time-machine</h1>

<p align="center">
  <b>फुल-पेज स्क्रीनशॉट CLI: अपनी localhost वेबसाइट के हर पेज का स्क्रीनशॉट एक कमांड से लें।</b><br>
  जिस ऐप को आप बना रहे हैं, उसके हर पेज का पूरा स्क्रीनशॉट एक ही बार में लीजिए।<br>
  तारीख वाले फ़ोल्डरों में सहेजा जाता है। अगली बार चलाने पर यह ठीक-ठीक बताता है कि कौन से पेज बदले।<br>
  <b>मुफ़्त और ओपन सोर्स। पूरी तरह आपकी अपनी मशीन पर चलता है।</b>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/screenshot-time-machine"><img src="https://img.shields.io/npm/v/screenshot-time-machine?style=flat-square&label=npm&color=FF6600&labelColor=0A0E14" alt="npm संस्करण"></a>
  <a href="https://github.com/mdsohaib/screenshot-time-machine/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/mdsohaib/screenshot-time-machine/ci.yml?branch=main&style=flat-square&label=tests&color=FF6600&labelColor=0A0E14" alt="टेस्ट"></a>
  <img src="https://img.shields.io/badge/dependencies-1-FF6600?style=flat-square&labelColor=0A0E14" alt="एक ही डिपेंडेंसी">
  <img src="https://img.shields.io/badge/node-22%2B-FF6600?style=flat-square&labelColor=0A0E14&logo=nodedotjs&logoColor=white" alt="Node 22+">
  <a href="../../LICENSE"><img src="https://img.shields.io/badge/license-MIT-FF6600?style=flat-square&labelColor=0A0E14" alt="MIT लाइसेंस"></a>
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/LinkedIn-Mohammed%20Sohaib%20Uddin-FF6600?style=flat-square&labelColor=0A0E14&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
</p>

```bash
npx screenshot-time-machine@latest               # your app is on localhost? that is the whole setup
npx skills add mdsohaib/screenshot-time-machine  # teach Claude Code, Cursor, Codex and friends to run it
```

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/hero.svg" alt="टर्मिनल में stm एक बदले हुए पेज की रिपोर्ट देता हुआ, बगल में तारीख वाले स्नैपशॉट का फ़ोल्डर" width="820">
</p>

<p align="center">
  <b>इनके साथ काम करता है</b><br>
  <img src="https://img.shields.io/badge/Claude%20Code-0A0E14?style=flat-square&logo=claude&logoColor=FF6600" alt="Claude Code">
  <img src="https://img.shields.io/badge/Codex-0A0E14?style=flat-square" alt="Codex">
  <img src="https://img.shields.io/badge/Cursor-0A0E14?style=flat-square&logo=cursor&logoColor=FF6600" alt="Cursor">
  <img src="https://img.shields.io/badge/Gemini%20CLI-0A0E14?style=flat-square&logo=googlegemini&logoColor=FF6600" alt="Gemini CLI">
  <img src="https://img.shields.io/badge/Antigravity-0A0E14?style=flat-square" alt="Antigravity">
  <img src="https://img.shields.io/badge/Copilot-0A0E14?style=flat-square&logo=githubcopilot&logoColor=FF6600" alt="GitHub Copilot">
  <img src="https://img.shields.io/badge/Windsurf-0A0E14?style=flat-square&logo=windsurf&logoColor=FF6600" alt="Windsurf">
  <img src="https://img.shields.io/badge/OpenCode-0A0E14?style=flat-square&logo=opencode&logoColor=FF6600" alt="OpenCode">
  <img src="https://img.shields.io/badge/Cline-0A0E14?style=flat-square" alt="Cline">
  <br><i>और उन लोगों के साथ भी जो इन्हें प्रॉम्प्ट करते हैं</i>
</p>

---

## यह है क्या

`stm` एक मुफ़्त, ओपन-सोर्स कमांड-लाइन टूल है। इसे आप तब चलाते हैं जब आपकी वेबसाइट आपके कंप्यूटर पर चल रही हो। यह:

1. **आपकी साइट ढूँढता है**, localhost पर अपने आप, या जहाँ आप `--url` से इशारा करें वहाँ।
2. **आपके पेज ढूँढता है**, उन पर मौजूद `<a href>` लिंक का पीछा करके, और अगर `sitemap.xml` है तो उसे पढ़कर, प्रति रन अधिकतम 100 पेज तक। जो पेज सिर्फ़ बटन क्लिक से खुलते हैं, और `/#/about` जैसे हैश रूट, इनका पीछा नहीं किया जा सकता। उनके नाम खुद बताइए: `stm /about /pricing`।
3. **हर पेज का पूरा स्क्रीनशॉट लेता है**, ऊपर से नीचे तक, साथ ही सिर्फ़ पेज के ऊपरी हिस्से की एक और तस्वीर, यानी वह हिस्सा जो एक स्क्रीन में समाता है। उस दूसरी तस्वीर को `fold` इमेज कहते हैं, और सबसे पहले उसी को देखना चाहिए।
4. **उन्हें सामान्य PNG फ़ाइलों के रूप में सहेजता है**, एक ऐसे फ़ोल्डर में जिसका नाम तारीख और समय पर रखा जाता है।
5. **पिछली बार से तुलना करता है** और ठीक-ठीक बताता है कि कौन से पेज बदले।

```
$ stm
7 pages saved → screenshots/localhost-3000_2026-08-15_14-32/
   1 changed since last snapshot (Aug 12, 09:10): /pricing
```

कोई अकाउंट नहीं। कोई क्लाउड नहीं। कोई सब्सक्रिप्शन नहीं। कोई कॉन्फ़िग फ़ाइल नहीं। कोई बैकग्राउंड प्रोसेस नहीं। एक ही डिपेंडेंसी, MIT लाइसेंस, हमेशा के लिए आपका।

## यह किस समस्या को हल करता है

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/the-problem.svg" alt="बारह पेज थंबनेल। एक पर निशान है कि आपने वही पेज देखा था। चार टूटे हुए निकले।" width="820">
</p>

एक साझा कंपोनेंट, लेआउट या स्टाइलशीट बदलिए, और आपको अंदाज़ा तक नहीं होता कि बाकी चालीस पेजों पर उसका क्या असर पड़ा। सच जानने का एक ही ईमानदार तरीका है, हर पेज खोलकर देखना, इसलिए कोई करता ही नहीं।

AI कोडिंग एजेंट ने इसे और तीखा बना दिया। आप pricing पेज पर एक सुधार माँगते हैं, एजेंट किसी साझा फ़ाइल को बदल देता है, और About पेज में चुपचाप एक खाली जगह उग आती है। एजेंट नतीजा कभी देखता नहीं, और आप भी नहीं।

Git आपके कोड की हर लाइन ट्रैक करता है, आपकी साइट का एक भी पिक्सल नहीं। विज़ुअल टेस्टिंग सेवाओं को एक CI पाइपलाइन और महीने का बिल चाहिए। हाथ से स्क्रीनशॉट लेना चौथे पेज तक भी नहीं टिकता, और फ़ाइलें कोई सहेजकर नहीं रखता।

## यह मदद कैसे करता है

- **टूटे पेज आपके यूज़र से पहले पकड़िए।** एक कमांड, हर पेज, और जो बदला उसकी सूची।
- **अपने AI एजेंट को आँखें दीजिए।** `stm --json` उसे बदले हुए पेजों के फ़ाइल पाथ थमा देता है, ताकि वह सिर्फ़ वही खोले और जो उसने तोड़ा उसे ठीक करे।
- **एक विज़ुअल इतिहास रखिए।** हर रन सादे PNG का एक तारीख वाला फ़ोल्डर है। पीछे स्क्रॉल कीजिए और देखिए कि मार्च में आपकी साइट कैसी दिखती थी, सीधे Finder या Explorer से।

## तुरंत शुरुआत

आपका ऐप localhost पर चल रहा होना चाहिए (`npm run dev`, `rails s`, `python manage.py runserver`, कोई स्टैटिक सर्वर, कुछ भी जो HTML सर्व करे)। फिर:

```bash
npx screenshot-time-machine@latest
```

**Node 22 या नया चाहिए।** जाँचने के लिए `node -v` चलाइए। अगर यह 21 या उससे कम दिखाए, तो पहले [nodejs.org](https://nodejs.org) से Node अपडेट कीजिए।

पहला रन आपकी मशीन पर पहले से मौजूद Chrome या Edge का इस्तेमाल करता है। अगर दोनों में से कोई नहीं है, तो यह एक बार एक ब्राउज़र डाउनलोड करता है, लगभग 120 MB, और डाउनलोड से पहले आपको बता देता है। इंटरनेट से stm सिर्फ़ यही एक चीज़ कभी लाता है।

कुछ बदलिए, दोबारा चलाइए, और `changed` लाइन पढ़िए। बस यही पूरा वर्कफ़्लो है।

इसके नीचे हर जगह कमांड को छोटे रूप में `stm` लिखा गया है। वह छोटा नाम पाने के लिए इसे एक बार इंस्टॉल कीजिए:

```bash
npm install -g screenshot-time-machine
```

इंस्टॉल न करना भी ठीक है। जहाँ भी `stm` दिखे, वहाँ `npx screenshot-time-machine@latest` लिखिए। `npx stm` कभी मत लिखिए: वह 2014 का एक अलग ही पैकेज है।

<details>
<summary><b>पहले रन पर और क्या होता है</b></summary>

- `stm` पोर्ट 3000, 3001, 5173, 5174, 8080, 4321, 4322, 8000, 4200 और 5000 को इसी क्रम में जाँचता है, और जो ऐप सबसे पहले जवाब दे उसी को लेता है। अगर कई जवाब दें, तो यह उसे प्राथमिकता देता है जिसे इस प्रोजेक्ट ने पिछली बार इस्तेमाल किया था, और बाकियों के बारे में आपको बता देता है।
- अगर आपके प्रोजेक्ट में `.gitignore` है, तो यह उसमें एक बार `screenshots/` जोड़ देता है और आपको बता देता है। यह कभी `.gitignore` बनाता नहीं, और कभी कुछ मिटाता नहीं।
</details>

## इसे अपने AI कोडिंग एजेंट में इंस्टॉल कीजिए

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/agent-loop.svg" alt="लूप: एजेंट UI बदलता है, stm --json चलाता है, बदले हुए पेजों की सूची पाता है, fold इमेज देखता है, ठीक करता है और फिर चलाता है" width="820">
</p>

एक कमांड `stm` को एक स्किल के रूप में इंस्टॉल कर देती है: एक छोटी निर्देश फ़ाइल जिसे आपका एजेंट पढ़ता है, ताकि उसे पता रहे कि `stm` कब चलाना है और नतीजा कैसे पढ़ना है। `npx skills add` एक अलग ओपन-सोर्स इंस्टॉलर है जो वह एक फ़ोल्डर आपके प्रोजेक्ट में कॉपी करता है और बाकी कुछ नहीं बदलता। अपना एजेंट चुनिए:

| एजेंट | कमांड | स्किल कहाँ जाती है |
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
| **कोई और** | `npx skills add mdsohaib/screenshot-time-machine` | 70+ एजेंट की सूची में से चुनिए |

इनमें से किसी में भी `-g` जोड़ दीजिए, तो यह सिर्फ़ इस प्रोजेक्ट के बजाय हर प्रोजेक्ट के लिए इंस्टॉल हो जाएगा।

या फिर अपने एजेंट को सीधे शब्दों में कह दीजिए:

> screenshot-time-machine इंस्टॉल करो, मेरे ऐप पर `stm` चलाओ, और मुझे दिखाओ कि क्या बदला।

फिर उस फ़ाइल में एक लाइन जोड़ दीजिए जिसे आपका एजेंट हर अनुरोध पर पढ़ता है, ताकि वह बिना कहे अपने काम की खुद जाँच करे:

```
After changing anything a user can see, run `stm --json` (or `npx -y screenshot-time-machine@latest --json` if `stm` is not installed) and view the `fold` image of every entry in `changed` and `new` before saying you're done. On the very first snapshot both lists are empty, so view the fold images of the pages you edited instead. Never claim a UI change is verified without viewing a screenshot.
```

वह लाइन किस एजेंट में कहाँ जाती है:

| एजेंट | फ़ाइल |
|---|---|
| Claude Code | `CLAUDE.md` |
| Codex, Antigravity, OpenCode | `AGENTS.md` |
| Gemini CLI | `GEMINI.md` |
| Cursor | `.cursor/rules/stm.mdc`, शुरुआत `---` से, फिर `alwaysApply: true`, फिर `---` |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Windsurf | `.windsurf/rules/stm.md` |
| Cline | `.clinerules/stm.md` |

<details>
<summary><b>Claude Code: प्लगइन इंस्टॉल, और यह लूप कैसा लगता है</b></summary>

स्किल्स सबसे सरल रास्ता है। अगर आपको प्लगइन ज़्यादा पसंद हों, तो Claude Code के अंदर यह चलाइए:

```
/plugin marketplace add mdsohaib/screenshot-time-machine
/plugin install stm@stm
```

GitHub पर SSH की नहीं है? URL वाला रूप इस्तेमाल कीजिए: `/plugin marketplace add https://github.com/mdsohaib/screenshot-time-machine.git`

Claude Code स्क्रीनशॉट अपने Read टूल से खोलता है, और `stm --json` उसे पूर्ण पाथ थमाता है। लूप यह है: बदलिए, `stm --json`, बदली हुई `fold` इमेज पढ़िए, ठीक कीजिए, दोहराइए। उससे कहिए "UI जाँच लो" और वह खुद ही इस स्किल तक पहुँच जाएगा।
</details>

<details>
<summary><b>Codex</b></summary>

मेमोरी वाली लाइन `AGENTS.md` में रखिए। Codex इमेज `view_image` से खोलता है, तो अगर वह हिचके, कह दीजिए "हर बदले हुए पेज की fold इमेज देखो"।
</details>

<details>
<summary><b>Cursor</b></summary>

मेमोरी वाली लाइन `.cursor/rules/` के नीचे एक रूल में रखिए। एजेंट अपने टर्मिनल में `stm --json` चलाता है और जो PNG पाथ मिलते हैं उन्हें खोलता है। Cursor का अपना ब्राउज़र एक बार में एक पेज दिखाता है; `stm` उसे सारे पेज थमाता है, साथ में बदलाव की सूची भी।
</details>

<details>
<summary><b>कोई भी एजेंट, जिसमें स्किल्स का सपोर्ट नहीं है</b></summary>

`stm skill` स्किल का टेक्स्ट प्रिंट कर देता है। उसे उस निर्देश फ़ाइल में चिपका दीजिए जिसे आपका एजेंट पढ़ता है। यह बिना कुछ इंस्टॉल किए काम करता है:

```bash
npx screenshot-time-machine@latest skill
```
</details>

### एजेंट को वापस क्या मिलता है

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

stdout पर एक ही JSON दस्तावेज़, stderr पर ज़्यादा से ज़्यादा दो लाइनें, और यह तब भी छपता है जब कुछ पेज विफल हो जाएँ। `code` एग्ज़िट कोड को दोहराता है।

जो रन शुरू ही नहीं हो पाता, वह इसकी जगह एक कहीं छोटा ऑब्जेक्ट छापता है: `{"code": 1, "error": "no_server" | "no_browser", "message": "...", "fix": "..."}`। गलत आर्ग्युमेंट `{"error": "bad_args", "message": "...", "fix": "Run stm --help"}` छापते हैं। `changed` पढ़ने से पहले `error` जाँच लीजिए। `truncated` उन एंट्रियों की गिनती है जो सूची से बाहर रह गईं (सीमा 25 है; मैनिफ़ेस्ट में सब मौजूद हैं)। आउटपुट में पेज का टेक्स्ट कभी नहीं होता, सिर्फ़ पाथ और संख्याएँ।

**टोकन के बारे में।** जो पेज नहीं बदले उन्हें देखने की कोई लागत नहीं, क्योंकि एजेंट उन्हें खोलता ही नहीं। सारांश लगभग 150 टोकन का होता है, और हर बदले हुए पेज पर करीब 50 और। एक बदले हुए पेज को देखने की लागत एक 1440x900 इमेज जितनी है। बहुत लंबे फुल-पेज स्क्रीनशॉट को विज़न मॉडल इतना छोटा कर देते हैं कि टेक्स्ट पढ़ा ही नहीं जाता, और ठीक इसीलिए हर पेज की एक `fold` इमेज भी बनती है, और इसीलिए स्किल एजेंट से कहती है कि पहले वही खोले।

## डिस्क पर एक विज़ुअल इतिहास

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

हर रन एक नया फ़ोल्डर होता है, जिसका नाम ऐप और उस मिनट पर रखा जाता है जब वह चला। अंदर की हर फ़ाइल पर वही टाइमस्टैंप होता है, इसलिए फ़ोल्डर से बाहर खींचा गया स्क्रीनशॉट भी बताता रहता है कि वह क्या है और कब का है। एक ही मिनट में दो रन होने पर टाइमस्टैंप पर `-2`, `-3` लग जाता है। 16,384 px से लंबे पेज उसी ऊँचाई पर काट दिए जाते हैं, जो Chromium की सीमा है, और उन्हें `truncated` चिह्नित किया जाता है।

फ़ोल्डर को Finder या Explorer में खोलिए और आपके पास अपने प्रोजेक्ट का एक फ़ोटो एलबम है। इतिहास सादे PNG में है, इसलिए यह इस टूल से भी ज़्यादा टिकेगा। इसे हटाने पर पीछे कुछ नहीं बचता, सिवाय `screenshots/` फ़ोल्डर के और, अगर आपके पास `.gitignore` था, तो उसमें जुड़ी एक लाइन के।

## कमांड

| कमांड | यह क्या करती है |
|---|---|
| `stm` | localhost पर चल रहे ऐप के हर पेज का स्नैपशॉट लेती है |
| `stm /pricing /about` | सिर्फ़ इन पेजों का स्नैपशॉट, कुछ ही सेकंड में। यही एडिट-जाँच लूप है |
| `stm --url http://localhost:4321` | अपने आप पहचानने के बजाय इस ऐप का स्नैपशॉट लेती है। पाथ देने पर क्रॉल वहीं से शुरू होता है |
| `stm --mobile` | 390x844 का फ़ोन व्यू भी कैप्चर करती है (`@mobile` फ़ाइलें) |
| `stm --max 100` | इतने पेज मिलने के बाद खोजना बंद कर देती है (डिफ़ॉल्ट 100) |
| `stm --out screenshots` | स्नैपशॉट कहाँ जाएँ (डिफ़ॉल्ट `screenshots`) |
| `stm --json` | stdout पर मशीन के पढ़ने लायक सारांश, एजेंट के लिए |
| `stm list` | पिछले स्नैपशॉट: फ़ोल्डर, पेजों की गिनती, बदले, विफल |
| `stm open` | नवीनतम स्नैपशॉट फ़ोल्डर खोलती है |
| `stm skill` | एजेंट स्किल प्रिंट करती है |

एग्ज़िट कोड: `0` सब कुछ कैप्चर हुआ, `1` कुछ भी कैप्चर नहीं हुआ (कोई ऐप नहीं, कोई ब्राउज़र नहीं, गलत आर्ग्युमेंट), `2` रन पूरा हुआ पर कुछ पेज विफल रहे या रन बीच में रुक गया। कोई विफल पेज रन को कभी नहीं रोकता।

## यह पेज कैसे ढूँढता है और बदलाव कैसे ट्रैक करता है

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/how-it-works.svg" alt="पहचानना, खोजना, कैप्चर करना, तुलना करना, रिपोर्ट करना" width="820">
</p>

वे बारीकियाँ जो स्क्रीनशॉट को भरोसेमंद बनाती हैं:

- कैप्चर से पहले पेज नीचे तक स्क्रॉल किए जाते हैं ताकि lazy इमेज और lazy सेक्शन लोड हो जाएँ, फिर वापस ऊपर। स्मूद-स्क्रॉल वाली साइटें भी सँभाल ली जाती हैं।
- एनिमेशन अपनी अंतिम अवस्था पर रोक दिए जाते हैं, ताकि फ़ेड-इन दिखें और स्पिनर स्थिर रहें। एक ही मशीन पर दो रन ऐसे पेज की बिल्कुल एक जैसी PNG बनाते हैं जिसका कंटेंट नहीं बदला, और यही बात "changed" को अर्थ देती है। जिस पेज पर घड़ी, सापेक्ष समय, बदलती हुई हीरो इमेज या canvas एनिमेशन हो, वह हमेशा बदला हुआ दिखेगा।
- डेव टूलबार (Astro, Nuxt, Next.js का बैज) छिपा दिए जाते हैं। डेव **एरर** ओवरले कभी नहीं छिपाए जाते: पेज जैसा है वैसा ही कैप्चर होता है और उस पर चेतावनी लग जाती है, क्योंकि टूटा हुआ पेज ही तो वह चीज़ है जिसे आप देखना चाहते हैं।
- लंबे समय तक खुले रहने वाले कनेक्शन (HMR सॉकेट, इवेंट स्ट्रीम) किसी कैप्चर को कभी अटकाते नहीं। हर पेज को 30 सेकंड का समय और एक दोबारा कोशिश मिलती है, उसके बाद उसे विफल दर्ज कर लिया जाता है और रन आगे बढ़ जाता है।
- मैनिफ़ेस्ट हर पेज के बाद लिखा जाता है, इसलिए बीच में रुका हुआ रन भी ऐसा फ़ोल्डर छोड़ जाता है जिसे `stm list` पढ़ सके, और सारांश बता देता है कि वह जल्दी रुक गया।
- `/logout`, `/delete` और उन जैसे लिंक का पीछा कभी नहीं किया जाता। न फ़ाइलों का, न `/api/` का, न दूसरे ऑरिजिन का, और न आपके अपने `screenshots/` फ़ोल्डर का।

## विज़ुअल रिग्रेशन टूल्स से तुलना

| | stm | Claude Code Desktop ऑटो-वेरिफ़ाई | Playwright MCP, agent-browser, DevTools MCP | Percy, Chromatic |
|---|---|---|---|---|
| एक कमांड में हर पेज | हाँ | एक बार में एक पेज | प्रति टूल कॉल एक पेज | हाँ, CI में |
| बताता है कौन से पेज बदले | हाँ | नहीं | नहीं | हाँ, क्लाउड में |
| टर्मिनल, Cursor, Codex में चलता है | हाँ | सिर्फ़ Desktop | हाँ | सिर्फ़ CI |
| डिस्क पर ऐसा इतिहास जिसे आप देख सकें | हाँ | नहीं | नहीं | उनके क्लाउड में |
| पूरी तरह आपकी मशीन पर चलता है | हाँ | हाँ | हाँ | नहीं |

`stm` विज़ुअल रिग्रेशन टेस्टिंग का मुफ़्त, लोकल आधा हिस्सा है: यह बताता है कि कौन से पेज बदले और पिक्सल आपके हाथ में रख देता है, बिना किसी CI पाइपलाइन, बिना अकाउंट और बिना महीने के बिल के। ये टूल एक-दूसरे के पूरक हैं, प्रतिद्वंद्वी नहीं। जब आपके एजेंट को क्लिक करके घूमना हो, तब ब्राउज़र टूल इस्तेमाल कीजिए। जब उसे वह सब देखना हो जिसे उसने अभी छुआ है, तब `stm`।

## गोपनीयता

**100% लोकल चलता है।** `stm` सिर्फ़ आपके ऐप के URL से बात करता है और, एक बार, Playwright के ब्राउज़र CDN से, वह भी तब जब आपके पास Chrome या Edge न हो। आपके स्क्रीनशॉट कभी आपकी मशीन से बाहर नहीं जाते। कोई अकाउंट नहीं, कोई API की नहीं, कोई टेलीमेट्री नहीं। आप जो पेज कैप्चर करते हैं वे अपने संसाधन ठीक वैसे ही लोड करते हैं जैसे आपके ब्राउज़र में करते। पूरा थ्रेट मॉडल [SECURITY.md](../../SECURITY.md) में है।

## अक्सर पूछे जाने वाले सवाल

<details>
<summary><b>क्या यह सचमुच मुफ़्त है?</b></summary>
हाँ। MIT लाइसेंस, ओपन सोर्स, कोई पेड टियर नहीं, कोई होस्टेड सेवा नहीं, साइन अप करने को कुछ नहीं। इंस्टॉल कीजिए, हमेशा इस्तेमाल कीजिए, मन हो तो फ़ोर्क कर लीजिए।
</details>

<details>
<summary><b>क्या यह Next.js, Vite, Astro, SvelteKit, Rails, Django, स्टैटिक साइटों के साथ काम करता है?</b></summary>
हाँ। जो भी localhost पर HTML सर्व करता है। इन सबके सामान्य पोर्ट अपने आप जाँच लिए जाते हैं; बाकी किसी के लिए <code>--url</code> इस्तेमाल कीजिए।
</details>

<details>
<summary><b>इसे सिर्फ़ मेरा होम पेज मिला।</b></summary>
पेज आपके साइटमैप से और <code>&lt;a href&gt;</code> लिंक से खोजे जाते हैं। जो ऐप बटन या हैश रूट (<code>/#/about</code>) से नेविगेट करते हैं, उनमें पीछा करने लायक लिंक होते ही नहीं। पेजों के नाम बता दीजिए: <code>stm /about /pricing</code>। एजेंटों से कहा गया है कि वे जिन पेजों को छुएँ, उन्हें पास करें।
</details>

<details>
<summary><b>मेरे ज़्यादातर स्क्रीनशॉट में लॉगिन पेज दिख रहा है।</b></summary>
आपका ऐप साइन-इन पर रीडायरेक्ट कर रहा है। <code>stm</code> अभी साइन इन नहीं कर सकता, और ऐसा होने पर यह आपको बता देता है। साइन-इन वाले कैप्चर रोडमैप पर हैं।
</details>

<details>
<summary><b>कुछ समय बाद सब कुछ बदला हुआ दिखने लगता है।</b></summary>
आम वजहें: आपका ब्राउज़र अपडेट हो गया, जिससे रेंडरिंग थोड़ी खिसक जाती है (<code>stm</code> ब्राउज़र संस्करण दर्ज करता है और आपको चेतावनी देता है), या पेज पर कुछ ऐसा है जो अपने आप बदलता रहता है, जैसे घड़ी, "3 मिनट पहले", कोई रैंडम हीरो इमेज, canvas एनिमेशन, या कुकी बैनर जो पहली विज़िट के बाद गायब हो जाता है। ऐसे पेज अलग से पास कीजिए और खुद नज़र डालते रहिए, जब तक <code>stm diff</code> नहीं आ जाता।
</details>

<details>
<summary><b>क्या यह अपने आप चल सकता है, मेरी फ़ाइलों पर नज़र रखते हुए?</b></summary>
नहीं, और यह जानबूझकर है। <code>stm</code> एक सेव-पॉइंट बटन है, <code>git commit</code> की तरह: आप, या आपका एजेंट, तय करते हैं कि कौन सा पल सहेजने लायक है। अगर आपको यह अपने आप चाहिए, तो एक लाइन वाला निर्देश अपने एजेंट की मेमोरी फ़ाइल में डाल दीजिए और फ़ैसला एजेंट पर छोड़ दीजिए।
</details>

<details>
<summary><b>क्या मैं अपने इतिहास को टाइमलैप्स में बदल सकता हूँ?</b></summary>
एक पूरा <code>stm timelapse</code> रोडमैप पर है। आज, ffmpeg के साथ:
<pre><code>ffmpeg -framerate 1 -pattern_type glob -i 'screenshots/*/pricing_*.png' \
  -vf "scale=720:-1,split[a][b];[a]palettegen[p];[b][p]paletteuse" pricing.gif</code></pre>
</details>

<details>
<summary><b>मैं Lovable, Bolt या v0 इस्तेमाल करता हूँ। क्या मैं इसे इस्तेमाल कर सकता हूँ?</b></summary>
वे आपका ऐप अपने क्लाउड में चलाते हैं, इसलिए स्क्रीनशॉट लेने को कोई localhost होता ही नहीं। प्रोजेक्ट एक्सपोर्ट कीजिए, उसे लोकल चलाइए, और <code>stm</code> काम करने लगेगा। Claude Code, Cursor, Codex, Windsurf या Copilot से आपकी अपनी मशीन पर बनी कोई भी चीज़ सीधे काम करती है।
</details>

<details>
<summary><b>बस एक Playwright स्क्रिप्ट क्यों न लिख लूँ?</b></summary>
लिख सकते हैं। <code>stm</code> वही स्क्रिप्ट है, साथ में पेज खोज, एक स्थिर फ़ोल्डर संरचना, बदलाव पहचान, एजेंट के अनुकूल आउटपुट, डेव-ओवरले सँभालना, और वे सारे किनारे के मामले, जिनका रखरखाव भी होता रहता है। और यह एक ऐसी कमांड भी है जिसे आपका एजेंट पहले से जानता है।
</details>

<details>
<summary><b>Linux कह रहा है कि ब्राउज़र की लाइब्रेरियाँ नहीं हैं।</b></summary>
यह जो <code>install-deps</code> कमांड छापता है, उसे एक बार चला दीजिए। WSL और Codespaces को भी इसकी ज़रूरत होती है।
</details>

<details>
<summary><b>डाउनलोड किया गया ब्राउज़र कहाँ रहता है?</b></summary>
Playwright के कैश में: macOS पर <code>~/Library/Caches/ms-playwright</code>, Linux पर <code>~/.cache/ms-playwright</code>, Windows पर <code>%LOCALAPPDATA%\ms-playwright</code>। इसे कभी भी मिटा दीजिए; ज़रूरत पड़ने पर <code>stm</code> इसे दोबारा डाउनलोड कर लेता है।
</details>

<details>
<summary><b>क्या मैं इसे किसी ऐसी साइट पर लगा सकता हूँ जो localhost पर नहीं है?</b></summary>
हाँ: <code>stm --url https://staging.example.com</code>। यह उसी ऑरिजिन पर टिका रहता है और विनाशकारी दिखने वाले लिंक छोड़ देता है। कृपया सिर्फ़ उन्हीं साइटों के स्क्रीनशॉट लीजिए जिनकी आपको अनुमति है।
</details>

## रोडमैप

जानबूझकर छोटा। वोट देने के लिए एक इशू खोलिए।

- `stm diff`: ठीक-ठीक दिखाए कि पेज के कौन से हिस्से बदले, और एजेंटों को पूरे पेज के बजाय क्रॉप थमाए
- `stm timelapse`: किसी पेज के इतिहास को GIF या MP4 में बदले, git कमिट कैप्शन के साथ
- `stm backfill`: आपके git इतिहास में चलकर वह विज़ुअल इतिहास बनाए जो आपने कभी कैप्चर नहीं किया
- साइन-इन वाले कैप्चर (`--storage-state`)
- टाइम स्लाइडर वाली एक लोकल गैलरी

योजना में नहीं: क्लाउड सिंक, अकाउंट, टेलीमेट्री, वॉच मोड, कॉन्फ़िग फ़ाइल।

## योगदान

अभी सबसे उपयोगी चीज़ है असली रन के साथ भेजी गई बग रिपोर्ट। शुरुआत [CONTRIBUTING.md](../../CONTRIBUTING.md) से कीजिए, फिर मॉड्यूल मैप और नियमों के लिए [AGENTS.md](../../AGENTS.md) देखिए। हर फ़ैसला और उसकी वजह [DECISIONS.md](../../DECISIONS.md) में दर्ज है।

## परिचय

**Mohammed Sohaib Uddin** ने बनाया, क्योंकि जो एजेंट ऐसा UI शिप करते हैं जिसे कोई देखता नहीं, उन्हें देखने का एक तरीका चाहिए था।

<p align="left">
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/Connect%20on%20LinkedIn-FF6600?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn पर जुड़िए"></a>
  <a href="https://github.com/mdsohaib"><img src="https://img.shields.io/badge/Follow%20on%20GitHub-0A0E14?style=for-the-badge&logo=github&logoColor=white" alt="GitHub पर फ़ॉलो कीजिए"></a>
</p>

अगर `stm` आपको कोई टूटा पेज शिप करने से बचा ले, तो एक स्टार में कुछ खर्च नहीं होता और उससे दूसरे लोगों को यह ढूँढने में मदद मिलती है।

MIT © Mohammed Sohaib Uddin
