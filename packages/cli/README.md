# @universal-agents/cli

A lightweight CLI that bootstraps Universal Agents projects. The `init` command copies the repository's `AGENTS.md` manifest into any target directory so new projects inherit the same control manifest, while the `create` commands scaffold empty rule/skill stubs under `.agents/`.

## Usage

Install dependencies from the monorepo root and run the CLI through the workspace:

```bash
pnpm install
pnpm --filter @universal-agents/cli run build
cd my-project && pnpm run cli -- init
```

Or execute the binary directly from the package once it has been built:

```bash
pnpm --filter @universal-agents/cli exec universal-agents init
```

### Commands

- `init`: copies the root `AGENTS.md` template into the current working directory.
- `create skill`: asks for a skill name, slugifies it, and creates `.agents/skills/<slug>/SKILL.md`.
- `create rule`: asks for a rule name and creates `.agents/rules/<slug>.md`.

Both `create` subcommands rely on [`@inquirer/prompts`](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/prompts) so contributors can scaffold metadata without remembering the exact directory layout. Cancel at any time with `ctrl+c`.

## Development

The CLI source lives in `src/` and is bundled with [tsdown](https://github.com/egoist/tsdown). Use the watch command for a quick edit/test loop:

```bash
pnpm --filter @universal-agents/cli run dev
```

Extend it by adding new commands inside `src/index.ts` (or additional modules) and regenerate the output via `pnpm --filter @universal-agents/cli run build`. The generated `dist/index.mjs` now includes the `#!/usr/bin/env node` shebang, so it doubles as the published binary entry point.
