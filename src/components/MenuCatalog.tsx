"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  menuCategories,
  tagLabels,
  type MenuItem,
  type ProductTag,
} from "@/data/menu";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SectionHeading } from "@/components/SectionHeading";

type TagFilter = "all" | ProductTag;

function itemMatches(item: MenuItem, search: string, tag: TagFilter) {
  const q = search.trim().toLowerCase();
  if (
    q &&
    !item.name.toLowerCase().includes(q) &&
    !item.description?.toLowerCase().includes(q)
  ) {
    return false;
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

  const tagFilters = useMemo(
    () =>
      (
        [
          ["all", t("menu.all")],
          ["popular", t("menu.popular")],
          ["vegano", tagLabels.vegano],
          ["sin-gluten", tagLabels["sin-gluten"]],
          ["temporada", tagLabels.temporada],
        ] as const
      ).map(([id, label]) => ({
        id: id as TagFilter,
        label: typeof label === "string" ? label : tx(label.es, label.en),
      })),
    [t, tx],
  );

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

      <div className="sticky top-[73px] z-30 mt-8 -mx-4 space-y-4 border-b border-arena bg-crema/95 px-4 py-4 backdrop-blur-md sm:mx-0 sm:rounded-2xl sm:border sm:px-5">
        <label className="block">
          <span className="sr-only">{t("menu.search")}</span>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("menu.search")}
            className="w-full rounded-full border border-arena bg-white px-4 py-2.5 text-sm text-texto placeholder:text-texto-suave"
          />
        </label>

        <div className="flex flex-wrap gap-2" role="group" aria-label={t("nav.menu")}>
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

        <div className="flex flex-wrap gap-2" role="group" aria-label={t("menu.tags")}>
          {tagFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setTag(f.id)}
              className={`chip !text-xs !font-semibold ${
                tag === f.id ? "chip-tag-active" : "chip-tag-idle"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 space-y-14">
        {filtered.length === 0 && (
          <p className="card p-8 text-center text-texto-suave">{t("menu.empty")}</p>
        )}

        {filtered.map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-40">
            <div className="mb-6">
              <h2 className="font-display text-2xl font-bold text-texto sm:text-3xl">
                {tx(cat.title, cat.titleEn)}
              </h2>
              <p className="mt-2 max-w-2xl text-texto-suave">
                {tx(cat.description, cat.descriptionEn)}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {cat.items.map((item) => (
                <article key={item.name} className="card overflow-hidden">
                  {item.image && (
                    <div className="relative aspect-[16/10] bg-arena">
                      <Image
                        src={item.image}
                        alt={item.name}
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
                        <h3 className="font-semibold text-texto">{item.name}</h3>
                        {(item.popular || item.tags?.includes("popular")) && (
                          <span className="rounded-full bg-terracota/15 px-2 py-0.5 text-xs font-medium text-terracota">
                            {tx(tagLabels.popular.es, tagLabels.popular.en)}
                          </span>
                        )}
                        {item.tags
                          ?.filter((tg) => tg !== "popular")
                          .map((tg) => (
                            <span
                              key={tg}
                              className="rounded-full bg-oliva/15 px-2 py-0.5 text-xs font-medium text-oliva"
                            >
                              {tx(tagLabels[tg].es, tagLabels[tg].en)}
                            </span>
                          ))}
                      </div>
                      {item.description && (
                        <p className="mt-1 text-sm text-texto-suave">
                          {item.description}
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
