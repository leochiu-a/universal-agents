# Rule: React Components Guideline

Apply this rule whenever you design, refactor, or review React components so that the output stays consistent and maintainable.

## Component style

1. **Single responsibility**: each component owns one interaction or layout concern; compose smaller primitives instead of building monoliths.
2. **Props typing**: define props with TypeScript interfaces or `type` aliases, provide sensible defaults via parameter/destructuring defaults (no `defaultProps`), and avoid `any`.
3. **Events and callbacks**: expose callback props with descriptive names (`onSubmit`, `onClose`) and document when they fire.
4. **Styling**: prefer styled-components; never leak global styles without justification.
5. **Testability**: push complex logic into hooks or pure utilities so the component render remains predictable and easy to unit test.

## File structure suggestion

```text
MyComponent/
├─ MyComponent.tsx
├─ MyComponent.test.tsx
└─ MyComponent.module.css
```

## Documentation requirements

- Provide Storybook stories or MDX docs for complex components.
- Include key interactions plus accessibility checklist items in the PR description.
