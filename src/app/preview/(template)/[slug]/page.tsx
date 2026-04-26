import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPreviewBySlug } from "@/lib/sheets/preview-reader";
import { getTemplate } from "@/templates/core/registry";

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

  const Template = getTemplate(preview.family);
  return <Template brief={preview.brief} />;
}

export const revalidate = 300;
