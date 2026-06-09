/*
 * AutoSmartWeby — centralized marketing-site content (source-of-truth spec
 * 2026-05-21). Single place for nav, services, benefits, process, pricing,
 * FAQ, testimonials, per-page SEO and shared copy. New components/pages read
 * from here. The legacy src/data/siteContent.ts stays until the old v2
 * components are removed (Stage H) so the build never breaks mid-rebuild.
 *
 * Copy rules (CLAUDE.md §3): natural Czech, vykání, no AI-hype, no guaranteed
 * results, prices indicative with "od". No invented testimonials.
 */

/** Real, verified company / contact details (carried over, IČO verified). */
export const contact = {
  brandName: "AutoSmartWeby",
  legalName: "Synkedo s.r.o.",
  ico: "24571831",
  phone: "+420 722 525 872",
  phoneHref: "tel:+420722525872",
  email: "info@autosmartweb.cz",
  emailHref: "mailto:info@autosmartweb.cz",
  address: {
    street: "Příčná 1892/4",
    city: "Praha 1",
    zip: "110 00",
    country: "Česká republika",
  },
  region: "Praha a celé Česko",
  responseTime: "Ozveme se vám do 24 hodin. První konzultace je zdarma.",
} as const;

/* Team — real people behind AutoSmartWeb, shown on the /kontakt trust page.
   Centralized so contact details live in one place (no hardcoded copies).
   Split into `lead` (Tomáš — first contact, the visual dominant of the section)
   and `tech` (Jan + Sebastián — the realisation team). Photos live in
   public/team/ (optimised studio portraits on a dark background). */
export const team = {
  lead: {
    slug: "tomas",
    name: "Tomáš Maixner",
    cardHeading: "Nejdřív se ozve Tomáš",
    role: "První kontakt a domluva projektu",
    bio: "Tomáš s vámi projde, co má nový web řešit, jaké služby chcete ukázat a co už máte připravené. Pomůže vám zorientovat se v ceně, rozsahu i dalším kroku — bez technických řečí a zbytečného tlaku.",
    photo: "/team/tomas.jpg",
    alt: "Tomáš Maixner z AutoSmartWeby",
    initials: "TM",
    phone: "+420 722 525 872",
    phoneHref: "tel:+420722525872",
    email: "t.maixner@autosmartweb.cz",
    emailHref: "mailto:t.maixner@autosmartweb.cz",
    badges: [
      "Vysvětlí postup",
      "Pomůže s podklady",
      "Domluví rozsah",
      "Bez zbytečného tlaku",
    ],
    ctaLabel: "Domluvit se s Tomášem",
    ctaHref: "mailto:t.maixner@autosmartweb.cz",
  },
  tech: [
    {
      slug: "jan",
      name: "Jan Bezemek",
      role: "Návrh webu, struktura a technická realizace",
      bio: "Jan řeší, jak web poskládat, aby zákazník rychle pochopil vaše služby a mohl se jednoduše ozvat. Stará se o strukturu stránky, obsahové bloky, formuláře a praktickou funkčnost webu.",
      photo: "/team/jan.jpg",
      alt: "Jan Bezemek z AutoSmartWeby",
      initials: "JB",
      phone: "+420 773 466 699",
      phoneHref: "tel:+420773466699",
      email: "j.bezemek@autosmartweb.cz",
      emailHref: "mailto:j.bezemek@autosmartweb.cz",
    },
    {
      slug: "sebastian",
      name: "Sebastián Fridrich",
      role: "Vývoj, technické řešení a spuštění",
      bio: "Sebastián se stará o technickou část realizace — responzivitu, napojení formulářů, výkon, funkčnost a spuštění webu na doméně.",
      photo: "/team/sebastian.jpg",
      alt: "Sebastián Fridrich z AutoSmartWeby",
      initials: "SF",
      phone: "+420 601 557 018",
      phoneHref: "tel:+420601557018",
      email: "s.fridrich@autosmartweb.cz",
      emailHref: "mailto:s.fridrich@autosmartweb.cz",
    },
  ],
} as const;

/** Primary + alternate CTA labels (CLAUDE.md §4). */
export const cta = {
  primary: "Objednat konzultaci",
  poptat: "Poptat web",
  poptatWeb: "Nezávazně poptat web",
  nabidka: "Získat nabídku",
  vice: "Zjistit více",
  konzultaceZdarma: "Konzultace zdarma",
  // `demo` label odebrán (audit Phase A 2026-05-25) — žádné veřejné demo
  // neexistuje, slovo bylo broken promise. AI asistenta probíráme přes
  // /konzultace.
  href: "/konzultace",
} as const;

/** Top navigation — matches the sitemap (CLAUDE.md §2). AI asistent was
    intentionally demoted from a top-level menu item (2026-05-24): it is now
    represented through the broader "Automatizace" entry (homepage anchor),
    while /ai-asistent stays accessible as a detail subpage of automation. */
export const nav = {
  brand: contact.brandName,
  items: [
    { href: "/", label: "Domů" },
    { href: "/weby", label: "Weby" },
    { href: "/lokalni-seo", label: "Lokální SEO" },
    { href: "/automatizace", label: "Automatizace" },
    { href: "/cenik", label: "Ceník" },
    { href: "/kontakt", label: "Kontakt" },
  ],
  cta: { label: cta.primary, href: cta.href },
} as const;

