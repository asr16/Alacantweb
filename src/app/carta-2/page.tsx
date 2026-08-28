import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { Carta2Content, type CartaDocument, type CartaPage } from "@/components/Carta2Content";
import { cartaDocs, type CartaDoc } from "@/data/cartas";
import { siteConfig } from "@/data/site";

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

/** Lee en build las páginas generadas por `npm run carta:pdf`. */
function readPages(doc: CartaDoc): CartaPage[] {
  const dir = path.join(process.cwd(), "public", "carta", doc.dir);
  const pages = JSON.parse(
    fs.readFileSync(path.join(dir, "pages.json"), "utf8"),
  ) as { src: string; width: number; height: number }[];

  const ordered = doc.pageOrder
    ? doc.pageOrder.map((number) => pages[number - 1]).filter(Boolean)
    : pages;

  return ordered.map((page) => ({
    ...page,
    src: `/carta/${doc.dir}/${page.src}`,
  }));
}

type Carta2PageProps = {
  searchParams?: Promise<{ doc?: string | string[] }>;
};

export default async function Carta2Page({ searchParams }: Carta2PageProps) {
  const documents: CartaDocument[] = cartaDocs.map((doc) => ({
    ...doc,
    pages: readPages(doc),
  }));

  const params = searchParams ? await searchParams : undefined;
  const raw = params?.doc;
  const initialId = Array.isArray(raw) ? raw[0] : raw;

  return <Carta2Content documents={documents} initialId={initialId ?? null} />;
}
