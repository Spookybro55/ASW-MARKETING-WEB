# AutoSmartWeby – Source of Truth (Claude Code Guardrails)

> Tento dokument je **jediná závazná pravda** pro marketingový web AutoSmartWeby.
> Nahrazuje všechny předchozí verze, drafty a positioning poznámky (2026-05-21).
> Pokud starší soubor, README, prompt nebo hardcoded obsah odporuje tomuto
> dokumentu, vyhrává tento dokument.

---

## 1. Role projektu

AutoSmartWeby je moderní, profesionální a důvěryhodný **konverzní web** pro malé
a střední firmy v Česku.

Cílová skupina:
- živnostníci, lokální služby, řemeslníci, restaurace, poskytovatelé služeb a další české SMB,
- kteří potřebují: lepší web, lepší viditelnost v Google / Mapách, AI asistenta / virtuálního recepčního, a jednoduchou cestu k více poptávkám.

Web má působit pomocně, profesionálně a srozumitelně pro netechnické zákazníky.

**Pozor — souběžné produktové vrstvy v repu (NEMAZAT):** repozitář kromě
marketingového webu obsahuje i produkt a nástroje, které tato spec NEŘEŠÍ a které
se nesmí smazat při „úklidu starších verzí":
- `src/templates/*` (klientské šablony webů: community-expert, emergency-professional, core),
- `src/app/preview/`, `src/app/preview2/` + `src/lib/sheets/` (náhledový systém z Google Sheets),
- `src/app/brand-dotaznik/` + jeho API (brand dotazník / lead nástroj),
- `src/app/api/*` (funkční contact backend a další),
- právní stránky (`/zasady-ochrany-osobnich-udaju`), `sitemap.ts`, `robots.ts`, OG/analytics/consent.

„Source of truth" se týká **veřejného marketingového webu** (homepage + 5 detailních stránek).

---

## 2. Sitemap (cílová struktura)

| Route | Menu | Účel |
|---|---|---|
| `/` | Domů | Hlavní landing s přehledem služeb a CTA |
| `/weby` | Webové stránky | Detail o tvorbě webů |
| `/lokalni-seo` | Lokální SEO | Detail o lokálním SEO a viditelnosti v Google (preferovat `/lokalni-seo`, ne `/seo`) |
| `/ai-asistent` | AI asistent | Detail o AI recepčním / asistentovi |
| `/cenik` | Ceník / Balíčky | Přehled balíčků |
| `/kontakt` | Kontakt | Kontakt a lead formulář |

Všechny stránky sdílí konzistentní **Header** a **Footer**.

---

## 3. Tone of voice

Přátelský, jasný, důvěryhodný, praktický, lidský, ne-korporátní. Přirozená čeština,
vykání. Bez prázdného marketingového žargonu. Web musí být srozumitelný i pro
netechnické zákazníky.

Negarantuj konkrétní výsledky (pozice v Google, počty zákazníků, růst). Nevymýšlej
reference, roky praxe, certifikace ani čísla. Ceny uváděj s „od" a jako orientační.

---

## 4. CTA

Primární CTA: **„Objednat konzultaci"**

Další povolené CTA: „Nezávazně poptat web" (ceník), „Poptat web",
„Získat nabídku", „Zjistit více", „Konzultace zdarma", „Vyzkoušet demo".

CTA je nízkotlaké, ne agresivní prodej.

---

## 5. Struktura homepage (v tomto pořadí)

1. **Hero** — okamžitě sdělí hodnotu. Hlavní emoce = úleva, bezpečí, jasný proces. **Hero NEprodává primárně „AI" ani marketingový hype.**
   - Headline (jeden inline tok): „Váš systém pro nové zákazníky." + modře/italic inline „Online do 7 dnů." (schválený claim 2026-05-21). ⚠️ „Online do 7 dnů" je veřejný příslib termínu — držet jen dokud je reálně splnitelný (viz §9), jinak zjemnit/odebrat.
   - Subheadline: lidsky o pomoci s texty/strukturou/spuštěním a důvěryhodném webu na mobilu.
   - CTA: „Objednat konzultaci"; orientační cena v hero (od 8 900 Kč). AI/automatizace zmínit až níž jako jednu ze služeb.
2. **Problém** — zastaralý web, nízká důvěryhodnost, nízká návštěvnost, chybějící lokální SEO, zmeškané hovory a poptávky.
3. **Služby** — 3 karty: Webové stránky / Lokální SEO / AI asistent (ikona, titulek, krátký popis, odkaz na detail).
4. **Benefity** — 4–6 karet: Více zákazníků online, Nepřetržitá dostupnost, Klid v duši, Rychlé načítání, Lokální zaměření, Profesionální vzhled.
5. **Proces** — 1. Konzultace → 2. Návrh a vývoj → 3. Spuštění a podpora.
6. **Reference / testimonials** — reálné, pokud jsou; jinak čisté placeholdery připravené na reálné reference. Žádné smyšlené přehnané claims.
7. **Ceník (preview)** — 3 balíčky: Start / Business / Premium.
8. **FAQ** — Jak rychle se dostaví výsledky SEO? / Kolik stojí tvorba webu? / Jak funguje AI asistent? / Jak probíhá spolupráce? / Co se stane po spuštění webu?
9. **Kontakt / lead formulář** — jméno, e-mail, telefon, firma/web, zpráva, odeslat.

