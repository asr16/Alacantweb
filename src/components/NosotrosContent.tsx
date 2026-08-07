"use client";

import Image from "next/image";
import { aboutContent, siteConfig } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";

export function NosotrosContent() {
  const { tx } = useLanguage();

  return (
    <div>
      <section className="relative overflow-hidden bg-mar text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <h1 className="font-display text-4xl font-bold sm:text-5xl">
            {tx(aboutContent.title, aboutContent.titleEn)}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/90">
            {tx(aboutContent.intro, aboutContent.introEn)}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1497032628192-86f99bcd04bc?w=900&q=80"
                alt={tx("Helado artesano", "Artisan ice cream")}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <div className="space-y-8">
            {aboutContent.sections.map((section, index) => (
              <Reveal key={section.title} delayMs={index * 80}>
                <article>
                  <h2 className="font-display text-xl font-semibold text-texto">
                    {tx(section.title, section.titleEn)}
                  </h2>
                  <p className="mt-2 leading-relaxed text-texto-suave">
                    {tx(section.content, section.contentEn)}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-arena/50 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              title={tx("Lo que nos define", "What defines us")}
              subtitle={tx(
                "Tradición, calidad y cercanía en cada servicio.",
                "Tradition, quality and warmth in every visit.",
              )}
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {aboutContent.values.map((value) => (
              <div key={value.title} className="text-center sm:text-left">
                <h3 className="font-display text-lg font-semibold text-mar">
                  {tx(value.title, value.titleEn)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-texto-suave">
                  {tx(value.description, value.descriptionEn)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <div className="card p-8 sm:p-10">
            <SectionHeading
              title={tx("50 años en Roquetas de Mar", "50 years in Roquetas de Mar")}
              subtitle={tx(
                "En junio de 2024 celebramos nuestro 50º aniversario en la localidad, un hito que refleja la confianza de generaciones de clientes y nuestro compromiso con la urbanización y el paseo marítimo.",
                "In June 2024 we celebrated our 50th anniversary — a milestone reflecting generations of trust and our commitment to the urbanization and the seafront.",
              )}
            />
            <p className="mt-6 leading-relaxed text-texto-suave">
              {tx(
                "La heladería con más solera de Roquetas: siempre las mismas caras, el mismo trato familiar y la misma pasión por el helado artesano. Un motivo para visitar la urbanización en cualquier momento del año, no solo en verano.",
                "The most established ice cream shop in Roquetas: familiar faces, family service and a passion for artisan gelato. A reason to visit any time of year, not only in summer.",
              )}
            </p>
            <p className="mt-4 text-sm text-texto-suave">
              {siteConfig.address.full} · {siteConfig.phone}
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
