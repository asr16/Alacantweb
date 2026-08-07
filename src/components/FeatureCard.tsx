"use client";

import Link from "next/link";
import { memo } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

type FeatureCardProps = {
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  href: string;
  image: string;
  accent: string;
};

function FeatureCardInner({
  title,
  titleEn,
  description,
  descriptionEn,
  href,
}: FeatureCardProps) {
  const { t, tx } = useLanguage();
  const label = tx(title, titleEn);

  return (
    <Link
      href={href}
      className="group flex items-baseline justify-between gap-6 border-b border-arena py-5 transition-colors hover:border-mar"
    >
      <div className="min-w-0">
        <h3 className="font-display text-xl font-semibold tracking-tight text-texto group-hover:text-mar sm:text-2xl">
          {label}
        </h3>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-texto-suave">
          {tx(description, descriptionEn)}
        </p>
      </div>
      <span className="shrink-0 text-sm font-semibold uppercase tracking-wide text-mar">
        {t("home.seeMenu")} →
      </span>
    </Link>
  );
}

export const FeatureCard = memo(FeatureCardInner);
