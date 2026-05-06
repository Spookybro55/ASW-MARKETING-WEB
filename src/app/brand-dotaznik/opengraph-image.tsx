import { ImageResponse } from "next/og";

export const alt = "Brandový dotazník — Autosmartweby";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#050B1F",
          backgroundImage:
            "radial-gradient(circle at 18% 18%, rgba(54,226,163,0.22) 0%, rgba(54,226,163,0) 55%), radial-gradient(circle at 88% 88%, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0) 55%)",
          color: "white",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top row */}
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
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ color: "white" }}>Auto</span>
            <span style={{ color: "#36E2A3" }}>smart</span>
            <span style={{ color: "white" }}>weby</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 22px",
              borderRadius: 999,
              border: "1px solid rgba(54,226,163,0.4)",
              backgroundColor: "rgba(54,226,163,0.10)",
              color: "#36E2A3",
              fontSize: 22,
              fontWeight: 500,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                backgroundColor: "#36E2A3",
              }}
            />
            Vyplnění zabere 15–25 minut
          </div>
        </div>

        {/* Center */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              width: 80,
              height: 6,
              borderRadius: 3,
              backgroundColor: "#36E2A3",
            }}
          />
          <div
            style={{
              fontSize: 84,
              fontWeight: 800,
              letterSpacing: "-0.035em",
              lineHeight: 1.02,
              maxWidth: 1000,
              color: "white",
            }}
          >
            Brandový dotazník
          </div>
          <div
            style={{
              fontSize: 36,
              lineHeight: 1.3,
              color: "#cbd5e1",
              maxWidth: 980,
              fontWeight: 400,
            }}
          >
            Podklad pro tvorbu loga, barevné palety, typografie a vizuálního
            stylu webu.
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#94a3b8",
            fontSize: 24,
          }}
        >
          <div style={{ display: "flex", gap: 28 }}>
            <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  backgroundColor: "#36E2A3",
                }}
              />
              Logo
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  backgroundColor: "#36E2A3",
                }}
              />
              Barvy
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  backgroundColor: "#36E2A3",
                }}
              />
              Typografie
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  backgroundColor: "#36E2A3",
                }}
              />
              Web
            </span>
          </div>
          <div style={{ color: "white", fontWeight: 600 }}>
            autosmartweb.cz
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
