"use client";

import Link from "next/link";
import { seasonalHighlights } from "@/data/menu";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";

export function SeasonalSection() {
  const { t, tx } = useLanguage();
  const [featured, ...rest] = seasonalHighlights;

  return (
    <section className="bg-crema px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title={t("home.seasonalTitle")}
          subtitle={t("home.seasonalSubtitle")}
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {featured && (
            <Link
              href={`/carta#${featured.categoryId}`}
              className="group lg:col-span-5"
            >
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-terracota">
                {t("home.seasonalTitle")}
              </p>
              <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-texto group-hover:text-mar sm:text-4xl">
                {tx(featured.name, featured.nameEn)}
              </h3>
              <p className="mt-3 max-w-sm text-texto-suave">
                {tx(featured.description, featured.descriptionEn)}
              </p>
              <span className="mt-5 inline-block text-sm font-semibold uppercase tracking-wide text-mar">
                {t("home.seeMenu")} →
              </span>
            </Link>
          )}

          <ul className="divide-y divide-arena border-t border-arena lg:col-span-7">
            {rest.map((item) => (
              <li key={item.name}>
                <Link
                  href={`/carta#${item.categoryId}`}
                  className="flex items-baseline justify-between gap-4 py-5 transition-colors hover:text-mar"
                >
                  <div>
                    <p className="font-display text-lg font-semibold tracking-tight">
                      {tx(item.name, item.nameEn)}
                    </p>
                    <p className="mt-1 text-sm text-texto-suave">
                      {tx(item.description, item.descriptionEn)}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
