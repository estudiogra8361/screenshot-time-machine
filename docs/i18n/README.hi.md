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
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/banner.svg" alt="screenshot-time-machine: आपकी वेबसाइट के हर पेज का फुल-पेज स्क्रीनशॉट, एक ही कमांड में" width="100%">
</p>

<h1 align="center">screenshot-time-machine</h1>

<p align="center">
  <b>अपनी वेबसाइट के हर पेज का स्क्रीनशॉट, एक ही कमांड में।</b><br>
  <code>stm</code> आपकी साइट को पेज दर पेज घूमता है और हर एक पेज का फुल-पेज स्क्रीनशॉट<br>
  तारीख और समय की मुहर लगे एक फ़ोल्डर में सहेज देता है।<br>
  इसे किसी भी URL पर लगा दीजिए, या localhost पर चल रहा आपका ऐप यह खुद ढूँढ लेगा।<br>
  जब भी आप कुछ शिप करें तब इसे चला दीजिए, और एक विज़ुअल इतिहास अपने आप बनता चला जाएगा:<br>
  हर पेज, हर वर्ज़न, आपकी अपनी डिस्क पर, सादी PNG फ़ाइलों के रूप में।<br>
  <b>मुफ़्त और ओपन सोर्स। पूरी तरह आपकी अपनी मशीन पर चलता है।</b>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/screenshot-time-machine"><img src="https://img.shields.io/npm/v/screenshot-time-machine?style=flat-square&label=npm&color=FF8C1A&labelColor=0A0E14" alt="npm संस्करण"></a>
  <a href="../../LICENSE"><img src="https://img.shields.io/badge/license-MIT-FFC24A?style=flat-square&labelColor=0A0E14" alt="MIT लाइसेंस"></a>
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/LinkedIn-Mohammed%20Sohaib%20Uddin-F0509F?style=flat-square&labelColor=0A0E14&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
</p>

```bash
npx screenshot-time-machine@latest                              # the app you have running on localhost
npx screenshot-time-machine@latest --url https://your-site.com  # or any site you are allowed to capture
npx skills add mdsohaib/screenshot-time-machine                 # teach Claude Code, Cursor, Codex and friends to run it
```

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/demo.gif" alt="तीन तारीख वाले स्नैपशॉट में वही एक पेज, जो दिखाता है कि डिज़ाइन कैसे आगे बढ़ा" width="820">
</p>

<p align="center"><i>एक ही शाम के रीडिज़ाइन के दौरान लिए गए तीन रन, उन्हीं तारीख वाले फ़ोल्डरों से दोबारा चलाकर दिखाए गए जिनमें stm ने उन्हें सहेजा था।</i></p>

<h3 align="center">इनके साथ काम करता है</h3>

<p align="center">
  <a href="#इसे-अपने-ai-कोडिंग-एजेंट-में-इंस्टॉल-कीजिए"><img src="https://img.shields.io/badge/Claude%20Code-FF8C1A?style=for-the-badge&logo=claude&logoColor=white" alt="Claude Code"></a>
  <a href="#इसे-अपने-ai-कोडिंग-एजेंट-में-इंस्टॉल-कीजिए"><img src="https://img.shields.io/badge/Codex-0A0E14?style=for-the-badge" alt="Codex"></a>
  <a href="#इसे-अपने-ai-कोडिंग-एजेंट-में-इंस्टॉल-कीजिए"><img src="https://img.shields.io/badge/Cursor-7FB0F5?style=for-the-badge&logo=cursor&logoColor=0A0E14" alt="Cursor"></a>
  <a href="#इसे-अपने-ai-कोडिंग-एजेंट-में-इंस्टॉल-कीजिए"><img src="https://img.shields.io/badge/Gemini%20CLI-A98BEB?style=for-the-badge&logo=googlegemini&logoColor=0A0E14" alt="Gemini CLI"></a>
  <a href="#इसे-अपने-ai-कोडिंग-एजेंट-में-इंस्टॉल-कीजिए"><img src="https://img.shields.io/badge/Antigravity-C88AE0?style=for-the-badge&logo=google&logoColor=0A0E14" alt="Antigravity"></a>
  <br>
  <a href="#इसे-अपने-ai-कोडिंग-एजेंट-में-इंस्टॉल-कीजिए"><img src="https://img.shields.io/badge/GitHub%20Copilot-F0509F?style=for-the-badge&logo=githubcopilot&logoColor=white" alt="GitHub Copilot"></a>
  <a href="#इसे-अपने-ai-कोडिंग-एजेंट-में-इंस्टॉल-कीजिए"><img src="https://img.shields.io/badge/Windsurf-FFC24A?style=for-the-badge&logo=windsurf&logoColor=0A0E14" alt="Windsurf"></a>
  <a href="#इसे-अपने-ai-कोडिंग-एजेंट-में-इंस्टॉल-कीजिए"><img src="https://img.shields.io/badge/OpenCode-4FC3A1?style=for-the-badge&logo=opencode&logoColor=white" alt="OpenCode"></a>
  <a href="#इसे-अपने-ai-कोडिंग-एजेंट-में-इंस्टॉल-कीजिए"><img src="https://img.shields.io/badge/Cline-6C7CE0?style=for-the-badge&logo=cline&logoColor=white" alt="Cline"></a>
  <a href="#इसे-अपने-ai-कोडिंग-एजेंट-में-इंस्टॉल-कीजिए"><img src="https://img.shields.io/badge/70%2B%20more-5A6478?style=for-the-badge" alt="70+ और एजेंट"></a>
