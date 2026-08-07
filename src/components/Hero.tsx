"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { heroContent, siteConfig } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Hero() {
  const { t, tx } = useLanguage();

  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=1920&q=80"
        alt={tx("Helado artesano", "Artisan ice cream")}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-mar/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-mar/80 via-mar/30 to-transparent" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 sm:pb-20">
        <div className="animate-fade-up mb-6 w-fit rounded-2xl bg-crema/95 p-3 shadow-sm backdrop-blur-sm sm:mb-8 sm:p-4">
          <BrandLogo height={132} priority />
        </div>
        <p className="animate-fade-up mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/90">
          Roquetas de Mar · Av. Mediterráneo
        </p>
        <h1 className="animate-fade-up-delay-1 font-display max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          {tx(heroContent.title, heroContent.titleEn)}
        </h1>
        <p className="animate-fade-up-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
          {tx(heroContent.subtitle, heroContent.subtitleEn)}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href={heroContent.ctaPrimary.href} className="btn btn-terracota !py-3.5">
            {t("hero.ctaMenu")}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <a
            href={siteConfig.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost-light !bg-white/10 !py-3.5 backdrop-blur-sm"
          >
            <MapPin className="h-4 w-4" aria-hidden />
            {t("hero.ctaMaps")}
          </a>
        </div>
      </div>
    </section>
  );
}
