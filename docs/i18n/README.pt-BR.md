<p align="center">
  <a href="../../README.md">English</a> ·
  <a href="README.zh-CN.md">简体中文</a> ·
  <a href="README.es.md">Español</a> ·
  <a href="README.hi.md">हिन्दी</a> ·
  Português ·
  <a href="README.ja.md">日本語</a> ·
  <a href="README.de.md">Deutsch</a> ·
  <a href="README.fr.md">Français</a> ·
  <a href="README.ko.md">한국어</a> ·
  <a href="README.ru.md">Русский</a> ·
  <a href="README.ar.md">العربية</a>
</p>

*Traduzido do README em inglês. Em caso de dúvida, a versão em inglês é a referência.*

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/banner.svg" alt="screenshot-time-machine: cada página do seu app em localhost, capturada, datada e comparada, em um comando" width="100%">
</p>

<p align="center">
  <b>Tire um screenshot de página inteira de cada página do seu site com um único comando.</b><br>
  Tudo salvo em pastas datadas. Na próxima execução, ele diz exatamente quais páginas mudaram.<br>
  <b>Grátis e de código aberto. Roda inteiramente na sua máquina.</b>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/screenshot-time-machine"><img src="https://img.shields.io/npm/v/screenshot-time-machine?style=flat-square&label=npm&color=FF6600&labelColor=0A0E14" alt="versão no npm"></a>
  <a href="https://github.com/mdsohaib/screenshot-time-machine/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/mdsohaib/screenshot-time-machine/ci.yml?branch=main&style=flat-square&label=tests&color=FF6600&labelColor=0A0E14" alt="testes"></a>
  <img src="https://img.shields.io/badge/dependencies-1-FF6600?style=flat-square&labelColor=0A0E14" alt="uma dependência">
  <img src="https://img.shields.io/badge/node-22%2B-FF6600?style=flat-square&labelColor=0A0E14&logo=nodedotjs&logoColor=white" alt="Node 22+">
  <a href="../../LICENSE"><img src="https://img.shields.io/badge/license-MIT-FF6600?style=flat-square&labelColor=0A0E14" alt="licença MIT"></a>
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/LinkedIn-Mohammed%20Sohaib%20Uddin-FF6600?style=flat-square&labelColor=0A0E14&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
</p>

```bash
npx screenshot-time-machine@latest               # your app is on localhost? that is the whole setup
npx skills add mdsohaib/screenshot-time-machine  # teach Claude Code, Cursor, Codex and friends to run it
```

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/hero.svg" alt="stm mostrando uma página alterada no terminal, ao lado de uma pasta de snapshots datados" width="820">
</p>

<p align="center">
  <b>Funciona com</b><br>
  <img src="https://img.shields.io/badge/Claude%20Code-0A0E14?style=flat-square&logo=claude&logoColor=FF6600" alt="Claude Code">
  <img src="https://img.shields.io/badge/Codex-0A0E14?style=flat-square" alt="Codex">
  <img src="https://img.shields.io/badge/Cursor-0A0E14?style=flat-square&logo=cursor&logoColor=FF6600" alt="Cursor">
  <img src="https://img.shields.io/badge/Gemini%20CLI-0A0E14?style=flat-square&logo=googlegemini&logoColor=FF6600" alt="Gemini CLI">
  <img src="https://img.shields.io/badge/Antigravity-0A0E14?style=flat-square" alt="Antigravity">
  <img src="https://img.shields.io/badge/Copilot-0A0E14?style=flat-square&logo=githubcopilot&logoColor=FF6600" alt="GitHub Copilot">
  <img src="https://img.shields.io/badge/Windsurf-0A0E14?style=flat-square&logo=windsurf&logoColor=FF6600" alt="Windsurf">
  <img src="https://img.shields.io/badge/OpenCode-0A0E14?style=flat-square&logo=opencode&logoColor=FF6600" alt="OpenCode">
  <img src="https://img.shields.io/badge/Cline-0A0E14?style=flat-square" alt="Cline">
  <br><i>e com as pessoas que escrevem os prompts</i>
</p>

---

## O que é

`stm` é uma ferramenta de linha de comando gratuita e de código aberto. Você roda enquanto seu site está rodando no seu computador. Ela:

