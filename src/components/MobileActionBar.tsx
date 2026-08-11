"use client";

import Link from "next/link";
import { IceCreamCone, MapPinned, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

export function MobileActionBar() {
  const { t } = useLanguage();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-arena bg-crema/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-sm md:hidden"
      aria-label={t("mobileBar.label")}
    >
      <ul className="mx-auto grid max-w-lg grid-cols-3">
        <li>
          <Link
            href="/carta"
            className="flex flex-col items-center gap-1 px-2 py-3 text-[0.7rem] font-semibold uppercase tracking-wide text-texto transition-colors hover:text-mar focus-visible:bg-arena focus-visible:outline-none"
          >
            <IceCreamCone className="h-5 w-5 text-mar" aria-hidden />
            {t("mobileBar.menu")}
          </Link>
        </li>
        <li>
          <a
            href={siteConfig.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 px-2 py-3 text-[0.7rem] font-semibold uppercase tracking-wide text-texto transition-colors hover:text-mar focus-visible:bg-arena focus-visible:outline-none"
          >
            <MapPinned className="h-5 w-5 text-mar" aria-hidden />
            {t("mobileBar.maps")}
          </a>
        </li>
        <li>
          <a
            href={siteConfig.phoneHref}
            className="flex flex-col items-center gap-1 px-2 py-3 text-[0.7rem] font-semibold uppercase tracking-wide text-texto transition-colors hover:text-mar focus-visible:bg-arena focus-visible:outline-none"
          >
            <Phone className="h-5 w-5 text-mar" aria-hidden />
            {t("mobileBar.call")}
          </a>
        </li>
      </ul>
    </nav>
  );
}
