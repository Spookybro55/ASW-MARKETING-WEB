import type { ComponentType } from "react";

export interface ClientBrief {
  business_name: string;
  service_type: string;
  city: string;
  area?: string;

  phone: string;
  email: string;
  website?: string;

  hero_headline?: string;
  hero_lead?: string;
}

export interface PreviewRecord {
  slug: string;
  template_type: string;
  family: "emergency" | "community-expert" | "technical-authority" | "generic-local";
  brief: ClientBrief;
  lead_id?: string;
  preview_url?: string;
  generated_at: string;
  last_accessed_at?: string;
  status: "active" | "archived";
}

export interface TemplateProps {
  brief: ClientBrief;
}

export type TemplateComponent = ComponentType<TemplateProps>;
