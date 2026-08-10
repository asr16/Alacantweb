import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { Carta2Content, type CartaDocument, type CartaPage } from "@/components/Carta2Content";
import { cartaDocs, type CartaDoc } from "@/data/cartas";

export const metadata: Metadata = {
  title: "Carta 2",
  description:
    "Cartas de Heladería Alacant en PDF: copas de helado, batidos, frapés, granizados, gofres, crepes y tortitas en Roquetas de Mar.",
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

export default function Carta2Page() {
  const documents: CartaDocument[] = cartaDocs.map((doc) => ({
    ...doc,
    pages: readPages(doc),
  }));

  return <Carta2Content documents={documents} />;
}
