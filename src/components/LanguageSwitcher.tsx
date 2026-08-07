"use client";

import { memo } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { Locale } from "@/i18n/dictionaries";

function LanguageSwitcherInner() {
  const { locale, setLocale, t } = useLanguage();
  const options: Locale[] = ["es", "en"];

  return (
    <div
      className="inline-flex rounded-full border border-arena bg-white p-0.5"
      role="group"
      aria-label={t("lang.switch")}
    >
      {options.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
            locale === code
              ? "bg-mar text-white"
              : "text-texto-suave hover:text-mar"
          }`}
          aria-pressed={locale === code}
        >
          {t(code === "es" ? "lang.es" : "lang.en")}
        </button>
      ))}
    </div>
  );
}

export const LanguageSwitcher = memo(LanguageSwitcherInner);
