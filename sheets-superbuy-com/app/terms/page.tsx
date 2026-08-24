import { PolicyPage } from "../policy-page";
import { BreadcrumbJsonLd, pageMetadata } from "../seo";

export const metadata = pageMetadata("Terms of Use | Sheets Superbuy", "Terms for using the independent product research, checklists and catalogue links published by Sheets Superbuy.", "/terms/");

export default function TermsPage() {
  return <><BreadcrumbJsonLd items={[{name:"Home",path:"/"},{name:"Terms",path:"/terms/"}]}/><PolicyPage eyebrow="TERMS / LAST UPDATED 24 AUGUST 2026" title="Use the site as research, not a guarantee." intro="By using Sheets Superbuy, you agree to verify current product, seller, platform and shipping information before acting.">
    <section><h2>Informational purpose</h2><p>Content is provided for general product research. Listings, options, prices, services, routes and rules can change. Nothing on this site guarantees authenticity, quality, fit, availability, delivery or customs clearance.</p></section>
    <section><h2>External destinations</h2><p>Some actions open a separately hosted catalogue in a new tab. A working link does not mean every option is available or suitable. The destination terms apply to actions taken there.</p></section>
    <section><h2>Independent publisher</h2><p>This site is not affiliated with Superbuy and does not sell products, process payments or control marketplace sellers, warehouses, carriers or customs authorities.</p></section>
  </PolicyPage></>;
}
