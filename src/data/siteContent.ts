/*
 * v2 site content (2026-05).
 *
 * All copy below is derived from the deep search strategy docs in
 * Analysis/_extracted/. Source priority:
 *   • Web_Design_Master_strategie_Autosmartweby.txt — hero, blueprint, copy bank
 *   • Autosmartweby_Master_Context_Strategy.txt — message architecture, FAQ bank
 *   • Autosmartweby_Master_Context_Konkurencni_Strategie.txt — pricing tiers
 *
 * Do not edit copy here without checking the strategy guardrails first —
 * the wording was chosen specifically to avoid AI-hype, agency-speak, and
 * cheap-template framing. See feedback_positioning_guardrails in memory.
 */

export const siteContact = {
  // Tomáš handles first-call follow-up; sebastian@ is the technical/admin alias.
  phone: "+420 722 525 872",
  phoneHref: "tel:+420722525872",
  email: "tomas@autosmartweb.cz",
  emailFallback: "sebastian@autosmartweb.cz",
  legalName: "Synkedo s.r.o.",
  brandName: "Autosmartweby",
  // IČO ověřeno před v2 launch QA (Synkedo s.r.o.).
  ico: "24571831",
  address: {
    street: "Příčná 1892/4",
    city: "Praha 1",
    zip: "110 00",
    country: "Česká republika",
  },
} as const;

export const nav = {
  brand: "Autosmartweby",
  links: [
    { href: "#sluzby", label: "Co dostanete" },
    { href: "#cenik", label: "Ceník" },
    { href: "#ukazky", label: "Ukázky" },
    { href: "#jak-to-probiha", label: "Jak to probíhá" },
    { href: "#faq", label: "FAQ" },
  ],
  ctaLabel: "Nezávazně probrat web",
  ctaHref: "#kontakt",
} as const;

export const hero = {
  eyebrow: "Pro živnostníky, řemeslníky a malé firmy",
  h1: "Profesionální web pro živnostníky a malé firmy bez zbytečných starostí.",
  lead:
    "Pomůžeme vám s texty, strukturou i spuštěním webu, který působí důvěryhodně a zákazníkům usnadní ozvat se. Nejčastěji kolem 10 000 Kč podle rozsahu.",
  microcopy:
    "Nemusíte mít připravené texty ani přesné zadání. Stačí pár informací o vaší službě.",
  primaryCta: { label: "Nezávazně probrat web", href: "#kontakt" },
  secondaryCta: { label: "Podívat se na ukázky", href: "#ukazky" },
} as const;

export const trustStrip = {
  items: [
    { label: "Jasná cena předem", hint: "Žádné skryté poplatky" },
    { label: "Pomoc s texty", hint: "Nemusíte mít připravené zadání" },
    { label: "Web pod vaší kontrolou", hint: "Doména, hosting, obsah vlastníte vy" },
    { label: "Spuštění po odsouhlasení", hint: "Bez tlaku, bez závazku předem" },
  ],
} as const;

export const audience = {
  eyebrow: "Pro koho to je",
  title: "Poznáváte se?",
  lead:
    "Tohle je pro lidi, kteří dělají svoji práci dobře, ale nemají čas řešit texty, techniku ani složitý marketingový projekt. Stačí, že umíte, co děláte — o web se postaráme my.",
  items: [
    {
      title: "Řemeslníci a živnostníci",
      text:
        "Elektrikáři, instalatéři, zedníci, autoservisy, plynaři. Web, který lidé najdou na Googlu a pochopí, co děláte.",
    },
    {
      title: "Lokální služby",
      text:
        "Salony, gastro, fitness, doprava. Adresa, otvírací hodiny, rezervace a důvěryhodné kontakty — bez složitostí.",
    },
    {
      title: "Malé firmy a OSVČ",
      text:
        "Konzultanti, servisy, výroba na zakázku. Web jako důvěryhodná vizitka, která připraví zákazníka před prvním hovorem.",
    },
    {
      title: "Nové provozovny",
      text:
        "Začínáte? Připravíme základ, na kterém se dá růst — bez agenturních cen a bez závislosti na webaři.",
    },
  ],
} as const;

export const problemSolution = {
  eyebrow: "Co řešíme",
  title: "Nemusíte mít připravené zadání. Stačí vědět, co děláte.",
  lead:
    "Typický klient nemá čas chystat texty, fotky ani technické detaily. Proto vás provedeme krok za krokem — z toho, co o své práci řeknete jednou větou, sestavíme web.",
  items: [
    {
      problem: "„Nemám texty a nevím, co napsat.“",
      solution: "Pomůžeme. Z krátkého popisu vaší práce sestavíme základní obsah, který si pak schválíte.",
    },
    {
      problem: "„Bojím se skrytých poplatků.“",
      solution: "Cenu řekneme předem a rozepíšeme, co je v ceně a co ne. Hosting a doménu vysvětlíme transparentně.",
    },
    {
      problem: "„Nechci být rukojmí webaře.“",
      solution: "Doménu, obsah a přístupy vlastníte vy. Po spuštění si můžete web vést sami nebo s námi — podle dohody.",
    },
    {
      problem: "„Nechci řešit technické detaily.“",
      solution: "Nemusíte. Mobil, SEO základ, kontakt, formulář — to všechno nastavíme za vás a vysvětlíme lidsky.",
    },
  ],
} as const;

