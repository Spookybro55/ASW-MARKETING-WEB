# D-02 — Konverzní / UX / strategický audit Autosmartweby.cz (2026-05-24)

> **Source:** Owner request 2026-05-24 (session 95dca17e), navazuje na D-01 (2026-05-07 — technický SEO audit).
> **Author:** Claude Code (claude-opus-4-7) za Honzu/Sebastiána.
> **Branch ve chvíli auditu:** `v2/redesign` @ `7ea9b1e`, working tree clean.
> **Scope:** kompletní audit z pohledu cílovky (živnostníci, řemeslníci, lokální služby, malé firmy) a konverzí. Bez code changes.
> **Out of scope:** performance / CWV (Lighthouse), accessibility (axe), runtime ověření produkce (Vercel Preview URL nebyla k dispozici v době auditu).

---

## 1. Executive summary

1. Hero claim **"Váš systém pro nové zákazníky. Online do 7 dnů."** je service-led, ne outcome-led. Cílovka nehledá "systém"; hledá poptávky a důvěryhodný profil.
2. Subheadline končí slovem **"automatizace"** — pro tradesmana signál "to není pro mě".
3. Web **nikde nevysvětluje "proč teď"** — chybí sekce pro segment, který web roky odkládá. Největší strategický gap.
4. Mezi nav **"Kontakt"** (→ /kontakt = tým) a CTA **"Objednat konzultaci"** (→ /konzultace = formulář) je matoucí IA.
5. **"Online do 7 dnů"** je veřejný termínový slib bez krytí (CLAUDE.md to sám flagje).
6. Trust signály v heru jsou slabé — žádné mikrofakty, žádný response-time, žádná zmínka "skuteční lidé".
7. Žádná reálná ukázka realizace; PortfolioShowcase je fiktivní firma "MBM Elektrotechnik" — chip "ukázka" je málo viditelný.
8. Cenové karty nemají hned u sebe blok **"V ceně / Mimo cenu"** — "skryté náklady" jsou top obava cílovky.
9. AI asistent zabírá 1/3 hlavních služeb, přitom je NICE-TO-HAVE pro většinu cílovky.
10. Response-time microcopy ("ozveme se do 24 h") je zakopaná na /konzultace, patří k CTA v heru.
11. Problem cards v heru (Důvěra / Viditelnost / Nevím co dát) jsou silné — **nerozbít**.
12. FAQ je věcné, pokrývá 8 reálných námitek — **nerozbít**.
13. Tým na /kontakt (Tomáš / Jan / Sebastián, reálné telefony) je nejsilnější trust signál — **nerozbít**.
14. ConsultationForm s `?balicek=...` prefill funguje a snižuje friction — **nerozbít**.
15. JSON-LD, sitemap, consent gate, real fakturační údaje, vykání — **nerozbít**.

## 2. Verdikt

Web **částečně** plní účel získávat poptávky. Vizuálně i obsahově je nadprůměrný, obsahuje vše, co poptávkový web má mít. Ale **prodává spíš to, co dělá, než důvod proč to chtít právě teď** pro segment odkladačů.

- **Pomáhá:** konkrétní cena, real lidé na /kontakt, fakturační údaje, problem cards v heru, FAQ, ConsultationForm s prefill.
- **Brání:** hero komunikuje "systém" a "automatizace", chybí "proč teď", IA Kontakt × Konzultace je matoucí, "7 dnů" je rizikový slib, žádné reálné ukázky, slabé hero trust.

**Závěr:** ne doladit, ale **strategicky posunout messaging** od "co děláme" k "co tím získáte a proč teď".

## 3. Největší strategický problém (jednou větou)

> Web dnes říká "stavíme moderní weby s AI a SEO", ale ještě dostatečně neprodává, že "díky vašemu novému webu vás zákazníci najdou, uvěří vám a snadno se ozvou — a vy přestanete přicházet o poptávky kvůli tomu, že online nevypadáte věrohodně".

