import { ImageResponse } from "next/og";

// Apple touch icon — iOS auto-rounds the corners, so we leave the
// square bleed full and just keep the mark centered. No text (it would
// be unreadable at home-screen size).

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const BRAND = "#0A66FF";
const BRAND_HOVER = "#0852CC";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_HOVER} 100%)`,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 110,
            height: 110,
            background: "#FFFFFF",
            borderRadius: 26,
            color: BRAND,
            fontSize: 86,
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            fontFamily: "sans-serif",
          }}
        >
          A
        </div>
      </div>
    ),
    { ...size },
  );
}
