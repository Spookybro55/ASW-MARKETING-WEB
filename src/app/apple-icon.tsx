import { ImageResponse } from "next/og";
import { LogoMark } from "./_logo-mark";

// Apple touch icon — dark premium, matching the favicon: near-black background
// + white logo mark, no blue tile. iOS rounds the corners itself.

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

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
          background: "#0A0C12",
        }}
      >
        <LogoMark size={132} color="#FFFFFF" />
      </div>
    ),
    { ...size },
  );
}
