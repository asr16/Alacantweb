"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { FeatureCard } from "@/components/FeatureCard";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Hero } from "@/components/Hero";
import { InfoBar } from "@/components/InfoBar";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  featureCards,
  galleryImages,
  historyPreview,
  siteConfig,
} from "@/data/site";
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

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading title={tx(historyPreview.title, historyPreview.titleEn)} />
            <div className="mt-6 space-y-4 leading-relaxed text-texto-suave">
              {tx(historyPreview.paragraphs, historyPreview.paragraphsEn).map(
                (paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ),
              )}
            </div>
            <Link href="/nosotros" className="btn btn-mar mt-8">
              {t("home.historyCta")}
            </Link>
          </Reveal>
          <Reveal delayMs={120}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=80"
                alt={tx("Ambiente de cafetería", "Café atmosphere")}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <SeasonalSection />

      <section className="bg-arena/60 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              title={t("home.menuTitle")}
              subtitle={t("home.menuSubtitle")}
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {featureCards.map((card, index) => (
              <Reveal key={card.title} delayMs={index * 70}>
                <FeatureCard {...card} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          {siteConfig.highlights.map((item, index) => (
            <Reveal key={item.label} delayMs={index * 80}>
              <div className="card p-8 text-center">
                <p className="font-display text-4xl font-bold text-mar">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-texto-suave">
                  {tx(item.label, item.labelEn)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ReviewsSection />

      <section className="bg-white px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              title={t("home.galleryTitle")}
              subtitle={t("home.gallerySubtitle")}
              align="center"
            />
          </Reveal>
          <Reveal delayMs={100}>
            <div className="mt-12">
              <GalleryGrid
                images={galleryImages.map((img) => ({
                  src: img.src,
                  alt: tx(img.alt, img.altEn),
                }))}
              />
            </div>
          </Reveal>
          <div className="mt-10 text-center">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-mar"
            >
              {t("home.instagram")}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="rounded-3xl bg-mar px-6 py-12 text-center text-white sm:px-12">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              {t("home.ctaTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/85">{t("home.ctaText")}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={siteConfig.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-terracota"
              >
                {t("home.ctaMaps")}
              </a>
              <Link href="/carta" className="btn btn-ghost-light">
                {t("home.ctaMenu")}
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
