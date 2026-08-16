<p align="center">
  <a href="../../README.md">English</a> ·
  <a href="README.zh-CN.md">简体中文</a> ·
  <a href="README.es.md">Español</a> ·
  <a href="README.hi.md">हिन्दी</a> ·
  <a href="README.pt-BR.md">Português</a> ·
  <a href="README.ja.md">日本語</a> ·
  <a href="README.de.md">Deutsch</a> ·
  Français ·
  <a href="README.ko.md">한국어</a> ·
  <a href="README.ru.md">Русский</a> ·
  <a href="README.ar.md">العربية</a>
</p>

*Traduit du README anglais. En cas de doute, la version anglaise fait référence.*

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/banner.svg" alt="screenshot-time-machine : chaque page de votre application en localhost, capturée, datée et comparée, en une seule commande" width="100%">
</p>

<h1 align="center">screenshot-time-machine</h1>

<p align="center">
  <b>CLI de capture pleine page : photographiez chaque page de votre site en localhost avec une seule commande.</b><br>
  Prenez une capture pleine page de chaque page de l'application que vous construisez, d'un seul coup.<br>
  Le tout rangé dans des dossiers datés. Au prochain lancement, l'outil vous dit exactement quelles pages ont changé.<br>
  <b>Gratuit et open source. Tourne entièrement sur votre machine.</b>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/screenshot-time-machine"><img src="https://img.shields.io/npm/v/screenshot-time-machine?style=flat-square&label=npm&color=FF6600&labelColor=0A0E14" alt="version npm"></a>
  <a href="https://github.com/mdsohaib/screenshot-time-machine/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/mdsohaib/screenshot-time-machine/ci.yml?branch=main&style=flat-square&label=tests&color=FF6600&labelColor=0A0E14" alt="tests"></a>
  <img src="https://img.shields.io/badge/dependencies-1-FF6600?style=flat-square&labelColor=0A0E14" alt="une seule dépendance">
  <img src="https://img.shields.io/badge/node-22%2B-FF6600?style=flat-square&labelColor=0A0E14&logo=nodedotjs&logoColor=white" alt="Node 22+">
  <a href="../../LICENSE"><img src="https://img.shields.io/badge/license-MIT-FF6600?style=flat-square&labelColor=0A0E14" alt="licence MIT"></a>
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/LinkedIn-Mohammed%20Sohaib%20Uddin-FF6600?style=flat-square&labelColor=0A0E14&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
</p>

```bash
npx screenshot-time-machine@latest               # your app is on localhost? that is the whole setup
npx skills add mdsohaib/screenshot-time-machine  # teach Claude Code, Cursor, Codex and friends to run it
```

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/hero.svg" alt="stm signalant une page modifiée dans le terminal, à côté d'un dossier de captures datées" width="820">
</p>

<p align="center">
  <b>Compatible avec</b><br>
  <img src="https://img.shields.io/badge/Claude%20Code-0A0E14?style=flat-square&logo=claude&logoColor=FF6600" alt="Claude Code">
  <img src="https://img.shields.io/badge/Codex-0A0E14?style=flat-square" alt="Codex">
  <img src="https://img.shields.io/badge/Cursor-0A0E14?style=flat-square&logo=cursor&logoColor=FF6600" alt="Cursor">
  <img src="https://img.shields.io/badge/Gemini%20CLI-0A0E14?style=flat-square&logo=googlegemini&logoColor=FF6600" alt="Gemini CLI">
  <img src="https://img.shields.io/badge/Antigravity-0A0E14?style=flat-square" alt="Antigravity">
  <img src="https://img.shields.io/badge/Copilot-0A0E14?style=flat-square&logo=githubcopilot&logoColor=FF6600" alt="GitHub Copilot">
  <img src="https://img.shields.io/badge/Windsurf-0A0E14?style=flat-square&logo=windsurf&logoColor=FF6600" alt="Windsurf">
  <img src="https://img.shields.io/badge/OpenCode-0A0E14?style=flat-square&logo=opencode&logoColor=FF6600" alt="OpenCode">
  <img src="https://img.shields.io/badge/Cline-0A0E14?style=flat-square" alt="Cline">
  <br><i>et les humains qui les pilotent</i>
</p>

---

## Ce que c'est