1. **Encontra seu site** em localhost automaticamente, ou onde você apontar com `--url`.
2. **Encontra todas as páginas** a partir do seu sitemap e dos seus links.
3. **Captura cada página inteira**, de cima a baixo, e também uma vista do topo da página, fácil de ler.
4. **Salva tudo como arquivos PNG comuns** em uma pasta nomeada com a data e a hora.
5. **Compara com a última vez** e diz exatamente quais páginas mudaram.

```
$ stm
7 pages saved → screenshots/localhost-3000_2026-08-15_14-32/
   1 changed since last snapshot (Aug 12, 09:10): /pricing
```

Sem conta. Sem nuvem. Sem assinatura. Sem arquivo de configuração. Sem processo em segundo plano. Uma dependência, licença MIT, seu para sempre.

## O problema que ele resolve

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/the-problem.svg" alt="Doze miniaturas de páginas. Uma está marcada como a página que você olhou. Quatro voltaram quebradas." width="820">
</p>

Você muda um componente compartilhado, um layout ou uma folha de estilo e não faz ideia do que isso causou nas outras quarenta páginas. O único jeito honesto de descobrir é abrir cada página e olhar, então ninguém faz isso.

Os agentes de código com IA deixaram isso mais evidente. Você pede uma correção na página de preços, o agente edita um arquivo compartilhado, e a página Sobre ganha um vão silencioso. O agente nunca vê o resultado, e você também não.

O Git rastreia cada linha do seu código e nenhum pixel do seu site. Serviços de teste visual querem um pipeline de CI e uma cobrança mensal. Tirar screenshots na mão não sobrevive até a quarta página, e ninguém guarda os arquivos.

## Por que ajuda

- **Pegue páginas quebradas antes dos seus usuários.** Um comando, todas as páginas, uma lista do que mudou.
- **Dê olhos ao seu agente de IA.** `stm --json` entrega a ele os caminhos dos arquivos das páginas alteradas, então ele abre só essas e corrige o que quebrou.
- **Mantenha um histórico visual.** Cada execução é uma pasta datada de PNGs simples. Volte no tempo e veja como seu site estava em março, direto do Finder ou do Explorer.

## Início rápido

Seu app precisa estar rodando em localhost (`npm run dev`, `rails s`, `python manage.py runserver`, um servidor estático, qualquer coisa que sirva HTML). Então:

```bash
npx screenshot-time-machine@latest
```

Mude alguma coisa, rode de novo e leia a linha `changed`. Esse é o fluxo inteiro.

<details>
<summary><b>Instale uma vez e rode como <code>stm</code></b></summary>

```bash
npm install -g screenshot-time-machine
stm
```

Escreva sempre `npx screenshot-time-machine@latest`, nunca `npx stm`. O nome `stm` no npm pertence a um pacote sem relação, de 2014.
</details>

<details>
<summary><b>O que acontece na primeira execução</b></summary>

- `stm` testa as portas 3000, 3001, 5173, 5174, 8080, 4321, 4322, 8000, 4200 e 5000, nessa ordem, e usa o primeiro app que responder. Se vários responderem, ele prefere o que este projeto usou da última vez e avisa sobre os outros.
- Ele usa um navegador do Playwright que você já tenha, ou o Chrome ou o Edge da sua máquina. Se nenhum for encontrado, ele baixa um Chrome headless uma única vez (cerca de 120 MB) e avisa.
- Se o seu projeto tiver um `.gitignore`, ele adiciona `screenshots/` uma vez e avisa. Ele nunca cria um `.gitignore` e nunca apaga nada.
</details>

**Requisitos:** Node 22 ou mais recente. Se você roda `npm run dev`, é quase certo que já tem. Na dúvida: `node -v`.

## Instale no seu agente de código com IA

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/agent-loop.svg" alt="O ciclo: o agente edita a UI, roda stm --json, recebe a lista de mudanças, vê as imagens fold, corrige e roda de novo" width="820">
</p>

Um comando instala o `stm` como skill, para que o agente saiba quando rodar e como ler o resultado. Escolha seu agente:

| Agente | Comando | A skill vai para |
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
| **Qualquer outro** | `npx skills add mdsohaib/screenshot-time-machine` | escolha na lista de mais de 70 agentes |

Adicione `-g` a qualquer um deles para instalar em todos os projetos, e não só neste.

Ou simplesmente peça ao seu agente, em palavras comuns:

> Instale o screenshot-time-machine, rode `stm` no meu app e me mostre o que mudou.

Depois adicione uma linha ao arquivo de memória que seu agente lê (`CLAUDE.md`, `AGENTS.md`, `GEMINI.md`, `.cursor/rules`), para que ele verifique o próprio trabalho sem precisar ser lembrado:

