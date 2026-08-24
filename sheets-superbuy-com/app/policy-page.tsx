import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function PolicyPage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) {
  return <main className="article-shell">
    <SiteHeader/>
    <section className="directory-shell policy-shell">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="directory-intro">{intro}</p>
      <article className="article-body">{children}</article>
    </section>
    <SiteFooter research/>
  </main>;
}