/** Per-page SEO metadata (CLAUDE.md §9). */
export const seo = {
  home: {
    title: "AutoSmartWeby – weby, lokální SEO a automatizace pro malé firmy",
    description:
      "Profesionální weby, lokální SEO a praktické automatizace pro malé a střední firmy v Česku. Buďte vidět, získejte více zákazníků a nepřicházejte o poptávky. Konzultace zdarma.",
    path: "/",
  },
  weby: {
    title: "Tvorba webových stránek pro malé firmy | AutoSmartWeby",
    description:
      "Profesionální weby na míru pro malé a střední firmy. Rychlé, přehledné a optimalizované pro mobil i Google. Pomůžeme s texty i strukturou. Konzultace zdarma.",
    path: "/weby",
  },
  lokalniSeo: {
    title: "Lokální SEO a viditelnost na Google | AutoSmartWeby",
    description:
      "Zvyšte svoji viditelnost v okolí. Google profil, klíčová slova, recenze a lokální SEO, aby vás zákazníci ve vašem městě našli první. Bez slibů konkrétních pozic.",
    path: "/lokalni-seo",
  },
  aiAsistent: {
    title: "AI asistent a virtuální recepční 24/7 | AutoSmartWeby",
    description:
      "Váš 24/7 virtuální recepční. AI asistent odpoví zákazníkům, zachytí poptávky a zmeškané hovory a ušetří vám čas. Nezávazně to probereme na konzultaci.",
    path: "/ai-asistent",
  },
  automatizace: {
    title: "Automatizace pro malé firmy | AutoSmartWeby",
    description:
      "Jednoduché automatizace pro malé firmy: automatické odpovědi, rezervace, zápis poptávek a AI asistent jako volitelný doplněk.",
    path: "/automatizace",
  },
  cenik: {
    title: "Ceník webů, lokálního SEO a automatizací | AutoSmartWeby",
    description:
      "Přehledné balíčky Web Standard a Web Pro včetně prvního roku provozu webu. Ceny platí pro běžný rozsah a potvrdíme je předem. Bez skrytých poplatků, doplňky zvlášť.",
    path: "/cenik",
  },
  kontakt: {
    title: "Kontakt — kdo za AutoSmartWeby stojí | AutoSmartWeby",
    description:
      "Poznejte AutoSmartWeby. Za každým webem stojí konkrétní lidé, kteří chtějí, aby vaše firma byla vidět a získávala nové zákazníky. Kontakty na tým a obecný e-mail.",
    path: "/kontakt",
  },
  konzultace: {
    title: "Objednat nezávaznou konzultaci | AutoSmartWeby",
    description:
      "Napište nám pár informací a ozveme se vám s doporučením dalšího postupu. Konzultace je nezávazná, cenu a rozsah potvrdíme předem.",
    path: "/konzultace",
  },
} as const;

/* ── Homepage content ───────────────────────────────────────────────────── */

/*
 * Dark premium hero (owner art-direction 2026-05-21). H1 splits into a white
 * lead line + a blue-highlighted accent line. Problem cards live INSIDE the
 * hero (do not repeat a light problem section right after). Secondary CTA
 * targets #jak-to-funguje (the process section).
 */
export const homeHero = {
  // Outcome-first headline (2026-05-25, audit D-02 P0-1/P0-2). Drops the
  // abstract „systém" framing — tradesmen hledají poptávky a důvěryhodnost,
  // ne „systém".
  h1Lead: "Web, který zákazníci najdou a pochopí.",
  // Bezpečnější forma slibu termínu (2026-05-25). „Online do 7 dnů." byl
  // bezpodmínečný veřejný slib; nahrazeno „První verze obvykle do 7 dnů."
  // — žádná garance, drží obchodní sílu, méně rizika při skluzu. Podmínka
  // („běžný rozsah, dodané podklady") je vykreslená jako `deliveryNote`
  // pod trust mikrocopy, ať hero accent zůstane krátký a čitelný.
  h1Accent: "První verze obvykle do 7 dnů.",
  // Outcome-led subheadline bez „automatizace" / „systému" / „AI" / techno
  // termínů (audit D-02 žlutý bod přesunut do zelené iterace 2026-05-25).
  subheadline:
    "Postavíme vám přehledný web, který zákazníkům rychle vysvětlí, co děláte, proč vám mohou věřit a jak se vám ozvat.",
  primaryCta: { label: "Chci nezávazně zjistit cenu", href: "/konzultace" },
  secondaryCta: { label: "Podívat se, jak to funguje", href: "#jak-to-funguje" },
  // Audit Phase C 2026-05-26: nahrazen poslední bullet „První verze do 7 dnů…"
  // (termín už říká hero accent) za dva ověřitelné trust signály — soft owner­
  // ship („Vlastnictví a přístupy řešíme předem" — bezpečnější než tvrdé „Web
  // je váš") a „Česká firma s IČO" (verifikuje footer IČO 24571831). Drží 4
  // bullety, nepřeplácává hero.
  trustMicrocopy:
    "Od 11 800 Kč včetně prvního roku provozu · Pomůžeme s texty · Vlastnictví a přístupy řešíme předem · Česká firma s IČO",
  // Sekundární kontaktní mikrocopy hned pod CTA (audit D-02 zelený bod #7).
  // Klikatelný e-mail i telefon. Drží se sekundární vůči hlavnímu CTA.
  contactLine: {
    prefix: "Raději rovnou napsat?",
    email: contact.email,
    emailHref: contact.emailHref,
    phone: contact.phone,
    phoneHref: contact.phoneHref,
  },
  problemsLabel: "CO VÁS MOŽNÁ BRZDÍ?",
  problemCards: [
    {
      icon: "shield",
      title: "Web nepůsobí důvěryhodně",
      text: "Zákazník vás najde, ale během pár vteřin si není jistý, jestli vám má napsat.",
      ctaLabel: "Zlepšit důvěru webu",
      ctaHref: "/weby",
    },
    {
      icon: "search",
      title: "Lidé vás na Googlu nenajdou",
      text: "Bez základního lokálního SEO přicházíte o poptávky z okolí.",
      ctaLabel: "Zvýšit viditelnost",
      ctaHref: "/lokalni-seo",
    },
    {
      icon: "file-text",
      title: "Nevíte, co dát na web",
      text: "Nemusíte mít hotové texty ani zadání. Provedeme vás tím krok za krokem.",
      ctaLabel: "Zjistit postup",
      ctaHref: "#jak-to-funguje",
    },
  ],
} as const;

/* Samostatná „Proč teď" sekce mezi PortfolioShowcase a Services
   (audit D-02 přesun 2026-05-25). Dříve krátký blok v hero — vytaženo ven,
   ať hero zůstane vzdušné. Tón: lidský, žádné strašení, žádné statistiky.
   Tři kompaktní body bez agresivního negativního framingu. */
export const whyNow = {
  eyebrow: "Proč teď",
  title: "Web není jen vizitka. Často rozhoduje, komu zákazník zavolá.",
  lead:
    "I když většina zakázek přijde přes doporučení, zákazníci si firmu často ověří online. Přehledný web pomůže vysvětlit, co děláte, proč vám věřit a jak se vám ozvat.",
  cards: [
    {
      icon: "search",
      title: "Zákazník si vás ověří online",
      text: "Když nic nenajde nebo web působí zastarale, může zvolit konkurenci.",
    },
    {
      icon: "users",
      title: "Doporučení často končí na webu",
      text: "I doporučený zákazník si chce ověřit služby, fotky, kontakt a cenu.",
    },
    {
      icon: "map-pin",
      title: "Web otevírá cestu k dohledatelnosti",
      text: "Bez přehledného webu se hůř buduje viditelnost v Googlu a mapách.",
    },
  ],
  cta: {
    label: "Nezávazně zjistit, co dává smysl",
    href: "/konzultace",
  },
} as const;

