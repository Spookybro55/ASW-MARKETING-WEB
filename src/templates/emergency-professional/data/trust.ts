export type TrustIcon = "badge" | "users" | "clock";

export interface TrustItem {
  title: string;
  desc: string;
  icon: TrustIcon;
}

export const EMERGENCY_TRUST: readonly TrustItem[] = [
  { title: "Zkušený tým", desc: "Profesionální servis", icon: "badge" },
  { title: "Spokojení zákazníci", desc: "Ověřené reference", icon: "users" },
  { title: "Rychlá reakce", desc: "Nonstop dostupnost", icon: "clock" },
];
