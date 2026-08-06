"use client";

import type { ReactNode } from "react";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <Header />
      <main id="contenido-principal" className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </LanguageProvider>
  );
}
