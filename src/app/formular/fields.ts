/*
 * Klientský onboarding / intake formulář (/formular) — JEDINÝ zdroj pravdy
 * pro pole. Čte z něj jak klientský formulář (FormularForm.tsx), tak server
 * (api/intake-form/route.ts), který z téže definice skládá e-mail a validuje.
 * Stejný vzor jako brand-dotaznik (questions.ts), jen pro web-intake.
 *
 * `importance` je POUZE lidský štítek pro klienta (Důležité / Pomůže nám /
 * Volitelné) — žádné interní must-have/nice-to-have názvosloví. Server­ová
 * povinnost se řídí `required`.
 */

export type IntakeFieldType =
  | "text"
  | "email"
  | "tel"
  | "url"
  | "textarea"
  | "radio"
  | "checkbox";

export type IntakeImportance = "required" | "helpful" | "optional";

export type IntakeField = {
  name: string;
  label: string;
  type: IntakeFieldType;
  importance: IntakeImportance;
  /** Server-side povinnost. Pro radio = musí být vybraná hodnota; pro
      checkbox = musí být zaškrtnuto (souhlas). */
  required?: boolean;
  placeholder?: string;
  help?: string;
  /** Možnosti pro radio. */
  options?: string[];
};

export type IntakeSection = {
  id: string;
  number: number;
  title: string;
  description: string;
  fields: IntakeField[];
};

export const importanceLabel: Record<IntakeImportance, string> = {
  required: "Důležité",
  helpful: "Pomůže nám",
  optional: "Volitelné",
};

