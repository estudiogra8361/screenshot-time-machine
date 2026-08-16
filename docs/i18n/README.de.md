<p align="center">
  <a href="../../README.md">English</a> ·
  <a href="README.zh-CN.md">简体中文</a> ·
  <a href="README.es.md">Español</a> ·
  <a href="README.hi.md">हिन्दी</a> ·
  <a href="README.pt-BR.md">Português</a> ·
  <a href="README.ja.md">日本語</a> ·
  Deutsch ·
  <a href="README.fr.md">Français</a> ·
  <a href="README.ko.md">한국어</a> ·
  <a href="README.ru.md">Русский</a> ·
  <a href="README.ar.md">العربية</a>
</p>

<i>Übersetzt aus der englischen README. Im Zweifelsfall gilt die englische Fassung als Referenz.</i>

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/banner.svg" alt="screenshot-time-machine: ein Ganzseiten-Screenshot von jeder Seite deiner Website, mit einem Befehl" width="100%">
</p>

<h1 align="center">screenshot-time-machine</h1>

<p align="center">
  <b>Mach mit einem Befehl einen Screenshot von jeder Seite deiner Website.</b><br>
  <code>stm</code> geht deine Website Seite für Seite durch und speichert von jeder einzelnen<br>
  einen Ganzseiten-Screenshot in einem Ordner mit Datum und Uhrzeit.<br>
  Richte es auf eine beliebige URL, oder lass es die App finden, die bei dir auf localhost läuft.<br>
  Führ es aus, sobald du etwas ausgeliefert hast, und eine visuelle Historie entsteht von selbst:<br>
  jede Seite, jede Version, auf deiner eigenen Festplatte, als ganz normale PNGs.<br>
  <b>Kostenlos und Open Source. Läuft vollständig auf deinem eigenen Rechner.</b>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/screenshot-time-machine"><img src="https://img.shields.io/npm/v/screenshot-time-machine?style=flat-square&label=npm&color=FF8C1A&labelColor=0A0E14" alt="npm-Version"></a>
  <a href="../../LICENSE"><img src="https://img.shields.io/badge/license-MIT-FFC24A?style=flat-square&labelColor=0A0E14" alt="MIT-Lizenz"></a>
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/LinkedIn-Mohammed%20Sohaib%20Uddin-F0509F?style=flat-square&labelColor=0A0E14&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
</p>

```bash
npx screenshot-time-machine@latest                              # the app you have running on localhost
npx screenshot-time-machine@latest --url https://your-site.com  # or any site you are allowed to capture
npx skills add mdsohaib/screenshot-time-machine                 # teach Claude Code, Cursor, Codex and friends to run it
```

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/demo.gif" alt="Dieselbe Seite in drei datierten Snapshots, die noch einmal zeigen, wie sich das Design entwickelt hat" width="820">
</p>

<p align="center"><i>Drei Läufe während eines Redesign-Abends, abgespielt aus den datierten Ordnern, in denen stm sie gespeichert hat.</i></p>

<h3 align="center">Funktioniert mit</h3>

<p align="center">
  <a href="#in-deinem-ki-coding-agenten-installieren"><img src="https://img.shields.io/badge/Claude%20Code-FF8C1A?style=for-the-badge&logo=claude&logoColor=white" alt="Claude Code"></a>
  <a href="#in-deinem-ki-coding-agenten-installieren"><img src="https://img.shields.io/badge/Codex-0A0E14?style=for-the-badge" alt="Codex"></a>
  <a href="#in-deinem-ki-coding-agenten-installieren"><img src="https://img.shields.io/badge/Cursor-7FB0F5?style=for-the-badge&logo=cursor&logoColor=0A0E14" alt="Cursor"></a>
  <a href="#in-deinem-ki-coding-agenten-installieren"><img src="https://img.shields.io/badge/Gemini%20CLI-A98BEB?style=for-the-badge&logo=googlegemini&logoColor=0A0E14" alt="Gemini CLI"></a>
  <a href="#in-deinem-ki-coding-agenten-installieren"><img src="https://img.shields.io/badge/Antigravity-C88AE0?style=for-the-badge&logo=google&logoColor=0A0E14" alt="Antigravity"></a>
  <br>
  <a href="#in-deinem-ki-coding-agenten-installieren"><img src="https://img.shields.io/badge/GitHub%20Copilot-F0509F?style=for-the-badge&logo=githubcopilot&logoColor=white" alt="GitHub Copilot"></a>
  <a href="#in-deinem-ki-coding-agenten-installieren"><img src="https://img.shields.io/badge/Windsurf-FFC24A?style=for-the-badge&logo=windsurf&logoColor=0A0E14" alt="Windsurf"></a>
  <a href="#in-deinem-ki-coding-agenten-installieren"><img src="https://img.shields.io/badge/OpenCode-4FC3A1?style=for-the-badge&logo=opencode&logoColor=white" alt="OpenCode"></a>
  <a href="#in-deinem-ki-coding-agenten-installieren"><img src="https://img.shields.io/badge/Cline-6C7CE0?style=for-the-badge&logo=cline&logoColor=white" alt="Cline"></a>
  <a href="#in-deinem-ki-coding-agenten-installieren"><img src="https://img.shields.io/badge/70%2B%20more-5A6478?style=for-the-badge" alt="über 70 weitere Agenten"></a>
