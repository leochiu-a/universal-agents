# Rule: API Guideline

This rule explains how to reference and honor shared API design principles in an agent conversation. It keeps long-lived guidance in text so the user does not need to paste the same instructions every time.

## Scope

- Designing or reviewing REST APIs.
- Writing samples, tests, or docs that interact with REST endpoints.

## Guidance

1. **Consistent naming**: endpoints represent resources with plural nouns; fields stick to either snake_case or camelCase according to the project convention.
2. **Resource modeling**: use hierarchical paths to represent parent/child relationships (`/projects/{id}/tasks`), and reserve query parameters for filtering, sorting, or pagination.
3. **Correct HTTP semantics**: match verbs and status codes (e.g., `GET` read-only, `POST` create resource, `PATCH` partial update, `DELETE` remove). Successful responses should return the appropriate 200/201/204 status.
4. **Versioning**: expose API versions via path segments or headers (`/v1/`), include compatibility notes, and avoid breaking changes without a new version.
5. **Error format**: respond with `{ code, message, details? }` so clients can parse errors consistently.
6. **Security**: every sensitive action requires authentication and authorization; error messages must not leak implementation details.

## Usage

- If the user wants an exception, they must state it explicitly; otherwise these rules are mandatory.
