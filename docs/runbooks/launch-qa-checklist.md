# Launch QA Checklist — Autosmartweby

> Závěrečná kontrola před nasazením / většími releasy. Navazuje na
> `docs/runbooks/ai-web-production-runbook.md` (Definition of Done §7) a
> `docs/runbooks/screenshot-qa-runbook.md`. Source of truth pro obsah/ceny/SEO je
> root `CLAUDE.md`.

## Obsah
- [ ] Hero do 10 sekund říká: pro koho to je, co klient dostane, cenu/rámec a další krok
- [ ] Žádné placeholder texty (lorem ipsum, „TODO", prázdná tlačítka)
- [ ] Žádné fake reference / smyšlená čísla / garantované výsledky
- [ ] Cena a rozsah jasně vysvětlené (ceny „od", orientační; Web Standard 8 900 / Web Pro 16 900 „Doporučená volba")
- [ ] FAQ řeší cenu, texty, fotky, termín, vlastnictví a provoz

## UX
- [ ] CTA fungují a vedou na správné cíle
- [ ] Telefon je klikací (`tel:`)
- [ ] E-mail je klikací (`mailto:`)
- [ ] Formulář má success/error stav
- [ ] Mobile layout je čitelný, nepřeplněný
- [ ] Žádný horizontal overflow (1440 / 768 / 390)

## SEO
- [ ] Title pro každou stránku
- [ ] Meta description pro každou stránku
- [ ] Open Graph metadata
- [ ] `sitemap.ts` odpovídá aktuálním routám
- [ ] `robots.ts` v pořádku
- [ ] Právě jedno `<h1>` na stránku
- [ ] Smysluplné H2/H3 hierarchie
- [ ] `lang="cs"`, české slugy (`/lokalni-seo`, ne `/seo`)
- [ ] Alt texty u významových obrázků, prázdný alt u dekorativních

## Performance
- [ ] Lighthouse Performance ≥ 90
- [ ] Obrázky optimalizované (rozměry, formát, lazy-load)
- [ ] Žádné zbytečné third-party skripty
- [ ] Animace nezpomalují stránku, respektují `prefers-reduced-motion`

## Accessibility
- [ ] Lighthouse Accessibility ≥ 90
- [ ] Form labely (přístupné, propojené s inputy)
- [ ] Dostatečný kontrast (WCAG AA)
- [ ] Keyboard focus viditelný a logický
- [ ] Žádné kritické axe / Pa11y chyby

## Security
- [ ] Server-side validace formuláře (`/api/contact` nerozbité)
- [ ] Honeypot
- [ ] Rate limit
- [ ] Délkové limity polí
- [ ] Žádné secrety v client bundlu, nic citlivého v `NEXT_PUBLIC_`
- [ ] Security headers
- [ ] GDPR / privacy odkazy (`/zasady-ochrany-osobnich-udaju`) funkční

## Form checklist
- [ ] Pole: jméno, e-mail, telefon, firma/web, zpráva
- [ ] Klientská i server-side validace
- [ ] Success message + error stav (bez interních detailů)
- [ ] Anti-spam (honeypot + rate limit) aktivní
- [ ] Bezpečné odeslání e-mailu, žádné logování celých osobních zpráv do veřejných logů

## Build & finální
- [ ] `corepack pnpm lint` bez chyb
- [ ] `corepack pnpm typecheck` bez chyb
- [ ] `corepack pnpm build` projde
- [ ] Struktura odpovídá sitemapě a pořadí sekcí (`CLAUDE.md` §2/§5)
- [ ] Design tokeny + modré CTA (žádná oranžová/neon)
- [ ] Žádné starší konfliktní verze jako aktivní kód
