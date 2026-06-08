# Screenshot QA Runbook — Autosmartweby

> Operační postup pro povinný vizuální QA loop. Doplňuje `docs/design-qa-workflow.md`
> (pravidla a „co kontrolovat") o **konkrétní kroky a příkazy**. Navazuje na
> `docs/runbooks/ai-web-production-runbook.md` §6.

## Povinné breakpointy

Každá významná vizuální změna musí být ověřena minimálně na:

- **desktop 1440 px**
- **tablet 768 px**
- **mobile 390 px**

> **Pravidlo:** Claude nesmí měnit UI jen podle textového dojmu. U významné UI změny
> minimálně tento screenshot loop; u runtime / performance / browser problému i
> **Chrome DevTools MCP**.

## Postup (loop)

1. **Spustit dev server:** `corepack pnpm dev` → `http://localhost:3000` (nebo už běžící).
2. **Otevřít stránku** přes **Playwright MCP** (`browser_navigate` na konkrétní route).
3. **Screenshot na všech 3 šířkách:**
   - Playwright MCP: `browser_resize` na 1440 / 768 / 390 + `browser_take_screenshot`, nebo
   - skript: `URL=http://localhost:3000/<route> corepack pnpm screenshots`
     (`scripts/screenshots.mjs`; po sekcích `corepack pnpm screenshots:sections`).
4. **Vizuální audit** (viz checklist níže).
5. **Opravit** zjištěné chyby v kódu.
6. **Re-screenshot** a opakovat, dokud není layout čistý na všech 3 šířkách.

## Co kontrolovat

**Layout & responzivita**
- žádný horizontální scroll / overflow na žádné šířce,
- spacing a rytmus sekcí konzistentní,
- zarovnání karet, konzistentní radiusy a stíny,
- mobilní navigace (hamburger) funguje, nic se nepřekrývá.

**Hero & fold**
- hero projde 10sekundovým testem (pro koho · co dostane · cena/rámec · další krok),
- H1 + subheadline čitelné, CTA viditelné nad foldem.

**Typografie & kontrast**
- čitelnost textu, hierarchie H1/H2/H3,
- kontrast cílí na WCAG AA, viditelné focus states.

**Obrázky & média**
- správný ořez/poměr, žádné roztažené/rozmazané obrázky.

**Formuláře (pokud byly dotčené)**
- validační stavy, success/error, přístupné labely, spacing, napojení na `/api/contact` nerozbité.

**Animace**
- decentní, nezpomalují stránku, respektují `prefers-reduced-motion` (`useReducedMotion`).

**Runtime**
- žádné console errory (ověř Chrome DevTools MCP / Playwright console).

## Jak reportovat výsledek

Po loopu vrať stručný report:
- které route/sekce a které breakpointy byly zkontrolované,
- nalezené problémy + jak byly opravené (před/po),
- zbývající rizika / známé výjimky,
- screenshoty nebo cesty k nim (`scripts/screenshots*` ukládá výstupy),
- výsledek `lint` / `typecheck` / `build`, pokud byly spuštěné.
