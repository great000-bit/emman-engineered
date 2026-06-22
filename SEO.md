# SEO — Creative Emman Limited

What's implemented, where it lives, and how to keep it correct as the site grows.

## Quick facts

| | |
|---|---|
| Sitemap | https://emman-engineered.vercel.app/sitemap.xml |
| Robots | https://emman-engineered.vercel.app/robots.txt |
| Default OG image | `public/og-image.jpg` (1200×630) |
| Shared SEO component | `src/components/SEO.tsx` |
| Breadcrumb schema helper | `src/lib/seoSchema.ts` |
| Sitemap generator | `scripts/generate-sitemap.mjs` (runs automatically before every build) |

## How metadata is structured

**`index.html`** — intentionally minimal. Only `<title>` and `<meta name="description">`
live here as a no-JS / pre-mount fallback, plus the true pre-React essentials (charset,
viewport, favicon, theme-color).

This is deliberate: `react-helmet-async` does **not** dedupe its tags against tags that
already exist in the static HTML (verified empirically while building this — every meta
tag, link tag, and JSON-LD script that existed in both `index.html` and a page's `<SEO>`
component rendered *twice* in the final DOM, except `<title>`, which Helmet does correctly
override). So: don't add `og:*`, `twitter:*`, `keywords`, `robots`, `canonical`, `hreflang`,
or JSON-LD to `index.html` — they belong in React only, or they'll duplicate.

**`src/components/layout/PageLayout.tsx`** — every page renders through this. It emits the
sitewide `Organization` and `WebSite` JSON-LD exactly once per page, regardless of route,
via its own `<Helmet>` block. Multiple `<Helmet>` instances across the React tree *do*
merge/dedupe correctly with each other — this is the safe pattern.

**`src/components/SEO.tsx`** — the per-page component. Renders title, description,
keywords, robots, canonical, hreflang (`en` + `x-default`), OG tags, Twitter Card tags, and
any page-specific JSON-LD passed via the `jsonLd` prop (accepts one object or an array).

## How to update a page's SEO

Every page already imports and renders `<SEO />` near the top, inside `<PageLayout>`. To
change a page's title/description/keywords, edit the props passed to that `<SEO>` call
directly in the page file (e.g. `src/pages/Contact.tsx`).

```tsx
<SEO
  path="/your-route"
  title="Page Title | Creative Emman Limited"
  description="One or two sentences describing the page."
  keywords={["relevant", "search", "terms"]}
  jsonLd={buildBreadcrumbSchema([{ name: "Page Name", path: "/your-route" }])}
/>
```

Use `buildBreadcrumbSchema` (from `src/lib/seoSchema.ts`) for any page that isn't the
homepage — pass the trail of `{ name, path }` from directly under Home down to the current
page; Home itself is added automatically.

If a page needs more than one JSON-LD block (e.g. breadcrumb + a Service/Course/Review
schema), pass an array to `jsonLd` instead of a single object — see `src/pages/Services.tsx`
or `src/pages/Trainings.tsx` for examples.

## How to update the sitemap when adding pages

**Static pages** (anything with a fixed route, like a new top-level page): add it to the
`staticUrls` array in `scripts/generate-sitemap.mjs`.

**Portfolio projects**: nothing to do — the script reads `portfolioProjects` directly from
`src/data/portfolioData.ts` at build time, so adding a new project to that file
automatically gets it a sitemap entry on the next build. This is intentional; it's the fix
for the original gap where 12+ live project pages existed with zero sitemap entries.

The sitemap regenerates automatically via the `prebuild` npm script before every
`npm run build`. To regenerate it manually without a full build: `npm run sitemap`.

## Open Graph image

`public/og-image.jpg` is 1200×630 (the standard size most platforms expect for a full-width
large-image preview). If you replace this file, keep it at 1200×630 — `src/components/SEO.tsx`
declares those dimensions via `og:image:width`/`og:image:height` by default.

Project detail pages currently use this same site-default image rather than each project's
own cover photo — those cover images (`src/assets/showcase-*.jpg`) are portrait/varied
aspect ratios unsuited to the 1.91:1 social-preview ratio. If project-specific share images
are wanted later, produce them at 1200×630 specifically, then pass `image={...}` (and
matching `imageWidth`/`imageHeight` if not 1200×630) to that page's `<SEO>` call.

## Search Console / Bing Webmaster Tools verification

Not yet set up — these are manual steps on Google's and Microsoft's side that need a real
site owner to do:

1. **Google Search Console**: go to https://search.google.com/search-console, add the
   property `https://emman-engineered.vercel.app`, choose the "HTML tag" verification
   method, copy just the `content` value from the meta tag it gives you, and set it as
   `VITE_GOOGLE_SITE_VERIFICATION` in your `.env` (see `.env.example`). Once set, it
   automatically renders via `src/components/SEO.tsx` — no further code change needed.
2. Once verified, submit the sitemap from inside Search Console:
   Sitemaps → Add a new sitemap → `sitemap.xml`.
3. **Bing Webmaster Tools**: https://www.bing.com/webmasters — same idea. Copy the
   `content` value from its meta-tag verification option into
   `VITE_BING_SITE_VERIFICATION`. Bing also supports importing directly from an already
   Google-verified site, which is usually faster than doing the meta tag twice.
4. Submit the sitemap there too: Sitemaps → Submit sitemap → `sitemap.xml`.

Both env vars are optional — the corresponding meta tag is simply omitted if unset, so
leaving them blank breaks nothing.

## IndexNow (not active yet)

`public/indexnow-key.txt` is a placeholder with setup instructions inline. IndexNow lets
Bing/Yandex be notified the instant a page changes instead of waiting for their next crawl.
Nothing is wired up to call it automatically — see the file itself for the steps to
activate it once you have a real key (generate key → rename the placeholder file to match
it → set `VITE_INDEXNOW_KEY` → optionally script a post-deploy notification call).

## Things that are still manual / outside code

- Submitting the sitemap to Google Search Console and Bing Webmaster Tools (above).
- Generating and activating a real IndexNow key (above).
- Populating the `sameAs` array in the Organization schema (`PageLayout.tsx`) with real
  Instagram/X/Facebook/LinkedIn URLs once those accounts exist — left as an empty array
  deliberately rather than filled with placeholder/fake links.
- Producing project-specific 1200×630 cover images if per-project social previews are
  wanted later (see "Open Graph image" above).
