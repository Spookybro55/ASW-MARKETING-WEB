# Preview Templates Library

Personalizované klientské preview weby renderované na `autosmartweb.cz/preview/<slug>`. Klient z CRM dostane email s odkazem, otevře se mu finální vizuál vlastní firmy s daty z briefu.

---

## A. Architecture overview

```
┌─────────────────────┐       ┌──────────────────────┐       ┌──────────────────────┐       ┌──────────┐
│ CRM (autosmartweby) │  →    │ Google Sheets        │  ←    │ ASW-MARKETING-WEB    │  →    │ Klient   │
│ Apps Script         │       │ _previews list       │       │ /preview/[slug]      │       │ Browser  │
│ upsertPreviewRecord_│       │ (skrytý, 9 sloupců)  │       │ Service Account read │       │          │
└─────────────────────┘       └──────────────────────┘       └──────────────────────┘       └──────────┘
        write                       store                           read + render                  view
```

CRM zapisuje brief klienta do `_previews` listu Sheety `14U9CC0q5gpFr2p7CD1s4rf3i0lCettIVYIqrO8lsj9c`. Marketing web na vyžádání čte řádek podle slugu, vybere template podle `family` a vyrenderuje stránku s daty klienta.

## B. Data flow

| Komponenta | Role |
|---|---|
| **CRM Apps Script (`upsertPreviewRecord_`)** | Generuje deterministický slug z `business_name + city`, sestaví `brief_json` z LEADS dat, zapíše řádek do `_previews`. |
| **Google Sheets `_previews` list** | Source of truth pro preview brief. 9 sloupců: `slug`, `brief_json`, `template_type`, `family`, `lead_id`, `preview_url`, `generated_at`, `last_accessed_at`, `status`. |
| **`src/lib/sheets/client.ts`** | Singleton Service Account klient (`googleapis`), `spreadsheets.readonly` scope. Stejný Service Account jako CRM. |
| **`src/lib/sheets/preview-reader.ts`** | `getPreviewBySlug(slug)` — načte řádek, parsuje `brief_json`, vrátí `PreviewRecord`. Mock fallback při `MOCK_MODE=true`. |
| **`src/templates/core/registry.ts`** | Mapuje `family` → React komponenta (`emergency`, fallback `generic-local`). |
| **`src/app/preview/[slug]/page.tsx`** | Server Component. Načte preview, vybere template z registru, předá `brief` jako prop. ISR 5 min. `robots: noindex`. |
| **`src/templates/<family>/index.tsx`** | Vyrenderuje finální stránku z `brief: ClientBrief`. Scoped CSS modules, žádné importy z marketing webu kromě `core/types`. |

## C. ClientBrief shape

Kompletní reference. Source: `src/templates/core/types.ts`.

```ts
interface ClientBrief {
  // Identifikace
  business_name: string;       // "BAUHAUS"
  service_type: string;        // "instalatér"
  city: string;                // "Praha"
  area?: string;               // "Michle"

  // Kontakt
  phone: string;               // "+420 255 715 111"
  email: string;               // "podpora@bauhaus.cz"
  website?: string;            // existing web pokud má

  // Personalizovaný obsah (CRM Apps Script generuje, optional → fallback v template)
  hero_headline?: string;      // "Instalatérská pohotovost pro Prahu"
  hero_lead?: string;          // "Pomoc s havárií vody…"
}
```

`PreviewRecord` (full row tvar):

```ts
interface PreviewRecord {
  slug: string;
  template_type: string;
  family: 'emergency' | 'community-expert' | 'technical-authority' | 'generic-local';
  brief: ClientBrief;
  lead_id?: string;
  preview_url?: string;
  generated_at: string;
  last_accessed_at?: string;
  status: 'active' | 'archived';
}
```

## D. Template_type → family mapping

`template_type` je granulární klasifikace z CRM (např. dle existence webu). `family` určuje, který template komponent registry vybere.

| `family` | Template komponenta | Status | Použití |
|---|---|---|---|
| `emergency` | `EmergencyProfessional` | ✅ pilot | instalatéři, elektrikáři, havárijní servisy |
| `community-expert` | `CommunityExpert` | LATER (fallback `EmergencyProfessional`) | komunitní/lokální experti |
| `technical-authority` | `TechnicalAuthority` | LATER (fallback `EmergencyProfessional`) | technické autority, B2B |
| `generic-local` | `EmergencyProfessional` | ✅ pilot fallback | jakýkoliv neklasifikovaný lokální byznys |

Příklady `template_type`:
- `emergency-service-no-website` → `family: emergency`
- `emergency-service-existing-web` → `family: emergency`
- `community-expert-trainer` → `family: community-expert` (later → emergency fallback)

## E. Jak přidat nový template

1. **Vytvoř adresář** `src/templates/<family-name>/` (kebab-case).
2. **Implementuj `index.tsx`** — root komponenta, props `{ brief: ClientBrief }`, default export. Žádné importy z `@/components/`, `@/app/` ani z marketing webu — povolen jen `@/templates/core/types` a soubory pod vlastním adresářem.
3. **Stylování** — vytvoř `styles.module.css` (scoped CSS modules). NE Tailwind, NE globální classy z `globals.css`. CSS variables drž v `:root` selektoru uvnitř modulu.
4. **Komponenty + data** — sub-komponenty pod `components/`, statická data (services, FAQ, lokality) pod `data/` jako TypeScript moduly.
5. **Image assety** — pod `public/preview/<family-name>/`. V kódu použij Next `<Image>` s explicit `width`/`height`.
6. **Registry** — v `src/templates/core/registry.ts` přidej do `TEMPLATE_REGISTRY`:
   ```ts
   '<family-name>': YourTemplate,
   ```
7. **Test** — přidej mock řádek do `getMockPreview()` v `preview-reader.ts`, otevři `/preview/<mock-slug>` s `MOCK_MODE=true`.
8. **CRM strana** — v Apps Scriptu rozšiř logiku, která rozhoduje `family` z `template_type`/`service_type`, a generuj briefy s odpovídající rodinou.
9. **Dokumentace** — doplň řádek do tabulky D výše.

DoD pro nový template:
- [ ] Build/lint/tsc PASS
- [ ] Renderuje se s `getMockPreview()` daty
- [ ] CSS scoped (žádné colliding global classes)
- [ ] Žádné dependencies na marketing web kromě `core/types`
- [ ] `robots: noindex` zděděno z `(template)/layout.tsx`
