import { BRAND, CONTACT, LINKS } from "@/lib/constants";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";

export default function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: BRAND.name,
    alternateName: "کلینیک خودرو پرشین",
    description: BRAND.tagline,
    url: BRAND.siteUrl,
    telephone: `+98${CONTACT.phone.replace(/^0/, "")}`,
    email: CONTACT.email,
    image: `${BRAND.siteUrl}${DEFAULT_OG_IMAGE.url}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address,
      addressLocality: "تهران",
      addressCountry: "IR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CONTACT.lat,
      longitude: CONTACT.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "https://schema.org/Saturday",
          "https://schema.org/Sunday",
          "https://schema.org/Monday",
          "https://schema.org/Tuesday",
          "https://schema.org/Wednesday",
          "https://schema.org/Thursday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: CONTACT.rating,
      reviewCount: CONTACT.ratingCount,
    },
    sameAs: [LINKS.instagram, LINKS.bale, LINKS.googleMaps],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
