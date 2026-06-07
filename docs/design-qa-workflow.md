# Design QA workflow

## Goal

Claude Code must not only generate code. It must visually verify the result and iterate until the website looks professional on real breakpoints.

## Required visual QA

Check at least:

- desktop 1440px
- tablet 768px
- mobile 390px

## What to inspect

- hero hierarchy
- CTA visibility
- spacing and section rhythm
- mobile navigation
- card alignment
- text readability
- image cropping
- form usability
- no horizontal overflow
- no broken responsive states
- no console errors

## Preferred tools

- Playwright MCP for browser screenshots and interaction testing.
- Chrome DevTools MCP for console, network and performance debugging.
- Lighthouse for launch-level performance, SEO, accessibility and best practices.
- axe-core or equivalent for accessibility checks.

## Definition of done

UI work is not done when the code compiles.
UI work is done when the rendered result has been checked visually and obvious layout, spacing, responsive and accessibility issues are fixed.
