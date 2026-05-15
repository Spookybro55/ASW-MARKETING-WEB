import { ImageResponse } from "next/og";

// Root OpenGraph image — inherited by /, /web-pro-instalatera,
// /zasady-ochrany-osobnich-udaju and any other route that does not
// declare its own. /brand-dotaznik overrides with its own version.

export const alt =
  "Autosmartweby — Profesionální web pro živnostníky a malé firmy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const NAVY = "#07111F";
const GRAPHITE = "#1D2733";
const MUTED = "#667085";
const BRAND = "#0A66FF";
const BRAND_SOFT = "#E6EFFF";
const BORDER = "#E3E8F0";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FFFFFF",
          backgroundImage: `radial-gradient(circle at 90% 8%, ${BRAND_SOFT} 0%, rgba(230,239,255,0) 55%)`,
          padding: "72px 88px",
          fontFamily: "sans-serif",
          color: GRAPHITE,
        }}
      >
        {/* Top: wordmark + small brand dot */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: NAVY,
              fontWeight: 800,
              fontSize: 30,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: 4,
                background: BRAND,
              }}
            />
            Autosmartweby
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 18px",
              borderRadius: 999,
              background: BRAND_SOFT,
              color: BRAND,
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            Pro živnostníky a malé firmy
          </div>
        </div>

        {/* Center: headline + sub */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 26,
            marginTop: 8,
          }}
        >
          <div
            style={{
              width: 72,
              height: 6,
              borderRadius: 3,
              background: BRAND,
            }}
          />
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              color: NAVY,
              maxWidth: 1020,
            }}
          >
            Profesionální web pro živnostníky a malé firmy.
          </div>
          <div
            style={{
              fontSize: 32,
              lineHeight: 1.35,
              color: MUTED,
              maxWidth: 980,
              fontWeight: 400,
            }}
          >
            Bez zbytečných starostí. Pomoc s texty, strukturou a spuštěním.
          </div>
        </div>

        {/* Bottom: domain row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid ${BORDER}`,
            paddingTop: 22,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              color: MUTED,
              fontSize: 22,
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: BRAND,
                }}
              />
              Jasná cena
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: BRAND,
                }}
              />
              Pomoc s texty
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: BRAND,
                }}
              />
              Spuštění na klíč
            </span>
          </div>
          <div
            style={{
              color: NAVY,
              fontWeight: 700,
              fontSize: 24,
            }}
          >
            autosmartweb.cz
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
