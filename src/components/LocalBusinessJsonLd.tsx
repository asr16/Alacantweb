import { siteConfig } from "@/data/site";
import { getOpeningHoursSpecification } from "@/lib/schedule";

/** Datos estructurados JSON-LD para negocio local (solo datos reales del proyecto). */
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "IceCreamShop",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phoneHref.replace(/^tel:/, ""),
    email: siteConfig.email,
    image: `${siteConfig.url}/images/portada.jpg`,
    logo: `${siteConfig.url}/brand/logo-alacant.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.province,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    hasMap: siteConfig.googleMaps,
    sameAs: [
      siteConfig.instagram,
      siteConfig.tiktok,
      siteConfig.glovo,
      siteConfig.googleMaps,
    ],
    openingHoursSpecification: getOpeningHoursSpecification(),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
