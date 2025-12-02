---
"universal-agents": minor
---

BREAKING CHANGE: Replace global installation with npx execution

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
