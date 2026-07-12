// Generates public/sitemap.xml from the actual route structure + portfolioData.ts, so the
// sitemap can never silently drift out of sync with real pages (e.g. a new portfolio project
// added to the data file automatically gets its own sitemap entry next build).
//
// Run manually with `npm run sitemap`, or it runs automatically as part of `npm run build`
// (see the "prebuild" script in package.json).

import { build } from "esbuild";
import { writeFileSync, mkdtempSync } from "fs";
import { tmpdir } from "os";
import path from "path";

const SITE_URL = "https://www.creativeemmanlimited.com";
const today = new Date().toISOString().slice(0, 10);

async function loadPortfolioData() {
  // Compile src/data/portfolioData.ts (TS + JSX-free, but it imports .jpg assets which Node
  // can't resolve) to a temp JS file, stubbing image imports out — the sitemap only needs
  // `category` and `slug`, not the actual image bytes.
  const tmpDir = mkdtempSync(path.join(tmpdir(), "sitemap-gen-"));
  const outFile = path.join(tmpDir, "portfolioData.mjs");

  await build({
    entryPoints: ["src/data/portfolioData.ts"],
    bundle: true,
    format: "esm",
    platform: "node",
    outfile: outFile,
    loader: { ".jpg": "empty", ".jpeg": "empty", ".png": "empty" },
    logLevel: "silent",
  });

  const mod = await import(`file://${outFile}`);
  return mod.portfolioProjects;
}

async function main() {
  const portfolioProjects = await loadPortfolioData();

  const staticUrls = [
    { loc: "/", changefreq: "weekly", priority: "1.0" },
    { loc: "/services", changefreq: "monthly", priority: "0.9" },
    { loc: "/portfolio", changefreq: "weekly", priority: "0.9" },
    { loc: "/portfolio/web-development", changefreq: "monthly", priority: "0.8" },
    { loc: "/portfolio/ui-ux-design", changefreq: "monthly", priority: "0.8" },
    { loc: "/portfolio/graphic-brand-design", changefreq: "monthly", priority: "0.8" },
    { loc: "/portfolio/social-media-management", changefreq: "monthly", priority: "0.8" },
    { loc: "/portfolio/videography-video-editing", changefreq: "monthly", priority: "0.8" },
    { loc: "/portfolio/motion-graphics-design", changefreq: "monthly", priority: "0.8" },
    { loc: "/team", changefreq: "monthly", priority: "0.7" },
    { loc: "/trainings", changefreq: "monthly", priority: "0.7" },
    { loc: "/testimonials", changefreq: "monthly", priority: "0.6" },
    { loc: "/applications", changefreq: "monthly", priority: "0.8" },
    { loc: "/contact", changefreq: "yearly", priority: "0.8" },
  ];

  const projectUrls = portfolioProjects.map((p) => ({
    loc: `/portfolio/${p.category}/${p.slug}`,
    changefreq: "monthly",
    priority: "0.7",
  }));

  const allUrls = [...staticUrls, ...projectUrls];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...allUrls.map(
      (u) =>
        `  <url><loc>${SITE_URL}${u.loc}</loc><lastmod>${today}</lastmod><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`,
    ),
    "</urlset>",
  ].join("\n");

  writeFileSync("public/sitemap.xml", xml + "\n");
  console.log(`sitemap.xml generated with ${allUrls.length} URLs (${projectUrls.length} portfolio projects).`);
}

main().catch((err) => {
  console.error("Failed to generate sitemap:", err);
  process.exit(1);
});
