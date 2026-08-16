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
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/banner.svg" alt="screenshot-time-machine: um screenshot de página inteira de cada página do seu site, em um comando" width="100%">
</p>

<h1 align="center">screenshot-time-machine</h1>

<p align="center">
  <b>Como uma Wayback Machine, mas para o seu próprio site.</b><br>
  O <code>stm</code> percorre seu site página por página e salva um screenshot de página inteira<br>
  de cada uma delas em uma pasta carimbada com a data e a hora.<br>
  Aponte para qualquer URL, ou deixe que ele encontre o app que você tem rodando em localhost.<br>
  Rode sempre que você publicar algo e um histórico visual se constrói sozinho:<br>
  cada página, cada versão, no seu próprio disco, em PNGs comuns.<br>
  <b>Gratuito e open source. Roda inteiramente na sua máquina.</b>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/screenshot-time-machine"><img src="https://img.shields.io/npm/v/screenshot-time-machine?style=flat-square&label=npm&color=FF8C1A&labelColor=0A0E14" alt="versão no npm"></a>
  <a href="../../LICENSE"><img src="https://img.shields.io/badge/license-MIT-FFC24A?style=flat-square&labelColor=0A0E14" alt="licença MIT"></a>
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/LinkedIn-Mohammed%20Sohaib%20Uddin-F0509F?style=flat-square&labelColor=0A0E14&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
</p>

```bash
npx screenshot-time-machine@latest                              # the app you have running on localhost
npx screenshot-time-machine@latest --url https://your-site.com  # or any site you are allowed to capture
npx skills add mdsohaib/screenshot-time-machine                 # teach Claude Code, Cursor, Codex and friends to run it
```

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/demo.gif" alt="A página inicial de uma loja ao longo de dez versões de design, do primeiro rascunho ao layout final" width="820">
</p>

<p align="center"><i>Dez versões de uma mesma página, em ordem. É nisso que se transforma uma pasta de screenshots datados.</i></p>

<h3 align="center">Funciona com</h3>

<p align="center">
  <a href="#instale-no-seu-agente-de-codificação-com-ia"><img src="https://img.shields.io/badge/Claude%20Code-FF8C1A?style=for-the-badge&logo=claude&logoColor=white" alt="Claude Code"></a>
  <a href="#instale-no-seu-agente-de-codificação-com-ia"><img src="https://img.shields.io/badge/Codex-0A0E14?style=for-the-badge" alt="Codex"></a>
  <a href="#instale-no-seu-agente-de-codificação-com-ia"><img src="https://img.shields.io/badge/Cursor-7FB0F5?style=for-the-badge&logo=cursor&logoColor=0A0E14" alt="Cursor"></a>
  <a href="#instale-no-seu-agente-de-codificação-com-ia"><img src="https://img.shields.io/badge/Gemini%20CLI-A98BEB?style=for-the-badge&logo=googlegemini&logoColor=0A0E14" alt="Gemini CLI"></a>
  <a href="#instale-no-seu-agente-de-codificação-com-ia"><img src="https://img.shields.io/badge/Antigravity-C88AE0?style=for-the-badge&logo=google&logoColor=0A0E14" alt="Antigravity"></a>
  <br>
  <a href="#instale-no-seu-agente-de-codificação-com-ia"><img src="https://img.shields.io/badge/GitHub%20Copilot-F0509F?style=for-the-badge&logo=githubcopilot&logoColor=white" alt="GitHub Copilot"></a>
  <a href="#instale-no-seu-agente-de-codificação-com-ia"><img src="https://img.shields.io/badge/Windsurf-FFC24A?style=for-the-badge&logo=windsurf&logoColor=0A0E14" alt="Windsurf"></a>
  <a href="#instale-no-seu-agente-de-codificação-com-ia"><img src="https://img.shields.io/badge/OpenCode-4FC3A1?style=for-the-badge&logo=opencode&logoColor=white" alt="OpenCode"></a>
  <a href="#instale-no-seu-agente-de-codificação-com-ia"><img src="https://img.shields.io/badge/Cline-6C7CE0?style=for-the-badge&logo=cline&logoColor=white" alt="Cline"></a>
  <a href="#todos-os-agentes-em-que-você-pode-instalar"><img src="https://img.shields.io/badge/Zed-3B4B5F?style=for-the-badge&logo=zedindustries&logoColor=white" alt="Zed"></a>
  <a href="#todos-os-agentes-em-que-você-pode-instalar"><img src="https://img.shields.io/badge/Warp-2A8FB5?style=for-the-badge&logo=warp&logoColor=white" alt="Warp"></a>
  <a href="#todos-os-agentes-em-que-você-pode-instalar"><img src="https://img.shields.io/badge/Devin-8B6FD4?style=for-the-badge" alt="Devin"></a>
  <a href="#todos-os-agentes-em-que-você-pode-instalar"><img src="https://img.shields.io/badge/Amp-C4653B?style=for-the-badge" alt="Amp"></a>
  <a href="#todos-os-agentes-em-que-você-pode-instalar"><img src="https://img.shields.io/badge/Full%20list-5A6478?style=for-the-badge" alt="a lista completa de agentes"></a>
