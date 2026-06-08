# Tool decisions for Autosmartweby

## Mandatory AI/design workflow (rozhodnutí projektu)

Povinný řetězec pro veškerou UI práci:

1. **Claude Code** — primary development workflow.
2. **Motion / Framer Motion** — Framer Motion používáme přes aktuální balík `motion`
   a importy `motion/react`. Starý balík `framer-motion` nepřidávat. Animace
   respektují `useReducedMotion`.
3. **`impeccable`** — mandatory UI/UX quality skill. For all visual/UI work, use the
   impeccable skill as the mandatory UI/UX quality layer.
4. **21st.dev Magic MCP** — UI component generation / inspiration (user-env API key,
   nikdy v repu — viz `docs/mcp-ui-workflow.local.md`).
5. **Chrome DevTools MCP** — keyless browser debug: console, network, performance.
6. **Playwright screenshot loop** — visual QA (1440 / 768 / 390).

> Claude nesmí dělat UI změny pouze podle textového dojmu. U významných UI změn
> minimálně screenshot workflow; u runtime/performance/browser problému i Chrome
> DevTools MCP.

## Tvrdá rozhodnutí (decision records)

Aby se nemusela stejná debata vést pokaždé znovu (2026-06-08):

### Produkční implementace
**Rozhodnutí:** Claude Code je hlavní nástroj pro implementaci.
**Důvod:** pracuje nad reálným repem, umí malé commity, testy, QA a MCP workflow.

### UI generování
**Rozhodnutí:** v0 je povolené pro scaffolding UI.
**Limit:** výstup z v0 **nikdy** nejde rovnou do produkce — vždy refaktor, sjednocení
s design systémem (ASW tokeny, žádné hardcoded barvy) a screenshot QA.

### Full-site generátory
**Rozhodnutí:** Lovable, Bolt, Framer AI **nejsou** produkční nástroje pro finální
klientské weby. **Povoleno:** moodboard, rychlý prototyp, inspirace, klientská ukázka.
**Zakázáno:** dodat jako finální web bez přepsání do našeho stacku.

### Frontend stack
**Aktuální projekt:** Next.js (+ Tailwind + shadcn/ui + Vercel) — **zůstává**.
**Budoucí jednoduché klientské weby:** Astro vyhodnotit jako odlehčený default starter.
**Pravidlo:** existující Next.js projekt **nemigrovat** jen kvůli teoretické
optimalizaci. Astro řešit až u samostatného client-starteru po stabilizaci hlavního webu.

### QA
**Rozhodnutí:** Playwright MCP + Chrome DevTools MCP jsou **povinný QA základ** pro
vizuální a výkonovou kontrolu. Lighthouse + axe/Pa11y na launch-level práci.

## Use as core

### Claude Code

Main implementation tool. Use for real repo work, refactoring, component changes, QA loops and small commits.

### v0

Use for UI scaffolding and inspiration in React + Tailwind + shadcn/ui. Do not copy output blindly. Always refactor and polish.

### Playwright MCP

Use for screenshot QA, responsive checks and interaction testing.

### Chrome DevTools MCP

Use for console, network and performance debugging.

### Lighthouse

Use before launch for performance, accessibility, SEO and best practices.

## Use depending on project

### Astro

Preferred for simple brochure and lead-generation websites where minimal JavaScript and speed matter.

### Next.js

Use when the website needs application logic, API routes, forms, dynamic content, dashboards or deeper integration.

### Figma MCP

Use mainly for premium or design-first projects.

### Cursor / Copilot

Optional coding assistance. Not the main production system.

## Prototype only

### Lovable / Bolt / Framer AI

Use only for quick prototypes, moodboards, client direction or idea exploration. Do not use as final production delivery unless explicitly decided.

## Avoid as default

- full autonomous agents as the main delivery method,
- overanimated UI kits as the default visual style,
- tools that create vendor lock-in without clear business reason.

## Rule for prices and limits

Tool prices, plan names, limits and billing rules change often. Always verify before buying, recommending or making a production decision.
