/**
 * Section-level screenshots for detailed visual review.
 *
 * Full-page shots of a long landing page downscale too much to review
 * detail — this captures the changed sections individually at desktop
 * and mobile widths.
 *
 * Usage:  node scripts/screenshots-sections.mjs
 * Output: .screenshots/sections/ (gitignored).
 */
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const URL = process.env.URL || "http://localhost:3000";
const OUT = ".screenshots/sections";

const targets = [
  { name: "hero", selector: "#hero" },
  { name: "trust-strip", selector: 'section[aria-label="Proč spolupracovat s Autosmartweby"]' },
  { name: "faq", selector: "#faq" },
  { name: "team", selector: "#kdo-za-tim-stoji" },
  { name: "mid-cta", selector: ".asw-v0-cta-band" },
  { name: "final-cta", selector: "#kontakt" },
];

const widths = [
  { tag: "d", width: 1440, height: 900 },
  { tag: "m", width: 390, height: 844 },
];

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch();

for (const w of widths) {
  const page = await browser.newPage({
    viewport: { width: w.width, height: w.height },
    deviceScaleFactor: 2,
  });
  // Pre-set cookie consent so the ConsentBanner never renders and obscures
  // sections; hide the Next dev-mode indicator for a clean review surface.
  await page.addInitScript(() => {
    try {
      localStorage.setItem("asw_cookie_consent", "essential_only");
    } catch {}
  });
  await page.goto(URL, { waitUntil: "networkidle", timeout: 30000 });
  await page.addStyleTag({
    content: "nextjs-portal,#__next-build-watcher{display:none !important;}",
  });
  await page.waitForTimeout(400);

  for (const t of targets) {
    const el = page.locator(t.selector).first();
    const count = await el.count();
    if (count === 0) {
      console.log(`  [missing] ${t.name} (${w.tag}) — selector not found`);
      continue;
    }
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(150);
    await el.screenshot({ path: `${OUT}/${t.name}-${w.tag}.png` });
    console.log(`  ${t.name}-${w.tag}.png`);
  }
  await page.close();
}

await browser.close();
console.log("done");
