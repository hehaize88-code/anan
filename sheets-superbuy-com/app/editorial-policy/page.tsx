import { PolicyPage } from "../policy-page";
import { BreadcrumbJsonLd, pageMetadata } from "../seo";

export const metadata = pageMetadata("Editorial & Product Selection Policy | Sheets Superbuy", "How Sheets Superbuy selects records, verifies links, separates platform facts from analysis and handles corrections.", "/editorial-policy/");

export default function EditorialPolicyPage() {
  return <><BreadcrumbJsonLd items={[{name:"Home",path:"/"},{name:"Editorial policy",path:"/editorial-policy/"}]}/><PolicyPage eyebrow="EDITORIAL / SELECTION POLICY" title="How records and guides are maintained." intro="The goal is useful independent research: clear sources, current link checks and honest limits on what a product card can prove.">
    <section><h2>Record selection</h2><p>Records are chosen to provide useful category coverage and a practical starting point for option, measurement and QC review. Inclusion does not mean a seller or product has been endorsed.</p></section>
    <section><h2>Verification standard</h2><p>A record may show a checked date only after its destination has been tested. Price, stock, options and QC availability are not stated unless the underlying evidence was reviewed. Readers should always repeat those checks before ordering.</p></section>
    <section><h2>Platform research</h2><p>Claims about platform workflows are based on current official materials and are labeled separately from independent analysis. Services and rules can change, so account screens and current platform terms take priority.</p></section>
    <section><h2>Corrections</h2><p>Material corrections should update the affected page and its sitemap modification date. A routine rebuild should not make every page appear newly edited.</p></section>
  </PolicyPage></>;
}
