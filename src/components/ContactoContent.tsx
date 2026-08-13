"use client";

import { Bike, Camera, Clock, Mail, MapPin, Music2, Phone } from "lucide-react";
import { ContactCard } from "@/components/ContactCard";
import { OpenStatus } from "@/components/OpenStatus";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/data/site";
import { getScheduleDisplay } from "@/lib/schedule";
import { useLanguage } from "@/i18n/LanguageProvider";

export function ContactoContent() {
  const { t, tx } = useLanguage();
  const schedule = getScheduleDisplay();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <SectionHeading as="h1" title={t("contact.title")} subtitle={t("contact.subtitle")} />

      <div className="mt-8 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:gap-3">
        <a
          href={siteConfig.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-terracota col-span-2 sm:col-auto"
        >
          {t("contact.maps")}
        </a>
        <a href={siteConfig.phoneHref} className="btn btn-mar col-span-2 sm:col-auto">
          {t("contact.call")}
        </a>
        <a href={siteConfig.emailHref} className="btn btn-ghost">
          {t("contact.emailCta")}
        </a>
        <a
          href={siteConfig.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
        >
          {t("contact.instagram")}
        </a>
        <a
          href={siteConfig.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
        >
          {t("contact.tiktok")}
        </a>
        <a
          href={siteConfig.glovo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost col-span-2 sm:col-auto"
        >
          {t("contact.glovo")}
        </a>
      </div>

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
              {t("contact.maps")} →
            </a>
          </ContactCard>

          <ContactCard
            icon={<Phone className="h-5 w-5" aria-hidden />}
            title={t("contact.phone")}
          >
            <a href={siteConfig.phoneHref} className="link-mar mt-1 block font-medium">
              {siteConfig.phone}
            </a>
          </ContactCard>

          <ContactCard
            icon={<Mail className="h-5 w-5" aria-hidden />}
            title={t("contact.email")}
          >
            <a href={siteConfig.emailHref} className="link-mar mt-1 block font-medium">
              {siteConfig.email}
            </a>
          </ContactCard>

          <ContactCard
            icon={<Camera className="h-5 w-5" aria-hidden />}
            title={t("contact.instagram")}
          >
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="link-mar mt-1 block font-medium"
            >
              {siteConfig.instagramHandle}
            </a>
          </ContactCard>

          <ContactCard
            icon={<Music2 className="h-5 w-5" aria-hidden />}
            title={t("contact.tiktok")}
          >
            <a
              href={siteConfig.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="link-mar mt-1 block font-medium"
            >
              {siteConfig.tiktokHandle}
            </a>
          </ContactCard>

          <ContactCard
            icon={<Bike className="h-5 w-5" aria-hidden />}
            title="Glovo"
          >
            <a
              href={siteConfig.glovo}
              target="_blank"
              rel="noopener noreferrer"
              className="link-mar mt-1 block font-medium"
            >
              {t("contact.glovo")}
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
            className="h-[min(55vh,28rem)] min-h-[280px] w-full border-0 sm:h-full sm:min-h-[520px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
