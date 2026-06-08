# AI Web Production Runbook — Autosmartweby

> **Hlavní operační runbook** pro tvorbu marketingových webů pomocí AI.
> Závazná „source of truth" (sitemap, ceny, copy, design tokeny, ochrana
> produktových vrstev) zůstává root **`CLAUDE.md`** + `AGENTS.md`. **Při konfliktu
> vyhrává `CLAUDE.md`.** Tento runbook popisuje *proces a pravidla výroby*.
>
> Navazující docs: `docs/runbooks/screenshot-qa-runbook.md`,
> `docs/runbooks/launch-qa-checklist.md`, `docs/tool-decisions.md`,
> `docs/claude-working-rules.md`, `docs/design-qa-workflow.md`.
> Stack ověřen: **2026-06-08**.

## 1. Účel

Tento runbook definuje, jak v Autosmartweby vyrábíme marketingové weby pomocí AI tak,
aby výsledek **nevypadal jako AI-generated**, byl rychlý, důvěryhodný, technicky
čistý a opakovatelně prodejný.

## 2. Základní princip

**AI je interní výrobní nástroj.** Klientovi neprodáváme AI, ale profesionální web,
jasný proces, důvěryhodnost, dohledatelnost a jednodušší cestu k poptávce. Hlavní
emoce = úleva a bezpečí (jasná cena, jasný proces, žádné skryté náklady).

## 3. Produkční stack

- **Aktuální marketing web:** Next.js + Tailwind 4 (CSS-first, tokeny v
  `src/app/globals.css`) + shadcn/ui + Vercel. Animace přes `motion` / `motion/react`
  (NE starý `framer-motion`), vždy `useReducedMotion`.
- **Budoucí klientské prezentační weby:** zvážit **Astro** + Tailwind + shadcn/ui jako
  odlehčený starter (minimum JS) — viz §4 / `docs/tool-decisions.md`.
- **Implementace:** Claude Code (primární nástroj).
- **UI scaffolding/inspirace:** v0, `21st.dev Magic` (`API_KEY` přes user-env), `shadcn`, `magic-ui`.
- **QA:** Playwright MCP, Chrome DevTools MCP, Lighthouse, axe/Pa11y.
- **Deploy:** Vercel.
- **Příkazy:** pnpm přes `corepack pnpm <script>` (pnpm není v PATH): `dev`, `lint`,
  `typecheck`, `build`, `screenshots`, `screenshots:sections`. Dev běží na `http://localhost:3000`.

> **Rozhodnutí (2026-06-08):** Aktuální projekt **nemigrovat** na Astro. Next.js +
> Vercel + existující workflow zůstává. Astro řešit až u samostatného
> `autosmartweby-client-starter` po stabilizaci hlavního webu.

## 4. Kdy použít jaký nástroj

### Claude Code
Implementace, refaktor, QA, opravy, malé commity. Hlavní produkční systém.

### v0
Jen pro **návrh** UI sekcí / komponent. **Nikdy nepřebírat bez refaktoru** a sjednocení
s design systémem (ASW tokeny, žádné hardcoded barvy) + screenshot QA.

### 21st.dev Magic / shadcn / magic-ui (MCP)
Generování/inspirace UI. `shadcn` = základ produkčních komponent; `magic-ui` jen
decentní efekty; `21st.dev` inspirace. Vždy retokenizovat na ASW, lab-only návrh/diff.
Detail: `docs/mcp-ui-workflow.local.md`.

### Lovable / Bolt / Framer AI
Jen pro **mood / prototyp / klientskou ukázku**. NE jako finální klientský produkt
bez přepsání do našeho stacku.

### Figma
Jen u premium / design-first projektů.

## 5. Standardní workflow

1. Intake / brief
2. Sitemap a sekční plán
3. Copy draft
4. UI návrh / komponenty
5. Implementace v Claude Code
6. Screenshot QA desktop/tablet/mobile (viz `screenshot-qa-runbook.md`)
7. Accessibility + performance QA
8. Launch checklist (viz `launch-qa-checklist.md`)
9. Deploy (Vercel)
10. Post-launch kontrola

## 6. Screenshot QA loop

Každá vizuální změna musí být ověřena minimálně na **desktop 1440px · tablet 768px ·
mobile 390px**. Plný postup: `docs/runbooks/screenshot-qa-runbook.md`.

Claude Code musí po změně: (1) spustit dev server, (2) otevřít stránku přes Playwright,
(3) udělat screenshoty, (4) zkontrolovat overflow/spacing/typografii/CTA/fold/mobilní
čitelnost, (5) opravit chyby, (6) zopakovat kontrolu. Runtime/perf/network → **Chrome
DevTools MCP**.

## 7. Definition of Done

Web/sekce je hotová až když:
- žádný horizontální overflow,
- CTA je viditelné a srozumitelné,
- hero projde 10sekundovým testem (pro koho · co dostane · cena/rámec · další krok),
- mobile layout nepůsobí přeplněně,
- formulář funguje (success/error stav, napojení na `/api/contact`),
- **Lighthouse ≥ 90** pro Performance / SEO / Best Practices / Accessibility (pokud není zdůvodněná výjimka),
- nejsou kritické accessibility chyby,
- metadata, OG, sitemap, robots jsou v pořádku,
- žádné placeholdery, fake reference ani neověřené sliby,
- `corepack pnpm build` projde.

## 8. Anti-AI-slop pravidla

- Nepoužívat generické fialové/modré gradienty jako default.
- Nepřehánět animace; jedna silná vizuální myšlenka > mnoho efektů.
- Nepoužívat Aceternity / Magic UI jako **základ** webu (jen decentní doplněk).
- Každá sekce musí mít jasný obchodní účel (odstraňuje jednu bariéru).
- Reálné fotky a konkrétní copy mají přednost před efektem.
- **AI výstup je draft, ne finální deliverable.**
- Žádné fake social proof, glass cards bez důvodu, glowing orbs, generic SaaS showreel.

## 9. Pravidla pro tool usage (tvrdá)

- Stack se nemění bez zápisu do `docs/tool-decisions.md`.
- Žádná nová dependency bez jasného obchodního důvodu.
- Existující Next.js projekt **nemigrovat** jen kvůli teoretické optimalizaci.
- Playwright MCP + Chrome DevTools MCP = povinný QA základ.
- Secrety (vč. `API_KEY` pro 21st.dev) **nikdy** do repa / `.mcp.json` / klientského bundlu — jen user-env.

## 10. Bezpečnostní minimum formulářů

Každý formulář musí mít:
- server-side validaci (Zod nebo ekvivalent), POST only,
- honeypot, rate limit, délkové limity, základní anti-spam,
- bezpečné odesílání e-mailu,
- žádné secrety v klientském bundlu, bezpečné chybové hlášky bez interních detailů.

Stávající `/api/contact` backend tyto požadavky splňuje — **nerozbít ho**. Kontaktní
formulář je nejrizikovější místo běžného marketingového webu (viz `CLAUDE.md` §11).

## 11. Co se nesmí

- Nedělat celý web jedním promptem.
- Nepřebírat v0/Lovable kód bez revize a refaktoru.
- Neprodávat klientovi „AI web" jako hlavní hodnotu.
- Nezakládat nový stack bez zápisu do `docs/tool-decisions.md`.
- Nepushovat změny bez QA screenshotů.
- Nemazat produktové vrstvy (`src/templates/*`, `preview/`, `brand-dotaznik/`,
  `src/app/api/*`), právní stránky, `sitemap.ts`/`robots.ts`, consent/GDPR logiku.
