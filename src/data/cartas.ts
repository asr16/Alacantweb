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
   * Orden de lectura, por número de página del PDF. La carta principal trae la
   * portada y la contraportada al final del documento de imprenta.
   */
  pageOrder?: number[];
};

export const cartaDocs: CartaDoc[] = [
  {
    id: "carta-principal",
    title: "Nuestra carta",
    titleEn: "Our menu",
    description:
      "Copas de helado, jarritas y batidos, frapés, smoothies, granizados y carta templada.",
    descriptionEn:
      "Ice cream sundaes, milkshake jars, frappés, smoothies, slushes and the warm menu.",
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
    dir: "dulce",
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
    id: "carta-bowl",
    title: "Bowl de frutas",
    titleEn: "Fruit bowls",
    description:
      "Bowls con batido de fruta, muesli y toppings. Normal 5,50 € · Maxi 6,50 €.",
    descriptionEn:
      "Fruit smoothie bowls with muesli and toppings. Regular 5.50 € · Maxi 6.50 €.",
    dir: "bowl",
  },
];
