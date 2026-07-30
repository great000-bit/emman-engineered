import { Helmet } from "react-helmet-async";
import {
  DEFAULT_OG_IMAGE,
  ORGANIZATION_ID,
  SITE_NAME,
  SITE_URL,
  WEBSITE_ID,
  absoluteSiteUrl,
} from "@/config/site";

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
  image = DEFAULT_OG_IMAGE,
  imageWidth = 1200,
  imageHeight = 630,
  type = "website",
  keywords,
  robots = "index, follow",
  jsonLd,
}: SEOProps) => {
  const url = absoluteSiteUrl(path);
  const imageUrl = image.startsWith("http://") || image.startsWith("https://")
    ? image
    : absoluteSiteUrl(image);
  const crawlerPolicy = robots.includes("noindex")
    ? robots
    : `${robots}, max-image-preview:large, max-snippet:-1, max-video-preview:-1`;
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: "en-NG",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: imageUrl,
      width: imageWidth,
      height: imageHeight,
    },
  };
  const suppliedLd = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  const ldArray = [webPageSchema, ...suppliedLd];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      <meta name="robots" content={crawlerPolicy} />
      <meta name="googlebot" content={crawlerPolicy} />
      <meta name="bingbot" content={crawlerPolicy} />
      <meta name="author" content={SITE_NAME} />
      <meta name="application-name" content={SITE_NAME} />
      <meta name="geo.region" content="NG-RI" />
      <meta name="geo.placename" content="Rivers State, Nigeria" />
      <meta httpEquiv="content-language" content="en-NG" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
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
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_NG" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image:width" content={String(imageWidth)} />
      <meta property="og:image:height" content={String(imageHeight)} />
      <meta property="og:image:alt" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@CE_Limited1" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={title} />

      {ldArray.map((ld, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(ld)}</script>
      ))}
    </Helmet>
  );
};

export default SEO;
