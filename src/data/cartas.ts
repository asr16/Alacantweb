/**
 * Cartas oficiales publicadas como documento: cada una vive en
 * `public/carta/<dir>/` (páginas rasterizadas con `npm run carta:pdf`).
 */
export type CartaDoc = {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  /** Carpeta dentro de `public/carta/` con las páginas y su `pages.json`. */
  dir: string;
  /**
   * Orden de lectura, por número de página del PDF. Los PDFs de imprenta traen
   * la portada al final del documento.
   */
  pageOrder?: number[];
};

/** Portada al final → primero en web, luego el resto en orden. */
function coverFirst(pageCount: number) {
  return [pageCount, ...Array.from({ length: pageCount - 1 }, (_, i) => i + 1)];
}

export const cartaDocs: CartaDoc[] = [
  {
    id: "carta-copas",
    title: "Copas y batidos",
    titleEn: "Sundaes & shakes",
    description: "Copas de helado, jarritas y batidos.",
    descriptionEn: "Ice cream sundaes, milkshake jars and shakes.",
    dir: "copas",
    pageOrder: coverFirst(14),
  },
  {
    id: "carta-resto",
    title: "Frapés y carta templada",
    titleEn: "Frappés & warm menu",
    description: "Frapés, smoothies, granizados y carta templada.",
    descriptionEn: "Frappés, smoothies, slushes and the warm menu.",
    dir: "resto",
    pageOrder: coverFirst(10),
  },
  {
    id: "carta-dulce",
    title: "Mundo Dulce",
    titleEn: "Mundo Dulce",
    description:
      "Tortitas, gofres y crepes con las salsas y los complementos que elijas.",
    descriptionEn:
      "Pancakes, waffles and crepes with the sauces and toppings you choose.",
    dir: "dulce",
  },
  {
    id: "carta-bowl-yogur",
    title: "Bowl de yogur",
    titleEn: "Yogurt bowls",
    description: "Bowls de yogur con toppings a tu gusto.",
    descriptionEn: "Build-your-own yogurt bowls with toppings.",
    dir: "bowl-yogur",
  },
  {
    id: "carta-bowl",
    title: "Bowl de frutas",
    titleEn: "Fruit bowls",
    description: "Bowls con batido de fruta, muesli y toppings.",
    descriptionEn: "Fruit smoothie bowls with muesli and toppings.",
    dir: "bowl",
  },
  {
    id: "carta-desayunos",
    title: "Desayunos",
    titleEn: "Breakfast",
    description:
      "Tostadas a tu gusto y especiales. Finalista del concurso Un Mar de Desayunos II.",
    descriptionEn:
      "Build-your-own toast and house specials. Finalist of Un Mar de Desayunos II.",
    dir: "desayunos",
  },
  {
    id: "carta-alergenos",
    title: "Alérgenos",
    titleEn: "Allergens",
    description:
      "Información de alérgenos 2026: carta general y línea Impulso.",
    descriptionEn:
      "2026 allergen information: general chart and Impulso line.",
    dir: "alergenos",
  },
];
