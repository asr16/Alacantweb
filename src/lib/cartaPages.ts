import fs from "node:fs";
import path from "node:path";
import type { CartaPage } from "@/components/Carta2Content";
import { cartaDocs, type CartaDoc } from "@/data/cartas";

function readPages(doc: CartaDoc): CartaPage[] {
  const dir = path.join(process.cwd(), "public", "carta", doc.dir);
  const raw = fs.readFileSync(path.join(dir, "pages.json"), "utf8").replace(/^\uFEFF/, "");
  const pages = JSON.parse(raw) as { src: string; width: number; height: number }[];

  const ordered = doc.pageOrder
    ? doc.pageOrder.map((number) => pages[number - 1]).filter(Boolean)
    : pages;

  return ordered.map((page) => ({
    ...page,
    src: `/carta/${doc.dir}/${page.src}`,
  }));
}

/** Documentos de carta leídos en build desde public/carta/<dir>/pages.json. */
export const cartaDocuments = cartaDocs.map((doc) => ({
  ...doc,
  pages: readPages(doc),
}));
