/**
 * Favicon / app-icon generator.
 *
 * Rasterises the blue brand mark (public/logo.svg — the stylised "A" with the
 * blue gradient) into the full static favicon set that crawlers and browsers
 * expect at stable URLs. Stable URLs (not Next's content-hashed /icon route)
 * matter for Google, which caches favicons aggressively.
 *
 * Uses the already-installed Playwright (chromium) to rasterise the SVG with a
 * transparent background, then assembles a multi-size PNG-embedded favicon.ico.
 * No new dependencies.
 *
 * Run:  corepack pnpm exec node scripts/gen-favicons.mjs
 *       (or: node scripts/gen-favicons.mjs)
 *
 * Re-run whenever public/logo.svg changes.
 */
import { chromium } from "playwright";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC_SVG = join(ROOT, "public", "logo.svg");
const PUBLIC = join(ROOT, "public");

// size -> output filename (transparent PNGs)
const PNG_TARGETS = [
  { size: 16, file: "favicon-16x16.png" },
  { size: 32, file: "favicon-32x32.png" },
  { size: 48, file: "favicon-48x48.png" },
  { size: 180, file: "apple-touch-icon.png" },
  { size: 192, file: "icon-192x192.png" },
  { size: 512, file: "icon-512x512.png" },
];
// sizes bundled inside favicon.ico
const ICO_SIZES = [16, 32, 48];

/** Render the SVG at an exact pixel size with a transparent background. */
async function renderPng(page, svg, size) {
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(
    `<!doctype html><html><head><meta charset="utf-8"><style>
       *{margin:0;padding:0;border:0}
       html,body{width:${size}px;height:${size}px;background:transparent}
       svg{display:block;width:${size}px;height:${size}px}
     </style></head><body>${svg}</body></html>`,
    { waitUntil: "networkidle" },
  );
  const el = await page.$("svg");
  return el.screenshot({ omitBackground: true, type: "png" });
}

/** Assemble a PNG-embedded .ico from {size, buffer} entries. */
function buildIco(images) {
  const count = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(count, 4);

  const dir = Buffer.alloc(16 * count);
  let offset = 6 + 16 * count;
  const bodies = [];

  images.forEach((img, i) => {
    const b = i * 16;
    dir.writeUInt8(img.size >= 256 ? 0 : img.size, b + 0); // width
    dir.writeUInt8(img.size >= 256 ? 0 : img.size, b + 1); // height
    dir.writeUInt8(0, b + 2); // palette colors (0 = none)
    dir.writeUInt8(0, b + 3); // reserved
    dir.writeUInt16LE(1, b + 4); // color planes
    dir.writeUInt16LE(32, b + 6); // bits per pixel
    dir.writeUInt32LE(img.buffer.length, b + 8); // size of image data
    dir.writeUInt32LE(offset, b + 12); // offset
    offset += img.buffer.length;
    bodies.push(img.buffer);
  });

  return Buffer.concat([header, dir, ...bodies]);
}

const svg = await readFile(SRC_SVG, "utf8");
const browser = await chromium.launch();
const page = await browser.newPage({ deviceScaleFactor: 1 });

const rendered = new Map();
for (const { size, file } of PNG_TARGETS) {
  const buf = await renderPng(page, svg, size);
  rendered.set(size, buf);
  await writeFile(join(PUBLIC, file), buf);
  console.log(`wrote public/${file} (${size}x${size})`);
}

// favicon.svg — scalable blue mark for modern browsers.
await writeFile(join(PUBLIC, "favicon.svg"), svg);
console.log("wrote public/favicon.svg");

// favicon.ico (16/32/48 embedded PNGs).
const icoImages = ICO_SIZES.map((size) => ({ size, buffer: rendered.get(size) }));
await writeFile(join(PUBLIC, "favicon.ico"), buildIco(icoImages));
console.log(`wrote public/favicon.ico (${ICO_SIZES.join(", ")})`);

await browser.close();
console.log("done.");
