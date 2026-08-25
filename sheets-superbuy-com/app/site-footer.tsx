export function SiteFooter({ research = false }: { research?: boolean }) {
  return <footer>
    <div className="footer-brand"><a className="brand" href="/" aria-label="Sheets Superbuy home"><img src="/superbuy-logo.png" alt="Sheets Superbuy" width="726" height="142" /></a><p>{research ? "Independent product research for deliberate buyers." : "Independent research for deliberate buyers."}</p></div>
    <div className="footer-links"><a href="/about/">About</a><a href="/contact/">Contact</a><a href="/editorial-policy/">Editorial</a><a href="/link-disclosure/">Disclosure</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a><a href="/faq/">FAQ</a></div>
    <p className="disclaimer">Independent informational resource. Not affiliated with Superbuy. We do not sell products, process payments or guarantee third-party listings.</p>
  </footer>;
}
