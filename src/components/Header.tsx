"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { OpenStatus } from "@/components/OpenStatus";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-arena bg-crema/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 sm:py-3.5">
          <Link
            href="/"
            className="group transition-opacity hover:opacity-90"
            aria-label={siteConfig.name}
          >
            <BrandLogo height={48} priority decorative />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label={t("nav.main")}>
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-texto underline-offset-4 transition-colors hover:text-mar hover:underline"
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <OpenStatus />
            <LanguageSwitcher />
            <a href={siteConfig.phoneHref} className="btn btn-mar !py-2 !px-3.5 !text-[0.7rem]">
              {t("nav.call")}
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-arena bg-white text-mar lg:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </header>

      {/* Fuera del header: backdrop-blur crea un containing block que recortaba el panel */}
      <div
        className={`fixed inset-0 z-[60] bg-texto/40 transition-opacity lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
        inert={!open ? true : undefined}
        onClick={close}
      />

      <div
        id={panelId}
        role="dialog"
        aria-modal="true"
        aria-label={t("nav.mobile")}
        aria-hidden={!open}
        inert={!open ? true : undefined}
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-[min(100%,320px)] flex-col bg-white transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-arena bg-white px-4 py-4">
          <OpenStatus />
          <button
            type="button"
            onClick={close}
            className="inline-flex h-11 w-11 items-center justify-center border border-arena bg-white text-mar"
            aria-label={t("nav.closeMenu")}
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto bg-white p-4" aria-label={t("nav.mobile")}>
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="px-3 py-3 text-base font-medium text-texto hover:bg-arena"
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="space-y-3 border-t border-arena bg-white p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-texto-suave">{t("lang.switch")}</span>
            <LanguageSwitcher />
          </div>
          <a
            href={siteConfig.phoneHref}
            className="btn btn-mar w-full"
          >
            {t("nav.call")}
          </a>
        </div>
      </div>
    </>
  );
}
