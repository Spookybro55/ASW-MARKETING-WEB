/**
 * Team photo optimizer.
 *
 * Downscales + re-encodes the studio portraits from Photos/ into web-sized
 * JPEGs in public/team/. next/image then serves AVIF/WebP at the requested
 * sizes on top of these, so we just need a sane source (not the 1.7 MB PNG).
 * Uses the already-installed Playwright (chromium canvas) — no new deps.
 *
 * Run: node scripts/optimize-team-photos.mjs
 */
import { chromium } from "playwright";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const targets = [
  { src: "Photos/Tomas_foto.jpg", out: "public/team/tomas.jpg", mime: "image/jpeg" },
  { src: "Photos/Honza_foto.png", out: "public/team/jan.jpg", mime: "image/png" },
  { src: "Photos/Sebastian_foto.jpg", out: "public/team/sebastian.jpg", mime: "image/jpeg" },
];

const MAX_W = 1000; // cap width; portraits stay well under ~1500px tall
const QUALITY = 0.82;

const browser = await chromium.launch();
const page = await browser.newPage();
await mkdir(join(ROOT, "public/team"), { recursive: true });

for (const t of targets) {
  const bytes = await readFile(join(ROOT, t.src));
  const dataUrl = `data:${t.mime};base64,${bytes.toString("base64")}`;

  const out = await page.evaluate(
    async ({ dataUrl, maxW, quality }) => {
      const img = new Image();
      img.src = dataUrl;
      await img.decode();
      const scale = Math.min(1, maxW / img.naturalWidth);
      const w = Math.round(img.naturalWidth * scale);
      const h = Math.round(img.naturalHeight * scale);
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0, w, h);
      return { url: canvas.toDataURL("image/jpeg", quality), w, h };
    },
    { dataUrl, maxW: MAX_W, quality: QUALITY },
  );

  const b64 = out.url.split(",")[1];
  await writeFile(join(ROOT, t.out), Buffer.from(b64, "base64"));
  console.log(`${t.out}  ${out.w}x${out.h}  ${(Buffer.from(b64, "base64").length / 1024).toFixed(0)} KB`);
}

await browser.close();
console.log("done");
