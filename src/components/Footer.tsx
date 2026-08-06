"use client";

import Link from "next/link";
import { Camera, MapPin, Phone } from "lucide-react";
import { getWhatsAppHref, siteConfig } from "@/data/site";
import { getScheduleDisplay } from "@/lib/schedule";
import { useLanguage } from "@/i18n/LanguageProvider";

const footerLink = "text-sm text-white/85 hover:text-arena rounded";

export function Footer() {
  const { t, tx, locale } = useLanguage();
  const year = new Date().getFullYear();
  const schedule = getScheduleDisplay();

  return (
    <footer className="bg-mar text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-display text-xl font-semibold">{siteConfig.name}</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              {t("footer.blurb")}
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white/90">
              {t("footer.contact")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <a
                  href={siteConfig.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-arena"
                >
                  {siteConfig.address.full}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" aria-hidden />
                <a href={siteConfig.phoneHref} className="hover:text-arena">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppHref(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-arena"
                >
                  WhatsApp {siteConfig.whatsapp}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white/90">
              {t("footer.hours")}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              {schedule.map((slot) => (
                <li key={slot.days} className="flex justify-between gap-4">
                  <span>{tx(slot.days, slot.daysEn)}</span>
                  <span className="text-white/70">{slot.hours}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-white/70">
              {tx(siteConfig.scheduleNote, siteConfig.scheduleNoteEn)}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 sm:flex-row">
          <p className="text-sm text-white/70">
            © {year} {siteConfig.name}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
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
              className={`flex items-center gap-2 ${footerLink}`}
            >
              <Camera className="h-4 w-4" aria-hidden />
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
