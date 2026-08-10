"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import {
  menuCategories,
  tagLabels,
  type MenuItem,
  type ProductTag,
} from "@/data/menu";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SectionHeading } from "@/components/SectionHeading";

type TagFilter = "all" | ProductTag;

/** Etiquetas presentes en la carta, en el orden en que se declaran. */
const usedTags: ProductTag[] = (Object.keys(tagLabels) as ProductTag[]).filter((tag) =>
  menuCategories.some((cat) =>
    cat.items.some((item) => item.tags?.includes(tag) || (tag === "popular" && item.popular)),
  ),
);

function itemMatches(item: MenuItem, search: string, tag: TagFilter) {
  const q = search.trim().toLowerCase();
  if (q) {
    const haystack = [item.name, item.nameEn, item.description, item.descriptionEn]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    if (!haystack.includes(q)) return false;
  }
  if (tag === "all") return true;
  if (tag === "popular") return !!(item.popular || item.tags?.includes("popular"));
  return !!item.tags?.includes(tag);
}

export function MenuCatalog() {
  const { t, tx } = useLanguage();
  const [category, setCategory] = useState("all");
  const [tag, setTag] = useState<TagFilter>("all");
  const [search, setSearch] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const tagFilters = useMemo(
    () => [
      { id: "all" as TagFilter, label: t("menu.all") },
      ...usedTags.map((tag) => ({
        id: tag as TagFilter,
        label: tag === "popular" ? t("menu.popular") : tx(tagLabels[tag].es, tagLabels[tag].en),
      })),
    ],
    [t, tx],
  );

  const activeTagLabel =
    tagFilters.find((f) => f.id === tag)?.label ?? t("menu.all");

  const filtered = useMemo(
    () =>
      menuCategories
        .filter((cat) => category === "all" || cat.id === category)
        .map((cat) => ({
          ...cat,
          items: cat.items.filter((item) => itemMatches(item, search, tag)),
        }))
        .filter((cat) => cat.items.length > 0),
    [category, search, tag],
  );

  return (
    <div>
      <SectionHeading title={t("menu.title")} subtitle={t("menu.subtitle")} />

      <div className="sticky top-16 z-30 mt-8 -mx-4 space-y-3 border-b border-arena bg-crema/95 px-4 py-3 backdrop-blur-sm sm:top-[4.5rem] sm:mx-0 sm:border sm:border-arena sm:px-5 sm:py-4">
        <div className="flex gap-2">
          <label className="block min-w-0 flex-1">
            <span className="sr-only">{t("menu.search")}</span>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t("menu.search")}
              className="w-full border border-arena bg-white px-4 py-2.5 text-sm text-texto placeholder:text-texto-suave"
            />
          </label>
          <button
            type="button"
            onClick={() => setFiltersOpen((v) => !v)}
            className={`inline-flex shrink-0 items-center gap-1.5 border px-3 py-2 text-xs font-semibold uppercase tracking-wide sm:px-4 ${
              tag !== "all" || filtersOpen
                ? "border-texto bg-texto text-white"
                : "border-arena bg-white text-texto"
            }`}
            aria-expanded={filtersOpen}
            aria-controls="menu-tag-filters"
          >
            <SlidersHorizontal className="h-3.5 w-3.5" aria-hidden />
            <span className="hidden sm:inline">{t("menu.filters")}</span>
            {tag !== "all" && (
              <span className="max-w-[5.5rem] truncate sm:max-w-none">
                {activeTagLabel}
              </span>
            )}
          </button>
        </div>

        <div className="chip-scroll" role="group" aria-label={t("nav.menu")}>
          <button
            type="button"
            onClick={() => setCategory("all")}
            className={`chip ${category === "all" ? "chip-active" : "chip-idle"}`}
          >
            {t("menu.all")}
          </button>
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setCategory(cat.id)}
              className={`chip ${category === cat.id ? "chip-active" : "chip-idle"}`}
            >
              {tx(cat.title, cat.titleEn)}
            </button>
          ))}
        </div>

        {filtersOpen && (
          <div
            id="menu-tag-filters"
            className="chip-scroll border-t border-arena/80 pt-3"
            role="group"
            aria-label={t("menu.tags")}
          >
            {tagFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => {
                  setTag(f.id);
                  if (f.id !== "all") setFiltersOpen(false);
                }}
                className={`chip !text-xs !font-semibold ${
                  tag === f.id ? "chip-tag-active" : "chip-tag-idle"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="mt-10 space-y-14 pb-8">
        {filtered.length === 0 && (
          <p className="rounded-2xl border border-arena bg-white p-8 text-center text-texto-suave">
            {t("menu.empty")}
          </p>
        )}

        {filtered.map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-36">
            <div className="mb-6">
              <h2 className="font-display text-2xl font-bold text-texto sm:text-3xl">
                {tx(cat.title, cat.titleEn)}
              </h2>
              <p className="mt-2 max-w-2xl text-texto-suave">
                {tx(cat.description, cat.descriptionEn)}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {cat.items.map((item) => (
                <article
                  key={item.name}
                  className="overflow-hidden border border-arena bg-white transition-colors hover:border-mar/40"
                >
                  {item.image && (
                    <div className="relative aspect-[16/10] bg-arena">
                      <Image
                        src={item.image}
                        alt={tx(item.name, item.nameEn ?? item.name)}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="flex items-start justify-between gap-4 p-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-texto">
                          {tx(item.name, item.nameEn ?? item.name)}
                        </h3>
                        {(item.popular || item.tags?.includes("popular")) && (
                          <span className="bg-terracota/15 px-2 py-0.5 text-xs font-medium text-terracota">
                            {tx(tagLabels.popular.es, tagLabels.popular.en)}
                          </span>
                        )}
                        {item.tags
                          ?.filter((tg) => tg !== "popular")
                          .map((tg) => (
                            <span
                              key={tg}
                              className="bg-oliva/15 px-2 py-0.5 text-xs font-medium text-oliva"
                            >
                              {tx(tagLabels[tg].es, tagLabels[tg].en)}
                            </span>
                          ))}
                      </div>
                      {item.description && (
                        <p className="mt-1 text-sm text-texto-suave">
                          {tx(item.description, item.descriptionEn ?? item.description)}
                        </p>
                      )}
                    </div>
                    {item.price && (
                      <span className="shrink-0 font-display font-semibold text-oliva">
                        {item.price}
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