export const services = {
  eyebrow: "Co děláme",
  title: "Co pro vás zařídíme",
  lead:
    "Web není jen hezká stránka. Má lidem rychle vysvětlit, co děláte, proč vám věřit a jak se vám ozvat.",
  items: [
    {
      icon: "globe",
      title: "Webové stránky",
      description:
        "Připravíme web, který působí profesionálně, funguje na mobilu a jasně vysvětlí vaši nabídku.",
      linkText: "Více o webech",
      linkUrl: "/weby",
    },
    {
      icon: "map-pin",
      title: "Lokální SEO",
      description:
        "Pomůžeme nastavit základní dohledatelnost, aby vás lidé z okolí snáze našli na Googlu.",
      linkText: "Více o lokálním SEO",
      linkUrl: "/lokalni-seo",
    },
    {
      icon: "zap",
      title: "Automatizace pro malé firmy",
      description:
        "Jednoduché chytré procesy, které šetří čas — formuláře, automatické odpovědi, rezervace, zápis poptávky do tabulky nebo CRM. AI asistent jako volitelný doplněk.",
      linkText: "Zjistit možnosti automatizace",
      linkUrl: "/automatizace",
    },
  ],
} as const;

/* "Co dostanete v základu" — what the customer actually gets (launch-safe,
   practical). Rendered as a check-list grid on the homepage. */
export const whatYouGet = {
  eyebrow: "V ceně",
  title: "Co dostanete v základu",
  lead: "Žádná překvapení. Tohle je součástí každého webu, na kterém spolupracujeme.",
  items: [
    "Struktura webu podle vašeho oboru",
    "Pomoc s texty",
    "Responzivní vzhled",
    "Kontaktní formulář",
    "Základní SEO",
    "Jasné předání a spuštění",
  ],
} as const;

export const benefits = {
  eyebrow: "Proč AutoSmartWeby",
  title: "Co tím získáte",
  items: [
    { icon: "users", title: "Více zákazníků online", description: "Web a SEO přivedou lidi, kteří vaši službu právě teď hledají." },
    { icon: "clock", title: "Nepřetržitá dostupnost", description: "Web a automatizace zachytí poptávku i mimo pracovní dobu, o víkendu i v noci." },
    { icon: "shield", title: "Klid v duši", description: "Jasná cena předem, srozumitelný proces a podpora po spuštění." },
    { icon: "zap", title: "Rychlé načítání", description: "Weby stavíme tak, aby byly svižné na mobilu i na pomalém připojení." },
    { icon: "map-pin", title: "Lokální zaměření", description: "Cílíme na zákazníky ve vašem městě a okolí, ne na celý internet." },
    { icon: "sparkles", title: "Profesionální vzhled", description: "Web, který působí důvěryhodně hned v prvních vteřinách." },
  ],
} as const;

export const process = {
  eyebrow: "Postup",
  title: "Jak to probíhá",
  steps: [
    {
      stepNumber: 1,
      title: "Řeknete nám, co děláte",
      description: "Stačí stručně popsat firmu, služby a lokalitu. Nemusíte mít hotové texty.",
    },
    {
      stepNumber: 2,
      title: "Připravíme návrh směru",
      description: "Navrhneme strukturu, obsah a rozsah tak, aby dával smysl pro váš obor.",
    },
    {
      stepNumber: 3,
      title: "Postavíme a doladíme web",
      description: "Web připravíme, upravíme podle zpětné vazby a otestujeme na mobilu i desktopu.",
    },
    {
      stepNumber: 4,
      title: "Spustíme a předáme",
      description: "Před spuštěním víte, co je hotové, co vlastníte a jak řešit další úpravy.",
    },
  ],
} as const;

/**
 * Testimonials — LAUNCH-SAFE placeholders. No invented quotes, names or
 * companies (CLAUDE.md §3). These describe how the collaboration works.
 * Replace with real, consented testimonials (author/role/company filled in)
 * when available.
 */
/* Launch-safe trust/proof — NO invented testimonials, names or numbers.
   Replaces a testimonials section with concrete promises about how the work
   is done. Real references get added later, with client consent. */
export const proof = {
  eyebrow: "Důvěra",
  title: "Důvěra se nestaví sliby, ale jasným postupem",
  cards: [
    { icon: "check", title: "Jasný rozsah předem" },
    { icon: "shield", title: "Žádné skryté poplatky" },
    { icon: "file-text", title: "Pomoc s obsahem" },
    { icon: "users", title: "Web pod vaší kontrolou" },
  ],
  text: "Reálné ukázky a reference budeme doplňovat postupně. Už teď ale stavíme každý web tak, aby měl jasnou strukturu, fungoval na mobilu a pomáhal zákazníkům jednoduše se ozvat.",
} as const;

/* ── Pricing (preview on home, full on /cenik) ────────────────────────────── */

/*
 * Pricing — newer source of truth (owner correction 2026-06-09):
 * Headline prices bundle the first year of provoz (domain + hosting):
 * Web Standard 11 800 Kč (web 8 900 + provoz 2 900), Web Pro 20 800 Kč
 * (web 16 900 + provoz 3 900, Doporučená volba). The 8 900 / 16 900 split
 * lives ONLY in the FAQ breakdown, never on the cards. After year one the
 * provoz renews at real cost, explained up front — no hidden fee. Paid
 * add-ons (logo, e-shop, advanced SEO, …) are priced separately.
 * The older Start 9 990 / Business 19 990 / Premium framing is deprecated
 * and must NOT be used as the main pricing.
 */
