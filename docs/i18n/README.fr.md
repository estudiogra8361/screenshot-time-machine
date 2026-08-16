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
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/banner.svg" alt="screenshot-time-machine : une capture pleine page de chaque page de votre site, en une seule commande" width="100%">
</p>

<h1 align="center">screenshot-time-machine</h1>

<p align="center">
  <b>Capturez chaque page de votre site avec une seule commande.</b><br>
  <code>stm</code> parcourt votre site page par page et enregistre une capture pleine page<br>
  de chacune dans un dossier estampillé de la date et de l'heure.<br>
  Pointez-le vers n'importe quelle URL, ou laissez-le trouver l'application qui tourne sur votre localhost.<br>
  Lancez-le chaque fois que vous livrez quelque chose et un historique visuel se construit tout seul :<br>
  chaque page, chaque version, sur votre propre disque, en simples PNG.<br>
  <b>Gratuit et open source. Tourne entièrement sur votre machine.</b>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/screenshot-time-machine"><img src="https://img.shields.io/npm/v/screenshot-time-machine?style=flat-square&label=npm&color=FF8C1A&labelColor=0A0E14" alt="version npm"></a>
  <a href="../../LICENSE"><img src="https://img.shields.io/badge/license-MIT-FFC24A?style=flat-square&labelColor=0A0E14" alt="licence MIT"></a>
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/LinkedIn-Mohammed%20Sohaib%20Uddin-F0509F?style=flat-square&labelColor=0A0E14&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
</p>

```bash
npx screenshot-time-machine@latest                              # the app you have running on localhost
npx screenshot-time-machine@latest --url https://your-site.com  # or any site you are allowed to capture
npx skills add mdsohaib/screenshot-time-machine                 # teach Claude Code, Cursor, Codex and friends to run it
```

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/demo.gif" alt="La même page dans trois captures datées, rejouant l'évolution du design" width="820">
</p>

<p align="center"><i>Trois exécutions au cours d'une soirée de refonte, rejouées depuis les dossiers datés dans lesquels stm les a enregistrées.</i></p>

<h3 align="center">Compatible avec</h3>

<p align="center">
  <a href="#installer-dans-votre-agent-de-code-ia"><img src="https://img.shields.io/badge/Claude%20Code-FF8C1A?style=for-the-badge&logo=claude&logoColor=white" alt="Claude Code"></a>
  <a href="#installer-dans-votre-agent-de-code-ia"><img src="https://img.shields.io/badge/Codex-0A0E14?style=for-the-badge&logo=openai&logoColor=white" alt="Codex"></a>
  <a href="#installer-dans-votre-agent-de-code-ia"><img src="https://img.shields.io/badge/Cursor-7FB0F5?style=for-the-badge&logo=cursor&logoColor=0A0E14" alt="Cursor"></a>
  <a href="#installer-dans-votre-agent-de-code-ia"><img src="https://img.shields.io/badge/Gemini%20CLI-A98BEB?style=for-the-badge&logo=googlegemini&logoColor=0A0E14" alt="Gemini CLI"></a>
  <a href="#installer-dans-votre-agent-de-code-ia"><img src="https://img.shields.io/badge/Antigravity-C88AE0?style=for-the-badge&logo=google&logoColor=0A0E14" alt="Antigravity"></a>
  <br>
  <a href="#installer-dans-votre-agent-de-code-ia"><img src="https://img.shields.io/badge/GitHub%20Copilot-F0509F?style=for-the-badge&logo=githubcopilot&logoColor=white" alt="GitHub Copilot"></a>
  <a href="#installer-dans-votre-agent-de-code-ia"><img src="https://img.shields.io/badge/Windsurf-FFC24A?style=for-the-badge&logo=windsurf&logoColor=0A0E14" alt="Windsurf"></a>
  <a href="#installer-dans-votre-agent-de-code-ia"><img src="https://img.shields.io/badge/OpenCode-4FC3A1?style=for-the-badge&logo=opencode&logoColor=white" alt="OpenCode"></a>
  <a href="#installer-dans-votre-agent-de-code-ia"><img src="https://img.shields.io/badge/Cline-6C7CE0?style=for-the-badge&logo=cline&logoColor=white" alt="Cline"></a>
  <a href="#installer-dans-votre-agent-de-code-ia"><img src="https://img.shields.io/badge/70%2B%20more-5A6478?style=for-the-badge" alt="plus de 70 autres agents"></a>
