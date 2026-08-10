"use client";

import { useMemo, useState } from "react";
import { menuCategories, tagLabels, type MenuItem } from "@/data/menu";
import { useLanguage } from "@/i18n/LanguageProvider";
import { SectionHeading } from "@/components/SectionHeading";

function itemMatches(item: MenuItem, search: string) {
  const q = search.trim().toLowerCase();
  if (!q) return true;
  const haystack = [item.name, item.nameEn, item.description, item.descriptionEn]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return haystack.includes(q);
}

export function MenuCatalog() {
  const { t, tx } = useLanguage();
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(
    () =>
      menuCategories
        .filter((cat) => category === "all" || cat.id === category)
        .map((cat) => ({
          ...cat,
          items: cat.items.filter((item) => itemMatches(item, search)),
        }))
        .filter((cat) => cat.items.length > 0),
    [category, search],
  );

  return (
    <div>
      <SectionHeading title={t("menu.title")} subtitle={t("menu.subtitle")} />

      <div className="sticky top-16 z-30 mt-8 -mx-4 space-y-3 border-b border-arena bg-crema/95 px-4 py-3 backdrop-blur-sm sm:top-[4.5rem] sm:mx-0 sm:border sm:border-arena sm:px-5 sm:py-4">
        <label className="block min-w-0">
          <span className="sr-only">{t("menu.search")}</span>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("menu.search")}
            className="w-full border border-arena bg-white px-4 py-2.5 text-sm text-texto placeholder:text-texto-suave"
          />
        </label>

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
                  className="border border-arena bg-white p-5 transition-colors hover:border-mar/40"
                >
                  <div className="flex items-start justify-between gap-4">
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
