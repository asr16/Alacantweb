/**
 * Cartas oficiales publicadas como documento: cada una vive en
 * `public/carta/<dir>/` (páginas rasterizadas con `npm run carta:pdf`) junto a
 * su PDF ligero en `public/carta/`.
 */
export type CartaDoc = {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  /** PDF servido en «Ver» y «Descargar». */
  pdf: string;
  /** Carpeta dentro de `public/carta/` con las páginas y su `pages.json`. */
  dir: string;
  /**
   * Orden de lectura, por número de página del PDF. La carta principal trae la
   * portada y la contraportada al final del documento de imprenta.
   */
  pageOrder?: number[];
};

export const cartaDocs: CartaDoc[] = [
  {
    id: "carta-principal",
    title: "Carta completa",
    titleEn: "Full menu",
    description:
      "Copas de helado, jarritas y batidos, frapés, smoothies, granizados y carta templada.",
    descriptionEn:
      "Ice cream sundaes, milkshake jars, frappés, smoothies, slushes and the warm menu.",
    pdf: "/carta/carta-principal.pdf",
    dir: "principal",
    pageOrder: [23, ...Array.from({ length: 22 }, (_, i) => i + 1), 24],
  },
  {
    id: "carta-dulce",
    title: "Mundo Dulce",
    titleEn: "Mundo Dulce",
    description:
      "Tortitas, gofres y crepes con las salsas y los complementos que elijas.",
    descriptionEn:
      "Pancakes, waffles and crepes with the sauces and toppings you choose.",
    pdf: "/carta/carta-dulce.pdf",
    dir: "dulce",
  },
];
