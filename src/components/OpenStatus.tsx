"use client";

import { memo, useEffect, useState } from "react";
import { getOpenStatus } from "@/lib/schedule";
import { useLanguage } from "@/i18n/LanguageProvider";

function OpenStatusInner() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const update = () => setOpen(getOpenStatus().open);
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (open === null) {
    return (
      <span
        className="inline-flex items-center gap-1.5 rounded-full bg-arena px-2.5 py-1 text-xs font-medium text-texto-suave"
        aria-hidden
      >
        <span className="h-2 w-2 rounded-full bg-texto-suave/40" />
        …
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
        open ? "bg-oliva/15 text-oliva" : "bg-terracota/15 text-terracota"
      }`}
      role="status"
      aria-live="polite"
    >
      <span
        className={`h-2 w-2 rounded-full ${open ? "bg-oliva" : "bg-terracota"}`}
        aria-hidden
      />
      {open ? t("status.open") : t("status.closed")}
    </span>
  );
}

export const OpenStatus = memo(OpenStatusInner);
