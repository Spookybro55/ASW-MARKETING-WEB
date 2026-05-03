import EmergencyProfessional from "../emergency-professional";
import CommunityExpert from "../community-expert";
import type { TemplateComponent } from "./types";
import { TEMPLATE_METADATA } from "./metadata";

const TEMPLATE_REGISTRY: Record<string, TemplateComponent> = {
  emergency: EmergencyProfessional,
  "community-expert": CommunityExpert,
  // "technical-authority": TechnicalAuthority, // later
  "generic-local": EmergencyProfessional,
};

// Build-time invariant: every metadata entry's registry_keys[] must reference a
// real key in TEMPLATE_REGISTRY. Catches drift between metadata and the actual
// component map (e.g. metadata references "elektrikar-emergency" but no such
// key was added when the template directory was scaffolded).
for (const meta of TEMPLATE_METADATA) {
  for (const key of meta.registry_keys) {
    if (!(key in TEMPLATE_REGISTRY)) {
      throw new Error(
        `registry-metadata.json: template "${meta.id}" references unknown registry key "${key}". ` +
          `Add the key to TEMPLATE_REGISTRY in registry.ts, or remove it from registry_keys[].`,
      );
    }
  }
}

export function getTemplate(family: string): TemplateComponent {
  return TEMPLATE_REGISTRY[family] ?? EmergencyProfessional;
}
