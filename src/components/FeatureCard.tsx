"use client";

import Image from "next/image";
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
  imageAlt: string;
  imageAltEn: string;
};

function FeatureCardInner({
  title,
  titleEn,
  description,
  descriptionEn,
  href,
  image,
  imageAlt,
  imageAltEn,
}: FeatureCardProps) {
  const { t, tx } = useLanguage();
  const label = tx(title, titleEn);

  return (
    <Link
      href={href}
      className="group block overflow-hidden border border-arena bg-white transition-transform duration-300 hover:-translate-y-0.5 hover:border-mar/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mar active:scale-[0.99]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-arena">
        <Image
          src={image}
          alt={tx(imageAlt, imageAltEn)}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="font-display text-xl font-semibold tracking-tight text-texto group-hover:text-mar sm:text-2xl">
          {label}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-texto-suave">
          {tx(description, descriptionEn)}
        </p>
        <span className="mt-4 inline-flex text-sm font-semibold uppercase tracking-wide text-mar">
          {t("home.seeMenu")} →
        </span>
      </div>
    </Link>
  );
}

export const FeatureCard = memo(FeatureCardInner);