```
After changing anything a user can see, run `stm --json` and view the `fold` image of every entry in `changed` and `new` before saying you're done. Never claim a UI change is verified without viewing a screenshot.
```

<details>
<summary><b>Claude Code: instalação por plugin, e como o ciclo funciona na prática</b></summary>

Skills são o caminho simples. Se você preferir plugins, rode isto dentro do Claude Code:

```
/plugin marketplace add mdsohaib/screenshot-time-machine
/plugin install stm@stm
```

Sem chave SSH no GitHub? Use a forma com URL: `/plugin marketplace add https://github.com/mdsohaib/screenshot-time-machine.git`

O Claude Code abre screenshots com a ferramenta Read, e `stm --json` entrega caminhos absolutos. O ciclo é: editar, `stm --json`, ler as imagens `fold` alteradas, corrigir, repetir. Peça a ele para "verificar a UI" e ele vai buscar a skill por conta própria.
</details>

<details>
<summary><b>Codex</b></summary>

Coloque a linha de memória em `AGENTS.md`. O Codex abre imagens com `view_image`, então, se ele hesitar, diga "veja a imagem fold de cada página alterada".
</details>

<details>
<summary><b>Cursor</b></summary>

Coloque a linha de memória em uma regra dentro de `.cursor/rules/`. O agente roda `stm --json` no terminal dele e abre os caminhos de PNG retornados. O navegador embutido do Cursor mostra uma página por vez; o `stm` entrega todas, além do diff.
</details>

<details>
<summary><b>Qualquer agente, sem suporte a skills</b></summary>

`stm skill` imprime o texto da skill. Cole no arquivo de instruções que seu agente lê.

```bash
stm skill
```
</details>

### O que o agente recebe de volta

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

Um documento JSON no stdout, no máximo duas linhas no stderr, impresso mesmo quando algumas páginas falham. `code` espelha o código de saída. `truncated` conta as entradas deixadas de fora da lista (o limite é 25; o manifest tem todas). A saída nunca contém texto das páginas, apenas caminhos e números.

**Sobre tokens.** Páginas que não mudaram não custam nada para olhar, porque o agente nunca as abre. O resumo tem cerca de 150 tokens, mais uns 50 por página alterada. Ver uma página alterada custa uma única imagem de 1440x900. Screenshots de página inteira muito altos são reduzidos pelos modelos de visão até o texto ficar ilegível, e é exatamente por isso que cada página também ganha uma imagem `fold`, e por que a skill manda o agente abrir essa primeiro.

## Um histórico visual no disco

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

Cada execução é uma pasta nova, nomeada com o app e o minuto em que rodou. Cada arquivo dentro carrega o mesmo timestamp, então um screenshot arrastado para fora da pasta continua dizendo o que é e quando aconteceu. Duas execuções no mesmo minuto ganham `-2`, `-3` no timestamp. Páginas com mais de 16.384 px de altura são cortadas nessa altura, o limite do Chromium, e marcadas como `truncated`.

Abra a pasta no Finder ou no Explorer e você tem um álbum de fotos do seu projeto. O histórico é feito de PNGs simples, então ele sobrevive à ferramenta. Desinstalar não deixa nada para trás, além da pasta `screenshots/` e, se você tinha um `.gitignore`, uma linha nele.

## Comandos

| Comando | O que faz |
|---|---|
| `stm` | Captura todas as páginas do app rodando em localhost |
| `stm /pricing /about` | Captura só estas páginas, em segundos. Este é o ciclo editar e conferir |
| `stm --url http://localhost:4321` | Captura este app em vez de detectar automaticamente. Um caminho inicia a varredura ali |
| `stm --mobile` | Captura também uma vista de celular de 390x844 (arquivos `@mobile`) |
| `stm --max 100` | Para de descobrir depois deste número de páginas (padrão 100) |
| `stm --out screenshots` | Para onde vão os snapshots (padrão `screenshots`) |
| `stm --json` | Resumo legível por máquina no stdout, para agentes |
| `stm list` | Snapshots anteriores: pasta, contagem de páginas, alteradas, falhas |
| `stm open` | Abre a pasta do snapshot mais recente |
| `stm skill` | Imprime a skill do agente |

Códigos de saída: `0` tudo capturado, `1` nada capturado (sem app, sem navegador, argumentos inválidos), `2` terminou com algumas páginas com falha ou a execução foi interrompida. Uma página com falha nunca interrompe a execução.

