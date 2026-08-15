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

<p align="center"><i>Übersetzt aus dem englischen README. Im Zweifelsfall gilt die englische Fassung.</i></p>

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/banner.svg" alt="screenshot-time-machine: jede Seite deiner localhost-App, als Screenshot, datiert und verglichen, mit einem Befehl" width="100%">
</p>

<p align="center">
  <b>Nimm mit einem einzigen Befehl einen vollständigen Screenshot von jeder Seite deiner Website auf.</b><br>
  Gespeichert in datierten Ordnern. Beim nächsten Lauf sagt es dir genau, welche Seiten sich geändert haben.<br>
  <b>Kostenlos und Open Source. Läuft komplett auf deinem eigenen Rechner.</b>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/screenshot-time-machine"><img src="https://img.shields.io/npm/v/screenshot-time-machine?style=flat-square&label=npm&color=FF6600&labelColor=0A0E14" alt="npm Version"></a>
  <a href="https://github.com/mdsohaib/screenshot-time-machine/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/mdsohaib/screenshot-time-machine/ci.yml?branch=main&style=flat-square&label=tests&color=FF6600&labelColor=0A0E14" alt="Tests"></a>
  <img src="https://img.shields.io/badge/dependencies-1-FF6600?style=flat-square&labelColor=0A0E14" alt="eine Abhängigkeit">
  <img src="https://img.shields.io/badge/node-22%2B-FF6600?style=flat-square&labelColor=0A0E14&logo=nodedotjs&logoColor=white" alt="Node 22+">
  <a href="../../LICENSE"><img src="https://img.shields.io/badge/license-MIT-FF6600?style=flat-square&labelColor=0A0E14" alt="MIT-Lizenz"></a>
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/LinkedIn-Mohammed%20Sohaib%20Uddin-FF6600?style=flat-square&labelColor=0A0E14&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
</p>

```bash
npx screenshot-time-machine@latest               # your app is on localhost? that is the whole setup
npx skills add mdsohaib/screenshot-time-machine  # teach Claude Code, Cursor, Codex and friends to run it
```

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/hero.svg" alt="stm meldet eine geänderte Seite im Terminal, daneben ein Ordner mit datierten Snapshots" width="820">
</p>

<p align="center">
  <b>Funktioniert mit</b><br>
  <img src="https://img.shields.io/badge/Claude%20Code-0A0E14?style=flat-square&logo=claude&logoColor=FF6600" alt="Claude Code">
  <img src="https://img.shields.io/badge/Codex-0A0E14?style=flat-square" alt="Codex">
  <img src="https://img.shields.io/badge/Cursor-0A0E14?style=flat-square&logo=cursor&logoColor=FF6600" alt="Cursor">
  <img src="https://img.shields.io/badge/Gemini%20CLI-0A0E14?style=flat-square&logo=googlegemini&logoColor=FF6600" alt="Gemini CLI">
  <img src="https://img.shields.io/badge/Antigravity-0A0E14?style=flat-square" alt="Antigravity">
  <img src="https://img.shields.io/badge/Copilot-0A0E14?style=flat-square&logo=githubcopilot&logoColor=FF6600" alt="GitHub Copilot">
  <img src="https://img.shields.io/badge/Windsurf-0A0E14?style=flat-square&logo=windsurf&logoColor=FF6600" alt="Windsurf">
  <img src="https://img.shields.io/badge/OpenCode-0A0E14?style=flat-square&logo=opencode&logoColor=FF6600" alt="OpenCode">
  <img src="https://img.shields.io/badge/Cline-0A0E14?style=flat-square" alt="Cline">
  <br><i>und mit den Menschen, die sie prompten</i>
</p>

---

## Was es ist

`stm` ist ein kostenloses Open-Source-Tool für die Kommandozeile. Du startest es, während deine Website auf deinem Rechner läuft. Es:

1. **Findet deine Website** automatisch auf localhost, oder dort, wohin du es mit `--url` schickst.
2. **Findet jede Seite** über deine Sitemap und deine Links.
3. **Nimmt jede Seite vollständig auf**, von oben bis unten, plus eine Ansicht des oberen Seitenbereichs, die sich schnell lesen lässt.
4. **Speichert sie als ganz normale PNG-Dateien** in einem Ordner, der nach Datum und Uhrzeit benannt ist.
5. **Vergleicht mit dem letzten Mal** und sagt dir genau, welche Seiten sich geändert haben.

