# v0 Autosmartweby — vizuální reference

Tato složka obsahuje screenshoty z návrhu vygenerovaného ve [v0.app](https://v0.app/). Slouží jako **vizuální reference** pro implementaci v2 redesignu — nikoliv jako zdrojový kód, copy ani data.

**Zdrojový v0 chat:**
https://v0.app/chat/autosmartweby-website-redesign-iUYLASND9pU

---

## Pořadí sekcí (shora dolů)

| # | Soubor | Sekce |
|---|---|---|
| 01 | `01-hero.png` | Hero |
| 02 | `02-services.png` | Služby / co dostanete |
| 03 | `03-package-results.png` | Balíčky a výstupy |
| 04 | `04-results-proof.png` | Výsledky / důkazy |
| 05 | `05-references-about.png` | Reference + o nás |
| 06 | `06-about-cta-footer.png` | O nás + CTA + footer |

---

## Jak s referencí pracovat

### Co převzít

**Design převzít co nejvěrněji** — kompozici, typografickou hierarchii, spacing, vizuální rytmus, použití barev, formy karet, mockupů a CTA bloků. Cílem je dotáhnout v2 implementaci na úroveň, kterou v0 ukazuje, bez zbytečných improvizací.

### Co NEPŘEVZÍT doslova

**Veškerý obsah ladit podle [`CLAUDE.md`](../../CLAUDE.md)** a strategie Autosmartweby:

- **Žádná nedoložená čísla** — počty klientů, procenta růstu, doby návratnosti, „98 % spokojenosti", roky praxe. Pokud to nejsme schopni doložit, do webu to nepatří.
- **Žádné fake reference** — žádné vymyšlené citace, jména, loga firem ani avatary. Místo toho launch-safe alternativa (popis, jak spolupráce vypadá) — viz `siteContent.ts → references`.
- **Žádné fake kontakty** — pouze reálné údaje Synkedo s.r.o. / Autosmartweby (telefon, e-mail, IČO, adresa).
- **Czech-language copy** — vykání, lidský tón, žádný AI hype, žádné „digitální transformace" ani „revoluční řešení". Hero, CTA a pricing copy už máme schválený v `src/data/siteContent.ts` — držet se ho.
- **Pricing rámce** — v0 může ukazovat odlišné částky; držet se `Start kolem 10 000 Kč`, `Lokální 15 000–25 000 Kč`, `Web+ 25 000–45 000 Kč` (viz CLAUDE.md §8).

### Postup implementace

1. Otevři screenshot odpovídající sekce, kterou upravuješ.
2. Implementuj vizuál v existující v2 komponentě (`src/components/v2/*.tsx`).
3. Copy a data ber ze `src/data/siteContent.ts` — pokud chybí, doplň je tam, ne přímo do komponenty.
4. Spusť `pnpm screenshots` a `pnpm screenshots:sections`, výsledek porovnej s v0 referencí.
5. Iteruj, dokud se kompozice a hierarchie blíží referenci.

---

## Status

Reference uložena: **2026-05-15**. Screenshoty jsou statické — pokud se v0 návrh změní, doplň novou verzi do podsložky (`v0-autosmartweby/2026-mm-dd/`) a nech tuto jako historický baseline.