`stm` est un outil en ligne de commande gratuit et open source. Vous le lancez pendant que votre site tourne sur votre ordinateur. Il :

1. **Trouve votre site** automatiquement sur localhost, ou là où vous le pointez avec `--url`.
2. **Trouve vos pages** en suivant les liens `<a href>` qu'elles contiennent, et en lisant votre `sitemap.xml` si vous en avez un, jusqu'à 100 pages par exécution. Les pages accessibles uniquement par un clic sur un bouton, et les routes à dièse comme `/#/about`, ne peuvent pas être suivies. Nommez-les vous-même : `stm /about /pricing`.
3. **Capture chaque page en entier**, de haut en bas, plus une seconde image du seul haut de la page, la partie qui tient sur un écran. Cette seconde image s'appelle l'image `fold`, et c'est celle à regarder en premier.
4. **Les enregistre en simples fichiers PNG** dans un dossier nommé d'après la date et l'heure.
5. **Compare avec la fois précédente** et vous dit exactement quelles pages ont changé.

```
$ stm
7 pages saved → screenshots/localhost-3000_2026-08-15_14-32/
   1 changed since last snapshot (Aug 12, 09:10): /pricing
```

Pas de compte. Pas de cloud. Pas d'abonnement. Pas de fichier de configuration. Pas de processus en arrière-plan. Une seule dépendance, licence MIT, à vous pour toujours.

## Le problème qu'il résout

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/the-problem.svg" alt="Douze miniatures de pages. Une est marquée comme la page que vous avez regardée. Quatre sont revenues cassées." width="820">
</p>

Modifiez un composant partagé, une mise en page ou une feuille de style, et vous n'avez aucune idée de l'effet produit sur les quarante autres pages. La seule façon honnête de le savoir est d'ouvrir chaque page et de regarder, donc personne ne le fait.

Les agents de code IA ont rendu le problème plus aigu. Vous demandez un correctif sur la page de tarifs, l'agent modifie un fichier partagé, et la page À propos se retrouve avec un trou. L'agent ne voit jamais le résultat, et vous non plus.

Git suit chaque ligne de votre code et pas un seul pixel de votre site. Les services de tests visuels réclament un pipeline CI et une facture mensuelle. Les captures à la main ne survivent pas à la quatrième page, et personne ne garde les fichiers.

## Pourquoi ça aide

- **Repérez les pages cassées avant vos utilisateurs.** Une commande, toutes les pages, la liste de ce qui a changé.
- **Donnez des yeux à votre agent IA.** `stm --json` lui remet les chemins des fichiers des pages modifiées, pour qu'il n'ouvre que celles-là et répare ce qu'il a cassé.
- **Gardez un historique visuel.** Chaque exécution est un dossier daté de PNG ordinaires. Remontez le temps et voyez à quoi ressemblait votre site en mars, directement depuis le Finder ou l'Explorateur.

## Démarrage rapide

