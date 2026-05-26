import type { Metadata } from "next";
import { BRAND, CONTACT } from "./constants";

export const SITE_KEYWORDS = [
  "خودرو پرشین",
  "تعمیر خودرو",
  "تعمیرگاه تهران",
  "تعمیر موتور",
  "تعمیر گیربکس",
  "عیب‌یابی خودرو",
  "دیاگ خودرو",
  "سرویس دوره‌ای",
  "کلینیک خودرو",
  "تعویض روغن",
  "شهرک گلستان",
  "تعمیر گیربکس اتومات",
  "بازسازی موتور",
] as const;

export const DEFAULT_OG_IMAGE = {
  url: "/images/car-persian-clinic.jpeg",
  width: 1200,
  height: 800,
  alt: `${BRAND.name} — تعمیرگاه تخصصی خودرو در تهران`,
} as const;

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function normalizeSeoPath(path: string) {
  if (!path || path === "/") return "/";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized.endsWith("/") ? normalized : `${normalized}/`;
}

function createRobots(noIndex: boolean): Metadata["robots"] {
  if (noIndex) {
    return {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
        "max-image-preview": "none",
        "max-snippet": 0,
      },
    };
  }

  return {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  };
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const canonical = normalizeSeoPath(path);
  const allKeywords = [...new Set([...SITE_KEYWORDS, ...keywords])];

  return {
    title,
    description,
    keywords: allKeywords,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "fa_IR",
      url: canonical,
      siteName: BRAND.name,
      title: `${title} | ${BRAND.name}`,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${BRAND.name}`,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
    robots: createRobots(noIndex),
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(BRAND.siteUrl),
  applicationName: BRAND.name,
  manifest: "/manifest.webmanifest",
  title: {
    default: `${BRAND.name} | تعمیر تخصصی خودرو در تهران`,
    template: `%s | ${BRAND.name}`,
  },
  description: `${BRAND.name} — تعمیر موتور، گیربکس، دیاگ، سرویس دوره‌ای و بدنه در ${CONTACT.address}. تماس: ${CONTACT.mobileDisplay}`,
  keywords: [...SITE_KEYWORDS],
  authors: [{ name: BRAND.name, url: BRAND.siteUrl }],
  creator: BRAND.name,
  publisher: BRAND.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/khodropersian.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/khodropersian.png",
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "/",
    siteName: BRAND.name,
    title: `${BRAND.name} | تعمیر تخصصی خودرو در تهران`,
    description: BRAND.tagline,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND.name,
    description: BRAND.tagline,
    images: [DEFAULT_OG_IMAGE.url],
  },
  robots: createRobots(false),
};

