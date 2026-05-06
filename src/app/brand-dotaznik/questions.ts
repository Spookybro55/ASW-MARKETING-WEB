export type ContactFieldType = "text" | "email" | "tel";

export type ContactField = {
  number: string;
  name: string;
  label: string;
  type: ContactFieldType;
  required?: boolean;
  placeholder?: string;
};

export type QuestionType =
  | "textarea"
  | "radio"
  | "checkbox";

export type Question = {
  number: string;
  name: string;
  label: string;
  description?: string;
  type: QuestionType;
  options?: string[];
  hasFollowup?: boolean;
  followupName?: string;
  followupLabel?: string;
  followupPlaceholder?: string;
};

export type Section = {
  id: string;
  number: string;
  title: string;
  intro?: string;
  questions: Question[];
};

export const contactFields: ContactField[] = [
  {
    number: "1",
    name: "company_name",
    label: "Název firmy / značky",
    type: "text",
    required: true,
    placeholder: "Např. Novák Stavby",
  },
  {
    number: "2",
    name: "contact_person",
    label: "Kontaktní osoba",
    type: "text",
    required: true,
    placeholder: "Jan Novák",
  },
  {
    number: "3",
    name: "email",
    label: "E-mail",
    type: "email",
    required: true,
    placeholder: "jan@firma.cz",
  },
  {
    number: "4",
    name: "phone",
    label: "Telefon",
    type: "tel",
    required: false,
    placeholder: "+420 ...",
  },
];

