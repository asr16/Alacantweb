import type { Metadata } from "next";
import { Suspense } from "react";
import { Carta2Content } from "@/components/Carta2Content";
import { siteConfig } from "@/data/site";
import { cartaDocuments } from "@/lib/cartaPages";

export const metadata: Metadata = {
  title: "Cartas originales",
  description:
    "Cartas 2026 de Heladería Alacant: copas, batidos, dulce, bowls, desayunos y alérgenos en Roquetas de Mar.",
  alternates: { canonical: "/carta-2" },
  openGraph: {
    title: `Cartas originales | ${siteConfig.name}`,
    description:
      "Cartas 2026: copas, batidos, dulce, bowls, desayunos y alérgenos.",
    url: `${siteConfig.url}/carta-2`,
  },
};

export default function Carta2Page() {
  return (
    <Suspense>
      <Carta2Content documents={cartaDocuments} />
    </Suspense>
  );
}