```
$ stm
7 pages saved → screenshots/localhost-3000_2026-08-15_14-32/
   1 changed since last snapshot (Aug 12, 09:10): /pricing
```

Kein Konto. Keine Cloud. Kein Abo. Keine Konfigurationsdatei. Kein Hintergrundprozess. Eine Abhängigkeit, MIT-lizenziert, für immer deins.

## Das Problem, das es löst

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/the-problem.svg" alt="Zwölf Seiten-Thumbnails. Eines ist als die Seite markiert, die du dir angesehen hast. Vier sind kaputt zurückgekommen." width="820">
</p>

Ändere eine gemeinsam genutzte Komponente, ein Layout oder ein Stylesheet, und du hast keine Ahnung, was das mit den anderen vierzig Seiten gemacht hat. Der einzige ehrliche Weg, das herauszufinden, ist jede Seite zu öffnen und hinzusehen. Also macht es niemand.

KI-Coding-Agenten haben das verschärft. Du bittest um eine Korrektur auf der Pricing-Seite, der Agent bearbeitet eine gemeinsame Datei, und die About-Seite bekommt still und leise eine Lücke. Der Agent sieht das Ergebnis nie, und du auch nicht.

Git verfolgt jede Zeile deines Codes und keinen einzigen Pixel deiner Website. Visual-Testing-Dienste wollen eine CI-Pipeline und eine monatliche Rechnung. Screenshots von Hand überleben Seite vier nicht, und die Dateien behält am Ende niemand.

## Was es dir bringt

- **Finde kaputte Seiten, bevor deine Nutzer sie finden.** Ein Befehl, jede Seite, eine Liste dessen, was sich geändert hat.
- **Gib deinem KI-Agenten Augen.** `stm --json` reicht ihm die Dateipfade der geänderten Seiten, damit er nur diese öffnet und repariert, was er kaputt gemacht hat.
- **Führe eine visuelle Historie.** Jeder Lauf ist ein datierter Ordner voller einfacher PNGs. Scroll zurück und sieh, wie deine Website im März aussah, direkt aus Finder oder Explorer heraus.

## Schnellstart

Deine App muss auf localhost laufen (`npm run dev`, `rails s`, `python manage.py runserver`, ein statischer Server, alles was HTML ausliefert). Dann:

```bash
npx screenshot-time-machine@latest
```

Ändere etwas, führe es erneut aus und lies die `changed`-Zeile. Das ist der ganze Workflow.

<details>
<summary><b>Einmal installieren, als <code>stm</code> ausführen</b></summary>

```bash
npm install -g screenshot-time-machine
stm
```

Schreib immer `npx screenshot-time-machine@latest`, niemals `npx stm`. Der npm-Name `stm` gehört zu einem völlig anderen Paket aus dem Jahr 2014.
</details>

<details>
<summary><b>Was beim ersten Lauf passiert</b></summary>

- `stm` prüft die Ports 3000, 3001, 5173, 5174, 8080, 4321, 4322, 8000, 4200 und 5000 in dieser Reihenfolge und nimmt die erste App, die antwortet. Antworten mehrere, bevorzugt es die, die dieses Projekt zuletzt benutzt hat, und weist dich auf die anderen hin.
- Es benutzt einen Playwright-Browser, den du schon hast, oder das Chrome oder Edge auf deinem Rechner. Findet es nichts davon, lädt es einmalig ein Headless-Chrome herunter (etwa 120 MB) und sagt dir das.
- Hat dein Projekt eine `.gitignore`, trägt es dort einmalig `screenshots/` ein und sagt es dir. Es legt nie eine `.gitignore` an, und es löscht nie etwas.
</details>

**Voraussetzungen:** Node 22 oder neuer. Wenn du `npm run dev` ausführst, hast du es mit ziemlicher Sicherheit. Nicht sicher? `node -v`.

