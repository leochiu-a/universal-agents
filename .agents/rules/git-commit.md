# Rule: Git Commit

Use this rule whenever you draft, review, or request Git commit messages so that every change log is consistent and informative.

## Goals

- Communicate _what_ changed and _why_ in one line when possible.
- Keep histories easy to scan, filter, and revert.

## Message format

```
<type>(optional scope): <short imperative summary>

<body explaining motivation / impact>

Footer (BREAKING CHANGE, issue links, etc.)
```

- **Type**: choose from `feat`, `fix`, `docs`, `chore`, `refactor`, `test`, `perf`, `build`, `ci`, or `revert`. Use lowercase.
- **Scope**: optional; indicate the subsystem or package (e.g., `api`, `frontend`, `deps`). Omit parentheses if there is no scope.
- **Summary**: use an imperative verb, ≤ 72 characters, avoid trailing punctuation.
- **Body** (optional): wrap lines at 72 characters, describe motivation, contrast with previous behavior, and note side effects or risks.
- **Footer** (optional): include `BREAKING CHANGE:` statements or references such as `Refs #123`.

## Constraints

1. One logical change per commit. Split unrelated work into separate commits.
2. Do not include generated files or dependency bumps unless the task requires them.
3. Rebase or clean up history before publishing if multiple fixups are created.
4. If tests or linting are required, mention their status in the body (e.g., “Tests: added unit coverage for X”).

## Usage

- When asked to “write a commit message” or “summarize changes for Git,” load this rule.
- Reject or amend any proposed commit text that violates the format or constraints above.
