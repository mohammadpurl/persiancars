import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/constants";
import { normalizeSeoPath } from "@/lib/seo";

export const dynamic = "force-static";

const routes = [
  "/",
  "/services",
  "/services/engine-repair",
  "/services/periodic",
  "/services/oil-change",
  "/services/transmission",
  "/services/diagnostics",
  "/services/tuning",
  "/services/brake-repair",
  "/services/car-ac-repair",
  "/about",
  "/contact",
  "/booking",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BRAND.siteUrl;

  return routes.map((route) => ({
    url: `${base}${normalizeSeoPath(route)}`,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/services" ? 0.9 : 0.8,
  }));
}