</p>

<p align="center"><i>et les humains qui les pilotent</i></p>

---

## La commande unique

Vous êtes en train de développer. Votre application tourne sur localhost. Vous tapez trois lettres :

```
$ stm
7 pages saved → screenshots/localhost-3000_2026-08-15_14-32/
   Run stm again after your next change to see which pages look different.
```

Sept captures pleine page, de haut en bas, sont maintenant rangées dans un dossier daté, à côté de votre code. Ouvrez-le dans le Finder ou l'Explorateur et tout votre site est là, comme une planche-contact : l'accueil, les tarifs, la page à propos, chaque page produit, l'ensemble, exactement tel qu'il est aujourd'hui.

Déjà en ligne ? Pointez-le vers le vrai site et cela fonctionne pareil, en lisant votre `sitemap.xml` pour trouver les pages :

```
$ stm --url https://your-site.com
24 pages saved → screenshots/your-site-com_2026-08-15_14-40/
```

Voilà l'outil. Tout ce qui suit décrit ce que cette chose toute simple devient une fois que vous l'avez lancée quelques fois.

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/hero.svg" alt="stm dans le terminal, à côté d'un dossier de captures datées contenant chacune une capture pleine page de chaque page" width="820">
</p>

## Ce que vous obtenez

**Tout votre site dans un seul dossier.** Pas seulement la page que vous avez sous les yeux. Chaque page, sur toute sa hauteur, de haut en bas, dans un dossier que vous parcourez en dix secondes. C'est le moyen le plus rapide de répondre à la question « à quoi ressemble vraiment mon site en ce moment ».

**Les pages que vous n'auriez jamais ouvertes.** Une marge intérieure qui s'est effondrée sur la page de tarifs. Un titre qui passe mal à la ligne. Une carte qui a perdu son image. Un pied de page qui a dérivé. Tout se trouve dans le même dossier, en attente d'être remarqué plutôt qu'en attente d'être signalé.

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/the-problem.svg" alt="Douze miniatures de pages issues d'une même exécution, disposées côte à côte, dont quatre montrent des mises en page qui demandent de l'attention" width="820">
</p>

<p align="center"><i>Douze pages d'une même exécution, côte à côte. Quatre demandaient de l'attention, et ces quatre-là étaient des pages que personne n'avait ouvertes.</i></p>

**Un historique qui se construit tout seul.** Chaque exécution a son propre dossier daté, si bien qu'ils s'empilent d'eux-mêmes en une chronologie. La page d'accueil du mois dernier et celle d'aujourd'hui sont deux fichiers entre lesquels vous pouvez basculer. Au bout de six mois, vous avez la preuve du chemin parcouru.

**Les vues téléphone dans la même exécution.** `stm --mobile` capture aussi une vue 390x844 de chaque page, si bien que le titre qui passe mal à la ligne sur téléphone se retrouve juste à côté de la capture desktop.

**Une liste courte au lieu de quarante onglets.** Dès la deuxième exécution, `stm` affiche les pages dont les captures sont sorties différentes de la fois précédente. Commencez par celles-là.

**Des yeux pour votre agent.** `stm --json` remet à Claude Code, Cursor ou Codex le chemin absolu de chaque page qu'il vient de construire, pour qu'il puisse regarder son propre travail et le corriger avant de vous annoncer qu'il a fini.

**À vous, définitivement.** De simples fichiers PNG sur votre propre disque. Pas de compte, pas de cloud, pas d'abonnement, pas de fichier de configuration, pas de processus en arrière-plan. Une seule dépendance, licence MIT, à vous pour toujours.

## À qui ça sert

