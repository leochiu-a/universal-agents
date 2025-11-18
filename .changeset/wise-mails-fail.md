---
"@universal-agents/cli": minor
---

- Add a new `ua` alias so the CLI matches the shorter command documented for Universal Agents.
- Rebuild the CLI around `commander` with explicit `init` and help commands to provide clearer ergonomics.
- Move the `init` scaffolding logic into its own module so the command uses the repo-level `AGENTS.md` template as the single source of truth.
