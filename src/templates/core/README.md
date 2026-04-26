# `src/templates/` — Template knihovna

Každý adresář na úrovni `src/templates/<family-name>/` (kromě `core/`) je jedna template rodina. Templates se vybírají v `core/registry.ts` podle pole `family` z `_previews` Sheety a renderují na `/preview/[slug]`.

Pro architekturu, data flow a postup přidání nového templatu viz [`docs/PREVIEW-TEMPLATES.md`](../../../docs/PREVIEW-TEMPLATES.md).

---

## 1. Co je to template knihovna

Sada izolovaných React komponent, z nichž každá renderuje kompletní jednostránkový web (hero → services → pricing → contact → footer atd.) z jediného propu `brief: ClientBrief`. Slouží jako klientský preview — co dostaneme po výběru za odměnu.

Templates jsou **data-driven**: žádný klient-specifický text v kódu. Vše proměnné teče přes `ClientBrief` (z CRM přes Sheets), generic obsah (services list, FAQ, trust strip) je v `<template>/data/` jako konstanty.

## 2. Rules pro nové templates

- **Žádné CRM imports.** Template nesmí vědět o Sheets, Apps Scriptu, ani o marketing webu. Jediné povolené externí dependence: `react`, `next/image`, `next/link`, a `@/templates/core/types` (pro `ClientBrief`/`TemplateProps`).
- **Žádné importy z `@/components/`, `@/app/`.** Marketing web a template knihovna jsou izolované — refaktor v marketing UI nesmí rozbít template a vice versa.
- **Žádný Tailwind, žádné globální classy.** Stylujeme přes scoped CSS modules (`styles.module.css`). `:root` CSS variables drž uvnitř modulu, ne v `globals.css`.
- **Props jen `{ brief: ClientBrief }`.** Žádné další props. Pokud potřebuješ něco navíc (téma, varianta), rozšiř `ClientBrief` v `core/types.ts`.
- **Fallbacks na optional pole.** `brief.hero_headline` může chybět → template dodá generic fallback (`"<Service> pohotovost pro <city>"`). Nikdy nepadej na undefined.
- **Žádný GA4, žádný analytics.** Preview routes jsou klientský náhled, ne marketing. Neimportuj `@next/third-parties`.
- **Žádné side effects v Server Components.** Žádný `fetch` mimo to, co provede `preview-reader.ts`.

## 3. Naming conventions

- **Adresář:** `kebab-case` (`emergency-professional`, `community-expert`).
- **Default export:** `PascalCase` (`EmergencyProfessional`).
- **Sub-komponenty:** soubory `kebab-case.tsx`, exporty `PascalCase` (`hero.tsx` → `Hero`).
- **CSS module třídy:** `__BEM__` jako v prototypu (`hero__title`, `services__card--highlighted`); v JSX čteš jako `styles['hero__title']` nebo aliasem.
- **Data soubory:** `<template>/data/<noun>.ts` (`services.ts`, `faq.ts`, `prague-locations.ts`); export `SCREAMING_SNAKE_CASE` (`EMERGENCY_SERVICES`, `EMERGENCY_FAQ`).
- **Image assety:** `public/preview/<family>/<purpose>.<ext>` (`/preview/emergency/hero.jpg`).
- **Registry klíče:** odpovídají `family` enumu v `PreviewRecord` (`emergency`, `community-expert`, `technical-authority`, `generic-local`).

## 4. Layout a routing kontrakt

- Template render volá `src/app/preview/[slug]/page.tsx`. Template dostane prop `brief: ClientBrief` a nic jiného.
- Layout `src/app/preview/(template)/layout.tsx` zaručuje `robots: noindex, nofollow, nocache` a NEimportuje žádné marketing UI.
- Root layout (`src/app/layout.tsx`) je sdílený s marketing webem — fonty (Geist) a `globals.css` se applyují i na preview, ale šablona je nepoužívá (CSS modules + vlastní `:root` overrides).

## 5. Migration path → standalone NPM package

Krátkodobě templates žijí v marketing webu pro pilotní rychlost. Cílová podoba:

```
@autosmartweb/preview-templates  (npm package, vlastní repo)
├── src/
│   ├── core/
│   │   ├── types.ts              ← exportované veřejné typy
│   │   └── registry.ts           ← registry + getTemplate()
│   ├── emergency-professional/
│   ├── community-expert/
│   └── technical-authority/
└── package.json                  ← peer-deps: react, next
```

Marketing web by importoval:
```ts
import { getTemplate } from '@autosmartweb/preview-templates';
```

a ve `[slug]/page.tsx` volal `getTemplate(family)`.

Předpoklady migrace (ne dělat dřív, než budou splněny):
- Aspoň 2 reálné rodiny šablon živé v produkci (`emergency` + 1 další).
- Stable `ClientBrief` shape (není breaking change za poslední měsíc).
- CI build pipeline pro standalone repo s versioningem.

Do té doby drž **identickou strukturu jako finální package** (žádné importy zpět z marketing webu) — extrakce je pak jen `git mv` + `package.json`.