## 4. Doporučený nový směr

| | |
|---|---|
| Hlavní message | Profesionální web, který vám přivede zákazníky z okolí — bez agenturní složitosti a bez práce navíc. |
| Hlavní argument | Lidé si vás ověří online dřív, než zvednou telefon. Když web chybí nebo vypadá slabě, zakázka jde ke konkurenci. |
| Primární emoce | Úleva ("nemusím to řešit sám") + bezpečí ("jasná cena, reální lidi, vlastním si to") + sebevědomí ("budu konečně vypadat profesionálně"). |
| Vysvětlení hodnoty | Zákazník vás najde → pochopí → uvěří → snadno se ozve. Web jako důvěryhodnostní a poptávkový základ. |
| Cena | Cena nahoře, "V ceně / Mimo cenu" hned u karty, provozní náklady vysvětlené v ceníku. |
| Cesta k poptávce | Header CTA "Domluvit konzultaci" + drobné sekundární "Telefon" → 3 lehké kroky → krátký formulář + viditelné "Ozveme se do 24 hodin". |

## 5. MUST HAVE změny

| Pri | Problém | Proč brzdí poptávky | Změna | Soubory | S/M/L | Dopad |
|---|---|---|---|---|---|---|
| P0-1 | Subhead končí "...automatizace" | Tradesman se odpojí | Přepsat na "...aby vás zákazníci snadno našli, hned pochopili, co děláte, a měli chuť se ozvat." | `src/data/site.ts` (`homeHero.subheadline`) | S | Vysoký |
| P0-2 | Hero claim je abstraktní ("systém") | Nesděluje benefit | Zvážit variantu B nebo C ze sekce 8; rozhodnout dle ownerova preferovaného tónu | `src/data/site.ts` (`homeHero.h1Lead`/`h1Accent`) | S | Vysoký |
| P0-3 | Chybí sekce "Proč teď" | Odkladač nedostává důvod začít dnes | Nová sekce mezi PortfolioShowcase a Services (copy v sekci 9 tohoto dokumentu) | `src/app/page.tsx`, `src/data/site.ts` (`whyNow`) | M | Vysoký |
| P0-4 | "Online do 7 dnů" je slib bez krytí | Při nesplnění poškodí důvěru | Owner decision: zachovat/zjemnit/odstranit | `src/data/site.ts` (`homeHero.h1Accent`) | S | Vysoký |
| P0-5 | Nav "Kontakt" → tým, formulář je jinde | UX dichotomie, ztráta poptávek | Přejmenovat "Kontakt" → "O nás" NEBO přidat na /kontakt nahoře blok "Chcete rovnou napsat?" → /konzultace | `src/data/site.ts` (`nav.items`), `src/app/kontakt/page.tsx` | S | Vysoký |
| P0-6 | Slabé hero trust signály | Návštěvník v 5 s nemá důvod věřit | Trust strip pod hero CTA: ✓ Konkrétní lidé · ✓ Jasná cena · ✓ Vy vlastníte web · ✓ Ozveme se do 24 h | `src/components/asw/HomeHero.tsx`, `src/data/site.ts` | S | Vysoký |
| P0-7 | Žádná reálná ukázka | Generický proof, fiktivní portfolio | Doplnit 1–2 reálné realizace NEBO výraznější chip "ukázka, ne reálná firma"; přejmenovat `proof` sekci, ať nepředstírá social proof | `src/data/site.ts` (`proof`), `src/components/asw/PortfolioShowcase.tsx` | M | Vysoký |
| P0-8 | Cenové karty bez "V ceně / Mimo cenu" | "Skryté náklady" je top obava | Přidat do PricingCard: "V ceně: web + texty + spuštění · Mimo cenu: doména ~250 Kč/rok, hosting ~100 Kč/měs" | `src/components/asw/cards.tsx`, `src/data/site.ts` | M | Vysoký |
| P0-9 | AI asistent zabírá 1/3 hlavních služeb | NICE-TO-HAVE překryl hlavní hodnotu | Přesunout pod Process jako volitelné rozšíření; zúžit Services na 2 karty | `src/app/page.tsx`, `src/data/site.ts` (`services.items`, `nav.items`) | M | Střední |
| P0-10 | Response-time zakopaný na /konzultace | Trust signál patří k hero CTA | Pod hero CTA: "Ozveme se do 24 hodin · První konzultace zdarma" | `src/components/asw/HomeHero.tsx`, `src/data/site.ts` (`homeHero.trustMicrocopy`) | S | Střední |