export const pricing = {
  eyebrow: "Ceník",
  title: "Jasná cena předem, žádné překvapení",
  lead: "Vyberte si podle rozsahu. Finální cenu i rozsah vždy potvrdíme předem.",
  note: "Cena platí pro běžný rozsah podle balíčku. První rok provozu webu je v ceně. Po roce se provoz obnovuje podle skutečných nákladů, které vám vždy řekneme předem. Doplňky jako logo, focení, pokročilé SEO, e-shop, rezervační systém, online platby, vícejazyčnost nebo napojení na externí systémy se naceňují samostatně podle rozsahu.",
  packages: [
    {
      id: "standard",
      planName: "Web Standard",
      badge: "Nejrychlejší start",
      price: "11 800 Kč",
      priceNote: "Včetně prvního roku provozu.",
      tagline:
        "Jednostránkový profesionální web pro živnostníka nebo menší firmu, která chce rychle působit důvěryhodně a získávat poptávky.",
      features: [
        "Jednostránkový web / landing page",
        "5–7 přehledných sekcí",
        "Pomoc se strukturou a texty",
        "Kontaktní formulář, telefon a e-mail",
        "Responzivní vzhled",
        "Základní SEO a spuštění",
        "První rok provozu v ceně",
      ],
      isFeatured: false,
      ctaText: "Chci Web Standard",
      ctaUrl: "/konzultace?produkt=web-standard",
    },
    {
      id: "pro",
      planName: "Web Pro",
      badge: "Doporučená volba",
      price: "20 800 Kč",
      priceNote: "Včetně prvního roku provozu.",
      tagline:
        "Menší plnohodnotný web pro firmu, která potřebuje více prostoru pro služby, reference, ceník a lokální důvěryhodnost.",
      features: [
        "Homepage + 4–6 stránek nebo sekcí",
        "Detailnější prezentace služeb",
        "Reference, realizace nebo ceník",
        "Lokální SEO základ",
        "Měření návštěv a hlavních kliků",
        "2 kola úprav",
        "První rok provozu v ceně",
      ],
      isFeatured: true,
      ctaText: "Chci Web Pro",
      ctaUrl: "/konzultace?produkt=web-pro",
    },
  ],
  comparison: {
    title: "Srovnání balíčků",
    // Audit Phase A 2026-05-25: 12 řádků → 6 klíčových odlišovacích.
    // Detaily texty / služby / ceník / analytika / revize jsou už v cenových
    // kartách a v „V ceně / Řeší se zvlášť" bloku — tabulka má sloužit jako
    // rychlé porovnání rozhodovacích kritérií, ne kompletní spec sheet.
    rows: [
      { label: "Cena", standard: "11 800 Kč", pro: "20 800 Kč" },
      { label: "Typ webu", standard: "Jednostránkový web / landing page", pro: "Menší plnohodnotný web" },
      { label: "Rozsah", standard: "Cca 5–7 sekcí na jedné stránce", pro: "Homepage + 4–6 stránek/sekcí" },
      { label: "SEO", standard: "Základní technické SEO", pro: "Základní lokální SEO" },
      { label: "Reference", standard: "Jednoduchý blok, pokud dodáte podklady", pro: "Samostatná sekce / stránka referencí" },
      { label: "Termín", standard: "Obvykle 3–5 prac. dní od dodání podkladů", pro: "Obvykle 5–10 prac. dní od dodání podkladů" },
    ],
  },
  individualNote:
    "Individuálně naceňujeme například tvorbu loga, focení a natáčení, blogové články, pokročilé SEO, linkbuilding, e-shop, rezervační systém, online platby, vícejazyčnost a napojení na externí systémy.",
  seoNote:
    "U SEO negarantujeme konkrétní pozice ve vyhledávání. Komunikujeme ho jako technické a lokální nastavení podle dobré praxe.",
  // „V ceně / Řeší se zvlášť" — pevný dvojsloupec hned pod kartami, ať
  // zákazník hned vidí hranici balíčku a netápe, co bude stát navíc
  // (audit D-02 zelený bod #5). Externí náklady ke kartám, ne až do FAQ.
  scope: {
    title: "Co je v ceně a co se řeší zvlášť",
    included: {
      title: "V ceně balíčku",
      items: [
        "Návrh struktury webu",
        "Pomoc s texty z vašich podkladů",
        "Responzivní vzhled na mobilu i desktopu",
        "Kontaktní formulář, klikací telefon a e-mail",
        "Základní technické SEO a spuštění",
        "První rok provozu webu",
      ],
    },
    separate: {
      title: "Řeší se zvlášť",
      items: [
        "Logo, focení nebo natáčení",
        "E-shop a online platby",
        "Pokročilé SEO a obsah na míru",
        "Rezervační systém a automatizace",
        "Vícejazyčnost nebo individuální napojení",
        "Další úpravy nad rámec domluveného rozsahu",
      ],
    },
    note: "První rok provozu je v ceně. Provozem myslíme doménu a hosting — tedy adresu webu a místo, kde web běží. Po roce vám provozní náklady řekneme předem, bez skrytých poplatků.",
  },
} as const;

/* ── FAQ (homepage) ───────────────────────────────────────────────────────── */

export const faq = {
  eyebrow: "FAQ",
  title: "Časté otázky",
  lead: "Nenašli jste odpověď? Napište nám — odpovíme bez závazku.",
  items: [
    {
      q: "Kolik web stojí?",
      a: "Web Standard stojí 11 800 Kč a Web Pro 20 800 Kč, vždy včetně prvního roku provozu webu. Ceny platí pro běžný rozsah podle balíčku — přesný rozsah i cenu potvrdíme předem po krátké konzultaci.",
    },
    {
      q: "Co přesně je v ceně?",
      a: "Cena zahrnuje samotnou tvorbu webu i první rok provozu. U Web Standard je v ceně web za 8 900 Kč a provoz na první rok za 2 900 Kč. U Web Pro je v ceně web za 16 900 Kč a provoz na první rok za 3 900 Kč. Provozem myslíme doménu a hosting — tedy adresu webu a místo, kde web běží. Díky tomu nemusíte na začátku nic technického řešit zvlášť.",
    },
    {
      q: "Co se platí po prvním roce?",
      a: "Po prvním roce se řeší obnovení domény a hostingu podle skutečných provozních nákladů. Vždy vám je řekneme předem. Neúčtujeme žádný povinný měsíční paušál za nás, pokud se nedomluvíme na další péči nebo rozšíření webu.",
    },
    {
      q: "Jak probíhá platba?",
      a: "Po odsouhlasení nabídky platíte zálohu, která nám rezervuje kapacitu a termín. Doplatek platíte až po schválení hotového webu.",
    },
    {
      q: "Co když nemám texty?",
      a: "To je běžné a počítáme s tím. Stačí stručně popsat, co děláte a pro koho. Z toho připravíme texty, které pak v klidu schválíte nebo upravíte.",
    },
    {
      q: "Co když nemám fotky?",
      a: "Můžeme začít i bez nich. Poradíme, jaké fotky se hodí, a do té doby použijeme vhodné neutrální vizuály, které později vyměníme za vaše.",
    },
    {
      q: "Jak dlouho tvorba trvá?",
      a: "Záleží na rozsahu a na tom, jak rychle dodáte podklady. Menší web bývá hotový rychle, větší rozsah naplánujeme předem. Konkrétní termín si řekneme hned na začátku.",
    },
    {
      q: "Budu web vlastnit?",
      a: "Ano. Doménu, obsah i přístupy máte vy. Předem si vyjasníme, kdo co spravuje, takže po spuštění nejste na nikom závislí.",
    },
    {
      q: "Děláte i SEO?",
      a: "Základní technické SEO je součástí webu, u Web Pro řešíme i základní lokální SEO. Konkrétní pozice v Googlu negarantujeme — připravíme web tak, aby měl dobré předpoklady být dohledatelný.",
    },
    {
      q: "Co když už web mám?",
      a: "Rádi se na něj podíváme. Někdy stačí úpravy a vylepšení stávajícího webu, jindy se vyplatí nový. Po krátké konzultaci doporučíme jednodušší a levnější cestu.",
    },
  ],
} as const;

