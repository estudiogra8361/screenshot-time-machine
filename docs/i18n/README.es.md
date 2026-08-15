<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/banner.svg" alt="screenshot-time-machine: cada página de tu app en localhost, capturada, fechada y comparada, con un solo comando" width="100%">
</p>

<p align="center">
  <b>Captura una pantalla completa de cada página de tu sitio web con un solo comando.</b><br>
  Se guardan en carpetas con fecha. La próxima vez que lo ejecutes, te dice exactamente qué páginas cambiaron.<br>
  <b>Gratis y de código abierto. Funciona por completo en tu propia máquina.</b>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/screenshot-time-machine"><img src="https://img.shields.io/npm/v/screenshot-time-machine?style=flat-square&label=npm&color=FF6600&labelColor=0A0E14" alt="versión en npm"></a>
  <a href="https://github.com/mdsohaib/screenshot-time-machine/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/mdsohaib/screenshot-time-machine/ci.yml?branch=main&style=flat-square&label=tests&color=FF6600&labelColor=0A0E14" alt="tests"></a>
  <img src="https://img.shields.io/badge/dependencies-1-FF6600?style=flat-square&labelColor=0A0E14" alt="una sola dependencia">
  <img src="https://img.shields.io/badge/node-22%2B-FF6600?style=flat-square&labelColor=0A0E14&logo=nodedotjs&logoColor=white" alt="Node 22+">
  <a href="../../LICENSE"><img src="https://img.shields.io/badge/license-MIT-FF6600?style=flat-square&labelColor=0A0E14" alt="licencia MIT"></a>
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/LinkedIn-Mohammed%20Sohaib%20Uddin-FF6600?style=flat-square&labelColor=0A0E14&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
</p>

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

<i>Traducido del README en inglés. En caso de duda, la versión en inglés es la referencia.</i>

```bash
npx screenshot-time-machine@latest               # your app is on localhost? that is the whole setup
npx skills add mdsohaib/screenshot-time-machine  # teach Claude Code, Cursor, Codex and friends to run it
```

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/hero.svg" alt="stm informando en la terminal de una página cambiada, junto a una carpeta de capturas fechadas" width="820">
</p>

<p align="center">
  <b>Funciona con</b><br>
  <img src="https://img.shields.io/badge/Claude%20Code-0A0E14?style=flat-square&logo=claude&logoColor=FF6600" alt="Claude Code">
  <img src="https://img.shields.io/badge/Codex-0A0E14?style=flat-square" alt="Codex">
  <img src="https://img.shields.io/badge/Cursor-0A0E14?style=flat-square&logo=cursor&logoColor=FF6600" alt="Cursor">
  <img src="https://img.shields.io/badge/Gemini%20CLI-0A0E14?style=flat-square&logo=googlegemini&logoColor=FF6600" alt="Gemini CLI">
  <img src="https://img.shields.io/badge/Antigravity-0A0E14?style=flat-square" alt="Antigravity">
  <img src="https://img.shields.io/badge/Copilot-0A0E14?style=flat-square&logo=githubcopilot&logoColor=FF6600" alt="GitHub Copilot">
  <img src="https://img.shields.io/badge/Windsurf-0A0E14?style=flat-square&logo=windsurf&logoColor=FF6600" alt="Windsurf">
  <img src="https://img.shields.io/badge/OpenCode-0A0E14?style=flat-square&logo=opencode&logoColor=FF6600" alt="OpenCode">
  <img src="https://img.shields.io/badge/Cline-0A0E14?style=flat-square" alt="Cline">
  <br><i>y con las personas que les escriben los prompts</i>
</p>

---

## Qué es

`stm` es una herramienta de línea de comandos gratuita y de código abierto. La ejecutas mientras tu sitio web corre en tu computadora. Lo que hace:

1. **Encuentra tu sitio** en localhost automáticamente, o donde tú le indiques con `--url`.
2. **Encuentra todas las páginas** a partir de tu sitemap y de tus enlaces.
3. **Captura cada página completa**, de arriba abajo, más una vista de la parte superior que se lee de un vistazo.
4. **Las guarda como archivos PNG normales** en una carpeta con el nombre de la fecha y la hora.
5. **Compara con la vez anterior** y te dice exactamente qué páginas cambiaron.

```
$ stm
7 pages saved → screenshots/localhost-3000_2026-08-15_14-32/
   1 changed since last snapshot (Aug 12, 09:10): /pricing
```

