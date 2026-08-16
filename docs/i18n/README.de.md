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

<i>Übersetzt aus der englischen README. Im Zweifelsfall gilt die englische Fassung.</i>

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/banner.svg" alt="screenshot-time-machine: jede Seite deiner localhost-App, als Screenshot, mit Datum und Änderungsvergleich, mit einem Befehl" width="100%">
</p>

<h1 align="center">screenshot-time-machine</h1>

<p align="center">
  <b>CLI für Ganzseiten-Screenshots: fotografiere jede Seite deiner localhost-Website mit einem einzigen Befehl.</b><br>
  Erstelle in einem Durchgang einen Ganzseiten-Screenshot von jeder Seite der App, an der du gerade baust.<br>
  Gespeichert in Ordnern mit Datum. Beim nächsten Lauf sagt dir das Tool genau, welche Seiten sich geändert haben.<br>
  <b>Kostenlos und Open Source. Läuft vollständig auf deinem eigenen Rechner.</b>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/screenshot-time-machine"><img src="https://img.shields.io/npm/v/screenshot-time-machine?style=flat-square&label=npm&color=FF6600&labelColor=0A0E14" alt="npm-Version"></a>
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
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/hero.svg" alt="stm meldet im Terminal eine geänderte Seite, daneben ein Ordner mit datierten Snapshots" width="820">
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
  <br><i>und mit den Menschen, die sie steuern</i>
</p>

---

## Was es ist

`stm` ist ein kostenloses Open-Source-Kommandozeilenwerkzeug. Du startest es, während deine Website auf deinem Rechner läuft. Es:

1. **Findet deine Seite** automatisch auf localhost, oder dort, wohin du es mit `--url` schickst.
2. **Findet deine Unterseiten**, indem es den `<a href>`-Links folgt und deine `sitemap.xml` liest, falls vorhanden, bis zu 100 Seiten pro Lauf. Seiten, die nur über einen Klick auf einen Button erreichbar sind, und Hash-Routen wie `/#/about` lassen sich nicht verfolgen. Nenne sie selbst: `stm /about /pricing`.
3. **Fotografiert jede Seite komplett**, von oben bis unten, plus ein zweites Bild von nur dem oberen Bereich, also dem Teil, der auf einen Bildschirm passt. Dieses zweite Bild heißt `fold`-Bild und ist das, was du dir zuerst ansehen solltest.
4. **Speichert alles als ganz normale PNG-Dateien** in einem Ordner, der nach Datum und Uhrzeit benannt ist.
5. **Vergleicht mit dem letzten Mal** und sagt dir genau, welche Seiten sich geändert haben.

```
$ stm
7 pages saved → screenshots/localhost-3000_2026-08-15_14-32/
   1 changed since last snapshot (Aug 12, 09:10): /pricing
```

Kein Konto. Keine Cloud. Kein Abo. Keine Konfigurationsdatei. Kein Hintergrundprozess. Eine Abhängigkeit, MIT-lizenziert, für immer deins.

## Das Problem, das es löst

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/the-problem.svg" alt="Zwölf Seiten-Vorschaubilder. Eines ist als die Seite markiert, die du dir angesehen hast. Vier kamen kaputt zurück." width="820">
</p>

Du änderst eine gemeinsam genutzte Komponente, ein Layout oder ein Stylesheet und hast keine Ahnung, was das mit den anderen vierzig Seiten gemacht hat. Der einzig ehrliche Weg, das herauszufinden, ist, jede Seite zu öffnen und hinzuschauen. Also macht es niemand.

KI-Coding-Agenten haben das verschärft. Du bittest um eine Korrektur auf der Preisseite, der Agent ändert eine gemeinsam genutzte Datei, und die Über-uns-Seite bekommt klammheimlich eine Lücke. Der Agent sieht das Ergebnis nie, und du auch nicht.

