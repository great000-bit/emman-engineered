export const SITE_NAME = "Creative Emman Limited";
export const SITE_URL = "https://www.creativeemmanlimited.com";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const COMPANY_EMAIL = "creativeemmanlimited1@gmail.com";
export const COMPANY_PHONE = "+234-703-784-5433";
export const COMPANY_LOCATION = "Rivers State, Nigeria";

export const SITE_DESCRIPTION =
  "Creative Emman Limited is a creative and technology company based in Rivers State, Nigeria, helping startups and businesses build websites, brand identities, digital products, content, and growth-focused digital experiences.";

export const SOCIAL_PROFILES = [
  "https://www.instagram.com/creativeemman_limited/",
  "https://x.com/CE_Limited1",
  "https://www.facebook.com/profile.php?id=61591330806057",
  "https://www.linkedin.com/company/creative-emman-limited",
];

export const SERVICE_NAMES = [
  "Website Development",
  "Social Media Management",
  "UI/UX Design",
  "Graphic Design",
  "Videography",
  "Video Editing",
  "Motion Graphics Design",
  "Photography",
];

export const absoluteSiteUrl = (path: string) => {
  if (!path || path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}/${path.replace(/^\/+|\/+$/g, "")}`;
};