Sin cuenta. Sin nube. Sin suscripción. Sin archivo de configuración. Sin procesos en segundo plano. Una sola dependencia, licencia MIT, tuyo para siempre.

## El problema que resuelve

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/the-problem.svg" alt="Doce miniaturas de páginas. Una está marcada como la página que revisaste. Cuatro quedaron rotas." width="820">
</p>

Cambias un componente compartido, un layout o una hoja de estilos y no tienes ni idea de qué le hizo eso a las otras cuarenta páginas. La única forma honesta de saberlo es abrir cada página y mirarla, así que nadie lo hace.

Los agentes de programación con IA agudizaron el problema. Pides un arreglo en la página de precios, el agente edita un archivo compartido, y la página Acerca de se llena de un hueco en silencio. El agente nunca ve el resultado, y tú tampoco.

Git registra cada línea de tu código y ni un solo píxel de tu sitio. Los servicios de testing visual quieren un pipeline de CI y una factura mensual. Capturar pantallas a mano no sobrevive a la cuarta página, y nadie guarda los archivos.

## Por qué ayuda

- **Detecta páginas rotas antes que tus usuarios.** Un comando, todas las páginas, una lista de lo que cambió.
- **Dale ojos a tu agente de IA.** `stm --json` le entrega las rutas de archivo de las páginas cambiadas, así abre solo esas y arregla lo que rompió.
- **Conserva un historial visual.** Cada ejecución es una carpeta fechada de PNGs normales. Retrocede y mira cómo se veía tu sitio en marzo, directo desde Finder o el Explorador.

## Inicio rápido

Tu app tiene que estar corriendo en localhost (`npm run dev`, `rails s`, `python manage.py runserver`, un servidor estático, cualquier cosa que sirva HTML). Entonces:

```bash
npx screenshot-time-machine@latest
```

Cambia algo, vuelve a ejecutarlo y lee la línea `changed`. Ese es todo el flujo de trabajo.

<details>
<summary><b>Instálalo una vez y ejecútalo como <code>stm</code></b></summary>

```bash
npm install -g screenshot-time-machine
stm
```

Escribe siempre `npx screenshot-time-machine@latest`, nunca `npx stm`. El nombre `stm` en npm pertenece a un paquete sin relación, de 2014.
</details>

<details>
<summary><b>Qué pasa en la primera ejecución</b></summary>

- `stm` prueba los puertos 3000, 3001, 5173, 5174, 8080, 4321, 4322, 8000, 4200 y 5000, en ese orden, y usa la primera app que responda. Si responden varias, prefiere la que este proyecto usó la última vez y te avisa de las demás.
- Usa un navegador de Playwright que ya tengas, o el Chrome o Edge de tu máquina. Si no encuentra ninguno, descarga una vez un Chrome headless (unos 120 MB) y te lo dice.
- Si tu proyecto tiene un `.gitignore`, añade `screenshots/` una sola vez y te avisa. Nunca crea un `.gitignore`, y nunca borra nada.
</details>

**Requisitos:** Node 22 o superior. Si ejecutas `npm run dev`, casi seguro ya lo tienes. ¿No estás seguro? `node -v`.

## Instálalo en tu agente de programación con IA

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/agent-loop.svg" alt="El ciclo: el agente edita la interfaz, ejecuta stm --json, obtiene la lista de cambios, mira las imágenes fold, corrige y vuelve a ejecutar" width="820">
</p>

Un solo comando instala `stm` como skill, para que el agente sepa cuándo ejecutarlo y cómo leer el resultado. Elige tu agente:

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
| **Cualquier otro** | `npx skills add mdsohaib/screenshot-time-machine` | elige de la lista de más de 70 agentes |

Añade `-g` a cualquiera de esos para instalarlo en todos tus proyectos en vez de solo en este.

O simplemente díselo a tu agente, con palabras normales:

> Instala screenshot-time-machine, ejecuta `stm` en mi app y muéstrame qué cambió.

Después añade una línea al archivo de memoria que lee tu agente (`CLAUDE.md`, `AGENTS.md`, `GEMINI.md`, `.cursor/rules`), para que verifique su propio trabajo sin que se lo pidas:

```
After changing anything a user can see, run `stm --json` and view the `fold` image of every entry in `changed` and `new` before saying you're done. Never claim a UI change is verified without viewing a screenshot.
```

<details>
<summary><b>Claude Code: instalación como plugin, y cómo se siente el ciclo</b></summary>