## Como ele encontra páginas e rastreia o que mudou

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/how-it-works.svg" alt="detectar, descobrir, capturar, comparar, reportar" width="820">
</p>

Os detalhes que tornam os screenshots confiáveis:

- As páginas são roladas até o fim antes da captura, para que imagens e seções com carregamento tardio apareçam, e depois voltam ao topo. Sites com rolagem suave são tratados.
- As animações são congeladas no estado final, então fade-ins ficam visíveis e spinners param quietos. Duas execuções na mesma máquina produzem PNGs idênticos byte a byte, e é isso que faz "changed" significar alguma coisa.
- Barras de ferramentas de desenvolvimento (Astro, Nuxt, o badge do Next.js) são escondidas. Overlays de **erro** de desenvolvimento nunca são: a página é capturada como está e sinalizada com um aviso, porque uma página quebrada é exatamente o que você quer ver.
- Conexões de longa duração (sockets de HMR, streams de eventos) nunca travam uma captura. Cada página tem um orçamento de 30 segundos e uma nova tentativa, depois é registrada como falha e a execução segue.
- O manifest é escrito depois de cada página, então uma execução interrompida ainda deixa uma pasta que o `stm list` consegue ler, e o resumo diz que ela parou antes do fim.
- Links para `/logout`, `/delete` e afins nunca são seguidos. Nem arquivos, nem `/api/`, nem outras origens, nem a sua própria pasta `screenshots/`.

## Como ele se compara

| | stm | Verificação automática do Claude Code Desktop | Playwright MCP, agent-browser, DevTools MCP | Percy, Chromatic |
|---|---|---|---|---|
| Todas as páginas em um comando | sim | uma página por vez | uma página por chamada de ferramenta | sim, no CI |
| Diz quais páginas mudaram | sim | não | não | sim, na nuvem |
| Funciona no terminal, no Cursor, no Codex | sim | só no Desktop | sim | só no CI |
| Histórico no disco que dá para navegar | sim | não | não | na nuvem deles |
| Roda inteiramente na sua máquina | sim | sim | sim | não |

Eles são complementares, não rivais. Use uma ferramenta de navegador quando seu agente precisar clicar por aí. Use o `stm` quando ele precisar ver tudo o que acabou de tocar.

## Privacidade

**Roda 100% localmente.** O `stm` conversa apenas com a URL do seu app e, uma única vez, com a CDN de navegadores do Playwright, caso você não tenha Chrome nem Edge. Seus screenshots nunca saem da sua máquina. Sem contas, sem chaves de API, sem telemetria. As páginas que você captura carregam os próprios recursos exatamente como fariam no seu navegador. O modelo de ameaças completo está em [SECURITY.md](../../SECURITY.md).

## Perguntas frequentes

<details>
<summary><b>É realmente grátis?</b></summary>
Sim. Licença MIT, código aberto, sem plano pago, sem serviço hospedado, nada para se cadastrar. Instale, use para sempre, faça um fork se quiser.
</details>

<details>
<summary><b>Funciona com Next.js, Vite, Astro, SvelteKit, Rails, Django, sites estáticos?</b></summary>
Sim. Qualquer coisa que sirva HTML em localhost. As portas usuais de todos esses são testadas automaticamente; use <code>--url</code> para qualquer outro caso.
</details>