export const contactSection = {
  eyebrow: "Pojďme do toho",
  title: "Napište nám pár vět o vašem podnikání",
  lead: "Nemusíte mít připravené zadání ani texty. Ozveme se vám do 24 hodin a doporučíme, co dává smysl. První konzultace je zdarma.",
  gdpr: "Odesláním souhlasíte se zpracováním kontaktních údajů pro vyřízení vaší poptávky. Žádný marketing, žádný newsletter.",
} as const;

/* Homepage final conversion band (CTA → /konzultace, the lead form page). */
export const finalCta = {
  title: "Chcete zjistit, co by dávalo smysl pro váš web?",
  text: "Pošlete nám krátkou poptávku. Ozveme se vám, projdeme váš záměr a řekneme, jaký rozsah a cena dávají smysl.",
  ctaLabel: "Nezávazně poptat web",
  ctaHref: "/konzultace",
} as const;

/* ── Detail page content ──────────────────────────────────────────────────── */

export const webyPage = {
  hero: {
    headline: "Profesionální weby na míru",
    subheadline:
      "Moderní, rychlé a přehledné stránky, které působí důvěryhodně a usnadní zákazníkům se ozvat. Pomůžeme s texty i strukturou.",
    ctaText: cta.primary,
    // Default to the entry-level web package so the lead form pre-fills with
    // something concrete; visitors can switch in the dropdown if they need
    // Web Pro instead.
    ctaUrl: `${cta.href}?produkt=web-standard`,
  },
  why: {
    eyebrow: "Proč investovat do webu",
    title: "Web je první dojem, který si nemůžete dovolit pokazit",
    points: [
      { title: "Důvěryhodnost na první pohled", text: "Profesionální web rozhodne, jestli vám zákazník zavolá, nebo půjde ke konkurenci." },
      { title: "Funguje na mobilu", text: "Většina lidí vás otevře na telefonu — tomu web přizpůsobíme." },
      { title: "Snadný kontakt", text: "Jasná cesta k telefonu, formuláři nebo rezervaci, žádné hledání." },
      { title: "Připraveno pro Google", text: "Základní SEO a rychlé načítání máte v ceně každého webu." },
    ],
  },
  portfolio: {
    eyebrow: "Modelové ukázky",
    title: "Jak může vypadat web pro vaši firmu",
    lead: "Nejde o reálné klientské realizace, ale o ukázky struktury a přehlednosti, kterou pro malé firmy stavíme.",
    note: "Vlastní web připravíme i pro obor, který tu není — strukturu a copy přizpůsobíme po krátkém hovoru.",
    // Audit Phase C 2026-05-26: férová mikrokopie pod sekcí — bez ní by
    // pillové označení mohlo přejít přehledem; explicitní vysvětlení, proč
    // jsou ukázky modelové a kdy budou doplněny reálné.
    fairUseDisclaimer:
      "Ukázky jsou modelové a slouží k vysvětlení struktury a stylu. Reálné realizace budeme doplňovat po souhlasu klientů.",
    items: [
      {
        kind: "Řemeslník",
        brandName: "Novák Instalatér",
        domain: "novak-instalater.cz",
        cardTitle: "Web pro řemeslníka",
        cardDescription:
          "Služby, lokalita, rychlý kontakt a přehled toho, s čím pomůžete.",
        heroTitle: "Instalatérské práce Praha",
        heroLead: "Voda, topení, havárie. Reagujeme i ve večerních hodinách.",
        services: ["Voda", "Topení", "Kanalizace", "Havárie 24/7"],
        contactLabel: "Zavolat technika",
        location: "Praha a okolí",
      },
      {
        kind: "Lokální služba",
        brandName: "Studio Lípa",
        domain: "studio-lipa.cz",
        cardTitle: "Web pro lokální službu",
        cardDescription:
          "Důvěryhodná prezentace, ceník, fotky práce a jednoduchá cesta k objednání.",
        heroTitle: "Kosmetika a masáže Brno",
        heroLead: "Pečlivá péče o pleť a tělo v centru Brna. Online rezervace.",
        services: ["Pleť", "Masáže", "Depilace", "Online rezervace"],
        contactLabel: "Rezervovat termín",
        location: "Brno-střed",
      },
      {
        kind: "Menší firma",
        brandName: "Auto Centrum Vrba",
        domain: "autocentrum-vrba.cz",
        cardTitle: "Web pro menší firmu",
        cardDescription:
          "Více prostoru pro služby, reference, realizace a lokální dohledatelnost.",
        heroTitle: "Servis vozidel Olomouc",
        heroLead: "Servis, pneu, STK. Plánujte termín přes web nebo telefon.",
        services: ["Servis", "Pneuservis", "STK", "Klimatizace"],
        contactLabel: "Domluvit termín",
        location: "Olomouc · Šumperk",
      },
    ],
    cta: {
      label: "Chci podobný web",
      href: "/konzultace?produkt=web-standard",
    },
  },
  benefits: {
    eyebrow: "Co web umí",
    title: "Benefity moderního webu",
    items: [
      { icon: "zap", title: "Rychlé načítání", description: "Svižný web na mobilu i na pomalém připojení." },
      { icon: "users", title: "Více poptávek", description: "Jasná struktura vede zákazníka ke kontaktu." },
      { icon: "shield", title: "Web pod kontrolou", description: "Doménu, obsah i přístupy vlastníte vy." },
      { icon: "sparkles", title: "Profesionální vzhled", description: "Design, který buduje důvěru." },
    ],
  },
} as const;

