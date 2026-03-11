import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const SITE_NAME = "Your Fashion Law Guide";
const DEFAULT_DESC = "Bespoke legal strategies for fashion brands, designers, and creatives. IP protection, contracts & fashion tech compliance in India.";
const SITE_URL = "https://yourfashionlawguide.com";
const DEFAULT_IMAGE = `${SITE_URL}/favicon.png`;
const DEFAULT_LOCALE = "en_IN";

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    Object.entries(attrs).forEach(([k, v]) => {
      el!.setAttribute(k, v);
    });
    document.head.appendChild(el);
    return el;
  }
  Object.entries(attrs).forEach(([k, v]) => {
    el!.setAttribute(k, v);
  });
  return el;
}

function upsertLink(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    Object.entries(attrs).forEach(([k, v]) => {
      el!.setAttribute(k, v);
    });
    document.head.appendChild(el);
    return el;
  }
  Object.entries(attrs).forEach(([k, v]) => {
    el!.setAttribute(k, v);
  });
  return el;
}

export function SEO({ title, description, path = "", image, noIndex = false, type = "website", jsonLd }: SEOProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonical = path ? `${SITE_URL}${path}` : SITE_URL;
  const desc = description || DEFAULT_DESC;
  const socialImage = image || DEFAULT_IMAGE;

  useEffect(() => {
    document.title = fullTitle;

    upsertMeta('meta[name="description"]', { name: "description", content: desc });
    upsertMeta('meta[name="robots"]', { name: "robots", content: noIndex ? "noindex, nofollow" : "index, follow" });
    upsertLink('link[rel="canonical"]', { rel: "canonical", href: canonical });

    upsertMeta('meta[property="og:type"]', { property: "og:type", content: type });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: SITE_NAME });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: fullTitle });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: desc });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonical });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: socialImage });
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: DEFAULT_LOCALE });

    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: fullTitle });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: desc });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: socialImage });

    const globalJsonLd: Array<Record<string, unknown>> = [
      {
        "@context": "https://schema.org",
        "@type": "LegalService",
        name: SITE_NAME,
        description: DEFAULT_DESC,
        url: SITE_URL,
        image: DEFAULT_IMAGE,
        email: "hello@yourfashionlawguide.com",
        areaServed: "IN",
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
    ];

    const pageJsonLd = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
    const jsonLdData = [...globalJsonLd, ...pageJsonLd];
    const existing = document.head.querySelector('script[data-seo-jsonld="true"]');
    if (jsonLdData.length === 0) {
      if (existing) existing.remove();
    } else {
      const script = (existing as HTMLScriptElement | null) ?? document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-jsonld", "true");
      script.text = JSON.stringify(jsonLdData.length === 1 ? jsonLdData[0] : jsonLdData);
      if (!existing) document.head.appendChild(script);
    }
  }, [fullTitle, desc, canonical, socialImage, noIndex, type, jsonLd]);

  return null;
}