</p>

<p align="center"><i>और उन लोगों के साथ भी जो इन्हें प्रॉम्प्ट करते हैं</i></p>

---

## बस एक कमांड

आप कुछ बना रहे हैं। आपका ऐप localhost पर चल रहा है। आप तीन अक्षर टाइप करते हैं:

```
$ stm
7 pages saved → screenshots/localhost-3000_2026-08-15_14-32/
   Run stm again after your next change to see which pages look different.
```

सात फुल-पेज स्क्रीनशॉट, ऊपर से नीचे तक, अब आपके कोड के बगल में एक तारीख वाले फ़ोल्डर में पड़े हैं। इसे Finder या Explorer में खोलिए और आपकी पूरी साइट एक ही शीट पर सामने है: होम, pricing, about, हर प्रोडक्ट पेज, सब कुछ, ठीक वैसा जैसा वह आज दिखता है।

साइट पहले से लाइव है? इसे असली साइट पर लगा दीजिए, यह उसी तरह काम करता है और पेज ढूँढने के लिए आपकी `sitemap.xml` पढ़ लेता है:

```
$ stm --url https://your-site.com
24 pages saved → screenshots/your-site-com_2026-08-15_14-40/
```

बस इतना ही है यह टूल। नीचे लिखी हर बात यही बताती है कि इसे कुछ बार चलाने के बाद यह सीधी-सादी चीज़ क्या बन जाती है।

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/hero.svg" alt="टर्मिनल में stm, बगल में तारीख वाले स्नैपशॉट का फ़ोल्डर, जिनमें से हर एक में हर पेज का फुल-पेज स्क्रीनशॉट है" width="820">
</p>

## आपको क्या मिलता है

**आपकी पूरी साइट, एक ही फ़ोल्डर में।** सिर्फ़ वह एक पेज नहीं जो संयोग से आपने खोल रखा है। हर पेज, पूरी लंबाई में, ऊपर से नीचे तक, एक ऐसे फ़ोल्डर में जिसे आप दस सेकंड में स्क्रॉल कर लें। "अभी इस वक़्त मेरी साइट असल में दिखती कैसी है", इसका जवाब पाने का यह सबसे तेज़ तरीका है।

**वे पेज जिन्हें आप कभी खोलते ही नहीं।** pricing पेज पर बैठ गई padding। बुरी तरह टूटकर अगली लाइन में चला गया कोई heading। एक card जिसकी इमेज गायब हो गई। एक footer जो अपनी जगह से खिसक गया। यह सब उसी एक फ़ोल्डर में पड़ा है, इस इंतज़ार में कि आपकी नज़र पड़े, न कि इस इंतज़ार में कि कोई इसकी शिकायत करे।

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/the-problem.svg" alt="एक ही रन के बारह पेज थंबनेल, अगल-बगल सजे हुए, जिनमें से चार ऐसे लेआउट दिखा रहे हैं जिन पर ध्यान देने की ज़रूरत है" width="820">
</p>

<p align="center"><i>एक ही रन के बारह पेज, अगल-बगल। इनमें से चार को ध्यान चाहिए था, और चारों ऐसे पेज थे जिन्हें किसी ने खोल नहीं रखा था।</i></p>

**एक इतिहास जो खुद बनता जाता है।** हर रन अपना अलग तारीख वाला फ़ोल्डर है, इसलिए वे अपने आप एक टाइमलाइन में जुड़ते चले जाते हैं। पिछले महीने का होम पेज और आज का होम पेज, बस दो फ़ाइलें हैं जिनके बीच आप आगे-पीछे कर सकते हैं। छह महीने बाद आपके पास इस बात का सबूत होगा कि यह चीज़ कहाँ से कहाँ पहुँची।

**उसी रन में फ़ोन व्यू भी।** `stm --mobile` हर पेज का 390x844 वाला व्यू भी कैप्चर करता है, ताकि फ़ोन पर बुरी तरह टूटने वाला heading डेस्कटॉप शॉट के ठीक बगल में आ जाए।

**चालीस टैब की जगह एक छोटी सूची।** दूसरे रन से आगे `stm` उन पेजों के नाम छापता है जिनके स्क्रीनशॉट पिछली बार से अलग निकले। शुरुआत वहीं से कीजिए।

**आपके एजेंट के लिए आँखें।** `stm --json` Claude Code, Cursor या Codex को हर उस पेज का पूर्ण पाथ थमा देता है जो उसने अभी बनाया है, ताकि वह अपने काम पर खुद नज़र डाल सके और "हो गया" कहने से पहले उसे ठीक कर सके।