## In deinem KI-Coding-Agenten installieren

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/agent-loop.svg" alt="Die Schleife: Der Agent ändert die UI, führt stm --json aus, bekommt die Liste der Änderungen, sieht sich die fold-Bilder an, korrigiert und startet erneut" width="820">
</p>

Ein Befehl installiert `stm` als Skill, damit der Agent weiß, wann er es ausführen und wie er das Ergebnis lesen muss. Wähl deinen Agenten:

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
| **Alles andere** | `npx skills add mdsohaib/screenshot-time-machine` | wähl aus der Liste mit über 70 Agenten |

Häng an jeden dieser Befehle ein `-g`, um den Skill für alle Projekte statt nur für dieses zu installieren.

Oder sag es deinem Agenten einfach in klaren Worten:

> Installiere screenshot-time-machine, führe `stm` auf meiner App aus und zeig mir, was sich geändert hat.

Dann füg eine Zeile in die Memory-Datei ein, die dein Agent liest (`CLAUDE.md`, `AGENTS.md`, `GEMINI.md`, `.cursor/rules`), damit er seine eigene Arbeit prüft, ohne dass du danach fragen musst:

```
After changing anything a user can see, run `stm --json` and view the `fold` image of every entry in `changed` and `new` before saying you're done. Never claim a UI change is verified without viewing a screenshot.
```

<details>
<summary><b>Claude Code: Plugin-Installation, und wie sich die Schleife anfühlt</b></summary>

Skills sind der einfache Weg. Wenn du lieber Plugins nimmst, führ das hier in Claude Code aus:

```
/plugin marketplace add mdsohaib/screenshot-time-machine
/plugin install stm@stm
```

Kein SSH-Key auf GitHub? Nimm die URL-Variante: `/plugin marketplace add https://github.com/mdsohaib/screenshot-time-machine.git`

Claude Code öffnet Screenshots mit seinem Read-Tool, und `stm --json` reicht ihm absolute Pfade. Die Schleife lautet: bearbeiten, `stm --json`, die geänderten `fold`-Bilder lesen, korrigieren, wiederholen. Bitte es, die UI zu prüfen, und es greift von selbst zum Skill.
</details>

<details>
<summary><b>Codex</b></summary>

Schreib die Memory-Zeile in `AGENTS.md`. Codex öffnet Bilder mit `view_image`. Zögert es, sag ihm: sieh dir das fold-Bild jeder geänderten Seite an.
</details>

<details>
<summary><b>Cursor</b></summary>

Schreib die Memory-Zeile in eine Regel unter `.cursor/rules/`. Der Agent führt `stm --json` in seinem Terminal aus und öffnet die PNG-Pfade, die zurückkommen. Cursors eingebauter Browser zeigt eine Seite nach der anderen, `stm` reicht ihm alle auf einmal, plus den Vergleich.
</details>

<details>
<summary><b>Jeder Agent, auch ohne Skills-Unterstützung</b></summary>

`stm skill` gibt den Skill-Text aus. Füg ihn in die Anweisungsdatei ein, die dein Agent liest.

