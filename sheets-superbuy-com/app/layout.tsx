import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sheets-superbuy.com"),
  title: "Sheets Superbuy — Spreadsheet Finds & QC Research",
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
  return <html lang="en"><body>{children}</body></html>;
}
