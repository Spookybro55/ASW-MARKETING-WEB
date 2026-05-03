export type TrustIcon = "shield" | "users" | "clock" | "star";

export interface TrustItem {
  label: string;
  icon: TrustIcon;
}

export const COMMUNITY_TRUST: readonly TrustItem[] = [
  { label: "Pojištění odpovědnosti", icon: "shield" },
  { label: "Lokální tým", icon: "users" },
  { label: "Flexibilní termíny", icon: "clock" },
  { label: "Kvalitní provedení", icon: "star" },
];