```bash
stm skill
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

Ein JSON-Dokument auf stdout, höchstens zwei Zeilen auf stderr, ausgegeben auch dann, wenn einzelne Seiten fehlschlagen. `code` spiegelt den Exit-Code. `truncated` zählt die Einträge, die es nicht in die Liste geschafft haben (die Grenze liegt bei 25, im Manifest stehen sie alle). Die Ausgabe enthält nie Seitentext, nur Pfade und Zahlen.

**Zum Thema Tokens.** Unveränderte Seiten kosten nichts, weil der Agent sie nie öffnet. Die Zusammenfassung sind grob 150 Tokens plus etwa 50 pro geänderter Seite. Eine geänderte Seite anzusehen kostet ein einziges Bild in 1440x900. Sehr hohe Screenshots ganzer Seiten werden von Vision-Modellen so weit herunterskaliert, bis der Text unlesbar ist. Genau deshalb bekommt jede Seite zusätzlich ein `fold`-Bild, und genau deshalb sagt der Skill dem Agenten, dass er dieses zuerst öffnen soll.

## Eine visuelle Historie auf der Festplatte

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

Jeder Lauf ist ein neuer Ordner, benannt nach der App und der Minute, in der er lief. Jede Datei darin trägt denselben Zeitstempel, sodass ein Screenshot, den du aus seinem Ordner ziehst, immer noch sagt, was er ist und wann er entstand. Zwei Läufe in derselben Minute bekommen `-2`, `-3` an den Zeitstempel. Seiten, die höher als 16.384 px sind, werden auf dieser Höhe abgeschnitten, das ist Chromiums Grenze, und als `truncated` markiert.

Öffne den Ordner in Finder oder Explorer, und du hast ein Fotoalbum deines Projekts. Die Historie besteht aus einfachen PNGs, sie überlebt dieses Tool also. Beim Deinstallieren bleibt nichts zurück außer dem `screenshots/`-Ordner und, falls du eine `.gitignore` hattest, einer Zeile darin.

## Befehle

| Befehl | Was er macht |
|---|---|
| `stm` | Nimmt jede Seite der App auf, die auf localhost läuft |
| `stm /pricing /about` | Nimmt nur diese Seiten auf, in Sekunden. Das ist die Schleife aus Ändern und Prüfen |
| `stm --url http://localhost:4321` | Nimmt diese App auf, statt sie automatisch zu suchen. Ein Pfad startet die Suche dort |
| `stm --mobile` | Nimmt zusätzlich eine Handy-Ansicht in 390x844 auf (`@mobile`-Dateien) |
| `stm --max 100` | Hört nach so vielen gefundenen Seiten auf (Standard 100) |
| `stm --out screenshots` | Wohin die Snapshots gehen (Standard `screenshots`) |
| `stm --json` | Maschinenlesbare Zusammenfassung auf stdout, für Agenten |
| `stm list` | Frühere Snapshots: Ordner, Seitenzahl, geändert, fehlgeschlagen |
| `stm open` | Öffnet den neuesten Snapshot-Ordner |
| `stm skill` | Gibt den Agenten-Skill aus |

Exit-Codes: `0` alles aufgenommen, `1` nichts aufgenommen (keine App, kein Browser, falsche Argumente), `2` fertig, aber einzelne Seiten sind fehlgeschlagen oder der Lauf wurde unterbrochen. Eine fehlgeschlagene Seite stoppt den Lauf nie.

## Wie es Seiten findet und Änderungen verfolgt

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/how-it-works.svg" alt="erkennen, finden, aufnehmen, vergleichen, berichten" width="820">
</p>

Die Details, die die Screenshots vertrauenswürdig machen:

- Seiten werden vor der Aufnahme bis nach unten gescrollt, damit Lazy-Images und Lazy-Sections laden, danach wieder nach oben. Sites mit Smooth-Scroll werden dabei berücksichtigt.
- Animationen werden in ihrem Endzustand eingefroren, damit Fade-ins sichtbar sind und Spinner stillstehen. Zwei Läufe auf derselben Maschine erzeugen Byte-identische PNGs, und genau das gibt dem Wort „geändert" seine Bedeutung.
- Dev-Toolbars (Astro, Nuxt, das Next.js-Badge) werden ausgeblendet. Dev-**Fehler**-Overlays niemals: Die Seite wird so aufgenommen, wie sie ist, und mit einer Warnung markiert, denn eine kaputte Seite ist genau das, was du sehen willst.
- Langlebige Verbindungen (HMR-Sockets, Event-Streams) blockieren nie eine Aufnahme. Jede Seite bekommt ein Budget von 30 Sekunden und einen zweiten Versuch, danach wird sie als fehlgeschlagen vermerkt und der Lauf geht weiter.
- Das Manifest wird nach jeder Seite geschrieben, sodass ein unterbrochener Lauf trotzdem einen Ordner hinterlässt, den `stm list` lesen kann, und die Zusammenfassung sagt, dass er früh abgebrochen wurde.
- Links auf `/logout`, `/delete` und Ähnliches werden nie verfolgt. Dateien, `/api/`, fremde Origins und dein eigener `screenshots/`-Ordner ebenso wenig.

## Im Vergleich

