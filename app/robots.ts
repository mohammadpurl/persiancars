import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/constants";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/admin"],
    },
    host: BRAND.siteUrl,
    sitemap: `${BRAND.siteUrl}/sitemap.xml`,
  };
}
