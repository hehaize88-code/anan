import { PolicyPage } from "../policy-page";
import { BreadcrumbJsonLd, pageMetadata } from "../seo";

export const metadata = pageMetadata("About Sheets Superbuy | Independent Research Site", "Learn how Sheets Superbuy organizes product discovery, QC checks and parcel-planning research as an independent publisher.", "/about/");

export default function AboutPage() {
  return <><BreadcrumbJsonLd items={[{name:"Home",path:"/"},{name:"About",path:"/about/"}]}/><PolicyPage eyebrow="ABOUT / INDEPENDENT PUBLISHER" title="Research first, then verify the live record." intro="Sheets Superbuy is an independent product-research site built to make spreadsheet discovery, warehouse checks and parcel planning easier to understand.">
    <section><h2>What this site does</h2><p>We organize product categories, maintain research guides and provide checklists that help readers preserve the exact option they intend to review. Product records are discovery starting points, not endorsements or guarantees.</p></section>
    <section><h2>Who operates the catalogue</h2><p>Product-record buttons open a separately hosted catalogue maintained by the same publisher. It uses a different domain and opens in a new tab. Sheets Superbuy does not process orders or payments.</p></section>
    <section><h2>Independent status</h2><p>Sheets Superbuy is not affiliated with, endorsed by or operated by Superbuy. Platform names are used descriptively so readers can understand the research workflow.</p></section>
  </PolicyPage></>;
}