</p>

<p align="center"><i>e com as pessoas que escrevem os prompts deles</i></p>

---

## O comando único

Você está construindo. Seu app está rodando em localhost. Você digita três letras:

```
$ stm
7 pages saved → screenshots/localhost-3000_2026-08-15_14-32/
   Run stm again after your next change to see which pages look different.
```

Sete screenshots de página inteira, de cima a baixo, agora estão em uma pasta datada ao lado do seu código. Abra no Finder ou no Explorer e o seu site inteiro está ali como uma folha de contato: home, preços, sobre, cada página de produto, tudo, exatamente como está hoje.

Já está no ar? Aponte para o site real e funciona da mesma forma, lendo o seu `sitemap.xml` para encontrar as páginas:

```
$ stm --url https://your-site.com
24 pages saved → screenshots/your-site-com_2026-08-15_14-40/
```

A ferramenta é isso. Tudo o que vem abaixo é no que essa coisa simples se transforma depois que você a roda algumas vezes.

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/hero.svg" alt="stm no terminal ao lado de uma pasta de snapshots datados, cada um com um screenshot de página inteira de cada página" width="820">
</p>

## O que você ganha

**Seu site inteiro em uma pasta.** Não só a página que por acaso está aberta. Cada página, de ponta a ponta, de cima a baixo, em uma pasta que você percorre em dez segundos. É o jeito mais rápido de responder "como o meu site está de verdade agora".

**As páginas que você nunca teria aberto.** O padding que quebrou na página de preços. Um título que quebrou de linha de um jeito ruim. Um card que perdeu a imagem. Um rodapé que saiu do lugar. Está tudo na mesma pasta, esperando ser notado, em vez de esperar ser reportado.

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/the-problem.svg" alt="Doze miniaturas de páginas de uma execução, lado a lado, quatro delas com layouts que precisam de atenção" width="820">
</p>

<p align="center"><i>Doze páginas de uma única execução, lado a lado. Quatro delas pediam atenção, e todas as quatro eram páginas que ninguém tinha aberto.</i></p>

**Um histórico que se constrói sozinho.** Cada execução é sua própria pasta datada, então elas se empilham em uma linha do tempo por conta própria. A home do mês passado e a home de hoje são dois arquivos entre os quais você pode alternar. Seis meses depois, você tem a prova de quanto o projeto avançou.

**Visões de celular na mesma execução.** O `stm --mobile` também captura uma visão de 390x844 de cada página, então aquele título que quebra mal no celular aparece bem ao lado do screenshot de desktop.

**Uma lista curta em vez de quarenta abas.** Da segunda execução em diante, o `stm` imprime as páginas cujos screenshots saíram diferentes dos da vez anterior. Comece por elas.

**Olhos para o seu agente.** O `stm --json` entrega ao Claude Code, ao Cursor ou ao Codex o caminho absoluto de cada página que ele acabou de construir, para que ele possa olhar o próprio trabalho e corrigir antes de dizer que terminou.

**Seu, para sempre.** Arquivos PNG comuns no seu próprio disco. Sem conta, sem nuvem, sem assinatura, sem arquivo de configuração, sem processo em segundo plano. Uma dependência, licença MIT, seu para sempre.

## Para quem isso serve

