"use client";

import Image from "next/image";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { heroContent, siteConfig } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Hero() {
  const { t, tx } = useLanguage();

  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-mar">
      <Image
        src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=1920&q=80"
        alt=""
        fill
        priority
        className="object-cover opacity-45 saturate-50"
        sizes="100vw"
        aria-hidden
      />
      <div className="absolute inset-0 bg-mar/70 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-r from-mar via-mar/80 to-transparent" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-14 pt-28 sm:px-6 sm:pb-20 lg:justify-center lg:pb-24">
        <div className="animate-fade-up max-w-xl">
          <BrandLogo height={148} priority />
        </div>

        <p className="animate-fade-up-delay-1 mt-8 max-w-md font-display text-2xl font-semibold leading-snug tracking-[-0.02em] text-white sm:text-3xl">
          {tx(heroContent.title, heroContent.titleEn)}
        </p>
        <p className="animate-fade-up-delay-2 mt-4 max-w-md text-base leading-relaxed text-white/80">
          {tx(heroContent.subtitle, heroContent.subtitleEn)}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link href={heroContent.ctaPrimary.href} className="btn btn-terracota">
            {t("hero.ctaMenu")}
          </Link>
          <a
            href={siteConfig.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white/85 underline-offset-4 hover:underline"
          >
            {t("hero.ctaMaps")}
          </a>
        </div>
      </div>
    </section>
  );
}
