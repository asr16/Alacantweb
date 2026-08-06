import type { Metadata } from "next";
import { MenuCatalog } from "@/components/MenuCatalog";

export const metadata: Metadata = {
  title: "Carta",
  description:
    "Carta de Heladería Alacant: helados artesanos, copas, batidos, gofres, crepes, pastelería y desayunos en Roquetas de Mar.",
};

export default function CartaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <MenuCatalog />
    </div>
  );
}
