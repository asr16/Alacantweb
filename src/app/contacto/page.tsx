import type { Metadata } from "next";
import { ContactoContent } from "@/components/ContactoContent";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con Heladería Alacant en Av. Mediterráneo, 107, Roquetas de Mar. Horario, teléfono, WhatsApp y ubicación.",
};

export default function ContactoPage() {
  return <ContactoContent />;
}
