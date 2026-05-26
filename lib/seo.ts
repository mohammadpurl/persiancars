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



const OG_IMAGE = {

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



export function createPageMetadata({

  title,

  description,

  path,

  keywords = [],

  noIndex = false,

}: PageMetadataOptions): Metadata {

  const canonical = path.startsWith("/") ? path : `/${path}`;

  const allKeywords = [...SITE_KEYWORDS, ...keywords];



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

      images: [OG_IMAGE],

    },

    twitter: {

      card: "summary_large_image",

      title: `${title} | ${BRAND.name}`,

      description,

      images: [OG_IMAGE.url],

    },

    robots: noIndex

      ? { index: false, follow: false }

      : { index: true, follow: true },

  };

}



export const rootMetadata: Metadata = {

  metadataBase: new URL(BRAND.siteUrl),

  applicationName: BRAND.name,

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

    icon: [{ url: "/favicon.ico", sizes: "any" }],

    shortcut: "/favicon.ico",

    apple: "/favicon.ico",

  },

  openGraph: {

    type: "website",

    locale: "fa_IR",

    url: "/",

    siteName: BRAND.name,

    title: `${BRAND.name} | تعمیر تخصصی خودرو در تهران`,

    description: BRAND.tagline,

    images: [OG_IMAGE],

  },

  twitter: {

    card: "summary_large_image",

    title: BRAND.name,

    description: BRAND.tagline,

    images: [OG_IMAGE.url],

  },

  robots: {

    index: true,

    follow: true,

    googleBot: {

      index: true,

      follow: true,

      "max-image-preview": "large",

      "max-snippet": -1,

    },

  },

};