- **Vous demandez, l'agent construit, et vous découvrez le résultat plus tard.** Vous avez demandé une page, il a modifié un composant partagé, et onze pages ont suivi le mouvement. Une seule commande vous montre les onze.
- **Vous livrez seul à une heure du matin.** La passe de design semblait juste sur le moment. Le dossier de mardi vous dit si elle l'était vraiment.
- **Vous en êtes à la troisième semaine d'une refonte** et vous ne vous rappelez plus très bien à quoi ça ressemblait avant. Capturez le site dès le premier jour et chaque capture suivante devient une comparaison que vous n'avez jamais eu à mettre en place.
- **Vous passez le relais.** Un dossier de captures pleine page est le point d'avancement le plus clair qu'un client ou un collègue puisse recevoir.
- **Vous voulez garder une trace du travail.** La version une de n'importe quoi mérite d'être conservée. La plupart des gens s'en rendent compte vers la version quatre.

## Démarrage rapide

Si vous développez en local, démarrez votre application comme vous le faites d'habitude (`npm run dev`, `rails s`, `python manage.py runserver`, un serveur statique, n'importe quoi qui sert du HTML) puis lancez :

```bash
npx screenshot-time-machine@latest
```

Si le site est déjà en ligne, passez tout cela et donnez son adresse :

```bash
npx screenshot-time-machine@latest --url https://your-site.com
```

**Nécessite Node 22 ou plus récent.** Lancez `node -v` pour vérifier. Si la sortie affiche 21 ou moins, mettez d'abord Node à jour depuis [nodejs.org](https://nodejs.org).

Pour les captures, `stm` utilise un navigateur Playwright déjà présent dans votre cache, ou à défaut le Chrome ou l'Edge déjà installé sur votre machine. Si vous n'avez ni l'un ni l'autre, il télécharge une seule fois un navigateur headless, environ 120 Mo de téléchargement pour à peu près 200 Mo sur le disque, et il vous prévient avant de le faire. C'est la seule chose que `stm` lui-même récupère sur internet ; les pages que vous capturez chargent leurs propres ressources, exactement comme elles le feraient dans votre navigateur.

Changez quelque chose, relancez. C'est tout le flux de travail.

Tout ce qui suit écrit la commande sous la forme courte `stm`. Pour obtenir ce nom court, installez-la une fois :

```bash
npm install -g screenshot-time-machine
```

Ne rien installer convient tout autant. Écrivez `npx screenshot-time-machine@latest` partout où vous voyez `stm`. N'écrivez jamais `npx stm` : c'est un paquet sans rapport datant de 2014.

<details>
<summary><b>Ce qui se passe d'autre à la première exécution</b></summary>

- `stm` sonde les ports 3000, 3001, 5173, 5174, 8080, 4321, 4322, 8000, 4200 et 5000, dans cet ordre, et utilise la première application qui répond. Si plusieurs répondent, il préfère celle que ce projet a utilisée la dernière fois et vous parle des autres.
- Si votre projet a un `.gitignore`, il y ajoute `screenshots/` une seule fois et vous le signale. Il ne crée jamais de `.gitignore`, et il ne supprime jamais rien.
- Les pages sont trouvées en suivant les liens `<a href>` qu'elles contiennent et en lisant votre `sitemap.xml` si vous en avez un, jusqu'à 100 pages par exécution. Les pages accessibles uniquement par un clic sur un bouton, et les routes à dièse comme `/#/about`, n'offrent aucun lien à suivre : nommez-les vous-même avec `stm /about /pricing`.
</details>

## Installer dans votre agent de code IA

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/agent-loop.svg" alt="La boucle : l'agent modifie l'interface, lance stm --json, lit les chemins des captures, regarde les images fold, corrige et relance" width="820">
</p>

Votre agent a écrit la page de tarifs. Il a écrit la navigation. Il a touché à un composant partagé et onze pages ont bougé avec lui. Il n'en a jamais regardé une seule, parce qu'il n'a pas d'yeux.

