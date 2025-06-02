// Utility to generate meta tags for Remix MetaFunction
export interface MetaData {
  title: string;
  description: string;
  keywords?: string;
  url: string;
  image?: string;
  type?: string;
  robots?: string;
  twitterCardType?: string;
  canonical?: string;
  jsonLd?: string | object | Array<object>;
  siteName?: string;
  locale?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  alternateLocales?: string[];
  extraMeta?: Array<Record<string, string>>;
  favicon?: string;
}

function toJsonLd(jsonLd: string | object | Array<object>): string | undefined {
  if (!jsonLd) return undefined;
  if (typeof jsonLd === "string") return jsonLd;
  return JSON.stringify(jsonLd);
}

export function buildMeta({
  title,
  description,
  keywords = "",
  url,
  image = "",
  type = "website",
  robots = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  twitterCardType = "summary_large_image",
  canonical = url,
  jsonLd = "",
  siteName = "Maths by Pawan Sir",
  locale = "en_US",
  publishedTime = "",
  modifiedTime = "",
  author = "Pawan Sir",
  alternateLocales = [],
  extraMeta = [],
  favicon = "/mathsbypawansir.ico",
}: MetaData) {
  // Warn in dev if title/description are too long
  if (process.env.NODE_ENV === "development") {
    if (title.length > 60) console.warn("SEO: Title exceeds 60 characters.");
    if (description.length > 160) console.warn("SEO: Description exceeds 160 characters.");
  }
  const meta = [
    { title },
    { name: "description", content: description },
    keywords && { name: "keywords", content: keywords },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:site_name", content: siteName },
    { property: "og:locale", content: locale },
    image && { property: "og:image", content: image },
    publishedTime && { property: "article:published_time", content: publishedTime },
    modifiedTime && { property: "article:modified_time", content: modifiedTime },
    author && { name: "author", content: author },
    { name: "twitter:card", content: twitterCardType },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    image && { name: "twitter:image", content: image },
    { rel: "canonical", href: canonical },
    { name: "robots", content: robots },
    favicon && { rel: "icon", href: favicon, type: "image/x-icon" },
    ...alternateLocales.map((loc) => ({ rel: "alternate", hrefLang: loc, href: url })),
    ...extraMeta,
    toJsonLd(jsonLd) && {
      tagName: "script",
      type: "application/ld+json",
      children: toJsonLd(jsonLd),
    },
  ];
  // Remove any non-object or falsy values (e.g., if keywords or image is not set)
  return meta.filter((item): item is Record<string, any> => !!item && typeof item === "object");
}
