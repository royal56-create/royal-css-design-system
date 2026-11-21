# CSS Complete Guide

## Syntax and cascade
A CSS rule contains a selector and declarations. The cascade considers origin, importance, cascade layers, specificity, scoping proximity and source order. Prefer simple selectors; avoid routine use of `!important`.

## Selectors
Learn type, class, ID, attribute, combinator, pseudo-class and pseudo-element selectors. Prefer reusable classes.

## Box model and sizing
Understand content, padding, border and margin. This project uses `box-sizing: border-box`. Prefer flexible constraints such as `min()`, `max()`, `clamp()` and Grid tracks.

## Typography and color
Use a clear type scale, readable line length, comfortable line height and sufficient contrast. Prefer system font stacks or properly licensed fonts.

## Layout
Use Flexbox for one-dimensional alignment, Grid for two-dimensional layouts and normal flow before absolute positioning.

## Responsive CSS
Start with fluid layouts and add breakpoints when content needs them. Test narrow screens, zoom and long content.

## Custom properties and themes
Define semantic design tokens on `:root` and override them at theme boundaries.

## Motion
Use transitions for state changes and keyframes for sequences. Respect `prefers-reduced-motion`.

## Accessibility and quality
Preserve focus indicators, do not communicate by color alone, label controls and test contrast. Validate in multiple browsers and real devices.