`stm --json` lui en donne. L'agent lance une commande, récupère le chemin absolu de chaque page qu'il vient de construire, ouvre l'image `fold` de celles qui sont sorties différentes, et vérifie son propre travail avant de vous annoncer qu'il a fini.

Le meilleur, c'est ce que vous cessez de faire. Plus de clics à travers onze pages. Plus de « ça a l'air bon » qui se révèle faux. Vous obtenez un dossier, vous le parcourez en dix secondes, et vous savez déjà quelles pages ouvrir en premier.

Une seule commande installe `stm` en tant que skill : un court fichier d'instructions que votre agent lit, pour savoir quand lancer `stm` et quoi faire du résultat. `npx skills add` est un installeur open source distinct qui copie ce seul dossier dans votre projet et ne change rien d'autre. Choisissez votre agent :

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

> Installe screenshot-time-machine, lance `stm` sur mon application, et montre-moi à quoi ressemblent les pages.

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

Claude Code ouvre les captures avec son outil Read, et `stm --json` lui remet des chemins absolus. La boucle est la suivante : modifier, `stm --json`, lire les images `fold`, corriger, recommencer. Demandez-lui de « vérifier l'interface » et il ira chercher le skill de lui-même.
</details>

<details>
<summary><b>Codex</b></summary>

Placez la ligne de mémoire dans `AGENTS.md`. Codex ouvre les images avec `view_image`, donc s'il hésite, dites-lui « regarde l'image fold de chaque page que tu as touchée ».
</details>

<details>
<summary><b>Cursor</b></summary>

Placez la ligne de mémoire dans une règle sous `.cursor/rules/`. L'agent lance `stm --json` dans son terminal et ouvre les chemins PNG renvoyés. Le navigateur intégré de Cursor montre une page à la fois ; `stm` les lui remet toutes d'un coup.
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

Un seul document JSON sur stdout, au plus deux lignes sur stderr, affichées même quand certaines pages échouent. Le téléchargement unique du navigateur fait exception : son installeur écrit lui aussi sur stderr. `code` reflète le code de sortie.

Une exécution qui ne peut pas démarrer affiche plutôt un objet bien plus petit : `{"code": 1, "error": "no_server" | "no_browser", "message": "...", "fix": "..."}`. Des arguments incorrects donnent `{"error": "bad_args", "message": "...", "fix": "..."}`, où `fix` vaut `Run stm --help` pour une option inconnue, et un exemple concret pour un `--url` mal formé. Vérifiez `error` avant de lire `changed`. `truncated` compte les entrées laissées hors de la liste (la limite est de 25 ; le manifeste les contient toutes). La sortie ne transporte que des chemins et des nombres, jamais du texte pris dans vos pages.

**À propos des tokens.** Chaque page est capturée à chaque exécution, mais l'agent n'ouvre que celles que vous lui désignez : une exécution calme ne coûte donc presque rien à lire. Le résumé fait environ 200 tokens, plus environ 90 par page listée. Regarder une page coûte une seule image 1440x900. Les captures pleine page très hautes sont réduites par les modèles de vision jusqu'à ce que le texte devienne illisible, ce qui est exactement la raison pour laquelle chaque page reçoit aussi une image `fold`, et pourquoi le skill dit à l'agent d'ouvrir celle-ci en premier.

## Un historique visuel sur disque

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

Chaque exécution crée un nouveau dossier nommé d'après l'application et la minute où elle a tourné. Chaque fichier à l'intérieur porte le même horodatage, si bien qu'une capture sortie de son dossier dit toujours ce qu'elle est et quand elle a été prise. Deux exécutions dans la même minute reçoivent `-2`, `-3` sur l'horodatage. Les pages plus hautes que 16 384 px sont coupées à cette hauteur, la limite de Chromium, et marquées `truncated`.

Triez les dossiers par date et vous avez sous les yeux la chronologie de votre produit. Prenez une page, parcourez son fichier dans chaque dossier, et vous la regardez s'améliorer. Ce ne sont que des PNG de bout en bout : cet historique survivra donc à l'outil qui l'a produit, sans base de données, sans format propriétaire, sans rien à exporter. La désinstallation ne laisse rien derrière elle, sinon votre dossier `screenshots/` et, si vous aviez un `.gitignore`, une ligne dedans.

