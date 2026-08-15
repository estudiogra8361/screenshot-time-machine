// Shared shapes. Plain JS everywhere else; these only exist for @ts-check.

export type Viewport = 'desktop' | 'mobile';

export type PageStatus = 'ok' | 'failed' | 'skipped' | 'redirected';

export interface PageResult {
  path: string;
  viewport: Viewport;
  file: string | null; // relative to the snapshot folder, e.g. "pricing_2026-08-15_14-32.png"
  fold: string | null; // relative, e.g. "fold/pricing_2026-08-15_14-32.png"
  status: PageStatus;
  httpStatus: number | null;
  finalUrl?: string; // only when the browser ended up somewhere else
  ms: number;
  width: number | null;
  height: number | null;
  truncated: boolean;
  sha256: string | null;
  warnings: string[];
  changed: boolean | null; // null when there is nothing to compare against
  error: string | null;
}

export interface GitInfo {
  commit: string;
  branch: string;
  dirty: boolean;
}

export interface Manifest {
  tool: 'screenshot-time-machine';
  version: string;
  url: string;
  startedAt: string;
  finishedAt: string | null;
  viewports: Viewport[];
  browser: { name: string; version: string } | null;
  node: string;
  platform: string;
  git: GitInfo | null;
  previous: string | null; // folder name of the snapshot we compared against
  routes: string[] | null; // routes passed on the command line, null for a full crawl
  pages: PageResult[];
}

export interface RunOptions {
  cwd?: string;
  url?: string;
  routes?: string[];
  mobile?: boolean;
  max?: number;
  out?: string;
  timeoutMs?: number; // per page, tests lower it
  now?: Date;
  quiet?: boolean; // no progress lines on stderr
  log?: (line: string) => void;
  signal?: AbortSignal;
}

export interface ChangedEntry {
  path: string;
  file: string; // absolute
  fold: string; // absolute
  height: number | null;
}

export interface RunResult {
  code: 0 | 1 | 2;
  error?: 'no_server' | 'no_browser' | 'bad_args';
  message?: string;
  fix?: string;
  url?: string;
  dir?: string; // absolute snapshot folder
  previous?: string | null;
  ok?: number;
  failed?: number;
  saved?: number; // desktop pages that have a screenshot file
  total?: number;
  changed?: ChangedEntry[];
  new?: ChangedEntry[];
  removed?: string[];
  truncated?: number;
  failures?: { path: string; error: string }[]; // every page without a normal screenshot
  warnings?: { path: string; warnings: string[] }[];
  interrupted?: boolean; // Ctrl+C or SIGTERM cut the run short
  browserChanged?: string | null;
  manifest?: string; // absolute path
  hint?: string;
  first?: boolean; // first snapshot ever in this project
  gitignoreAdded?: boolean;
  others?: string[]; // other localhost apps that also answered
  onlyHome?: boolean;
  authWall?: string | null; // the path most pages landed on, if any
  browserNotice?: string | null;
}
