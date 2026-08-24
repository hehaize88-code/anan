import { SiteHeader } from "./site-header";

export const categories = [
  { name: "Shoes", path: "/shoes/", count: "Footwear", note: "Sneakers, runners and daily pairs" },
  { name: "Sweatshirts", path: "/hoodies-sweaters/", count: "Layers", note: "Hoodies, knits and zip layers" },
  { name: "T-Shirts", path: "/t-shirts/", count: "Tops", note: "Graphic, basic and seasonal tees" },
  { name: "Jackets", path: "/jackets/", count: "Outerwear", note: "Puffers, shells and light jackets" },
  { name: "Pants / Shorts", path: "/pants-shorts/", count: "Bottoms", note: "Daily fits and matching sets" },
  { name: "Accessories", path: "/accessories/", count: "Extras", note: "Bags, eyewear and small goods" },
];

export const products = [
  { name: "BAPE ABC Camo Crewneck", category: "Sweatshirts", image: "https://kakobuysn.com/uploads/allimg/20260601/1-260601003536120.png", href: "https://kakobuysn.com/AllProducts/2989.html", check: "40 styles listed" },
  { name: "AJ The Flyer Zip Hoodie", category: "Sweatshirts", image: "https://kakobuysn.com/uploads/allimg/20260522/1-2605221Z02WE.webp", href: "https://kakobuysn.com/AllProducts/2986.html", check: "Check size and option" },
  { name: "Air Force 1 High", category: "Shoes", image: "https://kakobuysn.com/uploads/allimg/20260522/1-2605221UAN44.webp", href: "https://kakobuysn.com/AllProducts/2985.html", check: "Review sizing first" },
  { name: "Structured Shoulder Bag", category: "Accessories", image: "https://kakobuysn.com/uploads/allimg/20260522/1-2605221U5133Z.webp", href: "https://kakobuysn.com/AllProducts/2984.html", check: "Inspect hardware details" },
  { name: "Polo Knit Sweater", category: "Sweatshirts", image: "https://kakobuysn.com/uploads/allimg/20260522/1-2605221U324D8.webp", href: "https://kakobuysn.com/AllProducts/2983.html", check: "Compare measurements" },
  { name: "Minimal Graphic Tee", category: "T-Shirts", image: "https://kakobuysn.com/uploads/allimg/20260522/1-2605221U11J48.webp", href: "https://kakobuysn.com/AllProducts/2982.html", check: "Check print placement" },
];

