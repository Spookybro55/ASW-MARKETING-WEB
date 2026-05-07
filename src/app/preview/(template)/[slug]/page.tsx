import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPreviewBySlug } from "@/lib/sheets/preview-reader";
import EmergencyProfessional from "@/templates/emergency-professional";
import CommunityExpert from "@/templates/community-expert";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const preview = await getPreviewBySlug(slug);
  if (!preview) {
    return {
      title: "Preview nedostupný",
      robots: { index: false, follow: false },
    };
  }
  return {
    title: `${preview.brief.business_name} — Návrh webu`,
    description: "Preview vytvořený firmou Autosmartweb",
    robots: { index: false, follow: false, nocache: true },
  };
}

export default async function PreviewPage({ params }: Props) {
  const { slug } = await params;
  const preview = await getPreviewBySlug(slug);

  if (!preview || preview.status !== "active") {
    notFound();
  }

  // Switch over family rather than dynamic component lookup so React
  // Compiler can verify static component references (react-hooks/static-components).
  // Family → component mapping mirrors templates/core/registry.ts; keep them
  // in sync when adding new templates.
  switch (preview.family) {
    case "community-expert":
      return <CommunityExpert brief={preview.brief} />;
    case "emergency":
    case "generic-local":
    default:
      return <EmergencyProfessional brief={preview.brief} />;
  }
}

export const revalidate = 300;