export const process = {
  eyebrow: "Jak to probíhá",
  title: "Tři kroky bez složitostí.",
  lead: "Žádné dlouhé workshopy, žádná agenturní zadání. Jednoduchý proces, který stihneme rychle.",
  steps: [
    {
      number: "01",
      title: "Řeknete nám, co děláte",
      text:
        "Krátký dotazník nebo 15minutový hovor. Stačí pár vět o vaší práci, zákaznících a oboru. Žádné marketingové zadání.",
    },
    {
      number: "02",
      title: "Připravíme návrh",
      text:
        "Sestavíme strukturu webu a první návrh textů přizpůsobený vašemu oboru. Ukážeme, jak bude web vypadat, ještě než cokoliv zaplatíte.",
    },
    {
      number: "03",
      title: "Spustíme web",
      text:
        "Po vašem odsouhlasení web nasadíme, propojíme s doménou a předáme vám přístupy. Drobné úpravy řešíme s vámi i po spuštění.",
    },
  ],
} as const;

export const deliverables = {
  eyebrow: "Co dostanete",
  title: "Konkrétní výstup, ne agenturní balík.",
  lead: "Každý web obsahuje to, co malá firma potřebuje, aby ji lidé našli, pochopili a snadno kontaktovali.",
  included: [
    "Struktura webu přizpůsobená vašemu oboru",
    "Základní texty (pomůžeme s tím, co nemáte připravené)",
    "Responzivní zobrazení na mobilu i desktopu",
    "Klikatelné kontakty — telefon, e-mail, formulář",
    "Základní SEO nastavení (meta, sitemap, strukturovaná data)",
    "Spuštění a předání přístupů k doméně i hostingu",
    "Vysvětlení vlastnictví a provozu po spuštění",
  ],
  notIncludedTitle: "Co naceníme zvlášť",
  notIncluded: [
    "Profesionální focení a video",
    "Rozsáhlé texty nad rámec hlavních stránek",
    "Individuální aplikace, e-shop nebo rezervační systém",
    "Placené reklamní kampaně",
  ],
} as const;

export const pricing = {
  eyebrow: "Ceník",
  title: "Jasná cena podle rozsahu.",
  lead:
    "Tři balíčky podle toho, co potřebujete. Finální cena vždy předem, žádné skryté poplatky.",
  packages: [
    {
      id: "start",
      name: "Start web",
      tagline: "Pro živnostníka, který chce důvěryhodnou prezentaci",
      // Cenovou formulaci držíme v souladu s hero ("nejčastěji kolem 10 000 Kč")
      // a brand voice — vyhýbáme se agresivnímu "od X Kč" framingu.
      priceFrom: "kolem 10 000 Kč",
      features: [
        "1–3 stránky (homepage, služby, kontakt)",
        "Pomoc se základními texty",
        "Responzivní zpracování",
        "Klikatelné kontakty + formulář",
        "Základní SEO nastavení",
        "Spuštění a předání přístupů",
      ],
      ctaLabel: "Probrat Start web",
      featured: false,
    },
    {
      id: "lokalni",
      name: "Lokální web",
      tagline: "Pro službu nebo řemeslníka, který chce poptávky z okolí",
      priceFrom: "15 000 – 25 000 Kč",
      features: [
        "Více stránek (služby, reference, FAQ, kontakt)",
        "Rozšířené texty pro váš obor",
        "Lokální SEO základ (Google profil, mapa)",
        "Reference a ukázky",
        "Formulář s automatickou odpovědí",
        "Spuštění a 30 dní podpory zdarma",
      ],
      ctaLabel: "Probrat Lokální web",
      featured: true,
      badge: "Nejčastější volba",
    },
    {
      id: "web-plus",
      name: "Web + chytrý proces",
      tagline: "Pro firmu, která chce kromě webu i šetřit čas",
      priceFrom: "25 000 – 45 000 Kč",
      features: [
        "Vše z Lokálního webu",
        "Rezervační formulář nebo jednoduchá objednávka",
        "Automatické notifikace a follow-upy",
        "Napojení na e-mail nebo jednoduchý CRM zápis",
        "Lokální SEO rozšíření",
        "Spuštění a 60 dní podpory",
      ],
      ctaLabel: "Probrat Web + proces",
      featured: false,
    },
  ],
  footnote:
    "Doménu a hosting si pořídíte sami, nebo je obstaráme za vás — provozní náklady transparentně vysvětlíme předem (typicky 200–400 Kč měsíčně).",
  careCopy:
    "Péče po spuštění (úpravy obsahu, drobné rozšíření, monitoring) je volitelná a domluvíme ji podle potřeby — neúčtujeme paušál, který nepotřebujete.",
} as const;

export const portfolio = {
  eyebrow: "Ukázky",
  title: "Jak může vypadat web pro vaši firmu.",
  lead:
    "Ukázky vycházejí z reálných oborových šablon. Každý web upravujeme podle konkrétního zadání klienta.",
  items: [
    {
      slug: "alvito-s-r-o-plynoservis-praha",
      sector: "Plynoservis / pohotovostní výjezdy",
      city: "Praha",
      goal: "Důvěryhodný web s nonstop kontaktem a jasnou specializací",
      previewPath: "/preview2/alvito-s-r-o-plynoservis-praha",
      template: "community-expert",
    },
    {
      slug: "demo-elektrikar",
      sector: "Elektroinstalace",
      city: "Brno a okolí",
      goal: "Lokální poptávky pro malé i větší zakázky",
      previewPath: "/preview/demo-elektrikar",
      template: "emergency-professional",
    },
    {
      slug: "demo-instalater",
      sector: "Instalatérské práce",
      city: "Plzeň",
      goal: "Rychlý kontakt + ceník typických prací",
      previewPath: "/web-pro-instalatera",
      template: "landing",
    },
  ],
  fallbackNote:
    "Vlastní web na klíč připravíme i pro obor, který tady není — strukturu a copy přizpůsobíme po krátkém hovoru.",
} as const;

