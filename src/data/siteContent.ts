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
  h1: "Profesionální web pro malé firmy bez zbytečných starostí.",
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
  title: "Web pro malé firmy, které chtějí vypadat seriózně.",
  lead:
    "Nemusíte být marketér ani technický typ. Stačí, že děláte svoji práci dobře — o web se postaráme my.",
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
