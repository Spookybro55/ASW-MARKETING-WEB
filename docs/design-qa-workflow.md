# Design QA workflow

> Pravidla a „co kontrolovat". Konkrétní kroky a příkazy (dev server, Playwright,
> screenshot skripty, reportování) jsou v `docs/runbooks/screenshot-qa-runbook.md`.
> Launch kontrola: `docs/runbooks/launch-qa-checklist.md`.

## Goal

Claude Code must not only generate code. It must visually verify the result and iterate until the website looks professional on real breakpoints.

## Mandatory rule

Claude must not change UI based on a textual impression only. For any significant UI
change Claude must run at least the screenshot workflow below; if the problem is
runtime / performance / browser-related, Claude must also use the **Chrome DevTools
MCP**. UI/UX quality work goes through the **`impeccable`** skill. Animations use
**Motion** (`motion` / `motion/react`) and must respect `useReducedMotion`.

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
- Chrome DevTools MCP for console, network and performance debugging. Use it for:
  - console debugging (runtime errors, warnings),
  - inspecting network requests,
  - performance profiling,
  - groundwork for a Lighthouse / performance audit,
  - reproducing runtime errors in the browser.
- Lighthouse for launch-level performance, SEO, accessibility and best practices.
- axe-core or equivalent for accessibility checks.

## Definition of done

UI work is not done when the code compiles.
UI work is done when the rendered result has been checked visually and obvious layout, spacing, responsive and accessibility issues are fixed.
