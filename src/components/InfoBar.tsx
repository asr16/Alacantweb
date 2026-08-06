"use client";

import { siteConfig } from "@/data/site";
import { getScheduleSummary } from "@/lib/schedule";
import { Clock, MapPin, Phone } from "lucide-react";
import { OpenStatus } from "@/components/OpenStatus";
import { useLanguage } from "@/i18n/LanguageProvider";

export function InfoBar() {
  const { t, locale } = useLanguage();

  return (
    <section className="border-y border-arena bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6">
        <div className="flex items-start gap-3">
          <div className="rounded-full bg-arena p-2.5 text-mar">
            <MapPin className="h-5 w-5" aria-hidden />
          </div>
          <div>
            <h3 className="font-semibold text-texto">{t("infobar.location")}</h3>
            <a
              href={siteConfig.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-sm text-texto-suave transition-colors hover:text-mar"
            >
              {siteConfig.address.full}
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="rounded-full bg-arena p-2.5 text-mar">
            <Clock className="h-5 w-5" aria-hidden />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-semibold text-texto">{t("infobar.hours")}</h3>
              <OpenStatus />
            </div>
            <p className="mt-1 text-sm text-texto-suave">
              {getScheduleSummary(locale)}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="rounded-full bg-arena p-2.5 text-mar">
            <Phone className="h-5 w-5" aria-hidden />
          </div>
          <div>
            <h3 className="font-semibold text-texto">{t("infobar.phone")}</h3>
            <a href={siteConfig.phoneHref} className="link-mar mt-1 text-sm">
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
