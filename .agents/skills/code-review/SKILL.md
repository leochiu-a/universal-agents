# Skill: Code Review

## Purpose
Provide concrete and actionable code-review feedback to surface bugs, risks, and testing gaps.

## Trigger conditions
- Tasks that explicitly request a code review or quality audit.
- The user supplies a diff, PR link, or file content that needs systematic feedback.

## Capability boundaries
- Only comment on the supplied code and context.
- Cannot run tests or deploy artifacts; can only suggest verification steps.

## Execution steps
1. Parse the user request and project background to scope the review.
2. Inspect the code for correctness, maintainability, performance, and security concerns.
3. Rank findings by severity and include sample fixes or action items when possible.
4. Highlight missing tests or unresolved risks so the user can validate them later.
5. Conclude with a concise, actionable summary.

## Output format
- **Findings**: concrete issues/risks with affected files and lines when available.
- **Questions**: clarifications needed from the user.
- **Next steps**: recommended follow-up actions or tests.
