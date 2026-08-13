"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";

export type CartaPage = {
  /** Ruta absoluta dentro de /public. */
  src: string;
  width: number;
  height: number;
};

export type CartaDocument = {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  pages: CartaPage[];
};

export function Carta2Content({ documents }: { documents: CartaDocument[] }) {
  const { t, tx } = useLanguage();
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeDoc = documents.find((doc) => doc.id === activeId) ?? null;
  const activeTitle = activeDoc
    ? tx(activeDoc.title, activeDoc.titleEn)
    : null;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <header className="mb-8">
        <h1 className="font-display text-3xl font-bold tracking-tight text-texto sm:text-4xl">
          {t("carta2.title")}
        </h1>
        <p className="mt-2 text-texto-suave">{t("carta2.pickHint")}</p>
      </header>

      <div
        className="sticky top-[4.25rem] z-30 -mx-4 flex flex-wrap items-center justify-center gap-2 border-b border-arena bg-crema/95 px-4 py-2.5 backdrop-blur-sm sm:top-[4.5rem] sm:mx-0 sm:gap-2.5 sm:border sm:border-arena sm:px-5 sm:py-4"
        role="tablist"
        aria-label={t("carta2.title")}
      >
        {documents.map((doc) => {
          const selected = doc.id === activeId;
          return (
            <button
              key={doc.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActiveId((prev) => (prev === doc.id ? null : doc.id))}
              className={`chip chip-lg ${selected ? "chip-active" : "chip-idle"}`}
            >
              {tx(doc.title, doc.titleEn)}
            </button>
          );
        })}
      </div>

      {!activeDoc ? (
        <p className="mt-12 text-center text-texto-suave">{t("carta2.choose")}</p>
      ) : (
        <section
          key={activeDoc.id}
          id={activeDoc.id}
          className="mt-10 scroll-mt-28"
          role="tabpanel"
          aria-label={activeTitle ?? undefined}
        >
          <header className="border-b border-arena pb-5">
            <h2 className="font-display text-2xl font-bold tracking-tight text-texto sm:text-3xl">
              {activeTitle}
            </h2>
            <p className="mt-2 max-w-2xl text-texto-suave">
              {tx(activeDoc.description, activeDoc.descriptionEn)}
            </p>
          </header>

          <div className="mt-8 space-y-8">
            {activeDoc.pages.map((page, index) => (
              <Image
                key={page.src}
                src={page.src}
                alt={`${activeTitle} — ${t("carta2.page")} ${index + 1}/${activeDoc.pages.length}`}
                width={page.width}
                height={page.height}
                quality={90}
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(max-width: 896px) 100vw, 896px"
                className="h-auto w-full bg-arena/40"
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
