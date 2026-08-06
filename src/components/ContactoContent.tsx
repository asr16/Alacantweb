"use client";

import { Camera, Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactCard } from "@/components/ContactCard";
import { OpenStatus } from "@/components/OpenStatus";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { getWhatsAppHref, siteConfig } from "@/data/site";
import { getScheduleDisplay } from "@/lib/schedule";
import { useLanguage } from "@/i18n/LanguageProvider";

export function ContactoContent() {
  const { t, tx, locale } = useLanguage();
  const schedule = getScheduleDisplay();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <SectionHeading title={t("contact.title")} subtitle={t("contact.subtitle")} />

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <ContactCard
            icon={<MapPin className="h-5 w-5" aria-hidden />}
            title={t("contact.address")}
          >
            <p className="mt-1 text-texto-suave">{siteConfig.address.full}</p>
            <a
              href={siteConfig.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="link-mar mt-3 inline-flex text-sm font-medium"
            >
              {t("contact.maps")}
            </a>
          </ContactCard>

          <ContactCard
            icon={<Phone className="h-5 w-5" aria-hidden />}
            title={t("contact.phone")}
          >
            <a href={siteConfig.phoneHref} className="link-mar mt-1 block">
              {siteConfig.phone}
            </a>
          </ContactCard>

          <ContactCard
            icon={<WhatsAppIcon className="h-5 w-5" />}
            title={t("contact.whatsapp")}
            iconClassName="bg-[#25D366]/15 text-[#128C7E]"
          >
            <a
              href={getWhatsAppHref(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="link-mar mt-1 block"
            >
              {siteConfig.whatsapp}
            </a>
            <p className="mt-2 text-sm text-texto-suave">{t("whatsapp.message")}</p>
          </ContactCard>

          <ContactCard
            icon={<Mail className="h-5 w-5" aria-hidden />}
            title={t("contact.email")}
          >
            <a href={siteConfig.emailHref} className="link-mar mt-1 block">
              {siteConfig.email}
            </a>
          </ContactCard>

          <ContactCard
            icon={<Camera className="h-5 w-5" aria-hidden />}
            title="Instagram"
          >
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="link-mar mt-1 block"
            >
              @heladeriaalacantroquetas
            </a>
          </ContactCard>

          <ContactCard
            icon={<Clock className="h-5 w-5" aria-hidden />}
            title={t("contact.hours")}
          >
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <OpenStatus />
            </div>
            <ul className="mt-3 space-y-2 text-sm text-texto-suave">
              {schedule.map((slot) => (
                <li key={slot.days} className="flex justify-between gap-4">
                  <span>{tx(slot.days, slot.daysEn)}</span>
                  <span>{slot.hours}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-texto-suave">
              {tx(siteConfig.scheduleNote, siteConfig.scheduleNoteEn)}
            </p>
          </ContactCard>
        </div>

        <div className="overflow-hidden rounded-3xl border border-arena bg-arena shadow-sm">
          <iframe
            title={t("contact.mapTitle")}
            src={siteConfig.googleMapsEmbed}
            className="h-full min-h-[520px] w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