Las skills son el camino sencillo. Si prefieres plugins, ejecuta esto dentro de Claude Code:

```
/plugin marketplace add mdsohaib/screenshot-time-machine
/plugin install stm@stm
```

¿No tienes una clave SSH en GitHub? Usa la forma con URL: `/plugin marketplace add https://github.com/mdsohaib/screenshot-time-machine.git`

Claude Code abre las capturas con su herramienta Read, y `stm --json` le entrega rutas absolutas. El ciclo es: editar, `stm --json`, leer las imágenes `fold` que cambiaron, corregir, repetir. Pídele que "revise la interfaz" y usará la skill por su cuenta.
</details>

<details>
<summary><b>Codex</b></summary>

Pon la línea de memoria en `AGENTS.md`. Codex abre imágenes con `view_image`, así que si duda, dile "mira la imagen fold de cada página cambiada".
</details>

<details>
<summary><b>Cursor</b></summary>

Pon la línea de memoria en una regla dentro de `.cursor/rules/`. El agente ejecuta `stm --json` en su terminal y abre las rutas PNG que devuelve. El navegador integrado de Cursor muestra una página a la vez; `stm` le entrega todas, además de la comparación.
</details>

<details>
<summary><b>Cualquier agente, sin soporte de skills</b></summary>

`stm skill` imprime el texto de la skill. Pégalo en el archivo de instrucciones que lea tu agente.

```bash
stm skill
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

Un documento JSON en stdout, como máximo dos líneas en stderr, impresas incluso cuando algunas páginas fallan. `code` refleja el código de salida. `truncated` cuenta las entradas que quedaron fuera de la lista (el tope son 25; el manifest las tiene todas). La salida nunca contiene texto de las páginas, solo rutas y números.

**Sobre los tokens.** Las páginas sin cambios no cuestan nada de mirar, porque el agente nunca las abre. El resumen ronda los 150 tokens más unos 50 por cada página cambiada. Ver una página cambiada cuesta una sola imagen de 1440x900. Las capturas de página completa muy altas son reducidas por los modelos de visión hasta que el texto se vuelve ilegible, y por eso exactamente cada página tiene también una imagen `fold`, y por eso la skill le dice al agente que abra esa primero.

## Un historial visual en disco

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

Cada ejecución es una carpeta nueva con el nombre de la app y el minuto en que se ejecutó. Cada archivo dentro lleva la misma marca de tiempo, así que una captura arrastrada fuera de su carpeta sigue diciendo qué es y cuándo ocurrió. Dos ejecuciones en el mismo minuto reciben `-2`, `-3` en la marca de tiempo. Las páginas de más de 16.384 px de alto se cortan a esa altura, el límite de Chromium, y se marcan como `truncated`.

Abre la carpeta en Finder o en el Explorador y tienes un álbum de fotos de tu proyecto. El historial son PNGs normales, así que sobrevive a esta herramienta. Desinstalarla no deja nada atrás salvo la carpeta `screenshots/` y, si tenías un `.gitignore`, una línea en él.

## Comandos

| Comando | Qué hace |
|---|---|
| `stm` | Captura cada página de la app que corre en localhost |
| `stm /pricing /about` | Captura solo estas páginas, en segundos. Este es el ciclo de editar y revisar |
| `stm --url http://localhost:4321` | Captura esta app en vez de detectarla automáticamente. Una ruta hace que el rastreo empiece ahí |
| `stm --mobile` | Captura además una vista de móvil de 390x844 (archivos `@mobile`) |
| `stm --max 100` | Deja de descubrir páginas al llegar a este número (por defecto 100) |
| `stm --out screenshots` | Dónde van las capturas (por defecto `screenshots`) |
| `stm --json` | Resumen legible por máquinas en stdout, para agentes |
| `stm list` | Capturas anteriores: carpeta, número de páginas, cambiadas, fallidas |
| `stm open` | Abre la carpeta de la última captura |
| `stm skill` | Imprime la skill del agente |

Códigos de salida: `0` todo capturado, `1` no se capturó nada (sin app, sin navegador, argumentos incorrectos), `2` terminó con algunas páginas fallidas o la ejecución interrumpida. Una página que falla nunca detiene la ejecución.

## Cómo encuentra las páginas y sigue lo que cambió

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/how-it-works.svg" alt="detectar, descubrir, capturar, comparar, informar" width="820">
</p>