## 6. NICE TO HAVE změny

| Nápad | Proč užitečný | Kdy | S/M/L | Dopad |
|---|---|---|---|---|
| Sticky mobile CTA "Domluvit konzultaci" | Konstantní přístup k CTA | Fáze 2 | S | Střední |
| Telefon + WhatsApp pull-down | Tradesmani radši telefonují | Fáze 3 | M | Nízký–Střední |
| /reference se 2–4 reálnými mini-case-studies | Reálný důkaz | Až budou reference | M | Vysoký |
| Sekce "Nejčastější námitka — a co na ni říkáme" | Aktivní disarming | Fáze 1 | M | Střední |
| Hero chip "Konzultace zdarma" nad H1 | Snižuje vnímané riziko | Fáze 1 | S | Střední |
| Krátké video "Jak konzultace probíhá" | Snižuje obavu z neznáma | Až tým bude OK | L | Vysoký |
| Srovnání "Šablonový generátor vs. agentura vs. my" | Pozicování proti dvěma extrémům | Fáze 1 | M | Vysoký |
| /sluzby přehledová stránka | Zjednodušení nav | Fáze 2 | M | Střední |
| Telefon nad foldem na /kontakt | Tradesman chce zavolat, ne psát | Fáze 1 | S | Střední |
| Reactivace "Reality Check" sekce s veřejnými daty | "Proč teď" silnější s daty | Až po due-diligence dat | M | Vysoký |

## 7. Doporučená nová homepage struktura

1. Header (floating pill) — beze změny.
2. Hero — přepsaný H1+subhead+trust strip.
3. Problem cards v heru — beze změny.
4. PortfolioShowcase — viditelnější chip "ukázka".
5. **NOVÁ "Proč teď, ne za rok"** ← klíč.
6. Services (zúženo na 2 karty: Web + Lokální SEO; AI asistent přesunout).
7. whatYouGet checklist — beze změny.
8. Process — + 1–2 řádky "Volitelné rozšíření: AI asistent".
9. Pricing (preview) — + "V ceně / Mimo cenu" v kartě.
10. Proof — doplnit reálnou ukázku nebo přejmenovat.
11. FAQ — beze změny.
12. Final CTA band — beze změny.
13. Footer — beze změny.

> Sekce "Benefits" (6 karet "Více zákazníků online" atd.) — překrývá whatYouGet a problem cards. Owner decision o zachování / sloučení / odstranění.

## 8. Hero copy návrhy

### Varianta A — konzervativní (default)

```
H1:         Profesionální web, který vám přivede zákazníky z okolí.
Subhead:    Postavíme přehledný a důvěryhodný web pro vaši firmu — i bez
            hotových textů a fotek. Zákazník vás najde, pochopí, co děláte,
            a snadno se ozve.
Trust line: Web obvykle od 8 900 Kč · Pomůžeme s texty · Jasná cena předem
Primary:    Domluvit nezávaznou konzultaci
Secondary:  Podívat se, jak to funguje
Micro:      Ozveme se do 24 hodin · První konzultace je zdarma
```

### Varianta B — silněji "proč teď"

```
H1:         Lidé si vás ověří online dřív, než zvednou telefon.
Subhead:    Když váš web chybí nebo vypadá slabě, zakázka jde ke
            konkurenci. Postavíme vám profesionální web, kterému zákazník
            uvěří během pár vteřin — a snadno se ozve.
Trust line: Web od 8 900 Kč · Pomůžeme s texty · Vy vlastníte web i obsah
Primary:    Domluvit nezávaznou konzultaci
Secondary:  Co tím získáte
Micro:      Ozveme se do 24 hodin · Konzultace zdarma · Bez závazku
```

