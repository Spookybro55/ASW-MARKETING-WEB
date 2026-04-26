import EmergencyProfessional from "../emergency-professional";
import type { TemplateComponent } from "./types";

const TEMPLATE_REGISTRY: Record<string, TemplateComponent> = {
  emergency: EmergencyProfessional,
  // "community-expert": CommunityExpert,    // later
  // "technical-authority": TechnicalAuthority, // later
  "generic-local": EmergencyProfessional,
};

export function getTemplate(family: string): TemplateComponent {
  return TEMPLATE_REGISTRY[family] ?? EmergencyProfessional;
}
