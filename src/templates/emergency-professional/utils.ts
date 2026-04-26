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

export function getHeroHeadline(brief: ClientBrief): string {
  if (brief.hero_headline) return brief.hero_headline;
  return `${capitalize(brief.service_type)} pohotovost pro ${brief.city}`;
}

export function getHeroLead(brief: ClientBrief): string {
  if (brief.hero_lead) return brief.hero_lead;
  return "Pomoc s havárií vody, topením nebo ucpaným odpadem. Volejte nonstop pro rychlé řešení problému.";
}
