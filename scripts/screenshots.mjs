/**
 * Visual review screenshots for the marketing site.
 *
 * Part of the "Visual UI workflow" — captures the homepage at the three
 * canonical breakpoints so changes can be reviewed before commit.
 *
 * Usage:  node scripts/screenshots.mjs            (defaults to localhost:3000)
 *         URL=http://localhost:3001 node scripts/screenshots.mjs
 *
 * Output: .screenshots/ (gitignored).
 */
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const URL = process.env.URL || "http://localhost:3000";
const OUT = ".screenshots";

const viewports = [
  { name: "desktop-1440", width: 1440, height: 900 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "mobile-390", width: 390, height: 844 },
];

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch();

let problems = 0;
for (const vp of viewports) {
  const page = await browser.newPage({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 2,
  });
  await page.goto(URL, { waitUntil: "networkidle", timeout: 30000 });
  // Give scroll-triggered styles / fonts a beat to settle.
  await page.waitForTimeout(400);

  const metrics = await page.evaluate(() => ({
    scrollW: document.documentElement.scrollWidth,
    clientW: document.documentElement.clientWidth,
  }));
  const hScroll = metrics.scrollW > metrics.clientW + 1;
  if (hScroll) problems++;

  await page.screenshot({ path: `${OUT}/${vp.name}.png`, fullPage: true });
  console.log(
    `${vp.name.padEnd(14)} ${vp.width}x${vp.height}  ` +
      `scrollW=${metrics.scrollW} clientW=${metrics.clientW}  ` +
      (hScroll ? "⚠ HORIZONTAL SCROLL" : "ok"),
  );
  await page.close();
}

await browser.close();
console.log(problems ? `\n${problems} viewport(s) with horizontal scroll` : "\nno horizontal scroll on any viewport");