// Launch-safe replacement for the original placeholder testimonials.
// Per the 2026-05 strategy review: do not publish invented quotes, even
// pseudonymous ones — they read as real client voices and that's not OK.
// Real client references will be added later, one at a time, only after
// written consent.
export const references = {
  eyebrow: "Spolupráce",
  title: "Na čem si při spolupráci zakládáme.",
  lead:
    "Místo smyšlených citací raději popíšeme, co u nás můžete při spolupráci čekat.",
  items: [
    {
      title: "Jasně víte, co se bude dít",
      text:
        "Na začátku si ujasníme rozsah, cenu a další krok. Žádné složité zadání ani dlouhé technické schůzky.",
    },
    {
      title: "Pomůžeme s texty a strukturou",
      text:
        "Nemusíte mít hotové texty. Zeptáme se na vaši službu, zákazníky a lokalitu a pomůžeme obsah poskládat.",
    },
    {
      title: "Cena a rozsah jsou domluvené předem",
      text:
        "Dopředu víte, co je v ceně, co by bylo navíc a jak se řeší provoz nebo úpravy po spuštění.",
    },
    {
      title: "Web má působit důvěryhodně",
      text:
        "Cílem není efektní showreel, ale přehledný web, který zákazníkům rychle vysvětlí, co děláte a jak se ozvat.",
    },
  ],
  microcopy:
    "Reálné reference doplníme postupně u klientů, kteří nám dají souhlas se zveřejněním.",
} as const;

export const comparison = {
  eyebrow: "Proč ne jinak",
  title: "Praktická cesta mezi DIY a agenturou.",
  lead:
    "Pokud chcete sami sestavit web ve Webnode nebo Wixu, nebo platit drahou agenturu — obojí má smysl. Pro většinu malých firem je ale Autosmartweby ten nejjednodušší střed.",
  columns: [
    {
      id: "diy",
      title: "DIY šablona",
      points: [
        { label: "Cena", value: "0 – 5 000 Kč" },
        { label: "Čas vašeho zapojení", value: "10–30 hodin" },
        { label: "Pomoc s texty", value: "Žádná" },
        { label: "Lokální SEO", value: "Záleží na vás" },
        { label: "Riziko amatérského dojmu", value: "Vysoké" },
      ],
    },
    {
      id: "asw",
      title: "Autosmartweby",
      featured: true,
      points: [
        { label: "Cena", value: "od 10 000 Kč" },
        { label: "Čas vašeho zapojení", value: "1–2 hodiny" },
        { label: "Pomoc s texty", value: "Ano, v ceně" },
        { label: "Lokální SEO", value: "Základ v ceně" },
        { label: "Riziko amatérského dojmu", value: "Nízké" },
      ],
    },
    {
      id: "agentura",
      title: "Drahá agentura",
      points: [
        { label: "Cena", value: "50 000 – 250 000 Kč" },
        { label: "Čas vašeho zapojení", value: "Workshopy, schůzky" },
        { label: "Pomoc s texty", value: "Ano, ale dráž" },
        { label: "Lokální SEO", value: "Často placené navíc" },
        { label: "Riziko amatérského dojmu", value: "Nízké" },
      ],
    },
  ],
} as const;

export const midCta = {
  title: "Nejste si jistí, který balíček dává smysl?",
  lead: "Napište nám pár vět a nezávazně to probereme.",
  ctaLabel: "Nezávazně probrat web",
  ctaHref: "#kontakt",
} as const;

export const faq = {
  eyebrow: "FAQ",
  title: "Nejčastější otázky před začátkem.",
  lead: "Co se ptáme my, co se ptáte vy. Pokud něco chybí, napište — odpovíme bez závazku.",
  items: [
    {
      q: "Kolik web stojí?",
      a:
        "Menší weby pro živnostníky a malé firmy se obvykle pohybují kolem 10 000 Kč (balíček Start). Lokální web s rozšířeným obsahem mezi 15 000 a 25 000 Kč. Přesnou cenu řekneme po krátkém zjištění, co potřebujete — předem víte, co je v ceně a co ne.",
    },
    {
      q: "Co když nemám texty?",
      a:
        "Nevadí. S tím běžně pomáháme. Zeptáme se vás na služby, zákazníky a lokalitu — z toho připravíme srozumitelný obsah, který si pak schválíte nebo upravíte.",
    },
    {
      q: "Co když nemám fotky?",
      a:
        "Můžeme začít i bez nich. Doporučíme, jaké fotky postupně dodat, případně použijeme dočasné realistické vizuály a později je vyměníme za vaše.",
    },
    {
      q: "Jak dlouho to celé trvá?",
      a:
        "Záleží na rozsahu a rychlosti dodání podkladů. Start web bývá hotový za 5–10 dní, Lokální web za 2–3 týdny. Cílem je jednoduchý proces bez zbytečných schůzek.",
    },
    {
      q: "Budu web vlastnit?",
      a:
        "Ano. Doména, obsah i přístupy jsou vaše. Předem si řekneme, jak je řešena registrace domény, hosting a kdo má jaké přístupy. Po spuštění nejste na nás nijak závislí.",
    },
    {
      q: "Musím platit měsíční paušál?",
      a:
        "Ne automaticky. Hosting a doména stojí typicky 200–400 Kč měsíčně podle volby (transparentně vysvětlíme). Péče po spuštění je volitelná — žádný paušál, který nepotřebujete.",
    },
    {
      q: "Můžu si web upravovat sám?",
      a:
        "Drobné textové úpravy ano. Větší rozšíření (nové sekce, oborové stránky) řešíme s vámi po spuštění — předem nacenené.",
    },
    {
      q: "Děláte i SEO?",
      a:
        "Základní SEO struktura, metadata a sitemap jsou v ceně každého balíčku. Negarantujeme konkrétní pozice na Googlu — slibujeme, že web bude technicky připravený, dohledatelný a rychle načítaný.",
    },
    {
      q: "Co když po spuštění budu chtít změnu?",
      a:
        "Drobné úpravy (telefonní číslo, doplnění textu) řešíme operativně. Větší změny (nová sekce, redesign) naceníme předem.",
    },
    {
      q: "Pracujete jen v Praze?",
      a:
        "Sídlíme v Praze, ale pracujeme online po celé ČR. Osobní schůzka není potřeba — vše vyřešíme telefonem, e-mailem nebo videohovorem.",
    },
  ],
  closing: {
    text: "Nenašli jste odpověď?",
    ctaLabel: "Zeptat se bez závazku",
    ctaHref: "#kontakt",
  },
} as const;