</p>

<p align="center"><i>und mit den Menschen, die sie steuern</i></p>

---

## Der eine Befehl

Du baust gerade. Deine App läuft auf localhost. Du tippst drei Buchstaben:

```
$ stm
7 pages saved → screenshots/localhost-3000_2026-08-15_14-32/
   Run stm again after your next change to see which pages look different.
```

Sieben Ganzseiten-Screenshots, von oben bis unten, liegen jetzt in einem datierten Ordner neben deinem Code. Öffne ihn im Finder oder Explorer, und deine komplette Website liegt als Kontaktbogen vor dir: Startseite, Preise, Über uns, jede Produktseite, alles, genau so, wie es heute aussieht.

Schon online? Richte es auf die echte Website, und es funktioniert genauso: es liest deine `sitemap.xml`, um die Seiten zu finden:

```
$ stm --url https://your-site.com
24 pages saved → screenshots/your-site-com_2026-08-15_14-40/
```

Das ist das Werkzeug. Alles Weitere unten ist das, was aus dieser einfachen Sache wird, sobald du sie ein paar Mal ausgeführt hast.

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/hero.svg" alt="stm im Terminal, daneben ein Ordner mit datierten Snapshots, von denen jeder einen Ganzseiten-Screenshot jeder Seite enthält" width="820">
</p>

## Was du bekommst

**Deine ganze Website in einem Ordner.** Nicht nur die eine Seite, die du zufällig offen hast. Jede Seite, in voller Länge, von oben bis unten, in einem Ordner, den du in zehn Sekunden durchscrollst. Das ist der schnellste Weg, die Frage zu beantworten: Wie sieht meine Website eigentlich gerade aus.

**Die Seiten, die du nie geöffnet hättest.** Ein Innenabstand, der auf der Preisseite zusammengefallen ist. Eine Überschrift mit unschönem Umbruch. Eine Karte, die ihr Bild verloren hat. Eine Fußzeile, die verrutscht ist. Das alles liegt im selben Ordner und wartet darauf, bemerkt zu werden, statt darauf, gemeldet zu werden.

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/the-problem.svg" alt="Zwölf Seiten-Vorschaubilder aus einem Lauf, nebeneinander gelegt, vier davon mit Layouts, die Aufmerksamkeit brauchen" width="820">
</p>

<p align="center"><i>Zwölf Seiten aus einem einzigen Lauf, nebeneinander. Vier davon wollten Aufmerksamkeit, und alle vier waren Seiten, die niemand offen hatte.</i></p>

**Eine Historie, die sich von selbst aufbaut.** Jeder Lauf ist ein eigener datierter Ordner, also stapeln sie sich ganz von allein zu einer Zeitleiste. Die Startseite von letztem Monat und die von heute sind zwei Dateien, zwischen denen du hin und her springen kannst. Nach einem halben Jahr hast du den Beleg, wie weit das Ding gekommen ist.

**Handy-Ansichten im selben Lauf.** `stm --mobile` nimmt zusätzlich von jeder Seite eine Ansicht in 390x844 auf, sodass die Überschrift, die auf dem Handy unschön umbricht, direkt neben der Desktop-Aufnahme landet.

**Eine kurze Liste statt vierzig Tabs.** Ab dem zweiten Lauf gibt `stm` die Seiten aus, deren Screenshots anders ausgefallen sind als beim letzten Mal. Fang dort an.

**Augen für deinen Agenten.** `stm --json` übergibt Claude Code, Cursor oder Codex den absoluten Pfad jeder Seite, die gerade gebaut wurde, damit der Agent sich seine eigene Arbeit ansehen und sie korrigieren kann, bevor er dir sagt, er sei fertig.

**Deins, dauerhaft.** Ganz normale PNG-Dateien auf deiner eigenen Festplatte. Kein Konto, keine Cloud, kein Abo, keine Konfigurationsdatei, kein Hintergrundprozess. Eine Abhängigkeit, MIT-lizenziert, für immer deins.

