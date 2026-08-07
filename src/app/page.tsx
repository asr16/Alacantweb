"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
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

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <SectionHeading
              title={tx(historyPreview.title, historyPreview.titleEn)}
            />
            <div className="mt-6 space-y-4 leading-relaxed text-texto-suave">
              {tx(historyPreview.paragraphs, historyPreview.paragraphsEn)
                .slice(0, 1)
                .map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
            </div>
            <Link href="/nosotros" className="btn btn-mar mt-8">
              {t("home.historyCta")}
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=80"
              alt={tx("Ambiente de cafetería", "Café atmosphere")}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <SeasonalSection />

      <section className="bg-arena/60 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title={t("home.menuTitle")}
            subtitle={t("home.menuSubtitle")}
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {featureCards.map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="rounded-3xl bg-mar px-6 py-12 text-center text-white sm:px-12">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            {t("home.ctaTitle")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/85">{t("home.ctaText")}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