---

## 6. Detailní stránky

**/weby:** Hero „Profesionální weby na míru" → proč investovat do webu → ukázky/portfolio placeholder → proces tvorby → balíčky → benefity moderního webu → CTA → Footer.

**/lokalni-seo:** Hero „Zvyšte svoji viditelnost v okolí" → problém (zákazníci hledají online a v mapách) → řešení (Google profil, klíčová slova, recenze, lokální viditelnost) → výsledky/metriky placeholder → proces (analýza, implementace, měření) → SEO FAQ → CTA / formulář.

**/ai-asistent:** Hero „Váš 24/7 virtuální recepční" → vysvětlení AI asistenta → use cases (služby, restaurace, řemesla, retail, rezervace) → benefity (méně zmeškaných hovorů, úspora času, lepší zákaznická zkušenost) → teaser ceny → CTA (konzultace nebo demo).

**/cenik:** detailní karty balíčků (aktuální source of truth — korekce 2026-05-21):
- **Web Standard** — pro živnostníky a malé firmy; přehledný web, pomoc s texty, responzivní, formulář, základní SEO, spuštění; **8 900 Kč**.
- **Web Pro** — pro firmy s více obsahem; rozšířený web, lokální SEO základ, reference, formulář s autoodpovědí, podpora; **16 900 Kč**; označit **„Doporučená volba"**.
- CTA na ceníku: **„Nezávazně poptat web"**.
- **Externí náklady** (doména, hosting, placené nástroje, individuální napojení) řešit **zvlášť** a vždy vysvětlit předem.
- Ceny jsou orientační, finální cena potvrzená předem. Negarantuj nereálné výsledky.
- ⚠️ Staré balíčky **Start 9 990 / Business 19 990 / Premium** jsou DEPRECATED rámec — nepoužívat jako hlavní ceník.

**/kontakt:** formulář + e-mail + telefon placeholder + firemní údaje placeholder + trust text: „Ozveme se vám do 24 hodin. První konzultace je zdarma."

---

## 7. Design system

Profesionální, moderní, čistý, light-first.

**Barvy (tokeny v `src/app/globals.css`):**
- Primary: `#0D47A1` (`--brand`) — primární tlačítka a klíčové akcenty
- Secondary: `#1976D2` (`--brand-2`) — odkazy, lehčí akcenty, gradienty
- Light background: `#F9F9F9` (`--bg-muted`), bílá `#FFFFFF`
- Dark background: `#212121` (`--bg-inverse`) — footer / tmavé pásy
- Primary text: `#212121` (`--fg`), Secondary text: `#555555` (`--fg-muted`)

Modrá je hlavní barva důvěry. **Oranžová `#F2994A` ZE SPEC SE NEPOUŽÍVÁ**
(rozhodnutí majitele 2026-05-21): CTA jsou **modrá**. Žádná oranžová, zlatá,
červená jako akcent, žádný neon, žádný SaaS glow. Kontrast cílí na WCAG AA.

