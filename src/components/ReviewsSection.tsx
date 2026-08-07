"use client";

import { Star } from "lucide-react";
import { reviews, siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";

export function ReviewsSection() {
  const { t, tx } = useLanguage();

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title={t("home.reviewsTitle")}
          subtitle={t("home.reviewsSubtitle")}
          align="center"
        />
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {reviews.map((review) => (
            <blockquote
              key={review.author}
              className="flex h-full flex-col border-t border-arena pt-6"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex gap-1" aria-label={`${review.rating} / 5`}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? "fill-terracota text-terracota"
                          : "text-arena"
                      }`}
                      aria-hidden
                    />
                  ))}
                </div>
                <span className="text-xs font-medium text-texto-suave">
                  {review.source}
                </span>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-texto-suave">
                “{tx(review.text, review.textEn)}”
              </p>
              <footer className="mt-6">
                <p className="text-sm font-semibold text-texto">{review.author}</p>
                <p className="mt-0.5 text-xs text-texto-suave">{review.date}</p>
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={siteConfig.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-mar"
          >
            {t("home.reviewsOnGoogle")}
          </a>
        </div>
      </div>
    </section>
  );
}
