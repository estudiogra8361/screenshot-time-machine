# Decisions

One line per irreversible or deliberately-refused choice. Add a row every time you say no. Not an ADR tree, a table.

| Date | Decision | Why | Revisit when |
|---|---|---|---|
| 2026-08-15 | Package `screenshot-time-machine`, bins `stm` **and** `screenshot-time-machine`. Docs always say `npx screenshot-time-machine@latest`, never `npx stm`. No alias packages. | npm `stm` is an unrelated 2014 package with no bin, so `npx stm` downloads it and fails; npm does not transfer names on request. | never |
| 2026-08-15 | Node `>=22`. | Node 20 reached end-of-life 2026-04-30; `util.styleText`/`parseArgs`/`node:test` are stable and TTY/NO_COLOR-aware on 22+. | Node 22 EOL (2027-04) |
| 2026-08-15 | Plain ESM JavaScript + JSDoc + strict `checkJs`; no build step. | Node refuses to type-strip `.ts` inside `node_modules`, so a published TS CLI needs a build; readable source is the point. | never |
| 2026-08-15 | Exactly one runtime dependency, `playwright-core`, **exact-pinned**; the browser build is recorded in every manifest. | Each Playwright release pins one Chromium build, and that build is the "changed" baseline. A caret would silently flip every page to "changed" on `npx` users. | never |
| 2026-08-15 | "changed" = sha256 of the PNG vs the previous snapshot; documented as a hint, not a diff. | Zero-cost, deterministic on the same machine + browser build. Dynamic content and browser updates can flip it; `browserChanged` explains the latter. | `stm diff` ships (perceptual/regional diff) |
| 2026-08-15 | Exit codes: 0 all ok · 1 fatal · 2 completed with page failures. One bad page never aborts a run. | Agents branch on exit codes; partial success with a manifest beats an aborted run. | never |
| 2026-08-15 | Output layout `screenshots/<app>_<timestamp>/`, every file inside named `<page>_<timestamp>.png` (`fold/` too, `@mobile` before the timestamp), `manifest_<timestamp>.json`; timestamp is local `YYYY-MM-DD_HH-mm` (+`-2` on same-minute reruns); slug rule fixed (lowercase, `/`→`--`, reserved names prefixed, collisions hashed). | Browsable in Finder/Explorer forever; a file dragged out of its folder still says which app and when; stable slugs make "changed" work across runs. | never (layout is a contract) |
| 2026-08-15 | Full-page PNG (archive + diff) **and** a 1440×900 fold PNG (what agents view) per page. | Vision models downscale tall images to a ~1568-px long edge; a 9000-px page becomes an illegible strip. | tiles / crops in `stm diff` |
| 2026-08-15 | No config file, no watch/daemon mode, no telemetry, no hooks or MCP server in the plugin. CLI + Skill only. | Nothing happens until you run the command; a Skill costs tokens only when used, MCP tool schemas cost tokens every turn. | users ask for MCP with a concrete reason |
| 2026-08-15 | stm never deletes files. It writes only inside `--out` and may append one line to an existing `.gitignore` (announced). | Trust. Agents run this autonomously. | never |
| 2026-08-15 | No new flag or command without an issue first; good-first-issues never add flags. | Small surface is the product; every flag is a promise. | never |
| 2026-08-15 | An interrupted run (Ctrl+C, SIGTERM) exits 2 and says so, instead of 130/143. | Agents already branch on 0/1/2; the summary and JSON carry `interrupted`, which is the useful signal. | someone needs the signal code |
| 2026-08-15 | Windows-reserved page names (`/con`, `/nul`, ...) get a `page-` prefix, not an underscore. | No file or identifier in this project starts with an underscore. | never |
| 2026-08-15 | Every path stm prints, in the summary and in `--json`, uses forward slashes on all platforms. | One output format everywhere, copy-pasteable, and JSON never needs escaped backslashes. Windows accepts forward slashes. Caught by the Windows CI job printing a mixed `screenshots\name/` path. | never |
