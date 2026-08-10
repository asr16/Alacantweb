"use client";

import Link from "next/link";
import { heroContent, siteConfig } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

const PORTADA_WIDTH = 3840;
const PORTADA_HEIGHT = 1444;

export function Hero() {
  const { t, tx } = useLanguage();
  const alt = tx(
    "Ilustración de Roquetas de Mar con Heladería Alacant",
    "Roquetas de Mar illustration featuring Heladería Alacant",
  );

  return (
    <section className="relative w-full overflow-hidden bg-mar">
      <picture>
        <source srcSet="/images/portada.webp" type="image/webp" />
        <img
          src="/images/portada.jpg"
          alt={alt}
          width={PORTADA_WIDTH}
          height={PORTADA_HEIGHT}
          className="h-auto w-full"
          decoding="async"
          fetchPriority="high"
        />
      </picture>
      {/* Degradado lateral suave para legibilidad del texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-mar/55 via-mar/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-mar/25 via-transparent to-transparent sm:from-mar/15" />

      <div className="absolute inset-0 mx-auto flex max-w-6xl flex-col justify-end px-4 pb-10 pt-24 sm:px-6 sm:pb-14 lg:justify-center lg:pb-16">
        <h1 className="animate-fade-up max-w-md font-display text-2xl font-semibold leading-snug tracking-[-0.02em] text-white sm:text-3xl">
          {tx(heroContent.title, heroContent.titleEn)}
        </h1>
        <p className="animate-fade-up-delay-1 mt-4 max-w-md text-base leading-relaxed text-white/85">
          {tx(heroContent.subtitle, heroContent.subtitleEn)}
        </p>

        <div className="animate-fade-up-delay-2 mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link href={heroContent.ctaPrimary.href} className="btn btn-terracota">
            {t("hero.ctaMenu")}
          </Link>
          <a
            href={siteConfig.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white/90 underline-offset-4 hover:underline"
          >
            {t("hero.ctaMaps")}
          </a>
        </div>
      </div>
    </section>
  );
}
