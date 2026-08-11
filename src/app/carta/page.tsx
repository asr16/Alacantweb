import type { Metadata } from "next";
import { MenuCatalog } from "@/components/MenuCatalog";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Carta",
  description:
    "Carta de Heladería Alacant: helados artesanos, copas, batidos, gofres, crepes, pastelería y desayunos en Roquetas de Mar.",
  alternates: { canonical: "/carta" },
  openGraph: {
    title: `Carta | ${siteConfig.name}`,
    description:
      "Helados artesanos, cafetería, gofres, crepes y pastelería en Roquetas de Mar.",
    url: `${siteConfig.url}/carta`,
  },
};

export default function CartaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <MenuCatalog />
    </div>
  );
}
