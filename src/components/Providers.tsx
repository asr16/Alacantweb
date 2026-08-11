"use client";

import type { ReactNode } from "react";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <Header />
      <main id="contenido-principal" className="flex-1 pb-20 md:pb-0">
        {children}
      </main>
      <Footer />
      <MobileActionBar />
    </LanguageProvider>
  );
}
