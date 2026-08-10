"use client";

import Image from "next/image";
import { aboutContent, siteConfig } from "@/data/site";
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
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/90">
            {tx(aboutContent.intro, aboutContent.introEn)}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="mx-auto max-w-md overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/images/tarrina-alacant.webp"
              alt={tx(
                "Tarrina de helado artesano frente a la Heladería Alacant",
                "Artisan ice cream tub in front of Heladería Alacant",
              )}
              width={1200}
              height={1600}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 28rem"
            />
          </div>
          <div className="space-y-8">
            {aboutContent.sections.map((section) => (
              <article key={section.title}>
                <h2 className="font-display text-xl font-semibold text-texto">
                  {tx(section.title, section.titleEn)}
                </h2>
                <p className="mt-2 leading-relaxed text-texto-suave">
                  {tx(section.content, section.contentEn)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-arena/50 px-4 py-16 sm:px-6">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-mar/[0.06] to-transparent"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl">
          <SectionHeading
            title={tx("Lo que nos define", "What defines us")}
            subtitle={tx(
              "Tradición, calidad y cercanía en cada servicio.",
              "Tradition, quality and warmth in every visit.",
            )}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-3 sm:gap-0 sm:border sm:border-arena">
            {aboutContent.values.map((value, index) => (
              <div
                key={value.title}
                className={`border border-arena bg-crema/80 p-6 sm:border-0 sm:p-8 ${
                  index > 0 ? "sm:border-l sm:border-arena" : ""
                }`}
              >
                <span className="font-display text-3xl font-semibold tracking-tight text-terracota/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-mar">
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
      </section>
    </div>
  );
}