## Für wen es gemacht ist

- **Du promptest, der Agent baut, und du erfährst es erst später.** Du hast um eine Seite gebeten, er hat eine gemeinsam genutzte Komponente geändert, und elf Seiten sind mitgegangen. Ein Befehl zeigt dir alle elf.
- **Du lieferst nachts um eins allein aus.** Der Design-Durchgang fühlte sich im Moment richtig an. Der Ordner von Dienstag sagt dir, ob er es auch war.
- **Du steckst seit drei Wochen in einem Redesign** und weißt nicht mehr genau, wie es vorher aussah. Nimm die Website an Tag eins auf, und jeder Screenshot danach ist ein Vergleich, den du nie einrichten musstest.
- **Du übergibst Arbeit.** Ein Ordner voller Ganzseiten-Screenshots ist das klarste Status-Update, das ein Kunde oder ein Teammitglied je bekommen wird.
- **Du willst einen Beleg für deine Arbeit.** Version eins von irgendetwas ist es wert, aufgehoben zu werden. Den meisten fällt das ungefähr bei Version vier auf.

## Schnellstart

Wenn du lokal entwickelst, starte deine App so, wie du es immer tust (`npm run dev`, `rails s`, `python manage.py runserver`, ein statischer Server, alles, was HTML ausliefert), und führ aus:

```bash
npx screenshot-time-machine@latest
```

Ist die Website schon online, überspring das alles und nenn sie einfach beim Namen:

```bash
npx screenshot-time-machine@latest --url https://your-site.com
```