export const lokalniSeoPage = {
  hero: {
    headline: "Zvyšte svoji viditelnost v okolí",
    subheadline:
      "Pomůžeme zákazníkům ve vašem městě, aby vás našli první — v Google vyhledávání i v mapách.",
    ctaText: cta.primary,
    ctaUrl: `${cta.href}?produkt=lokalni-seo`,
  },
  /* Modelový vyhledávací panel (audit Phase B 2026-05-25). Custom UI
     inspirovaný map + místní firemní profil — NE kopie Google UI, NE
     logo Google. Žádné konkrétní metriky/procenta — vágní popis toho,
     co měříme. Renderováno přes izolovaný client komponent _LocalSearchPanel. */
  localPanel: {
    eyebrow: "Modelová ukázka",
    title:
      "Lokální SEO není magie. Jde o to, aby vás zákazník našel ve správný moment.",
    lead:
      "Pomůžeme dát dohromady web, místní profil a základní signály tak, aby zákazník rychle pochopil, kde působíte a jak se vám ozvat.",
    searchQuery: "instalatér Praha 4",
    companyCard: {
      label: "Vaše firma",
      name: "Vaše firma",
      ratingLabel: "★★★★★",
      ratingNote: "Recenze z reálných zákazníků",
      hours: "Pondělí–pátek · 8:00–18:00",
      phone: "+420 ___ ___ ___",
      web: "vaše-firma.cz",
      area: "Praha 4 a okolí",
    },
    nearbyPins: 5,
    checklist: [
      "Místní firemní profil",
      "Lokální klíčová slova",
      "Kontakty a služby na webu",
      "Měření kliků a volání",
    ],
    measureNote:
      "Sledujeme kliky, telefonáty a vyhledávací dotazy — žádné garantované pozice ve výsledcích.",
  },
  problem: {
    eyebrow: "Problém",
    title: "Zákazníci hledají online a v mapách",
    lead: "Když vás ve výsledcích nevidí, najdou konkurenci. Lokální viditelnost dnes rozhoduje o tom, komu zavolají.",
  },
  solution: {
    eyebrow: "Řešení",
    title: "Postavíme vaši lokální viditelnost krok za krokem",
    items: [
      { title: "Google profil", text: "Kompletní nastavení a optimalizace Google Business profilu." },
      { title: "Klíčová slova", text: "Cílíme na výrazy, které vaši zákazníci ve vašem okolí opravdu hledají." },
      { title: "Recenze", text: "Pomůžeme rozjet sběr recenzí, které budují důvěru a zlepšují pozice." },
      { title: "Lokální viditelnost", text: "Konzistentní údaje a struktura webu pro lokální vyhledávání." },
    ],
  },
  results: {
    eyebrow: "Výsledky",
    title: "Na čem záleží",
    note: "Negarantujeme konkrétní pozice. Slibujeme web, který je technicky připravený, dohledatelný a rychle načítaný.",
    tiles: [
      { metric: "Lepší viditelnost", label: "v lokálním vyhledávání a mapách" },
      { metric: "Více poptávek", label: "od lidí z vašeho okolí" },
      { metric: "Silnější důvěra", label: "díky recenzím a konzistentnímu profilu" },
    ],
  },
  process: {
    eyebrow: "Jak postupujeme",
    title: "Analýza → implementace → měření",
    steps: [
      { stepNumber: 1, title: "Analýza", description: "Projdeme váš obor, konkurenci a klíčová slova ve vašem okolí." },
      { stepNumber: 2, title: "Implementace", description: "Nastavíme Google profil, web a citace pro lokální vyhledávání." },
      { stepNumber: 3, title: "Měření", description: "Sledujeme viditelnost a postupně ladíme podle reálných dat." },
    ],
  },
  faq: {
    eyebrow: "SEO FAQ",
    title: "Otázky k lokálnímu SEO",
    items: [
      { q: "Jak rychle uvidím výsledky?", a: "První posuny bývají v řádu týdnů, výraznější efekt obvykle za 3–6 měsíců podle konkurence a oboru." },
      { q: "Garantujete první místo v Google?", a: "Ne. Konkrétní pozice nikdo seriózně garantovat nemůže. Připravíme ale web a profil tak, aby měl na dobré pozice nejlepší předpoklady." },
      { q: "Potřebuju k tomu nový web?", a: "Ne nutně. Často stačí upravit stávající web a nastavit Google profil. Po konzultaci doporučíme nejjednodušší cestu." },
    ],
  },
} as const;

export const aiAsistentPage = {
  hero: {
    headline: "Váš 24/7 virtuální recepční",
    subheadline:
      "AI asistent odpoví zákazníkům, zachytí poptávky a zmeškané hovory a ušetří vám čas — ve dne, v noci i o víkendu.",
    // Audit Phase A 2026-05-25: „Vyzkoušet demo" (cta.demo) byl broken
    // promise — veřejné demo neexistuje. Sjednoceno s pricingTeaser na
    // „Nezávazně probrat AI asistenta". Žádná lež o demu.
    ctaText: "Nezávazně probrat AI asistenta",
    ctaUrl: `${cta.href}?produkt=ai-asistent`,
  },
  explain: {
    eyebrow: "Co to je",
    title: "Jako recepční, který nikdy nespí",
    lead: "AI asistent funguje na webu i u telefonu. Odpovídá na časté dotazy, zapíše poptávku a dá vám vědět, když někdo volal mimo pracovní dobu — abyste nepřišli o zákazníka.",
  },
  /* Modelová ukázka konverzace (audit Phase B 2026-05-25). NE live demo,
     NE skutečná konverzace s reálným zákazníkem. Slouží jen jako vizuální
     ilustrace situace „zákazník píše po pracovní době". Render přes
     izolovaný _ConversationDemo client component. */
  conversation: {
    eyebrow: "Modelová ukázka",
    title: "Jak může AI asistent pomoci po pracovní době",
    lead:
      "Nejde o živé demo, ale o modelovou ukázku situace, kdy zákazník potřebuje rychlou odpověď a vy zrovna nemůžete reagovat.",
    timestamp: "Pondělí · 21:14",
    messages: [
      {
        from: "customer",
        text: "Dobrý den, máte tento týden volný termín?",
      },
      {
        from: "assistant",
        text:
          "Dobrý den, ověřím základní informace a předám poptávku týmu. O jakou službu máte zájem?",
      },
      {
        from: "customer",
        text: "Potřebuji servis a ideálně co nejdřív.",
      },
      {
        from: "assistant",
        text:
          "Rozumím. Zapíšu kontakt, preferovaný termín a předám vše člověku, který se vám ozve.",
      },
    ],
    note:
      "AI asistent nenahrazuje osobní domluvu. Pomáhá zachytit základní dotazy, předat kontakt a neztratit poptávku.",
  },
  useCases: {
    eyebrow: "Pro koho",
    title: "Kde dává AI asistent smysl",
    items: [
      { icon: "wrench", title: "Služby a řemesla", description: "Zachytí poptávku, i když jste zrovna v terénu." },
      { icon: "utensils", title: "Restaurace", description: "Odpoví na otázky a přijme rezervaci i v plném provozu." },
      { icon: "calendar", title: "Objednávky a rezervace", description: "Domluví termín bez nekonečného telefonování." },
      { icon: "store", title: "Retail a provozovny", description: "Poradí s otevírací dobou, dostupností a dotazy zákazníků." },
    ],
  },
  benefits: {
    eyebrow: "Co tím získáte",
    title: "Benefity AI asistenta",
    items: [
      { icon: "phone", title: "Méně zmeškaných hovorů", description: "O poptávku nepřijdete, ani když nestíháte zvednout telefon." },
      { icon: "clock", title: "Úspora času", description: "Rutinní dotazy vyřeší asistent, vy se věnujete práci." },
      { icon: "smile", title: "Lepší zákaznická zkušenost", description: "Zákazník dostane rychlou odpověď v kteroukoli hodinu." },
    ],
  },
  pricingTeaser: {
    title: "AI asistenta nasadíme podle vašeho rozsahu",
    lead: "Rozsah i cenu vždy domluvíme předem podle toho, co potřebujete. Rádi vám asistenta ukážeme naživo.",
    // Sjednoceno na „probrat" formulaci (2026-05-25). Předchozí „Vyzkoušet
    // demo" byl broken promise — žádné demo veřejně neexistuje. Po probrání
    // s klientem ukážeme asistenta naživo, ale slib „demo" odebrán.
    ctaText: "Nezávazně probrat AI asistenta",
    ctaUrl: `${cta.href}?produkt=ai-asistent`,
  },
} as const;

