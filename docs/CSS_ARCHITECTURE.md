# CSS Architecture

## Principles
- Separate reset, tokens, base styles, layout, components, utilities and themes.
- Name custom properties by purpose (for example, `--color-surface`) rather than by a specific page.
- Keep component selectors local and low-specificity.
- Prefer composition and layout primitives over one-off overrides.
- Use cascade layers in larger applications to make precedence intentional.
- Avoid unnecessary global selectors and avoid using IDs for routine styling.

## Scaling a project
For a larger product, split component styles by component, document supported variants and states, and define a deprecation path for old tokens. Add visual regression and accessibility tests as the project grows.
