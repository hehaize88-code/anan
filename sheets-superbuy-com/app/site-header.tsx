import { LanguageSwitcher } from "./language-switcher";

function Arrow() { return <span aria-hidden="true">↗</span>; }

export function SiteHeader() {
  return <header className="topbar">
    <a className="brand" href="/" aria-label="Sheets Superbuy home"><img src="/superbuy-logo.png" alt="Superbuy" /></a>
    <nav aria-label="Primary navigation"><a href="/categories/">Categories</a><a href="/finds/">Finds</a><a href="/articles/">Articles</a><a href="/guide/">Guide</a><a href="/qc-checklist/">QC</a><a href="/shipping-planner/">Shipping</a><a href="/faq/">FAQ</a></nav>
    <div className="header-actions"><LanguageSwitcher/><a className="top-cta" href="https://kakobuysn.com/AllProducts/">Open index <Arrow /></a></div>
  </header>;
}
