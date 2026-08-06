"use client";

import Image from "next/image";
import Link from "next/link";
import { seasonalHighlights } from "@/data/menu";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";

export function SeasonalSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-white px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            title={t("home.seasonalTitle")}
            subtitle={t("home.seasonalSubtitle")}
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {seasonalHighlights.map((item, index) => (
            <Reveal key={item.name} delayMs={index * 80}>
              <Link
                href={`/carta#${item.categoryId}`}
                className="card group block overflow-hidden bg-crema transition-all hover:-translate-y-1 hover:shadow-md"
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
                  <span className="absolute left-3 top-3 rounded-full bg-terracota px-2.5 py-1 text-xs font-semibold text-white">
                    {t("home.seasonalTitle")}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-display font-semibold text-texto">{item.name}</h3>
                  <p className="mt-1 text-sm text-texto-suave">{item.description}</p>
                  <p className="mt-3 font-semibold text-oliva">{item.price}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
