import metadataJson from "./registry-metadata.json";

export type TemplateStatus = "active" | "experimental" | "deprecated";

export interface TemplateVariant {
  variant_id: string;
  name: string;
  section_overrides?: Record<string, unknown>;
  hash_seed_hint?: string;
}

export interface TemplateMetadata {
  id: string;
  name: string;
  description: string;
  registry_keys: string[];
  obors: string[];
  sub_obors: string[];
  use_cases: string[];
  demo_slug: string | null;
  status: TemplateStatus;
  created_at: string | null;
  polished_at?: string | null;
  variants: TemplateVariant[];
}

export interface TemplateRegistryMetadata {
  version: 1;
  generated_by?: string;
  templates: TemplateMetadata[];
}

const METADATA = metadataJson as TemplateRegistryMetadata;

if (METADATA.version !== 1) {
  throw new Error(
    `registry-metadata.json: unsupported version ${METADATA.version} (expected 1)`,
  );
}

const seenIds = new Set<string>();
for (const t of METADATA.templates) {
  if (seenIds.has(t.id)) {
    throw new Error(`registry-metadata.json: duplicate template id "${t.id}"`);
  }
  seenIds.add(t.id);
  if (t.registry_keys.length === 0) {
    throw new Error(
      `registry-metadata.json: template "${t.id}" has empty registry_keys`,
    );
  }
}

export const TEMPLATE_METADATA: ReadonlyArray<TemplateMetadata> =
  METADATA.templates;

export function getMetadataById(id: string): TemplateMetadata | undefined {
  return TEMPLATE_METADATA.find((t) => t.id === id);
}

export function findMetadataByRegistryKey(
  key: string,
): TemplateMetadata | undefined {
  return TEMPLATE_METADATA.find((t) => t.registry_keys.includes(key));
}
