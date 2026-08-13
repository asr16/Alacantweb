import type { Metadata } from "next";
import { NosotrosContent } from "@/components/NosotrosContent";

export const metadata: Metadata = {
  title: "Nuestra historia",
  description:
    "Historia de Heladería Alacant en Roquetas de Mar: desde 1974, negocio familiar, 50 aniversario y más de 65 sabores de helado artesano.",
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return <NosotrosContent />;
}
