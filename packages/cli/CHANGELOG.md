# @universal-agents/cli

## 0.2.0

### Minor Changes

- 5652693: - Introduce interactive `ua create skill` / `ua create rule` commands (powered by `@inquirer/prompts`) to scaffold empty `.agents` stubs without manual path wrangling.
- d692f3f: - Add a new `ua` alias so the CLI matches the shorter command documented for Universal Agents.
  - Rebuild the CLI around `commander` with explicit `init` and help commands to provide clearer ergonomics.
  - Move the `init` scaffolding logic into its own module so the command uses the repo-level `AGENTS.md` template as the single source of truth.
