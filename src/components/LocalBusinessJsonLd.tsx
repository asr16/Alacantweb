import { siteConfig } from "@/data/site";
import { SCHEDULE_GROUPS } from "@/lib/schedule";

function formatClock(min: number) {
  if (min === 24 * 60 || min === 0) return "00:00";
  const h = Math.floor(min / 60);
  const m = min % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

function openingHoursSpecification() {
  return SCHEDULE_GROUPS.flatMap((group) =>
    group.days.map((day) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: DAY_NAMES[day],
      opens: formatClock(group.openMin),
      closes: formatClock(group.closeMin === 24 * 60 ? 0 : group.closeMin),
    })),
  );
}

/** Datos estructurados JSON-LD para negocio local (solo datos reales del proyecto). */
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "IceCreamShop",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/images/portada.jpg`,
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
    sameAs: [siteConfig.instagram, siteConfig.googleMaps],
    openingHoursSpecification: openingHoursSpecification(),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
