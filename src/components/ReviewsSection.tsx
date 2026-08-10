"use client";

import { reviews, siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/i18n/LanguageProvider";

export function ReviewsSection() {
  const { t, tx } = useLanguage();
  const [featured, ...others] = reviews;

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title={t("home.reviewsTitle")}
          subtitle={t("home.reviewsSubtitle")}
        />

        {featured && (
          <blockquote className="mt-12 max-w-3xl border-l-2 border-mar pl-6 sm:pl-8">
            <p className="text-base leading-relaxed text-texto">
              “{tx(featured.text, featured.textEn)}”
            </p>
            <footer className="mt-5 text-sm">
              <span className="font-semibold text-texto">{featured.author}</span>
              <span className="text-texto-suave"> · {featured.source}</span>
            </footer>
          </blockquote>
        )}

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {others.map((review) => (
            <blockquote key={review.author} className="border-t border-arena pt-6">
              <p className="text-base leading-relaxed text-texto">
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
          className="mt-10 inline-flex text-sm font-semibold uppercase tracking-wide text-mar underline-offset-4 hover:underline"
        >
          {t("home.reviewsOnGoogle")} →
        </a>
      </div>
    </section>
  );
}
