import { PolicyPage } from "../policy-page";
import { BreadcrumbJsonLd, pageMetadata } from "../seo";

export const metadata = pageMetadata("Contact & Corrections | Sheets Superbuy", "How to submit corrections, link-status reports and rights concerns about content published on Sheets Superbuy.", "/contact/");

export default function ContactPage() {
  return <><BreadcrumbJsonLd items={[{name:"Home",path:"/"},{name:"Contact",path:"/contact/"}]}/><PolicyPage eyebrow="CONTACT / CORRECTIONS" title="Help us correct a record." intro="For corrections, broken-link reports or rights concerns, contact the publisher through the established channel from which you received access to this site or its catalogue.">
    <section><h2>Include enough detail</h2><p>Provide the affected page URL, product-record name, the issue you observed, the date checked and supporting evidence. Do not send passwords, payment details, identity documents or account credentials.</p></section>
    <section><h2>What we can address</h2><p>We can review site copy, category placement, broken catalogue destinations and factual corrections. Orders, payments, warehouse handling and international parcels must be handled by the service involved in that transaction.</p></section>
  </PolicyPage></>;
}
