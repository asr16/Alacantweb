import type { Metadata } from "next";
import { ContactoContent } from "@/components/ContactoContent";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Contacta con ${siteConfig.name} en ${siteConfig.address.full}. Horario, teléfono y ubicación.`,
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: `Contacto | ${siteConfig.name}`,
    description: `Contacta con ${siteConfig.name} en ${siteConfig.address.full}.`,
    url: `${siteConfig.url}/contacto`,
  },
};

export default function ContactoPage() {
  return <ContactoContent />;
}
