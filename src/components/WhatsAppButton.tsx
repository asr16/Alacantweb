"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { getWhatsAppHref } from "@/data/site";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function WhatsAppButton() {
  const { t, locale } = useLanguage();

  return (
    <a
      href={getWhatsAppHref(locale)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      aria-label={t("whatsapp.message")}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
