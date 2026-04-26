# Emergency Professional — HTML/CSS prototype notes

Statický HTML/CSS design prototyp přenesený ze screenshotů ve složce `design-briefs/01 Emergency Professional`. Není to produkční web ani napojení na data — čistě vizuální referenční implementace.

## Zdroj pravdy

Screenshoty:
- `01-hero.png` a `02-services.png` — varianty hero + trust strip
- `03-pricing.png` — služby (navzdory filename — layout služeb)
- `04-locations.png` — ceník
- `05-faq.png` — lokality (s hint na FAQ dole)
- `06-contact.png` — kontakt

V prototypu jsem zvolil variantu hero z `02-services.png` (logo „INSTALATÉRSKÁ POHOTOVOST“ + trust strip s kvalitativními popisky bez konkrétních čísel), protože koresponduje s obsahem zbývajících screenshotů a zároveň je audit-clean vůči pravidlům z `design-briefs/01-emergency-professional.md` sekce 10 (žádná nová čísla / garance).

## Vytvořené sekce

1. **Header** — logo + telefon (desktop) + červené CTA „ZAVOLAT HNED“
2. **Hero** — červený badge „NONSTOP POHOTOVOST“, headline, podheadline, 2 CTA (telefon + „NAPIŠTE NÁM“), 3 trust features, placeholder hero vizuál (tmavý obdélník s ikonou klíče jako SVG)
3. **Trust strip** — tmavě modrý pás, 3 ikony (Zkušený tým / Spokojení zákazníci / Rychlá reakce)
4. **Services** — nadpis + podheadline + grid 6 karet, spodní široké červené CTA
5. **Pricing** — „Orientační ceník“, seznam 6 služeb s „od XXX Kč“, 4 bullet features
6. **Locations** — červený pill „MÍSTNÍ SLUŽBA“, nadpis, grid 24 lokalit (Praha 1–10 + čtvrti), callout s CTA
7. **FAQ** — 4 otázky jako native `<details>` akordeon (bez JS)
8. **Contact** — headline, 2 sloupce (info karty + formulář)
9. **Footer** — tmavý, logo + nav + kontakt + meta řádek

Navíc (funkční doplněk mimo hlavní sekce):
- **Mobile sticky CTA** (spodní lišta telefon + napsat) — viditelná jen na mobilu (<768px). Odpovídá mobile-first pravidlům z `design-briefs/ACCESSIBILITY_AND_PERFORMANCE_BRIEF.md`.

## Opakující se komponenty

- `.btn` (varianty: `.btn--primary`, `.btn--ghost`, `.btn--sm`, `.btn--lg`, `.btn--full`, `.btn--wide`)
- `.check` (červený checkmark pro bullet listy — používá se v hero, pricing features i v location chips)
- `.pill` (malý inline badge — používá se jako „NONSTOP POHOTOVOST“ v hero a „MÍSTNÍ SLUŽBA“ v locations)
- `.section-heading` (centrovaný header sekce: h2 + podheadline)
- `.container` (standardní obalený šířkou 1120px)
- `.icon` (SVG ikony používané konzistentně v hero CTA, headeru, trust stripu, kontaktních kartách a FAQ)
- `.contact-card` (info karta s ikonou + textem; používá se 4× v kontaktu)
- `.service-card` (karta služby, jedna varianta `--highlight` pro zvýrazněnou)

## Co je v návrhu fixní (patří k direction)

- Barevný systém (červená CTA + tmavá navy)
- Typografická hierarchie (heading-body vztahy, velikosti)
- Layout hero (text vlevo, vizuál vpravo, trust strip hned pod)
- Trust strip jako tmavý pás
- Grid služeb 3 sloupce na desktopu, 2 na tabletu, 1 na mobilu
- FAQ jako akordeon
- Kontakt dvousloupcový: levý info panel + pravý formulář
- Mobile sticky CTA pattern (call + napsat)
- Varianty tlačítek a jejich spacing
- Pozice červeného akcentu (CTA, checkmarky, pill badges, service highlight border)

## Co je proměnné (patří ke konkrétnímu klientovi)

- Text v logu (INSTALATÉRSKÁ POHOTOVOST → konkrétní název firmy)
- Telefonní číslo (`+420 777 123 456` → reálné)
- Email (`info@rychla-instalaterska.cz` → reálný)
- Seznam služeb + jejich texty
- Řádky ceníku (konkrétní služby a částky — nebo rozhodnutí „ceny nekomunikujeme“)
- Seznam lokalit (24 chipů → reálný region)
- Texty FAQ (otázky a odpovědi)
- Texty trust stripu (Zkušený tým / Spokojení zákazníci / Rychlá reakce → konkrétní kvality klienta)
- Hero vizuál (demo SVG → reálná fotka nástrojů / instalatéra / zásahu)
- Hero headline a lead text
- Finální obsah patičky (meta, případné podmínky)

## Které texty jsou placeholderové

**Všechny**. Prototyp neobsahuje žádnou reálnou klientskou informaci. Konkrétně:

- „Instalatérská pohotovost pro Prahu“ a lead text v hero
- „+420 777 123 456“ všude (telefon)
- „info@rychla-instalaterska.cz“ v patičce i kontaktu
- Texty služeb v `.services__grid`
- „od XXX Kč“ v ceníku (záměrně necelé, aby bylo vidět, že jde o placeholder)
- Seznam Praha 1–10 + čtvrtí
- FAQ otázky a odpovědi
- Texty trust stripu
- Texty `hero__features` a `price-features`
- Meta řádek v patičce explicitně uvádí „Demo prototyp — Emergency Professional. Texty jsou placeholdery.“

## JS použit?

**Ne.** Celý prototyp je statický HTML + CSS:
- FAQ akordeon — nativní `<details>` / `<summary>` (žádné JS).
- Scroll-to-anchor — nativní `scroll-behavior: smooth` v CSS.
- Formulář — `onsubmit="event.preventDefault()"` inline na `<form>`, aby se demo neposílalo nikam.
- Mobile sticky CTA — čistě CSS `position: fixed`.

## Responsivní chování

- **<560px**: hero vertikální, trust strip 1 sloupec, služby 1 sloupec, lokality 2 sloupce, kontakt 1 sloupec, mobile sticky CTA viditelná.
- **≥560px**: hero features 3 sloupce, lokality 3 sloupce, pricing features 2 sloupce.
- **≥768px**: desktopové rozložení — hero 2 sloupce (text + vizuál), trust strip 3 sloupce, služby 2 sloupce, lokality 4 sloupce, kontakt 2 sloupce, telefon v headeru viditelný, sticky CTA skrytá.
- **≥1024px**: služby 3 sloupce, lokality 6 sloupců (shodné s desktop screenshotem).

## Připravenost na převod do template systému

- Semantický HTML (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`) — snadno mapovatelné na template regiony.
- BEM-ish class names (např. `.hero__title`, `.service-card__icon`) — čisté slotové mapování.
- CSS custom properties (`--color-red`, `--space-5`, atd.) — centrálně laditelný tematický token soubor.
- Žádné in-line styly (kromě `onsubmit` u form jako demo defensive handler).
- Obsahové sloty (logo, telefon, email, hero texty, služby, ceník, lokality, FAQ, kontaktní údaje) jsou jasně identifikovatelné — viz seznam „Co je proměnné“ výše.
- Mobile sticky CTA je samostatný komponentový blok — lze snadno vypínat pro direction, která ji nevyžaduje.