<details>
<summary><b>Ele só encontrou a minha página inicial.</b></summary>
As páginas são descobertas pelo seu sitemap e por links <code>&lt;a href&gt;</code>. Apps que navegam por botões ou rotas com hash (<code>/#/about</code>) não têm links para seguir. Diga os nomes das páginas: <code>stm /about /pricing</code>. Os agentes são instruídos a passar as páginas que tocaram.
</details>

<details>
<summary><b>A maioria dos meus screenshots mostra a página de login.</b></summary>
Seu app redireciona para a tela de entrada. O <code>stm</code> ainda não consegue fazer login, e avisa quando isso acontece. Capturas com sessão iniciada estão no roadmap.
</details>

<details>
<summary><b>Depois de um tempo, tudo aparece como alterado.</b></summary>
Causas comuns: seu navegador foi atualizado, o que muda um pouco a renderização (o <code>stm</code> registra a versão do navegador e avisa), ou uma página mostra algo que se move sozinho, como um relógio, "3 minutos atrás", uma imagem de destaque aleatória, uma animação em canvas, ou um banner de cookies que some depois da primeira visita. Passe essas páginas explicitamente e confira com os olhos até o <code>stm diff</code> chegar.
</details>

<details>
<summary><b>Ele pode rodar sozinho, observando meus arquivos?</b></summary>
Não, e isso é de propósito. O <code>stm</code> é um botão de ponto de salvamento, como o <code>git commit</code>: você, ou seu agente, decide quando um momento vale a pena ser guardado. Se você quer isso automático, coloque a instrução de uma linha no arquivo de memória do seu agente e deixe o agente decidir.
</details>

<details>
<summary><b>Posso transformar meu histórico em um timelapse?</b></summary>
Um <code>stm timelapse</code> nativo está no roadmap. Hoje, com ffmpeg:
<pre><code>ffmpeg -framerate 1 -pattern_type glob -i 'screenshots/*/pricing_*.png' \
  -vf "scale=720:-1,split[a][b];[a]palettegen[p];[b][p]paletteuse" pricing.gif</code></pre>
</details>

<details>
<summary><b>Eu uso Lovable, Bolt ou v0. Dá para usar isto?</b></summary>
Esses rodam seu app na nuvem deles, então não existe localhost para capturar. Exporte o projeto, rode localmente, e o <code>stm</code> funciona. Qualquer coisa feita com Claude Code, Cursor, Codex, Windsurf ou Copilot na sua própria máquina funciona de imediato.
</details>

<details>
<summary><b>Por que não escrever um script do Playwright?</b></summary>
Você poderia. O <code>stm</code> é esse script, mais descoberta de páginas, um layout de pastas estável, detecção de mudanças, saída amigável para agentes, tratamento de overlays de desenvolvimento e todos os casos de borda, com manutenção. E também é um comando que seu agente já conhece.
</details>

<details>
<summary><b>No Linux, diz que faltam bibliotecas do navegador.</b></summary>
Rode o comando <code>install-deps</code> que ele imprime, uma vez. WSL e Codespaces também precisam disso.
</details>

<details>
<summary><b>Onde fica o navegador baixado?</b></summary>
No cache do Playwright: <code>~/Library/Caches/ms-playwright</code> no macOS, <code>~/.cache/ms-playwright</code> no Linux, <code>%LOCALAPPDATA%\ms-playwright</code> no Windows. Apague quando quiser; o <code>stm</code> baixa de novo quando precisar.
</details>

<details>
<summary><b>Posso apontar para um site que não está em localhost?</b></summary>
Sim: <code>stm --url https://staging.example.com</code>. Ele permanece naquela origem e ignora links que pareçam destrutivos. Capture apenas sites que você tem permissão para capturar.
</details>

## Roadmap

Pequeno de propósito. Vote abrindo uma issue.

- `stm diff`: mostrar exatamente quais regiões de uma página mudaram, e entregar recortes aos agentes em vez de páginas inteiras
- `stm timelapse`: transformar o histórico de uma página em GIF ou MP4, com legendas dos commits do git
- `stm backfill`: percorrer seu histórico do git e construir o histórico visual que você nunca capturou
- Capturas com sessão iniciada (`--storage-state`)
- Uma galeria local com uma linha do tempo deslizante

Fora dos planos: sincronização na nuvem, contas, telemetria, modo de observação, arquivo de configuração.

## Como contribuir

Relatos de bug com uma execução real anexada são a coisa mais útil neste momento. Comece pelo [CONTRIBUTING.md](../../CONTRIBUTING.md), depois pelo [AGENTS.md](../../AGENTS.md) para o mapa dos módulos e as regras. Cada decisão e o motivo dela vivem em [DECISIONS.md](../../DECISIONS.md).

## Sobre

Feito por **Mohammed Sohaib Uddin**, porque agentes que entregam UI que ninguém olha precisavam de um jeito de olhar.

<p align="left">
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/Connect%20on%20LinkedIn-FF6600?style=for-the-badge&logo=linkedin&logoColor=white" alt="Conecte-se no LinkedIn"></a>
  <a href="https://github.com/mdsohaib"><img src="https://img.shields.io/badge/Follow%20on%20GitHub-0A0E14?style=for-the-badge&logo=github&logoColor=white" alt="Siga no GitHub"></a>
</p>

Se o `stm` salvar você de publicar uma página quebrada, uma estrela não custa nada e ajuda outras pessoas a encontrá-lo.

MIT © Mohammed Sohaib Uddin