export const team = {
  eyebrow: "Kdo za tím stojí",
  title: "Dva lidé, žádná anonymní agentura.",
  lead:
    "U Autosmartwebů víte, s kým mluvíte. Žádné call centrum, žádný anonymní nástroj — web s vámi řeší konkrétní lidé.",
  members: [
    {
      initials: "S",
      name: "Sebastián",
      role: "Web a technické řešení",
      text:
        "Postaví web, nasadí ho a srozumitelně vysvětlí, jak funguje doména, hosting a přístupy.",
    },
    {
      initials: "T",
      name: "Tomáš",
      role: "Poptávky a komunikace s klientem",
      text:
        "Ozve se vám na poptávku, probere s vámi rozsah a cenu a provede vás celým procesem.",
    },
  ],
} as const;

export const finalCta = {
  eyebrow: "První krok",
  title: "Napište nám pár vět. Ozveme se s dalším jednoduchým krokem.",
  lead:
    "Stačí pár informací o vaší službě. Žádné závazné zadání. Reagujeme typicky do jednoho pracovního dne.",
  contactOptions: [
    { type: "phone", label: "Zavolejte", value: "+420 722 525 872" },
    { type: "email", label: "Napište e-mail", value: "tomas@autosmartweb.cz" },
  ],
  formMicrocopy:
    "Odesláním souhlasíte se zpracováním kontaktních údajů pro vyřízení vaší poptávky. Žádný marketing, žádný newsletter.",
} as const;

export const footer = {
  description:
    "Autosmartweby pomáhají živnostníkům, řemeslníkům a malým firmám získat profesionální web bez složitého zadávání, agenturních cen a technických starostí.",
  columns: [
    {
      title: "Web a služby",
      links: [
        { href: "#sluzby", label: "Co dostanete" },
        { href: "#cenik", label: "Ceník" },
        { href: "#ukazky", label: "Ukázky" },
        { href: "#jak-to-probiha", label: "Jak to probíhá" },
        { href: "#faq", label: "FAQ" },
      ],
    },
    {
      title: "Kontakt",
      links: [
        { href: "tel:+420722525872", label: "+420 722 525 872" },
        { href: "mailto:tomas@autosmartweb.cz", label: "tomas@autosmartweb.cz" },
        { href: "/brand-dotaznik", label: "Brand dotazník" },
      ],
    },
    {
      title: "Právní",
      links: [
        { href: "/zasady-ochrany-osobnich-udaju", label: "Zásady ochrany osobních údajů" },
      ],
    },
  ],
} as const;

/* ============================================================================
 * v0 redesign data extension (2026-05-15).
 *
 * Below are the data exports for the v0-inspired homepage redesign. They
 * coexist with the legacy exports above so v2 components can keep working
 * until each section is migrated.
 *
 * Source: design-reference/v0-autosmartweby/*.png + README.md
 * Strategy: copy and section structure follow the v0 draft as closely as
 * possible while every claim is run through CLAUDE.md guardrails. Anything
 * the v0 mockup asserts that we cannot back up (specific numbers, fake
 * testimonials, fake statuses) is either removed, softened or flagged with
 * a TODO so it cannot ship to production unchecked.
 *
 * Scan rules before launch:
 *   • grep "TODO(verify-before-prod)" — every match must be reviewed.
 *   • grep "STATISTIC:UNVERIFIED"     — every stat needs a cited source.
 *   • Fake testimonials are explicitly NOT here. references.items above
 *     stays launch-safe (principles of collaboration). When real client
 *     references arrive, replace via dedicated commits with consent links.
 * ========================================================================== */

/**
 * v0 navbar (Commit "feat(content)" — Commit 1 of v0 redesign).
 *
 * Five floating-pill nav items per v0 layout:
 *   Domů / Weby / Lokální SEO / AI Recepční / Kontakt
 *
 * "AI Recepční" has no dedicated page yet — it is a feature inside the
 * Web + chytrý proces tier. Anchor target points to the deliverables
 * bento (#balicek) where AI reception will live as one of the bento
 * tiles. When/if a dedicated page ships, swap href to /ai-recepcni.
 */
