import type { ClientBrief } from "@/templates/core/types";

export function telHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export function mailHref(email: string): string {
  return `mailto:${email}`;
}

/**
 * Pull the first letter of business_name for the orange logo mark.
 * Returns uppercase. Falls back to "?" if business_name is empty.
 */
export function logoInitial(businessName: string): string {
  if (!businessName) return "?";
  return businessName.trim().charAt(0).toLocaleUpperCase("cs-CZ");
}

export function getHeroHeadline(brief: ClientBrief): string {
  if (brief.hero_headline) return brief.hero_headline;
  return "Spolehlivé řemeslné práce pro váš domov";
}

export function getHeroLead(brief: ClientBrief): string {
  if (brief.hero_lead) return brief.hero_lead;
  return "Poskytujeme kvalitní služby pro domácnosti a firmy v našem regionu. Pracujeme poctivě, transparentně a s respektem k vašemu času.";
}
