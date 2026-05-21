import { ImageResponse } from "next/og";
import { LogoMark } from "./_logo-mark";

// Browser-tab favicon — App Router file convention. Dark, premium, consistent
// with the dark-first site: near-black background + white logo mark, no blue
// tile, no rounded app badge. The mark is sized large with padding so it stays
// legible at 16–32px. The generated URL is content-hashed → cache-busts on change.

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
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
        <LogoMark size={50} color="#FFFFFF" />
      </div>
    ),
    { ...size },
  );
}