- **Você escreve o prompt, o agente constrói, e você descobre depois.** Você pediu uma página, ele editou um componente compartilhado, e onze páginas vieram junto. Um comando mostra as onze.
- **Você está publicando sozinho à uma da manhã.** A rodada de design pareceu certa na hora. A pasta de terça-feira diz se ela realmente estava.
- **Você está há três semanas em um redesign** e não lembra direito como era antes. Capture o site no primeiro dia e cada screenshot depois disso é uma comparação que você nunca precisou preparar.
- **Você está entregando um trabalho.** Uma pasta de screenshots de página inteira é a atualização de status mais clara que um cliente ou um colega vai receber.
- **Você quer a prova do trabalho.** A versão um de qualquer coisa vale a pena guardar. A maioria das pessoas percebe isso lá pela versão quatro.

## Começo rápido

Se você está construindo localmente, suba seu app do jeito de sempre (`npm run dev`, `rails s`, `python manage.py runserver`, um servidor estático, qualquer coisa que sirva HTML) e rode:

```bash
npx screenshot-time-machine@latest
```

Se o site já está online, pule tudo isso e informe o endereço:

```bash
npx screenshot-time-machine@latest --url https://your-site.com
```

**Requer Node 22 ou mais recente.** Rode `node -v` para conferir. Se aparecer 21 ou menos, atualize o Node em [nodejs.org](https://nodejs.org) primeiro.

Para os screenshots, o `stm` usa um navegador do Playwright que você já tenha em cache ou, na falta dele, o Chrome ou o Edge que já estão na sua máquina. Se você não tiver nenhum dos dois, ele baixa um navegador headless uma única vez, cerca de 120 MB de download que ocupam aproximadamente 200 MB em disco, e avisa você antes de fazer isso. Essa é a única coisa que o próprio `stm` busca na internet; as páginas que você captura carregam os recursos delas exatamente como fariam no seu navegador.

Mude alguma coisa, rode de novo. Esse é o fluxo inteiro.

Daqui em diante o comando aparece como `stm`, por ser mais curto. Para ter esse nome curto, instale uma vez:

```bash
npm install -g screenshot-time-machine
```

Não instalar também está ótimo. Escreva `npx screenshot-time-machine@latest` onde você vir `stm`. Nunca escreva `npx stm`: esse é um pacote sem relação nenhuma, de 2014.

<details>
<summary><b>O que mais acontece na primeira execução</b></summary>

- O `stm` testa as portas 3000, 3001, 5173, 5174, 8080, 4321, 4322, 8000, 4200 e 5000, nessa ordem, e usa o primeiro app que responder. Se vários responderem, ele prefere o que este projeto usou da última vez e avisa sobre os outros.
- Se o seu projeto tem um `.gitignore`, ele adiciona `screenshots/` uma vez e avisa você. Ele nunca cria um `.gitignore`, e nunca apaga nada.
- As páginas são encontradas seguindo os links `<a href>` delas e lendo o seu `sitemap.xml`, se você tiver um, até 100 páginas por execução. Páginas que só são alcançadas com um clique de botão, e rotas com hash como `/#/about`, não têm link para seguir, então informe essas você mesmo: `stm /about /pricing`.
</details>

## Instale no seu agente de codificação com IA

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/agent-loop.svg" alt="O ciclo: o agente edita a UI, roda stm --json, lê os caminhos dos screenshots, vê as imagens fold, corrige e roda de novo" width="820">
</p>

Seu agente escreveu a página de preços. Escreveu a navegação. Mexeu em um componente compartilhado e onze páginas se moveram junto. Ele nunca olhou de fato para nenhuma delas, porque não tem olhos.

O `stm --json` dá alguns a ele. O agente roda um comando, recebe de volta o caminho absoluto de cada página que acabou de construir, abre a imagem `fold` das que saíram diferentes, e confere o próprio trabalho antes de dizer que terminou.

A parte boa é o que você deixa de fazer. Nada de clicar por onze páginas. Nada de "está tudo certo" que depois não estava. Você recebe uma pasta, percorre em dez segundos, e já sabe quais páginas abrir primeiro.

Um comando instala o `stm` como uma skill: um arquivo curto de instruções que o seu agente lê, para saber quando rodar o `stm` e o que fazer com o resultado. O `npx skills add` é um instalador open source separado que copia essa única pasta para o seu projeto e não muda mais nada. Escolha o seu agente:

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
| **Qualquer outro** | `npx skills add mdsohaib/screenshot-time-machine` | escolha o seu agente na lista abaixo |

Acrescente `-g` a qualquer um desses para instalar para todos os projetos, em vez de só para este.

### Todos os agentes em que você pode instalar

Estes são os nomes que o instalador aceita depois de `-a`. Passe qualquer um deles, ou deixe o `-a` de fora e escolha no menu que ele mostra.

`adal` · `aider-desk` · `amp` · `antigravity` · `antigravity-cli` · `astrbot` · `augment` · `autohand-code` · `bob` · `claude-code` · `cline` · `codearts-agent` · `codebuddy` · `codemaker` · `codestudio` · `codex` · `command-code` · `continue` · `cortex` · `crush` · `cursor` · `deepagents` · `devin` · `dexto` · `droid` · `eve` · `firebender` · `forgecode` · `gemini-cli` · `github-copilot` · `goose` · `grok` · `hermes-agent` · `iflow-cli` · `inference-sh` · `jazz` · `junie` · `kilo` · `kimchi` · `kimi-code-cli` · `kiro-cli` · `kode` · `lingma` · `loaf` · `mcpjam` · `minimax-code` · `mistral-vibe` · `moxby` · `mux` · `neovate` · `ona` · `openclaw` · `opencode` · `openhands` · `pi` · `pochi` · `promptscript` · `qoder` · `qoder-cn` · `qwen-code` · `reasonix` · `replit` · `roo` · `rovodev` · `tabnine-cli` · `terramind` · `tinycloud` · `trae` · `trae-cn` · `universal` · `warp` · `windsurf` · `zcode` · `zed` · `zencoder` · `zenflow`

O `universal` é o que você usa quando o seu agente não aparece acima: ele escreve a skill em `.agents/skills/stm/`, o local compartilhado que vários desses agentes leem. A lista fica no instalador, e não aqui, então ela cresce sem que este README mude. Para ver a lista atual, peça um agente que não existe e ele imprime todos:

```bash
npx skills add mdsohaib/screenshot-time-machine -a list-them-please
```

Ou simplesmente peça ao seu agente, em palavras comuns:

> Instale o screenshot-time-machine, rode o `stm` no meu app e me mostre como as páginas estão.

Depois adicione uma linha ao arquivo que o seu agente lê a cada pedido, para que ele confira o próprio trabalho sem precisar ser lembrado:

```
After changing anything a user can see, run `stm --json` (or `npx -y screenshot-time-machine@latest --json` if `stm` is not installed) and view the `fold` image of every entry in `changed` and `new` before saying you're done. On the very first snapshot both lists are empty, so view the fold images of the pages you edited instead. Never claim a UI change is verified without viewing a screenshot.
```

Onde essa linha vai, por agente:

| Agente | Arquivo |
|---|---|
| Claude Code | `CLAUDE.md` |
| Codex, Antigravity, OpenCode | `AGENTS.md` |
| Gemini CLI | `GEMINI.md` |
| Cursor | `.cursor/rules/stm.mdc`, começando com `---`, depois `alwaysApply: true`, depois `---` |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Windsurf | `.windsurf/rules/stm.md` |
| Cline | `.clinerules/stm.md` |

<details>
<summary><b>Claude Code: instalação por plugin, e como o ciclo funciona na prática</b></summary>

As skills são o caminho simples. Se você prefere plugins, rode isto dentro do Claude Code:

```
/plugin marketplace add mdsohaib/screenshot-time-machine
/plugin install stm@stm
```

Sem chave SSH no GitHub? Use a forma com URL: `/plugin marketplace add https://github.com/mdsohaib/screenshot-time-machine.git`

O Claude Code abre screenshots com a ferramenta Read, e o `stm --json` entrega a ele os caminhos absolutos. O ciclo é: editar, `stm --json`, ler as imagens `fold`, corrigir, repetir. Peça a ele para "conferir a UI" e ele vai buscar a skill por conta própria.
</details>

<details>
<summary><b>Codex</b></summary>

Coloque a linha de memória no `AGENTS.md`. O Codex abre imagens com `view_image`, então se ele hesitar, diga "veja a imagem fold de cada página que você tocou".
</details>

<details>
<summary><b>Cursor</b></summary>

Coloque a linha de memória em uma regra dentro de `.cursor/rules/`. O agente roda `stm --json` no terminal dele e abre os caminhos dos PNGs que voltam. O navegador embutido do Cursor mostra uma página por vez; o `stm` entrega todas de uma vez.
</details>

<details>
<summary><b>Qualquer agente, sem suporte a skills</b></summary>

O `stm skill` imprime o texto da skill. Cole no arquivo de instruções que o seu agente lê. Isso funciona sem instalar nada:

```bash
npx screenshot-time-machine@latest skill
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

Um documento JSON no stdout, no máximo duas linhas no stderr, impressas mesmo quando algumas páginas falham. O download único do navegador é a exceção: o instalador dele também escreve no stderr. O `code` espelha o código de saída.

Uma execução que não consegue nem começar imprime um objeto bem menor: `{"code": 1, "error": "no_server" | "no_browser", "message": "...", "fix": "..."}`. Argumentos inválidos imprimem `{"error": "bad_args", "message": "...", "fix": "..."}`, onde `fix` é `Run stm --help` para uma flag desconhecida e um exemplo pronto para uma `--url` malformada. Verifique `error` antes de ler `changed`. O `truncated` conta as entradas deixadas de fora da lista (o limite é 25; o manifesto tem todas). A saída carrega apenas caminhos e números, nunca texto retirado das suas páginas.

**Sobre tokens.** Cada página é capturada em toda execução, mas o agente só abre aquelas que você indicar, então uma execução tranquila custa quase nada para ler. O resumo tem por volta de 200 tokens, mais cerca de 90 por página listada. Ver uma página custa uma única imagem de 1440x900. Screenshots de página inteira muito altos são reduzidos pelos modelos de visão até o texto ficar ilegível, e é exatamente por isso que cada página também ganha uma imagem `fold`, e por isso a skill diz ao agente para abrir essa primeiro.

## Um histórico visual no disco

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

Cada execução é uma pasta nova, batizada com o nome do app e o minuto em que rodou. Cada arquivo dentro dela carrega o mesmo carimbo de tempo, então um screenshot arrastado para fora da pasta continua dizendo o que é e quando aconteceu. Duas execuções no mesmo minuto ganham `-2`, `-3` no carimbo de tempo. Páginas com mais de 16.384 px de altura são cortadas nessa altura, o limite do Chromium, e marcadas como `truncated`.

Ordene as pastas por data e você está olhando para a linha do tempo do seu produto. Escolha uma página, percorra o arquivo dela em cada pasta e você está vendo a página melhorar. É PNG comum do começo ao fim, então esse histórico sobrevive à ferramenta que o criou: sem banco de dados, sem formato proprietário, nada para exportar. Desinstalar não deixa nada para trás, além da sua pasta `screenshots/` e, se você tinha um `.gitignore`, uma linha nele.

## Comandos

| Comando | O que faz |
|---|---|
| `stm` | Faz o snapshot de cada página do app que você tem rodando em localhost |
| `stm /pricing /about` | Faz o snapshot só dessas páginas, em segundos. Este é o ciclo de editar e conferir |
| `stm --url https://your-site.com` | Faz o snapshot de qualquer site por URL, local ou no ar. Um caminho começa a varredura ali |
| `stm --mobile` | Captura também uma visão de celular de 390x844 (arquivos `@mobile`) |
| `stm --max 100` | Para de descobrir páginas depois desta quantidade (padrão 100) |
| `stm --out screenshots` | Onde os snapshots vão parar (padrão `screenshots`) |
| `stm --json` | Resumo legível por máquina no stdout, para agentes |
| `stm list` | Snapshots anteriores: pasta, contagem de páginas, alteradas, falhas |
| `stm open` | Abre a pasta do snapshot mais recente |
| `stm skill` | Imprime a skill do agente |

Códigos de saída: `0` tudo capturado, `1` nada capturado (sem app, sem navegador, argumentos inválidos), `2` terminou com algumas páginas com falha ou a execução interrompida. Uma página com falha nunca interrompe a execução.

### Algumas coisas que vale a pena experimentar

```bash
stm --mobile                     # desktop and phone views of every page, same run
stm /checkout --mobile           # the one flow you just touched, both sizes, in seconds
stm --url https://staging.example.com   # any site you are allowed to capture, not just localhost
stm list                         # every snapshot you have ever taken, oldest to newest
stm open                         # jump straight into the latest folder
```

## Como funciona

<p align="center">
  <img src="https://raw.githubusercontent.com/mdsohaib/screenshot-time-machine/main/docs/assets/how-it-works.svg" alt="detectar, descobrir, capturar, comparar, relatar" width="820">
</p>

1. **Detectar.** Testa as portas de localhost mais comuns e escolhe o app que responder, ou usa `--url`.
2. **Descobrir.** Lê o `sitemap.xml`, se houver um, e depois segue os links `<a href>` de página em página, sem sair da mesma origem.
3. **Capturar.** Carrega cada página, rola até o conteúdo lazy chegar, deixa tudo parado, e então salva um PNG de página inteira mais uma imagem `fold` da primeira tela.
4. **Arquivar.** Escreve tudo em uma pasta batizada com o nome do app e o minuto, com o manifesto atualizado depois de cada página.
5. **Relatar.** Imprime um resumo de uma linha, incluindo quais páginas saíram diferentes da execução anterior.

### Por que os screenshots são estáveis

Uma ferramenta de screenshot vale o quanto vale a consistência dela: capture a mesma página duas vezes e você deveria obter a mesma imagem. Isso dá trabalho de verdade, e é onde mora a maior parte deste código.

- As páginas são roladas até o fim antes da captura, para que imagens e seções lazy carreguem, e depois roladas de volta ao topo. Sites com rolagem suave são tratados.
- As fontes web são aguardadas, então nada é capturado no meio da troca a partir da fonte de fallback.
- As animações são congeladas no estado final, então os fade-ins aparecem completos e os spinners ficam parados.
- A device pixel ratio é fixada em 1 e a viewport em 1440x900, então um screenshot é o mesmo no seu notebook, no seu desktop e no CI.
- Barras de ferramentas de desenvolvimento (Astro, Nuxt, o selo do Next.js) são escondidas. Overlays de **erro** de desenvolvimento nunca são: a página é capturada como está e sinalizada com um aviso, porque uma página quebrada é exatamente o que você quer ver.
- Conexões de longa duração (sockets de HMR, streams de eventos) nunca travam uma captura. Cada página tem um limite de 30 segundos e uma nova tentativa, depois é registrada e a execução segue.
- O manifesto é escrito depois de cada página, então uma execução interrompida ainda deixa uma pasta que o `stm list` consegue ler.
- Links para `/logout`, `/delete` e afins nunca são seguidos. Arquivos, `/api/`, outras origens e a sua própria pasta `screenshots/` também não.

O resultado: duas execuções na mesma máquina produzem PNGs byte a byte idênticos de uma página cujo conteúdo não mudou.

<details>
<summary><b>Como a linha de "alteradas" é calculada</b></summary>

Cada página é capturada em toda execução. O que é comparado não são as imagens, são as impressões digitais delas:

1. Depois de salvar o PNG de uma página, o `stm` calcula um **hash sha256** dos bytes daquele arquivo.
2. O hash vai para o manifesto daquela execução, ao lado do caminho da página.
3. Na execução seguinte, o `stm` procura a mesma página no **manifesto da execução anterior** e compara os dois hashes.
4. Um hash diferente significa que o screenshot saiu diferente. O mesmo hash significa que não saiu. Nenhuma entrada anterior significa que a página é nova.

Screenshots antigos nunca são reabertos, só o manifesto pequeno é lido, então comparar cem páginas é instantâneo. Você recebe nomes de páginas e caminhos de arquivos, que é exatamente o que você precisa para abrir os screenshots certos primeiro, ou para entregar os certos ao seu agente. O diff visual por região é o `stm diff`, que está no roadmap.

Uma página que mostra um relógio, um tempo relativo como "3 minutos atrás", uma imagem de destaque que gira ou uma animação em canvas realmente fica diferente a cada execução, e vai ser listada a cada execução.
</details>

## Como ele se compara

| | stm | Verificação automática do Claude Code Desktop | Playwright MCP, agent-browser, DevTools MCP | Percy, Chromatic |
|---|---|---|---|---|
| Cada página em um comando | sim | uma página por vez | uma página por chamada de ferramenta | sim, no CI |
| Histórico navegável em disco | sim | não | não | na nuvem deles |
| Lista quais páginas saíram diferentes | sim | não | não | sim, na nuvem |
| Funciona no terminal, no Cursor, no Codex | sim | só no Desktop | sim | só no CI |
| Roda inteiramente na sua máquina | sim | sim | sim | não |
| Gratuito | sim | sim | sim | pago acima de um plano gratuito |

Essas ferramentas se complementam, não competem. Use uma ferramenta de navegador quando o seu agente precisar clicar e interagir. Use o `stm` quando você ou o seu agente precisar ver tudo, de uma vez, e guardar isso.

## Privacidade

**Roda 100% localmente.** O `stm` conversa apenas com a URL do seu app e, uma única vez, com o CDN de navegadores do Playwright, se você não tiver Chrome nem Edge. Seus screenshots nunca saem da sua máquina. Sem contas, sem chaves de API, sem telemetria. As páginas que você captura carregam os recursos delas exatamente como fariam no seu navegador. O modelo de ameaças completo está em [SECURITY.md](../../SECURITY.md).

## Perguntas frequentes

<details>
<summary><b>É realmente gratuito?</b></summary>
Sim. Licença MIT, open source, sem plano pago, sem serviço hospedado, nada para se cadastrar. Instale, use para sempre, faça um fork se quiser.
</details>

<details>
<summary><b>Funciona com Next.js, Vite, Astro, SvelteKit, Rails, Django, sites estáticos?</b></summary>
Sim. Qualquer coisa que sirva HTML, esteja na sua máquina ou na internet. As portas de localhost mais comuns de todos esses são testadas automaticamente; use <code>--url</code> para qualquer outra coisa.
</details>

<details>
<summary><b>Quanto tempo leva uma execução?</b></summary>
As páginas são capturadas algumas de cada vez, e a maioria dos sites pequenos termina em bem menos de um minuto. Um site grande em um servidor de desenvolvimento frio demora mais, porque a primeira visita a cada página é o seu framework compilando a página. Informe as páginas que interessam (<code>stm /pricing /about</code>) quando você quiser resultado instantâneo.
</details>

<details>
<summary><b>Ele só encontrou a minha home.</b></summary>
As páginas são descobertas a partir do seu sitemap e dos links <code>&lt;a href&gt;</code>. Apps que navegam com botões ou rotas com hash (<code>/#/about</code>) não têm links para seguir. Informe as páginas: <code>stm /about /pricing</code>. Os agentes são orientados a passar as páginas que tocaram.
</details>

<details>
<summary><b>A maioria dos meus screenshots mostra a tela de login.</b></summary>
Seu app redireciona para a tela de entrada. O <code>stm</code> ainda não consegue fazer login, e ele avisa quando isso acontece. Capturas com sessão autenticada estão no roadmap.
</details>

<details>
<summary><b>Depois de um tempo, todas as páginas aparecem como diferentes.</b></summary>
Causas comuns: seu navegador foi atualizado, o que muda um pouco a renderização (o <code>stm</code> registra a versão do navegador e avisa você), ou as suas páginas mostram algo que se move sozinho, como um relógio, um "3 minutos atrás", uma imagem de destaque aleatória, uma animação em canvas, ou um banner de cookies que só aparece na primeira visita. Os screenshots continuam corretos, então abra os que interessam a você.
</details>

<details>
<summary><b>Ele pode rodar automaticamente, observando meus arquivos?</b></summary>
Ele roda quando você mandar, como o <code>git commit</code>: você, ou o seu agente, decide quando um momento vale a pena guardar. Para captura automática, coloque a instrução de uma linha no arquivo de memória do seu agente e deixe o agente rodar depois de cada mudança de UI.
</details>

<details>
<summary><b>Dá para transformar meu histórico em um timelapse?</b></summary>
Um <code>stm timelapse</code> nativo está no roadmap. Hoje, com o ffmpeg:
<pre><code>ffmpeg -framerate 1 -pattern_type glob -i 'screenshots/*/pricing_*.png' \
  -vf "scale=720:-1,split[a][b];[a]palettegen[p];[b][p]paletteuse" pricing.gif</code></pre>
</details>

<details>
<summary><b>Eu uso Lovable, Bolt ou v0. Dá para usar isso?</b></summary>
Sim, de duas formas. Aponte o <code>stm</code> para a URL que eles publicam para você: <code>stm --url https://your-project.lovable.app</code>. Ou exporte o projeto, rode localmente, e o <code>stm</code> o encontra sozinho. Qualquer coisa feita com Claude Code, Cursor, Codex, Windsurf ou Copilot na sua própria máquina funciona de imediato.
</details>

<details>
<summary><b>Por que não escrever só um script de Playwright?</b></summary>
Você poderia. O <code>stm</code> é esse script, mais a descoberta de páginas, um layout de pastas estável, capturas estáveis e repetíveis, saída amigável para agentes, tratamento de overlays de desenvolvimento, e todos os casos de borda, com manutenção. É também um comando que o seu agente já conhece.
</details>

<details>
<summary><b>O Linux diz que faltam bibliotecas para o navegador.</b></summary>
Rode o comando <code>install-deps</code> que ele imprime, uma vez. WSL e Codespaces também precisam disso.
</details>

<details>
<summary><b>Onde fica o navegador baixado?</b></summary>
No cache do Playwright: <code>~/Library/Caches/ms-playwright</code> no macOS, <code>~/.cache/ms-playwright</code> no Linux, <code>%LOCALAPPDATA%\ms-playwright</code> no Windows. Apague quando quiser; o <code>stm</code> baixa de novo quando precisar.
</details>

<details>
<summary><b>Posso usar no meu site em produção ou em staging?</b></summary>
Sim: <code>stm --url https://staging.example.com</code>. Ele lê o <code>sitemap.xml</code> daquele site e segue os links dele exatamente como faria localmente, permanece naquela única origem, e nunca segue links de aparência destrutiva como <code>/logout</code> ou <code>/delete</code>. Por favor, capture apenas sites que você tem permissão de capturar.
</details>

## Roadmap

Pequeno de propósito. Vote abrindo uma issue.

- `stm diff`: mostrar exatamente quais regiões de uma página mudaram, e entregar aos agentes recortes em vez de páginas inteiras
- `stm timelapse`: transformar o histórico de uma página em um GIF ou MP4, com legendas dos commits do git
- `stm backfill`: percorrer seu histórico do git e construir o histórico visual que você nunca capturou
- Capturas com sessão autenticada (`--storage-state`)
- Uma galeria local com uma linha do tempo deslizante

Fora dos planos: sincronização na nuvem, contas, telemetria, modo de observação de arquivos, arquivo de configuração.

## Como contribuir

Relatos de bug com uma execução real anexada são a coisa mais útil neste momento. Comece pelo [CONTRIBUTING.md](../../CONTRIBUTING.md), depois pelo [AGENTS.md](../../AGENTS.md) para o mapa dos módulos e as regras. Cada decisão e o motivo dela estão no [DECISIONS.md](../../DECISIONS.md).

## Sobre

Feito por **Mohammed Sohaib Uddin**, porque um software que muda todo dia merece um registro de como ele era.

<p align="left">
  <a href="https://www.linkedin.com/in/mohammedsohaibuddin/"><img src="https://img.shields.io/badge/Connect%20on%20LinkedIn-FF8C1A?style=for-the-badge&logo=linkedin&logoColor=white" alt="Conecte-se no LinkedIn"></a>
  <a href="https://github.com/mdsohaib"><img src="https://img.shields.io/badge/Follow%20on%20GitHub-0A0E14?style=for-the-badge&logo=github&logoColor=white" alt="Siga no GitHub"></a>
</p>

Se o `stm` mostrar a você algo que você ficou feliz por ter visto, uma estrela não custa nada e ajuda outras pessoas a encontrar o projeto.

MIT © Mohammed Sohaib Uddin
