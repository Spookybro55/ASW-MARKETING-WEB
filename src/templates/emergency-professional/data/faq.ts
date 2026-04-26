export interface FaqItem {
  q: string;
  a: string;
}

export const EMERGENCY_FAQ: readonly FaqItem[] = [
  {
    q: "Jak rychle můžete přijet?",
    a: "Pro havarijní zásahy garantujeme příjezd do 90 minut, zpravidla výrazně rychleji. Záleží na aktuální dopravě a vzdálenosti.",
  },
  {
    q: "Pracujete i o víkendech?",
    a: "Ano. Naše pohotovost je dostupná 24/7 včetně víkendů a svátků.",
  },
  {
    q: "Jak probíhá platba?",
    a: "Platba probíhá hotově nebo kartou na místě po dokončení práce. Vystavíme vám doklad.",
  },
  {
    q: "Poskytnete přesnou cenu předem?",
    a: "Po telefonické konzultaci a diagnostice na místě vám sdělíme orientační cenu před zahájením prací. Cena se nemění bez vašeho souhlasu.",
  },
  {
    q: "Co když je problém složitější?",
    a: "V případě, že problém vyžaduje delší zákrok nebo specializovaný materiál, dohodneme s vámi další postup před pokračováním.",
  },
  {
    q: "Dostanu doklad o provedené práci?",
    a: "Ano, vždy vystavíme doklad se specifikací prací a poskytnutou zárukou.",
  },
];
