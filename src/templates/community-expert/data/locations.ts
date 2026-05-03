/**
 * Per-city locations dispatcher.
 *
 * For Praha: returns a 6-item list of well-known Prague districts.
 * For non-Praha: returns 6 generic items derived from the lead's city —
 * "{city} a okolí", "Střední Čechy" if regionally appropriate, plus
 * surrounding-region fallbacks.
 *
 * Owner-confirmed 2026-05-03: per-city dispatch instead of a single
 * hardcoded list. Praha leads see Praha districts; other-city leads see
 * a generic regional set built around their city.
 */

const PRAHA_LOCATIONS = [
  "Praha 1",
  "Praha 2",
  "Praha 4",
  "Praha 5",
  "Praha 6",
  "Praha 9",
] as const;

/**
 * Czech regions roughly mapped to anchor cities. Used when the lead's city
 * is non-Praha, to give a region-flavored 6-item list. Catalog is
 * intentionally small — anything not matched falls back to generic.
 */
const REGION_BY_ANCHOR: Record<string, readonly string[]> = {
  brno: ["Brno město", "Brno-venkov", "Modřice", "Šlapanice", "Tišnov", "Kuřim"],
  ostrava: ["Ostrava", "Frýdek-Místek", "Havířov", "Karviná", "Opava", "Bohumín"],
  plzeň: ["Plzeň", "Stříbro", "Rokycany", "Klatovy", "Nýřany", "Domažlice"],
  liberec: ["Liberec", "Jablonec", "Česká Lípa", "Frýdlant", "Hrádek nad Nisou", "Turnov"],
  olomouc: ["Olomouc", "Prostějov", "Přerov", "Šumperk", "Hranice", "Litovel"],
  "hradec králové": ["Hradec Králové", "Pardubice", "Chrudim", "Náchod", "Jaroměř", "Trutnov"],
  "české budějovice": ["České Budějovice", "Český Krumlov", "Tábor", "Písek", "Třeboň", "Strakonice"],
};

export function getLocationsFor(city: string): readonly string[] {
  const lower = city.trim().toLowerCase();
  if (lower === "praha") return PRAHA_LOCATIONS;
  if (REGION_BY_ANCHOR[lower]) return REGION_BY_ANCHOR[lower];
  // Generic fallback for unknown city
  return [
    `${city} a okolí`,
    "Blízké okolí",
    "Vzdálenější region",
    "Sousední okresy",
    "Příměstské obce",
    "Po dohodě i dál",
  ];
}
