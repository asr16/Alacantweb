"use client";

import Link from "next/link";
import { HelpCircle } from "lucide-react";
import { allergenCatalog, type AllergenId } from "@/data/allergens";
import { useLanguage } from "@/i18n/LanguageProvider";

export function AllergenIcon({
  id,
  size = 22,
  className = "",
}: {
  id: AllergenId;
  size?: number;
  className?: string;
}) {
  const { tx } = useLanguage();
  const info = allergenCatalog[id];
  const label = tx(info.labelEs, info.labelEn);

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full font-display text-[0.55rem] font-bold leading-none text-white shadow-sm ${className}`}
      style={{ width: size, height: size, backgroundColor: info.color }}
      title={label}
      aria-label={label}
    >
      {info.abbr}
    </span>
  );
}

export function AllergenIconRow({
  allergens,
  variable = false,
  className = "",
}: {
  allergens: AllergenId[];
  variable?: boolean;
  className?: string;
}) {
  const { t } = useLanguage();

  if (variable) {
    return (
      <Link
        href="/carta-2?doc=carta-alergenos"
        className={`inline-flex items-center gap-1 text-xs text-texto-suave underline-offset-2 hover:text-mar hover:underline ${className}`}
        title={t("menu.allergensVariableHint")}
      >
        <HelpCircle className="h-3.5 w-3.5 shrink-0" aria-hidden />
        <span>{t("menu.allergensVariable")}</span>
      </Link>
    );
  }

  if (allergens.length === 0) return null;

  return (
    <div
      className={`flex flex-wrap items-center gap-1 ${className}`}
      role="list"
      aria-label={t("menu.allergensContains")}
    >
      {allergens.map((id) => (
        <span key={id} role="listitem">
          <AllergenIcon id={id} />
        </span>
      ))}
    </div>
  );
}
