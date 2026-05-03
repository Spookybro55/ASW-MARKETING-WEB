import type { ClientBrief } from "@/templates/core/types";

export function telHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export function mailHref(email: string): string {
  return `mailto:${email}`;
}

function capitalize(value: string): string {
  if (!value) return value;
  return value.charAt(0).toLocaleUpperCase("cs-CZ") + value.slice(1);
}

/**
 * Crude Czech accusative for first-declension feminine nouns ending in `-a`
 * (Praha → Prahu, Ostrava → Ostravu). Other endings stay unchanged
 * (Brno, Plzeň, Liberec, ...). Used after the preposition "pro" so the
 * fallback headline reads as natural Czech instead of nominative-glued
 * placeholder ("pro Praha" → "pro Prahu").
 */
export function toAccusative(city: string): string {
  if (!city || city.length < 2) return city;
  if (/[áa]$/i.test(city)) {
    return city.slice(0, -1) + "u";
  }
  return city;
}

export function getHeroHeadline(brief: ClientBrief): string {
  if (brief.hero_headline) return brief.hero_headline;
  return `${capitalize(brief.service_type)} pohotovost pro ${toAccusative(brief.city)}`;
}

export function getHeroLead(brief: ClientBrief): string {
  if (brief.hero_lead) return brief.hero_lead;
  return "Pomoc s havárií vody, topením nebo ucpaným odpadem. Volejte nonstop pro rychlé řešení problému.";
}
