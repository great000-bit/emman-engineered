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

function renderLastmod(updatedAt) {
  if (!updatedAt) return "";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(updatedAt)) {
    throw new Error(`Invalid sitemap updatedAt date: ${updatedAt}`);
  }
  return `<lastmod>${updatedAt}</lastmod>`;
}

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
    loader: { ".jpg": "empty", ".jpeg": "empty", ".png": "empty", ".webp": "empty" },
    logLevel: "silent",
  });

  const mod = await import(`file://${outFile}`);
  return mod.portfolioProjects;
}

async function loadDataModule(entryPoint, exportName) {
  const tempDirectory = mkdtempSync(path.join(tmpdir(), "sitemap-data-"));
  const outputFile = path.join(tempDirectory, "data.mjs");
  await build({ entryPoints: [entryPoint], bundle: true, format: "esm", platform: "node", outfile: outputFile, loader: { ".jpg": "empty", ".jpeg": "empty", ".png": "empty", ".webp": "empty" }, logLevel: "silent" });
  const module = await import(`file://${outputFile}`);
  return module[exportName];
}

async function main() {
  const portfolioProjects = await loadPortfolioData();
  const serviceCategories = await loadDataModule("src/data/serviceCategories.ts", "serviceCategories");
  const industries = await loadDataModule("src/data/industries.ts", "industries");
  const teamMembers = await loadDataModule("src/data/teamMembers.ts", "teamMembers");

  const staticUrls = [
    { loc: "/", changefreq: "weekly", priority: "1.0" },
    { loc: "/services", changefreq: "monthly", priority: "0.9" },
    { loc: "/industries", changefreq: "monthly", priority: "0.8" },
    { loc: "/portfolio", changefreq: "weekly", priority: "0.9" },
    { loc: "/portfolio/web-development", changefreq: "monthly", priority: "0.8" },
    { loc: "/portfolio/ui-ux-design", changefreq: "monthly", priority: "0.8" },
    { loc: "/portfolio/graphic-brand-design", changefreq: "monthly", priority: "0.8" },
    { loc: "/portfolio/social-media-management", changefreq: "monthly", priority: "0.8" },
    { loc: "/portfolio/videography-video-editing", changefreq: "monthly", priority: "0.8" },
    { loc: "/portfolio/motion-graphics-design", changefreq: "monthly", priority: "0.8" },
    { loc: "/about", changefreq: "monthly", priority: "0.8" },
    { loc: "/pricing", changefreq: "monthly", priority: "0.8" },
    { loc: "/blog", changefreq: "weekly", priority: "0.7" },
    { loc: "/blog/first-100-customers-online-nigeria", changefreq: "monthly", priority: "0.7" },
    { loc: "/trainings", changefreq: "monthly", priority: "0.7" },
    { loc: "/testimonials", changefreq: "monthly", priority: "0.6" },
    { loc: "/applications", changefreq: "monthly", priority: "0.8" },
    { loc: "/internships", changefreq: "monthly", priority: "0.8" },
    { loc: "/contact", changefreq: "yearly", priority: "0.8" },
    { loc: "/privacy", changefreq: "yearly", priority: "0.3" },
    { loc: "/terms", changefreq: "yearly", priority: "0.3" },
  ];

  const serviceUrls = serviceCategories.flatMap((category) => [
    { loc: `/services/${category.slug}`, changefreq: "monthly", priority: "0.8" },
    ...category.services.map((service) => ({ loc: `/services/${service.slug}`, changefreq: "monthly", priority: "0.7" })),
  ]);

  const industryUrls = industries.map((industry) => ({ loc: `/industries/${industry.slug}`, changefreq: "monthly", priority: "0.7" }));
  const teamUrls = teamMembers.map((member) => ({ loc: `/team/${member.slug}`, changefreq: "monthly", priority: "0.5" }));

  const projectUrls = portfolioProjects.map((p) => ({
    loc: `/portfolio/${p.category}/${p.slug}`,
    changefreq: "monthly",
    priority: "0.7",
    updatedAt: p.updatedAt,
  }));

  const allUrls = [...staticUrls, ...serviceUrls, ...industryUrls, ...teamUrls, ...projectUrls];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...allUrls.map(
      (u) =>
        `  <url><loc>${SITE_URL}${u.loc}</loc>${renderLastmod(u.updatedAt)}<changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`,
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