| | stm | Claude Code Desktop Auto-Verify | Playwright MCP, agent-browser, DevTools MCP | Percy, Chromatic |
|---|---|---|---|---|
| Jede Seite mit einem Befehl | ja | eine Seite nach der anderen | eine Seite pro Tool-Aufruf | ja, in CI |
| Sagt dir, welche Seiten sich geändert haben | ja | nein | nein | ja, in der Cloud |
| Funktioniert im Terminal, in Cursor, in Codex | ja | nur Desktop | ja | nur CI |
| Durchblätterbare Historie auf der Festplatte | ja | nein | nein | in ihrer Cloud |
| Läuft komplett auf deinem Rechner | ja | ja | ja | nein |

Das sind Ergänzungen, keine Konkurrenten. Nimm ein Browser-Tool, wenn dein Agent herumklicken muss. Nimm `stm`, wenn er sehen muss, was er gerade angefasst hat.

## Datenschutz

**Läuft zu 100 % lokal.** `stm` spricht nur mit der URL deiner App und, ein einziges Mal, mit Playwrights Browser-CDN, falls du kein Chrome oder Edge hast. Deine Screenshots verlassen deinen Rechner nie. Keine Konten, keine API-Keys, keine Telemetrie. Die Seiten, die du aufnimmst, laden ihre eigenen Ressourcen genau so, wie sie es in deinem Browser täten. Das vollständige Bedrohungsmodell steht in [SECURITY.md](../../SECURITY.md).

## FAQ

<details>
<summary><b>Ist es wirklich kostenlos?</b></summary>
Ja. MIT-lizenziert, Open Source, keine Bezahlstufe, kein gehosteter Dienst, nichts zum Anmelden. Installier es, benutz es für immer, forke es, wenn du magst.
</details>

<details>
<summary><b>Funktioniert es mit Next.js, Vite, Astro, SvelteKit, Rails, Django, statischen Seiten?</b></summary>
Ja. Mit allem, was HTML auf localhost ausliefert. Die üblichen Ports für all das werden automatisch geprüft, für alles andere nimm <code>--url</code>.
</details>

