# CSS Testing Checklist

## Layout
- [ ] Test narrow, medium and wide viewport sizes.
- [ ] Check horizontal overflow, sticky elements and long content.
- [ ] Test browser zoom and enlarged text.
- [ ] Check both left-to-right and right-to-left content where relevant.

## Interaction
- [ ] Navigate with keyboard only.
- [ ] Verify hover, focus-visible, active, disabled and invalid states.
- [ ] Ensure no essential content is hover-only.
- [ ] Check reduced-motion preferences.

## Visual quality
- [ ] Verify contrast for text, controls, borders and focus indicators.
- [ ] Check dark and light themes.
- [ ] Test image aspect ratios and loading placeholders.
- [ ] Inspect print preview for document-like pages.

## Compatibility
- [ ] Test the browsers and devices used by the audience.
- [ ] Check feature support before relying on newer CSS.
- [ ] Provide a sensible fallback for nonessential enhancements.
- [ ] Re-run `node tests/check-project.mjs` after changing examples.
