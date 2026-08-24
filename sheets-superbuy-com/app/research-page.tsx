import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";

export function ResearchPage({ label, title, intro, children, cta = "Open the live product index" }: { label: string; title: string; intro: string; children: ReactNode; cta?: string }) {
  return (
    <main className="article-shell">
      <SiteHeader />
      <section className="article-hero"><p className="eyebrow"><span /> {label}</p><h1>{title}</h1><p>{intro}</p></section>
      <div className="article-layout"><aside><strong>Research path</strong><a href="/articles/">SEO articles</a><a href="/guide/">Start-to-finish guide</a><a href="/qc-checklist/">QC photo checklist</a><a href="/shipping-planner/">Parcel planning</a><a href="/faq/">Common questions</a><a className="aside-cta" href="https://kakobuysn.com/AllProducts/">{cta} ↗</a></aside><article className="article-body">{children}</article></div>
      <footer><div className="footer-brand"><img src="/superbuy-logo.png" alt="Superbuy" /><p>Independent product research for deliberate buyers.</p></div><div className="footer-links"><a href="/">Home</a><a href="/guide/">Guide</a><a href="/qc-checklist/">QC</a><a href="/shipping-planner/">Shipping</a></div><p className="disclaimer">Independent informational resource. Not affiliated with Superbuy. Marketplace listings, agent terms, route availability and costs can change; verify current details before ordering.</p></footer>
    </main>
  );
}
