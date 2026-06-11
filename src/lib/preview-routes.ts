/**
 * Klientské preview routy — stránky, které jsou náhledem webu pro konkrétního
 * klienta, NE marketingový web AutoSmartWeby. Na těchto routách se nemá
 * renderovat globální branding AutoSmartweby (cookie ConsentBanner, GA,
 * analytické event listenery, Organization/LocalBusiness JSON-LD), aby náhled
 * nepůsobil jako stránka AutoSmartweby.
 *
 * Pozn.: tyto routy jsou zároveň `robots: noindex` (viz jejich page.tsx).
 */
export const PREVIEW_PATH_PREFIXES = ["/kovovyrobasvoboda"] as const;

/** Vrací true, pokud pathname patří klientskému preview (přesná shoda nebo podstrom). */
export function isPreviewPath(pathname: string | null | undefined): boolean {
  if (!pathname) return false;
  return PREVIEW_PATH_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}
