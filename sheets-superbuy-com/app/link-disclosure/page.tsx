import { PolicyPage } from "../policy-page";
import { BreadcrumbJsonLd, pageMetadata } from "../seo";

export const metadata = pageMetadata("External Link Disclosure | Sheets Superbuy", "Understand why product and category links on Sheets Superbuy open a separately hosted catalogue.", "/link-disclosure/");

export default function DisclosurePage() {
  return <><BreadcrumbJsonLd items={[{name:"Home",path:"/"},{name:"Link disclosure",path:"/link-disclosure/"}]}/><PolicyPage eyebrow="DISCLOSURE / EXTERNAL CATALOGUE" title="Why some records open on another domain." intro="Product search, category and record actions open a separately hosted catalogue maintained by the same publisher. They open in a new tab so the domain change is visible.">
    <section><h2>Publisher relationship</h2><p>The catalogue is part of the publisher’s product-discovery system. It is not an official Superbuy property, and a catalogue record is not a direct marketplace or official platform listing.</p></section>
    <section><h2>Commercial context</h2><p>The publisher may benefit when readers continue through catalogue links. This does not change the editorial rule: records are discovery starting points and readers must verify the current seller, option, price and availability before ordering.</p></section>
    <section><h2>No hidden destination promise</h2><p>Buttons identify external actions in their labels, and this site does not claim that an arrow alone explains the destination. If a destination appears unexpected, close the tab and return without entering personal or payment information.</p></section>
  </PolicyPage></>;
}