Git verfolgt jede Zeile deines Codes und kein einziges Pixel deiner Website. Dienste für visuelles Testen wollen eine CI-Pipeline und eine monatliche Rechnung. Screenshots von Hand überstehen keine vierte Seite, und niemand hebt die Dateien auf.

## Warum es hilft

- **Finde kaputte Seiten vor deinen Nutzern.** Ein Befehl, alle Seiten, eine Liste dessen, was sich geändert hat.
- **Gib deinem KI-Agenten Augen.** `stm --json` liefert ihm die Dateipfade der geänderten Seiten, damit er nur diese öffnet und repariert, was er kaputt gemacht hat.
- **Halte eine visuelle Historie.** Jeder Lauf ist ein datierter Ordner mit einfachen PNGs. Scrolle zurück und sieh, wie deine Website im März aussah, direkt im Finder oder Explorer.

## Schnellstart

Deine App muss auf localhost laufen (`npm run dev`, `rails s`, `python manage.py runserver`, ein statischer Server, alles, was HTML ausliefert). Dann:

```bash
npx screenshot-time-machine@latest
```

**Benötigt Node 22 oder neuer.** Prüfe es mit `node -v`. Wenn dort 21 oder niedriger steht, aktualisiere Node zuerst über [nodejs.org](https://nodejs.org).

Der erste Lauf verwendet das Chrome oder Edge, das bereits auf deinem Rechner ist. Hast du keines von beiden, lädt es einmalig einen Browser herunter, etwa 120 MB, und sagt dir vorher Bescheid. Dieser Download ist das Einzige, was stm jemals aus dem Internet holt.

Ändere etwas, starte es erneut und lies die `changed`-Zeile. Das ist der komplette Arbeitsablauf.

Ab hier wird der Befehl der Kürze halber als `stm` geschrieben. Für diesen kurzen Namen installierst du es einmal:

```bash
npm install -g screenshot-time-machine
```

Nicht zu installieren ist völlig in Ordnung. Schreibe dann überall dort `npx screenshot-time-machine@latest`, wo `stm` steht. Schreibe niemals `npx stm`: das ist ein völlig anderes Paket von 2014.

<details>
<summary><b>Was beim ersten Lauf sonst noch passiert</b></summary>

- `stm` prüft die Ports 3000, 3001, 5173, 5174, 8080, 4321, 4322, 8000, 4200 und 5000, in dieser Reihenfolge, und nimmt die erste App, die antwortet. Antworten mehrere, bevorzugt es die, die dieses Projekt zuletzt benutzt hat, und weist dich auf die anderen hin.
- Hat dein Projekt eine `.gitignore`, trägt es dort einmalig `screenshots/` ein und sagt es dir. Es legt nie eine `.gitignore` an, und es löscht nie etwas.
</details>

## In deinem KI-Coding-Agenten installieren

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/agent-loop.svg" alt="Der Kreislauf: Der Agent ändert die UI, führt stm --json aus, bekommt die Liste der Änderungen, sieht sich die fold-Bilder an, korrigiert und startet erneut" width="820">
</p>

Ein Befehl installiert `stm` als Skill: eine kurze Anweisungsdatei, die dein Agent liest, damit er weiß, wann er `stm` ausführen und wie er das Ergebnis lesen soll. `npx skills add` ist ein separater Open-Source-Installer, der genau diesen einen Ordner in dein Projekt kopiert und sonst nichts verändert. Wähle deinen Agenten:

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
| **Alles andere** | `npx skills add mdsohaib/screenshot-time-machine` | wähle aus der Liste von über 70 Agenten |

Hänge an jeden dieser Befehle `-g` an, um es für alle Projekte statt nur für dieses zu installieren.

Oder sag deinem Agenten einfach in klaren Worten:

> Installiere screenshot-time-machine, führe `stm` auf meiner App aus und zeig mir, was sich geändert hat.

Füge dann eine Zeile in die Datei ein, die dein Agent bei jeder Anfrage liest, damit er seine eigene Arbeit überprüft, ohne dass du ihn darum bitten musst:

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

Skills sind der einfache Weg. Wenn du Plugins bevorzugst, führe dies in Claude Code aus:

```
/plugin marketplace add mdsohaib/screenshot-time-machine
/plugin install stm@stm
```

Kein SSH-Key auf GitHub? Nimm die URL-Form: `/plugin marketplace add https://github.com/mdsohaib/screenshot-time-machine.git`

Claude Code öffnet Screenshots mit seinem Read-Tool, und `stm --json` liefert ihm absolute Pfade. Der Kreislauf lautet: ändern, `stm --json`, die geänderten `fold`-Bilder lesen, korrigieren, wiederholen. Bitte es, "die UI zu prüfen", und es greift von selbst zum Skill.
</details>

<details>
<summary><b>Codex</b></summary>

Schreib die Merkzeile in `AGENTS.md`. Codex öffnet Bilder mit `view_image`. Zögert es, sag ihm: "sieh dir das fold-Bild jeder geänderten Seite an".
</details>

<details>
<summary><b>Cursor</b></summary>

Schreib die Merkzeile in eine Regel unter `.cursor/rules/`. Der Agent führt `stm --json` in seinem Terminal aus und öffnet die PNG-Pfade, die zurückkommen. Der eingebaute Browser von Cursor zeigt immer nur eine Seite. `stm` liefert ihm alle, plus den Vergleich.
</details>

<details>
<summary><b>Jeder Agent, ohne Skill-Unterstützung</b></summary>

`stm skill` gibt den Skill-Text aus. Füge ihn in die Anweisungsdatei ein, die dein Agent liest. Das funktioniert, ohne dass du irgendetwas installierst:

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

Ein JSON-Dokument auf stdout, höchstens zwei Zeilen auf stderr, auch dann ausgegeben, wenn einzelne Seiten fehlschlagen. `code` entspricht dem Exit-Code.

Ein Lauf, der gar nicht erst starten kann, gibt stattdessen ein deutlich kleineres Objekt aus: `{"code": 1, "error": "no_server" | "no_browser", "message": "...", "fix": "..."}`. Falsche Argumente ergeben `{"error": "bad_args", "message": "...", "fix": "Run stm --help"}`. Prüfe `error`, bevor du `changed` liest. `truncated` zählt die Einträge, die in der Liste fehlen (die Obergrenze liegt bei 25, das Manifest enthält alle). Die Ausgabe enthält niemals Seitentext, nur Pfade und Zahlen.

**Zum Thema Tokens.** Unveränderte Seiten kosten nichts, weil der Agent sie nie öffnet. Die Zusammenfassung liegt bei etwa 150 Tokens plus rund 50 pro geänderter Seite. Eine geänderte Seite anzusehen kostet ein einziges Bild in 1440x900. Sehr hohe Ganzseiten-Screenshots werden von Vision-Modellen so weit herunterskaliert, dass der Text unlesbar wird. Genau deshalb bekommt jede Seite zusätzlich ein `fold`-Bild, und genau deshalb weist der Skill den Agenten an, zuerst dieses zu öffnen.

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

Jeder Lauf ist ein neuer Ordner, benannt nach der App und der Minute, in der er lief. Jede Datei darin trägt denselben Zeitstempel, sodass ein Screenshot auch außerhalb seines Ordners noch sagt, was er ist und wann er entstand. Zwei Läufe in derselben Minute bekommen ein `-2`, `-3` am Zeitstempel. Seiten, die höher als 16.384 px sind, werden an dieser Stelle abgeschnitten, das ist die Grenze von Chromium, und als `truncated` markiert.

Öffne den Ordner im Finder oder Explorer und du hast ein Fotoalbum deines Projekts. Die Historie besteht aus einfachen PNGs und überlebt damit dieses Tool. Deinstallieren hinterlässt nichts außer dem Ordner `screenshots/` und, falls du eine `.gitignore` hattest, einer Zeile darin.

## Befehle

| Befehl | Was er tut |
|---|---|
| `stm` | Snapshot von jeder Seite der App, die auf localhost läuft |
| `stm /pricing /about` | Snapshot nur dieser Seiten, in Sekunden. Das ist der Ändern-und-Prüfen-Kreislauf |
| `stm --url http://localhost:4321` | Snapshot dieser App statt automatischer Erkennung. Ein Pfad startet die Suche dort |
| `stm --mobile` | Zusätzlich eine Handy-Ansicht in 390x844 aufnehmen (`@mobile`-Dateien) |
| `stm --max 100` | Nach so vielen Seiten die Suche beenden (Standard 100) |
| `stm --out screenshots` | Wohin die Snapshots kommen (Standard `screenshots`) |
| `stm --json` | Maschinenlesbare Zusammenfassung auf stdout, für Agenten |
| `stm list` | Frühere Snapshots: Ordner, Seitenzahl, geändert, fehlgeschlagen |
| `stm open` | Den neuesten Snapshot-Ordner öffnen |
| `stm skill` | Den Agenten-Skill ausgeben |

Exit-Codes: `0` alles aufgenommen, `1` nichts aufgenommen (keine App, kein Browser, falsche Argumente), `2` beendet, aber einzelne Seiten sind fehlgeschlagen oder der Lauf wurde unterbrochen. Eine fehlschlagende Seite stoppt niemals den Lauf.

## Wie es Seiten findet und Änderungen verfolgt

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/how-it-works.svg" alt="erkennen, entdecken, aufnehmen, vergleichen, berichten" width="820">
</p>

Die Details, die die Screenshots vertrauenswürdig machen:

- Seiten werden vor der Aufnahme bis nach unten gescrollt, damit nachladende Bilder und Abschnitte erscheinen, und danach zurückgescrollt. Sites mit weichem Scrollen werden korrekt behandelt.
- Animationen werden in ihrem Endzustand eingefroren, sodass Einblendungen sichtbar sind und Ladeanimationen stillstehen. Zwei Läufe auf demselben Rechner erzeugen von einer inhaltlich unveränderten Seite Byte für Byte identische PNGs, und genau das gibt "geändert" seine Bedeutung. Eine Seite mit einer Uhr, einer relativen Zeitangabe, einem wechselnden Hero-Bild oder einer Canvas-Animation wird immer als geändert gemeldet.
- Entwickler-Toolbars (Astro, Nuxt, das Next.js-Badge) werden ausgeblendet. **Fehler**-Overlays der Entwicklungsumgebung niemals: Die Seite wird so aufgenommen, wie sie ist, und mit einer Warnung markiert, denn eine kaputte Seite ist genau das, was du sehen willst.
- Langlebige Verbindungen (HMR-Sockets, Event-Streams) blockieren nie eine Aufnahme. Jede Seite bekommt ein Budget von 30 Sekunden und einen zweiten Versuch, danach wird sie als fehlgeschlagen vermerkt und der Lauf geht weiter.
- Das Manifest wird nach jeder Seite geschrieben, sodass auch ein unterbrochener Lauf einen Ordner hinterlässt, den `stm list` lesen kann, und die Zusammenfassung sagt, dass er früh abgebrochen wurde.
- Links auf `/logout`, `/delete` und ähnliche werden nie verfolgt. Ebenso wenig Dateien, `/api/`, fremde Origins oder dein eigener Ordner `screenshots/`.

## Wie es sich gegenüber Visual-Regression-Tools schlägt

| | stm | Claude Code Desktop Auto-Verify | Playwright MCP, agent-browser, DevTools MCP | Percy, Chromatic |
|---|---|---|---|---|
| Jede Seite mit einem Befehl | ja | eine Seite nach der anderen | eine Seite pro Tool-Aufruf | ja, in der CI |
| Sagt dir, welche Seiten sich geändert haben | ja | nein | nein | ja, in der Cloud |
| Funktioniert im Terminal, in Cursor, in Codex | ja | nur Desktop | ja | nur CI |
| Durchsuchbare Historie auf der Festplatte | ja | nein | nein | in deren Cloud |
| Läuft vollständig auf deinem Rechner | ja | ja | ja | nein |

`stm` ist die kostenlose, lokale Hälfte des visuellen Regressionstests: Es sagt dir, welche Seiten sich geändert haben, und legt dir die Pixel hin, ohne CI-Pipeline, ohne Konto und ohne monatliche Rechnung. Diese Werkzeuge ergänzen sich, sie konkurrieren nicht. Nimm ein Browser-Tool, wenn dein Agent herumklicken muss. Nimm `stm`, wenn er alles sehen muss, was er gerade angefasst hat.

## Datenschutz

**Läuft zu 100 % lokal.** `stm` spricht nur mit der URL deiner App und, ein einziges Mal, mit dem Browser-CDN von Playwright, falls du weder Chrome noch Edge hast. Deine Screenshots verlassen deinen Rechner nie. Keine Konten, keine API-Schlüssel, keine Telemetrie. Die aufgenommenen Seiten laden ihre eigenen Ressourcen genau so, wie sie es in deinem Browser täten. Das vollständige Bedrohungsmodell steht in [SECURITY.md](../../SECURITY.md).

## FAQ

<details>
<summary><b>Ist es wirklich kostenlos?</b></summary>
Ja. MIT-lizenziert, Open Source, keine kostenpflichtige Stufe, kein gehosteter Dienst, keine Anmeldung. Installieren, für immer nutzen, forken, wenn du magst.
</details>

<details>
<summary><b>Funktioniert es mit Next.js, Vite, Astro, SvelteKit, Rails, Django, statischen Seiten?</b></summary>
Ja. Mit allem, was HTML auf localhost ausliefert. Die üblichen Ports für all das werden automatisch geprüft; für alles andere nimm <code>--url</code>.
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
<summary><b>Nach einer Weile wird alles als geändert angezeigt.</b></summary>
Übliche Ursachen: Dein Browser wurde aktualisiert, was das Rendering leicht verschiebt (<code>stm</code> merkt sich die Browser-Version und warnt dich), oder eine Seite zeigt etwas, das sich von selbst bewegt, etwa eine Uhr, "vor 3 Minuten", ein zufälliges Hero-Bild, eine Canvas-Animation oder ein Cookie-Banner, das nach dem ersten Besuch verschwindet. Übergib solche Seiten explizit und schau sie dir mit eigenen Augen an, bis <code>stm diff</code> kommt.
</details>

<details>
<summary><b>Kann es automatisch laufen und meine Dateien beobachten?</b></summary>
Nein, mit Absicht. <code>stm</code> ist ein Speicherpunkt-Knopf, wie <code>git commit</code>: Du, oder dein Agent, entscheidet, welcher Moment festgehalten werden soll. Wenn du es automatisch willst, schreib die einzeilige Anweisung in die Merkdatei deines Agenten und lass den Agenten entscheiden.
</details>

<details>
<summary><b>Kann ich meine Historie in einen Zeitraffer verwandeln?</b></summary>
Ein vollwertiges <code>stm timelapse</code> steht auf der Roadmap. Heute geht es mit ffmpeg:
<pre><code>ffmpeg -framerate 1 -pattern_type glob -i 'screenshots/*/pricing_*.png' \
  -vf "scale=720:-1,split[a][b];[a]palettegen[p];[b][p]paletteuse" pricing.gif</code></pre>
</details>

<details>
<summary><b>Ich nutze Lovable, Bolt oder v0. Kann ich das verwenden?</b></summary>
Die betreiben deine App in ihrer Cloud, es gibt also kein localhost zum Fotografieren. Exportiere das Projekt, starte es lokal, und <code>stm</code> funktioniert. Alles, was mit Claude Code, Cursor, Codex, Windsurf oder Copilot auf deinem eigenen Rechner gebaut wurde, läuft sofort.
</details>

<details>
<summary><b>Warum nicht einfach ein Playwright-Skript schreiben?</b></summary>
Könntest du. <code>stm</code> ist genau dieses Skript, plus Seitenerkennung, ein verlässlicher Ordneraufbau, Änderungserkennung, agentenfreundliche Ausgabe, Umgang mit Entwickler-Overlays und all die Sonderfälle, gepflegt. Und es ist ein Befehl, den dein Agent bereits kennt.
</details>

<details>
<summary><b>Linux meldet, dem Browser fehlen Bibliotheken.</b></summary>
Führe den <code>install-deps</code>-Befehl aus, den es ausgibt, einmalig. WSL und Codespaces brauchen ihn ebenfalls.
</details>

<details>
<summary><b>Wo liegt der heruntergeladene Browser?</b></summary>
Im Cache von Playwright: <code>~/Library/Caches/ms-playwright</code> unter macOS, <code>~/.cache/ms-playwright</code> unter Linux, <code>%LOCALAPPDATA%\ms-playwright</code> unter Windows. Lösche ihn jederzeit; <code>stm</code> lädt ihn bei Bedarf erneut.
</details>

<details>
<summary><b>Kann ich es auf eine Site richten, die nicht auf localhost läuft?</b></summary>
Ja: <code>stm --url https://staging.example.com</code>. Es bleibt auf dieser Origin und überspringt Links, die nach Löschen oder Ähnlichem aussehen. Bitte fotografiere nur Sites, für die du die Erlaubnis hast.
</details>

## Roadmap

Bewusst klein gehalten. Stimme ab, indem du ein Issue eröffnest.

- `stm diff`: genau zeigen, welche Bereiche einer Seite sich geändert haben, und Agenten Ausschnitte statt ganzer Seiten geben
- `stm timelapse`: die Historie einer Seite in ein GIF oder MP4 verwandeln, mit Git-Commit-Untertiteln
- `stm backfill`: deine Git-Historie durchgehen und die visuelle Historie aufbauen, die du nie aufgenommen hast
- Aufnahmen im angemeldeten Zustand (`--storage-state`)
- Eine lokale Galerie mit Zeitregler

Nicht geplant: Cloud-Sync, Konten, Telemetrie, ein Watch-Modus, eine Konfigurationsdatei.

## Mitmachen

Fehlerberichte mit einem echten Lauf im Anhang sind gerade das Nützlichste. Fang mit [CONTRIBUTING.md](../../CONTRIBUTING.md) an, dann [AGENTS.md](../../AGENTS.md) für die Modulübersicht und die Regeln. Jede Entscheidung und ihr Grund stehen in [DECISIONS.md](../../DECISIONS.md).

## Über das Projekt

Gebaut von **Mohammed Sohaib Uddin**, weil Agenten, die UI ausliefern, die sich niemand ansieht, einen Weg zum Hinschauen brauchten.

<p align="left">
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/Connect%20on%20LinkedIn-FF6600?style=for-the-badge&logo=linkedin&logoColor=white" alt="Auf LinkedIn vernetzen"></a>
  <a href="https://github.com/mdsohaib"><img src="https://img.shields.io/badge/Follow%20on%20GitHub-0A0E14?style=for-the-badge&logo=github&logoColor=white" alt="Auf GitHub folgen"></a>
</p>

Wenn `stm` dich davor bewahrt, eine kaputte Seite auszuliefern: Ein Stern kostet nichts und hilft anderen, es zu finden.

MIT © Mohammed Sohaib Uddin
