"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { InfoBar } from "@/components/InfoBar";
import { SectionHeading } from "@/components/SectionHeading";
import { featureCards, historyPreview, siteConfig } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

const SeasonalSection = dynamic(
  () =>
    import("@/components/SeasonalSection").then((m) => m.SeasonalSection),
  { ssr: true },
);

const ReviewsSection = dynamic(
  () => import("@/components/ReviewsSection").then((m) => m.ReviewsSection),
  { ssr: true },
);

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
            <div className="space-y-5 text-[1.05rem] leading-relaxed text-texto-suave">
              {tx(historyPreview.paragraphs, historyPreview.paragraphsEn)
                .slice(0, 1)
                .map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
            </div>
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
          <div className="mt-4">
            {featureCards.map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />

      <section className="bg-mar px-4 py-16 text-white sm:px-6 sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <span className="mb-4 block h-0.5 w-10 bg-terracota" aria-hidden />
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {t("home.ctaTitle")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              {t("home.ctaText")}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={siteConfig.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-terracota"
            >
              {t("home.ctaMaps")}
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost-light"
            >
              {t("home.instagram")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
