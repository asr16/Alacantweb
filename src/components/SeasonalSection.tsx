"use client";

import Image from "next/image";
import Link from "next/link";
import { seasonalHighlights } from "@/data/menu";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";

export function SeasonalSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title={t("home.seasonalTitle")}
          subtitle={t("home.seasonalSubtitle")}
          align="center"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {seasonalHighlights.map((item) => (
            <Link
              key={item.name}
              href={`/carta#${item.categoryId}`}
              className="group block overflow-hidden rounded-2xl border border-arena bg-crema transition-colors hover:border-mar/40"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display font-semibold text-texto">{item.name}</h3>
                <p className="mt-1 text-sm text-texto-suave">{item.description}</p>
                <p className="mt-3 font-semibold text-oliva">{item.price}</p>
                <span className="mt-2 inline-block text-sm font-semibold text-mar">
                  {t("home.seeMenu")} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
