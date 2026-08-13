"use client";

import {
  useCallback,
  useEffect,
  useEffectEvent,
  useMemo,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { menuCategories, tagLabels, type MenuItem } from "@/data/menu";
import { prefersReducedMotion } from "@/lib/motion";
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
  const [search, setSearch] = useState("");
  const [activeId, setActiveId] = useState(menuCategories[0]?.id ?? "");
  const [showTop, setShowTop] = useState(false);
  const [flashId, setFlashId] = useState<string | null>(null);

  const chipRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const stickyRef = useRef<HTMLDivElement>(null);
  const scrollMarginRef = useRef(200);
  const navigatingRef = useRef(false);
  const navigateTimerRef = useRef<number | null>(null);
  const [scrollMargin, setScrollMargin] = useState(200);

  const filtered = useMemo(
    () =>
      menuCategories
        .map((cat) => ({
          ...cat,
          items: cat.items.filter((item) => itemMatches(item, search)),
        }))
        .filter((cat) => cat.items.length > 0),
    [search],
  );

  const visibleActiveId = filtered.some((cat) => cat.id === activeId)
    ? activeId
    : (filtered[0]?.id ?? "");

  // Altura real de header + barra sticky (chips pueden ocupar 1–2 filas)
  useEffect(() => {
    const sticky = stickyRef.current;
    if (!sticky) return;

    const update = () => {
      const header = document.querySelector("header");
      const headerH = header?.getBoundingClientRect().height ?? 64;
      const stickyH = sticky.getBoundingClientRect().height;
      const next = Math.ceil(headerH + stickyH + 16);
      scrollMarginRef.current = next;
      setScrollMargin(next);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(sticky);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const onActiveFromScroll = useEffectEvent((id: string) => {
    if (navigatingRef.current) return;
    setActiveId(id);
  });

  const scrollToCategory = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    navigatingRef.current = true;
    setActiveId(id);
    setFlashId(id);

    const top =
      el.getBoundingClientRect().top + window.scrollY - scrollMarginRef.current;
    window.scrollTo({
      top: Math.max(0, top),
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });

    if (navigateTimerRef.current) window.clearTimeout(navigateTimerRef.current);
    navigateTimerRef.current = window.setTimeout(() => {
      navigatingRef.current = false;
      setFlashId(null);
    }, 900);
  }, []);

  // Hash inicial (/carta#helados, etc.)
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash || !menuCategories.some((c) => c.id === hash)) return;
    const timer = window.setTimeout(() => scrollToCategory(hash), 80);
    return () => window.clearTimeout(timer);
  }, [scrollToCategory]);

  // Categoría activa según scroll
  useEffect(() => {
    const sections = filtered
      .map((cat) => document.getElementById(cat.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0];
        if (top?.target.id) onActiveFromScroll(top.target.id);
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 1],
      },
    );

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, [filtered]);

  // Chip activo visible en la fila sticky
  useEffect(() => {
    const chip = chipRefs.current.get(visibleActiveId);
    chip?.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [visibleActiveId]);

  // Botón flotante
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (navigateTimerRef.current) window.clearTimeout(navigateTimerRef.current);
    };
  }, []);

  const scrollToTop = () => {
    navigatingRef.current = true;
    setActiveId(filtered[0]?.id ?? menuCategories[0]?.id ?? "");
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
    if (navigateTimerRef.current) window.clearTimeout(navigateTimerRef.current);
    navigateTimerRef.current = window.setTimeout(() => {
      navigatingRef.current = false;
    }, 900);
  };

  return (
    <div>
      <SectionHeading as="h1" title={t("menu.title")} subtitle={t("menu.subtitle")} />

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border border-arena bg-white px-4 py-4 sm:px-5">
        <p className="text-sm text-texto-suave">{t("menu.originalHint")}</p>
        <Link href="/carta-2" className="btn btn-mar !py-2.5 !px-4">
          {t("menu.original")}
        </Link>
      </div>
      <div
        ref={stickyRef}
        className="sticky top-16 z-30 mt-8 -mx-4 space-y-3 border-b border-arena bg-crema/95 px-4 py-3 backdrop-blur-sm sm:top-[4.5rem] sm:mx-0 sm:border sm:border-arena sm:px-5 sm:py-4"
      >
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

        <div className="chip-scroll chip-scroll-x" role="tablist" aria-label={t("nav.menu")}>
          {menuCategories.map((cat) => {
            const available = filtered.some((f) => f.id === cat.id);
            const selected = visibleActiveId === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={selected}
                disabled={!available}
                ref={(node) => {
                  if (node) chipRefs.current.set(cat.id, node);
                  else chipRefs.current.delete(cat.id);
                }}
                onClick={() => {
                  if (!available) return;
                  scrollToCategory(cat.id);
                  history.replaceState(null, "", `#${cat.id}`);
                }}
                className={`chip ${selected ? "chip-active chip-active-strong" : "chip-idle"} ${
                  available ? "" : "pointer-events-none opacity-35"
                }`}
              >
                {tx(cat.title, cat.titleEn)}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10 space-y-14 pb-24">
        {filtered.length === 0 && (
          <p className="rounded-2xl border border-arena bg-white p-8 text-center text-texto-suave">
            {t("menu.empty")}
          </p>
        )}

        {filtered.map((cat) => (
          <section
            key={cat.id}
            id={cat.id}
            style={{ scrollMarginTop: scrollMargin }}
            className={`menu-section ${
              flashId === cat.id ? "menu-section-flash" : ""
            } ${visibleActiveId === cat.id ? "menu-section-active" : ""}`}
          >
            <div className="mb-6">
              <h2 className="font-display text-2xl font-bold text-texto sm:text-3xl">
                {tx(cat.title, cat.titleEn)}
              </h2>
              <p className="mt-2 max-w-2xl text-texto-suave">
                {tx(cat.description, cat.descriptionEn)}
              </p>
              {cat.optionGroups?.map((group) => (
                <div key={group.label} className="mt-4">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-texto-suave">
                    {tx(group.label, group.labelEn)}
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {tx(group.options, group.optionsEn).map((option) => (
                      <li
                        key={option}
                        className="border border-arena bg-white px-2.5 py-1 text-xs text-texto"
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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

      <button
        type="button"
        onClick={scrollToTop}
        aria-label={t("menu.backTop")}
        className={`fixed bottom-24 right-4 z-40 flex h-12 w-12 items-center justify-center border border-arena bg-mar text-white shadow-lg transition-all duration-300 md:bottom-8 sm:right-8 ${
          showTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp className="h-5 w-5" aria-hidden />
      </button>
    </div>
  );
}