**Benötigt Node 22 oder neuer.** Prüf es mit `node -v`. Steht dort 21 oder niedriger, aktualisiere Node zuerst über [nodejs.org](https://nodejs.org).

Für die Screenshots nutzt `stm` einen Playwright-Browser, den du bereits im Cache hast, und andernfalls das Chrome oder Edge, das ohnehin schon auf deinem Rechner liegt. Hast du weder noch, lädt es einmalig einen Headless-Browser herunter, ein Download von etwa 120 MB, der rund 200 MB auf der Festplatte belegt, und sagt dir vorher Bescheid. Das ist das Einzige, was `stm` selbst aus dem Internet holt; die Seiten, die du aufnimmst, laden ihre eigenen Ressourcen genau so, wie sie es in deinem Browser täten.

Ändere etwas, führ es erneut aus. Das ist der komplette Arbeitsablauf.

Ab hier wird der Befehl der Kürze halber als `stm` geschrieben. Für diesen kurzen Namen installierst du es einmal:

```bash
npm install -g screenshot-time-machine
```

Nicht zu installieren ist völlig in Ordnung. Schreib dann überall dort `npx screenshot-time-machine@latest`, wo `stm` steht. Schreib niemals `npx stm`: das ist ein völlig anderes Paket von 2014.

<details>
<summary><b>Was beim ersten Lauf sonst noch passiert</b></summary>

- `stm` prüft die Ports 3000, 3001, 5173, 5174, 8080, 4321, 4322, 8000, 4200 und 5000, in dieser Reihenfolge, und nimmt die erste App, die antwortet. Antworten mehrere, bevorzugt es die, die dieses Projekt zuletzt benutzt hat, und weist dich auf die anderen hin.
- Hat dein Projekt eine `.gitignore`, trägt es dort einmalig `screenshots/` ein und sagt es dir. Es legt nie eine `.gitignore` an, und es löscht nie etwas.
- Seiten werden gefunden, indem den `<a href>`-Links auf ihnen gefolgt wird und, falls vorhanden, deine `sitemap.xml` gelesen wird, bis zu 100 Seiten pro Lauf. Seiten, die nur über einen Klick auf einen Button erreichbar sind, und Hash-Routen wie `/#/about` haben keinen Link, dem man folgen könnte. Nenne sie deshalb selbst: `stm /about /pricing`.
</details>

## In deinem KI-Coding-Agenten installieren

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/agent-loop.svg" alt="Der Kreislauf: Der Agent ändert die UI, führt stm --json aus, liest die Screenshot-Pfade, sieht sich die fold-Bilder an, korrigiert und startet erneut" width="820">
</p>

Dein Agent hat die Preisseite geschrieben. Er hat die Navigation geschrieben. Er hat eine gemeinsam genutzte Komponente angefasst, und elf Seiten sind mitgewandert. Angesehen hat er keine einzige davon, denn er hat keine Augen.

`stm --json` gibt ihm welche. Der Agent führt einen Befehl aus, bekommt den absoluten Pfad jeder Seite zurück, die er gerade gebaut hat, öffnet das `fold`-Bild derjenigen, die anders ausgefallen sind, und prüft seine eigene Arbeit, bevor er dir sagt, er sei fertig.

Das Schöne daran ist, was du nicht mehr tun musst. Kein Durchklicken durch elf Seiten. Kein „sieht gut aus“, das sich später als falsch herausstellt. Du bekommst einen Ordner, scrollst ihn in zehn Sekunden durch und weißt schon, welche Seiten du zuerst öffnest.

Ein Befehl installiert `stm` als Skill: eine kurze Anweisungsdatei, die dein Agent liest, damit er weiß, wann er `stm` ausführen und was er mit dem Ergebnis tun soll. `npx skills add` ist ein separater Open-Source-Installer, der genau diesen einen Ordner in dein Projekt kopiert und sonst nichts verändert. Wähl deinen Agenten:

| Agent | Befehl | Skill landet in |
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
| **Alles andere** | `npx skills add mdsohaib/screenshot-time-machine` | wähl aus der Liste von über 70 Agenten |

Häng an jeden dieser Befehle `-g` an, um es für alle Projekte statt nur für dieses zu installieren.

Oder sag deinem Agenten einfach in klaren Worten:

> Installiere screenshot-time-machine, führe `stm` auf meiner App aus und zeig mir, wie die Seiten aussehen.

Füg dann eine Zeile in die Datei ein, die dein Agent bei jeder Anfrage liest, damit er seine eigene Arbeit überprüft, ohne dass du ihn darum bitten musst:

```
After changing anything a user can see, run `stm --json` (or `npx -y screenshot-time-machine@latest --json` if `stm` is not installed) and view the `fold` image of every entry in `changed` and `new` before saying you're done. On the very first snapshot both lists are empty, so view the fold images of the pages you edited instead. Never claim a UI change is verified without viewing a screenshot.
```

Wohin diese Zeile gehört, je nach Agent:

| Agent | Datei |
|---|---|
| Claude Code | `CLAUDE.md` |
| Codex, Antigravity, OpenCode | `AGENTS.md` |
| Gemini CLI | `GEMINI.md` |
| Cursor | `.cursor/rules/stm.mdc`, beginnend mit `---`, dann `alwaysApply: true`, dann `---` |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Windsurf | `.windsurf/rules/stm.md` |
| Cline | `.clinerules/stm.md` |

<details>
<summary><b>Claude Code: Plugin-Installation, und wie sich der Kreislauf anfühlt</b></summary>

Skills sind der einfache Weg. Wenn du Plugins bevorzugst, führ dies in Claude Code aus:

```
/plugin marketplace add mdsohaib/screenshot-time-machine
/plugin install stm@stm
```

Kein SSH-Key auf GitHub? Nimm die URL-Form: `/plugin marketplace add https://github.com/mdsohaib/screenshot-time-machine.git`

Claude Code öffnet Screenshots mit seinem Read-Tool, und `stm --json` liefert ihm absolute Pfade. Der Kreislauf lautet: ändern, `stm --json`, die `fold`-Bilder lesen, korrigieren, wiederholen. Bitte es, „die UI zu prüfen“, und es greift von selbst zum Skill.
</details>

<details>
<summary><b>Codex</b></summary>

Schreib die Merkzeile in `AGENTS.md`. Codex öffnet Bilder mit `view_image`. Zögert es, sag ihm: „sieh dir das fold-Bild jeder Seite an, die du angefasst hast“.
</details>

<details>
<summary><b>Cursor</b></summary>

Schreib die Merkzeile in eine Regel unter `.cursor/rules/`. Der Agent führt `stm --json` in seinem Terminal aus und öffnet die PNG-Pfade, die zurückkommen. Der eingebaute Browser von Cursor zeigt immer nur eine Seite; `stm` liefert ihm alle auf einmal.
</details>

<details>
<summary><b>Jeder Agent, ohne Skill-Unterstützung</b></summary>

`stm skill` gibt den Skill-Text aus. Füg ihn in die Anweisungsdatei ein, die dein Agent liest. Das funktioniert, ohne dass du irgendetwas installierst:

```bash
npx screenshot-time-machine@latest skill
```
</details>

### Was der Agent zurückbekommt

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

Ein JSON-Dokument auf stdout, höchstens zwei Zeilen auf stderr, auch dann ausgegeben, wenn einzelne Seiten fehlschlagen. Die Ausnahme ist der einmalige Browser-Download: dessen Installer schreibt ebenfalls auf stderr. `code` entspricht dem Exit-Code.

Ein Lauf, der gar nicht erst starten kann, gibt stattdessen ein deutlich kleineres Objekt aus: `{"code": 1, "error": "no_server" | "no_browser", "message": "...", "fix": "..."}`. Falsche Argumente ergeben `{"error": "bad_args", "message": "...", "fix": "..."}`, wobei `fix` bei einem unbekannten Flag `Run stm --help` lautet und bei einer fehlerhaften `--url` ein ausgearbeitetes Beispiel enthält. Prüf `error`, bevor du `changed` liest. `truncated` zählt die Einträge, die in der Liste weggelassen wurden (die Obergrenze liegt bei 25, das Manifest enthält alle). Die Ausgabe enthält nur Pfade und Zahlen, niemals Text aus deinen Seiten.

**Zum Thema Tokens.** Jede Seite wird bei jedem Lauf aufgenommen, aber der Agent öffnet nur die, auf die du ihn hinweist, ein ruhiger Lauf kostet also so gut wie nichts an Leseaufwand. Die Zusammenfassung liegt bei etwa 200 Tokens plus rund 90 pro aufgelisteter Seite. Eine Seite anzusehen kostet ein einziges Bild in 1440x900. Sehr hohe Ganzseiten-Screenshots werden von Vision-Modellen so weit herunterskaliert, dass der Text unlesbar wird. Genau deshalb bekommt jede Seite zusätzlich ein `fold`-Bild, und genau deshalb weist der Skill den Agenten an, zuerst dieses zu öffnen.

## Eine visuelle Historie auf der Festplatte

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

Jeder Lauf ist ein neuer Ordner, benannt nach der App und der Minute, in der er lief. Jede Datei darin trägt denselben Zeitstempel, sodass ein Screenshot auch außerhalb seines Ordners noch sagt, was er ist und wann er entstand. Zwei Läufe in derselben Minute bekommen ein `-2`, `-3` am Zeitstempel. Seiten, die höher als 16.384 px sind, werden an dieser Stelle abgeschnitten, das ist die Grenze von Chromium, und als `truncated` markiert.

Sortier die Ordner nach Datum, und du schaust auf die Zeitleiste deines Produkts. Nimm eine Seite und geh ihre Datei in jedem Ordner durch, und du siehst ihr beim Besserwerden zu. Es sind durchgehend ganz normale PNGs, diese Historie überlebt also das Werkzeug, das sie erstellt hat: keine Datenbank, kein proprietäres Format, nichts zu exportieren. Deinstallieren hinterlässt nichts außer deinem Ordner `screenshots/` und, falls du eine `.gitignore` hattest, einer Zeile darin.

## Befehle

| Befehl | Was er tut |
|---|---|
| `stm` | Snapshot von jeder Seite der App, die auf localhost läuft |
| `stm /pricing /about` | Snapshot nur dieser Seiten, in Sekunden. Das ist der Ändern-und-Prüfen-Kreislauf |
| `stm --url https://your-site.com` | Snapshot einer beliebigen Website per URL, lokal oder live. Ein Pfad startet die Suche dort |
| `stm --mobile` | Zusätzlich eine Handy-Ansicht in 390x844 aufnehmen (`@mobile`-Dateien) |
| `stm --max 100` | Nach so vielen Seiten die Suche beenden (Standard 100) |
| `stm --out screenshots` | Wohin die Snapshots kommen (Standard `screenshots`) |
| `stm --json` | Maschinenlesbare Zusammenfassung auf stdout, für Agenten |
| `stm list` | Frühere Snapshots: Ordner, Seitenzahl, geändert, fehlgeschlagen |
| `stm open` | Den neuesten Snapshot-Ordner öffnen |
| `stm skill` | Den Agenten-Skill ausgeben |

Exit-Codes: `0` alles aufgenommen, `1` nichts aufgenommen (keine App, kein Browser, falsche Argumente), `2` beendet, aber einzelne Seiten sind fehlgeschlagen oder der Lauf wurde unterbrochen. Eine fehlschlagende Seite stoppt niemals den Lauf.

### Ein paar Dinge, die einen Versuch wert sind

```bash
stm --mobile                     # desktop and phone views of every page, same run
stm /checkout --mobile           # the one flow you just touched, both sizes, in seconds
stm --url https://staging.example.com   # any site you are allowed to capture, not just localhost
stm list                         # every snapshot you have ever taken, oldest to newest
stm open                         # jump straight into the latest folder
```

## Wie es funktioniert

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/how-it-works.svg" alt="erkennen, entdecken, aufnehmen, vergleichen, berichten" width="820">
</p>

1. **Erkennen.** Die üblichen localhost-Ports prüfen und die App nehmen, die antwortet, oder `--url` verwenden.
2. **Entdecken.** Falls vorhanden die `sitemap.xml` lesen, dann von Seite zu Seite den `<a href>`-Links folgen und dabei auf derselben Origin bleiben.
3. **Aufnehmen.** Jede Seite laden, sie scrollen, damit nachladende Inhalte erscheinen, alles zur Ruhe bringen, dann ein Ganzseiten-PNG plus ein `fold`-Bild des oberen Bildschirms speichern.
4. **Ablegen.** Alles in einen Ordner schreiben, der nach der App und der Minute benannt ist, wobei das Manifest nach jeder einzelnen Seite aktualisiert wird.
5. **Berichten.** Eine einzeilige Zusammenfassung ausgeben, samt der Seiten, die anders ausgefallen sind als beim vorherigen Lauf.

### Warum die Screenshots stabil sind

Ein Screenshot-Werkzeug ist nur so gut wie seine Verlässlichkeit: Nimmst du dieselbe Seite zweimal auf, solltest du dasselbe Bild bekommen. Das ist echte Arbeit, und genau dort steckt der größte Teil dieses Codes.

- Seiten werden vor der Aufnahme bis nach unten gescrollt, damit nachladende Bilder und Abschnitte erscheinen, und danach zurück nach oben. Sites mit weichem Scrollen werden korrekt behandelt.
- Auf Webfonts wird gewartet, damit nichts mitten im Wechsel von der Ersatzschrift aufgenommen wird.
- Animationen werden in ihrem Endzustand eingefroren, sodass Einblendungen vollständig sichtbar sind und Ladeanimationen stillstehen.
- Das Device Pixel Ratio ist auf 1 und der Viewport auf 1440x900 festgelegt, sodass ein Screenshot auf deinem Laptop, deinem Desktop und in der CI derselbe ist.
- Entwickler-Toolbars (Astro, Nuxt, das Next.js-Badge) werden ausgeblendet. **Fehler**-Overlays der Entwicklungsumgebung niemals: Die Seite wird so aufgenommen, wie sie ist, und mit einer Warnung markiert, denn eine kaputte Seite ist genau das, was du sehen willst.
- Langlebige Verbindungen (HMR-Sockets, Event-Streams) blockieren nie eine Aufnahme. Jede Seite bekommt ein Budget von 30 Sekunden und einen zweiten Versuch, danach wird sie vermerkt und der Lauf geht weiter.
- Das Manifest wird nach jeder Seite geschrieben, sodass auch ein unterbrochener Lauf einen Ordner hinterlässt, den `stm list` lesen kann.
- Links auf `/logout`, `/delete` und ähnliche werden nie verfolgt. Ebenso wenig Dateien, `/api/`, fremde Origins oder dein eigener Ordner `screenshots/`.

Der Gewinn: Zwei Läufe auf demselben Rechner erzeugen von einer inhaltlich unveränderten Seite Byte für Byte identische PNGs.

<details>
<summary><b>Wie die „changed“-Zeile zustande kommt</b></summary>

Jede Seite wird bei jedem Lauf aufgenommen. Verglichen werden nicht die Bilder, sondern ihre Fingerabdrücke:

1. Nachdem das PNG einer Seite gespeichert ist, berechnet `stm` einen **sha256-Hash** über die Bytes dieser Datei.
2. Der Hash landet im Manifest dieses Laufs, direkt neben dem Seitenpfad.
3. Beim nächsten Lauf schlägt `stm` dieselbe Seite im **Manifest des vorherigen Laufs** nach und vergleicht die beiden Hashes.
4. Ein anderer Hash bedeutet, dass der Screenshot anders ausgefallen ist. Derselbe Hash bedeutet, dass er es nicht ist. Kein früherer Eintrag bedeutet, dass die Seite neu ist.

Alte Screenshots werden nie erneut geöffnet, gelesen wird nur das kleine Manifest, deshalb ist der Vergleich von hundert Seiten sofort fertig. Du bekommst Seitennamen und Dateipfade, also genau das, was du brauchst, um zuerst die richtigen Screenshots zu öffnen oder deinem Agenten die richtigen zu geben. Ein visueller Vergleich auf Bereichsebene steht als `stm diff` auf der Roadmap.

Eine Seite mit einer Uhr, einer relativen Zeitangabe wie „vor 3 Minuten“, einem wechselnden Hero-Bild oder einer Canvas-Animation sieht tatsächlich bei jedem Lauf anders aus und wird deshalb bei jedem Lauf aufgeführt.
</details>

## Wie es sich im Vergleich schlägt

| | stm | Claude Code Desktop Auto-Verify | Playwright MCP, agent-browser, DevTools MCP | Percy, Chromatic |
|---|---|---|---|---|
| Jede Seite mit einem Befehl | ja | eine Seite nach der anderen | eine Seite pro Tool-Aufruf | ja, in der CI |
| Durchsuchbare Historie auf der Festplatte | ja | nein | nein | in deren Cloud |
| Listet auf, welche Seiten anders ausgefallen sind | ja | nein | nein | ja, in der Cloud |
| Funktioniert im Terminal, in Cursor, in Codex | ja | nur Desktop | ja | nur CI |
| Läuft vollständig auf deinem Rechner | ja | ja | ja | nein |
| Kostenlos | ja | ja | ja | kostenpflichtig oberhalb einer kostenlosen Stufe |

Diese Werkzeuge ergänzen sich, sie konkurrieren nicht. Nimm ein Browser-Tool, wenn dein Agent herumklicken und interagieren muss. Nimm `stm`, wenn du oder dein Agent alles auf einmal sehen und behalten willst.

## Datenschutz

**Läuft zu 100 % lokal.** `stm` spricht nur mit der URL deiner App und, ein einziges Mal, mit dem Browser-CDN von Playwright, falls du weder Chrome noch Edge hast. Deine Screenshots verlassen deinen Rechner nie. Keine Konten, keine API-Schlüssel, keine Telemetrie. Die aufgenommenen Seiten laden ihre eigenen Ressourcen genau so, wie sie es in deinem Browser täten. Das vollständige Bedrohungsmodell steht in [SECURITY.md](../../SECURITY.md).

## FAQ

<details>
<summary><b>Ist es wirklich kostenlos?</b></summary>
Ja. MIT-lizenziert, Open Source, keine kostenpflichtige Stufe, kein gehosteter Dienst, keine Anmeldung. Installieren, für immer nutzen, forken, wenn du magst.
</details>

<details>
<summary><b>Funktioniert es mit Next.js, Vite, Astro, SvelteKit, Rails, Django, statischen Seiten?</b></summary>
Ja. Mit allem, was HTML ausliefert, egal ob auf deinem Rechner oder im Internet. Die üblichen localhost-Ports für all das werden automatisch geprüft; für alles andere nimm <code>--url</code>.
</details>

<details>
<summary><b>Wie lange dauert ein Lauf?</b></summary>
Die Seiten werden in kleinen Gruppen aufgenommen, und die meisten kleinen Websites sind in deutlich unter einer Minute fertig. Eine große Website auf einem kalt gestarteten Entwicklungsserver dauert länger, weil der erste Besuch jeder Seite dein Framework beim Kompilieren ist. Übergib die Seiten, die dich interessieren (<code>stm /pricing /about</code>), wenn es sofort gehen soll.
</details>

<details>
<summary><b>Es hat nur meine Startseite gefunden.</b></summary>
Seiten werden über deine Sitemap und über <code>&lt;a href&gt;</code>-Links entdeckt. Apps, die per Button oder Hash-Route (<code>/#/about</code>) navigieren, haben keine Links zum Verfolgen. Nenne die Seiten: <code>stm /about /pricing</code>. Agenten sind angewiesen, die Seiten zu übergeben, die sie angefasst haben.
</details>

<details>
<summary><b>Die meisten meiner Screenshots zeigen die Login-Seite.</b></summary>
Deine App leitet auf die Anmeldung um. <code>stm</code> kann sich noch nicht anmelden und sagt dir, wenn das passiert. Aufnahmen im angemeldeten Zustand stehen auf der Roadmap.
</details>

<details>
<summary><b>Nach einer Weile wird jede Seite als anders aufgeführt.</b></summary>
Übliche Ursachen: Dein Browser wurde aktualisiert, was das Rendering leicht verschiebt (<code>stm</code> merkt sich die Browser-Version und sagt es dir), oder deine Seiten zeigen etwas, das sich von selbst bewegt, etwa eine Uhr, „vor 3 Minuten“, ein zufälliges Hero-Bild, eine Canvas-Animation oder ein Cookie-Banner, das nur beim ersten Besuch erscheint. Die Screenshots sind trotzdem korrekt, öffne also die, die dich interessieren.
</details>

<details>
<summary><b>Kann es automatisch laufen und meine Dateien beobachten?</b></summary>
Es läuft, wenn du es sagst, wie <code>git commit</code>: Du, oder dein Agent, entscheidest, welcher Moment festgehalten werden soll. Für automatische Aufnahmen schreib die einzeilige Anweisung in die Merkdatei deines Agenten und lass ihn sie nach jeder UI-Änderung ausführen.
</details>

<details>
<summary><b>Kann ich meine Historie in einen Zeitraffer verwandeln?</b></summary>
Ein vollwertiges <code>stm timelapse</code> steht auf der Roadmap. Heute geht es mit ffmpeg:
<pre><code>ffmpeg -framerate 1 -pattern_type glob -i 'screenshots/*/pricing_*.png' \
  -vf "scale=720:-1,split[a][b];[a]palettegen[p];[b][p]paletteuse" pricing.gif</code></pre>
</details>

<details>
<summary><b>Ich nutze Lovable, Bolt oder v0. Kann ich das verwenden?</b></summary>
Ja, auf zwei Wegen. Richte <code>stm</code> auf die URL, die sie für dich veröffentlichen: <code>stm --url https://your-project.lovable.app</code>. Oder exportiere das Projekt, starte es lokal, und <code>stm</code> findet es von selbst. Alles, was mit Claude Code, Cursor, Codex, Windsurf oder Copilot auf deinem eigenen Rechner gebaut wurde, läuft sofort.
</details>

<details>
<summary><b>Warum nicht einfach ein Playwright-Skript schreiben?</b></summary>
Könntest du. <code>stm</code> ist genau dieses Skript, plus Seitenerkennung, ein verlässlicher Ordneraufbau, stabile und wiederholbare Aufnahmen, agentenfreundliche Ausgabe, Umgang mit Entwickler-Overlays und all die Sonderfälle, gepflegt. Und es ist ein Befehl, den dein Agent bereits kennt.
</details>

<details>
<summary><b>Linux meldet, dem Browser fehlen Bibliotheken.</b></summary>
Führ den <code>install-deps</code>-Befehl aus, den es ausgibt, einmalig. WSL und Codespaces brauchen ihn ebenfalls.
</details>

<details>
<summary><b>Wo liegt der heruntergeladene Browser?</b></summary>
Im Cache von Playwright: <code>~/Library/Caches/ms-playwright</code> unter macOS, <code>~/.cache/ms-playwright</code> unter Linux, <code>%LOCALAPPDATA%\ms-playwright</code> unter Windows. Lösch ihn jederzeit; <code>stm</code> lädt ihn bei Bedarf erneut.
</details>

<details>
<summary><b>Kann ich es auf meiner Live- oder Staging-Website nutzen?</b></summary>
Ja: <code>stm --url https://staging.example.com</code>. Es liest die <code>sitemap.xml</code> dieser Website und folgt ihren Links genauso, wie es das lokal täte, bleibt auf dieser einen Origin und folgt nie Links, die nach Zerstörung aussehen, wie <code>/logout</code> oder <code>/delete</code>. Bitte fotografiere nur Websites, für die du die Erlaubnis hast.
</details>

## Roadmap

Bewusst klein gehalten. Stimm ab, indem du ein Issue eröffnest.

- `stm diff`: genau zeigen, welche Bereiche einer Seite sich geändert haben, und Agenten Ausschnitte statt ganzer Seiten geben
- `stm timelapse`: die Historie einer Seite in ein GIF oder MP4 verwandeln, mit Git-Commit-Untertiteln
- `stm backfill`: deine Git-Historie durchgehen und die visuelle Historie aufbauen, die du nie aufgenommen hast
- Aufnahmen im angemeldeten Zustand (`--storage-state`)
- Eine lokale Galerie mit Zeitregler

Nicht geplant: Cloud-Sync, Konten, Telemetrie, ein Watch-Modus, eine Konfigurationsdatei.

## Mitmachen

Fehlerberichte mit einem echten Lauf im Anhang sind gerade das Nützlichste. Fang mit [CONTRIBUTING.md](../../CONTRIBUTING.md) an, dann [AGENTS.md](../../AGENTS.md) für die Modulübersicht und die Regeln. Jede Entscheidung und ihr Grund stehen in [DECISIONS.md](../../DECISIONS.md).

## Über das Projekt

Gebaut von **Mohammed Sohaib Uddin**, weil Software, die sich jeden Tag ändert, eine Aufzeichnung davon verdient, wie sie aussah.

<p align="left">
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/Connect%20on%20LinkedIn-FF8C1A?style=for-the-badge&logo=linkedin&logoColor=white" alt="Auf LinkedIn vernetzen"></a>
  <a href="https://github.com/mdsohaib"><img src="https://img.shields.io/badge/Follow%20on%20GitHub-0A0E14?style=for-the-badge&logo=github&logoColor=white" alt="Auf GitHub folgen"></a>
</p>

Wenn `stm` dir etwas zeigt, das du gern gesehen hast: Ein Stern kostet nichts und hilft anderen, es zu finden.

MIT © Mohammed Sohaib Uddin