/* /automatizace — service detail page (2026-05-24). Practical, ne-AI-hype.
   AI asistent is mentioned only as one specific add-on, not the headline. */
export const automatizacePage = {
  hero: {
    headline: "Automatizace pro malé firmy",
    subheadline:
      "Jednoduché chytré procesy, které šetří čas kolem poptávek, rezervací a odpovědí zákazníkům.",
    ctaText: "Nezávazně probrat automatizaci",
    ctaUrl: `${cta.href}?produkt=automatizace`,
    pills: [
      "Automatická odpověď",
      "Rezervace termínu",
      "Zápis poptávky do tabulky / CRM",
    ],
    /* Workflow panel rendered on the right side of the hero (md+). Each
       step has an icon, a short label and a status hint — produktový dashboard
       feel, ne neon-AI. */
    workflow: {
      label: "Typický průběh automatizace",
      steps: [
        { icon: "file-text", title: "Příchozí poptávka", hint: "z webu nebo formuláře" },
        { icon: "check", title: "Automatická odpověď", hint: "okamžitě, 24/7" },
        { icon: "users", title: "Kontakt uložen do tabulky / CRM", hint: "připravený k zavolání" },
        { icon: "clock", title: "Připomenutí termínu", hint: "den před schůzkou" },
      ],
    },
  },
  when: {
    eyebrow: "Kdy to dává smysl",
    title: "Neautomatizujeme všechno, ale jen tam, kde to opravdu pomáhá",
    compare: {
      manual: {
        title: "Nechte ručně",
        caption: "Tam, kde je potřeba lidský úsudek a osobní přístup",
        items: [
          "Citlivé rozhodnutí",
          "Osobní domluva se zákazníkem",
          "Jednorázový neobvyklý dotaz",
          "Věci, kde je potřeba lidský úsudek",
        ],
      },
      auto: {
        title: "Automatizujte",
        caption: "Opakované úkoly, které zaberou čas a daly by se zjednodušit",
        items: [
          "Potvrzení přijetí poptávky",
          "Rezervace termínu",
          "Připomenutí zákazníkovi",
          "Zápis kontaktu do tabulky nebo CRM",
        ],
      },
    },
  },
  whatWeAutomate: {
    eyebrow: "Co umíme automatizovat",
    title: "Konkrétní věci, které dnes řešíte ručně",
    items: [
      {
        icon: "file-text",
        title: "Automatická odpověď na poptávku",
        text: "Zákazník hned ví, že jeho zpráva dorazila a kdy se ozvete. Žádné napjaté čekání.",
      },
      {
        icon: "users",
        title: "Zápis poptávky do tabulky nebo CRM",
        text: "Lead z formuláře se sám zapíše tam, kde ho máte přehledně po ruce — Google tabulka, Notion nebo váš CRM.",
      },
      {
        icon: "calendar",
        title: "Rezervace termínu",
        text: "Zákazník si vybere volný čas z vašeho kalendáře. Bez nekonečného domlouvání e-mailem.",
      },
      {
        icon: "clock",
        title: "Připomenutí zákazníkovi",
        text: "Automatické připomenutí termínu nebo nabídky. Méně zmeškaných schůzek a propadlých nabídek.",
      },
    ],
    /* AI asistent intentionally pulled out of the main grid (variant B):
       it's an optional add-on, not a peer automation. Rendered as a small
       callout below the grid. */
    aiCallout: {
      icon: "bot",
      title: "AI asistent jen tam, kde dává smysl",
      text: "Pokud často odpovídáte na stejné dotazy, může AI asistent pomoci jako doplněk. Není to základ každé automatizace.",
      linkLabel: "Více o AI asistentovi jako doplňku",
      linkHref: "/ai-asistent",
    },
  },
  notTech: {
    eyebrow: "Náš přístup",
    title: "Nezačínáme technologií",
    lead:
      "Nejdřív se podíváme, kde reálně ztrácíte čas. Když z toho vyjde jeden konkrétní úkol, který se opakuje každý týden, navrhneme jednoduchý postup. Žádné systémy, které musíte udržovat, žádné nástroje, ke kterým by vás nikdo nepustil.",
  },
  process: {
    eyebrow: "Jak to probíhá",
    title: "Tři kroky bez dramatu",
    steps: [
      {
        stepNumber: 1,
        title: "Řeknete nám, co se u vás opakuje",
        description:
          "Stačí pár vět nebo krátký hovor. Hledáme úkoly, které řešíte ručně každý týden.",
      },
      {
        stepNumber: 2,
        title: "Navrhneme jednoduchý postup",
        description:
          "Popíšeme, co se zautomatizuje, co zůstane na vás a kolik to zabere. Žádné velké projekty na měsíce.",
      },
      {
        stepNumber: 3,
        title: "Zapojíme automatizaci k webu nebo formuláři",
        description:
          "Napojíme na váš web, formulář nebo nástroj, který už používáte. Předáme přístupy a ukážeme, jak to funguje.",
      },
    ],
  },
  finalCta: {
    title: "Pojďme se podívat, co u vás dává smysl zautomatizovat",
    lead:
      "Stačí krátce popsat, co řešíte ručně. Ozveme se vám a doporučíme, jestli má smysl něco automatizovat — a co naopak nechat ručně.",
    ctaText: "Nezávazně probrat automatizaci",
    ctaUrl: `${cta.href}?produkt=automatizace`,
  },
} as const;

