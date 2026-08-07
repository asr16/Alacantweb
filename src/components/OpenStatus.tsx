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
      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-texto-suave" aria-hidden>
        …
      </span>
    );
  }

  return (
    <span
      className={`text-[0.7rem] font-semibold uppercase tracking-[0.12em] ${
        open ? "text-oliva" : "text-terracota"
      }`}
      role="status"
      aria-live="polite"
    >
      {open ? t("status.open") : t("status.closed")}
    </span>
  );
}

export const OpenStatus = memo(OpenStatusInner);
