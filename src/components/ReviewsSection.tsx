"use client";

import { Star } from "lucide-react";
import { reviews, siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating}/5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < rating ? "fill-terracota text-terracota" : "text-arena"
          }`}
          aria-hidden
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  const { t, tx } = useLanguage();

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title={t("home.reviewsTitle")}
          subtitle={t("home.reviewsSubtitle")}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {reviews.map((review) => (
            <blockquote
              key={review.author}
              className="border border-arena bg-white p-5 sm:p-6"
            >
              <Stars rating={review.rating} />
              <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-texto">
                “{tx(review.text, review.textEn)}”
              </p>
              <footer className="mt-4 text-sm">
                <span className="font-semibold text-texto">{review.author}</span>
                <span className="text-texto-suave"> · {review.source}</span>
              </footer>
            </blockquote>
          ))}
        </div>

        <a
          href={siteConfig.googleReviews}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex text-sm font-semibold uppercase tracking-wide text-mar underline-offset-4 transition-colors hover:underline"
        >
          {t("home.reviewsOnGoogle")} →
        </a>
      </div>
    </section>
  );
}