## Commandes

| Commande | Ce qu'elle fait |
|---|---|
| `stm` | Capture chaque page de l'application qui tourne sur localhost |
| `stm /pricing /about` | Capture uniquement ces pages, en quelques secondes. C'est la boucle modifier-vérifier |
| `stm --url https://your-site.com` | Capture n'importe quel site par son URL, en local ou en ligne. Un chemin démarre l'exploration à cet endroit |
| `stm --mobile` | Capture aussi une vue téléphone 390x844 (fichiers `@mobile`) |
| `stm --max 100` | Arrête la découverte après ce nombre de pages (100 par défaut) |
| `stm --out screenshots` | Où vont les captures (`screenshots` par défaut) |
| `stm --json` | Résumé lisible par une machine sur stdout, pour les agents |
| `stm list` | Captures passées : dossier, nombre de pages, modifiées, échouées |
| `stm open` | Ouvre le dossier de la dernière capture |
| `stm skill` | Affiche le skill pour agent |

Codes de sortie : `0` tout a été capturé, `1` rien n'a été capturé (pas d'application, pas de navigateur, arguments incorrects), `2` terminé avec des pages en échec ou exécution interrompue. Une page en échec n'arrête jamais l'exécution.

### Quelques essais qui valent le coup

```bash
stm --mobile                     # desktop and phone views of every page, same run
stm /checkout --mobile           # the one flow you just touched, both sizes, in seconds
stm --url https://staging.example.com   # any site you are allowed to capture, not just localhost
stm list                         # every snapshot you have ever taken, oldest to newest
stm open                         # jump straight into the latest folder
```

## Comment ça marche

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/how-it-works.svg" alt="détecter, découvrir, capturer, comparer, rapporter" width="820">
</p>

1. **Détecter.** Sonder les ports localhost habituels et retenir l'application qui répond, ou utiliser `--url`.
2. **Découvrir.** Lire le `sitemap.xml` s'il y en a un, puis suivre les liens `<a href>` de page en page, en restant sur la même origine.
3. **Capturer.** Charger chaque page, la faire défiler pour que le contenu différé arrive, tout immobiliser, puis enregistrer un PNG pleine page ainsi qu'une image `fold` du haut de l'écran.
4. **Ranger.** Écrire le tout dans un dossier nommé d'après l'application et la minute, avec le manifeste mis à jour après chaque page.
5. **Rapporter.** Afficher un résumé d'une ligne, indiquant notamment quelles pages sont sorties différentes de l'exécution précédente.

### Pourquoi les captures sont stables

Un outil de capture ne vaut que par sa régularité : capturez deux fois la même page et vous devez obtenir la même image. Cela demande un vrai travail, et c'est là que vit l'essentiel de ce code.

