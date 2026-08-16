<p align="center">
  <a href="../../README.md">English</a> ·
  <a href="README.zh-CN.md">简体中文</a> ·
  Español ·
  <a href="README.hi.md">हिन्दी</a> ·
  <a href="README.pt-BR.md">Português</a> ·
  <a href="README.ja.md">日本語</a> ·
  <a href="README.de.md">Deutsch</a> ·
  <a href="README.fr.md">Français</a> ·
  <a href="README.ko.md">한국어</a> ·
  <a href="README.ru.md">Русский</a> ·
  <a href="README.ar.md">العربية</a>
</p>

*Traducido del README en inglés. Ante cualquier duda, la versión en inglés es la referencia.*

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/banner.svg" alt="screenshot-time-machine: una captura de página completa de cada página de tu sitio, con un solo comando" width="100%">
</p>

<h1 align="center">screenshot-time-machine</h1>

<p align="center">
  <b>Como una Wayback Machine, pero para tu propio sitio web.</b><br>
  <code>stm</code> recorre tu sitio página por página y guarda una captura de página completa<br>
  de cada una en una carpeta con la fecha y la hora.<br>
  Apúntalo a cualquier URL, o deja que encuentre la app que tienes corriendo en localhost.<br>
  Ejecútalo cada vez que publiques algo y el historial visual se construye solo:<br>
  cada página, cada versión, en tu propio disco, como archivos PNG normales.<br>
  <b>Gratis y de código abierto. Funciona por completo en tu máquina.</b>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/screenshot-time-machine"><img src="https://img.shields.io/npm/v/screenshot-time-machine?style=flat-square&label=npm&color=FF8C1A&labelColor=0A0E14" alt="versión en npm"></a>
  <a href="../../LICENSE"><img src="https://img.shields.io/badge/license-MIT-FFC24A?style=flat-square&labelColor=0A0E14" alt="licencia MIT"></a>
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/LinkedIn-Mohammed%20Sohaib%20Uddin-F0509F?style=flat-square&labelColor=0A0E14&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
</p>

```bash
npx screenshot-time-machine@latest                              # the app you have running on localhost
npx screenshot-time-machine@latest --url https://your-site.com  # or any site you are allowed to capture
npx skills add mdsohaib/screenshot-time-machine                 # teach Claude Code, Cursor, Codex and friends to run it
```

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/demo.gif" alt="La página de inicio de una tienda a lo largo de diez versiones de diseño, del primer boceto al resultado final" width="820">
</p>

<p align="center"><i>Diez versiones de una misma página, en orden. En esto se convierte una carpeta de capturas fechadas.</i></p>

<h3 align="center">Funciona con</h3>

<p align="center">
  <a href="#instálalo-en-tu-agente-de-programación-con-ia"><img src="https://img.shields.io/badge/Claude%20Code-FF8C1A?style=for-the-badge&logo=claude&logoColor=white" alt="Claude Code"></a>
  <a href="#instálalo-en-tu-agente-de-programación-con-ia"><img src="https://img.shields.io/badge/Codex-0A0E14?style=for-the-badge" alt="Codex"></a>
  <a href="#instálalo-en-tu-agente-de-programación-con-ia"><img src="https://img.shields.io/badge/Cursor-7FB0F5?style=for-the-badge&logo=cursor&logoColor=0A0E14" alt="Cursor"></a>
  <a href="#instálalo-en-tu-agente-de-programación-con-ia"><img src="https://img.shields.io/badge/Gemini%20CLI-A98BEB?style=for-the-badge&logo=googlegemini&logoColor=0A0E14" alt="Gemini CLI"></a>
  <a href="#instálalo-en-tu-agente-de-programación-con-ia"><img src="https://img.shields.io/badge/Antigravity-C88AE0?style=for-the-badge&logo=google&logoColor=0A0E14" alt="Antigravity"></a>
  <br>
  <a href="#instálalo-en-tu-agente-de-programación-con-ia"><img src="https://img.shields.io/badge/GitHub%20Copilot-F0509F?style=for-the-badge&logo=githubcopilot&logoColor=white" alt="GitHub Copilot"></a>
  <a href="#instálalo-en-tu-agente-de-programación-con-ia"><img src="https://img.shields.io/badge/Windsurf-FFC24A?style=for-the-badge&logo=windsurf&logoColor=0A0E14" alt="Windsurf"></a>
  <a href="#instálalo-en-tu-agente-de-programación-con-ia"><img src="https://img.shields.io/badge/OpenCode-4FC3A1?style=for-the-badge&logo=opencode&logoColor=white" alt="OpenCode"></a>
  <a href="#instálalo-en-tu-agente-de-programación-con-ia"><img src="https://img.shields.io/badge/Cline-6C7CE0?style=for-the-badge&logo=cline&logoColor=white" alt="Cline"></a>
  <a href="#todos-los-agentes-en-los-que-puedes-instalarlo"><img src="https://img.shields.io/badge/Zed-3B4B5F?style=for-the-badge&logo=zedindustries&logoColor=white" alt="Zed"></a>
  <a href="#todos-los-agentes-en-los-que-puedes-instalarlo"><img src="https://img.shields.io/badge/Warp-2A8FB5?style=for-the-badge&logo=warp&logoColor=white" alt="Warp"></a>
  <a href="#todos-los-agentes-en-los-que-puedes-instalarlo"><img src="https://img.shields.io/badge/Devin-8B6FD4?style=for-the-badge" alt="Devin"></a>
  <a href="#todos-los-agentes-en-los-que-puedes-instalarlo"><img src="https://img.shields.io/badge/Amp-C4653B?style=for-the-badge" alt="Amp"></a>
  <a href="#todos-los-agentes-en-los-que-puedes-instalarlo"><img src="https://img.shields.io/badge/Full%20list-5A6478?style=for-the-badge" alt="la lista completa de agentes"></a>
