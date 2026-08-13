"use client";

import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { historyGallery } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

const navBtn =
  "absolute top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-arena bg-white/95 text-mar shadow-sm transition-colors hover:border-mar";

export function HistoryCarousel() {
  const { t, tx } = useLanguage();
  const [index, setIndex] = useState(0);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const thumbsReady = useRef(false);
  const total = historyGallery.length;
  const current = historyGallery[index];

  const goTo = useCallback(
    (next: number) => {
      if (total === 0) return;
      setIndex(((next % total) + total) % total);
    },
    [total],
  );

  useEffect(() => {
    const scroller = thumbsRef.current;
    const active = scroller?.querySelector<HTMLElement>("[data-active='true']");
    if (!scroller || !active) return;
    // Evita scrollIntoView: en el primer pintado bajaría la página hasta el carrusel.
    if (!thumbsReady.current) {
      thumbsReady.current = true;
      return;
    }
    const left = active.offsetLeft - scroller.clientWidth / 2 + active.clientWidth / 2;
    scroller.scrollTo({
      left: Math.max(0, left),
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  }, [index]);

  if (total === 0 || !current) return null;

  const caption = tx(current.caption ?? "", current.captionEn ?? current.caption ?? "");

  const onTouchStart = (event: TouchEvent) => {
    touchX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: TouchEvent) => {
    if (touchX.current == null) return;
    const x = event.changedTouches[0]?.clientX ?? touchX.current;
    const delta = x - touchX.current;
    touchX.current = null;
    if (Math.abs(delta) < 48) return;
    goTo(index + (delta < 0 ? 1 : -1));
  };

  return (
    <section className="border-y border-arena bg-white px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <span className="section-rule" aria-hidden />
          <h2 className="font-display text-2xl font-bold tracking-tight text-texto sm:text-3xl">
            {t("about.galleryTitle")}
          </h2>
          <p className="mt-2 max-w-2xl text-texto-suave">{t("about.gallerySubtitle")}</p>
        </div>

        <figure>
          <div
            className="relative mx-auto w-fit max-w-full"
            role="region"
            aria-roledescription="carrusel"
            aria-label={t("about.galleryTitle")}
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                goTo(index - 1);
              }
              if (event.key === "ArrowRight") {
                event.preventDefault();
                goTo(index + 1);
              }
            }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <Image
              key={current.src}
              src={current.src}
              alt={tx(current.alt, current.altEn)}
              width={current.width}
              height={current.height}
              priority={index === 0}
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="max-h-[min(56vh,32rem)] max-w-full border border-arena bg-white object-contain"
              style={{ width: "auto", height: "auto" }}
            />
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className={`${navBtn} left-3`}
              aria-label={t("about.galleryPrev")}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className={`${navBtn} right-3`}
              aria-label={t("about.galleryNext")}
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>

          <figcaption className="mt-4 flex items-end justify-between gap-4">
            <p className="min-h-[1.25rem] text-sm text-texto" aria-live="polite">
              {caption}
            </p>
            <p className="shrink-0 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-texto-suave">
              {index + 1} / {total}
            </p>
          </figcaption>
        </figure>

        <div
          ref={thumbsRef}
          className="mt-6 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="list"
          aria-label={t("about.galleryThumbs")}
        >
          {historyGallery.map((photo, i) => {
            const selected = i === index;
            return (
              <button
                key={photo.src}
                type="button"
                role="listitem"
                data-active={selected ? "true" : undefined}
                aria-current={selected ? "true" : undefined}
                aria-label={tx(photo.alt, photo.altEn)}
                onClick={() => goTo(i)}
                className={`relative h-16 w-16 shrink-0 overflow-hidden border transition-colors sm:h-[4.5rem] sm:w-[4.5rem] ${
                  selected
                    ? "border-mar"
                    : "border-arena opacity-70 hover:border-mar hover:opacity-100"
                }`}
              >
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="72px"
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
