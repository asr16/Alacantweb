"use client";

import { siteConfig } from "@/data/site";
import { getScheduleSummary } from "@/lib/schedule";
import { OpenStatus } from "@/components/OpenStatus";
import { useLanguage } from "@/i18n/LanguageProvider";

export function InfoBar() {
  const { t, locale } = useLanguage();

  return (
    <section className="border-b border-arena bg-white">
      <div className="mx-auto grid max-w-6xl divide-y divide-arena sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        <div className="px-4 py-6 sm:px-6">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-texto-suave">
            {t("infobar.location")}
          </p>
          <a
            href={siteConfig.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block text-sm leading-snug text-texto hover:text-mar"
          >
            {siteConfig.address.street}
            <span className="block text-texto-suave">
              {siteConfig.address.postalCode} {siteConfig.address.city}
            </span>
          </a>
        </div>
        <div className="px-4 py-6 sm:px-6">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-texto-suave">
              {t("infobar.hours")}
            </p>
            <OpenStatus />
          </div>
          <p className="mt-2 text-sm leading-snug text-texto">
            {getScheduleSummary(locale)}
          </p>
        </div>
        <div className="px-4 py-6 sm:px-6">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-texto-suave">
            {t("infobar.phone")}
          </p>
          <a
            href={siteConfig.phoneHref}
            className="mt-2 block font-display text-xl font-semibold tracking-tight text-mar"
          >
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