</p>

<p align="center"><i>y con las personas que les dan las instrucciones</i></p>

---

## El único comando

Estás construyendo. Tu app corre en localhost. Escribes tres letras:

```
$ stm
7 pages saved → screenshots/localhost-3000_2026-08-15_14-32/
   Run stm again after your next change to see which pages look different.
```

Siete capturas de página completa, de arriba abajo, ya están en una carpeta fechada junto a tu código. Ábrela en Finder o en el Explorador y tienes tu sitio entero como una hoja de contactos: inicio, precios, acerca de, cada página de producto, todo, tal como se ve hoy.

¿Ya está publicado? Apúntalo al sitio real y funciona igual, leyendo tu `sitemap.xml` para encontrar las páginas:

```
$ stm --url https://your-site.com
24 pages saved → screenshots/your-site-com_2026-08-15_14-40/
```

Eso es la herramienta. Todo lo que sigue es aquello en lo que se convierte esa cosa tan simple una vez que la has ejecutado unas cuantas veces.

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/hero.svg" alt="stm en la terminal junto a una carpeta de capturas fechadas, cada una con una captura de página completa de todas las páginas" width="820">
</p>

## Lo que obtienes

**Todo tu sitio en una carpeta.** No solo la página que resulta que tienes abierta. Todas las páginas, de largo completo, de arriba abajo, en una carpeta que puedes recorrer en diez segundos. Es la forma más rápida de responder a "cómo se ve mi sitio ahora mismo".

**Las páginas que nunca habrías abierto.** El espaciado que se rompió en la página de precios. Un título que hace un salto de línea feo. Una tarjeta que perdió su imagen. Un pie de página que se desplazó. Todo está en la misma carpeta esperando a que alguien lo note, en lugar de esperando a que alguien lo reporte.

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/the-problem.svg" alt="Doce miniaturas de páginas de una misma ejecución, una al lado de otra, cuatro de ellas con diseños que necesitan atención" width="820">
</p>

<p align="center"><i>Doce páginas de una sola ejecución, una al lado de otra. Cuatro necesitaban atención, y las cuatro eran páginas que nadie tenía abiertas.</i></p>

**Un historial que se construye solo.** Cada ejecución es su propia carpeta fechada, así que se apilan en una línea de tiempo por su cuenta. La página de inicio del mes pasado y la de hoy son dos archivos entre los que puedes ir y venir. Seis meses después, tienes la prueba de lo lejos que llegó.

**Vistas de móvil en la misma ejecución.** `stm --mobile` captura además una vista de 390x844 de cada página, así que el título que hace un salto de línea feo en el móvil queda justo al lado de la captura de escritorio.

**Una lista corta en lugar de cuarenta pestañas.** A partir de la segunda ejecución, `stm` imprime las páginas cuyas capturas salieron distintas a las de la vez anterior. Empieza por ahí.

