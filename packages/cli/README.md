# @universal-agents/cli

A lightweight CLI that bootstraps Universal Agents projects. The initial `init` command copies the repository's `AGENTS.md` manifest into any target directory so new projects inherit the same control manifest.

## Usage

Install dependencies from the monorepo root and run the CLI through the workspace:

```bash
pnpm install
pnpm --filter @universal-agents/cli run build
pnpm run cli -- init
```

Or execute the binary directly from the package once it has been built:

```bash
pnpm --filter @universal-agents/cli exec universal-agents init ./my-project
```

### Commands

- `init [path]`: copies the root `AGENTS.md` template into `[path]` (defaults to the current directory).

#### Options

- `-d, --dir <path>`: explicit destination directory.
- `-f, --force`: overwrite an existing `AGENTS.md`.

## Development

The CLI source lives in `src/` and is bundled with [tsdown](https://github.com/egoist/tsdown). Use the watch command for a quick edit/test loop:

```bash
pnpm --filter @universal-agents/cli run dev
```

Extend it by adding new commands inside `src/index.ts` (or additional modules) and regenerate the output via `pnpm --filter @universal-agents/cli run build`. The generated `dist/index.mjs` now includes the `#!/usr/bin/env node` shebang, so it doubles as the published binary entry point.
