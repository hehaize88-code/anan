import type { Metadata } from "next";
import { ResearchPage } from "../research-page";

export const metadata: Metadata = { title: "Superbuy Spreadsheet FAQ | Sheets Superbuy", description: "Clear answers about spreadsheet links, product checks, QC photos, pricing, storage and international parcel planning." };

const faqs = [
  ["Is Sheets Superbuy an official Superbuy website?", "No. It is an independent product-research resource and is not affiliated with Superbuy."],
  ["What is a Superbuy spreadsheet?", "It is a category-based collection of product links used for discovery. A row or product card is a starting point, not proof of seller quality or future availability."],
  ["Are the displayed links guaranteed to stay active?", "No. Marketplace products, options, prices and sellers can change. Verify the current destination immediately before ordering."],
  ["Does a spreadsheet product price include international shipping?", "Normally it does not. Superbuy describes the shopping-agent process as a purchase stage followed by a separate international-parcel stage."],
  ["How many standard QC photos does Superbuy provide?", "Superbuy currently states that three free QC photos are taken when an item enters the warehouse. Check the latest terms in your account because services can change."],
  ["How long is free warehouse storage?", "Superbuy currently states 90 days of free storage for shopping-agent items. Confirm the deadline shown for your own order."],
  ["Do QC photos prove that an item is high quality?", "No. They provide visual evidence from limited angles. Use them to identify mismatches and visible issues, and request more information when a decision-critical detail is missing."],
  ["Can several products be shipped together?", "Superbuy describes parcel consolidation as part of its service. Whether one combined parcel is the best choice depends on weight, dimensions, restrictions and route options."],
];

export default function FAQPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  return <ResearchPage label="REFERENCE / FAQ · FACT CHECKED AUGUST 2026" title="Clear answers before the next click" intro="Use these answers to separate spreadsheet discovery from product verification, warehouse inspection and international delivery.">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <section className="long-faq">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<b>+</b></summary><p>{answer}</p></details>)}</section>
    <section className="source-panel"><h2>Official references</h2><ul><li><span>Shopping Agent Guide</span></li><li><span>Fees and international shipping composition</span></li><li><span>Parcel and storage guidance</span></li></ul></section><div className="article-end"><strong>Move from questions to a real record.</strong><p>Search the live index and verify the exact option before placing an order.</p><a href="https://kakobuysn.com/AllProducts/">Browse product records ↗</a></div>
  </ResearchPage>;
}
