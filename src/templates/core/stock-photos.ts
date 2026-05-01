export type StockPhotoSource = "placeholder" | "local" | "unsplash";

export interface StockPhoto {
  src: string | null;
  altText: string;
  source: StockPhotoSource;
}

// Unsplash URLs use the canonical photo permalink + Unsplash's image-CDN
// query parameters (`auto=format&fit=crop&w=1200&q=80`) so Next/Image can
// serve a tightly cropped, optimized variant without re-uploading. License
// is the standard Unsplash license (free for commercial use, no attribution
// required, but credit is appreciated — see attribution.md if/when added).
//
// To swap to local / re-uploaded photos: change `source` to "local" and
// `src` to a `/preview/...` path. The hero component dispatches on `source`
// so no other code change is required.
const STOCK_PHOTOS: Record<string, StockPhoto> = {
  instalatér: {
    src: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200&q=80",
    altText: "Instalatér při práci s nářadím",
    source: "unsplash",
  },
  elektrikář: {
    src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
    altText: "Elektrikář kontroluje rozvod",
    source: "unsplash",
  },
  topenář: {
    src: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80",
    altText: "Servis topného systému",
    source: "unsplash",
  },
  default: {
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    altText: "Profesionální řemeslník při práci",
    source: "unsplash",
  },
};

export function getStockPhoto(serviceType: string): StockPhoto {
  const normalized = serviceType.toLocaleLowerCase("cs-CZ").trim();
  return STOCK_PHOTOS[normalized] ?? STOCK_PHOTOS.default;
}

// To swap a placeholder for a real photo, change a single mapping entry — no
// code change in hero.tsx required (it dispatches on `source`):
//
//   instalatér: { src: "/preview/emergency/instalater.jpg",
//                 altText: "Instalatérské nářadí", source: "local" }
//
// For Unsplash (`source: "unsplash"`), src is the full https://images.unsplash.com/…
// URL and next.config.ts must allow the host:
//   images: { remotePatterns: [{ hostname: "images.unsplash.com" }] }
