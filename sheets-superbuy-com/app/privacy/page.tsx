import { PolicyPage } from "../policy-page";
import { BreadcrumbJsonLd, pageMetadata } from "../seo";

export const metadata = pageMetadata("Privacy Policy | Sheets Superbuy", "Privacy information for visitors using Sheets Superbuy, its language tool and separately hosted catalogue links.", "/privacy/");

export default function PrivacyPage() {
  return <><BreadcrumbJsonLd items={[{name:"Home",path:"/"},{name:"Privacy",path:"/privacy/"}]}/><PolicyPage eyebrow="PRIVACY / LAST UPDATED 24 AUGUST 2026" title="Privacy in plain language." intro="This informational site does not ask visitors to create an account, submit a payment or enter personal information into a site form.">
    <section><h2>Technical data</h2><p>Hosting and security providers may process standard request information such as IP address, browser details, requested URL and timestamps to deliver and protect the site.</p></section>
    <section><h2>Language translation</h2><p>The language selector uses a third-party translation script. When used, that provider may receive technical request data and page text needed to deliver translation.</p></section>
    <section><h2>External catalogue</h2><p>Product and category actions can open our separately hosted catalogue. Its own privacy practices apply after you leave this domain. Review the destination before entering any information.</p></section>
  </PolicyPage></>;
}
