# universal-agents

## 1.0.0

### Major Changes

- cccf875: BREAKING CHANGE: Replace global installation with npx execution

  - Remove support for global installation (`pnpm install --global universal-agents`)
  - All commands now require `npx universal-agents` prefix instead of `ua` alias
  - Users must uninstall any existing global installation and use npx instead

  **Migration guide:**

  ```bash
  # Uninstall global package (if installed)
  pnpm uninstall --global universal-agents

  # Use npx instead
  npx universal-agents init
  npx universal-agents create skill
  npx universal-agents create rule
  ```

  **Additional improvements:**

  - Add `AGENTS.md` control manifest to CLI package files
  - Implement postbuild script to bundle AGENTS.md with the distributable package
  - Enhance template resolution in `init.ts` to support both published package and development scenarios
  - Update all documentation to reflect npx usage pattern

## 0.2.0

### Minor Changes

- 5652693: - Introduce interactive `ua create skill` / `ua create rule` commands (powered by `@inquirer/prompts`) to scaffold empty `.agents` stubs without manual path wrangling.
- d692f3f: - Add a new `ua` alias so the CLI matches the shorter command documented for Universal Agents.
  - Rebuild the CLI around `commander` with explicit `init` and help commands to provide clearer ergonomics.
  - Move the `init` scaffolding logic into its own module so the command uses the repo-level `AGENTS.md` template as the single source of truth.
