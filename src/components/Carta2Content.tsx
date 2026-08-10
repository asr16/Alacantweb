"use client";

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
  pdf: string;
  pages: CartaPage[];
};

export function Carta2Content({ documents }: { documents: CartaDocument[] }) {
  const { t, tx } = useLanguage();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <h1 className="sr-only">{t("carta2.title")}</h1>

      <div className="space-y-20">
        {documents.map((doc, docIndex) => {
          const title = tx(doc.title, doc.titleEn);

          return (
            <section key={doc.id} id={doc.id} className="scroll-mt-28">
              <header className="border-b border-arena pb-5">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-terracota">
                  {t("carta2.document")} {docIndex + 1}/{documents.length}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-texto sm:text-3xl">
                  {title}
                </h2>
                <p className="mt-2 max-w-2xl text-texto-suave">
                  {tx(doc.description, doc.descriptionEn)}
                </p>
              </header>

              <div className="mt-8 space-y-8">
                {doc.pages.map((page, index) => {
                  const isFirst = docIndex === 0 && index === 0;

                  return (
                    <Image
                      key={page.src}
                      src={page.src}
                      alt={`${title} — ${t("carta2.page")} ${index + 1}/${doc.pages.length}`}
                      width={page.width}
                      height={page.height}
                      quality={90}
                      priority={isFirst}
                      loading={isFirst ? "eager" : "lazy"}
                      sizes="(max-width: 896px) 100vw, 896px"
                      className="h-auto w-full bg-arena/40"
                    />
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                <a
                  href={doc.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={docIndex === 0 ? "btn btn-terracota" : "btn btn-mar"}
                >
                  {t("carta2.open")}
                </a>
                <a
                  href={doc.pdf}
                  download
                  className="text-sm font-medium text-mar underline-offset-4 hover:underline"
                >
                  {t("carta2.download")}
                </a>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
