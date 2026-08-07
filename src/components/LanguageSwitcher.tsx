"use client";

import { memo } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { Locale } from "@/i18n/dictionaries";

function LanguageSwitcherInner() {
  const { locale, setLocale, t } = useLanguage();
  const options: Locale[] = ["es", "en"];

  return (
    <div className="inline-flex items-center gap-1" role="group" aria-label={t("lang.switch")}>
      {options.map((code, index) => (
        <span key={code} className="inline-flex items-center gap-1">
          {index > 0 && <span className="text-texto-suave/50" aria-hidden>/</span>}
          <button
            type="button"
            onClick={() => setLocale(code)}
            className={`px-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
              locale === code ? "text-mar" : "text-texto-suave hover:text-texto"
            }`}
            aria-pressed={locale === code}
          >
            {t(code === "es" ? "lang.es" : "lang.en")}
          </button>
        </span>
      ))}
    </div>
  );
}

export const LanguageSwitcher = memo(LanguageSwitcherInner);
