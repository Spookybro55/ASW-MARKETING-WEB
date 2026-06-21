import type { Metadata } from "next";
import Image from "next/image";

/**
 * /kovovyrobasvoboda — statický klientský preview web (Kovovýroba Svoboda).
 *
 * Izolovaná route: NEpoužívá sdílený Header/Footer ani design tokeny
 * AutoSmartWeby. Vlastní industriální light/paper téma (krémové pozadí +
 * oranžová + skoro černá) je definované lokálně přes explicitní hex hodnoty,
 * takže stránka nezávisí na globálním dark-first tématu v globals.css
 * (globální `body { background: var(--bg) }` je tmavé — proto má kořenový
 * wrapper vlastní `min-h-screen` s krémovým pozadím, které ho přebije).
 *
 * Preview je čistě vizuální: formulář nemá backend (tlačítko type="button"),
 * route je noindex.
 */

const previewTitle =
  "Kovovýroba Svoboda — zakružování plechů a profilů, TIG svařování";
const previewDescription =
  "Zakružování plechů a profilů podle výkresu, atypické tvary, kužely a TIG svařování nerezu i hliníku. Kusová i opakovaná výroba pro Jablonec nad Nisou, Liberec a Turnov. Praxe od roku 1992.";

export const metadata: Metadata = {
  // Title/description cílí na klienta (Kovovýroba Svoboda), ne AutoSmartweby.
  // SEO-ready copy; stránka ale zůstává noindex (preview) — indexace se
  // zapne až při přechodu na vlastní doménu (rozhodnutí klienta).
  title: previewTitle,
  description: previewDescription,
  // Klientský náhled — držet mimo indexy vyhledávačů (preview zůstává noindex).
  robots: { index: false, follow: false, nocache: true },
  // Vlastní favicon klienta (kovová „S" značka) pro záložku prohlížeče —
  // přebíjí globální AutoSmartweby ikonu na této preview routě.
  icons: {
    icon: [
      { url: "/clients/kovovyrobasvoboda/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/clients/kovovyrobasvoboda/favicon.ico",
    apple: "/clients/kovovyrobasvoboda/favicon-180.png",
  },
  // Open Graph pro klientský web. Sdílení odkazu ukáže firmu klienta, ne ASW.
  // (Stránka je noindex; OG je tu pro korektní náhled při interním sdílení.)
  openGraph: {
    title: previewTitle,
    description: previewDescription,
    siteName: "Kovovýroba Svoboda",
    locale: "cs_CZ",
    type: "website",
  },
};

/* ── Paleta (lokální, nezávislá na AutoSmartWeby tokenech) ──
   cream   #F4EEE2   papírové pozadí
   paper   #FBF8F1   světlé karty
   ink     #17140F   skoro černá (tmavé plochy, hlavní text)
   orange  #E2640F   primární akcent / CTA
   orangeH #C9560B   hover
   muted   #5C564C   sekundární text                                         */

const NAV = [
  { label: "SLUŽBY", href: "#sluzby" },
  { label: "MOŽNOSTI", href: "#moznosti" },
  { label: "REALIZACE", href: "#dilna" },
  { label: "POSTUP", href: "#postup" },
  { label: "FAQ", href: "#faq" },
  { label: "KONTAKT", href: "#kontakt" },
];

const HERO_TRUST = [
  "OD ROKU 1992",
  "RYCHLÉ DODACÍ LHŮTY",
  "FÉROVÉ CENY",
  "TELEFONICKÁ DOMLUVA",
];

const SERVICES = [
  {
    icon: "roll",
    title: "ZAKRUŽOVÁNÍ PLECHŮ",
    text: "Stáčíme plechy do válců, oblouků a požadovaných tvarů.",
  },
  {
    icon: "profile",
    title: "STÁČENÍ PROFILŮ",
    text: "Zakružujeme HE, HEB, I, U a další profilové materiály.",
  },
  {
    icon: "cone",
    title: "ATYPICKÉ TVARY A KUŽELY",
    text: "Vyrábíme atypické průměry, kužely a komolé kužely.",
  },
  {
    icon: "weld",
    title: "TIG SVAŘOVÁNÍ",
    text: "Přesné svařování nerezové oceli a hliníku metodou TIG.",
  },
  {
    icon: "blueprint",
    title: "ZAKÁZKY PODLE VÝKRESU",
    text: "Výroba přesně podle výkresu nebo dodaného zadání.",
  },
  // Doplňková (vedlejší) větev — stavební kovovýroba. Záměrně až poslední,
  // aby hlavní B2B positioning zůstal technická kovovýroba.
  {
    icon: "stairs",
    title: "SCHODIŠTĚ, ZÁBRADLÍ A KONSTRUKCE",
    text: "Doplňkově i venkovní schodiště, zábradlí a menší ocelové konstrukce.",
  },
] as const;

/* Per-karta „fake photo" metalické pozadí — vrstvené gradienty simulující
   industriální fotku (kovový lesk + brushed streaks + vinětace; u TIG navíc
   svařovací záře). Pořadí odpovídá SERVICES. */
const CARD_BG = [
  // zakružování plechů — zaoblený kovový lesk + světelný pruh
  "linear-gradient(118deg, transparent 26%, rgba(255,255,255,0.13) 43%, transparent 56%), radial-gradient(150% 110% at 22% -8%, rgba(186,194,204,0.40), transparent 50%), repeating-linear-gradient(118deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 7px), radial-gradient(110% 100% at 50% 130%, rgba(0,0,0,0.55), transparent 60%), linear-gradient(155deg, #302b22 0%, #120f08 58%, #211c13 100%)",
  // stáčení profilů — svislý brushed + odlesk
  "linear-gradient(100deg, transparent 30%, rgba(255,255,255,0.10) 48%, transparent 60%), radial-gradient(120% 100% at 62% -6%, rgba(158,166,178,0.34), transparent 48%), repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 6px), radial-gradient(110% 100% at 50% 130%, rgba(0,0,0,0.55), transparent 60%), linear-gradient(165deg, #2c271f 0%, #100e08 60%, #1d1812 100%)",
  // atypické tvary / kužely — diagonální kovový sken
  "linear-gradient(135deg, transparent 24%, rgba(255,255,255,0.12) 40%, transparent 52%), radial-gradient(140% 110% at 82% 6%, rgba(178,186,198,0.36), transparent 50%), repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 8px), radial-gradient(110% 100% at 50% 130%, rgba(0,0,0,0.55), transparent 60%), linear-gradient(150deg, #2e2920 0%, #131009 58%, #201b13 100%)",
  // TIG svařování — kovový lesk + oranžová svařovací záře (silnější)
  "radial-gradient(60% 48% at 70% 112%, rgba(255,150,46,0.75), transparent 58%), radial-gradient(40% 32% at 70% 110%, rgba(255,224,170,0.6), transparent 60%), radial-gradient(130% 100% at 18% -6%, rgba(160,170,184,0.30), transparent 48%), linear-gradient(160deg, #2c251c 0%, #120f08 60%, #1e1812 100%)",
  // zakázky podle výkresu — blueprint mřížka + jemný lesk
  "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.07) 47%, transparent 58%), repeating-linear-gradient(0deg, rgba(141,155,171,0.10) 0 1px, transparent 1px 20px), repeating-linear-gradient(90deg, rgba(141,155,171,0.10) 0 1px, transparent 1px 20px), radial-gradient(120% 100% at 50% -8%, rgba(150,164,180,0.26), transparent 52%), linear-gradient(160deg, #26241e 0%, #0f0e0a 60%, #1b1813 100%)",
  // schodiště / zábradlí / konstrukce — svislý ocelový brushed + lesk
  "linear-gradient(105deg, transparent 28%, rgba(255,255,255,0.10) 46%, transparent 58%), radial-gradient(130% 100% at 30% -6%, rgba(168,176,188,0.32), transparent 50%), repeating-linear-gradient(90deg, rgba(255,255,255,0.045) 0 1px, transparent 1px 9px), radial-gradient(110% 100% at 50% 130%, rgba(0,0,0,0.55), transparent 60%), linear-gradient(158deg, #2a2620 0%, #110f09 60%, #1c1812 100%)",
];

/* Výrobní limity. Číselné hodnoty jsou zadané klientem a NEMĚNÍ se.
   INTERNÍ TODO (klientovi neukazovat — doplnit reálná čísla, až je dodá):
     - MIN. PRŮMĚR ZAKRUŽENÍ: konkrétní hodnota neznámá → klientsky neutrální
       formulace „upřesníme podle materiálu a profilu".
     - MAX. DÉLKA: konkrétní délka neznámá → „ověříme podle výkresu". */
const TECH_ROWS = [
  ["VÁLEC", "cca Ø 1500 mm / šíře 2000 mm / síla 8 mm"],
  ["PROFILY", "cca 140–160 H / HE"],
  ["ÚHELNÍK", "100 × 100 mm"],
  ["KULATINA", "cca 60 mm"],
  ["PÁSOVINA", "120 × 20 mm"],
  ["MIN. PRŮMĚR ZAKRUŽENÍ", "upřesníme podle materiálu a profilu"],
  ["MAX. DÉLKA / ŠÍŘE", "šíře cca 2000 mm; délku ověříme podle výkresu"],
  ["TL. MATERIÁLU", "max. 8 mm dle materiálu (ocel / nerez / hliník)"],
  ["MATERIÁLY", "konstrukční ocel, nerezová ocel, hliník"],
  ["VSTUPY / PODKLADY", "výkres, PDF, DXF, DWG (nebo rozměry a popis)"],
  ["VÝROBA", "kusová i opakovaná (série)"],
  ["TRUBKY", "neprovádíme"],
];

const TABLE_TRUST = [
  "RYCHLÉ DODACÍ LHŮTY",
  "FÉROVÉ CENY",
  "KVALITNÍ ZPRACOVÁNÍ",
  "LOKÁLNÍ VÝROBA",
];

const STEPS = [
  {
    n: "1",
    title: "POŠLETE VÝKRES NEBO POPTÁVKU",
    text: "Telefonicky, e-mailem, PDF / DXF / DWG. Výkres není podmínka — stačí rozměry a popis.",
  },
  {
    n: "2",
    title: "NACENĚNÍ A TERMÍN",
    text: "Ověříme materiál, rozměry, technologii a domluvíme termín.",
  },
  {
    n: "3",
    title: "VÝROBA",
    text: "Zakružování, příprava dílů a TIG svařování podle zadání.",
  },
  {
    n: "4",
    title: "PŘEDÁNÍ NEBO DOPRAVA",
    text: "Osobní odběr, předání nebo domluvená doprava.",
  },
];

const REASONS = [
  { strong: "PRAXE", rest: "od roku 1992" },
  { strong: "SPECIALIZACE", rest: "na zakružování plechů a profilů" },
  { strong: "ZKUŠENOSTI S ATYPY", rest: "tvary a kužely" },
  { strong: "TIG SVAŘOVÁNÍ", rest: "nerezů a hliníku" },
  { strong: "OSOBNÍ DOMLUVA", rest: "po telefonu" },
  { strong: "REGIONÁLNĚ PRO", rest: "Jablonec nad Nisou, Liberec a Turnov" },
];

/* Technické FAQ pro nákupčího — věcně, krátce, bez marketingových frází.
   Renderuje se jako nativní <details> accordion (bez JS, plně přístupné). */
const FAQ: { q: string; a: string }[] = [
  {
    q: "Jaký nejmenší a největší průměr umíte zakružit?",
    a: "Největší průměr u válce je cca Ø 1500 mm. Nejmenší průměr upřesníme podle materiálu a profilu — ověříme podle výkresu a požadovaného rozměru.",
  },
  {
    q: "Umíte pracovat s nerezem i hliníkem?",
    a: "Ano. Zakružujeme i svařujeme nerezovou ocel, hliník a konstrukční ocel.",
  },
  {
    q: "Děláte kusovou výrobu i série?",
    a: "Ano, vyrábíme kusově i v opakovaných sériích podle zadání.",
  },
  {
    q: "Můžu poslat výkres v DXF nebo DWG?",
    a: "Ano. Přijímáme výkres, PDF, DXF i DWG. Pokud výkres nemáte, stačí rozměry a popis dílu.",
  },
  {
    q: "Jak rychle naceníte poptávku?",
    a: "Ozveme se co nejdříve po telefonické nebo e-mailové domluvě. Přesný termín potvrdíme podle materiálu, rozměru a vytížení výroby.",
  },
  {
    q: "Děláte i TIG svařování?",
    a: "Ano, TIG svařování nerezu i hliníku — samostatně i jako součást zakázky.",
  },
  {
    q: "Umíte vyrobit díl přesně podle výkresu?",
    a: "Ano. Vyrábíme přesně podle dodaného výkresu nebo zadání, včetně atypických tvarů a kuželů.",
  },
  {
    q: "Umíte vyrobit i jednoduché stavební konstrukce?",
    a: "Ano, jako doplněk k hlavní technické kovovýrobě. Zvládneme venkovní schodiště, zábradlí a menší ocelové konstrukce; těžištěm naší výroby ale zůstává zakružování plechů a profilů, atypické tvary a TIG svařování.",
  },
  {
    q: "Odkud jste a kam dodáváte?",
    a: "Sídlíme v Jablonci nad Nisou. Běžně pracujeme pro Liberec, Turnov a okolí; doprava nebo osobní předání po domluvě.",
  },
];

/* Galerie „Naše dílna / Ukázky výroby" — reálné B2B fotky rozdělené do dvou
   pojmenovaných větví, aby byla hierarchie hned čitelná: hlavní TECHNICKÁ
   výroba první, doplňková KONSTRUKCE a montáže druhá.
   ŽÁDNÝ soubor se neopakuje s proof pásem ani s kartami služeb (každá fotka
   je na stránce právě jednou; jediný překryv je nerezový kužel — hero proof
   + galerie, schváleno, daleko od sebe). Vyloučené: dekorativní kované brány
   a fotky s nepořádkem. Lazy-load přes next/image. */
const GALLERY_GROUPS: { label: string; items: { src: string; alt: string }[] }[] = [
  {
    label: "Technická výroba",
    items: [
      // svářeč ZDE záměrně není (zůstává na TIG kartě); zakruzovacka (celek)
      // a stroj (detail) jsou v řadě nesousední (pozice 1 a 4).
      {
        src: "/clients/kovovyrobasvoboda/zakruzovacka.jpg",
        alt: "Zakružovačka profilů s ovládacím panelem v dílně",
      },
      {
        src: "/clients/kovovyrobasvoboda/oblouk.jpg",
        alt: "Ocelový profil zakroužený do přesného oblouku",
      },
      {
        src: "/clients/kovovyrobasvoboda/cones.jpg",
        alt: "Nerezový kužel — atypický tvar vyrobený podle výkresu",
      },
      {
        src: "/clients/kovovyrobasvoboda/stroj.jpg",
        alt: "Detail zakružovačky profilů — profil stočený do spirály",
      },
    ],
  },
  {
    label: "Konstrukce a montáže",
    items: [
      {
        src: "/clients/kovovyrobasvoboda/schodiste-venkovni.jpg",
        alt: "Pozinkované venkovní schodiště se zábradlím u rodinného domu",
      },
      {
        src: "/clients/kovovyrobasvoboda/konstrukce.jpg",
        alt: "Venkovní ocelová konstrukce se schodištěm u budovy",
      },
      {
        src: "/clients/kovovyrobasvoboda/zabradli-nerez.jpg",
        alt: "Moderní nerezové zábradlí s vodorovnými výplněmi",
      },
      {
        src: "/clients/kovovyrobasvoboda/zabradli-interier.jpg",
        alt: "Moderní interiérové ocelové zábradlí u schodiště",
      },
    ],
  },
];

/* ── Inline SVG ikony (oranžová čárová kresba) ── */
function Icon({ name, className = "" }: { name: string; className?: string }) {
  const common = {
    className,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "phone":
      return (
        <svg {...common}>
          <path d="M15 6c1 6 4 12 9 17s11 8 17 9l-3 7c-13-1-26-14-30-30l7-3Z" />
        </svg>
      );
    case "roll": // zakružovaný plech / svitek
      return (
        <svg {...common}>
          <ellipse cx="20" cy="24" rx="9" ry="14" />
          <path d="M20 10h14M20 38h14" />
          <ellipse cx="34" cy="24" rx="5" ry="14" />
          <path d="M20 24h6" />
        </svg>
      );
    case "profile": // I / U profil
      return (
        <svg {...common}>
          <path d="M12 10h24M12 38h24M24 10v28" />
          <path d="M14 10v6h-2M34 10v6h2M14 38v-6h-2M34 38v-6h2" />
        </svg>
      );
    case "cone": // kužel
      return (
        <svg {...common}>
          <path d="M24 8 9 38h30L24 8Z" />
          <ellipse cx="24" cy="38" rx="15" ry="4" />
          <path d="M19 23h10" />
        </svg>
      );
    case "weld": // TIG hořák + jiskra
      return (
        <svg {...common}>
          <path d="M30 8 18 26M30 8l8 4-6 6-8-4M16 28l-6 12 12-6" />
          <path d="M40 24l3-1M40 30l3 1M37 20l2-3" />
        </svg>
      );
    case "stairs": // schodiště + zábradlí
      return (
        <svg {...common}>
          <path d="M8 40h8v-8h8v-8h8v-8h8" />
          <path d="M8 18v22M16 24v8M24 18v6M32 13v3" />
        </svg>
      );
    case "blueprint": // výkres
      return (
        <svg {...common}>
          <rect x="8" y="10" width="32" height="28" rx="1" />
          <path d="M8 18h32M16 10v28" />
          <circle cx="28" cy="28" r="4" />
          <path d="M24 24l8 8" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="M10 25l9 9 19-21" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M24 6c-7 0-12 5-12 12 0 9 12 24 12 24s12-15 12-24c0-7-5-12-12-12Z" />
          <circle cx="24" cy="18" r="4" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="7" y="11" width="34" height="26" rx="2" />
          <path d="M8 13l16 12 16-12" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="16" />
          <path d="M24 14v10l7 4" />
        </svg>
      );
    default:
      return null;
  }
}

/* Sdílené SVG defs (gradienty, clip, filtry) — renderované jednou v rootu.
   SVG ids jsou v dokumentu globální, takže je referencuje hero vizuál
   i produktové motivy v kartách. Filtry: brushed-metal zrno (feTurbulence)
   a měkký renderovaný stín (feGaussianBlur) — nativní SVG, žádné dependency. */
function MetalDefs() {
  return (
    <svg aria-hidden width="0" height="0" style={{ position: "absolute" }} focusable="false">
      <defs>
        <linearGradient id="kv-cyl" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#52585f" />
          <stop offset="0.14" stopColor="#cfd4da" />
          <stop offset="0.32" stopColor="#ffffff" />
          <stop offset="0.42" stopColor="#e9edf0" />
          <stop offset="0.6" stopColor="#a7adb5" />
          <stop offset="0.82" stopColor="#565b63" />
          <stop offset="1" stopColor="#34393f" />
        </linearGradient>
        <linearGradient id="kv-coil" x1="0.1" y1="0" x2="0.92" y2="1">
          <stop offset="0" stopColor="#474c55" />
          <stop offset="0.12" stopColor="#d9dee3" />
          <stop offset="0.23" stopColor="#888e97" />
          <stop offset="0.35" stopColor="#f6f8f9" />
          <stop offset="0.47" stopColor="#aeb4bc" />
          <stop offset="0.61" stopColor="#676d76" />
          <stop offset="0.73" stopColor="#ebeef1" />
          <stop offset="0.87" stopColor="#7b818a" />
          <stop offset="1" stopColor="#42474f" />
        </linearGradient>
        <linearGradient id="kv-coil-in" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a2d33" />
          <stop offset="0.5" stopColor="#727882" />
          <stop offset="1" stopColor="#2e323a" />
        </linearGradient>
        <linearGradient id="kv-edge" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0" stopColor="#f4f6f8" />
          <stop offset="0.5" stopColor="#cdd2d8" />
          <stop offset="1" stopColor="#b3b8c0" />
        </linearGradient>
        <linearGradient id="kv-cone" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#52585f" />
          <stop offset="0.3" stopColor="#d4d9df" />
          <stop offset="0.52" stopColor="#ffffff" />
          <stop offset="0.58" stopColor="#eef1f4" />
          <stop offset="0.78" stopColor="#969ca4" />
          <stop offset="1" stopColor="#4d525b" />
        </linearGradient>
        <linearGradient id="kv-top" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0" stopColor="#eaedf0" />
          <stop offset="1" stopColor="#b6bcc3" />
        </linearGradient>
        <linearGradient id="kv-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#aab0b7" />
          <stop offset="0.5" stopColor="#8f959d" />
          <stop offset="1" stopColor="#6f757e" />
        </linearGradient>
        <linearGradient id="kv-side" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6b717a" />
          <stop offset="1" stopColor="#474c55" />
        </linearGradient>
        <radialGradient id="kv-bore" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#1c1f25" />
          <stop offset="0.7" stopColor="#282c33" />
          <stop offset="1" stopColor="#3a3f47" />
        </radialGradient>
        <radialGradient id="kv-glint" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="kv-borewall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#14171c" />
          <stop offset="0.55" stopColor="#23272e" />
          <stop offset="0.82" stopColor="#474d57" />
          <stop offset="1" stopColor="#6e757f" />
        </linearGradient>
        <radialGradient id="kv-deep" cx="0.5" cy="0.42" r="0.6">
          <stop offset="0" stopColor="#0b0d10" />
          <stop offset="0.7" stopColor="#15181d" />
          <stop offset="1" stopColor="#22262d" />
        </radialGradient>
        <clipPath id="kv-ring">
          <path
            d="M-152,0 a152,140 0 1,0 304,0 a152,140 0 1,0 -304,0 z M-92,0 a92,84 0 1,0 184,0 a92,84 0 1,0 -184,0 z"
            clipRule="evenodd"
          />
        </clipPath>

        {/* brushed-metal zrno — velmi jemné kovové škrábance přes plochu */}
        <filter id="kv-brushed" x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.88 0.03"
            numOctaves="1"
            seed="11"
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix in="noise" type="saturate" values="0" result="mono" />
          <feComponentTransfer in="mono" result="streaks">
            <feFuncA type="table" tableValues="0 0.05 0 0.055 0 0.04" />
          </feComponentTransfer>
          <feComposite in="streaks" in2="SourceGraphic" operator="in" result="grain" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="grain" />
          </feMerge>
        </filter>

        {/* měkký renderovaný stín */}
        <filter id="kv-soft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
        {/* TIG svařovací záře */}
        <radialGradient id="kv-weldglow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffb24d" stopOpacity="0.95" />
          <stop offset="0.4" stopColor="#f2761b" stopOpacity="0.6" />
          <stop offset="1" stopColor="#f2761b" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="kv-weldcore" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.55" stopColor="#ffe2a6" />
          <stop offset="1" stopColor="#ff9d2e" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/* Velký produktový motiv do pozadí karty služby — pseudo-foto kovový vizuál
   (rolovaný plech / profily / kužely / TIG svar / výkres) sdílející gradienty
   a brushed filtr. Vykresluje se přes celou kartu, text má vlastní ztmavení. */
function CardMotif({ type }: { type: string }) {
  const svgProps = {
    viewBox: "0 0 300 210",
    preserveAspectRatio: "xMidYMid slice",
    className: "absolute inset-0 h-full w-full",
    "aria-hidden": true,
  } as const;

  if (type === "roll") {
    return (
      <svg {...svgProps}>
        <g fill="#14110d" filter="url(#kv-soft)" opacity="0.5">
          <ellipse cx="120" cy="170" rx="95" ry="16" />
          <ellipse cx="220" cy="140" rx="60" ry="11" />
        </g>
        <g filter="url(#kv-brushed)">
          <g transform="translate(212 92) rotate(-12)">
            <ellipse rx="62" ry="56" fill="url(#kv-coil)" />
            <ellipse rx="36" ry="32" fill="url(#kv-borewall)" />
            <ellipse rx="28" ry="25" cy="-3" fill="url(#kv-deep)" />
            <ellipse rx="36" ry="32" fill="none" stroke="url(#kv-edge)" strokeWidth="5" />
          </g>
          <g transform="translate(118 116) rotate(-12)">
            <ellipse rx="86" ry="78" fill="url(#kv-coil)" />
            <ellipse rx="49" ry="44" fill="url(#kv-borewall)" />
            <ellipse rx="39" ry="35" cy="-4" fill="url(#kv-deep)" />
            <ellipse rx="49" ry="44" fill="none" stroke="url(#kv-edge)" strokeWidth="6" />
            <ellipse cx="-30" cy="-48" rx="30" ry="13" fill="url(#kv-glint)" transform="rotate(-22 -30 -48)" />
          </g>
        </g>
      </svg>
    );
  }

  if (type === "profile") {
    const IBeam = (x: number, y: number, s: number) => (
      <g transform={`translate(${x} ${y}) scale(${s})`}>
        {/* hloubka / bok */}
        <path
          d="M-26,-26 H26 V-16 H8 V16 H26 V26 H-26 V16 H-8 V-16 H-26 Z"
          transform="translate(9 -7)"
          fill="url(#kv-side)"
        />
        {/* čelo profilu */}
        <path
          d="M-26,-26 H26 V-16 H8 V16 H26 V26 H-26 V16 H-8 V-16 H-26 Z"
          fill="url(#kv-top)"
        />
        <path
          d="M-26,-26 H26 M-26,26 H26"
          stroke="#0f1115"
          strokeWidth="1.5"
          opacity="0.4"
          fill="none"
        />
      </g>
    );
    return (
      <svg {...svgProps}>
        <g fill="#14110d" filter="url(#kv-soft)" opacity="0.5">
          <ellipse cx="150" cy="178" rx="120" ry="15" />
        </g>
        <g filter="url(#kv-brushed)">
          {IBeam(95, 150, 1.15)}
          {IBeam(150, 96, 1.25)}
          {IBeam(208, 150, 1.1)}
        </g>
      </svg>
    );
  }

  if (type === "cone") {
    const Cone = (x: number, y: number, w: number, h: number) => (
      <g>
        <path d={`M${x},${y - h} L${x - w},${y} L${x + w},${y} Z`} fill="url(#kv-cone)" />
        <ellipse cx={x} cy={y} rx={w} ry={w * 0.32} fill="#3b4047" />
        <ellipse cx={x} cy={y - 1} rx={w} ry={w * 0.28} fill="url(#kv-cone)" opacity="0.5" />
        <path d={`M${x},${y - h} L${x - w * 0.4},${y}`} stroke="#ffffff" strokeWidth="2.5" opacity="0.5" strokeLinecap="round" />
      </g>
    );
    return (
      <svg {...svgProps}>
        <g fill="#14110d" filter="url(#kv-soft)" opacity="0.5">
          <ellipse cx="150" cy="172" rx="120" ry="14" />
        </g>
        <g filter="url(#kv-brushed)">
          {Cone(110, 168, 46, 120)}
          {Cone(205, 168, 34, 90)}
        </g>
      </svg>
    );
  }

  if (type === "weld") {
    // bod svařování (kontakt hořáku s obrobkem) — vycentrovaný
    const wx = 150;
    const wy = 116;
    return (
      <svg {...svgProps}>
        {/* obrobek — dva svařované plechy */}
        <g filter="url(#kv-brushed)">
          <rect x="0" y="118" width="150" height="40" fill="url(#kv-cyl)" />
          <rect x="150" y="126" width="150" height="32" fill="url(#kv-side)" />
        </g>
        {/* záře (pod hořákem) */}
        <circle cx={wx} cy={wy} r="92" fill="url(#kv-weldglow)" />
        {/* TIG hořák — šikmý nástroj z pravého horního rohu */}
        <g transform={`rotate(36 ${wx} ${wy})`}>
          <rect x={wx - 13} y={wy - 150} width="26" height="98" rx="8" fill="#2a2e34" />
          <rect x={wx - 13} y={wy - 150} width="9" height="98" rx="8" fill="#454b54" />
          <rect x={wx - 16} y={wy - 58} width="32" height="20" rx="4" fill="#1c1f24" />
          {/* keramická hubice */}
          <path d={`M${wx - 12},${wy - 40} L${wx + 12},${wy - 40} L${wx + 7},${wy - 12} L${wx - 7},${wy - 12} Z`} fill="#6b7178" />
          {/* wolframová elektroda */}
          <rect x={wx - 1.5} y={wy - 14} width="3" height="12" fill="#cdd2d8" />
        </g>
        {/* jasné jádro svaru */}
        <circle cx={wx} cy={wy} r="22" fill="url(#kv-weldcore)" />
        <circle cx={wx} cy={wy} r="7" fill="#ffffff" />
        {/* jiskry vějířovitě */}
        <g stroke="#ffd9a0" strokeWidth="1.6" strokeLinecap="round" opacity="0.9">
          <path d={`M${wx},${wy} L86,164`} />
          <path d={`M${wx},${wy} L112,176`} />
          <path d={`M${wx},${wy} L150,180`} />
          <path d={`M${wx},${wy} L190,172`} />
          <path d={`M${wx},${wy} L60,150`} />
          <path d={`M${wx},${wy} L218,150`} />
        </g>
        <g fill="#fff2d6">
          <circle cx="104" cy="172" r="1.8" />
          <circle cx="186" cy="166" r="1.6" />
          <circle cx="72" cy="156" r="1.4" />
        </g>
      </svg>
    );
  }

  // blueprint
  return (
    <svg {...svgProps}>
      <g stroke="#9fb0c4" strokeWidth="1" fill="none" opacity="0.45">
        <path d="M0,40 H300 M0,90 H300 M0,140 H300 M0,190 H300" />
        <path d="M60,0 V210 M150,0 V210 M240,0 V210" />
        <circle cx="150" cy="105" r="58" />
        <circle cx="150" cy="105" r="34" />
        <path d="M70,105 H230 M150,30 V180" strokeDasharray="4 6" />
      </g>
      {/* kovová součást přes výkres */}
      <g filter="url(#kv-brushed)">
        <path d="M196,150 v-58 h44 v58 h-12 v-46 h-20 v46 Z" fill="url(#kv-cyl)" />
      </g>
      {/* oranžové kóty */}
      <g stroke="#E2640F" strokeWidth="1.5" fill="none" opacity="0.85">
        <path d="M60,182 H240 M60,178 v8 M240,178 v8" />
        <path d="M40,40 L70,70" />
      </g>
    </svg>
  );
}

const PHONE_HREF = "tel:+420602972415";
const MAIL_HREF = "mailto:info@kovovyrobasvoboda.cz";

/* ══════════════════════════════════════════════════════════════════════
   ASSET MAP karet služeb — když je cesta `null`, vykreslí se SVG fallback
   (CardMotif), jinak reálná fotka přes next/image.
   ----------------------------------------------------------------------
   Pozn.: hero už NEpoužívá tuto mapu — má reálnou fotku dílny napřímo
   (`/clients/kovovyrobasvoboda/hero-dilna.jpg`, viz hero sekce).
   ══════════════════════════════════════════════════════════════════════ */
type AssetPath = string | null;
type ServiceAssetKey =
  | "rolling"
  | "profiles"
  | "cones"
  | "welding"
  | "construction"
  | "blueprint";

/* Asset mapa karet. KAŽDÁ fotka je na stránce jen jednou — proto se kartové
   fotky NEpřekrývají s proof pásem (válcovačka + jednotlivý nerez kužel) ani
   s galerií. Karta „kužely" proto ukazuje velké kužely na valníku, ne tentýž
   kužel jako proof. */
const VISUAL_ASSETS: { services: Record<ServiceAssetKey, AssetPath> } = {
  services: {
    rolling: "/clients/kovovyrobasvoboda/rolling.jpg", // paleta zakroužených válců
    profiles: "/clients/kovovyrobasvoboda/profiles.jpg", // prstenec U160 Ø1260
    cones: "/clients/kovovyrobasvoboda/kuzely-valnik.jpg", // dva velké nerez kužely
    welding: "/clients/kovovyrobasvoboda/welding.jpg", // svářeč u válce (TIG)
    construction: "/clients/kovovyrobasvoboda/schodiste.jpg", // venkovní schodiště
    // „Zakázky podle výkresu" — bez čisté fotky výkresu ponecháváme SVG
    // blueprint motiv (přesnější než dosadit náhodný díl).
    blueprint: null,
  },
};

/* Mapování interní SVG-motiv ikony (card.icon) → klíč v asset mapě. */
const CARD_ICON_TO_ASSET: Record<string, ServiceAssetKey> = {
  roll: "rolling",
  profile: "profiles",
  cone: "cones",
  weld: "welding",
  stairs: "construction",
  blueprint: "blueprint",
};

/* Decentní animace (scoped, prefix kv-). Žádné JS/dependency — čisté CSS,
   takže stránka zůstává Server Component. Plně respektuje
   prefers-reduced-motion (animace i hover transitiony se vypnou). */
const KV_ANIM_CSS = `
@keyframes kvUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
@keyframes kvIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: none; } }
@keyframes kvDrift { 0%, 100% { opacity: 0.06; } 50% { opacity: 0.12; } }
.kv-up { opacity: 0; animation: kvUp 0.7s cubic-bezier(0.22, 0.61, 0.36, 1) both; }
.kv-in { opacity: 0; animation: kvIn 0.9s cubic-bezier(0.22, 0.61, 0.36, 1) both; }
.kv-drift { animation: kvDrift 9s ease-in-out infinite; }
/* FAQ accordion: „+" se otočením o 45° změní na „×" při otevření. */
.kv-faq-plus { display: inline-block; line-height: 1; transition: transform 0.2s ease; }
.kv-faq[open] .kv-faq-plus { transform: rotate(45deg); }
.kv-faq > summary::-webkit-details-marker { display: none; }
/* Kotvy z menu: odsazení o výšku sticky headeru (~80 px), aby cílová sekce
   nebyla „useklá" pod headerem. Scoped jen na konkrétní id této stránky. */
:where(#top, #sluzby, #moznosti, #dilna, #postup, #faq, #kontakt) { scroll-margin-top: 92px; }
@media (prefers-reduced-motion: reduce) {
  .kv-up, .kv-in { animation: none !important; opacity: 1 !important; transform: none !important; }
  .kv-drift { animation: none !important; }
  .kv-card, .kv-card *, .kv-faq-plus { transition: none !important; }
}
`;

export default function KovovyrobaSvobodaPage() {
  return (
    <div
      className="min-h-screen w-full text-[#17140F] selection:bg-[#E2640F] selection:text-white"
      style={{
        backgroundColor: "#F4EEE2",
        // Jemný technický papír: tečkovaná mřížka + měkký horní přísvit
        // (žádný tvrdý webový čtverec přes celou stránku).
        backgroundImage:
          "radial-gradient(rgba(23,20,15,0.05) 0.6px, transparent 0.7px), radial-gradient(120% 60% at 50% -10%, rgba(255,255,255,0.5), transparent 60%)",
        backgroundSize: "26px 26px, 100% 100%",
      }}
    >
      <KovoJsonLd />
      <MetalDefs />
      <style dangerouslySetInnerHTML={{ __html: KV_ANIM_CSS }} />
      {/* ── Header ── */}
      {/* Stabilní tmavý header — neprůhledný antracit, nezávislý na obsahu pod
          ním (žádný backdrop-blur ani scroll-state), aby přes hero fotku i nad
          krémovým obsahem vypadal vždy stejně. */}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#1C1915]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-6 py-3 sm:px-10">
          <a href="#top" className="flex items-center gap-3 leading-none">
            {/* alt="" — dekorativní: ve stejném odkazu je textový název firmy. */}
            <Image
              src="/clients/kovovyrobasvoboda/logo-mark.webp"
              alt=""
              width={131}
              height={151}
              priority
              className="h-14 w-auto shrink-0"
            />
            <span className="font-[family-name:var(--font-montserrat)]">
              <span className="block text-[12px] font-bold uppercase tracking-[0.2em] text-white/90">
                Kovovýroba
              </span>
              <span className="block text-[1.6rem] font-black uppercase leading-none tracking-tight text-[#E2640F]">
                Svoboda
              </span>
              <span className="block text-[9px] font-bold uppercase tracking-[0.28em] text-white/45">
                Od roku 1992
              </span>
            </span>
          </a>

          <nav
            aria-label="Hlavní navigace"
            className="hidden items-center gap-8 lg:flex"
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-[family-name:var(--font-montserrat)] text-[13.5px] font-semibold uppercase tracking-wider text-white/80 transition-colors hover:text-[#E2640F]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 bg-[#E2640F] px-5 py-3 font-[family-name:var(--font-montserrat)] text-[13px] font-black uppercase tracking-widest text-white shadow-[0_3px_0_0_#9C440A] transition-colors hover:bg-[#C9560B] sm:px-7"
          >
            <Icon name="phone" className="h-4 w-4" />
            Zavolat
          </a>
        </div>
      </header>

      <main id="top">
        {/* ── Hero — reálná fotka dílny jako dominanta ──
            Tmavý industriální hero: full-bleed foto zakružovačky (dominanta
            vpravo), antracitový overlay silnější vlevo pro čitelnost textu. */}
        <section className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-[#0E0C08] lg:min-h-[640px]">
          <Image
            src="/clients/kovovyrobasvoboda/hero-dilna.jpg"
            alt="Zakružovačka plechů s velkým zakrouženým ocelovým válcem v dílně Kovovýroby Svoboda"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[66%_center] lg:object-center"
          />
          {/* směrový overlay — vlevo tmavý (text), vpravo prosvítá stroj a kruh */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E0C08] from-0% via-[#0E0C08]/72 via-42% to-transparent to-82%" />
          {/* spodní ztmavení — na mobilu silnější pro čitelnost CTA / trust */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C08]/75 to-transparent sm:from-[#0E0C08]/30" />

          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:py-24">
            <div className="max-w-2xl lg:max-w-[720px]">
              <span className="kv-up inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-[0.18em] text-[#F2954E]">
                <span className="h-px w-7 bg-[#E2640F]" />
                Kovovýroba s praxí od roku 1992
              </span>

              <h1 className="kv-up mt-4 font-[family-name:var(--font-montserrat)] text-[2.3rem] font-black uppercase leading-[1.08] tracking-[-0.02em] text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.6)] sm:text-5xl lg:text-[3.7rem]" style={{ animationDelay: "70ms" }}>
                Zakružování plechů
                <br />
                a profilů
                <br />
                <span className="text-[#E2640F]">podle výkresu</span>
              </h1>

              <p className="kv-up mt-5 max-w-lg text-base leading-snug text-white/80 sm:text-lg" style={{ animationDelay: "140ms" }}>
                Stáčení plechů, profilů a atypických tvarů a TIG svařování nerezu
                i hliníku pro Jablonec nad Nisou, Liberec a Turnov.
              </p>

              <div className="kv-up mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={{ animationDelay: "210ms" }}>
                <a
                  href={PHONE_HREF}
                  className="inline-flex w-full items-center justify-center gap-2 bg-[#E2640F] px-6 py-4 text-center font-[family-name:var(--font-montserrat)] text-[13px] font-black uppercase leading-tight tracking-wide text-white shadow-[0_4px_0_0_#9C440A] transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#C9560B] hover:shadow-[0_7px_14px_-4px_rgba(226,100,15,0.5)] sm:w-auto"
                >
                  <Icon name="phone" className="h-4 w-4 shrink-0" />
                  Zavolat a domluvit zakázku
                </a>
                <a
                  href={MAIL_HREF}
                  className="inline-flex w-full items-center justify-center gap-2 border-2 border-white/80 bg-white/[0.07] px-6 py-4 text-center font-[family-name:var(--font-montserrat)] text-[13px] font-black uppercase leading-tight tracking-wide text-white backdrop-blur-sm transition-[transform,background-color,color] duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#14110C] sm:w-auto"
                >
                  <Icon name="mail" className="h-4 w-4 shrink-0" />
                  Poslat poptávku e-mailem
                </a>
              </div>

              <ul className="kv-up mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/20 pt-6" style={{ animationDelay: "270ms" }}>
                {HERO_TRUST.map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-[12.5px] font-bold uppercase tracking-wide text-white/90"
                  >
                    <Icon name="check" className="h-[18px] w-[18px] shrink-0 text-[#E2640F]" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Co pro vás vyrobíme ── */}
        <section id="sluzby" className="bg-[#EFE8DA]/50">
          <div className="mx-auto max-w-[1440px] px-6 py-10 sm:px-10 lg:py-12">
            <div className="mb-7 flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
              <div>
                <span className="font-[family-name:var(--font-montserrat)] text-xs font-black uppercase tracking-[0.18em] text-[#B0480A]">
                  Co pro vás
                </span>
                <h2 className="mt-1 font-[family-name:var(--font-montserrat)] text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-5xl">
                  Vyrobíme
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3.5">
              {SERVICES.map((card, i) => (
              <article
                key={card.title}
                className="kv-card group relative flex min-h-[280px] flex-col justify-end overflow-hidden bg-[#16130d] text-white transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-14px_rgba(0,0,0,0.7)]"
              >
                {/* tmavá báze + produktový motiv. Když je v asset mapě reálná
                    fotka, vykreslí se přes next/image (auto WebP/AVIF, lazy);
                    jinak fallback na procedurální SVG (CardMotif). */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ backgroundImage: CARD_BG[i] }}
                />
                {VISUAL_ASSETS.services[CARD_ICON_TO_ASSET[card.icon]] ? (
                  <Image
                    src={VISUAL_ASSETS.services[CARD_ICON_TO_ASSET[card.icon]] as string}
                    alt={`${card.title} — Kovovýroba Svoboda`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                ) : (
                  <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]">
                    <CardMotif type={card.icon} />
                  </div>
                )}
                {/* spodní ztmavení pro čitelnost textu */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/88 via-black/45 to-transparent" />
                {/* oranžový glow na hover */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ backgroundImage: "radial-gradient(120% 80% at 80% -10%, rgba(226,100,15,0.30), transparent 60%)" }}
                />
                {/* malá oranžová ikona + titul + text dole */}
                <div className="relative p-5">
                  <span className="mb-2.5 inline-flex h-9 w-9 items-center justify-center bg-[#E2640F] text-white shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                    <Icon name={card.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="font-[family-name:var(--font-montserrat)] text-base font-black uppercase leading-tight tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/75">
                    {card.text}
                  </p>
                </div>
              </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Přesnost. Zkušenosti. Kvalita. + tabulka ── */}
        <section id="moznosti" className="border-t border-[#17140F]/10">
          <div className="mx-auto grid max-w-[1440px] gap-6 px-6 py-10 sm:px-10 lg:grid-cols-[38fr_62fr] lg:py-12">
            {/* dark statement card — větší, metalická, s kovovým motivem */}
            <div
              className="relative flex min-h-[380px] flex-col justify-between overflow-hidden bg-[#17140F] p-9 text-white"
              style={{
                backgroundImage:
                  "radial-gradient(130% 90% at 20% 0%, rgba(150,160,175,0.22), transparent 55%), repeating-linear-gradient(118deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 9px), linear-gradient(155deg, #232019 0%, #100e09 60%, #1a160f 100%)",
              }}
            >
              {/* faded kovový svitek pro industriální feeling */}
              <div className="pointer-events-none absolute -right-10 bottom-0 h-[78%] w-[70%] opacity-[0.22]">
                <CardMotif type="roll" />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/75 via-black/35 to-transparent" />
              <span className="relative font-[family-name:var(--font-montserrat)] text-[11px] font-bold uppercase tracking-[0.25em] text-[#E2640F]">
                Naše výroba
              </span>
              <h2 className="relative mt-6 font-[family-name:var(--font-montserrat)] text-5xl font-black uppercase leading-[0.98] tracking-tight">
                Zakružujeme.
                <br />
                Svařujeme.
                <br />
                Vyrábíme
                <br />
                <span className="text-[#E2640F]">podle výkresu.</span>
              </h2>
              <p className="relative mt-6 text-sm text-white/65">
                Stáčení a svařování s praxí od roku 1992.
              </p>
            </div>

            {/* tech table — 2 sloupce, technický grid */}
            <div className="border border-[#17140F]/15 bg-[#FBF8F1]">
              <div className="flex items-center justify-between border-b border-[#17140F]/15 bg-[#17140F] px-7 py-4">
                <h3 className="font-[family-name:var(--font-montserrat)] text-sm font-black uppercase tracking-[0.2em] text-white">
                  Technologie a možnosti
                </h3>
                <Icon name="blueprint" className="h-5 w-5 text-[#E2640F]" />
              </div>
              <dl className="grid grid-cols-1 gap-px bg-[#17140F]/12 sm:grid-cols-2">
                {TECH_ROWS.map(([k, v]) => (
                  <div key={k} className="flex items-start gap-3 bg-[#FBF8F1] px-6 py-[1.1rem]">
                    <span className="mt-[6px] h-2 w-2 shrink-0 bg-[#E2640F]" />
                    <div>
                      <dt className="font-[family-name:var(--font-montserrat)] text-[12px] font-black uppercase tracking-wider text-[#17140F]">
                        {k}
                      </dt>
                      <dd className="mt-0.5 text-[13.5px] leading-snug text-[#5C564C]">{v}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* trust strip */}
          <div className="border-y border-[#17140F]/12 bg-[#EFE6D3]">
            <ul className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-5 sm:px-10">
              {TABLE_TRUST.map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-xs font-black uppercase tracking-widest text-[#17140F]/80"
                >
                  <Icon name="check" className="h-4 w-4 text-[#E2640F]" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Naše dílna / Ukázky výroby ── */}
        <section id="dilna" className="border-t border-[#17140F]/10 bg-[#EFE8DA]/50">
          <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-10 lg:py-14">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div className="flex items-end gap-4">
                <span className="font-[family-name:var(--font-montserrat)] text-sm font-black text-[#B0480A]">
                  02
                </span>
                <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-4xl">
                  Naše
                  <br />
                  realizace
                </h2>
              </div>
            </div>

            {/* Dvě pojmenované větve: hlavní „Technická výroba" první,
                doplňková „Konstrukce a montáže" druhá — hierarchie je hned
                čitelná. Na desktopu každá větev = jedna řada 4 fotek. */}
            <div className="space-y-7">
              {GALLERY_GROUPS.map((group) => (
                <div key={group.label}>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-px w-6 bg-[#B0480A]" />
                    <h3 className="font-[family-name:var(--font-montserrat)] text-[12px] font-black uppercase tracking-[0.18em] text-[#B0480A]">
                      {group.label}
                    </h3>
                  </div>
                  <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                    {group.items.map((g) => (
                      <li
                        key={g.src}
                        className="group relative aspect-[4/3] overflow-hidden bg-[#16130d]"
                      >
                        <Image
                          src={g.src}
                          alt={g.alt}
                          fill
                          loading="lazy"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                        />
                        {/* jemné spodní ztmavení — drží jednotný tmavý ořez galerie */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Jak probíhá spolupráce ── */}
        <section id="postup" className="border-t border-[#17140F]/10">
          <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-10 lg:py-14">
            <div className="mb-10 flex items-end gap-4">
              <span className="font-[family-name:var(--font-montserrat)] text-sm font-black text-[#B0480A]">
                03
              </span>
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-4xl">
                Jak probíhá
                <br />
                spolupráce
              </h2>
            </div>

            <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s) => (
                <li
                  key={s.n}
                  className="relative border border-[#17140F]/15 bg-[#FBF8F1] p-6"
                >
                  <span className="font-[family-name:var(--font-montserrat)] text-5xl font-black leading-none text-[#E2640F]/20">
                    {s.n}
                  </span>
                  <h3 className="mt-3 font-[family-name:var(--font-montserrat)] text-base font-black uppercase tracking-wide">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5C564C]">
                    {s.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Proč se obrátit právě na nás (dark band) ── */}
        <section className="relative overflow-hidden bg-[#17140F] text-white">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative mx-auto grid max-w-[1440px] gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:py-14">
            <div>
              <span className="font-[family-name:var(--font-montserrat)] text-[11px] font-bold uppercase tracking-[0.25em] text-[#E2640F]">
                04
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-montserrat)] text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-4xl">
                Proč se obrátit
                <br />
                právě na nás
              </h2>
            </div>

            <ul className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
              {REASONS.map((r) => (
                <li key={r.strong} className="flex gap-3 border-t border-white/10 pt-4">
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-[#E2640F]" />
                  <p className="text-sm leading-relaxed text-white/75">
                    <span className="font-[family-name:var(--font-montserrat)] font-black uppercase tracking-wide text-white">
                      {r.strong}
                    </span>{" "}
                    {r.rest}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── FAQ + poptávka ── */}
        <section id="faq" className="border-t border-[#17140F]/10">
          <div className="mx-auto grid max-w-[1440px] gap-6 px-6 py-12 sm:px-10 lg:grid-cols-3 lg:py-14">
            {/* FAQ */}
            <div>
              <h2 className="mb-6 font-[family-name:var(--font-montserrat)] text-2xl font-black uppercase tracking-tight">
                FAQ
              </h2>
              {/* Nativní <details> accordion — bez JS, plně přístupný
                  (klávesnice, screen reader). „+" se přepne na „–" přes
                  [open] selektor v KV_ANIM_CSS. */}
              <ul className="divide-y divide-[#17140F]/12 border-y border-[#17140F]/12">
                {FAQ.map((item) => (
                  <li key={item.q}>
                    <details className="kv-faq group">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4">
                        <span className="font-[family-name:var(--font-montserrat)] text-sm font-bold text-[#17140F]">
                          {item.q}
                        </span>
                        <span
                          aria-hidden
                          className="flex h-6 w-6 shrink-0 items-center justify-center border border-[#17140F]/25 text-[#E2640F] transition-colors group-open:border-[#E2640F] group-open:bg-[#E2640F] group-open:text-white"
                        >
                          <span className="kv-faq-plus">+</span>
                        </span>
                      </summary>
                      <p className="pb-4 pr-10 text-[13.5px] leading-relaxed text-[#5C564C]">
                        {item.a}
                      </p>
                    </details>
                  </li>
                ))}
              </ul>
            </div>

            {/* orange contact panel — telefon nahoře a výrazně, střed vyplněn
                praktickým „Co poslat k nacenění" (pomáhá tech. nákupčímu). */}
            <div
              id="kontakt"
              className="relative flex flex-col gap-6 overflow-hidden bg-[#E2640F] p-8 text-white"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.25) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="relative">
                <h2 className="font-[family-name:var(--font-montserrat)] text-4xl font-black uppercase leading-[0.95] tracking-tight">
                  Pošlete
                  <br />
                  poptávku
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/90">
                  Pošlete výkres nebo popište, co potřebujete zakružit či svařit
                  — ozveme se vám co nejdříve.
                </p>
              </div>

              {/* telefon výrazně + kontakt (vysoko v panelu) */}
              <div className="relative">
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-3 border-y-2 border-white/30 py-3 font-[family-name:var(--font-montserrat)] text-2xl font-black tracking-wide hover:underline"
                >
                  <Icon name="phone" className="h-6 w-6 shrink-0" />
                  +420 602 972 415
                </a>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a
                      href={MAIL_HREF}
                      className="flex items-center gap-3 text-sm font-semibold hover:underline"
                    >
                      <Icon name="mail" className="h-5 w-5 shrink-0" />
                      info@kovovyrobasvoboda.cz
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white/85">
                    <Icon name="clock" className="h-5 w-5 shrink-0" />
                    Po telefonické dohodě
                  </li>
                </ul>
              </div>

              {/* Co poslat k nacenění — vyplní střed a pomůže nákupčímu */}
              <div className="relative border-t border-white/25 pt-5">
                <h3 className="font-[family-name:var(--font-montserrat)] text-[12px] font-black uppercase tracking-[0.18em] text-white">
                  Co poslat k nacenění
                </h3>
                <ul className="mt-3 grid grid-cols-1 gap-2">
                  {[
                    "Výkres nebo náčrt",
                    "Materiál (ocel / nerez / hliník)",
                    "Rozměry",
                    "Počet kusů",
                    "Požadovaný termín",
                    "PDF / DXF / DWG, pokud je k dispozici",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2.5 text-sm font-semibold">
                      <Icon name="check" className="h-4 w-4 shrink-0 text-white" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technický poptávkový formulář (náhled – bez backendu).
                TODO(backend): napojit odeslání. Plán: Tally → Make.com →
                vlastní endpoint / e-mail. Zatím je tlačítko type="button"
                a žádná data se neodesílají. Upload výkresu ZÁMĚRNĚ není
                (chybí storage) — místo něj výzva poslat výkres e-mailem. */}
            <form
              className="flex flex-col gap-3.5 border border-[#17140F]/15 bg-[#FBF8F1] p-7"
              aria-label="Technická poptávka (náhled)"
            >
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <Field label="Jméno / firma" name="jmeno" type="text" autoComplete="organization" />
                <Field label="Telefon" name="telefon" type="tel" autoComplete="tel" />
              </div>
              <Field label="E-mail" name="email" type="email" autoComplete="email" />
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <SelectField
                  label="Materiál"
                  name="material"
                  options={[
                    "Nevím / poradíte",
                    "Konstrukční ocel",
                    "Nerezová ocel",
                    "Hliník",
                    "Jiný",
                  ]}
                />
                <SelectField
                  label="Množství"
                  name="mnozstvi"
                  options={["Kusová výroba", "Malá série", "Větší série"]}
                />
              </div>
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <Field
                  label="Co zakružit / svařit?"
                  name="poptavka"
                  type="text"
                />
                <Field label="Požadovaný termín" name="termin" type="text" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="zprava"
                  className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-wider text-[#17140F]/70"
                >
                  Popis zakázky / rozměry
                </label>
                <textarea
                  id="zprava"
                  name="zprava"
                  rows={3}
                  className="resize-none border border-[#17140F]/20 bg-white px-3 py-2.5 text-sm text-[#17140F] outline-none focus:border-[#E2640F]"
                />
              </div>

              {/* Výkres — bez reálného uploadu (chybí storage). Jen výzva
                  poslat e-mailem + zaškrtnutí, že výkres zákazník dodá. */}
              <div className="flex items-start gap-2.5 border border-dashed border-[#17140F]/25 bg-[#F4EEE2] px-3.5 py-3">
                <Icon name="blueprint" className="mt-0.5 h-5 w-5 shrink-0 text-[#E2640F]" />
                <div className="text-[12px] leading-relaxed text-[#5C564C]">
                  <p className="font-semibold text-[#17140F]">
                    Máte výkres? Pošlete ho e-mailem.
                  </p>
                  <p>
                    PDF, DXF nebo DWG na{" "}
                    <a href={MAIL_HREF} className="font-semibold text-[#B0480A] underline">
                      info@kovovyrobasvoboda.cz
                    </a>
                    . Výkres není podmínka — stačí rozměry a popis.
                  </p>
                  <label className="mt-2 flex cursor-pointer items-center gap-2 font-medium text-[#17140F]">
                    <input
                      type="checkbox"
                      name="vykres_emailem"
                      className="h-4 w-4 accent-[#E2640F]"
                    />
                    Výkres pošlu e-mailem
                  </label>
                </div>
              </div>

              {/* PREVIEW: formulář zatím nemá backend, proto NENÍ falešný submit.
                  Primární akce je funkční e-mail (otevře klienta) + telefon —
                  klient má vždy reálnou cestu ke kontaktu. Online odeslání se
                  napojí po spuštění na vlastní doméně. */}
              <a
                href={`${MAIL_HREF}?subject=${encodeURIComponent("Poptávka z webu Kovovýroba Svoboda")}`}
                className="mt-1 inline-flex items-center justify-center gap-2 bg-[#17140F] px-6 py-4 font-[family-name:var(--font-montserrat)] text-sm font-black uppercase tracking-widest text-white transition-colors hover:bg-[#E2640F]"
              >
                <Icon name="mail" className="h-4 w-4 shrink-0" />
                Odeslat poptávku e-mailem
              </a>
              <p className="text-[11px] leading-relaxed text-[#5C564C]">
                Náhled webu — poptávku zatím pošlete e-mailem nebo zavolejte na{" "}
                <a href={PHONE_HREF} className="font-semibold text-[#B0480A] underline">
                  +420 602 972 415
                </a>
                . Online odeslání formuláře se zapne po spuštění.
              </p>
            </form>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-[#17140F] text-white">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-14 sm:px-10 md:grid-cols-3">
          <div>
            {/* Kovová značka (čte se na tmavém pozadí) + textový wordmark
                (světlý — vlastní logo má tmavý nápis, který by na tmavém
                footeru nebyl čitelný). */}
            {/* alt="" — dekorativní: hned vedle je textová identifikace firmy. */}
            <Image
              src="/clients/kovovyrobasvoboda/logo-mark.webp"
              alt=""
              width={131}
              height={151}
              className="mb-4 h-14 w-auto"
            />
            <div className="font-[family-name:var(--font-montserrat)] leading-none">
              <span className="block text-xl font-black uppercase tracking-tight">
                Kovovýroba
              </span>
              <span className="block text-xl font-black uppercase tracking-[0.2em] text-[#E2640F]">
                Svoboda
              </span>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50">
                Od roku 1992
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Zakružování plechů, profilů a atypických tvarů. TIG svařování
              nerezu i hliníku.
            </p>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-montserrat)] text-xs font-black uppercase tracking-[0.2em] text-[#E2640F]">
              Kontakt
            </h3>
            <address className="mt-4 space-y-1.5 text-sm not-italic leading-relaxed text-white/70">
              <p>Kovovýroba Svoboda</p>
              <p>Rychnovská 262,</p>
              <p>46801 Jablonec nad Nisou</p>
              <p>IČO: 44533268</p>
              <p className="pt-2">
                Telefon:{" "}
                <a href={PHONE_HREF} className="text-white hover:text-[#E2640F]">
                  +420 602 972 415
                </a>
              </p>
              <p>
                E-mail:{" "}
                <a href={MAIL_HREF} className="text-white hover:text-[#E2640F]">
                  info@kovovyrobasvoboda.cz
                </a>
              </p>
              <p>Web: kovovyrobasvoboda.cz</p>
            </address>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-montserrat)] text-xs font-black uppercase tracking-[0.2em] text-[#E2640F]">
              Působíme v regionech
            </h3>
            <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-white/70">
              <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-[#E2640F]" />
              <span>
                Jablonec nad Nisou,
                <br />
                Liberec a Turnov a okolí.
              </span>
            </p>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-[1440px] px-6 py-5 sm:px-10">
            <p className="text-xs text-white/45">
              © 2026 Kovovýroba Svoboda. Všechna práva vyhrazena.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* Pomocné textové pole formuláře */
function Field({
  label,
  name,
  type,
  autoComplete,
}: {
  label: string;
  name: string;
  type: string;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-wider text-[#17140F]/70"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="border border-[#17140F]/20 bg-white px-3 py-2.5 text-sm text-[#17140F] outline-none focus:border-[#E2640F]"
      />
    </div>
  );
}

/* LocalBusiness strukturovaná data (JSON-LD) pro Kovovýrobu Svoboda.
   Pouze OVĚŘENÉ údaje (z footeru / zadání klienta): NAP, IČO, oblast
   působnosti, rok založení. Nic se nevymýšlí.

   POZN.: Stránka je zatím `robots: noindex` (klientský preview), takže tato
   data Google reálně nezaindexuje — jsou připravená pro chvíli, kdy web
   půjde na vlastní doménu kovovyrobasvoboda.cz a indexace se zapne.
   `url` proto míří na cílovou doménu uvedenou ve footeru. */
function KovoJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Kovovýroba Svoboda",
    description:
      "Zakružování plechů a profilů podle výkresu, atypické tvary a kužely, TIG svařování nerezu i hliníku. Kusová i opakovaná výroba.",
    url: "https://www.kovovyrobasvoboda.cz",
    telephone: "+420602972415",
    email: "info@kovovyrobasvoboda.cz",
    foundingDate: "1992",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rychnovská 262",
      addressLocality: "Jablonec nad Nisou",
      postalCode: "46801",
      addressCountry: "CZ",
    },
    identifier: { "@type": "PropertyValue", propertyID: "IČO", value: "44533268" },
    areaServed: [
      { "@type": "City", name: "Jablonec nad Nisou" },
      { "@type": "City", name: "Liberec" },
      { "@type": "City", name: "Turnov" },
    ],
    knowsAbout: [
      "Zakružování plechů",
      "Zakružování profilů",
      "Atypické tvary a kužely",
      "TIG svařování nerezu a hliníku",
      "Výroba podle výkresu",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* Pomocný select formuláře — stejný vizuál jako Field. */
function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-wider text-[#17140F]/70"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="border border-[#17140F]/20 bg-white px-3 py-2.5 text-sm text-[#17140F] outline-none focus:border-[#E2640F]"
      >
        <option value="" disabled>
          Vyberte…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
