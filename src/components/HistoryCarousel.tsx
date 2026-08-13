"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { historyGallery } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

export function HistoryCarousel() {
  const { t, tx } = useLanguage();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const total = historyGallery.length;

  const goTo = useCallback((next: number) => {
    if (total === 0) return;
    const clamped = ((next % total) + total) % total;
    setIndex(clamped);
    const scroller = scrollerRef.current;
    const slide = scroller?.children[clamped] as HTMLElement | undefined;
    slide?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [total]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || total === 0) return;

    const onScroll = () => {
      const children = [...scroller.children] as HTMLElement[];
      if (children.length === 0) return;
      const mid = scroller.scrollLeft + scroller.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      children.forEach((child, i) => {
        const center = child.offsetLeft + child.offsetWidth / 2;
        const dist = Math.abs(center - mid);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      setIndex(best);
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
  }, [total]);

  if (total === 0) return null;

  return (
    <section className="border-y border-arena bg-white px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="section-rule" aria-hidden />
            <h2 className="font-display text-2xl font-bold tracking-tight text-texto sm:text-3xl">
              {t("about.galleryTitle")}
            </h2>
            <p className="mt-2 max-w-2xl text-texto-suave">
              {t("about.gallerySubtitle")}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="inline-flex h-11 w-11 items-center justify-center border border-arena bg-crema text-mar transition-colors hover:border-mar"
              aria-label={t("about.galleryPrev")}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="inline-flex h-11 w-11 items-center justify-center border border-arena bg-crema text-mar transition-colors hover:border-mar"
              aria-label={t("about.galleryNext")}
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="region"
          aria-roledescription="carrusel"
          aria-label={t("about.galleryTitle")}
        >
          {historyGallery.map((photo, i) => (
            <figure
              key={photo.src}
              className="relative w-[min(100%,28rem)] shrink-0 snap-center overflow-hidden border border-arena bg-arena sm:w-[32rem]"
            >
              <div className="relative aspect-[4/3] bg-arena">
                <Image
                  src={photo.src}
                  alt={tx(photo.alt, photo.altEn)}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, 32rem"
                  priority={i === 0}
                />
              </div>
              {(photo.caption || photo.captionEn) && (
                <figcaption className="border-t border-arena bg-crema px-4 py-3 text-sm text-texto-suave">
                  {tx(photo.caption ?? "", photo.captionEn ?? photo.caption ?? "")}
                </figcaption>
              )}
            </figure>
          ))}
        </div>

        <div className="mt-5 flex justify-center gap-2" role="tablist" aria-label={t("about.galleryTitle")}>
          {historyGallery.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`${t("about.galleryTitle")} ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === index ? "bg-mar" : "bg-arena hover:bg-mar/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
