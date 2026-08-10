"use client";

import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { siteConfig } from "@/data/site";
import { getScheduleDisplay } from "@/lib/schedule";
import { useLanguage } from "@/i18n/LanguageProvider";

const footerLink = "text-sm text-white/75 transition-colors hover:text-white";

export function Footer() {
  const { t, tx } = useLanguage();
  const year = new Date().getFullYear();
  const schedule = getScheduleDisplay();

  return (
    <footer className="border-t border-white/10 bg-mar text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="mb-5 w-fit bg-crema p-2">
              <BrandLogo height={84} />
            </div>
            <h2 className="sr-only">{siteConfig.name}</h2>
            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              {t("footer.blurb")}
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/55">
              {t("footer.contact")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li>
                <a
                  href={siteConfig.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {siteConfig.address.full}
                </a>
              </li>
              <li>
                <a href={siteConfig.phoneHref} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/55">
              {t("footer.hours")}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              {schedule.map((slot) => (
                <li key={slot.days} className="flex justify-between gap-4">
                  <span>{tx(slot.days, slot.daysEn)}</span>
                  <span className="text-white/55">{slot.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/50">
            {/* El HTML estático se genera en build: el año del cliente puede
                diferir tras Nochevieja hasta el siguiente despliegue. */}
            © <span suppressHydrationWarning>{year}</span> {siteConfig.name}
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/aviso-legal" className={footerLink}>
              {t("footer.legal")}
            </Link>
            <Link href="/privacidad" className={footerLink}>
              {t("footer.privacy")}
            </Link>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={footerLink}
            >
              Instagram
            </a>
            <a
              href={siteConfig.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className={footerLink}
            >
              Google Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
