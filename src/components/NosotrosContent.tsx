"use client";

import Image from "next/image";
import { aboutContent, siteConfig } from "@/data/site";
import { HistoryCarousel } from "@/components/HistoryCarousel";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";

export function NosotrosContent() {
  const { tx } = useLanguage();

  return (
    <div>
      <section className="relative overflow-hidden bg-mar text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/heladeria-local.webp"
            alt=""
            fill
            className="object-cover object-[center_55%]"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <h1 className="font-display text-4xl font-bold sm:text-5xl">
            {tx(aboutContent.title, aboutContent.titleEn)}
          </h1>
          <p className="mt-4 max-w-3xl text-lg font-medium leading-relaxed text-white/90 sm:text-xl">
            {tx(aboutContent.subtitle, aboutContent.subtitleEn)}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-3xl space-y-5 text-[1.05rem] leading-relaxed text-texto-suave">
          {tx(aboutContent.intro, aboutContent.introEn).map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="border-y border-arena bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/images/tarrina-alacant.webp"
                alt={tx(
                  "Tarrina de helado artesano frente a la Heladería Alacant",
                  "Artisan ice cream tub in front of Heladería Alacant",
                )}
                width={1200}
                height={1600}
                className="h-auto w-full transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 28rem"
              />
            </div>
            <div className="space-y-10">
              {aboutContent.sections.map((section) => (
                <article key={section.title}>
                  <h2 className="font-display text-xl font-semibold text-texto sm:text-2xl">
                    {tx(section.title, section.titleEn)}
                  </h2>
                  <div className="mt-3 space-y-4 leading-relaxed text-texto-suave">
                    {tx(section.paragraphs, section.paragraphsEn).map((paragraph) => (
                      <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-crema px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title={tx("De 1974 a hoy", "From 1974 to today")}
            subtitle={tx(
              "Hitos de más de medio siglo frente al Mediterráneo.",
              "Milestones from more than half a century by the Mediterranean.",
            )}
          />
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {aboutContent.timeline.map((item) => (
              <li
                key={item.year}
                className="relative border-l-2 border-terracota pl-5 sm:border-l-0 sm:border-t-2 sm:pl-0 sm:pt-5"
              >
                <p className="font-display text-3xl font-semibold text-mar">{item.year}</p>
                <p className="mt-3 text-sm leading-relaxed text-texto-suave">
                  {tx(item.text, item.textEn)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <HistoryCarousel />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          title={tx(aboutContent.offerTitle, aboutContent.offerTitleEn)}
          subtitle={tx(aboutContent.offerIntro, aboutContent.offerIntroEn)}
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {aboutContent.offerItems.map((item) => (
            <li
              key={item.es}
              className="border border-arena bg-white px-5 py-4 text-sm leading-relaxed text-texto-suave"
            >
              {tx(item.es, item.en)}
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-2xl font-display text-xl font-semibold tracking-tight text-mar sm:text-2xl">
          {tx(aboutContent.closing, aboutContent.closingEn)}
        </p>
        <p className="mt-4 text-sm text-texto-suave">
          {siteConfig.address.full} · {siteConfig.phone}
        </p>
      </section>
    </div>
  );
}
