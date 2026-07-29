import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.creativeemmanlimited.com";
const DEFAULT_OG = `${SITE_URL}/og-image.jpg`;

// Search-console verification codes, set via env vars so no real codes are ever hardcoded
// in the repo. Leave these unset until you have real codes from Google Search Console /
// Bing Webmaster Tools — see .env.example and SEO.md for setup instructions.
const GOOGLE_SITE_VERIFICATION = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION as string | undefined;
const BING_SITE_VERIFICATION = import.meta.env.VITE_BING_SITE_VERIFICATION as string | undefined;

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  /** Only needed when passing a custom `image` that isn't the 1200x630 site default. */
  imageWidth?: number;
  imageHeight?: number;
  type?: "website" | "article";
  keywords?: string[];
  /** Defaults to "index, follow". Pass "noindex, nofollow" for pages that shouldn't be indexed (e.g. a thank-you page). */
  robots?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SEO = ({
  title,
  description,
  path,
  image = DEFAULT_OG,
  imageWidth = 1200,
  imageHeight = 630,
  type = "website",
  keywords,
  robots = "index, follow",
  jsonLd,
}: SEOProps) => {
  const url = `${SITE_URL}${path}`;
  const ldArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      <meta name="robots" content={robots} />
      <meta name="author" content="Creative Emman Limited" />
      <link rel="canonical" href={url} />

      {/* English, single-locale site for now — both tags point at this same URL.
          If/when other language versions exist, add per-language hreflang entries here
          instead of just these two. */}
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      {GOOGLE_SITE_VERIFICATION && <meta name="google-site-verification" content={GOOGLE_SITE_VERIFICATION} />}
      {BING_SITE_VERIFICATION && <meta name="msvalidate.01" content={BING_SITE_VERIFICATION} />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Creative Emman Limited" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:width" content={String(imageWidth)} />
      <meta property="og:image:height" content={String(imageHeight)} />
      <meta property="og:image:alt" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />

      {ldArray.map((ld, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(ld)}</script>
      ))}
    </Helmet>
  );
};

export default SEO;