const steps = [
  { number: "01", title: "Find", text: "Choose a category or search the live index." },
  { number: "02", title: "Verify", text: "Confirm listing, option, size and seller details." },
  { number: "03", title: "Inspect", text: "Compare warehouse QC photos with your order." },
  { number: "04", title: "Plan", text: "Check parcel weight, route and packaging needs." },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-main">
          <p className="eyebrow">Independent product research · 2026</p>
          <h1>A calmer way to find and check Superbuy spreadsheet items.</h1>
          <p className="hero-deck">Browse organized product records, preserve the exact option you want, then use practical QC and parcel checks before making the next decision.</p>
          <form className="search" action="https://kakobuysn.com/index.php" method="get">
            <input type="hidden" name="m" value="home" /><input type="hidden" name="c" value="Search" /><input type="hidden" name="a" value="lists" />
            <label className="sr-only" htmlFor="product-search">Search the product index</label>
            <input id="product-search" name="keywords" placeholder="Search shoes, hoodies, bags…" autoComplete="off" required />
            <button type="submit">Search products <Arrow /></button>
          </form>
          <div className="hero-trust"><span>Real product records</span><span>Category-led browsing</span><span>QC-first research</span></div>
        </div>

        <aside className="hero-feature" aria-label="Featured product record">
          <div className="feature-label"><span>Featured record</span><span>Updated index</span></div>
          <a href="https://kakobuysn.com/AllProducts/2985.html" className="feature-image"><img src="https://kakobuysn.com/uploads/allimg/20260522/1-2605221UAN44.webp" alt="Air Force 1 High product record" /></a>
          <div className="feature-copy"><div><small>Shoes</small><h2>Air Force 1 High</h2><p>Review size, selected option and current listing before order.</p></div><a href="https://kakobuysn.com/AllProducts/2985.html" aria-label="Open Air Force 1 High product record"><Arrow /></a></div>
        </aside>
      </section>

      <section className="quiet-stats" aria-label="Site features"><div><strong>06</strong><span>Core categories</span></div><div><strong>Live</strong><span>Product destinations</span></div><div><strong>04</strong><span>Research steps</span></div><div><strong>Free</strong><span>Open browsing</span></div></section>

      <section className="category-section" id="categories">
        <div className="section-heading"><div><p className="kicker">Browse by category</p><h2>Start with what you need</h2></div><p>Each collection opens the matching product catalogue. Verify the current listing and selected option before ordering.</p></div>
        <div className="category-grid">{categories.map((category) => <a key={category.name} href={`https://kakobuysn.com${category.path}`} className="category-card"><span className="category-type">{category.count}</span><h3>{category.name}</h3><p>{category.note}</p><span className="category-link">Browse collection <Arrow /></span></a>)}</div>
      </section>

      <section className="finds-section" id="finds">
        <div className="section-heading"><div><p className="kicker">Current product records</p><h2>Finds worth checking</h2></div><p>Discovery starting points—not endorsements. Open the full record and confirm price, options and availability at the time of ordering.</p></div>
        <div className="product-grid">{products.map((product) => <a className="product-card" href={product.href} key={product.href}><div className="product-image-wrap"><img src={product.image} alt={product.name} loading="lazy" /></div><div className="product-copy"><small>{product.category}</small><h3>{product.name}</h3><p>{product.check}</p><span>View record <Arrow /></span></div></a>)}</div>
        <div className="section-action"><a href="https://kakobuysn.com/AllProducts/">Browse the complete product index <Arrow /></a></div>
      </section>

      <section className="workflow-section" id="workflow">
        <div className="section-heading"><div><p className="kicker">Simple method</p><h2>Four checks, one clear workflow</h2></div><p>A spreadsheet helps with discovery. Your final decision should still use the exact order option, warehouse evidence and current shipping conditions.</p></div>
        <ol className="workflow-list">{steps.map((step) => <li key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
        <div className="fact-note"><strong>Superbuy process note</strong><p>Superbuy currently describes its standard shopping-agent flow as purchase, QC and storage, then global delivery. It also states that three free QC photos and 90 days of free storage are provided. Confirm the latest terms in your account before ordering.</p><a href="/guide/">Read the complete guide <Arrow /></a></div>
      </section>

      <section className="faq-section" id="faq">
        <div className="faq-title"><p className="kicker">Quick answers</p><h2>Before you save a find</h2><a href="/faq/">View all questions <Arrow /></a></div>
        <div className="faq-list">
          <details><summary>What is a Superbuy spreadsheet?<span>+</span></summary><p>An independent product-discovery index organized by category. It shortens research time but does not guarantee seller quality, accuracy or future availability.</p></details>
          <details><summary>Are product links always active?<span>+</span></summary><p>No. Marketplace listings, prices and options can change. Verify the destination immediately before ordering.</p></details>
          <details><summary>What should I check in QC photos?<span>+</span></summary><p>Confirm color and size first, then inspect proportions, visible defects, measurements, hardware and print placement.</p></details>
          <details><summary>Does the item price include international shipping?<span>+</span></summary><p>Usually not. Product payment and international parcel delivery are separate stages in the shopping-agent process.</p></details>
        </div>
      </section>

      <footer><div className="footer-brand"><img src="/superbuy-logo.png" alt="Superbuy" /><p>Independent research for deliberate buyers.</p></div><div className="footer-links"><a href="/guide/">Guide</a><a href="/qc-checklist/">QC</a><a href="/shipping-planner/">Shipping</a><a href="/faq/">FAQ</a></div><p className="disclaimer">Independent informational resource. Not affiliated with Superbuy. We do not sell products, process payments or guarantee third-party listings.</p></footer>
    </main>
  );
}