**Ojos para tu agente.** `stm --json` le entrega a Claude Code, Cursor o Codex la ruta absoluta de cada página que acaba de construir, para que pueda mirar su propio trabajo y corregirlo antes de decirte que terminó.

**Tuyo, para siempre.** Archivos PNG normales en tu propio disco. Sin cuenta, sin nube, sin suscripción, sin archivo de configuración, sin procesos en segundo plano. Una dependencia, licencia MIT, tuyo para siempre.

## Para quién es

- **Tú escribes la instrucción, el agente construye y tú te enteras después.** Pediste una página, el agente editó un componente compartido y once páginas se vinieron con él. Un comando te muestra las once.
- **Estás publicando solo a la una de la madrugada.** En el momento, el retoque de diseño parecía correcto. La carpeta del martes te dice si de verdad lo era.
- **Llevas tres semanas de rediseño** y ya no recuerdas bien cómo se veía antes. Captura el sitio el primer día y cada captura posterior es una comparación que nunca tuviste que preparar.
- **Estás entregando trabajo.** Una carpeta con capturas de página completa es el informe de avance más claro que va a recibir un cliente o un compañero.
- **Quieres una prueba del trabajo.** La versión uno de cualquier cosa vale la pena conservarla. La mayoría de la gente se da cuenta de eso por la versión cuatro.

## Inicio rápido

Si estás desarrollando en local, arranca tu app como lo haces normalmente (`npm run dev`, `rails s`, `python manage.py runserver`, un servidor estático, cualquier cosa que sirva HTML) y ejecuta:

```bash
npx screenshot-time-machine@latest
```

Si el sitio ya está en línea, sáltate todo eso e indícalo:

```bash
npx screenshot-time-machine@latest --url https://your-site.com
```