export const navV0 = {
  brand: "Autosmartweby",
  links: [
    { href: "#hero", label: "Domů" },
    { href: "#weby", label: "Weby" },
    { href: "#lokalni-seo", label: "Lokální SEO" },
    { href: "#balicek", label: "AI Recepční" }, // TODO(verify-before-prod): point to /ai-recepcni once that page exists.
    { href: "#kontakt", label: "Kontakt" },
  ],
  ctaLabel: "Kontakt",
  ctaHref: "#kontakt",
} as const;

/**
 * v0 hero — dark, centered, with italic accent on the time-to-launch line.
 *
 * H1 splits into a "lead" line and an italic "accent" line so the component
 * can render the visual emphasis from v0 ("...Online do 7 dní." in italic
 * brand-sky color) without baking markup into the string.
 *
 * accentNote MUST render somewhere visible (microcopy under H1 or as a tiny
 * footnote). It scopes the "7 dní" claim so it never reads as a blanket
 * legal guarantee — see CLAUDE.md §4 (no garantujeme).
 */
export const heroV0 = {
  h1Lead: "Váš systém pro získávání zákazníků.",
  h1Accent: "Online do 7 dní.",
  accentNote:
    "U jednodušších webů podle rozsahu a dodaných podkladů. Větší projekty naceníme a domluvíme termín předem.",
  lead: "Webové stránky, lokální SEO a chytrá automatizace pro živnostníky a malé firmy, kteří chtějí růst — bez technických starostí a bez agenturních cen.",
  primaryCta: { label: "Začít", href: "#kontakt" },
  // Small badge above the 3 problem cards under hero.
  problemsBadge: "Co vás brzdí?",
  problemCards: [
    {
      icon: "browser-x",
      title: "Nemáte web",
      text: "Začněte s profesionální stránkou připravenou pro mobily i Google. Spuštění během dnů, ne týdnů.",
      ctaLabel: "Chci web",
      ctaHref: "#cenik",
    },
    {
      icon: "search-warn",
      title: "Nejste vidět v Googlu",
      text: "Nastavíme lokální SEO základ, Google profil a strukturu webu tak, aby vás zákazníci ve vašem okolí našli.",
      ctaLabel: "Chci být vidět",
      ctaHref: "#lokalni-seo",
    },
    {
      icon: "phone-missed",
      title: "Zmeškáváte hovory",
      text: "Automatické odpovědi a follow-upy zachytí poptávky, i když právě nemůžete zvednout telefon.",
      ctaLabel: "Chci automatizaci",
      ctaHref: "#balicek",
    },
  ],
} as const;

/**
 * services — „Tři cesty k růstu".
 *
 * Three alternating rows: copy on one side, preview card on the other.
 * Component picks left/right side per index.
 *
 * preview.kind drives which mock the component renders. Add new kinds
 * by extending the union and adding the renderer in <Services />.
 */
export const services = {
  eyebrow: "CO NABÍZÍME",
  titleLead: "Tři cesty k",
  titleAccent: "růstu.",
  lead: "Jeden partner. Jeden systém. Postavený kolem vašeho podnikání.",
  items: [
    {
      number: "01",
      anchorId: "weby",
      title: "Tvorba webu",
      text: "Moderní, rychlé a přehledné weby optimalizované pro mobily, SEO-ready a postavené tak, aby konvertovaly. Spuštění obvykle během dnů.",
      ctaLabel: "Chci web",
      ctaHref: "#cenik",
      preview: {
        kind: "checklist" as const,
        title: "Optimalizace výkonu",
        items: ["Responzivní design", "Konverzní architektura", "Základní SEO"],
      },
    },
    {
      number: "02",
      anchorId: "lokalni-seo",
      title: "Lokální SEO",
      text: "Postavíme lokální viditelnost krok za krokem — Google profil, struktura webu, mapy a klíčová slova pro vaše město a obor. Bez slibů konkrétních pozic.",
      ctaLabel: "Zviditelnit firmu",
      ctaHref: "#cenik",
      preview: {
        kind: "live-feed" as const,
        title: "Živý přenos",
        items: [
          "Nová poptávka přijata",
          "Lead kvalifikován",
          "Rezervace potvrzena",
          "Follow-up naplánován",
        ],
      },
    },
    {
      number: "03",
      anchorId: "automatizace",
      title: "Automatizace",
      text: "Vaše firma odpovídá na každý hovor a zprávu. Zapisujeme poptávky, kvalifikujeme leady a nikdy nepropásnete zákazníka — ani když spíte.",
      ctaLabel: "Vyzkoušet",
      ctaHref: "#balicek",
      preview: {
        kind: "leads-feed" as const,
        title: "Zachycení leadů",
        statusLabel: "24/7",
        items: [
          { label: "Lead konvertován → Schůzka domluvena", state: "Rezervováno" },
          { label: "Zmeškaný hovor z +420 777 …", state: "Auto-SMS odeslána" },
          { label: "Lead odpověděl: „Ano, mám zájem.“", state: "Kvalifikuji…" },
          { label: "Follow-up #2 spuštěn", state: "Schůzka domluvena" },
        ],
      },
    },
  ],
} as const;

/**
 * deliverablesBento — „Váš kompletní růstový balíček".
 *
 * 7 product/service tiles in a bento layout. Each tile carries an icon
 * key, name and short description. `badge` is rendered as a chip in the
 * card corner — used to mark items that ship in the higher Web+ chytrý
 * proces tier (so visitors do not assume Start tier includes everything).
 *
 * Anchored at #balicek so the navbar "AI Recepční" link can land here.
 */
