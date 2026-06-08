# Autosmartweby working rules

> Pozn.: Závazná „source of truth" pro každodenní práci Claude Code zůstává root
> `CLAUDE.md` (detailní česká pravidla — sitemap, ceny, tokeny, ochrana
> produktových vrstev). Tento soubor je doplňkový anglický výtah pravidel pro
> brand, copy, design a QA. Při konfliktu vyhrává root `CLAUDE.md`.

## Claude Code workflow (povinný)

Claude Code vždy pracuje v malých, reviewovatelných krocích:

1. **Audit** aktuálního stavu (struktura, existující komponenty, tokeny, patterny).
2. **Návrh změn** (co a proč; u významných změn nejdřív diff/návrh).
3. **Implementace** v co nejmenším nutném rozsahu.
4. **lint / typecheck / build** podle rozsahu změny.
5. **Screenshot QA** po každé větší UI změně (1440 / 768 / 390) — viz
   `docs/runbooks/screenshot-qa-runbook.md`.
6. **Report**: změněné soubory, co/proč, jaké testy proběhly, co zůstává rizikové, další krok.

## Zakázáno

- Nevytvářet velké refaktory bez explicitního souhlasu.
- Neměnit stack bez aktualizace `docs/tool-decisions.md` (např. Next.js → Astro).
- Nemigrovat existující Next.js projekt jen kvůli teoretické optimalizaci.
- Nepřidávat dependency bez jasného obchodního důvodu.
- Nepřidávat animace jen kvůli efektu (vždy `useReducedMotion`).
- Nevymýšlet reference, recenze, roky praxe, počty klientů ani garance.
- Nepřebírat v0 / Lovable / Bolt / Framer výstup do produkce bez refaktoru.
- Nepushovat UI změny bez QA screenshotů.

## Project identity

Autosmartweby builds professional, trustworthy and affordable websites for Czech small businesses, freelancers, craftsmen, local services and small companies.

We do not sell “AI websites”. AI is an internal accelerator. The client buys a working website, trust, clarity, speed, simple process and fewer worries.

## Brand rules

- The main emotion is relief: “someone will solve this for me”.
- The second emotion is safety: clear price, clear process, no hidden costs.
- Autosmartweby must not feel like:
  - cheap anonymous template generator,
  - expensive agency showreel,
  - AI hype studio,
  - overcomplicated technology project.
- Prefer words like:
  - professional website,
  - clear price,
  - simple process,
  - help with text,
  - verified structure,
  - adapted to your business,
  - no unnecessary technical talk.
- Avoid words like:
  - revolutionary,
  - disruptive,
  - AI website of the future,
  - cheapest website,
  - fully custom premium solution without clear scope.

## Production rules

- Work in small, reviewable changes.
- Before editing, inspect the current structure and existing patterns.
- Do not rewrite unrelated parts of the project.
- Reuse existing components, tokens and design patterns where possible.
- Do not invent testimonials, references, certifications, years of experience, number of clients, guarantees, locations or business results.
- If information is missing, mark it as missing instead of fabricating it.
- Time-sensitive facts such as tool pricing, plan limits, versions and external service terms must be verified before being treated as true.

## Design rules

- Avoid AI-slop:
  - generic purple/blue gradients,
  - random glass cards,
  - fake SaaS dashboards,
  - overused glowing orbs,
  - too many animations,
  - vague copy,
  - fake social proof,
  - generic stock-feeling sections.
- Design should be modern, clean, trustworthy and accessible.
- Use whitespace, hierarchy and clear section rhythm.
- Animations must support understanding, not distract.
- One strong visual idea is better than many effects.

## Copy rules

- Every headline must communicate something concrete.
- Every section should remove one barrier:
  - I do not know what I get,
  - I do not trust the price,
  - I do not have texts,
  - I fear hidden costs,
  - I do not understand the process,
  - I do not want technical complexity.
- Keep copy short, human and specific.
- Do not promise guaranteed customers, SEO positions or revenue growth.
- Prefer: “helps customers understand what you do and contact you easily.”

## Technical rules

- Prefer secure-by-default implementation.
- Contact forms must use server-side validation, rate limiting and anti-spam protection.
- Never expose secrets in the client bundle.
- Do not add third-party scripts without a clear business reason.
- Keep performance, accessibility and SEO in mind from the start.

## QA rules

Before considering UI work done:

- Check desktop, tablet and mobile.
- Check no horizontal overflow.
- Check navigation and CTA states.
- Check form states if forms were touched.
- Check basic accessibility.
- Check console errors.
- Run lint/typecheck/build if available.
- For launch-level work, run Lighthouse or equivalent QA.

## Detailed docs

Use these files for deeper context:

- `docs/runbooks/ai-web-production-runbook.md` (hlavní runbook výroby webů)
- `docs/runbooks/screenshot-qa-runbook.md` (vizuální QA loop)
- `docs/runbooks/launch-qa-checklist.md` (kontrola před nasazením)
- `docs/design-qa-workflow.md`
- `docs/tool-decisions.md`
- `docs/autosmartweby-positioning-rules.md`