### Varianta C — nejvíc konverzní

```
H1:         Nový web pro vaši firmu. Bez agenturní složitosti a šablon.
Subhead:    Postavíme přehledný web s vlastními texty, který funguje na
            mobilu, je dohledatelný v Googlu a vede zákazníka rovnou ke
            kontaktu. Od 8 900 Kč, jasná cena předem.
Trust line: Reální lidé · Vy vlastníte web · Ozveme se do 24 hodin
Primary:    Chci nezávazně zjistit cenu
Secondary:  Co dostanu za 8 900 Kč
Micro:      První konzultace zdarma · Pomůžeme i s texty a strukturou
```

**Doporučení:** A jako bezpečný default. B pokud cílovka přijme "ověří si vás online" framing. C pokud chce maximálně přímý konverzní web.

## 9. Návrh sekce "Proč to řešit teď"

```
Eyebrow:   Proč teď, ne za rok
Title:     Web odkládáte? Tady jsou důvody, proč to nemusí počkat.
Lead:      Není to o módě. Je to o tom, jak dnes zákazníci hledají,
           rozhodují se a komu zavolají. Tyhle čtyři situace jsou
           pravděpodobně známé — a každá z nich vás stojí poptávky.

1) Zákazník si vás ověří dřív, než zavolá.
   Ve 2026 si skoro každý před prvním kontaktem vyhledá vaši firmu.
   Když nenajde nic — nebo najde web, který vypadá zastarale — často
   raději zavolá někomu jinému.

2) Konkurence ve vašem oboru web už má.
   Nemusí být lepší než vy. Stačí, že vypadá důvěryhodněji
   v okamžiku, kdy se zákazník rozhoduje. To je rozdíl, kvůli
   kterému utíkají poptávky pryč.

3) Doporučení už dnes končí na webu.
   I když vás někdo doporučí, dotyčný si vás stejně ověří online.
   Bez webu jste pro něj těžko zařaditelný — a tím se stáváte
   méně bezpečnou volbou než firma se srozumitelnou stránkou.

4) Bez webu nemůžete růst přes Google a mapy.
   Bez webu a Google profilu prakticky nemůžete získávat
   zákazníky, kteří vás nezná žádný známý. Otevíráte si tím
   jediný kanál — doporučení — který má strop.

Mikrocopy CTA:
"Pojďme to nezávazně projít. Řekneme vám, co dává smysl pro váš obor."
→ Domluvit konzultaci (zdarma, do 24 hodin)
```

**Umístění:** mezi PortfolioShowcase a Services. **Vizuálně:** tmavý podklad, 2×2 karty na desktopu, vertical stack na mobilu. **Bezpečnost:** žádná čísla, žádné statistiky, žádná procenta.

## 10. Kontakt × Konzultace

- **`/kontakt`** zachovat jako trust page (tým, fakturační údaje). Přidat nahoru viditelný kontaktní blok: `info@autosmartweb.cz`, `+420 722 525 872`, link "Raději pošlu formulář → /konzultace".
- **`/konzultace`** zachovat jako formulář (stávající ConsultationForm).
- **Nav CTA** zachovat "Objednat konzultaci" → /konzultace.
- **Nav položka "Kontakt"** — owner decision: ponechat NEBO přejmenovat na "O nás" / "Tým".
- **Volitelně:** tichý telefon v navbar napravo od CTA (desktop only).

**Adresy (z `team` array v `src/data/site.ts`):**
- `info@autosmartweb.cz` — obecný
- `t.maixner@autosmartweb.cz` — Tomáš Maixner, +420 722 525 872
- `j.bezemek@autosmartweb.cz` — Jan Bezemek, +420 773 466 699
- `s.fridrich@autosmartweb.cz` — Sebastián Fridrich, +420 601 557 018

