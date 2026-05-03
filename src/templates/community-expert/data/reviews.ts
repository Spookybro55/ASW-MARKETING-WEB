export interface ReviewItem {
  text: string;
  name: string;
  city: string;
  initials: string;
}

/**
 * Phase 1 placeholder reviews — owner-confirmed 2026-05-03 to keep these
 * static names + texts until a `brief.reviews[]` field or a registry-side
 * curated catalog is added. Owner sees this is demo content.
 */
export const COMMUNITY_REVIEWS: readonly ReviewItem[] = [
  {
    text: "Výborná komunikace a rychlé provedení. Všechno proběhlo přesně tak, jak bylo domluveno.",
    name: "Jana K.",
    city: "Praha",
    initials: "JK",
  },
  {
    text: "Profesionální přístup, férové ceny. Doporučuji všem, kdo hledají spolehlivé řemeslníky.",
    name: "Martin P.",
    city: "Kladno",
    initials: "MP",
  },
  {
    text: "Oceňuji hlavně transparentnost a lidský přístup. Vše bylo vysvětleno a zdokumentováno.",
    name: "Petra V.",
    city: "Beroun",
    initials: "PV",
  },
];