/* /kontakt — trust / "who's behind it" page (NOT the lead form; that's
   /konzultace). Builds trust and shows the real people (see `team`).
   Audit Phase C 2026-05-26: H1 a úvod přeladěné na přímě kontaktní
   formulace („Kontaktujte…"), region viditelně v quick contact bloku. */
export const kontaktPage = {
  hero: {
    headline: "Kontaktujte AutoSmartWeby",
    subheadline:
      "Napište nám nebo zavolejte. Řeknete nám, co potřebujete, a doporučíme další krok — bez závazku.",
  },
  /* Above-fold kontaktní blok (audit D-02 zelený bod 2026-05-25, rozšířeno
     o region v Phase C 2026-05-26). Email i telefon viditelně v první
     obrazovce, region jako třetí řádek; CTA na formulář jako sekundární
     volba, aby nepřebíjelo přímý kontakt. */
  quickContact: {
    title: "Chcete nám rovnou napsat nebo zavolat?",
    region: contact.region,
    formCtaLabel: "Raději vyplním krátký formulář",
    formCtaHref: "/konzultace",
  },
  why: {
    eyebrow: "Proč AutoSmartWeby",
    title: "Spolehlivý parťák pro váš web",
    paragraphs: [
      "Pomáháme malým a středním firmám v Česku získat profesionální online prezentaci, lepší dohledatelnost na Googlu a víc poptávek — bez zbytečných starostí a technických řečí.",
      "Nejsme anonymní šablonový nástroj ani drahá agentura. Web s vámi řeší konkrétní lidé, kteří vám rovnou řeknou jasnou cenu, rozsah i další krok.",
    ],
  },
  teamSection: {
    eyebrow: "Kdo se vám ozve",
    title: "S kým budete řešit nový web",
    intro:
      "U nás víte, s kým mluvíte. První domluvu s vámi řeší Tomáš — zeptá se na služby, cíle a podklady, vysvětlí postup a pohlídá, aby bylo od začátku jasné, co dostanete. O návrh, technické řešení a spuštění se potom stará náš technický tým.",
    techHeading: "Pak se do toho pustí technický tým",
    techText:
      "Jakmile máme jasno v cíli webu, připravíme strukturu, obsahové bloky, formuláře a technické řešení. Hlídáme, aby web dobře vypadal, fungoval na mobilu a zákazník se mohl snadno ozvat.",
  },
  topicsSection: {
    eyebrow: "S čím pomůžeme",
    title: "S čím se na nás můžete obrátit",
    items: [
      "Nový web",
      "Úprava současného webu",
      "Lokální SEO",
      "Automatizace pro malé firmy (formuláře, rezervace, AI asistent)",
      "Nejsem si jistý, potřebuji poradit",
    ],
  },
  contactSection: {
    eyebrow: "Kontakt",
    title: "Obecný kontakt",
    lead: "Nevíte, na koho se obrátit? Napište na obecný e-mail a my vás nasměrujeme.",
    company: "Fakturační údaje: Synkedo s.r.o., IČO 24571831.",
  },
  cta: {
    title: "Chcete probrat konkrétní web?",
    text: "Objednejte si nezávaznou konzultaci — ozveme se s doporučením dalšího postupu.",
    // Sjednoceno: na /kontakt už nemá CTA duplikovat header „Objednat
    // konzultaci"; „Přejít" jasněji říká „pokračujte na formulář".
    label: "Přejít na konzultaci",
    href: "/konzultace",
  },
} as const;

/* /konzultace — primary conversion page (the lead/consultation form).
   Audit Phase C 2026-05-26: konkrétnější reassurance bullety
   (vč. „Žádný newsletter ani marketing bez souhlasu"), nový blok
   „Co se stane po odeslání" pro snížení nejistoty před submitem. */
export const konzultacePage = {
  hero: {
    headline: "Objednat nezávaznou konzultaci",
    subheadline:
      "Napište nám pár informací a ozveme se vám s doporučením dalšího postupu.",
  },
  trust: "Bez závazku · Jasná cena předem · Pomůžeme i bez hotových textů",
  services: [
    "Webové stránky",
    "Lokální SEO",
    "Automatizace pro malé firmy",
    "AI asistent (doplněk)",
    "Nejsem si jistý, potřebuji poradit",
  ],
  reassurance: [
    "Poptávka je nezávazná.",
    "Ozveme se obvykle do 24 hodin.",
    "Doporučíme vhodný rozsah podle situace.",
    "Cenu a další krok potvrdíme předem.",
    "Žádný newsletter ani marketing bez souhlasu.",
  ],
  whatHappensAfter: {
    title: "Co se stane po odeslání?",
    steps: [
      "Podíváme se, o co máte zájem.",
      "Ozveme se vám zvoleným způsobem kontaktu.",
      "Doporučíme, jestli dává smysl Web Standard, Web Pro nebo jiný postup.",
    ],
  },
  gdpr: "Souhlasím se zpracováním osobních údajů pro vyřízení mé poptávky. Žádný marketing, žádný newsletter.",
} as const;

/* ── Footer ───────────────────────────────────────────────────────────────── */

export const footer = {
  description:
    "Pomáháme malým a středním firmám v Česku růst díky moderním webům, lokálnímu SEO a praktickým automatizacím.",
  columns: [
    {
      title: "Služby",
      links: [
        { href: "/weby", label: "Webové stránky" },
        { href: "/lokalni-seo", label: "Lokální SEO" },
        { href: "/automatizace", label: "Automatizace" },
        { href: "/cenik", label: "Ceník" },
      ],
    },
    {
      title: "Web",
      links: [
        { href: "/", label: "Domů" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
  ],
  legal: [
    { href: "/zasady-ochrany-osobnich-udaju", label: "Ochrana osobních údajů", status: "live" as const },
  ],
  copyrightTemplate: "© {year} Synkedo s.r.o. — AutoSmartWeby. Všechna práva vyhrazena.",
} as const;
