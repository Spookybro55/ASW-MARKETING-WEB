import type { PreviewRecord } from "@/templates/core/types";
import { getSheetClient } from "./client";

const PREVIEW_SHEET_RANGE = "_previews!A2:I";

export async function getPreviewBySlug(
  slug: string,
): Promise<PreviewRecord | null> {
  if (
    process.env.NODE_ENV !== "production" &&
    process.env.MOCK_MODE === "true"
  ) {
    return getMockPreview(slug);
  }

  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
  if (!spreadsheetId) {
    console.error("[preview-reader] GOOGLE_SPREADSHEET_ID not set");
    return null;
  }

  const sheets = getSheetClient();
  if (!sheets) return null;

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: PREVIEW_SHEET_RANGE,
    });

    const row = response.data.values?.find((r) => r[0] === slug);
    if (!row) return null;

    const rawBrief = JSON.parse(row[1] ?? "{}");
    const brief = {
      ...rawBrief,
      phone: rawBrief.phone ?? rawBrief.contact_phone ?? "",
      email: rawBrief.email ?? rawBrief.contact_email ?? "",
      website: rawBrief.website ?? rawBrief.website_url ?? undefined,
    };

    return {
      slug: row[0],
      brief,
      template_type: row[2] ?? "unknown",
      family: (row[3] ?? "generic-local") as PreviewRecord["family"],
      lead_id: row[4],
      preview_url: row[5],
      generated_at: row[6] ?? new Date().toISOString(),
      last_accessed_at: row[7],
      status: (row[8] ?? "active") as "active" | "archived",
    };
  } catch (error) {
    console.error("[preview-reader] Failed to fetch slug", slug, error);
    return null;
  }
}

const MOCK_DATA: Record<string, PreviewRecord> = {
  "test-bauhaus-praha": {
    slug: "test-bauhaus-praha",
    template_type: "emergency-service-existing-web",
    family: "emergency",
    brief: {
      business_name: "BAUHAUS",
      service_type: "instalatér",
      city: "Praha",
      area: "Michle",
      phone: "+420 255 715 111",
      email: "podpora@bauhaus.cz",
      website: "https://www.bauhaus.cz",
    },
    generated_at: "2026-04-26T00:00:00.000Z",
    status: "active",
  },
  "test-novak-brno": {
    slug: "test-novak-brno",
    template_type: "emergency-service-no-website",
    family: "emergency",
    brief: {
      business_name: "NOVÁK ELEKTRO",
      service_type: "elektrikář",
      city: "Brno",
      phone: "+420 600 111 222",
      email: "novak@elektrobrno.cz",
    },
    generated_at: "2026-04-26T00:00:00.000Z",
    status: "active",
  },
  "test-svoboda-plzen": {
    slug: "test-svoboda-plzen",
    template_type: "emergency-service-no-website",
    family: "emergency",
    brief: {
      business_name: "SVOBODA TOPENÍ",
      service_type: "topenář",
      city: "Plzeň",
      phone: "+420 777 333 444",
      email: "svoboda@topeniplzen.cz",
    },
    generated_at: "2026-04-26T00:00:00.000Z",
    status: "active",
  },
};

function getMockPreview(slug: string): PreviewRecord | null {
  return MOCK_DATA[slug] ?? null;
}