Votre application doit tourner sur localhost (`npm run dev`, `rails s`, `python manage.py runserver`, un serveur statique, n'importe quoi qui sert du HTML). Ensuite :

```bash
npx screenshot-time-machine@latest
```

**Nécessite Node 22 ou plus récent.** Lancez `node -v` pour vérifier. Si la sortie affiche 21 ou moins, mettez d'abord Node à jour depuis [nodejs.org](https://nodejs.org).

La première exécution utilise le Chrome ou l'Edge déjà présent sur votre machine. Si vous n'avez ni l'un ni l'autre, l'outil télécharge un navigateur une seule fois, environ 120 Mo, et vous prévient avant. Ce téléchargement est la seule chose que stm récupère jamais sur internet.

Changez quelque chose, relancez, et lisez la ligne `changed`. C'est tout le flux de travail.

Tout ce qui suit écrit la commande sous la forme courte `stm`. Pour obtenir ce nom court, installez-la une fois :

```bash
npm install -g screenshot-time-machine
```

Ne rien installer convient tout autant. Écrivez `npx screenshot-time-machine@latest` partout où vous voyez `stm`. N'écrivez jamais `npx stm` : c'est un paquet sans rapport datant de 2014.

<details>
<summary><b>Ce qui se passe d'autre à la première exécution</b></summary>

- `stm` sonde les ports 3000, 3001, 5173, 5174, 8080, 4321, 4322, 8000, 4200 et 5000, dans cet ordre, et utilise la première application qui répond. Si plusieurs répondent, il préfère celle que ce projet a utilisée la dernière fois et vous parle des autres.
- Si votre projet a un `.gitignore`, il y ajoute `screenshots/` une seule fois et vous le signale. Il ne crée jamais de `.gitignore`, et il ne supprime jamais rien.
</details>

## Installer dans votre agent de code IA

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/agent-loop.svg" alt="La boucle : l'agent modifie l'interface, lance stm --json, récupère la liste des pages modifiées, regarde les images fold, corrige et relance" width="820">
</p>

Une seule commande installe `stm` en tant que skill : un court fichier d'instructions que votre agent lit, pour savoir quand lancer `stm` et comment en lire le résultat. `npx skills add` est un installeur open source distinct qui copie ce seul dossier dans votre projet et ne change rien d'autre. Choisissez votre agent :

| Agent | Commande | Le skill atterrit dans |
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
| **Autre chose** | `npx skills add mdsohaib/screenshot-time-machine` | à choisir dans la liste de plus de 70 agents |

Ajoutez `-g` à n'importe laquelle de ces commandes pour l'installer pour tous vos projets au lieu de celui-ci.

Ou dites-le simplement à votre agent, en langage courant :

> Installe screenshot-time-machine, lance `stm` sur mon application, et montre-moi ce qui a changé.

Ajoutez ensuite une ligne au fichier que votre agent lit à chaque requête, pour qu'il vérifie son propre travail sans qu'on le lui demande :

```
After changing anything a user can see, run `stm --json` (or `npx -y screenshot-time-machine@latest --json` if `stm` is not installed) and view the `fold` image of every entry in `changed` and `new` before saying you're done. On the very first snapshot both lists are empty, so view the fold images of the pages you edited instead. Never claim a UI change is verified without viewing a screenshot.
```

Où placer cette ligne, selon l'agent :

| Agent | Fichier |
|---|---|
| Claude Code | `CLAUDE.md` |
| Codex, Antigravity, OpenCode | `AGENTS.md` |
| Gemini CLI | `GEMINI.md` |
| Cursor | `.cursor/rules/stm.mdc`, en commençant par `---`, puis `alwaysApply: true`, puis `---` |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Windsurf | `.windsurf/rules/stm.md` |
| Cline | `.clinerules/stm.md` |

<details>
<summary><b>Claude Code : installation par plugin, et à quoi ressemble la boucle</b></summary>

Les skills sont la voie la plus simple. Si vous préférez les plugins, lancez ceci dans Claude Code :

```
/plugin marketplace add mdsohaib/screenshot-time-machine
/plugin install stm@stm
```

Pas de clé SSH sur GitHub ? Utilisez la forme URL : `/plugin marketplace add https://github.com/mdsohaib/screenshot-time-machine.git`

Claude Code ouvre les captures avec son outil Read, et `stm --json` lui remet des chemins absolus. La boucle est : modifier, `stm --json`, lire les images `fold` modifiées, corriger, recommencer. Demandez-lui de "vérifier l'interface" et il ira chercher le skill de lui-même.
</details>

<details>
<summary><b>Codex</b></summary>

Placez la ligne de mémoire dans `AGENTS.md`. Codex ouvre les images avec `view_image`, donc s'il hésite, dites-lui "regarde l'image fold de chaque page modifiée".
</details>

<details>
<summary><b>Cursor</b></summary>

Placez la ligne de mémoire dans une règle sous `.cursor/rules/`. L'agent lance `stm --json` dans son terminal et ouvre les chemins PNG renvoyés. Le navigateur intégré de Cursor montre une page à la fois ; `stm` les lui remet toutes, avec la comparaison en prime.
</details>

<details>
<summary><b>N'importe quel agent, sans prise en charge des skills</b></summary>

`stm skill` affiche le texte du skill. Collez-le dans le fichier d'instructions que votre agent lit. Cela fonctionne sans rien installer :

```bash
npx screenshot-time-machine@latest skill
```
</details>

### Ce que l'agent récupère

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

Un seul document JSON sur stdout, au plus deux lignes sur stderr, affichées même quand certaines pages échouent. `code` reflète le code de sortie.

Une exécution qui ne peut pas démarrer affiche plutôt un objet bien plus petit : `{"code": 1, "error": "no_server" | "no_browser", "message": "...", "fix": "..."}`. Des arguments incorrects donnent `{"error": "bad_args", "message": "...", "fix": "Run stm --help"}`. Vérifiez `error` avant de lire `changed`. `truncated` compte les entrées laissées hors de la liste (la limite est de 25 ; le manifeste les contient toutes). La sortie ne contient jamais le texte des pages, seulement des chemins et des nombres.

**À propos des tokens.** Les pages inchangées ne coûtent rien à regarder, puisque l'agent ne les ouvre jamais. Le résumé fait environ 150 tokens, plus une cinquantaine par page modifiée. Regarder une page modifiée coûte une seule image 1440x900. Les captures pleine page très hautes sont réduites par les modèles de vision jusqu'à ce que le texte devienne illisible, ce qui est exactement la raison pour laquelle chaque page reçoit aussi une image `fold`, et pourquoi le skill dit à l'agent d'ouvrir celle-ci en premier.

## Un historique visuel sur disque

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

Chaque exécution crée un nouveau dossier nommé d'après l'application et la minute où elle a tourné. Chaque fichier à l'intérieur porte le même horodatage, si bien qu'une capture sortie de son dossier dit toujours ce qu'elle est et quand elle a été prise. Deux exécutions dans la même minute reçoivent `-2`, `-3` sur l'horodatage. Les pages plus hautes que 16 384 px sont coupées à cette hauteur, la limite de Chromium, et marquées `truncated`.

Ouvrez le dossier dans le Finder ou l'Explorateur et vous avez un album photo de votre projet. L'historique est fait de simples PNG, il survivra donc à cet outil. La désinstallation ne laisse rien derrière elle, sinon le dossier `screenshots/` et, si vous aviez un `.gitignore`, une ligne dedans.

## Commandes

| Commande | Ce qu'elle fait |
|---|---|
| `stm` | Capture chaque page de l'application qui tourne sur localhost |
| `stm /pricing /about` | Capture uniquement ces pages, en quelques secondes. C'est la boucle modifier-vérifier |
| `stm --url http://localhost:4321` | Capture cette application au lieu de la détection automatique. Un chemin démarre l'exploration à cet endroit |
| `stm --mobile` | Capture aussi une vue téléphone 390x844 (fichiers `@mobile`) |
| `stm --max 100` | Arrête la découverte après ce nombre de pages (100 par défaut) |
| `stm --out screenshots` | Où vont les captures (`screenshots` par défaut) |
| `stm --json` | Résumé lisible par une machine sur stdout, pour les agents |
| `stm list` | Captures passées : dossier, nombre de pages, modifiées, échouées |
| `stm open` | Ouvre le dossier de la dernière capture |
| `stm skill` | Affiche le skill pour agent |

Codes de sortie : `0` tout a été capturé, `1` rien n'a été capturé (pas d'application, pas de navigateur, arguments incorrects), `2` terminé avec des pages en échec ou exécution interrompue. Une page en échec n'arrête jamais l'exécution.

