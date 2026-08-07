"use client";

import { usePathname } from "next/navigation";
import { useLanguage } from "@/i18n/LanguageProvider";
import { getWhatsAppHref } from "@/data/site";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function WhatsAppButton() {
  const { t, locale } = useLanguage();
  const pathname = usePathname();
  const onMenu = pathname?.startsWith("/carta");

  return (
    <a
      href={getWhatsAppHref(locale)}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed z-40 flex items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-105 ${
        onMenu ? "h-12 w-12" : "h-14 w-14"
      }`}
      style={{
        bottom: "max(1rem, env(safe-area-inset-bottom, 0px))",
        right: "max(1rem, env(safe-area-inset-right, 0px))",
      }}
      aria-label={t("whatsapp.message")}
    >
      <WhatsAppIcon className={onMenu ? "h-6 w-6" : "h-7 w-7"} />
    </a>
  );
}
