export type ServiceIcon =
  | "alert-circle"
  | "droplet"
  | "flame"
  | "thermometer"
  | "wrench";

export interface ServiceItem {
  title: string;
  desc: string;
  icon: ServiceIcon;
  highlight: boolean;
}

export const EMERGENCY_SERVICES: readonly ServiceItem[] = [
  {
    title: "Havárie vody",
    desc: "Řešení prasklého potrubí, netěsností a zatopení. Rychlá pomoc při havárii.",
    icon: "alert-circle",
    highlight: false,
  },
  {
    title: "Ucpané odpady",
    desc: "Čištění ucpaného WC, umyvadla nebo kanalizace. Profesionální vybavení.",
    icon: "droplet",
    highlight: false,
  },
  {
    title: "Opravy topení",
    desc: "Servis radiátorů, vytápění a kotlů. Pomoc při poruchách systému.",
    icon: "flame",
    highlight: true,
  },
  {
    title: "Sanitární technika",
    desc: "Výměna a oprava baterií, WC a umyvadel. Instalace sprch a van.",
    icon: "droplet",
    highlight: false,
  },
  {
    title: "Bojlery & ohřívače",
    desc: "Oprava a výměna bojlerů a průtokových ohřívačů vody.",
    icon: "thermometer",
    highlight: false,
  },
  {
    title: "Revize & údržba",
    desc: "Kontroly, prevence a údržba instalací a topení.",
    icon: "wrench",
    highlight: false,
  },
];