export const deliverablesBento = {
  eyebrow: "CO JE ZAHRNUTO",
  titleLead: "Váš kompletní růstový",
  titleAccent: "balíček",
  lead: "Vše potřebné pro důvěryhodnou online prezentaci a chytrý prodejní proces. Co je standardní součást a co je doplněk vyšších balíčků, ukazujeme transparentně.",
  items: [
    {
      icon: "browser",
      title: "Webové stránky na míru",
      text: "Jednoduchý nebo komplexnější web, vždy optimalizovaný pro mobily, SEO-ready a postavený tak, aby konvertoval.",
      badge: null,
    },
    {
      icon: "map-pin",
      title: "Lokální SEO systém",
      text: "20–40 stránkový SEO web, nastavení Google Profilu, 50+ citací v katalozích a konzistentní struktura pro lokální vyhledávání.",
      badge: null,
    },
    {
      icon: "phone-circle",
      title: "Automatizace",
      text: "Vaše firma odpovídá na každý hovor a chat 24/7. Zapisuje poptávky, kvalifikuje leady a nikdy nezmešká zákazníka.",
      badge: { label: "Doplněk", tier: "Web + chytrý proces" },
    },
    {
      icon: "star",
      title: "Automatizace recenzí",
      text: "Automatická SMS a e-mailová sekvence, která spokojené Google poptávce automaticky pošle pozvánku k recenzi. Volitelný QR kód pro provoz.",
      badge: { label: "Doplněk", tier: "Web + chytrý proces" },
    },
    {
      icon: "google-business",
      title: "Google Business profil",
      text: "Kompletní nastavení a optimalizace vašeho Google profilu, aby vás zákazníci ve vašem okolí našli první.",
      badge: { label: "Doplněk", tier: "Lokální web a vyšší" },
    },
    {
      icon: "mail-business",
      title: "Firemní e-mail",
      text: "Profesionální e-mailová adresa typu vy@vasefirma.cz, která buduje důvěryhodnost od prvního dne.",
      badge: { label: "Doplněk", tier: "Web + chytrý proces" },
    },
    {
      icon: "qr-code",
      title: "QR a tištěné materiály",
      text: "Jednoduché tisknuté materiály s QR kódem na váš web, recenze nebo rezervační formulář — pro provoz nebo terénní službu.",
      badge: { label: "Doplněk", tier: "na vyžádání" },
    },
  ],
} as const;

/**
 * results — „Výsledky, na kterých záleží" (4 metric tiles).
 *
 * v0 ships strong numbers ("Až +300 %", "7–14 dní"). We keep the visual
 * tile structure but every tile MUST be reviewed before production:
 *
 *   - hard numbers without a cited source are not allowed in launch copy
 *   - either replace the metric with a verifiable claim, OR
 *   - reframe the tile as a qualitative benefit (no number)
 *
 * Each tile carries `verifyBeforeProd: true` and a `todo` note so the
 * launch checklist can grep them. UI may render numbers as-is during
 * design QA; they will be sanitized before going to production.
 */
export const results = {
  eyebrow: "VÝSLEDKY",
  title: "Výsledky, na kterých záleží",
  // No lead — visual rhythm handled by tile grid alone.
  // STATISTIC:UNVERIFIED — see TODO(verify-before-prod) on each tile.
  tiles: [
    {
      icon: "trend-up",
      metric: "Až +300 %",
      label: "více poptávek",
      note: "díky webu, který prodává za vás",
      verifyBeforeProd: true,
      todo: "TODO(verify-before-prod): replace with our own measured uplift OR remove the number and keep the qualitative benefit only. Source must be cited or the metric removed.",
    },
    {
      icon: "clock",
      metric: "7–14 dní",
      label: "od zadání k webu",
      note: "Rychle dodán bez zbytečného zdržování.",
      verifyBeforeProd: true,
      todo: "TODO(verify-before-prod): align with FAQ (Start web 5–10 dní, Lokální web 2–3 týdny). Either rephrase to match or document why this band is correct.",
    },
    {
      icon: "automation",
      metric: "Úspora času",
      label: "díky automatizaci",
      note: "Méně rutiny, více času na vaší práci.",
      verifyBeforeProd: false,
      todo: null,
    },
    {
      icon: "eye",
      metric: "Lepší viditelnost",
      label: "v Googlu",
      note: "Více návštěvníků z lokálního vyhledávání.",
      verifyBeforeProd: false,
      todo: null,
    },
  ],
} as const;

/**
 * realityCheck — „Každý den bez online prezentace…".
 *
 * Three stat cards from v0. Statistics are commonly cited industry numbers
 * (search behaviour, missed-call cost), BUT we must not ship them without
 * a real source. Each stat carries `STATISTIC:UNVERIFIED` and a sourceTodo.
 *
 * Suggested sources to verify before production:
 *   - ČSÚ "Informační společnost v číslech" (search behaviour stats)
 *   - Google Consumer Insights (search-before-purchase data)
 *   - Forrester / Salesforce State of the Connected Customer (after-hours)
 *   - HubSpot / Invoca research (cost of missed calls)
 *
 * Until each `source` field is filled with a real, public, dated citation,
 * the numbers are placeholder copy and MUST NOT go to production.
 */
