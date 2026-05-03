export type StepIcon = "chat" | "calendar" | "check" | "shield";

export interface StepItem {
  num: number;
  title: string;
  desc: string;
  icon: StepIcon;
}

export const COMMUNITY_STEPS: readonly StepItem[] = [
  { num: 1, title: "Kontaktujete nás", desc: "Zavoláte nebo napíšete, popíšete nám, co potřebujete vyřešit.", icon: "chat" },
  { num: 2, title: "Domluvíme termín", desc: "Najdeme společný čas, který vám vyhovuje.", icon: "calendar" },
  { num: 3, title: "Provedeme práci", desc: "Odvedeme kvalitní práci s ohledem na vaše požadavky.", icon: "check" },
  { num: 4, title: "Předáme hotové dílo", desc: "Po dokončení vše zkontrolujeme společně s vámi.", icon: "shield" },
];