<details>
<summary><b>Es hat nur meine Startseite gefunden.</b></summary>
Seiten werden über deine Sitemap und über <code>&lt;a href&gt;</code>-Links gefunden. Apps, die über Buttons oder Hash-Routen (<code>/#/about</code>) navigieren, haben keine Links zum Verfolgen. Nenn die Seiten direkt: <code>stm /about /pricing</code>. Agenten wird gesagt, dass sie die Seiten übergeben sollen, die sie angefasst haben.
</details>

<details>
<summary><b>Die meisten meiner Screenshots zeigen die Login-Seite.</b></summary>
Deine App leitet zur Anmeldung um. <code>stm</code> kann sich noch nicht anmelden, und es sagt dir, wenn das passiert. Aufnahmen im angemeldeten Zustand stehen auf der Roadmap.
</details>

<details>
<summary><b>Nach einer Weile wird alles als geändert angezeigt.</b></summary>
Übliche Ursachen: Dein Browser hat sich aktualisiert, was das Rendering leicht verschiebt (<code>stm</code> merkt sich die Browser-Version und warnt dich), oder eine Seite zeigt etwas, das sich von selbst bewegt, etwa eine Uhr, „vor 3 Minuten", ein zufälliges Hero-Bild, eine Canvas-Animation oder ein Cookie-Banner, das nach dem ersten Besuch verschwindet. Übergib diese Seiten explizit und schau sie dir selbst an, bis <code>stm diff</code> da ist.
</details>

<details>
<summary><b>Kann es automatisch laufen und meine Dateien beobachten?</b></summary>
Nein, mit Absicht. <code>stm</code> ist ein Knopf für Speicherpunkte, wie <code>git commit</code>: Du, oder dein Agent, entscheidet, welcher Moment es wert ist, festgehalten zu werden. Wenn du es automatisch willst, schreib die eine Zeile in die Memory-Datei deines Agenten und lass ihn entscheiden.
</details>

<details>
<summary><b>Kann ich aus meiner Historie einen Zeitraffer machen?</b></summary>
Ein eingebautes <code>stm timelapse</code> steht auf der Roadmap. Heute geht es mit ffmpeg:
<pre><code>ffmpeg -framerate 1 -pattern_type glob -i 'screenshots/*/pricing_*.png' \
  -vf "scale=720:-1,split[a][b];[a]palettegen[p];[b][p]paletteuse" pricing.gif</code></pre>
</details>

<details>
<summary><b>Ich benutze Lovable, Bolt oder v0. Kann ich das hier nutzen?</b></summary>
Die lassen deine App in ihrer Cloud laufen, es gibt also kein localhost zum Aufnehmen. Exportier das Projekt, lass es lokal laufen, und <code>stm</code> funktioniert. Alles, was du mit Claude Code, Cursor, Codex, Windsurf oder Copilot auf deinem eigenen Rechner baust, funktioniert sofort.
</details>

<details>
<summary><b>Warum nicht einfach ein Playwright-Skript schreiben?</b></summary>
Könntest du. <code>stm</code> ist genau dieses Skript, plus Seitenfindung, ein stabiles Ordner-Layout, Änderungserkennung, agentenfreundliche Ausgabe, Umgang mit Dev-Overlays und all die Sonderfälle, gepflegt. Und es ist ein Befehl, den dein Agent bereits kennt.
</details>

<details>
<summary><b>Linux sagt, dem Browser fehlen Bibliotheken.</b></summary>
Führ den <code>install-deps</code>-Befehl aus, den es dir ausgibt, einmal. WSL und Codespaces brauchen ihn auch.
</details>

<details>
<summary><b>Wo liegt der heruntergeladene Browser?</b></summary>
In Playwrights Cache: <code>~/Library/Caches/ms-playwright</code> unter macOS, <code>~/.cache/ms-playwright</code> unter Linux, <code>%LOCALAPPDATA%\ms-playwright</code> unter Windows. Lösch ihn jederzeit, <code>stm</code> lädt ihn bei Bedarf wieder herunter.
</details>

<details>
<summary><b>Kann ich es auf eine Site richten, die nicht auf localhost läuft?</b></summary>
Ja: <code>stm --url https://staging.example.com</code>. Es bleibt auf dieser Origin und überspringt Links, die zerstörerisch aussehen. Bitte nimm nur Sites auf, für die du die Erlaubnis hast.
</details>

## Roadmap

Bewusst klein gehalten. Stimm ab, indem du ein Issue eröffnest.

- `stm diff`: zeigt genau, welche Bereiche einer Seite sich geändert haben, und reicht Agenten Ausschnitte statt ganzer Seiten
- `stm timelapse`: macht aus der Historie einer Seite ein GIF oder MP4, mit Git-Commit-Untertiteln
- `stm backfill`: geht deine Git-Historie durch und baut die visuelle Historie, die du nie aufgenommen hast
- Aufnahmen im angemeldeten Zustand (`--storage-state`)
- Eine lokale Galerie mit Zeitregler

Nicht geplant: Cloud-Sync, Konten, Telemetrie, ein Watch-Modus, eine Konfigurationsdatei.

## Mitmachen

Fehlerberichte mit einem echten Lauf im Anhang sind gerade das Nützlichste überhaupt. Fang mit [CONTRIBUTING.md](../../CONTRIBUTING.md) an, dann [AGENTS.md](../../AGENTS.md) für die Modulübersicht und die Regeln. Jede Entscheidung und ihr Grund stehen in [DECISIONS.md](../../DECISIONS.md).

## Über das Projekt

Gebaut von **Mohammed Sohaib Uddin**, weil Agenten, die UI ausliefern, die sich niemand ansieht, eine Möglichkeit zum Hinsehen brauchten.

<p align="left">
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/Connect%20on%20LinkedIn-FF6600?style=for-the-badge&logo=linkedin&logoColor=white" alt="Auf LinkedIn vernetzen"></a>
  <a href="https://github.com/mdsohaib"><img src="https://img.shields.io/badge/Follow%20on%20GitHub-0A0E14?style=for-the-badge&logo=github&logoColor=white" alt="Auf GitHub folgen"></a>
</p>

Wenn `stm` dich davor bewahrt, eine kaputte Seite auszuliefern: Ein Stern kostet nichts und hilft anderen, es zu finden.

MIT © Mohammed Sohaib Uddin
