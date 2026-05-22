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
   Centralized so contact details live in one place (no hardcoded copies). */
export const team = [
  {
    initials: "TM",
    name: "Tomáš Maixner",
    role: "Komunikace, poptávky a klientská domluva",
    phone: "+420 722 525 872",
    phoneHref: "tel:+420722525872",
    email: "t.maixner@autosmartweb.cz",
    emailHref: "mailto:t.maixner@autosmartweb.cz",
  },
  {
    initials: "JB",
    name: "Jan Bezemek",
    role: "Strategie, obchod a obsah webu",
    phone: "+420 773 466 699",
    phoneHref: "tel:+420773466699",
    email: "j.bezemek@autosmartweb.cz",
    emailHref: "mailto:j.bezemek@autosmartweb.cz",
  },
  {
    initials: "SF",
    name: "Sebastián Fridrich",
    role: "Web, technické řešení a vývoj",
    phone: "+420 601 557 018",
    phoneHref: "tel:+420601557018",
    email: "s.fridrich@autosmartweb.cz",
    emailHref: "mailto:s.fridrich@autosmartweb.cz",
  },
] as const;

/** Primary + alternate CTA labels (CLAUDE.md §4). */
export const cta = {
  primary: "Objednat konzultaci",
  poptat: "Poptat web",
  poptatWeb: "Nezávazně poptat web",
  nabidka: "Získat nabídku",
  vice: "Zjistit více",
  konzultaceZdarma: "Konzultace zdarma",
  demo: "Vyzkoušet demo",
  href: "/konzultace",
} as const;

/** Top navigation — matches the sitemap exactly (CLAUDE.md §2). */
export const nav = {
  brand: contact.brandName,
  items: [
    { href: "/", label: "Domů" },
    { href: "/weby", label: "Weby" },
    { href: "/lokalni-seo", label: "Lokální SEO" },
    { href: "/ai-asistent", label: "AI asistent" },
    { href: "/cenik", label: "Ceník" },
    { href: "/kontakt", label: "Kontakt" },
  ],
  cta: { label: cta.primary, href: cta.href },
} as const;

