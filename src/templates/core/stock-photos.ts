export type StockPhotoSource = "placeholder" | "local" | "unsplash";

export interface StockPhoto {
  src: string | null;
  altText: string;
  source: StockPhotoSource;
}

const STOCK_PHOTOS: Record<string, StockPhoto> = {
  instalatér: {
    src: null,
    altText: "Instalatérské nářadí",
    source: "placeholder",
  },
  elektrikář: {
    src: null,
    altText: "Elektrikářské nářadí",
    source: "placeholder",
  },
  topenář: {
    src: null,
    altText: "Topenářské nářadí",
    source: "placeholder",
  },
  default: {
    src: null,
    altText: "Profesionální služby",
    source: "placeholder",
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
