import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = [
  { path: "", modified: "2026-08-24", frequency: "daily", priority: 1 },
  { path: "/categories/", modified: "2026-08-24", frequency: "weekly", priority: 0.8 },
  { path: "/finds/", modified: "2026-08-24", frequency: "weekly", priority: 0.8 },
  { path: "/guide/", modified: "2026-08-24", frequency: "monthly", priority: 0.8 },
  { path: "/qc-checklist/", modified: "2026-08-24", frequency: "monthly", priority: 0.8 },
  { path: "/shipping-planner/", modified: "2026-08-24", frequency: "monthly", priority: 0.8 },
  { path: "/faq/", modified: "2026-08-24", frequency: "monthly", priority: 0.8 },
  { path: "/articles/", modified: "2026-08-24", frequency: "weekly", priority: 0.8 },
  { path: "/articles/how-to-use-superbuy-spreadsheet/", modified: "2026-08-24", frequency: "monthly", priority: 0.7 },
  { path: "/articles/superbuy-qc-photo-checklist/", modified: "2026-08-24", frequency: "monthly", priority: 0.7 },
  { path: "/articles/plan-superbuy-shipping-cost/", modified: "2026-08-24", frequency: "monthly", priority: 0.7 },
  { path: "/fr/", modified: "2026-08-24", frequency: "monthly", priority: 0.6 },
  { path: "/zh-cn/", modified: "2026-08-24", frequency: "monthly", priority: 0.6 },
  { path: "/about/", modified: "2026-08-24", frequency: "yearly", priority: 0.5 },
  { path: "/contact/", modified: "2026-08-24", frequency: "yearly", priority: 0.5 },
  { path: "/editorial-policy/", modified: "2026-08-24", frequency: "yearly", priority: 0.5 },
  { path: "/link-disclosure/", modified: "2026-08-24", frequency: "yearly", priority: 0.5 },
  { path: "/privacy/", modified: "2026-08-24", frequency: "yearly", priority: 0.4 },
  { path: "/terms/", modified: "2026-08-24", frequency: "yearly", priority: 0.4 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://sheets-superbuy.com${route.path}`,
    lastModified: new Date(route.modified),
    changeFrequency: route.frequency,
    priority: route.priority,
  }));
}