/** Per-page SEO metadata (CLAUDE.md §9). */
export const seo = {
  home: {
    title: "AutoSmartWeby – moderní weby, lokální SEO a AI asistent",
    description:
      "Moderní weby, lokální SEO a AI asistent pro malé a střední firmy v Česku. Buďte vidět, získejte více zákazníků a nepřicházejte o poptávky. Konzultace zdarma.",
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
      "Váš 24/7 virtuální recepční. AI asistent odpoví zákazníkům, zachytí poptávky a zmeškané hovory a ušetří vám čas. Vyzkoušejte demo nebo si domluvte konzultaci.",
    path: "/ai-asistent",
  },
  cenik: {
    title: "Ceník webů, SEO a AI asistenta | AutoSmartWeby",
    description:
      "Přehledné balíčky Web Standard a Web Pro. Ceny od 8 900 Kč, vždy orientační a potvrzené předem. Web i lokální SEO podle vašich potřeb, externí náklady zvlášť.",
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
  h1Lead: "Váš systém pro nové zákazníky.",
  // Owner-approved delivery claim (2026-05-21). NOTE: "Online do 7 dnů" is a
  // public delivery-timeline promise — keep it only while it is a deadline
  // that can realistically be met (CLAUDE.md §9 cautions against unbacked
  // timelines). Soften/remove if it ever stops being safe.
  h1Accent: "Online do 7 dnů.",
  subheadline:
    "Postavíme vám profesionální web, který jasně vysvětlí vaši nabídku, pomůže zákazníkům se ozvat a připraví základ pro SEO i další automatizace.",
  primaryCta: { label: "Chci nezávazně zjistit cenu", href: "/konzultace" },
  secondaryCta: { label: "Podívat se, jak to funguje", href: "#jak-to-funguje" },
  trustMicrocopy: "Web obvykle od 8 900 Kč · Pomůžeme s texty · Jasná cena předem",
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
      icon: "bot",
      title: "AI asistent",
      description:
        "Volitelné rozšíření pro zachytávání poptávek, odpovědi na časté dotazy nebo rychlejší první kontakt.",
      linkText: "Více o AI asistentovi",
      linkUrl: "/ai-asistent",
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
    { icon: "clock", title: "Nepřetržitá dostupnost", description: "AI asistent zachytí poptávku i mimo pracovní dobu, o víkendu i v noci." },
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
 * Pricing — newer source of truth (owner correction 2026-05-21):
 * Web Standard 8 900 Kč, Web Pro 16 900 Kč (Doporučená volba), CTA
 * "Nezávazně poptat web". External costs (domain, hosting, paid tools,
 * custom integrations) are handled separately and explained up front.
 * The older Start 9 990 / Business 19 990 / Premium framing is deprecated
 * and must NOT be used as the main pricing.
 */
export const pricing = {
  eyebrow: "Ceník",
  title: "Jasná cena předem, žádné překvapení",
  lead: "Vyberte si podle rozsahu. Finální cenu i rozsah vždy potvrdíme předem.",
  note: "Cena platí pro běžný rozsah podle balíčku. Externí náklady jako doména, hosting, placené nástroje nebo individuální napojení se řeší zvlášť.",
  packages: [
    {
      id: "standard",
      planName: "Web Standard",
      badge: "Nejrychlejší start",
      price: "8 900 Kč",
      tagline:
        "Jednostránkový profesionální web pro živnostníka nebo menší firmu, která chce rychle působit důvěryhodně a získávat poptávky.",
      features: [
        "Jednostránkový web / landing page",
        "Cca 5–7 přehledných sekcí",
        "Úprava textů z dodaných podkladů",
        "Přehled 3–6 hlavních služeb",
        "Kontaktní formulář, klikací telefon a e-mail",
        "Responzivní vzhled",
        "Základní technické SEO",
        "2 kola úprav v ceně",
      ],
      isFeatured: false,
      ctaText: "Chci Web Standard",
      ctaUrl: "/konzultace?balicek=web-standard",
    },
    {
      id: "pro",
      planName: "Web Pro",
      badge: "Doporučená volba",
      price: "16 900 Kč",
      tagline:
        "Menší plnohodnotný web pro firmu, která potřebuje více prostoru pro služby, reference, ceník a lokální důvěryhodnost.",
      features: [
        "Homepage + 4–6 základních stránek nebo sekcí",
        "Propracovanější copy pro hlavní obsah",
        "Detailnější popisy 4–8 služeb",
        "Reference / realizace jako samostatná sekce nebo stránka",
        "Přehlednější orientační ceník",
        "Základní lokální SEO",
        "Základní analytika a měření hlavních kliků",
        "2 kola úprav v ceně",
      ],
      isFeatured: true,
      ctaText: "Chci Web Pro",
      ctaUrl: "/konzultace?balicek=web-pro",
    },
  ],
  comparison: {
    title: "Srovnání balíčků",
    rows: [
      { label: "Cena", standard: "8 900 Kč", pro: "16 900 Kč" },
      { label: "Typ webu", standard: "Jednostránkový web / landing page", pro: "Menší plnohodnotný web" },
      { label: "Rozsah", standard: "Cca 5–7 sekcí na jedné stránce", pro: "Homepage + 4–6 stránek/sekcí" },
      { label: "Texty", standard: "Základní úprava textů z podkladů", pro: "Propracovanější copy pro hlavní stránky" },
      { label: "Služby", standard: "Stručný přehled 3–6 služeb", pro: "Detailnější popisy 4–8 služeb" },
      { label: "Reference", standard: "Jednoduchý blok, pokud dodáte podklady", pro: "Samostatná sekce / stránka referencí" },
      { label: "Ceník", standard: "Jednoduchý blok / cena od", pro: "Přehlednější orientační ceník" },
      { label: "SEO", standard: "Základní technické SEO", pro: "Základní lokální SEO" },
      { label: "Analytika", standard: "Volitelně", pro: "Základní měření hlavních kliků" },
      { label: "Revize", standard: "2 kola úprav", pro: "2 kola úprav" },
      { label: "Termín", standard: "Obvykle 3–5 prac. dní od dodání podkladů", pro: "Obvykle 5–10 prac. dní od dodání podkladů" },
      { label: "Platba", standard: "Po schválení finální verze", pro: "Po schválení finální verze" },
    ],
  },
  individualNote:
    "Individuálně naceňujeme například tvorbu loga, focení a natáčení, blogové články, pokročilé SEO, linkbuilding, e-shop, rezervační systém, online platby, vícejazyčnost a napojení na externí systémy.",
  seoNote:
    "U SEO negarantujeme konkrétní pozice ve vyhledávání. Komunikujeme ho jako technické a lokální nastavení podle dobré praxe.",
} as const;

/* ── FAQ (homepage) ───────────────────────────────────────────────────────── */

export const faq = {
  eyebrow: "FAQ",
  title: "Časté otázky",
  lead: "Nenašli jste odpověď? Napište nám — odpovíme bez závazku.",
  items: [
    {
      q: "Kolik web stojí?",
      a: "Web Standard začíná na 8 900 Kč, Web Pro na 16 900 Kč. Ceny jsou orientační — přesný rozsah i cenu potvrdíme předem po krátké konzultaci. Externí náklady jako doména a hosting se řeší zvlášť a vždy je vysvětlíme.",
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
      q: "Musím platit měsíční paušál?",
      a: "Ne automaticky. Provozní náklady (doména, hosting) jsou typicky pár set korun měsíčně a vysvětlíme je předem. Žádný povinný paušál za nás neplatíte.",
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
    ctaUrl: cta.href,
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
    eyebrow: "Ukázky",
    title: "Jak může web vypadat pro váš obor",
    lead: "Ukázky vycházejí z reálných oborových šablon. Každý web upravujeme podle konkrétního zadání.",
    note: "Vlastní web připravíme i pro obor, který tu není — strukturu a copy přizpůsobíme po krátkém hovoru.",
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
    ctaUrl: cta.href,
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
    ctaText: cta.demo,
    ctaUrl: cta.href,
  },
  explain: {
    eyebrow: "Co to je",
    title: "Jako recepční, který nikdy nespí",
    lead: "AI asistent funguje na webu i u telefonu. Odpovídá na časté dotazy, zapíše poptávku a dá vám vědět, když někdo volal mimo pracovní dobu — abyste nepřišli o zákazníka.",
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
    ctaText: cta.demo,
    ctaUrl: cta.href,
  },
} as const;

/* /kontakt — trust / "who's behind it" page (NOT the lead form; that's
   /konzultace). Builds trust and shows the real people (see `team`). */
export const kontaktPage = {
  hero: {
    headline: "Poznejte AutoSmartWeby",
    subheadline:
      "Za každým webem stojí lidé, kteří chtějí, aby vaše firma byla vidět a získávala nové zákazníky.",
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
    eyebrow: "Kdo za tím stojí",
    title: "Lidé za AutoSmartWeby",
    lead: "U nás víte, s kým mluvíte. Ozvěte se komukoli z týmu podle toho, co potřebujete řešit.",
  },
  topicsSection: {
    eyebrow: "S čím pomůžeme",
    title: "S čím se na nás můžete obrátit",
    items: [
      "Nový web",
      "Úprava současného webu",
      "Lokální SEO",
      "AI asistent / jednoduchá automatizace",
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
    label: "Objednat konzultaci",
    href: "/konzultace",
  },
} as const;

/* /konzultace — primary conversion page (the lead/consultation form). */
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
    "AI asistent",
    "Nejsem si jistý, potřebuji poradit",
  ],
  reassurance: [
    "Konzultace je nezávazná.",
    "Ozveme se co nejdříve.",
    "Doporučíme vhodné řešení podle situace.",
    "Cenu a rozsah si potvrdíme předem.",
  ],
  gdpr: "Souhlasím se zpracováním osobních údajů pro vyřízení mé poptávky. Žádný marketing, žádný newsletter.",
} as const;

/* ── Footer ───────────────────────────────────────────────────────────────── */

export const footer = {
  description:
    "Pomáháme malým a středním firmám v Česku růst díky moderním webům, lokálnímu SEO a AI asistentovi.",
  columns: [
    {
      title: "Služby",
      links: [
        { href: "/weby", label: "Webové stránky" },
        { href: "/lokalni-seo", label: "Lokální SEO" },
        { href: "/ai-asistent", label: "AI asistent" },
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