export const realityCheck = {
  badge: "Kontrola reality",
  titleLead: "Každý den bez online prezentace",
  titleAccent: "vás stojí zákazníky",
  lead: "Zatímco čekáte, vaše konkurence získává poptávky, rezervuje zákazky a buduje si důvěryhodnost online. Do přichystaného webu je třeba investovat čas — bez něj se náklady kupí každý den.",
  // STATISTIC:UNVERIFIED — every stat below needs a cited public source
  // before launch. Do NOT invent sources.
  stats: [
    {
      percentage: "92 %",
      headline: "zákazníků hledá online",
      description:
        "Pokud vás na Googlu nenajdou, mají velké riziko, že si vyberou konkurenci, která online viditelná je.",
      source: null,
      sourceTodo:
        "TODO(verify-before-prod): cite ČSÚ / Google Consumer Insights stat for share of consumers researching local services online.",
    },
    {
      percentage: "67 %",
      headline: "chce reagovat mimo pracovní dobu",
      description:
        "Bez automatizace přicházíte o zákazníky, kteří poptávají večer nebo o víkendu — typicky když se konečně dostanou ke správě svých záležitostí.",
      source: null,
      sourceTodo:
        "TODO(verify-before-prod): cite Forrester / Salesforce State of the Connected Customer (after-hours customer service expectation).",
    },
    {
      percentage: "82 %",
      headline: "zmeškaný hovor = ztracený zákazník",
      description:
        "Nezvednutý telefon ze známé pohotovostní situace 24/7 málokdy znamená druhou šanci. Zákazník typicky zavolá další firmě v seznamu.",
      source: null,
      sourceTodo:
        "TODO(verify-before-prod): cite HubSpot / Invoca / similar published study on missed-call conversion loss in local services.",
    },
  ],
  closingCta: {
    text: "Přestaňte nechávat zákazníky na stole. Získejte systém, který pracuje jako vy.",
    ctaLabel: "Začít",
    ctaHref: "#kontakt",
  },
} as const;

/**
 * referencesV0 — dark testimonials-styled section.
 *
 * IMPORTANT: This is LAUNCH-SAFE. The v0 mockup ships four invented
 * testimonials with full names and made-up companies (Petr Novák /
 * Autoservis Novák, Martin Dvořák / Auto Dvořák s.r.o., Jana Svobodová /
 * Pekařství U Jany, Tomáš Kučera / Autosmartweby Plzeň). Per CLAUDE.md
 * §9 and the project guardrails (memory: feedback_positioning_guardrails)
 * we do NOT publish invented quotes, even pseudonymous ones.
 *
 * Until real client references with written consent exist, the items
 * below carry the launch-safe collaboration principles from `references`
 * above, formatted to fit the dark testimonial-card layout (5-star slot
 * left empty for principles — only real testimonials get stars).
 *
 * When a real reference is added:
 *   - kind: "testimonial"
 *   - quote: real client quote (verbatim, with consent)
 *   - author: real first + last name
 *   - role / company: real role + verified company
 *   - rating: 1–5 (only for real testimonials)
 *   - consentRef: link to or id of the consent record
 */
export const referencesV0 = {
  eyebrow: "REFERENCE KLIENTŮ",
  // Title intentionally NOT "Důvěřují nám rostoucí firmy" — that would
  // imply social proof we cannot back up yet.
  titleLead: "Co u nás při spolupráci",
  titleAccent: "čekáte",
  lead: "Místo smyšlených citací popisujeme, jak spolupráce s námi opravdu vypadá. Reálné reference doplníme postupně, vždy se souhlasem klienta.",
  items: [
    {
      kind: "principle" as const,
      quote:
        "Na začátku si ujasníme rozsah, cenu a další krok. Žádné složité zadání ani dlouhé technické schůzky.",
      author: null,
      role: null,
      company: null,
      rating: null,
      consentRef: null,
    },
    {
      kind: "principle" as const,
      quote:
        "Nemusíte mít hotové texty. Zeptáme se na vaši službu, zákazníky a lokalitu a pomůžeme obsah poskládat.",
      author: null,
      role: null,
      company: null,
      rating: null,
      consentRef: null,
    },
    {
      kind: "principle" as const,
      quote:
        "Dopředu víte, co je v ceně, co by bylo navíc a jak se řeší provoz nebo úpravy po spuštění.",
      author: null,
      role: null,
      company: null,
      rating: null,
      consentRef: null,
    },
    {
      kind: "principle" as const,
      quote:
        "Cílem není efektní showreel, ale přehledný web, který zákazníkům rychle vysvětlí, co děláte a jak se ozvat.",
      author: null,
      role: null,
      company: null,
      rating: null,
      consentRef: null,
    },
  ],
  microcopy:
    "Reálné reference doplníme postupně u klientů, kteří nám dají souhlas se zveřejněním.",
} as const;

/**
 * philosophy — „Poznejte Autosmartweby" section.
 *
 * Replaces the previous Team-only block with a richer brand-narrative
 * area: who we are, why we do it, how we think. The Team module (two
 * real people, Sebastián + Tomáš) stays in `team` above and is rendered
 * either inside this section or right next to it depending on layout
 * decision in the implementation commit.
 */