**Necesita Node 22 o superior.** Ejecuta `node -v` para comprobarlo. Si imprime 21 o menos, actualiza Node desde [nodejs.org](https://nodejs.org) primero.

Para las capturas, `stm` usa un navegador de Playwright que ya tengas en caché o, si no, el Chrome o el Edge que ya están en tu máquina. Si no tienes ninguno, descarga una sola vez un navegador headless, una descarga de unos 120 MB que ocupa alrededor de 200 MB en disco, y te avisa antes de hacerlo. Eso es lo único que `stm` obtiene de internet por su cuenta; las páginas que capturas cargan sus propios recursos, exactamente igual que lo harían en tu navegador.

Cambia algo, vuelve a ejecutarlo. Ese es todo el flujo de trabajo.

De aquí en adelante el comando se escribe como `stm`, más corto. Para tener ese nombre corto, instálalo una vez:

```bash
npm install -g screenshot-time-machine
```

No instalarlo también está bien. Escribe `npx screenshot-time-machine@latest` donde veas `stm`. Nunca escribas `npx stm`: es un paquete sin relación, de 2014.

<details>
<summary><b>Qué más pasa en la primera ejecución</b></summary>

- `stm` prueba los puertos 3000, 3001, 5173, 5174, 8080, 4321, 4322, 8000, 4200 y 5000, en ese orden, y usa la primera app que responda. Si responden varias, prefiere la que este proyecto usó la última vez y te informa de las demás.
- Si tu proyecto tiene un `.gitignore`, le añade `screenshots/` una vez y te lo dice. Nunca crea un `.gitignore`, y nunca borra nada.
- Las páginas se encuentran siguiendo los enlaces `<a href>` que hay en ellas y leyendo tu `sitemap.xml` si lo tienes, hasta 100 páginas por ejecución. Las páginas a las que solo se llega con un clic en un botón, y las rutas con hash como `/#/about`, no tienen ningún enlace que seguir, así que indícalas tú mismo: `stm /about /pricing`.
</details>

## Instálalo en tu agente de programación con IA

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/agent-loop.svg" alt="El ciclo: el agente edita la interfaz, ejecuta stm --json, lee las rutas de las capturas, mira las imágenes fold, corrige y vuelve a ejecutar" width="820">
</p>

Tu agente escribió la página de precios. Escribió la navegación. Tocó un componente compartido y once páginas se movieron con él. Nunca ha visto ninguna de ellas, porque no tiene ojos.

`stm --json` le da unos. El agente ejecuta un comando, recibe la ruta absoluta de cada página que acaba de construir, abre la imagen `fold` de las que salieron distintas y revisa su propio trabajo antes de decirte que terminó.

Lo bueno es lo que dejas de hacer. Ya no vas haciendo clic por once páginas. Ya no hay un "se ve bien" que después resulta que no lo era. Recibes una carpeta, la recorres en diez segundos y ya sabes qué páginas abrir primero.

Un solo comando instala `stm` como skill: un archivo corto de instrucciones que tu agente lee, para que sepa cuándo ejecutar `stm` y qué hacer con el resultado. `npx skills add` es un instalador de código abierto independiente que copia esa única carpeta en tu proyecto y no cambia nada más. Elige tu agente:

| Agente | Comando | La skill queda en |
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
| **Cualquier otro** | `npx skills add mdsohaib/screenshot-time-machine` | elige tu agente de la lista de abajo |

Añade `-g` a cualquiera de esos comandos para instalarlo en todos tus proyectos en lugar de solo en este.

### Todos los agentes en los que puedes instalarlo

Estos son los nombres que el instalador acepta después de `-a`. Pasa cualquiera de ellos, o deja `-a` fuera y elige del menú que te muestra.

`adal` · `aider-desk` · `amp` · `antigravity` · `antigravity-cli` · `astrbot` · `augment` · `autohand-code` · `bob` · `claude-code` · `cline` · `codearts-agent` · `codebuddy` · `codemaker` · `codestudio` · `codex` · `command-code` · `continue` · `cortex` · `crush` · `cursor` · `deepagents` · `devin` · `dexto` · `droid` · `eve` · `firebender` · `forgecode` · `gemini-cli` · `github-copilot` · `goose` · `grok` · `hermes-agent` · `iflow-cli` · `inference-sh` · `jazz` · `junie` · `kilo` · `kimchi` · `kimi-code-cli` · `kiro-cli` · `kode` · `lingma` · `loaf` · `mcpjam` · `minimax-code` · `mistral-vibe` · `moxby` · `mux` · `neovate` · `ona` · `openclaw` · `opencode` · `openhands` · `pi` · `pochi` · `promptscript` · `qoder` · `qoder-cn` · `qwen-code` · `reasonix` · `replit` · `roo` · `rovodev` · `tabnine-cli` · `terramind` · `tinycloud` · `trae` · `trae-cn` · `universal` · `warp` · `windsurf` · `zcode` · `zed` · `zencoder` · `zenflow`

`universal` es el que hay que usar cuando tu agente no aparece arriba: escribe la skill en `.agents/skills/stm/`, la ubicación compartida que leen varios de estos agentes. La lista vive en el instalador y no aquí, así que crece sin que este README cambie. Para ver la lista actual, pide un agente que no exista y los imprime todos:

```bash
npx skills add mdsohaib/screenshot-time-machine -a list-them-please
```

O simplemente díselo a tu agente, con palabras normales:

> Instala screenshot-time-machine, ejecuta `stm` en mi app y muéstrame cómo se ven las páginas.

Después añade una línea al archivo que tu agente lee en cada petición, para que verifique su propio trabajo sin que se lo pidas:

```
After changing anything a user can see, run `stm --json` (or `npx -y screenshot-time-machine@latest --json` if `stm` is not installed) and view the `fold` image of every entry in `changed` and `new` before saying you're done. On the very first snapshot both lists are empty, so view the fold images of the pages you edited instead. Never claim a UI change is verified without viewing a screenshot.
```

Dónde va esa línea, según el agente:

| Agente | Archivo |
|---|---|
| Claude Code | `CLAUDE.md` |
| Codex, Antigravity, OpenCode | `AGENTS.md` |
| Gemini CLI | `GEMINI.md` |
| Cursor | `.cursor/rules/stm.mdc`, empezando con `---`, luego `alwaysApply: true`, luego `---` |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Windsurf | `.windsurf/rules/stm.md` |
| Cline | `.clinerules/stm.md` |

<details>
<summary><b>Claude Code: instalación como plugin, y cómo se siente el ciclo</b></summary>

Las skills son el camino simple. Si prefieres los plugins, ejecuta esto dentro de Claude Code:

```
/plugin marketplace add mdsohaib/screenshot-time-machine
/plugin install stm@stm
```

¿No tienes clave SSH en GitHub? Usa la forma con URL: `/plugin marketplace add https://github.com/mdsohaib/screenshot-time-machine.git`

Claude Code abre las capturas con su herramienta Read, y `stm --json` le entrega rutas absolutas. El ciclo es: editar, `stm --json`, leer las imágenes `fold`, corregir, repetir. Pídele que "revise la interfaz" y recurrirá a la skill por su cuenta.
</details>

<details>
<summary><b>Codex</b></summary>

Pon la línea de memoria en `AGENTS.md`. Codex abre imágenes con `view_image`, así que si duda, dile "mira la imagen fold de cada página que tocaste".
</details>

<details>
<summary><b>Cursor</b></summary>

Pon la línea de memoria en una regla dentro de `.cursor/rules/`. El agente ejecuta `stm --json` en su terminal y abre las rutas PNG que devuelve. El navegador integrado de Cursor muestra una página a la vez; `stm` le entrega todas de una vez.
</details>

<details>
<summary><b>Cualquier agente, sin soporte de skills</b></summary>

`stm skill` imprime el texto de la skill. Pégalo en el archivo de instrucciones que lea tu agente. Esto funciona sin instalar nada:

```bash
npx screenshot-time-machine@latest skill
```
</details>

### Qué recibe el agente

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

Un único documento JSON en stdout, como mucho dos líneas en stderr, impreso incluso cuando algunas páginas fallan. La descarga única del navegador es la excepción: su instalador también escribe en stderr. `code` refleja el código de salida.

Una ejecución que no puede arrancar imprime un objeto mucho más pequeño: `{"code": 1, "error": "no_server" | "no_browser", "message": "...", "fix": "..."}`. Los argumentos incorrectos imprimen `{"error": "bad_args", "message": "...", "fix": "..."}`, donde `fix` es `Run stm --help` para una opción desconocida y un ejemplo resuelto para una `--url` mal formada. Comprueba `error` antes de leer `changed`. `truncated` cuenta las entradas que quedaron fuera de la lista (el límite es 25; el manifiesto las tiene todas). La salida solo lleva rutas y números, nunca texto tomado de tus páginas.

**Sobre los tokens.** Cada página se captura en cada ejecución, pero el agente solo abre las que tú le indiques, así que una ejecución tranquila casi no cuesta nada de leer. El resumen ronda los 200 tokens más unos 90 por cada página listada. Ver una página cuesta una sola imagen de 1440x900. Las capturas de página completa muy altas los modelos de visión las reducen hasta que el texto se vuelve ilegible, que es exactamente por lo que cada página recibe además una imagen `fold`, y por lo que la skill le dice al agente que abra esa primero.

## Un historial visual en disco

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

Cada ejecución es una carpeta nueva con el nombre de la app y el minuto en que se ejecutó. Cada archivo dentro lleva la misma marca de tiempo, así que una captura sacada de su carpeta sigue diciendo qué es y cuándo ocurrió. Dos ejecuciones en el mismo minuto reciben `-2`, `-3` en la marca de tiempo. Las páginas de más de 16.384 px de alto se cortan a esa altura, el límite de Chromium, y se marcan como `truncated`.

Ordena las carpetas por fecha y estás viendo la línea de tiempo de tu producto. Elige una página, recorre su archivo en cada carpeta y la estás viendo mejorar. Son PNG normales de arriba abajo, así que este historial sobrevive a la herramienta que lo creó: sin base de datos, sin formato propietario, nada que exportar. Desinstalarlo no deja nada atrás salvo tu carpeta `screenshots/` y, si tenías un `.gitignore`, una línea en él.

## Comandos

| Comando | Qué hace |
|---|---|
| `stm` | Captura cada página de la app que corre en localhost |
| `stm /pricing /about` | Captura solo estas páginas, en segundos. Este es el ciclo de editar y revisar |
| `stm --url https://your-site.com` | Captura cualquier sitio por URL, local o publicado. Una ruta inicia el rastreo ahí |
| `stm --mobile` | Captura además una vista de móvil de 390x844 (archivos `@mobile`) |
| `stm --max 100` | Deja de descubrir después de esta cantidad de páginas (por defecto 100) |
| `stm --out screenshots` | Dónde van las capturas (por defecto `screenshots`) |
| `stm --json` | Resumen legible por máquinas en stdout, para agentes |
| `stm list` | Capturas anteriores: carpeta, número de páginas, distintas, fallidas |
| `stm open` | Abre la carpeta de la última captura |
| `stm skill` | Imprime la skill del agente |

Códigos de salida: `0` todo capturado, `1` nada capturado (sin app, sin navegador, argumentos incorrectos), `2` terminó con algunas páginas fallidas o la ejecución interrumpida. Una página que falla nunca detiene la ejecución.

### Algunas cosas que vale la pena probar

```bash
stm --mobile                     # desktop and phone views of every page, same run
stm /checkout --mobile           # the one flow you just touched, both sizes, in seconds
stm --url https://staging.example.com   # any site you are allowed to capture, not just localhost
stm list                         # every snapshot you have ever taken, oldest to newest
stm open                         # jump straight into the latest folder
```

## Cómo funciona

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/how-it-works.svg" alt="detectar, descubrir, capturar, comparar, informar" width="820">
</p>

1. **Detectar.** Prueba los puertos habituales de localhost y elige la app que responda, o usa `--url`.
2. **Descubrir.** Lee el `sitemap.xml` si existe, después sigue los enlaces `<a href>` de página en página, sin salir del mismo origen.
3. **Capturar.** Carga cada página, la desplaza para que llegue el contenido diferido, deja todo quieto y guarda un PNG de página completa más una imagen `fold` de la primera pantalla.
4. **Archivar.** Escribe todo en una carpeta con el nombre de la app y el minuto, con el manifiesto actualizado después de cada página.
5. **Informar.** Imprime un resumen de una línea, incluidas las páginas que salieron distintas a las de la ejecución anterior.

### Por qué las capturas son estables

Una herramienta de capturas vale lo que vale su consistencia: si capturas la misma página dos veces, deberías obtener la misma imagen. Eso cuesta trabajo de verdad, y es donde vive la mayor parte de este código.

- Las páginas se desplazan hasta abajo antes de la captura, para que se carguen las imágenes y secciones diferidas, y después vuelven arriba. Los sitios con desplazamiento suave están contemplados.
- Se espera a las fuentes web, así que nada se captura a mitad del cambio desde la fuente de reserva.
- Las animaciones se congelan en su estado final, así los efectos de aparición se ven completos y los indicadores de carga se quedan quietos.
- La relación de píxeles del dispositivo se fija en 1 y el viewport en 1440x900, así que una captura es igual en tu portátil, en tu equipo de escritorio y en CI.
- Las barras de desarrollo (Astro, Nuxt, el distintivo de Next.js) se ocultan. Las superposiciones de **error** de desarrollo nunca: la página se captura tal cual y se marca con una advertencia, porque una página rota es exactamente lo que quieres ver.
- Las conexiones de larga duración (sockets HMR, flujos de eventos) nunca bloquean una captura. Cada página tiene un presupuesto de 30 segundos y un reintento, luego se registra y la ejecución continúa.
- El manifiesto se escribe después de cada página, así que una ejecución interrumpida deja igualmente una carpeta que `stm list` puede leer.
- Los enlaces a `/logout`, `/delete` y similares nunca se siguen. Tampoco los archivos, `/api/`, otros orígenes ni tu propia carpeta `screenshots/`.

La recompensa: dos ejecuciones en la misma máquina producen PNG idénticos byte a byte de una página cuyo contenido no cambió.

<details>
<summary><b>Cómo se calcula la lista de páginas distintas</b></summary>

Todas las páginas se capturan en cada ejecución. Lo que se compara no son las imágenes, sino sus huellas:

1. Después de guardar el PNG de una página, `stm` calcula un **hash sha256** de los bytes de ese archivo.
2. El hash va al manifiesto de esa ejecución, junto a la ruta de la página.
3. En la siguiente ejecución, `stm` busca la misma página en el **manifiesto de la ejecución anterior** y compara los dos hashes.
4. Un hash distinto significa que la captura salió diferente. El mismo hash significa que no. Si no hay ninguna entrada anterior, la página es nueva.

Las capturas antiguas nunca se vuelven a abrir, solo se lee el manifiesto, que es pequeño, así que comparar cien páginas es instantáneo. Obtienes nombres de páginas y rutas de archivo, que es justo lo que necesitas para abrir primero las capturas correctas, o para pasarle las correctas a tu agente. La comparación visual por regiones es `stm diff`, y está en la hoja de ruta.

Una página que muestra un reloj, una hora relativa como "hace 3 minutos", una imagen principal rotatoria o una animación en canvas realmente se ve distinta en cada ejecución, y aparecerá listada en cada ejecución.
</details>

## Cómo se compara

| | stm | Verificación automática de Claude Code Desktop | Playwright MCP, agent-browser, DevTools MCP | Percy, Chromatic |
|---|---|---|---|---|
| Todas las páginas en un comando | sí | una página a la vez | una página por llamada de herramienta | sí, en CI |
| Historial en disco que puedes explorar | sí | no | no | en su nube |
| Lista qué páginas salieron distintas | sí | no | no | sí, en la nube |
| Funciona en la terminal, Cursor, Codex | sí | solo en Desktop | sí | solo en CI |
| Funciona por completo en tu máquina | sí | sí | sí | no |
| Gratis | sí | sí | sí | de pago por encima de un plan gratuito |

Estas herramientas son complementarias, no rivales. Usa una herramienta de navegador cuando tu agente necesite hacer clic e interactuar. Usa `stm` cuando tú, o tu agente, necesiten ver todo de una vez y conservarlo.

## Privacidad

**Funciona 100% en local.** `stm` solo habla con la URL de tu app y, una vez, con la CDN de navegadores de Playwright si no tienes Chrome ni Edge. Tus capturas nunca salen de tu máquina. Sin cuentas, sin claves de API, sin telemetría. Las páginas que capturas cargan sus propios recursos exactamente igual que lo harían en tu navegador. El modelo de amenazas completo está en [SECURITY.md](../../SECURITY.md).

## Preguntas frecuentes

<details>
<summary><b>¿De verdad es gratis?</b></summary>
Sí. Licencia MIT, código abierto, sin plan de pago, sin servicio alojado, nada que registrar. Instálalo, úsalo para siempre, haz un fork si quieres.
</details>

<details>
<summary><b>¿Funciona con Next.js, Vite, Astro, SvelteKit, Rails, Django, sitios estáticos?</b></summary>
Sí. Con cualquier cosa que sirva HTML, esté en tu máquina o en internet. Los puertos habituales de localhost de todos ellos se prueban automáticamente; usa <code>--url</code> para cualquier otro caso.
</details>

<details>
<summary><b>¿Cuánto tarda una ejecución?</b></summary>
Las páginas se capturan de a varias a la vez, y la mayoría de los sitios pequeños terminan en bastante menos de un minuto. Un sitio grande recién arrancado en local tarda más, porque la primera visita a cada página es tu framework compilándola. Pasa las páginas que te importan (<code>stm /pricing /about</code>) cuando lo quieras instantáneo.
</details>

<details>
<summary><b>Solo encontró mi página de inicio.</b></summary>
Las páginas se descubren desde tu sitemap y desde los enlaces <code>&lt;a href&gt;</code>. Las apps que navegan con botones o rutas con hash (<code>/#/about</code>) no tienen enlaces que seguir. Indica las páginas: <code>stm /about /pricing</code>. A los agentes se les indica que pasen las páginas que tocaron.
</details>

<details>
<summary><b>Casi todas mis capturas muestran la página de inicio de sesión.</b></summary>
Tu app redirige al inicio de sesión. <code>stm</code> todavía no puede iniciar sesión, y te avisa cuando esto ocurre. Las capturas con sesión iniciada están en la hoja de ruta.
</details>

<details>
<summary><b>Al cabo de un tiempo todas las páginas aparecen como distintas.</b></summary>
Causas habituales: tu navegador se actualizó, lo que desplaza ligeramente el renderizado (<code>stm</code> registra la versión del navegador y te avisa), o tus páginas muestran algo que se mueve por su cuenta, como un reloj, un "hace 3 minutos", una imagen principal aleatoria, una animación en canvas o un aviso de cookies que solo aparece en la primera visita. Las capturas siguen siendo correctas, así que abre las que te importen.
</details>

<details>
<summary><b>¿Puede ejecutarse solo, vigilando mis archivos?</b></summary>
Se ejecuta cuando tú lo dices, como <code>git commit</code>: tú, o tu agente, deciden cuándo vale la pena conservar un momento. Para la captura automática, pon la instrucción de una línea en el archivo de memoria de tu agente y deja que el agente la ejecute después de cada cambio en la interfaz.
</details>

<details>
<summary><b>¿Puedo convertir mi historial en un timelapse?</b></summary>
Un <code>stm timelapse</code> integrado está en la hoja de ruta. Hoy, con ffmpeg:
<pre><code>ffmpeg -framerate 1 -pattern_type glob -i 'screenshots/*/pricing_*.png' \
  -vf "scale=720:-1,split[a][b];[a]palettegen[p];[b][p]paletteuse" pricing.gif</code></pre>
</details>

<details>
<summary><b>Uso Lovable, Bolt o v0. ¿Puedo usar esto?</b></summary>
Sí, de dos formas. Apunta <code>stm</code> a la URL que ellos publican para ti: <code>stm --url https://your-project.lovable.app</code>. O exporta el proyecto, ejecútalo en local y <code>stm</code> lo encuentra por sí solo. Cualquier cosa construida con Claude Code, Cursor, Codex, Windsurf o Copilot en tu propia máquina funciona sin más.
</details>

<details>
<summary><b>¿Por qué no escribir simplemente un script de Playwright?</b></summary>
Podrías. <code>stm</code> es ese script, más el descubrimiento de páginas, una estructura de carpetas estable, capturas estables y repetibles, una salida pensada para agentes, el manejo de las superposiciones de desarrollo y todos los casos límite, con mantenimiento. Además es un comando que tu agente ya conoce.
</details>

<details>
<summary><b>En Linux dice que al navegador le faltan librerías.</b></summary>
Ejecuta el comando <code>install-deps</code> que imprime, una vez. WSL y Codespaces también lo necesitan.
</details>

<details>
<summary><b>¿Dónde vive el navegador descargado?</b></summary>
En la caché de Playwright: <code>~/Library/Caches/ms-playwright</code> en macOS, <code>~/.cache/ms-playwright</code> en Linux, <code>%LOCALAPPDATA%\ms-playwright</code> en Windows. Bórrala cuando quieras; <code>stm</code> la descarga de nuevo cuando haga falta.
</details>

<details>
<summary><b>¿Puedo usarlo en mi sitio publicado o de staging?</b></summary>
Sí: <code>stm --url https://staging.example.com</code>. Lee el <code>sitemap.xml</code> de ese sitio y sigue sus enlaces igual que lo haría en local, se queda en ese único origen y nunca sigue enlaces que parezcan destructivos, como <code>/logout</code> o <code>/delete</code>. Por favor, captura solo sitios que tengas permiso de capturar.
</details>

## Hoja de ruta

Pequeña a propósito. Vota abriendo un issue.

- `stm diff`: mostrar exactamente qué regiones de una página cambiaron, y entregar a los agentes recortes en lugar de páginas enteras
- `stm timelapse`: convertir el historial de una página en un GIF o MP4, con leyendas de los commits de git
- `stm backfill`: recorrer tu historial de git y construir el historial visual que nunca capturaste
- Capturas con sesión iniciada (`--storage-state`)
- Una galería local con un control deslizante de tiempo

No está previsto: sincronización en la nube, cuentas, telemetría, un modo de vigilancia, un archivo de configuración.

## Contribuir

Los reportes de errores con una ejecución real adjunta son lo más útil ahora mismo. Empieza por [CONTRIBUTING.md](../../CONTRIBUTING.md), y después [AGENTS.md](../../AGENTS.md) para el mapa de módulos y las reglas. Cada decisión y su motivo viven en [DECISIONS.md](../../DECISIONS.md).

## Acerca de

Creado por **Mohammed Sohaib Uddin**, porque el software que cambia todos los días merece un registro de cómo se veía.

<p align="left">
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/Connect%20on%20LinkedIn-FF8C1A?style=for-the-badge&logo=linkedin&logoColor=white" alt="Conecta en LinkedIn"></a>
  <a href="https://github.com/mdsohaib"><img src="https://img.shields.io/badge/Follow%20on%20GitHub-0A0E14?style=for-the-badge&logo=github&logoColor=white" alt="Sígueme en GitHub"></a>
</p>

Si `stm` te muestra algo que te alegras de haber visto, una estrella no cuesta nada y ayuda a otras personas a encontrarlo.

MIT © Mohammed Sohaib Uddin
