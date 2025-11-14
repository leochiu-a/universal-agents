# Universal Agents

This repository hosts the canonical rules and skills every Universal Agent must follow so that behavior stays consistent across runtimes. By mirroring the contents of `.agents/` and `AGENTS.md`, any agent can reboot into a known-good configuration and collaborate with peers safely.

## Reference layout

| Path             | Purpose                                                                                                           |
| ---------------- | ----------------------------------------------------------------------------------------------------------------- |
| `AGENTS.md`      | Control manifest describing the execution protocol, how to load skills/rules, and the required response contract. |
| `.agents/skills` | On-demand skills (currently `code-review`) that declare trigger conditions plus output format.                    |
| `.agents/rules`  | Long-lived guidelines for APIs, React components, and Git commits.                                                |

## Execution protocol

1. **Always read `AGENTS.md` first** to understand which skills or rules apply before starting a task.
2. **Load skills on demand**: read `skills/*/SKILL.md` only when its trigger matches the task, then follow the prescribed workflow and output format.
3. **Enforce rules whenever relevant**: if a task touches REST APIs, React components, or Git commits, preload the corresponding `.agents/rules/*.md` file and ensure all advice respects it.
4. **Declare context in responses**: every reply must list which skills and rules were activated so users know which guardrails were applied.

## Extending the rulebook

1. **Add a skill**: create `.agents/skills/<skill-name>/SKILL.md` with trigger conditions, step-by-step execution, and output format.
2. **Add a rule**: place domain guidance inside `.agents/rules/<rule>.md`, clearly outlining scope and constraints so future tasks can preload it.
3. **Validate changes**: pair new artifacts with sample conversations or automated checks to prove agents load them correctly.

## Visual references

| Asset            | Preview                                     |
| ---------------- | ------------------------------------------- |
| Codex diagram    | ![Codex diagram](public/codex.png)          |
| Claude code view | ![Claude code view](public/claude-code.png) |

Following this structure ensures every Universal Agent bootstraps with the same knowledge base, yielding predictable, rule-compliant collaboration.
