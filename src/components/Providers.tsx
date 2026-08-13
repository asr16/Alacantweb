"use client";

import type { ReactNode } from "react";
import { LanguageProvider, useLanguage } from "@/i18n/LanguageProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";

function SkipLink() {
  const { t } = useLanguage();
  return (
    <a href="#contenido-principal" className="skip-link">
      {t("a11y.skip")}
    </a>
  );
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <SkipLink />
      <Header />
      <main id="contenido-principal" className="flex-1 pb-20 md:pb-0">
        {children}
      </main>
      <Footer />
      <MobileActionBar />
    </LanguageProvider>
  );
}
