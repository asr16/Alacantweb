"use client";

import Link from "next/link";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { InfoBar } from "@/components/InfoBar";
import { ReviewsSection } from "@/components/ReviewsSection";
import { SeasonalSection } from "@/components/SeasonalSection";
import { SectionHeading } from "@/components/SectionHeading";
import { featureCards, historyPreview, siteConfig } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function HomePage() {
  const { t, tx } = useLanguage();

  return (
    <>
      <Hero />
      <InfoBar />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              title={tx(historyPreview.title, historyPreview.titleEn)}
            />
          </div>
          <div className="lg:col-span-7">
            <p className="text-[1.05rem] leading-relaxed text-texto-suave">
              {tx(historyPreview.paragraph, historyPreview.paragraphEn)}
            </p>
            <Link
              href="/nosotros"
              className="mt-8 inline-flex text-sm font-semibold uppercase tracking-wide text-mar underline-offset-4 hover:underline"
            >
              {t("home.historyCta")} →
            </Link>
          </div>
        </div>
      </section>

      <SeasonalSection />

      <section className="border-y border-arena bg-white px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title={t("home.menuTitle")}
            subtitle={t("home.menuSubtitle")}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {featureCards.map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />

      <section className="border-t border-arena bg-crema px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <span className="mb-4 block h-0.5 w-10 bg-terracota" aria-hidden />
            <h2 className="font-display text-3xl font-semibold tracking-tight text-texto sm:text-4xl">
              {t("home.ctaTitle")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-texto-suave">
              {t("home.ctaText")}
            </p>
          </div>
          <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-3">
            <a
              href={siteConfig.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-terracota w-full sm:w-auto"
            >
              {t("home.ctaMaps")}
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-mar w-full sm:w-auto"
            >
              {t("home.instagram")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
