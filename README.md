# Royal CSS Design System

A comprehensive CSS learning and design system featuring responsive layouts, modern UI components, animations, themes, and reusable styling examples.

## Start here
Open [index.html](index.html) to explore the learning hub. No package installation or build step is required.

## What's included
- **Foundations:** selectors, cascade, specificity, box model, units and typography.
- **Layout:** Flexbox, CSS Grid and responsive layouts.
- **Design system:** design tokens, CSS custom properties, reusable components and themes.
- **Visual effects:** gradients, shadows, transitions, transforms and container queries.
- **Accessibility:** keyboard focus, contrast, reduced motion and semantic patterns.
- **Documentation:** complete guide, getting started, responsive design and browser support.
- **Quality checks:** dependency-free Node.js project integrity test and GitHub Actions workflow.

## Quick start
1. Clone or download this repository.
2. Open `index.html` in a modern browser.
3. To use a local server, run `python -m http.server 8000` from the project folder.
4. Visit `http://localhost:8000`.

## Project map
- `assets/css/` — shared CSS architecture and design tokens.
- `examples/` — standalone topic demonstrations.
- `docs/` — learning and reference documentation.
- `tests/` — automated integrity checks.

## Run checks
Requires Node.js 20 or newer:

```bash
node tests/check-project.mjs
```

GitHub Actions runs the same check on pushes and pull requests to `main`.

## Learning order
Start with [Getting Started](docs/GETTING_STARTED.md), then follow the [Complete CSS Guide](docs/CSS_COMPLETE_GUIDE.md). Use the [Component Catalog](docs/COMPONENT_CATALOG.md) to find examples.

## License
No license has been declared yet. Until a license is added, standard copyright applies; ask the repository owner before reusing or redistributing the project.