- Les pages sont défilées jusqu'en bas avant la capture, pour que les images et les sections en chargement différé arrivent, puis remontées en haut. Les sites à défilement fluide sont gérés.
- Les polices web sont attendues, pour que rien ne soit capturé en plein basculement depuis la police de repli.
- Les animations sont figées sur leur état final, si bien que les fondus sont entièrement visibles et que les indicateurs de chargement restent immobiles.
- Le device pixel ratio est fixé à 1 et la fenêtre d'affichage à 1440x900, si bien qu'une capture est identique sur votre portable, sur votre poste fixe et en CI.
- Les barres d'outils de développement (Astro, Nuxt, le badge Next.js) sont masquées. Les surcouches **d'erreur** de développement ne le sont jamais : la page est capturée telle quelle et signalée par un avertissement, parce qu'une page cassée est exactement ce que vous voulez voir.
- Les connexions de longue durée (sockets HMR, flux d'événements) ne bloquent jamais une capture. Chaque page dispose d'un budget de 30 secondes et d'un nouvel essai, après quoi elle est enregistrée et l'exécution passe à la suite.
- Le manifeste est écrit après chaque page, si bien qu'une exécution interrompue laisse quand même un dossier que `stm list` sait lire.
- Les liens vers `/logout`, `/delete` et compagnie ne sont jamais suivis. Pas plus que les fichiers, `/api/`, les autres origines, ou votre propre dossier `screenshots/`.

Le résultat : deux exécutions sur la même machine produisent des PNG identiques octet pour octet d'une page dont le contenu n'a pas changé.

<details>
<summary><b>Comment la ligne « changed » est calculée</b></summary>

Chaque page est capturée à chaque exécution. Ce qui est comparé, ce ne sont pas les images, ce sont leurs empreintes :

1. Après avoir enregistré le PNG d'une page, `stm` calcule une **empreinte sha256** des octets de ce fichier.
2. L'empreinte est écrite dans le manifeste de cette exécution, à côté du chemin de la page.
3. À l'exécution suivante, `stm` retrouve la même page dans le **manifeste de l'exécution précédente** et compare les deux empreintes.
4. Une empreinte différente signifie que la capture est sortie différente. La même empreinte signifie que non. Aucune entrée antérieure signifie que la page est nouvelle.

Les anciennes captures ne sont jamais rouvertes, seul le petit manifeste est lu : comparer une centaine de pages est donc instantané. Vous obtenez des noms de pages et des chemins de fichiers, exactement ce qu'il faut pour ouvrir les bonnes captures en premier, ou pour remettre les bonnes à votre agent. La comparaison visuelle région par région, c'est `stm diff`, à la feuille de route.

Une page qui affiche une horloge, un temps relatif du type « il y a 3 minutes », une image de bannière tournante ou une animation canvas a réellement une apparence différente à chaque exécution, et sera listée à chaque fois.
</details>

## Comment il se compare

| | stm | Vérification automatique de Claude Code Desktop | Playwright MCP, agent-browser, DevTools MCP | Percy, Chromatic |
|---|---|---|---|---|
| Toutes les pages en une commande | oui | une page à la fois | une page par appel d'outil | oui, en CI |
| Historique navigable sur disque | oui | non | non | dans leur cloud |
| Liste les pages sorties différentes | oui | non | non | oui, dans le cloud |
| Fonctionne dans le terminal, Cursor, Codex | oui | Desktop uniquement | oui | CI uniquement |
| Tourne entièrement sur votre machine | oui | oui | oui | non |
| Gratuit | oui | oui | oui | payant au-delà d'une offre gratuite |

Ces outils sont complémentaires, pas rivaux. Utilisez un outil de navigateur quand votre agent doit cliquer un peu partout et interagir. Utilisez `stm` quand vous, ou votre agent, avez besoin de tout voir d'un coup et de le conserver.

## Confidentialité

**Tourne à 100 % en local.** `stm` ne parle qu'à l'URL de votre application et, une seule fois, au CDN de navigateurs de Playwright si vous n'avez ni Chrome ni Edge. Vos captures ne quittent jamais votre machine. Pas de comptes, pas de clés d'API, pas de télémétrie. Les pages que vous capturez chargent leurs propres ressources exactement comme elles le feraient dans votre navigateur. Modèle de menace complet dans [SECURITY.md](../../SECURITY.md).

## FAQ

<details>
<summary><b>C'est vraiment gratuit ?</b></summary>
Oui. Licence MIT, open source, pas de version payante, pas de service hébergé, rien à quoi s'inscrire. Installez-le, utilisez-le pour toujours, forkez-le si le coeur vous en dit.
</details>

<details>
<summary><b>Est-ce que ça marche avec Next.js, Vite, Astro, SvelteKit, Rails, Django, les sites statiques ?</b></summary>
Oui. Tout ce qui sert du HTML, que ce soit sur votre machine ou sur internet. Les ports localhost habituels de tous ces outils sont sondés automatiquement ; utilisez <code>--url</code> pour le reste.
</details>

<details>
<summary><b>Combien de temps prend une exécution ?</b></summary>
Les pages sont capturées par petits groupes, et la plupart des petits sites terminent en bien moins d'une minute. Un gros site sur un serveur de dev encore froid prend plus longtemps, parce que la première visite de chaque page correspond à la compilation par votre framework. Passez les pages qui vous intéressent (<code>stm /pricing /about</code>) quand vous voulez un résultat immédiat.
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
<summary><b>Au bout d'un moment, toutes les pages apparaissent comme différentes.</b></summary>
Causes habituelles : votre navigateur s'est mis à jour, ce qui décale légèrement le rendu (<code>stm</code> enregistre la version du navigateur et vous le signale), ou vos pages affichent quelque chose qui bouge tout seul, comme une horloge, un « il y a 3 minutes », une image de bannière aléatoire, une animation canvas, ou une bannière de cookies qui n'apparaît qu'à la première visite. Les captures restent correctes : ouvrez celles qui vous intéressent.
</details>

<details>
<summary><b>Peut-il tourner automatiquement, en surveillant mes fichiers ?</b></summary>
Il tourne quand vous le décidez, comme <code>git commit</code> : vous, ou votre agent, décidez quel moment mérite d'être gardé. Pour une capture automatique, mettez l'instruction d'une ligne dans le fichier de mémoire de votre agent et laissez celui-ci la lancer après chaque changement d'interface.
</details>

<details>
<summary><b>Puis-je transformer mon historique en timelapse ?</b></summary>
Une commande <code>stm timelapse</code> à part entière est à la feuille de route. Aujourd'hui, avec ffmpeg :
<pre><code>ffmpeg -framerate 1 -pattern_type glob -i 'screenshots/*/pricing_*.png' \
  -vf "scale=720:-1,split[a][b];[a]palettegen[p];[b][p]paletteuse" pricing.gif</code></pre>
</details>

<details>
<summary><b>J'utilise Lovable, Bolt ou v0. Puis-je m'en servir ?</b></summary>
Oui, de deux façons. Pointez <code>stm</code> vers l'URL qu'ils publient pour vous : <code>stm --url https://your-project.lovable.app</code>. Ou exportez le projet, lancez-le en local, et <code>stm</code> le trouve tout seul. Tout ce qui est construit avec Claude Code, Cursor, Codex, Windsurf ou Copilot sur votre propre machine fonctionne d'emblée.
</details>

<details>
<summary><b>Pourquoi ne pas simplement écrire un script Playwright ?</b></summary>
Vous pourriez. <code>stm</code> est ce script, plus la découverte des pages, une organisation de dossiers stable, des captures régulières et reproductibles, une sortie adaptée aux agents, la gestion des surcouches de développement, et tous les cas limites, maintenus. C'est aussi une seule commande que votre agent connaît déjà.
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
<summary><b>Puis-je m'en servir sur mon site en ligne ou de préproduction ?</b></summary>
Oui : <code>stm --url https://staging.example.com</code>. Il lit le <code>sitemap.xml</code> de ce site et suit ses liens exactement comme il le ferait en local, reste sur cette seule origine, et ne suit jamais les liens d'allure destructrice comme <code>/logout</code> ou <code>/delete</code>. Ne capturez que les sites que vous avez le droit de capturer.
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

Créé par **Mohammed Sohaib Uddin**, parce qu'un logiciel qui change tous les jours mérite qu'on garde une trace de son apparence.

<p align="left">
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/Connect%20on%20LinkedIn-FF8C1A?style=for-the-badge&logo=linkedin&logoColor=white" alt="Se connecter sur LinkedIn"></a>
  <a href="https://github.com/mdsohaib"><img src="https://img.shields.io/badge/Follow%20on%20GitHub-0A0E14?style=for-the-badge&logo=github&logoColor=white" alt="Suivre sur GitHub"></a>
</p>

Si `stm` vous montre quelque chose que vous êtes content d'avoir vu, une étoile ne coûte rien et aide d'autres personnes à le trouver.

MIT © Mohammed Sohaib Uddin
