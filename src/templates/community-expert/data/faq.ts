export interface FaqItem {
  question: string;
  answer: string;
}

export const COMMUNITY_FAQ: readonly FaqItem[] = [
  {
    question: "Jak rychle můžeme přijet na prohlídku?",
    answer: "Snažíme se reagovat co nejrychleji. V běžných případech dokážeme prohlídku domluvit do několika dnů, u urgentních záležitostí se přizpůsobíme.",
  },
  {
    question: "Jaké jsou vaše platební podmínky?",
    answer: "Platbu řešíme individuálně podle typu zakázky. Konkrétní podmínky si ujasníme v nabídce před zahájením práce.",
  },
  {
    question: "Poskytujete záruku na provedené práce?",
    answer: "Ano, na naše práce poskytujeme záruku. Rozsah záleží na konkrétní službě a dohodě.",
  },
  {
    question: "Pracujete i o víkendu?",
    answer: "Víkendové termíny jsou možné po dohodě. Kontaktujte nás a najdeme řešení.",
  },
];