Los detalles que hacen que las capturas sean confiables:

- Las páginas se desplazan hasta abajo antes de capturarlas, para que carguen las imágenes y secciones diferidas, y luego vuelven arriba. Los sitios con scroll suave están contemplados.
- Las animaciones se congelan en su estado final, así los fundidos de entrada se ven y los spinners se quedan quietos. Dos ejecuciones en la misma máquina producen PNGs idénticos byte a byte, que es lo que hace que "cambiado" signifique algo.
- Las barras de herramientas de desarrollo (Astro, Nuxt, el distintivo de Next.js) se ocultan. Las superposiciones de **error** de desarrollo nunca: la página se captura tal cual y se marca con una advertencia, porque una página rota es exactamente lo que quieres ver.
- Las conexiones de larga duración (sockets de HMR, flujos de eventos) nunca bloquean una captura. Cada página tiene un presupuesto de 30 segundos y un reintento; después se registra como fallida y la ejecución continúa.
- El manifest se escribe después de cada página, así que una ejecución interrumpida igual deja una carpeta que `stm list` puede leer, y el resumen dice que se detuvo antes de tiempo.
- Los enlaces a `/logout`, `/delete` y compañía nunca se siguen. Tampoco los archivos, `/api/`, otros orígenes ni tu propia carpeta `screenshots/`.

## Cómo se compara

| | stm | Verificación automática de Claude Code Desktop | Playwright MCP, agent-browser, DevTools MCP | Percy, Chromatic |
|---|---|---|---|---|
| Todas las páginas con un comando | sí | una página a la vez | una página por llamada a la herramienta | sí, en CI |
| Te dice qué páginas cambiaron | sí | no | no | sí, en la nube |
| Funciona en la terminal, Cursor, Codex | sí | solo en Desktop | sí | solo en CI |
| Historial en disco que puedes explorar | sí | no | no | en su nube |
| Funciona por completo en tu máquina | sí | sí | sí | no |

Son complementarios, no rivales. Usa una herramienta de navegador cuando tu agente necesite hacer clic por ahí. Usa `stm` cuando necesite ver todo lo que acaba de tocar.

## Privacidad

**Funciona 100% en local.** `stm` solo habla con la URL de tu app y, una única vez, con el CDN de navegadores de Playwright si no tienes Chrome ni Edge. Tus capturas nunca salen de tu máquina. Sin cuentas, sin claves de API, sin telemetría. Las páginas que capturas cargan sus propios recursos exactamente igual que lo harían en tu navegador. El modelo de amenazas completo está en [SECURITY.md](../../SECURITY.md).

## Preguntas frecuentes

<details>
<summary><b>¿De verdad es gratis?</b></summary>
Sí. Licencia MIT, código abierto, sin plan de pago, sin servicio alojado, sin nada para registrarse. Instálalo, úsalo para siempre, haz un fork si quieres.
</details>

<details>
<summary><b>¿Funciona con Next.js, Vite, Astro, SvelteKit, Rails, Django, sitios estáticos?</b></summary>
Sí. Con cualquier cosa que sirva HTML en localhost. Los puertos habituales de todos ellos se prueban automáticamente; usa <code>--url</code> para cualquier otro caso.
</details>

