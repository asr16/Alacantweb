/**
 * Horarios del local (Europe/Madrid).
 * En pantalla y en SEO se muestra un mensaje general: apertura diaria a las 9:00.
 * El cierre varía según temporada.
 */

const SEO_DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

/** Filas para footer / contacto — mensaje general acordado con el cliente. */
export function getScheduleDisplay() {
  return [
    {
      days: "Todos los días",
      daysEn: "Every day",
      hours: "Desde las 9:00",
      hoursEn: "From 9:00",
    },
  ];
}

/** Resumen corto para InfoBar. */
export function getScheduleSummary(locale: "es" | "en") {
  return locale === "en"
    ? "Open every day from 9:00"
    : "Abierto todos los días desde las 9:00";
}

/** JSON-LD alineado con el horario visible (sin cierres concretos). */
export function getOpeningHoursSpecification() {
  return SEO_DAY_NAMES.map((day) => ({
    "@type": "OpeningHoursSpecification" as const,
    dayOfWeek: day,
    opens: "09:00",
  }));
}
