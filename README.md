# Royal CSS Design System

> **Educational / demo use only:** Review code before running it. Use only on files, devices, repositories, and networks you own or are explicitly authorized to access. Use at your own risk; no warranty is provided to the maximum extent permitted by applicable law. This notice does not waive non-waivable legal rights or obligations.\n
A comprehensive CSS learning and design system featuring responsive layouts, modern UI components, animations, themes, advanced CSS patterns and reusable styling examples.

## Start here
Open [index.html](index.html) to explore the learning hub. No package installation or build step is required.

## What's included
- **Foundations:** selectors, cascade, specificity, box model, units, colors and typography.
- **Layout:** Flexbox, CSS Grid, positioning, responsive layouts and scroll snapping.
- **Design system:** design tokens, CSS custom properties, reusable components and themes.
- **Components:** buttons, cards, forms, responsive navigation and interactive states.
- **Visual effects:** gradients, shadows, image sizing, transitions, transforms and keyframes.
- **Modern CSS:** nesting, logical properties, cascade layers, container queries and fluid CSS functions.
- **Accessibility:** keyboard focus, contrast, reduced motion and semantic patterns.
- **Documentation:** complete guide, architecture, feature reference, browser support and testing checklists.
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
Start with [Getting Started](docs/GETTING_STARTED.md), follow the [Complete CSS Guide](docs/CSS_COMPLETE_GUIDE.md), then explore the [Component Catalog](docs/COMPONENT_CATALOG.md) and [Modern CSS Features Reference](docs/CSS_FEATURES_REFERENCE.md). Before releasing changes, use the [CSS Testing Checklist](docs/CSS_TESTING_CHECKLIST.md).

## License
No license has been declared yet. Until a license is added, standard copyright applies; ask the repository owner before reusing or redistributing the project.