<details>
<summary><b>Solo encontró mi página de inicio.</b></summary>
Las páginas se descubren desde tu sitemap y desde los enlaces <code>&lt;a href&gt;</code>. Las apps que navegan con botones o con rutas de hash (<code>/#/about</code>) no tienen enlaces que seguir. Nombra las páginas: <code>stm /about /pricing</code>. A los agentes se les indica que pasen las páginas que tocaron.
</details>

<details>
<summary><b>Casi todas mis capturas muestran la página de inicio de sesión.</b></summary>
Tu app redirige al inicio de sesión. <code>stm</code> todavía no puede iniciar sesión, y te avisa cuando esto ocurre. Las capturas con sesión iniciada están en la hoja de ruta.
</details>

<details>
<summary><b>Después de un tiempo todo aparece como cambiado.</b></summary>
Causas habituales: tu navegador se actualizó, lo que desplaza el renderizado ligeramente (<code>stm</code> registra la versión del navegador y te avisa), o una página muestra algo que se mueve por su cuenta, como un reloj, un "hace 3 minutos", una imagen de portada aleatoria, una animación en canvas o un aviso de cookies que desaparece tras la primera visita. Pasa esas páginas de forma explícita y revísalas a ojo hasta que llegue <code>stm diff</code>.
</details>

<details>
<summary><b>¿Puede ejecutarse solo, vigilando mis archivos?</b></summary>
No, a propósito. <code>stm</code> es un botón de punto de guardado, como <code>git commit</code>: tú, o tu agente, deciden cuándo vale la pena conservar un momento. Si lo quieres automático, pon la instrucción de una línea en el archivo de memoria de tu agente y deja que él decida.
</details>

<details>
<summary><b>¿Puedo convertir mi historial en un timelapse?</b></summary>
Un <code>stm timelapse</code> de primera clase está en la hoja de ruta. Hoy, con ffmpeg:
<pre><code>ffmpeg -framerate 1 -pattern_type glob -i 'screenshots/*/pricing_*.png' \
  -vf "scale=720:-1,split[a][b];[a]palettegen[p];[b][p]paletteuse" pricing.gif</code></pre>
</details>

<details>
<summary><b>Uso Lovable, Bolt o v0. ¿Puedo usar esto?</b></summary>
Esos ejecutan tu app en su nube, así que no hay un localhost que capturar. Exporta el proyecto, ejecútalo en local y <code>stm</code> funciona. Todo lo construido con Claude Code, Cursor, Codex, Windsurf o Copilot en tu propia máquina funciona desde el primer momento.
</details>

<details>
<summary><b>¿Por qué no escribir simplemente un script de Playwright?</b></summary>
Podrías. <code>stm</code> es ese script, más el descubrimiento de páginas, una estructura de carpetas estable, detección de cambios, salida pensada para agentes, manejo de superposiciones de desarrollo y todos los casos límite, con mantenimiento incluido. Además es un comando que tu agente ya conoce.
</details>

<details>
<summary><b>Linux dice que al navegador le faltan librerías.</b></summary>
Ejecuta una vez el comando <code>install-deps</code> que imprime. WSL y Codespaces también lo necesitan.
</details>

<details>
<summary><b>¿Dónde queda el navegador descargado?</b></summary>
En la caché de Playwright: <code>~/Library/Caches/ms-playwright</code> en macOS, <code>~/.cache/ms-playwright</code> en Linux, <code>%LOCALAPPDATA%\ms-playwright</code> en Windows. Bórrala cuando quieras; <code>stm</code> lo vuelve a descargar cuando haga falta.
</details>

<details>
<summary><b>¿Puedo apuntarlo a un sitio que no esté en localhost?</b></summary>
Sí: <code>stm --url https://staging.example.com</code>. Se mantiene en ese origen y evita los enlaces que parecen destructivos. Captura solo sitios que tengas permiso de capturar, por favor.
</details>

## Hoja de ruta

Pequeña a propósito. Vota abriendo un issue.

- `stm diff`: mostrar exactamente qué regiones de una página cambiaron, y entregar a los agentes recortes en vez de páginas enteras
- `stm timelapse`: convertir el historial de una página en un GIF o MP4, con los mensajes de commit de git como subtítulos
- `stm backfill`: recorrer tu historial de git y construir el historial visual que nunca capturaste
- Capturas con sesión iniciada (`--storage-state`)
- Una galería local con una línea de tiempo deslizante

No está previsto: sincronización en la nube, cuentas, telemetría, modo de vigilancia, archivo de configuración.

## Cómo contribuir

Los reportes de errores con una ejecución real adjunta son lo más útil ahora mismo. Empieza por [CONTRIBUTING.md](../../CONTRIBUTING.md), y luego [AGENTS.md](../../AGENTS.md) para el mapa de módulos y las reglas. Cada decisión y su motivo viven en [DECISIONS.md](../../DECISIONS.md).

## Acerca de

Creado por **Mohammed Sohaib Uddin**, porque los agentes que publican interfaces que nadie mira necesitaban una forma de mirar.

<p align="left">
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/Connect%20on%20LinkedIn-FF6600?style=for-the-badge&logo=linkedin&logoColor=white" alt="Conecta en LinkedIn"></a>
  <a href="https://github.com/mdsohaib"><img src="https://img.shields.io/badge/Follow%20on%20GitHub-0A0E14?style=for-the-badge&logo=github&logoColor=white" alt="Sígueme en GitHub"></a>
</p>

Si `stm` te salva de publicar una página rota, una estrella no cuesta nada y ayuda a que otras personas lo encuentren.

MIT © Mohammed Sohaib Uddin