**हमेशा के लिए आपका।** आपकी अपनी डिस्क पर सादी PNG फ़ाइलें। कोई अकाउंट नहीं, कोई क्लाउड नहीं, कोई सब्सक्रिप्शन नहीं, कोई कॉन्फ़िग फ़ाइल नहीं, कोई बैकग्राउंड प्रोसेस नहीं। एक ही डिपेंडेंसी, MIT लाइसेंस, हमेशा के लिए आपका।

## यह किसके काम आता है

- **आप प्रॉम्प्ट देते हैं, एजेंट बनाता है, और आपको पता बाद में चलता है।** आपने एक पेज के लिए कहा था, उसने एक साझा कंपोनेंट बदल दिया, और साथ में ग्यारह पेज भी बदल गए। एक कमांड आपको वे ग्यारहों दिखा देती है।
- **आप रात एक बजे अकेले शिप कर रहे हैं।** उस पल डिज़ाइन का वह बदलाव सही लग रहा था। मंगलवार वाला फ़ोल्डर बता देगा कि वह सचमुच सही था या नहीं।
- **आपको रीडिज़ाइन करते तीन हफ़्ते हो चुके हैं** और अब ठीक-ठीक याद नहीं कि पहले यह दिखता कैसा था। पहले ही दिन साइट कैप्चर कर लीजिए, फिर उसके बाद का हर स्क्रीनशॉट अपने आप एक तुलना है, जिसे सेट अप करने की मेहनत आपको करनी ही नहीं पड़ी।
- **आप काम किसी और को सौंप रहे हैं।** फुल-पेज स्क्रीनशॉट का एक फ़ोल्डर वह सबसे साफ़ स्टेटस अपडेट है जो किसी क्लाइंट या साथी को कभी मिलेगा।
- **आपको अपने काम का सबूत चाहिए।** किसी भी चीज़ का पहला वर्ज़न सँभालकर रखने लायक होता है। ज़्यादातर लोगों को यह बात चौथे वर्ज़न के आसपास समझ आती है।

## तुरंत शुरुआत

अगर आप लोकल मशीन पर बना रहे हैं, तो अपना ऐप वैसे ही चालू कीजिए जैसे हमेशा करते हैं (`npm run dev`, `rails s`, `python manage.py runserver`, कोई स्टैटिक सर्वर, कुछ भी जो HTML सर्व करे) और चलाइए:

```bash
npx screenshot-time-machine@latest
```

अगर साइट पहले से ऑनलाइन है, तो यह सब छोड़िए और सीधे उसका नाम दे दीजिए:

```bash
npx screenshot-time-machine@latest --url https://your-site.com
```

