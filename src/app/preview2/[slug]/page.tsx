import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPreviewBySlug } from "@/lib/sheets/preview-reader";
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
    title: `${preview.brief.business_name} — Návrh webu (Community Expert)`,
    description: "Preview vytvořený firmou Autosmartweb",
    robots: { index: false, follow: false, nocache: true },
  };
}

/**
 * `/preview2/{slug}` — same data lookup as `/preview/{slug}` but template
 * is hardcoded to CommunityExpert (ignores `_previews.family`).
 *
 * Use case: visual side-by-side compare of templates against the same
 * client's data. The original `/preview/{slug}` route still respects
 * `_previews.family` for the canonical render; this parallel route
 * forces CommunityExpert.
 */
export default async function Preview2Page({ params }: Props) {
  const { slug } = await params;
  const preview = await getPreviewBySlug(slug);

  if (!preview || preview.status !== "active") {
    notFound();
  }

  return <CommunityExpert brief={preview.brief} />;
}

export const revalidate = 300;
