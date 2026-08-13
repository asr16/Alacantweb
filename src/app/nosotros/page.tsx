import type { Metadata } from "next";
import { NosotrosContent } from "@/components/NosotrosContent";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Nuestra historia",
  description:
    "Historia de Heladería Alacant en Roquetas de Mar: desde 1974, negocio familiar, 50 aniversario y más de 65 sabores de helado artesano.",
  alternates: { canonical: "/nosotros" },
  openGraph: {
    title: `Nuestra historia | ${siteConfig.name}`,
    description:
      "Historia de Heladería Alacant en Roquetas de Mar: desde 1974, negocio familiar y 50 aniversario.",
    url: `${siteConfig.url}/nosotros`,
  },
};

export default function NosotrosPage() {
  return <NosotrosContent />;
}
