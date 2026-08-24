import type { MetadataRoute } from "next";

const routes = [
  "",
  "/categories/",
  "/finds/",
  "/guide/",
  "/qc-checklist/",
  "/shipping-planner/",
  "/faq/",
  "/articles/",
  "/articles/how-to-use-superbuy-spreadsheet/",
  "/articles/superbuy-qc-photo-checklist/",
  "/articles/plan-superbuy-shipping-cost/",
  "/fr/",
  "/zh-cn/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-24");
  return routes.map((route, index) => ({
    url: `https://sheets-superbuy.com${route}`,
    lastModified,
    changeFrequency: index === 0 ? "daily" : "weekly",
    priority: index === 0 ? 1 : index < 8 ? 0.8 : 0.7,
  }));
}
