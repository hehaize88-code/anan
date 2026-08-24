import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function ResearchPage({ label, title, intro, children, cta = "Open the live product index" }: { label: string; title: string; intro: string; children: ReactNode; cta?: string }) {
  return (
    <main className="article-shell">
      <SiteHeader />
      <section className="article-hero"><p className="eyebrow"><span /> {label}</p><h1>{title}</h1><p>{intro}</p></section>
      <div className="article-layout"><aside><strong>Research path</strong><a href="/articles/">SEO articles</a><a href="/guide/">Start-to-finish guide</a><a href="/qc-checklist/">QC photo checklist</a><a href="/shipping-planner/">Parcel planning</a><a href="/faq/">Common questions</a><a className="aside-cta" href="https://kakobuysn.com/AllProducts/" target="_blank" rel="noopener noreferrer">{cta} ↗</a><small className="external-link-note">Opens our separately hosted product catalogue in a new tab.</small></aside><article className="article-body">{children}</article></div>
      <SiteFooter research/>
    </main>
  );
}