export const sections: IntakeSection[] = [
  {
    id: "zakladni-udaje",
    number: 1,
    title: "Základní údaje",
    description:
      "Tyto údaje použijeme pro kontakt, patičku webu, fakturační údaje a lokální dohledatelnost.",
    fields: [
      {
        name: "companyName",
        label: "Název firmy přesně tak, jak má být uvedený na webu",
        type: "text",
        importance: "required",
        required: true,
        placeholder: "Např. Novák Stavby s.r.o.",
      },
      {
        name: "ico",
        label: "IČO",
        type: "text",
        importance: "required",
        required: true,
        placeholder: "12345678",
        help: "Stačí 8 číslic. Mezery nevadí, doplníme si je.",
      },
      {
        name: "billingAddress",
        label: "Sídlo / fakturační adresa",
        type: "textarea",
        importance: "required",
        required: true,
        placeholder: "Ulice a číslo, město, PSČ",
      },
      {
        name: "businessAddress",
        label: "Provozovna, pokud je jiná než sídlo",
        type: "textarea",
        importance: "optional",
      },
      {
        name: "mainPhone",
        label: "Hlavní telefon",
        type: "tel",
        importance: "required",
        required: true,
        placeholder: "+420 ...",
      },
      {
        name: "mainEmail",
        label: "Hlavní e-mail",
        type: "email",
        importance: "required",
        required: true,
        placeholder: "info@vasefirma.cz",
        help: "Na tento e-mail mohou zákazníci psát z webu.",
      },
      {
        name: "openingHours",
        label: "Otevírací doba",
        type: "textarea",
        importance: "required",
        required: true,
        placeholder: "Např. Po–Pá 8:00–17:00, po telefonu, nebo dle domluvy",
      },
      {
        name: "servedLocations",
        label: "Obsluhované lokality",
        type: "textarea",
        importance: "required",
        required: true,
        placeholder: "Např. Praha, Středočeský kraj, Brno a okolí, okres...",
        help: "Pomáhá nám to s lokálním SEO.",
      },
    ],
  },
  {
    id: "sluzby",
    number: 2,
    title: "Služby",
    description:
      "Potřebujeme vědět, které služby mají být na webu vidět nejvíc a které naopak nechcete aktivně propagovat.",
    fields: [
      {
        name: "mainServices",
        label: "Seznam hlavních služeb",
        type: "textarea",
        importance: "required",
        required: true,
        placeholder:
          "Napište ideálně 3–8 hlavních služeb, každou na nový řádek.",
      },
      {
        name: "priorityService",
        label: "Která služba je pro vás nejdůležitější?",
        type: "textarea",
        importance: "required",
        required: true,
        help: "Typicky služba, která vám přináší největší příjem nebo kterou chcete prodávat nejvíc.",
      },
      {
        name: "servicesToAvoid",
        label:
          "Jsou služby, které sice děláte, ale nechcete je na webu aktivně propagovat?",
        type: "textarea",
        importance: "required",
        required: true,
        placeholder: "Pokud žádné nejsou, napište „ne“.",
      },
      {
        name: "pricingInfo",
        label: "Chcete na webu uvádět orientační ceny?",
        type: "textarea",
        importance: "helpful",
        placeholder: "Např. od X Kč, cena na poptávku, fixní balíček...",
      },
    ],
  },
  {
    id: "texty-obsah",
    number: 3,
    title: "Texty a obsah",
    description:
      "Nemusíte psát hotové marketingové texty. Stačí věcně popsat firmu a my z toho připravíme použitelný obsah.",
    fields: [
      {
        name: "companyIntro",
        label: "Krátké představení firmy",
        type: "textarea",
        importance: "required",
        required: true,
        placeholder:
          "Kdo jste, co děláte, pro koho a kde působíte. Stačí 3–5 vět.",
      },
      {
        name: "whyChooseUs",
        label: "Proč si zákazníci vybírají právě vás?",
        type: "textarea",
        importance: "required",
        required: true,
        placeholder:
          "Napište 3–5 konkrétních důvodů. Např. rychlé termíny, osobní přístup, čistá práce, zkušenosti v oboru...",
        help: "Prosím konkrétně, ne jen „kvalita a profesionalita“.",
      },
      {
        name: "cooperationProcess",
        label: "Jak u vás probíhá spolupráce od poptávky po dodání?",
        type: "textarea",
        importance: "optional",
      },
      {
        name: "faq",
        label: "Jaké otázky vám zákazníci často pokládají?",
        type: "textarea",
        importance: "helpful",
        placeholder: "Napište ideálně 3–5 otázek a krátké odpovědi.",
      },
    ],
  },
  {
    id: "fotky-logo",
    number: 4,
    title: "Fotky a logo",
    description:
      "Fotky a logo pomáhají webu působit důvěryhodně. Pokud je zatím nemáte, nevadí — napíšete nám stav a domluvíme se. Velké soubory neposílejte sem; stačí odkaz na úložiště (Google Drive, Dropbox, OneDrive, WeTransfer).",
    fields: [
      {
        name: "logoState",
        label: "Máte logo?",
        type: "radio",
        importance: "required",
        required: true,
        options: [
          "Ano, mám logo ve SVG/PDF/AI",
          "Ano, mám PNG/JPG",
          "Logo zatím nemám",
          "Nevím",
        ],
      },
      {
        name: "logoLink",
        label: "Odkaz na logo",
        type: "url",
        importance: "optional",
        placeholder: "Vložte odkaz na složku nebo soubor, pokud ho máte.",
      },
      {
        name: "workPhotosState",
        label: "Máte fotky práce nebo realizací?",
        type: "radio",
        importance: "helpful",
        options: [
          "Ano, mám 5–15 fotek",
          "Mám jen pár fotek",
          "Nemám fotky",
          "Nevím",
        ],
      },
      {
        name: "workPhotosLink",
        label: "Odkaz na fotky práce / realizací",
        type: "url",
        importance: "optional",
        placeholder: "Odkaz na složku s fotkami, pokud ji máte.",
      },
      {
        name: "teamPhotosState",
        label: "Máte fotky týmu nebo lidí?",
        type: "radio",
        importance: "optional",
        options: ["Ano", "Ne", "Nevím"],
      },
      {
        name: "premisesPhotosState",
        label: "Máte fotky provozovny, auta, vybavení nebo dílny?",
        type: "radio",
        importance: "optional",
        options: ["Ano", "Ne", "Nevím"],
      },
      {
        name: "photoRights",
        label:
          "Potvrzuji, že k dodaným fotkám máme práva nebo souhlas k použití na webu.",
        type: "checkbox",
        importance: "required",
        required: true,
        help: "Pokud fotky zatím neposíláte, potvrďte, že nám dodáte pouze fotky, ke kterým máte práva.",
      },
      {
        name: "missingAssetsNote",
        label: "Pokud nemáte logo nebo fotky, jak to chcete řešit?",
        type: "textarea",
        importance: "optional",
        placeholder:
          "Např. domluvit focení, použít dočasné ilustrační fotky, vytvořit jednoduché typografické logo...",
      },
    ],
  },
  {
    id: "reference",
    number: 5,
    title: "Reference a ukázky práce",
    description:
      "Reference a ukázky práce pomáhají novým zákazníkům rychleji uvěřit, že jste správná volba.",
    fields: [
      {
        name: "reviews",
        label: "Máte recenze, které můžeme použít?",
        type: "textarea",
        importance: "helpful",
        placeholder:
          "Např. Google recenze, Firmy.cz, e-mailové reference, krátké citace zákazníků...",
      },
      {
        name: "portfolioExamples",
        label: "Máte ukázky prací nebo before/after?",
        type: "textarea",
        importance: "helpful",
      },
      {
        name: "allowedClientNames",
        label:
          "Jsou jména, loga nebo firmy klientů, které smíme na webu ukázat?",
        type: "textarea",
        importance: "optional",
        help: "Uveďte jen ty, kde máte souhlas.",
      },
      {
        name: "referenceConsent",
        label:
          "Potvrzuji, že případné recenze, jména klientů nebo loga dodáme jen se souhlasem ke zveřejnění.",
        type: "checkbox",
        importance: "optional",
      },
    ],
  },
  {
    id: "domena-pristupy",
    number: 6,
    title: "Doména, přístupy a technické věci",
    description:
      "Tyto informace nám pomůžou připravit spuštění webu, doménu, kontaktní formulář a základní měření. Hesla sem prosím nevkládejte.",
    fields: [
      {
        name: "domainState",
        label: "Jak je to s doménou?",
        type: "radio",
        importance: "required",
        required: true,
        options: [
          "Máme vlastní doménu",
          "Chceme novou doménu",
          "Doménu teprve řešíme",
          "Nevím",
        ],
      },
      {
        name: "domainName",
        label: "Název domény, pokud existuje",
        type: "text",
        importance: "optional",
        placeholder: "např. vasefirma.cz",
      },
      {
        name: "domainRegistrar",
        label: "Kde je doména registrovaná a kdo ji spravuje?",
        type: "textarea",
        importance: "required",
        required: true,
        placeholder:
          "Např. Wedos, Forpsi, Active24, Cloudflare, správce IT... Pokud nevíte, napište „nevím“.",
        help: "Prosím neposílejte sem hesla.",
      },
      {
        name: "currentHosting",
        label: "Máte současný web nebo hosting?",
        type: "textarea",
        importance: "optional",
        placeholder:
          "Pokud máte starý web, napište kde běží nebo vložte odkaz.",
      },
      {
        name: "googleBusinessProfile",
        label: "Máte Google Business Profile / firemní profil na Google?",
        type: "radio",
        importance: "required",
        required: true,
        options: [
          "Ano, máme a máme přístup",
          "Ano, ale nevíme, kdo má přístup",
          "Nemáme",
          "Nevím",
        ],
      },
      {
        name: "googleBusinessProfileNote",
        label: "Doplnění ke Google profilu",
        type: "textarea",
        importance: "optional",
        placeholder: "Odkaz na profil nebo poznámka, pokud je co doplnit.",
      },
      {
        name: "searchConsole",
        label: "Máte Google Search Console?",
        type: "radio",
        importance: "optional",
        options: ["Ano", "Ne", "Nevím"],
      },
      {
        name: "ga4",
        label: "Máte Google Analytics / GA4?",
        type: "radio",
        importance: "optional",
        options: ["Ano", "Ne", "Nevím"],
      },
      {
        name: "formDestinationEmail",
        label: "Na jaký e-mail mají chodit poptávky z nového webu?",
        type: "email",
        importance: "required",
        required: true,
        placeholder: "poptavky@vasefirma.cz",
      },
      {
        name: "accessNote",
        label: "Poznámka k přístupům",
        type: "textarea",
        importance: "optional",
        help: "Neposílejte sem hesla. Pokud budou potřeba, domluvíme bezpečný způsob předání.",
      },
    ],
  },
  {
    id: "kontaktni-osoba",
    number: 7,
    title: "Kontaktní osoba",
    description:
      "Abychom věděli, s kým řešit doplnění podkladů a schválení webu.",
    fields: [
      {
        name: "contactName",
        label: "Jméno kontaktní osoby",
        type: "text",
        importance: "required",
        required: true,
        placeholder: "Jan Novák",
      },
      {
        name: "contactEmail",
        label: "E-mail kontaktní osoby",
        type: "email",
        importance: "required",
        required: true,
        placeholder: "jan@vasefirma.cz",
      },
      {
        name: "contactPhone",
        label: "Telefon kontaktní osoby",
        type: "tel",
        importance: "required",
        required: true,
        placeholder: "+420 ...",
      },
      {
        name: "preferredContact",
        label: "Jak vás máme nejlépe kontaktovat?",
        type: "radio",
        importance: "optional",
        options: ["Telefon", "E-mail", "WhatsApp", "Je mi to jedno"],
      },
      {
        name: "additionalNote",
        label: "Je ještě něco, co bychom měli vědět?",
        type: "textarea",
        importance: "optional",
      },
    ],
  },
];

/** GDPR souhlas — renderovaný zvlášť pod formulářem, validovaný na serveru. */
export const gdprConsent = {
  name: "gdprConsent",
  label:
    "Souhlasím se zpracováním údajů za účelem přípravy webu a navazující komunikace.",
  note: "Údaje použijeme pouze pro přípravu webu a komunikaci k projektu. Hesla a citlivé přístupy nám prosím neposílejte přes tento formulář.",
} as const;

/** Plochý seznam všech polí (kromě gdprConsent) — pro server validaci/skládání. */
export const allIntakeFields: IntakeField[] = sections.flatMap((s) => s.fields);