**Node 22 या नया चाहिए।** जाँचने के लिए `node -v` चलाइए। अगर यह 21 या उससे कम दिखाए, तो पहले [nodejs.org](https://nodejs.org) से Node अपडेट कीजिए।

स्क्रीनशॉट लेने के लिए `stm` वह Playwright ब्राउज़र इस्तेमाल करता है जो आपके पास पहले से कैश में मौजूद है, और वह न हो तो आपकी मशीन पर पहले से मौजूद Chrome या Edge। अगर दोनों में से कुछ भी न हो, तो यह एक बार एक हेडलेस ब्राउज़र डाउनलोड करता है, करीब 120 MB का डाउनलोड जो डिस्क पर लगभग 200 MB लेता है, और डाउनलोड करने से पहले आपको बता देता है। इंटरनेट से `stm` खुद बस यही एक चीज़ लाता है; आप जो पेज कैप्चर करते हैं वे अपने संसाधन ठीक वैसे ही लोड करते हैं जैसे आपके ब्राउज़र में करते।

कुछ बदलिए, दोबारा चला दीजिए। बस यही पूरा वर्कफ़्लो है।

इसके नीचे हर जगह कमांड को छोटे रूप में `stm` लिखा गया है। वह छोटा नाम पाने के लिए इसे एक बार इंस्टॉल कीजिए:

```bash
npm install -g screenshot-time-machine
```

इंस्टॉल न करना भी ठीक है। जहाँ भी `stm` दिखे, वहाँ `npx screenshot-time-machine@latest` लिख दीजिए। `npx stm` कभी मत लिखिए: वह 2014 का एक अलग ही पैकेज है।

<details>
<summary><b>पहले रन पर और क्या होता है</b></summary>

- `stm` पोर्ट 3000, 3001, 5173, 5174, 8080, 4321, 4322, 8000, 4200 और 5000 को इसी क्रम में जाँचता है, और जो ऐप सबसे पहले जवाब दे उसी को लेता है। अगर कई जवाब दें, तो यह उसे प्राथमिकता देता है जिसे इस प्रोजेक्ट ने पिछली बार इस्तेमाल किया था, और बाकियों के बारे में आपको बता देता है।
- अगर आपके प्रोजेक्ट में `.gitignore` है, तो यह उसमें एक बार `screenshots/` जोड़ देता है और आपको बता देता है। यह कभी `.gitignore` बनाता नहीं, और कभी कुछ मिटाता नहीं।
- पेज उन पर मौजूद `<a href>` लिंक का पीछा करके खोजे जाते हैं, और अगर आपके पास `sitemap.xml` है तो उसे पढ़कर भी, प्रति रन अधिकतम 100 पेज तक। जो पेज सिर्फ़ बटन क्लिक से खुलते हैं, और `/#/about` जैसे हैश रूट, उनके पास पीछा करने लायक कोई लिंक होता ही नहीं, इसलिए उनके नाम खुद बता दीजिए: `stm /about /pricing`।
</details>

## इसे अपने AI कोडिंग एजेंट में इंस्टॉल कीजिए

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/agent-loop.svg" alt="लूप: एजेंट UI बदलता है, stm --json चलाता है, स्क्रीनशॉट के पाथ पढ़ता है, fold इमेज देखता है, ठीक करता है और फिर चलाता है" width="820">
</p>

आपके एजेंट ने pricing पेज लिखा। उसने nav लिखा। उसने एक साझा कंपोनेंट छुआ और उसके साथ ग्यारह पेज हिल गए। इनमें से किसी को भी उसने असल में कभी देखा नहीं, क्योंकि उसके पास आँखें ही नहीं हैं।

`stm --json` उसे थोड़ी नज़र दे देता है। एजेंट एक कमांड चलाता है, उसे हर उस पेज का पूर्ण पाथ वापस मिलता है जो उसने अभी बनाया है, जो पेज अलग निकले उनकी `fold` इमेज वह खोलता है, और "हो गया" कहने से पहले अपने काम की खुद जाँच कर लेता है।

अच्छी बात वह है जो आपको अब करनी नहीं पड़ती। ग्यारह पेजों पर क्लिक करते फिरना नहीं। ऐसा "ठीक लग रहा है" नहीं जो बाद में ठीक न निकले। आपको एक फ़ोल्डर मिलता है, आप उसे दस सेकंड में स्क्रॉल कर लेते हैं, और आपको पहले से पता होता है कि कौन से पेज सबसे पहले खोलने हैं।

एक कमांड `stm` को एक स्किल के रूप में इंस्टॉल कर देती है: एक छोटी निर्देश फ़ाइल जिसे आपका एजेंट पढ़ता है, ताकि उसे पता रहे कि `stm` कब चलाना है और नतीजे का क्या करना है। `npx skills add` एक अलग ओपन-सोर्स इंस्टॉलर है जो वह एक फ़ोल्डर आपके प्रोजेक्ट में कॉपी कर देता है और बाकी कुछ नहीं बदलता। अपना एजेंट चुनिए:

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

या फिर अपने एजेंट को सीधे-सादे शब्दों में कह दीजिए:

> screenshot-time-machine इंस्टॉल करो, मेरे ऐप पर `stm` चलाओ, और मुझे दिखाओ कि पेज कैसे दिख रहे हैं।

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

Claude Code स्क्रीनशॉट अपने Read टूल से खोलता है, और `stm --json` उसे पूर्ण पाथ थमा देता है। लूप यह है: बदलिए, `stm --json`, `fold` इमेज Read कीजिए, ठीक कीजिए, दोहराइए। उससे कहिए "UI जाँच लो" और वह खुद ही इस स्किल तक पहुँच जाएगा।
</details>

<details>
<summary><b>Codex</b></summary>

मेमोरी वाली लाइन `AGENTS.md` में रखिए। Codex इमेज `view_image` से खोलता है, तो अगर वह हिचके, कह दीजिए "जिन पेजों को छुआ है उन सबकी fold इमेज देखो"।
</details>

<details>
<summary><b>Cursor</b></summary>

मेमोरी वाली लाइन `.cursor/rules/` के नीचे एक रूल में रखिए। एजेंट अपने टर्मिनल में `stm --json` चलाता है और जो PNG पाथ मिलते हैं उन्हें खोलता है। Cursor का अपना ब्राउज़र एक बार में एक पेज दिखाता है; `stm` उसे सारे पेज एक साथ थमा देता है।
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

stdout पर एक ही JSON दस्तावेज़, stderr पर ज़्यादा से ज़्यादा दो लाइनें, और यह तब भी छपता है जब कुछ पेज विफल हो जाएँ। एक बार होने वाला ब्राउज़र डाउनलोड इसका अपवाद है: उसका इंस्टॉलर भी stderr पर लिखता है। `code` एग्ज़िट कोड को ही दोहराता है।

जो रन शुरू ही नहीं हो पाता, वह इसकी जगह एक कहीं छोटा ऑब्जेक्ट छापता है: `{"code": 1, "error": "no_server" | "no_browser", "message": "...", "fix": "..."}`। गलत आर्ग्युमेंट `{"error": "bad_args", "message": "...", "fix": "..."}` छापते हैं, जिसमें अनजान फ़्लैग पर `fix` का मान `Run stm --help` होता है और गड़बड़ `--url` पर एक हल किया हुआ उदाहरण। `changed` पढ़ने से पहले `error` जाँच लीजिए। `truncated` उन एंट्रियों की गिनती है जो सूची से बाहर रह गईं (सीमा 25 है; मैनिफ़ेस्ट में सब मौजूद हैं)। आउटपुट में सिर्फ़ पाथ और संख्याएँ होती हैं, आपके पेजों से लिया गया टेक्स्ट कभी नहीं।

**टोकन के बारे में।** हर रन में हर पेज कैप्चर होता है, पर एजेंट सिर्फ़ वही खोलता है जिनकी ओर आप इशारा करते हैं, इसलिए शांत रन को पढ़ने की लागत नाम मात्र की होती है। सारांश लगभग 200 टोकन का होता है, और सूची में आए हर पेज पर करीब 90 और। एक पेज देखने की लागत एक 1440x900 इमेज जितनी है। बहुत लंबे फुल-पेज स्क्रीनशॉट को विज़न मॉडल इतना छोटा कर देते हैं कि टेक्स्ट पढ़ा ही नहीं जाता, और ठीक इसीलिए हर पेज की एक `fold` इमेज भी बनती है, और इसीलिए स्किल एजेंट से कहती है कि पहले वही खोले।

## डिस्क पर एक विज़ुअल इतिहास

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

हर रन एक नया फ़ोल्डर होता है, जिसका नाम ऐप और उस मिनट पर रखा जाता है जब वह चला। अंदर की हर फ़ाइल पर वही टाइमस्टैंप होता है, इसलिए फ़ोल्डर से बाहर खींचा गया स्क्रीनशॉट भी बताता रहता है कि वह क्या है और कब का है। एक ही मिनट में दो रन होने पर टाइमस्टैंप पर `-2`, `-3` लग जाता है। 16,384 px से लंबे पेज उसी ऊँचाई पर काट दिए जाते हैं, जो Chromium की सीमा है, और उन्हें `truncated` चिह्नित कर दिया जाता है।

फ़ोल्डरों को तारीख से सॉर्ट कीजिए और आपके सामने आपके प्रोडक्ट की टाइमलाइन है। कोई एक पेज चुनिए और हर फ़ोल्डर में उसकी फ़ाइल एक-एक करके देखिए, आप उसे बेहतर होते हुए देख रहे होंगे। नीचे तक सब सादी PNG हैं, इसलिए यह इतिहास उस टूल से भी ज़्यादा टिकेगा जिसने इसे बनाया: न कोई डेटाबेस, न कोई मालिकाना फ़ॉर्मैट, न कुछ एक्सपोर्ट करने की ज़रूरत। इसे हटाने पर पीछे कुछ नहीं बचता, सिवाय आपके `screenshots/` फ़ोल्डर के और, अगर आपके पास `.gitignore` था, तो उसमें जुड़ी एक लाइन के।

## कमांड

| कमांड | यह क्या करती है |
|---|---|
| `stm` | localhost पर चल रहे ऐप के हर पेज का स्नैपशॉट लेती है |
| `stm /pricing /about` | सिर्फ़ इन पेजों का स्नैपशॉट, कुछ ही सेकंड में। यही एडिट-जाँच लूप है |
| `stm --url https://your-site.com` | URL देकर किसी भी साइट का स्नैपशॉट, लोकल हो या लाइव। पाथ देने पर क्रॉल वहीं से शुरू होता है |
| `stm --mobile` | 390x844 का फ़ोन व्यू भी कैप्चर करती है (`@mobile` फ़ाइलें) |
| `stm --max 100` | इतने पेज मिलने के बाद खोजना बंद कर देती है (डिफ़ॉल्ट 100) |
| `stm --out screenshots` | स्नैपशॉट कहाँ जाएँ (डिफ़ॉल्ट `screenshots`) |
| `stm --json` | stdout पर मशीन के पढ़ने लायक सारांश, एजेंट के लिए |
| `stm list` | पिछले स्नैपशॉट: फ़ोल्डर, पेजों की गिनती, बदले, विफल |
| `stm open` | नवीनतम स्नैपशॉट फ़ोल्डर खोलती है |
| `stm skill` | एजेंट स्किल प्रिंट करती है |

एग्ज़िट कोड: `0` सब कुछ कैप्चर हो गया, `1` कुछ भी कैप्चर नहीं हुआ (कोई ऐप नहीं, कोई ब्राउज़र नहीं, गलत आर्ग्युमेंट), `2` रन पूरा हुआ पर कुछ पेज विफल रहे या रन बीच में रुक गया। कोई विफल पेज रन को कभी नहीं रोकता।

### कुछ चीज़ें जो आज़माने लायक हैं

```bash
stm --mobile                     # desktop and phone views of every page, same run
stm /checkout --mobile           # the one flow you just touched, both sizes, in seconds
stm --url https://staging.example.com   # any site you are allowed to capture, not just localhost
stm list                         # every snapshot you have ever taken, oldest to newest
stm open                         # jump straight into the latest folder
```

## यह काम कैसे करता है

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/how-it-works.svg" alt="पहचानना, खोजना, कैप्चर करना, तुलना करना, रिपोर्ट करना" width="820">
</p>

1. **पहचानना।** localhost के आम पोर्ट जाँचता है और जो ऐप जवाब दे उसे चुन लेता है, या `--url` का इस्तेमाल करता है।
2. **खोजना।** `sitemap.xml` हो तो उसे पढ़ता है, फिर एक पेज से दूसरे पेज तक `<a href>` लिंक का पीछा करता है, वह भी उसी एक ऑरिजिन पर टिके रहकर।
3. **कैप्चर करना।** हर पेज लोड करता है, उसे स्क्रॉल करता है ताकि lazy कंटेंट आ जाए, सब कुछ स्थिर होने देता है, फिर एक फुल-पेज PNG सहेजता है और साथ में ऊपरी स्क्रीन की एक `fold` इमेज भी।
4. **फ़ाइल करना।** सब कुछ एक ऐसे फ़ोल्डर में लिखता है जिसका नाम ऐप और उस मिनट पर होता है, और मैनिफ़ेस्ट हर एक पेज के बाद अपडेट होता रहता है।
5. **रिपोर्ट करना।** एक लाइन का सारांश छापता है, जिसमें यह भी होता है कि कौन से पेज पिछले रन से अलग निकले।

### स्क्रीनशॉट स्थिर क्यों रहते हैं

कोई भी स्क्रीनशॉट टूल उतना ही अच्छा है जितनी उसकी एकरूपता: एक ही पेज दो बार कैप्चर कीजिए, तस्वीर एक जैसी ही मिलनी चाहिए। इसमें असली मेहनत लगती है, और इस कोड का ज़्यादातर हिस्सा यहीं है।

- कैप्चर से पहले पेज नीचे तक स्क्रॉल किए जाते हैं ताकि lazy इमेज और lazy सेक्शन लोड हो जाएँ, फिर वापस ऊपर। स्मूद-स्क्रॉल वाली साइटें भी सँभाल ली जाती हैं।
- वेब फ़ॉन्ट के लोड होने का इंतज़ार किया जाता है, ताकि फ़ॉलबैक फ़ॉन्ट से बदलाव के बीचोंबीच कुछ कैप्चर न हो जाए।
- एनिमेशन अपनी अंतिम अवस्था पर रोक दिए जाते हैं, ताकि फ़ेड-इन पूरे दिखें और स्पिनर स्थिर रहें।
- डिवाइस पिक्सल रेशियो 1 पर और व्यूपोर्ट 1440x900 पर पक्का कर दिया जाता है, ताकि स्क्रीनशॉट आपके लैपटॉप, आपके डेस्कटॉप और CI, तीनों जगह एक जैसा रहे।
- डेव टूलबार (Astro, Nuxt, Next.js का बैज) छिपा दिए जाते हैं। डेव **एरर** ओवरले कभी नहीं छिपाए जाते: पेज जैसा है वैसा ही कैप्चर होता है और उस पर एक चेतावनी लग जाती है, क्योंकि टूटा हुआ पेज तो ठीक वही चीज़ है जिसे आप देखना चाहते हैं।
- लंबे समय तक खुले रहने वाले कनेक्शन (HMR सॉकेट, इवेंट स्ट्रीम) किसी कैप्चर को कभी अटकाते नहीं। हर पेज को 30 सेकंड का समय और एक दोबारा कोशिश मिलती है, उसके बाद उसे दर्ज कर लिया जाता है और रन आगे बढ़ जाता है।
- मैनिफ़ेस्ट हर पेज के बाद लिखा जाता है, इसलिए बीच में रुका हुआ रन भी ऐसा फ़ोल्डर छोड़ जाता है जिसे `stm list` पढ़ सके।
- `/logout`, `/delete` और उन जैसे लिंक का पीछा कभी नहीं किया जाता। न फ़ाइलों का, न `/api/` का, न दूसरे ऑरिजिन का, और न आपके अपने `screenshots/` फ़ोल्डर का।

इसका फल यह है: एक ही मशीन पर दो रन ऐसे पेज की बिल्कुल बाइट-दर-बाइट एक जैसी PNG बनाते हैं जिसका कंटेंट नहीं बदला।

<details>
<summary><b>"changed" वाली लाइन कैसे निकाली जाती है</b></summary>

हर रन में हर पेज कैप्चर होता है। तुलना इमेज की नहीं होती, उनके फ़िंगरप्रिंट की होती है:

1. किसी पेज की PNG सहेजने के बाद `stm` उस फ़ाइल के बाइट्स का एक **sha256 हैश** निकालता है।
2. वह हैश उस रन के मैनिफ़ेस्ट में, पेज के पाथ के बगल में दर्ज हो जाता है।
3. अगले रन में `stm` **पिछले रन के मैनिफ़ेस्ट** में वही पेज ढूँढता है और दोनों हैश की तुलना करता है।
4. हैश अलग है, यानी स्क्रीनशॉट अलग निकला। हैश वही है, यानी नहीं बदला। पहले की कोई एंट्री ही न हो, यानी पेज नया है।

पुराने स्क्रीनशॉट कभी दोबारा नहीं खोले जाते, सिर्फ़ छोटा सा मैनिफ़ेस्ट पढ़ा जाता है, इसलिए सौ पेजों की तुलना पलक झपकते हो जाती है। आपको पेजों के नाम और फ़ाइल पाथ मिलते हैं, और सही स्क्रीनशॉट पहले खोलने के लिए, या अपने एजेंट को सही स्क्रीनशॉट थमाने के लिए, आपको ठीक यही चाहिए। पेज के हिस्सों के स्तर पर विज़ुअल डिफ़ रोडमैप पर `stm diff` के रूप में है।

जिस पेज पर घड़ी हो, "3 मिनट पहले" जैसा सापेक्ष समय हो, बदलती हुई हीरो इमेज हो या canvas एनिमेशन हो, वह सचमुच हर रन में अलग दिखता है, और हर रन में सूची में आएगा।
</details>

## तुलना

| | stm | Claude Code Desktop ऑटो-वेरिफ़ाई | Playwright MCP, agent-browser, DevTools MCP | Percy, Chromatic |
|---|---|---|---|---|
| एक कमांड में हर पेज | हाँ | एक बार में एक पेज | प्रति टूल कॉल एक पेज | हाँ, CI में |
| डिस्क पर ऐसा इतिहास जिसे आप देख सकें | हाँ | नहीं | नहीं | उनके क्लाउड में |
| बताता है कौन से पेज अलग निकले | हाँ | नहीं | नहीं | हाँ, क्लाउड में |
| टर्मिनल, Cursor, Codex में चलता है | हाँ | सिर्फ़ Desktop | हाँ | सिर्फ़ CI |
| पूरी तरह आपकी मशीन पर चलता है | हाँ | हाँ | हाँ | नहीं |
| मुफ़्त | हाँ | हाँ | हाँ | मुफ़्त सीमा के ऊपर पैसे लगते हैं |

ये टूल एक-दूसरे के पूरक हैं, प्रतिद्वंद्वी नहीं। जब आपके एजेंट को क्लिक करके घूमना हो और चीज़ों से इंटरैक्ट करना हो, तब ब्राउज़र टूल इस्तेमाल कीजिए। जब आपको या आपके एजेंट को सब कुछ, एक साथ देखना हो और उसे सहेजकर भी रखना हो, तब `stm` इस्तेमाल कीजिए।

## गोपनीयता

**100% लोकल चलता है।** `stm` सिर्फ़ आपके ऐप के URL से बात करता है और, एक बार, Playwright के ब्राउज़र CDN से, वह भी तब जब आपके पास Chrome या Edge न हो। आपके स्क्रीनशॉट कभी आपकी मशीन से बाहर नहीं जाते। कोई अकाउंट नहीं, कोई API की नहीं, कोई टेलीमेट्री नहीं। आप जो पेज कैप्चर करते हैं वे अपने संसाधन ठीक वैसे ही लोड करते हैं जैसे आपके ब्राउज़र में करते। पूरा थ्रेट मॉडल [SECURITY.md](../../SECURITY.md) में है।

## अक्सर पूछे जाने वाले सवाल

<details>
<summary><b>क्या यह सचमुच मुफ़्त है?</b></summary>
हाँ। MIT लाइसेंस, ओपन सोर्स, कोई पेड टियर नहीं, कोई होस्टेड सेवा नहीं, साइन अप करने को कुछ नहीं। इंस्टॉल कीजिए, हमेशा इस्तेमाल कीजिए, मन हो तो फ़ोर्क कर लीजिए।
</details>

<details>
<summary><b>क्या यह Next.js, Vite, Astro, SvelteKit, Rails, Django, स्टैटिक साइटों के साथ काम करता है?</b></summary>
हाँ। जो भी HTML सर्व करता है, चाहे वह आपकी मशीन पर हो या इंटरनेट पर। इन सबके सामान्य localhost पोर्ट अपने आप जाँच लिए जाते हैं; बाकी किसी के लिए <code>--url</code> इस्तेमाल कीजिए।
</details>

<details>
<summary><b>एक रन में कितना समय लगता है?</b></summary>
पेज कुछ-कुछ के समूह में कैप्चर होते हैं, और ज़्यादातर छोटी साइटें एक मिनट से भी काफ़ी कम में पूरी हो जाती हैं। ठंडे डेव सर्वर पर बड़ी साइट में ज़्यादा समय लगता है, क्योंकि हर पेज की पहली विज़िट दरअसल आपका फ़्रेमवर्क उसे कंपाइल करता है। जब तुरंत नतीजा चाहिए, तो वही पेज पास कीजिए जिनकी आपको परवाह है (<code>stm /pricing /about</code>)।
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
<summary><b>कुछ समय बाद हर पेज अलग दिखने लगता है।</b></summary>
आम वजहें: आपका ब्राउज़र अपडेट हो गया, जिससे रेंडरिंग थोड़ी खिसक जाती है (<code>stm</code> ब्राउज़र संस्करण दर्ज करता है और आपको बता देता है), या आपके पेजों पर कुछ ऐसा है जो अपने आप बदलता रहता है, जैसे घड़ी, "3 मिनट पहले", कोई रैंडम हीरो इमेज, canvas एनिमेशन, या ऐसा कुकी बैनर जो सिर्फ़ पहली विज़िट पर दिखता है। स्क्रीनशॉट फिर भी सही हैं, इसलिए जिनकी आपको परवाह है उन्हें खोलकर देख लीजिए।
</details>

<details>
<summary><b>क्या यह अपने आप चल सकता है, मेरी फ़ाइलों पर नज़र रखते हुए?</b></summary>
यह तब चलता है जब आप कहते हैं, ठीक <code>git commit</code> की तरह: आप, या आपका एजेंट, तय करते हैं कि कौन सा पल सहेजने लायक है। अपने आप कैप्चर के लिए, एक लाइन वाला निर्देश अपने एजेंट की मेमोरी फ़ाइल में डाल दीजिए और एजेंट को हर UI बदलाव के बाद इसे चलाने दीजिए।
</details>

<details>
<summary><b>क्या मैं अपने इतिहास को टाइमलैप्स में बदल सकता हूँ?</b></summary>
एक पूरा <code>stm timelapse</code> रोडमैप पर है। आज, ffmpeg के साथ:
<pre><code>ffmpeg -framerate 1 -pattern_type glob -i 'screenshots/*/pricing_*.png' \
  -vf "scale=720:-1,split[a][b];[a]palettegen[p];[b][p]paletteuse" pricing.gif</code></pre>
</details>

<details>
<summary><b>मैं Lovable, Bolt या v0 इस्तेमाल करता हूँ। क्या मैं इसे इस्तेमाल कर सकता हूँ?</b></summary>
हाँ, दो तरीकों से। <code>stm</code> को उस URL पर लगा दीजिए जो वे आपके लिए पब्लिश करते हैं: <code>stm --url https://your-project.lovable.app</code>। या प्रोजेक्ट एक्सपोर्ट कीजिए, उसे लोकल चलाइए, और <code>stm</code> उसे खुद ढूँढ लेगा। Claude Code, Cursor, Codex, Windsurf या Copilot से आपकी अपनी मशीन पर बनी कोई भी चीज़ सीधे काम करती है।
</details>

<details>
<summary><b>बस एक Playwright स्क्रिप्ट क्यों न लिख लूँ?</b></summary>
लिख सकते हैं। <code>stm</code> वही स्क्रिप्ट है, साथ में पेज खोज, एक स्थिर फ़ोल्डर संरचना, हर बार एक जैसे स्थिर कैप्चर, एजेंट के अनुकूल आउटपुट, डेव-ओवरले सँभालना, और वे सारे किनारे के मामले, जिनका रखरखाव भी होता रहता है। और यह एक ऐसी कमांड भी है जिसे आपका एजेंट पहले से जानता है।
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
<summary><b>क्या मैं इसे अपनी लाइव या स्टेजिंग साइट पर इस्तेमाल कर सकता हूँ?</b></summary>
हाँ: <code>stm --url https://staging.example.com</code>। यह उस साइट की <code>sitemap.xml</code> पढ़ता है और उसके लिंक का पीछा ठीक वैसे ही करता है जैसे लोकल पर करता, उसी एक ऑरिजिन पर टिका रहता है, और <code>/logout</code> या <code>/delete</code> जैसे विनाशकारी दिखने वाले लिंक का पीछा कभी नहीं करता। कृपया सिर्फ़ उन्हीं साइटों के स्क्रीनशॉट लीजिए जिनकी आपको अनुमति है।
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

**Mohammed Sohaib Uddin** ने बनाया, क्योंकि जो सॉफ़्टवेयर हर दिन बदलता है, वह इस बात का रिकॉर्ड रखने का हक़दार है कि वह कब कैसा दिखता था।

<p align="left">
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/Connect%20on%20LinkedIn-FF8C1A?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn पर जुड़िए"></a>
  <a href="https://github.com/mdsohaib"><img src="https://img.shields.io/badge/Follow%20on%20GitHub-0A0E14?style=for-the-badge&logo=github&logoColor=white" alt="GitHub पर फ़ॉलो कीजिए"></a>
</p>

अगर `stm` आपको कुछ ऐसा दिखा दे जिसे देख लेना अच्छा रहा, तो एक स्टार में कुछ खर्च नहीं होता और उससे दूसरे लोगों को यह ढूँढने में मदद मिलती है।

MIT © Mohammed Sohaib Uddin
