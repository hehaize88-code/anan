import { LanguageSwitcher } from "./language-switcher";

function Arrow() { return <span aria-hidden="true">↗</span>; }

export function SiteHeader() {
  return <header className="topbar">
    <a className="brand brand-wordmark" href="/" aria-label="Sheets Superbuy home"><span>Sheets</span><strong>Superbuy</strong></a>
    <nav aria-label="Primary navigation"><a href="/categories/">Categories</a><a href="/finds/">Finds</a><a href="/articles/">Articles</a><a href="/guide/">Guide</a><a href="/qc-checklist/">QC</a><a href="/shipping-planner/">Shipping</a><a href="/faq/">FAQ</a></nav>
    <div className="header-actions"><LanguageSwitcher/><a className="top-cta" href="https://kakobuysn.com/AllProducts/" target="_blank" rel="noopener noreferrer">Open external index <Arrow /></a></div>
  </header>;
}
