import type { Metadata } from "next";

export const SITE_NAME = "Sheets Superbuy";
export const SITE_URL = "https://sheets-superbuy.com";
export const VERIFIED_DATE = "2026-08-24";
export const VERIFIED_DATE_LABEL = "24 August 2026";

export function absoluteUrl(path: string) {
  const normalized = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}/`;
  return `${SITE_URL}${normalized}`;
}

export function pageMetadata(title: string, description: string, path: string, languages?: Record<string, string>): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(path),
      ...(languages ? { languages } : {}),
    },
    openGraph: { title, description, url: absoluteUrl(path), siteName: SITE_NAME, type: "website" },
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  return <JsonLd data={{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }} />;
}

export function ArticleJsonLd({ headline, description, path, datePublished = VERIFIED_DATE, dateModified = VERIFIED_DATE }: { headline: string; description: string; path: string; datePublished?: string; dateModified?: string }) {
  return <JsonLd data={{
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    mainEntityOfPage: absoluteUrl(path),
    datePublished,
    dateModified,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  }} />;
}

export function HowToJsonLd({ name, description, path, steps }: { name: string; description: string; path: string; steps: string[] }) {
  return <JsonLd data={{
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    url: absoluteUrl(path),
    step: steps.map((text, index) => ({ "@type": "HowToStep", position: index + 1, name: text, text })),
  }} />;
}

export function ItemListJsonLd({ name, path, items }: { name: string; path: string; items: { name: string; url: string }[] }) {
  return <JsonLd data={{
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url: absoluteUrl(path),
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, url: item.url })),
  }} />;
}

export const externalCatalogueProps = { target: "_blank", rel: "noopener noreferrer" } as const;
