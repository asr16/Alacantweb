"use client";

import Link from "next/link";
import { HelpCircle } from "lucide-react";
import {
  ALLERGEN_IDS,
  allergenCatalog,
  type AllergenId,
} from "@/data/allergens";
import { useLanguage } from "@/i18n/LanguageProvider";

const ALLERGEN_COLORS: Record<AllergenId, string> = {
  gluten: "#c4a035",
  crustaceos: "#4a90a4",
  huevos: "#e8c547",
  pescado: "#5b8fc7",
  cacahuetes: "#c4783a",
  soja: "#7aad4a",
  lacteos: "#6b8cae",
  "frutos-cascara": "#8b6914",
  apio: "#6a9e5a",
  mostaza: "#d4a017",
  sesamo: "#b8956b",
  sulfitos: "#9b59b6",
  altramuces: "#e67e22",
  moluscos: "#3498db",
};

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
      style={{
        width: size,
        height: size,
        backgroundColor: ALLERGEN_COLORS[id],
      }}
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

export function AllergenLegend() {
  const { t, tx } = useLanguage();

  return (
    <div className="mt-4 border border-arena bg-white px-4 py-3.5 sm:px-5 sm:py-4">
      <p className="text-sm font-semibold text-texto">{t("menu.allergensLegendTitle")}</p>
      <p className="mt-1 text-xs leading-relaxed text-texto-suave">
        {t("menu.allergensLegendHint")}
      </p>
      <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        {ALLERGEN_IDS.map((id) => (
          <li key={id} className="flex items-center gap-1.5 text-xs text-texto">
            <AllergenIcon id={id} size={20} />
            <span>{tx(allergenCatalog[id].labelEs, allergenCatalog[id].labelEn)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
