"use client";

import { useState, useSyncExternalStore } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

const MOBILE_MQ = "(max-width: 639px)";
const MOBILE_PREVIEW_COUNT = 4;
const DESKTOP_PREVIEW_COUNT = 8;

function subscribeMobileMq(onChange: () => void) {
  const mq = window.matchMedia(MOBILE_MQ);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getMobileMqSnapshot() {
  return window.matchMedia(MOBILE_MQ).matches;
}

function getMobileMqServerSnapshot() {
  return false;
}

/** helados: colapsar en móvil (4) y escritorio (8); mobile-only: solo móvil */
type CollapseMode = "helados" | "mobile-only" | "never";

type MenuOptionGroupProps = {
  groupKey: string;
  label: string;
  options: string[];
  layout: "dense" | "pills";
  collapseMode?: CollapseMode;
};

export function MenuOptionGroup({
  groupKey,
  label,
  options,
  layout,
  collapseMode = "never",
}: MenuOptionGroupProps) {
  const { t } = useLanguage();
  const isMobile = useSyncExternalStore(
    subscribeMobileMq,
    getMobileMqSnapshot,
    getMobileMqServerSnapshot,
  );
  const [expanded, setExpanded] = useState(false);

  const previewCount =
    collapseMode === "helados" && !isMobile
      ? DESKTOP_PREVIEW_COUNT
      : MOBILE_PREVIEW_COUNT;
  const canCollapse =
    layout === "dense" &&
    collapseMode !== "never" &&
    (collapseMode === "mobile-only" ? isMobile : true) &&
    options.length > previewCount;
  const collapsed = canCollapse && !expanded;
  const visible = collapsed ? options.slice(0, previewCount) : options;
  const wrapClass = layout === "dense" ? "menu-option-group" : "mt-4";
  const titleClass =
    layout === "dense"
      ? "menu-option-group-title"
      : "text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-texto-suave";

  return (
    <div className={wrapClass}>
      <p className={titleClass}>{label}</p>
      {layout === "dense" ? (
        <ul id={`menu-options-${groupKey}`} className="menu-option-grid">
          {visible.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ul>
      ) : (
        <ul className="menu-option-pills">
          {visible.map((option) => (
            <li key={option} className="menu-option-pill">
              {option}
            </li>
          ))}
        </ul>
      )}
      {canCollapse && !expanded && (
        <button
          type="button"
          className="menu-option-expand"
          aria-expanded={false}
          aria-controls={`menu-options-${groupKey}`}
          onClick={() => setExpanded(true)}
        >
          {t("menu.flavorsMore")}
        </button>
      )}
      {canCollapse && expanded && (
        <button
          type="button"
          className="menu-option-expand"
          aria-expanded={expanded}
          aria-controls={`menu-options-${groupKey}`}
          onClick={() => setExpanded(false)}
        >
          {t("menu.flavorsLess")}
        </button>
      )}
    </div>
  );
}
