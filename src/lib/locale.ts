import type { Locale } from "@/i18n/dictionaries";

/** Elige el valor según el idioma activo. */
export function pick<T>(locale: Locale, es: T, en: T): T {
  return locale === "en" ? en : es;
}