## Comment il trouve les pages et suit ce qui change

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/how-it-works.svg" alt="détecter, découvrir, capturer, comparer, rapporter" width="820">
</p>

Les détails qui rendent les captures dignes de confiance :

- Les pages sont défilées jusqu'en bas avant la capture, pour que les images et sections en chargement différé apparaissent, puis remontées. Les sites à défilement fluide sont gérés.
- Les animations sont figées sur leur état final, si bien que les fondus sont visibles et que les indicateurs de chargement restent immobiles. Deux exécutions sur la même machine produisent des PNG identiques octet pour octet d'une page dont le contenu n'a pas changé, et c'est ce qui donne un sens à "changed". Une page qui affiche une horloge, un temps relatif, une image de bannière tournante ou une animation canvas sera toujours signalée comme modifiée.
- Les barres d'outils de développement (Astro, Nuxt, le badge Next.js) sont masquées. Les surcouches **d'erreur** de développement ne le sont jamais : la page est capturée telle quelle et signalée par un avertissement, parce qu'une page cassée est exactement ce que vous voulez voir.
- Les connexions de longue durée (sockets HMR, flux d'événements) ne bloquent jamais une capture. Chaque page dispose d'un budget de 30 secondes et d'un nouvel essai, après quoi elle est enregistrée comme échouée et l'exécution continue.
- Le manifeste est écrit après chaque page, si bien qu'une exécution interrompue laisse quand même un dossier que `stm list` sait lire, et le résumé indique qu'elle s'est arrêtée en cours de route.
- Les liens vers `/logout`, `/delete` et compagnie ne sont jamais suivis. Pas plus que les fichiers, `/api/`, les autres origines, ou votre propre dossier `screenshots/`.

## Comparaison avec les outils de test de régression visuelle

| | stm | Vérification auto de Claude Code Desktop | Playwright MCP, agent-browser, DevTools MCP | Percy, Chromatic |
|---|---|---|---|---|
| Toutes les pages en une commande | oui | une page à la fois | une page par appel d'outil | oui, en CI |
| Vous dit quelles pages ont changé | oui | non | non | oui, dans le cloud |
| Fonctionne dans le terminal, Cursor, Codex | oui | Desktop uniquement | oui | CI uniquement |
| Historique navigable sur disque | oui | non | non | dans leur cloud |
| Tourne entièrement sur votre machine | oui | oui | oui | non |

`stm` est la moitié gratuite et locale du test de régression visuelle : il vous dit quelles pages ont changé et vous remet les pixels, sans pipeline CI, sans compte et sans facture mensuelle. Ces outils sont complémentaires, pas rivaux. Utilisez un outil de navigateur quand votre agent doit cliquer un peu partout. Utilisez `stm` quand il doit voir tout ce qu'il vient de toucher.

## Confidentialité

**Tourne à 100 % en local.** `stm` ne parle qu'à l'URL de votre application et, une seule fois, au CDN de navigateurs de Playwright si vous n'avez ni Chrome ni Edge. Vos captures ne quittent jamais votre machine. Pas de comptes, pas de clés d'API, pas de télémétrie. Les pages que vous capturez chargent leurs propres ressources exactement comme elles le feraient dans votre navigateur. Modèle de menace complet dans [SECURITY.md](../../SECURITY.md).

## FAQ

<details>
<summary><b>C'est vraiment gratuit ?</b></summary>
Oui. Licence MIT, open source, pas de version payante, pas de service hébergé, rien à quoi s'inscrire. Installez-le, utilisez-le pour toujours, forkez-le si le coeur vous en dit.
</details>

<details>
<summary><b>Est-ce que ça marche avec Next.js, Vite, Astro, SvelteKit, Rails, Django, les sites statiques ?</b></summary>
Oui. Tout ce qui sert du HTML sur localhost. Les ports habituels de tous ces outils sont sondés automatiquement ; utilisez <code>--url</code> pour le reste.
</details>

<details>
<summary><b>Il n'a trouvé que ma page d'accueil.</b></summary>
Les pages sont découvertes depuis votre sitemap et depuis les liens <code>&lt;a href&gt;</code>. Les applications qui naviguent par boutons ou par routes à dièse (<code>/#/about</code>) n'ont aucun lien à suivre. Nommez les pages : <code>stm /about /pricing</code>. Les agents ont pour consigne de passer les pages qu'ils ont touchées.
</details>

<details>
<summary><b>La plupart de mes captures montrent la page de connexion.</b></summary>
Votre application redirige vers l'authentification. <code>stm</code> ne sait pas encore se connecter, et il vous prévient quand cela arrive. Les captures en session connectée sont à la feuille de route.
</details>

<details>
<summary><b>Au bout d'un moment, tout apparaît comme modifié.</b></summary>
Causes habituelles : votre navigateur s'est mis à jour, ce qui décale légèrement le rendu (<code>stm</code> enregistre la version du navigateur et vous avertit), ou une page affiche quelque chose qui bouge tout seul, comme une horloge, un "il y a 3 minutes", une image de bannière aléatoire, une animation canvas, ou une bannière de cookies qui disparaît après la première visite. Passez ces pages explicitement et inspectez-les à l'oeil en attendant l'arrivée de <code>stm diff</code>.
</details>

<details>
<summary><b>Peut-il tourner automatiquement, en surveillant mes fichiers ?</b></summary>
Non, et c'est délibéré. <code>stm</code> est un bouton de point de sauvegarde, comme <code>git commit</code> : vous, ou votre agent, décidez quel moment mérite d'être gardé. Si vous le voulez automatique, mettez l'instruction d'une ligne dans le fichier de mémoire de votre agent et laissez l'agent décider.
</details>

<details>
<summary><b>Puis-je transformer mon historique en timelapse ?</b></summary>
Une commande <code>stm timelapse</code> à part entière est à la feuille de route. Aujourd'hui, avec ffmpeg :
<pre><code>ffmpeg -framerate 1 -pattern_type glob -i 'screenshots/*/pricing_*.png' \
  -vf "scale=720:-1,split[a][b];[a]palettegen[p];[b][p]paletteuse" pricing.gif</code></pre>
</details>

<details>
<summary><b>J'utilise Lovable, Bolt ou v0. Puis-je m'en servir ?</b></summary>
Ces plateformes exécutent votre application dans leur cloud, il n'y a donc pas de localhost à capturer. Exportez le projet, lancez-le en local, et <code>stm</code> fonctionne. Tout ce qui est construit avec Claude Code, Cursor, Codex, Windsurf ou Copilot sur votre propre machine fonctionne d'emblée.
</details>

<details>
<summary><b>Pourquoi ne pas simplement écrire un script Playwright ?</b></summary>
Vous pourriez. <code>stm</code> est ce script, plus la découverte des pages, une organisation de dossiers stable, la détection des changements, une sortie adaptée aux agents, la gestion des surcouches de développement, et tous les cas limites, maintenus. C'est aussi une seule commande que votre agent connaît déjà.
</details>

<details>
<summary><b>Sous Linux, il manque des bibliothèques au navigateur.</b></summary>
Lancez une fois la commande <code>install-deps</code> qu'il affiche. WSL et Codespaces en ont besoin aussi.
</details>

<details>
<summary><b>Où vit le navigateur téléchargé ?</b></summary>
Dans le cache de Playwright : <code>~/Library/Caches/ms-playwright</code> sur macOS, <code>~/.cache/ms-playwright</code> sur Linux, <code>%LOCALAPPDATA%\ms-playwright</code> sur Windows. Supprimez-le quand vous voulez ; <code>stm</code> le retélécharge au besoin.
</details>

<details>
<summary><b>Puis-je le pointer vers un site qui n'est pas sur localhost ?</b></summary>
Oui : <code>stm --url https://staging.example.com</code>. Il reste sur cette origine et évite les liens qui semblent destructeurs. Ne capturez que les sites que vous avez le droit de capturer.
</details>

## Feuille de route

Volontairement modeste. Votez en ouvrant une issue.

- `stm diff` : montrer exactement quelles régions d'une page ont changé, et remettre aux agents des recadrages plutôt que des pages entières
- `stm timelapse` : transformer l'historique d'une page en GIF ou MP4, avec les messages de commit git en légende
- `stm backfill` : parcourir votre historique git et construire l'historique visuel que vous n'avez jamais capturé
- Captures en session connectée (`--storage-state`)
- Une galerie locale avec un curseur temporel

Non prévu : synchronisation cloud, comptes, télémétrie, mode surveillance, fichier de configuration.

## Contribuer

Les rapports de bug accompagnés d'une vraie exécution sont ce qu'il y a de plus utile en ce moment. Commencez par [CONTRIBUTING.md](../../CONTRIBUTING.md), puis [AGENTS.md](../../AGENTS.md) pour la carte des modules et les règles. Chaque décision et sa raison d'être vivent dans [DECISIONS.md](../../DECISIONS.md).

## À propos

Créé par **Mohammed Sohaib Uddin**, parce que les agents qui livrent des interfaces que personne ne regarde avaient besoin d'un moyen de regarder.

<p align="left">
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/Connect%20on%20LinkedIn-FF6600?style=for-the-badge&logo=linkedin&logoColor=white" alt="Se connecter sur LinkedIn"></a>
  <a href="https://github.com/mdsohaib"><img src="https://img.shields.io/badge/Follow%20on%20GitHub-0A0E14?style=for-the-badge&logo=github&logoColor=white" alt="Suivre sur GitHub"></a>
</p>

Si `stm` vous évite de livrer une page cassée, une étoile ne coûte rien et aide d'autres personnes à le trouver.

MIT © Mohammed Sohaib Uddin