export const philosophy = {
  eyebrow: "KDO ZA TÍM STOJÍ",
  titleLead: "Poznejte",
  titleAccent: "Autosmartweby",
  // 3 short paragraphs — keep punchy and human, no agency-speak.
  intro: [
    "Autosmartweby vznikly z přesvědčení, že každá firma si zaslouží profesionální online prezentaci, která skutečně přináší zákazníky. Specializujeme se na tvorbu webových stránek, lokální SEO a chytrá řešení, která spojí web s vaším prodejním procesem.",
    "Naše weby nejsou jen digitální vizitky — jsou to automatizované systémy, které pracují i tehdy, když právě nemůžete zvedat telefon. Pomáháme živnostníkům a malým firmám být vidět v Googlu, získávat poptávky a šetřit čas díky chytré automatizaci.",
    "Věříme v férové ceny, rychlou komunikaci a měřitelné výsledky. Každý projekt bereme osobně a děláme ho s cílem, aby vaše firma rostla.",
  ],
  philosophy: {
    eyebrow: "NAŠE FILOZOFIE",
    quote:
      "Skvělý web není jen digitální vizitka — je to automatizovaný prodejní nástroj. Nestavíme stránky, stavíme systémy, které vám šetří čas a přinášejí zákazníky.",
  },
  closingSlogan: {
    lead: "Máte firmu, které věříte. Pomozte jí být",
    accent: "vidět.",
  },
} as const;

/**
 * ctaBand — modrý CTA band „Připraveni získat více poptávek?".
 *
 * Single full-width brand-blue band placed between the philosophy
 * section and the footer. Three short trust pointers under the headline
 * to soften the ask.
 */
export const ctaBand = {
  title: "Připraveni získat více poptávek?",
  lead: "Ozvěte se nám a navrhneme řešení na míru vaší firmě.",
  ctaLabel: "Nezávazná konzultace",
  ctaHref: "#kontakt",
  features: ["Rychlá odpověď", "Žádné závazky", "Lidský přístup"],
} as const;

/**
 * footerV0 — multi-column footer per v0 layout.
 *
 * Columns: Navigace / Služby / Kontakt + brand block in the leading slot.
 *
 * Legal links:
 *   - "Ochrana osobních údajů" → existing /zasady-ochrany-osobnich-udaju
 *   - "Obchodní podmínky"      → planned route /obchodni-podminky.
 *     The route does not exist yet. Component MUST handle status="planned"
 *     gracefully (e.g. render the link disabled until the page ships, OR
 *     simply hide it). Do NOT silently link to a 404.
 *
 * No "Systém operační" status badge from v0 — we have no real status page.
 */
export const footerV0 = {
  description:
    "Pomáháme živnostníkům a malým firmám růst díky moderním webům, lokálnímu SEO a chytrým automatizacím.",
  columns: [
    {
      title: "Navigace",
      links: [
        { href: "#hero", label: "Domů", status: "live" as const },
        { href: "#weby", label: "Služby", status: "live" as const },
        { href: "#reference", label: "Reference", status: "live" as const },
        { href: "#kontakt", label: "Kontakt", status: "live" as const },
      ],
    },
    {
      title: "Služby",
      links: [
        { href: "#weby", label: "Tvorba webu", status: "live" as const },
        { href: "#lokalni-seo", label: "Lokální SEO", status: "live" as const },
        { href: "#balicek", label: "Automatizace", status: "live" as const },
        // "Správa a opravy" is a real service we offer (siteContent.pricing.careCopy
        // mentions it). Anchor to FAQ where it is described, until a dedicated
        // page exists.
        { href: "#faq", label: "Správa a opravy", status: "live" as const },
      ],
    },
    {
      title: "Kontakt",
      links: [
        {
          href: "tel:+420722525872",
          label: "+420 722 525 872",
          status: "live" as const,
        },
        {
          href: "mailto:tomas@autosmartweb.cz",
          label: "tomas@autosmartweb.cz",
          status: "live" as const,
        },
        {
          href: "#",
          label: "Praha a celé Česko",
          status: "static" as const,
        },
      ],
    },
  ],
  legal: [
    {
      label: "Ochrana osobních údajů",
      href: "/zasady-ochrany-osobnich-udaju",
      status: "live" as const,
    },
    {
      label: "Obchodní podmínky",
      href: "/obchodni-podminky",
      status: "planned" as const,
      // TODO(verify-before-prod): replace status with "live" once the
      // /obchodni-podminky route ships, OR remove this entry if no
      // T&C page is planned for launch.
    },
  ],
  copyrightTemplate: "© {year} Synkedo s.r.o. — Autosmartweby. Všechna práva vyhrazena.",
} as const;

/**
 * socialLinks — Facebook / Instagram / LinkedIn placeholder block.
 *
 * Accounts are planned but not live yet. Each link carries
 * status="planned" and href="#" so the component can render an icon
 * stub (disabled / dimmed) without ever sending a visitor to a fake
 * profile.
 *
 * When an account goes live:
 *   - flip status to "live"
 *   - replace href with the real URL
 *   - bump verifiedAt to the current ISO date
 *
 * NEVER link to someone else's profile or a parked URL.
 */
export const socialLinks = [
  {
    platform: "facebook" as const,
    label: "Facebook",
    href: "#",
    status: "planned" as const,
    ariaLabel: "Autosmartweby na Facebooku (zatím v přípravě)",
    verifiedAt: null,
  },
  {
    platform: "instagram" as const,
    label: "Instagram",
    href: "#",
    status: "planned" as const,
    ariaLabel: "Autosmartweby na Instagramu (zatím v přípravě)",
    verifiedAt: null,
  },
  {
    platform: "linkedin" as const,
    label: "LinkedIn",
    href: "#",
    status: "planned" as const,
    ariaLabel: "Autosmartweby na LinkedInu (zatím v přípravě)",
    verifiedAt: null,
  },
] as const;
