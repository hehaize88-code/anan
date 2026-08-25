import type { Metadata } from "next";
import "./globals.css";

import { JsonLd, SITE_NAME, SITE_URL } from "./seo";
import { WhatsAppButton } from "./whatsapp-button";

export const metadata: Metadata = {
  metadataBase: new URL("https://sheets-superbuy.com"),
  title: "Superbuy Spreadsheet 2026: Finds, QC & Shipping Guide | Sheets Superbuy",
  description: "Browse an independent Superbuy spreadsheet research desk with categorized finds, live product records, QC checks and parcel-planning guidance.",
  openGraph: {
    title: "Sheets Superbuy — Spreadsheet Research Desk",
    description: "Find first. Check twice. Browse categorized finds and use a QC-first research workflow.",
    type: "website",
    images: [{ url: "/og.png", width: 1730, height: 909, alt: "Sheets Superbuy — Finds, QC and Shipping Guides" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheets Superbuy — Spreadsheet Research Desk",
    description: "Find first. Check twice. Browse categorized finds and use a QC-first research workflow.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><link rel="preconnect" href="https://kakobuysn.com" crossOrigin="anonymous"/><link rel="dns-prefetch" href="https://kakobuysn.com"/></head><body>
    <JsonLd data={[
      { "@context": "https://schema.org", "@type": "WebSite", name: SITE_NAME, url: SITE_URL, inLanguage: ["en", "fr", "zh-CN"] },
      { "@context": "https://schema.org", "@type": "Organization", name: SITE_NAME, url: SITE_URL, description: "Independent product-research publisher focused on Superbuy spreadsheet discovery, QC checks and parcel planning." },
    ]}/>
    {children}
    <WhatsAppButton />
  </body></html>;
}
