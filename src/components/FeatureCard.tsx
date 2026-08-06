"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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

const accentClasses: Record<string, string> = {
  mar: "text-mar",
  "mar-claro": "text-mar-claro",
  terracota: "text-terracota",
  oliva: "text-oliva",
};

function FeatureCardInner({
  title,
  titleEn,
  description,
  descriptionEn,
  href,
  image,
  accent,
}: FeatureCardProps) {
  const { t, tx } = useLanguage();
  const label = tx(title, titleEn);

  return (
    <Link
      href={href}
      className="card group overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={label}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-texto/50 to-transparent" />
        <span className="absolute bottom-4 left-4 font-display text-lg font-semibold text-white">
          {label}
        </span>
      </div>
      <div className="p-5">
        <p className="text-sm leading-relaxed text-texto-suave">
          {tx(description, descriptionEn)}
        </p>
        <span
          className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${accentClasses[accent] ?? "text-mar"}`}
        >
          {t("home.seeMenu")}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}

export const FeatureCard = memo(FeatureCardInner);
