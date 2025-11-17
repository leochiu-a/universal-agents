# Universal Agents

This repository hosts the canonical rules and skills every Universal Agent must follow so that behavior stays consistent across runtimes. By mirroring the contents of `.agents/` and `AGENTS.md`, any agent can reboot into a known-good configuration and collaborate with peers safely.

## Reference layout

| Path             | Purpose                                                                                                           |
| ---------------- | ----------------------------------------------------------------------------------------------------------------- |
| `AGENTS.md`      | Control manifest describing the execution protocol, how to load skills/rules, and the required response contract. |
| `.agents/skills` | Like functions — they let the AI agent execute specific actions.                                                  |
| `.agents/rules`  | Like conventions — they inform the AI agent about the guidelines of the codebase.                                 |

## Execution protocol

1. **Always read `AGENTS.md` first** to understand which skills or rules apply before starting a task.
2. **Load skills on demand**: read `skills/*/SKILL.md` only when its trigger matches the task, then follow the prescribed workflow and output format.
3. **Enforce rules whenever relevant**: if a task touches REST APIs, React components, or Git commits, preload the corresponding `.agents/rules/*.md` file and ensure all advice respects it.
4. **Declare context in responses**: every reply must list which skills and rules were activated so users know which guardrails were applied.

## Visual references

| Asset   | Codex                              | Claude code                                 |
| ------- | ---------------------------------- | ------------------------------------------- |
| Preview | ![Codex diagram](public/codex.png) | ![Claude code view](public/claude-code.png) |

Following this structure ensures every Universal Agent bootstraps with the same knowledge base, yielding predictable, rule-compliant collaboration.