export const sections: Section[] = [
  {
    id: "zakladni-informace",
    number: "1",
    title: "Základní informace",
    intro:
      "Pomůže nám pochopit, co děláte, pro koho a v čem jste jiní než konkurence.",
    questions: [
      {
        number: "1",
        name: "q1_exact_name",
        label: "Jaký je přesný název firmy nebo značky?",
        description:
          "Napište prosím přesný název tak, jak se má používat v logu a na webu.",
        type: "textarea",
      },
      {
        number: "2",
        name: "q2_what_company_does",
        label: "Jak byste jednou větou popsali, co vaše firma dělá?",
        description:
          "Zkuste to napsat jednoduše, jako kdybyste to vysvětlovali novému zákazníkovi.",
        type: "textarea",
      },
      {
        number: "3",
        name: "q3_typical_customer",
        label: "Kdo je váš typický zákazník?",
        description:
          "Například domácnosti, firmy, majitelé domů, developeři, restaurace, lokální zákazníci, prémioví klienti apod.",
        type: "textarea",
      },
      {
        number: "4",
        name: "q4_main_problem",
        label: "Jaký hlavní problém zákazníkovi řešíte?",
        description:
          "Co zákazník potřebuje vyřešit ve chvíli, kdy vás kontaktuje?",
        type: "textarea",
      },
      {
        number: "5",
        name: "q5_why_choose_you",
        label: "Proč si zákazníci vybírají právě vás?",
        description:
          "Například rychlost, kvalita, cena, zkušenosti, osobní přístup, spolehlivost, tradice, specializace.",
        type: "textarea",
      },
    ],
  },
  {
    id: "soucasna-znacka",
    number: "2",
    title: "Současná značka",
    intro:
      "Zjistíme, na čem můžeme stavět a čeho se naopak při novém návrhu vyvarovat.",
    questions: [
      {
        number: "6",
        name: "q6_current_logo_likes",
        label: "Máte aktuální logo? Pokud ano, co se vám na něm líbí?",
        description:
          "Napište, jestli je na současném logu něco, co by stálo za zachování.",
        type: "textarea",
      },
      {
        number: "7",
        name: "q7_current_logo_dislikes",
        label: "Co vám na současném logu nebo vizuálním stylu vadí?",
        description:
          "Například zastaralost, špatná čitelnost, nevhodné barvy, amatérský vzhled, špatné použití na webu apod.",
        type: "textarea",
      },
      {
        number: "8",
        name: "q8_keep",
        label: "Je něco, co chcete určitě zachovat?",
        description:
          "Například barvu, symbol, název, styl, tradici nebo něco, co zákazníci znají.",
        type: "textarea",
      },
      {
        number: "9",
        name: "q9_change_level",
        label: "Jak výrazná změna je pro vás přijatelná?",
        description: "Vyberte směr, který je vám nejbližší.",
        type: "radio",
        options: [
          "Jemné osvěžení",
          "Modernizace, ale pořád návaznost na starou značku",
          "Úplně nový vizuální směr",
          "Nejsem si jistý/á, nechám si doporučit",
        ],
        hasFollowup: true,
        followupName: "q9_change_level_note",
        followupLabel: "Chcete k tomu něco doplnit?",
        followupPlaceholder: "Sem můžete připsat upřesnění…",
      },
    ],
  },
  {
    id: "styl-znacky",
    number: "3",
    title: "Styl značky",
    intro:
      "Z odpovědí vyplyne osobnost značky — jak má vypadat, působit a komunikovat.",
    questions: [
      {
        number: "10",
        name: "q10_first_impression",
        label: "Jak má značka působit na první pohled?",
        description:
          "Například profesionálně, moderně, prémiově, lidsky, dostupně, technicky, tradičně, luxusně, přátelsky, jednoduše.",
        type: "textarea",
      },
      {
        number: "11",
        name: "q11_avoid_impression",
        label: "Jak určitě působit nemá?",
        description:
          "Například levně, chaoticky, moc korporátně, moc dětsky, zastarale, nečitelně, agresivně apod.",
        type: "textarea",
      },
      {
        number: "12",
        name: "q12_three_qualities",
        label: "Jaké 3 vlastnosti by si měl člověk spojit s vaší značkou?",
        description:
          "Například spolehlivost, odbornost, rychlost, čistota, férovost, kvalita, lidskost.",
        type: "textarea",
      },
      {
        number: "13",
        name: "q13_brand_persona",
        label: "Kdyby vaše značka byla člověk, jaký by byl?",
        description:
          "Například zkušený odborník, přátelský řemeslník, prémiový poradce, moderní technologická firma, férový praktik.",
        type: "textarea",
      },
    ],
  },
  {
    id: "vizualni-preference",
    number: "4",
    title: "Vizuální preference",
    intro:
      "Zaměříme se na barvy, styly a inspiraci, které pro značku zvažujeme.",
    questions: [
      {
        number: "14",
        name: "q14_colors_like",
        label: "Jaké barvy se vám líbí nebo by podle vás ke značce seděly?",
        description:
          "Můžete napsat konkrétní barvy nebo jen pocitově, například tmavá, světlá, přírodní, výrazná, elegantní.",
        type: "textarea",
      },
      {
        number: "15",
        name: "q15_colors_avoid",
        label: "Jakým barvám se chcete vyhnout?",
        description: "Napište barvy, které určitě nechcete používat.",
        type: "textarea",
      },
      {
        number: "16",
        name: "q16_visual_style",
        label: "Jaký vizuální styl je vám nejbližší?",
        description: "Můžete vybrat jednu nebo více možností.",
        type: "checkbox",
        options: [
          "Jednoduchý moderní styl",
          "Elegantní styl",
          "Technický styl",
          "Tradiční styl",
          "Prémiový styl",
          "Výrazný a zapamatovatelný styl",
          "Lidský a přátelský styl",
          "Nejsem si jistý/á, nechám si doporučit",
        ],
      },
      {
        number: "17",
        name: "q17_inspiration_like",
        label: "Máte značky nebo weby, které se vám vizuálně líbí?",
        description:
          "Vložte odkazy nebo názvy značek. Může jít i o firmy mimo váš obor.",
        type: "textarea",
      },
      {
        number: "18",
        name: "q18_inspiration_dislike",
        label: "Máte značky nebo weby, které se vám naopak nelíbí?",
        description: "Napište, čemu se máme při návrhu vyhnout.",
        type: "textarea",
      },
    ],
  },
  {
    id: "pouziti-loga",
    number: "5",
    title: "Použití loga",
    intro:
      "Praktická stránka — kde všude se logo objeví a co musí technicky zvládat.",
    questions: [
      {
        number: "19",
        name: "q19_logo_usage",
        label: "Kde všude se bude logo používat?",
        description:
          "Například web, sociální sítě, auto, cedule, vizitky, faktury, pracovní oblečení, letáky, polepy.",
        type: "checkbox",
        options: [
          "Web",
          "Sociální sítě",
          "Vizitky",
          "Faktury / dokumenty",
          "Cedule",
          "Polepy auta",
          "Pracovní oblečení",
          "Letáky / tiskoviny",
          "Reklamní předměty",
          "Jiné",
        ],
        hasFollowup: true,
        followupName: "q19_logo_usage_other",
        followupLabel: "Pokud „Jiné“, prosím upřesněte:",
        followupPlaceholder: "Napište další místa použití…",
      },
      {
        number: "20",
        name: "q20_simple_icon",
        label:
          "Budete potřebovat i jednoduchou ikonku pro web nebo sociální sítě?",
        description:
          "Například favicon, profilová fotka na Instagram/Facebook, jednoduchý symbol bez textu.",
        type: "radio",
        options: ["Ano", "Ne", "Nejsem si jistý/á"],
      },
      {
        number: "21",
        name: "q21_print_use",
        label: "Bude se logo používat i v tisku, na cedulích, výšivkách nebo polepech?",
        description:
          "To je důležité kvůli jednoduchosti, čitelnosti a technickému zpracování loga.",
        type: "textarea",
      },
      {
        number: "22",
        name: "q22_slogan",
        label: "Má značka slogan?",
        description:
          "Pokud ano, napište ho prosím. Pokud slogan zatím nemáte, můžete napsat, jestli ho chcete vytvořit.",
        type: "textarea",
      },
    ],
  },
  {
    id: "web-a-komunikace",
    number: "6",
    title: "Web a komunikace",
    intro:
      "Z těchto odpovědí vyplyne struktura webu, hierarchie obsahu a hlavní výzvy k akci.",
    questions: [
      {
        number: "23",
        name: "q23_web_goal",
        label: "Co má nový web hlavně splnit?",
        description:
          "Například získat poptávky, působit důvěryhodně, vysvětlit služby, ukázat reference, odlišit se od konkurence.",
        type: "textarea",
      },
      {
        number: "24",
        name: "q24_web_impression",
        label: "Jaký dojem má mít zákazník po návštěvě webu?",
        description:
          "Například „tohle je spolehlivá firma“, „těm můžu zavolat“, „vypadají profesionálně“, „tohle je přesně služba, kterou hledám“.",
        type: "textarea",
      },
      {
        number: "25",
        name: "q25_main_action",
        label: "Jakou hlavní akci má návštěvník na webu udělat?",
        description:
          "Například zavolat, vyplnit formulář, objednat službu, napsat e-mail, domluvit konzultaci.",
        type: "radio",
        options: [
          "Zavolat",
          "Napsat e-mail",
          "Vyplnit poptávkový formulář",
          "Objednat službu",
          "Domluvit konzultaci",
          "Prohlédnout reference",
          "Jiné",
        ],
        hasFollowup: true,
        followupName: "q25_main_action_other",
        followupLabel: "Pokud „Jiné“, prosím upřesněte:",
        followupPlaceholder: "Co konkrétně má návštěvník udělat?",
      },
    ],
  },
  {
    id: "prakticke-informace",
    number: "7",
    title: "Praktické informace",
    intro:
      "Důležité provozní detaily — termíny, schvalovatelé a doplňující kontext projektu.",
    questions: [
      {
        number: "26",
        name: "q26_approvers",
        label: "Kdo bude návrhy loga a webu schvalovat?",
        description:
          "Napište prosím jména nebo role lidí, kteří budou do schvalování zapojení.",
        type: "textarea",
      },
      {
        number: "27",
        name: "q27_deadline",
        label:
          "Máte nějaký termín, do kdy potřebujete mít logo nebo web hotový?",
        description: "Napište ideální termín nebo časový rámec.",
        type: "textarea",
      },
      {
        number: "28",
        name: "q28_anything_else",
        label: "Je něco dalšího, co bychom měli vědět?",
        description:
          "Sem můžete napsat jakékoliv doplňující informace, nápady, obavy nebo očekávání.",
        type: "textarea",
      },
    ],
  },
  {
    id: "souhlas-pripadova-studie",
    number: "8",
    title: "Souhlas s případovou studií",
    intro:
      "Po dokončení projektu rádi výsledek prezentujeme. Chceme znát váš pohled.",
    questions: [
      {
        number: "29",
        name: "q29_case_study",
        label:
          "Můžeme po dokončení projektu ukázat výsledek jako případovou studii?",
        description:
          "Případová studie může obsahovat ukázku procesu, nový vizuální styl a výsledný web.",
        type: "radio",
        options: [
          "Ano, můžete uvést název firmy",
          "Ano, ale anonymně",
          "Ne, nechci projekt veřejně prezentovat",
          "Chci se k tomu vyjádřit až po dokončení projektu",
        ],
      },
      {
        number: "30",
        name: "q30_before_after",
        label: "Můžeme ukázat srovnání před a po?",
        description:
          "Například staré logo, nový vizuální styl, starý web a nový web.",
        type: "radio",
        options: [
          "Ano",
          "Ano, ale až po schválení",
          "Ne",
          "Chci se k tomu vyjádřit až po dokončení projektu",
        ],
      },
    ],
  },
];
