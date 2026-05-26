import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/constants";

export const dynamic = "force-static";

const routes = [
  "",
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
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