**Typografie:**
- Nadpisy: **Montserrat** (`--font-montserrat`). (Spec nabízí „Poppins nebo Montserrat"; Montserrat zvolen kvůli plné podpoře českých diakritik.)
- Text: **Roboto** (`--font-roboto`).
- Velikosti: H1 ~40px (text-4xl), H2 ~32px (text-3xl), H3 ~24–28px, body 16px, small 14px.

**UI styl:** čistá grid layout, bílé karty, měkké stíny, zaoblené rohy, jasný
spacing, mobile-first, žádný clutter, žádné agresivní animace, žádný tmavý/chaotický/gaming look.

**Tlačítka:**
- Primary: pozadí primární modrá, bílý text, zaoblené, ~`px-6 py-3`, hover tmavší modrá.
- Secondary: průhledné/bílé pozadí, modrý border, modrý text, hover jemně modré pozadí.
- (Akcentní CTA: spec zmiňuje oranžovou — NEPOUŽÍVAT; místo toho primární modrá.)

---

## 8. Komponenty (musí existovat / být vytvořené)

1. **Header** — logo, menu items, CTA tlačítko; desktop nav + mobilní hamburger; aria labely; sticky jen pokud neškodí UX.
2. **Footer** — logo/název firmy, navigace, kontakt, copyright, právní odkazy.
3. **HeroSection** — `headline`, `subheadline`, `ctaText`, `ctaUrl`, volitelně `image`.
4. **ServiceCard** — `icon/image`, `title`, `description`, `linkText`, `linkUrl`.
5. **BenefitCard** — `icon`, `title`, `description`.
6. **ProcessStep** — `stepNumber`, `title`, `description`, volitelně `icon`.
7. **TestimonialCard** — `text`, `authorName`, `authorRole`, volitelně `authorImage`.
8. **PricingCard** — `planName`, `price`, `features`, `isFeatured`, `ctaText`, `ctaUrl`.
9. **ContactForm** — pole: `name`, `email`, `phone`, `companyOrWebsite`, `message`; validace, přístupné labely, success message, error stav; **napojeno na stávající `/api/contact` backend (nerozbít)**.
10. **StickyCTA** (volitelné) — text „Objednat konzultaci"; jen pokud nepřekrývá obsah na mobilu.

Centralizuj znovupoužitelná data: navigace, služby, benefity, ceník, FAQ, SEO metadata.

---

## 9. SEO

- HTML `lang="cs"` (resp. `cs-CZ`).
- Každá stránka právě jedno `H1`, logická hierarchie H2/H3.
- Title + meta description pro každou stránku. České SEO-friendly slugy (`/lokalni-seo`, ne `/seo`).
- Alt texty u významových obrázků, prázdný alt u dekorativních.
- Open Graph metadata; Organization / LocalBusiness schema (placeholder údaje, dokud nejsou finální).
- Udržuj `sitemap.ts` a `robots.ts` v souladu s aktuálními routami.

**Doporučené meta tituly:**
- Domů: „AutoSmartWeby – moderní weby, lokální SEO a AI asistent"
- Weby: „Tvorba webových stránek pro malé firmy | AutoSmartWeby"
- Lokální SEO: „Lokální SEO a viditelnost na Google | AutoSmartWeby"
- AI asistent: „AI asistent a virtuální recepční 24/7 | AutoSmartWeby"
- Ceník: „Ceník webů, SEO a AI asistenta | AutoSmartWeby"
- Kontakt: „Kontakt | AutoSmartWeby"

---

## 10. Analytics / conversion tracking

Připrav event hooky / helper funkce (čistá abstrakce, nehardcoduj GA, pokud projekt
GA už nepoužívá — projekt má `src/lib/analytics.ts`, využij ho):
- `cta_hero_click`
- `cta_services_click`
- `cta_pricing_click`
- `form_submit`

---

## 11. Security minimum (kontaktní formulář)

Kontaktní formulář nesmí být pouze client-side. Stávající `/api/contact` backend
splňuje níže uvedené — **nerozbít ho**:
- POST only, server-side validace (Zod nebo ekvivalent),
- honeypot, rate limit, základní anti-spam,
- bezpečné odesílání e-mailu,
- žádné secrety v klientovi, žádné tajné hodnoty v `NEXT_PUBLIC_`, žádný `.env` v repu,
- `.env.example` pouze s názvy proměnných,
- bezpečné chybové hlášky bez interních detailů.

Zakázáno: odeslat formulář jen z klienta, vystavit API klíče do browseru,
renderovat raw HTML bez sanitizace, logovat celé osobní zprávy do veřejných logů.

---

## 12. Visual QA workflow

Po každé větší vizuální změně: lint → typecheck → build → dev server → Playwright
screenshoty desktop **1440**, tablet **768**, mobile **390** → kontrola overflow a
vizuální kvality → oprava → re-screenshot → teprve potom návrh commitu.

Kontroluj: čitelnost H1/subheadline, viditelnost CTA, spacing, zarovnání karet,
konzistentní radiusy/stíny, mobilní layout, žádný horizontální scroll, žádné překryvy,
čitelnost a přístupnost formuláře, kontrast, focus states.

Skripty: `pnpm screenshots` (`scripts/screenshots.mjs`, env `URL=...`). pnpm spouštěj
přes `corepack pnpm <script>` (pnpm není v PATH).

---

## 13. Pravidla pro změny v kódu

- Preferuj TypeScript, React/Next.js a Tailwind (projekt je používá; Tailwind 4 CSS-first, tokeny v `globals.css`).
- Nezaváděj zbytečné závislosti. Měň co nejmenší nutný rozsah, neduplikuj komponenty, neporušuj typy.
- Neodstraňuj security, SEO, právní stránky ani consent/GDPR logiku.
- Neodstraňuj produktové vrstvy z §1 (templates/preview/dotazník/api).
- Po úpravě vrať report: změněné soubory, co a proč, jaké testy proběhly, co zůstává rizikové, další krok.

---

## 14. Kritéria hotového výsledku

- Struktura webu odpovídá sitemapě (§2), navigace odpovídá sitemapě.
- Homepage dodržuje pořadí sekcí (§5). Detailní stránky existují a mají českou copy.
- Design tokeny odpovídají barvám (§7), CTA text konzistentní, ceník konzistentní.
- FAQ existuje, kontaktní formulář existuje a je napojený na backend.
- SEO metadata pro všechny stránky, jedno H1 na stránku.
- Žádné starší konfliktní verze jako aktivní kód/dokumentace.
- `pnpm build` prochází, žádné zjevné a11y / performance problémy.
- Plně responzivní (mobil/tablet/desktop), dobrá čeština bez překlepů, žádné rozbité odkazy, prázdná tlačítka ani lorem ipsum.

---

## 15. Důležité technické upozornění (Next.js)

@AGENTS.md