## 11. Implementační plán (fázovaný)

### Fáze 1 — copy / content (S, low risk)
- Soubory: `src/data/site.ts`, případně `src/components/asw/HomeHero.tsx`.
- Změny: hero claim, subheadline, trust strip; rozhodnutí o "Online do 7 dnů".
- Kontrola: typecheck + build + screenshot homepage 1440 & 390.

### Fáze 2 — IA + "Proč teď"
- Soubory: `src/data/site.ts` (`whyNow`), `src/app/page.tsx`, `src/app/kontakt/page.tsx`, `src/data/site.ts` (`nav.items`).
- Změny: nová sekce mezi PortfolioShowcase a Services; horní kontaktní blok na /kontakt; volitelný rename nav.
- Kontrola: typecheck + build + Playwright screenshoty + ověřit POST na /api/contact.

### Fáze 3 — trust + ceník + AI reorganizace
- Soubory: `src/components/asw/PortfolioShowcase.tsx`, `src/components/asw/cards.tsx`, `src/data/site.ts`.
- Změny: viditelný chip "ukázka"; "V ceně / Mimo cenu" v PricingCard; AI asistent pod Process.
- Kontrola: screenshoty + manuální klik všemi CTA + ověřit `?balicek=` prefill.

### Fáze 4 — vizuální a mobilní doladění
- Sticky mobile CTA, telefon v navbar (desktop), spacing doladění.
- Kontrola: 1440 / 768 / 390.

### Fáze 5 — měření
- `src/lib/analytics.ts` — events `cta_*_click`, `form_submit`, `view_section` pro "Proč teď".
- GA4 DebugView + Tag Assistant.

## 12. Co neměnit

- `/api/contact` backend (server-side validace, honeypot, rate limit).
- ConsultationForm `?balicek=...` prefill.
- Floating pill header (sjednocená geometrie napříč routama, ověřeno měřením ±1 px).
- Sjednocený dark background system (po `4e10905` + `7ea9b1e`).
- Team karty na /kontakt (Tomáš/Jan/Sebastián, reálné telefony) — nejsilnější trust.
- Skutečné fakturační údaje (Synkedo s.r.o., IČO 24571831).
- FAQ — 8 reálných námitek, věcný tón.
- Vykání, no AI-hype, "od X Kč" copy rules z CLAUDE.md.
- `whatYouGet` checklist (jen zvážit posunout do hero trust strip).
- JSON-LD Organization + LocalBusiness, sitemap, robots, consent gate.

## 13. Otázky pro majitele (max 10)

1. **Hero claim** — varianta A / B / C, nebo kombinace?
2. **"Online do 7 dnů"** — vždy splnitelné / občas ne / aspirace? → zachovat / zjemnit / odstranit.
3. **AI asistent** — zachovat jako hlavní pilíř, nebo přesunout do "volitelné rozšíření" a stáhnout z nav?
4. **Nav "Kontakt"** — zachovat, nebo přejmenovat na "O nás" / "Tým"?
5. **Reálná ukázka realizace** — máme 1–2 reálné weby, které lze zveřejnit?
6. **Telefon v navbar napravo od CTA** (desktop) — ano / ne?
7. **"Proč teď" sekce** — 4 navržené důvody, nebo jiný úhel (obory)?
8. **"V ceně / Mimo cenu"** — konkrétní čísla (~250 Kč doména, ~100 Kč/měs hosting), nebo kvalitativní popis?
9. **Sticky mobile CTA** — ano / ne?
10. **GA4 reporting** — kdo to konzumuje? Pokud Tomáš/Jan, navrhneme weekly summary.

---

**Stav repa ve chvíli auditu:** branch `v2/redesign` @ `7ea9b1e`, working tree clean.
Žádné code changes. Implementace fáze 1 čeká na Q1 + Q2 (hero claim + "Online do 7 dnů").
