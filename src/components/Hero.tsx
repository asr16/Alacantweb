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
    <section className="relative w-full overflow-hidden bg-mar text-white">
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

      {/* Degradados solo en desktop, donde el texto va encima de la imagen */}
      <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-mar/55 via-mar/25 to-transparent sm:block" />
      <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-mar/25 via-transparent to-transparent sm:block" />

      {/*
        Móvil: bloque debajo de la imagen (la panorámica es demasiado baja
        para caber título + subtítulo + CTAs).
        Desktop: overlay absoluto encima de la imagen.
      */}
      <div className="relative px-4 py-8 sm:absolute sm:inset-0 sm:mx-auto sm:flex sm:max-w-6xl sm:flex-col sm:justify-end sm:px-6 sm:pb-14 sm:pt-24 lg:justify-center lg:pb-16">
        <h1 className="animate-fade-up max-w-md font-display text-2xl font-semibold leading-snug tracking-[-0.02em] sm:text-3xl">
          {tx(heroContent.title, heroContent.titleEn)}
        </h1>
        <p className="animate-fade-up-delay-1 mt-4 max-w-md text-base leading-relaxed text-white/85">
          {tx(heroContent.subtitle, heroContent.subtitleEn)}
        </p>
        <div className="animate-fade-up-delay-2 mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-3">
          <Link href={heroContent.ctaPrimary.href} className="btn btn-terracota w-full sm:w-auto">
            {t("hero.ctaMenu")}
          </Link>
          <a
            href={siteConfig.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-sm font-medium text-white/90 underline-offset-4 hover:underline sm:text-left"
          >
            {t("hero.ctaMaps")}
          </a>
        </div>
      </div>
    </section>
  );
}
