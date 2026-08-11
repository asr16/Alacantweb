export type ProductTag = "popular" | "nuevo" | "sin-azucar";

export type MenuItem = {
  name: string;
  /** Solo para productos genéricos; los nombres propios de copa no se traducen. */
  nameEn?: string;
  description?: string;
  descriptionEn?: string;
  price?: string;
  popular?: boolean;
  tags?: ProductTag[];
};

export type MenuCategory = {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  items: MenuItem[];
};

export const tagLabels: Record<ProductTag, { es: string; en: string }> = {
  popular: { es: "Popular", en: "Popular" },
  nuevo: { es: "Nueva", en: "New" },
  "sin-azucar": { es: "Sin azúcar", en: "Sugar-free" },
};

/**
 * Contenido transcrito de las cartas oficiales de la heladería
 * (`public/carta/carta-principal.pdf`, `carta-dulce.pdf`, `carta-desayunos.pdf`
 * y `carta-bowl.pdf`). Solo se indican precios cuando vienen en el PDF.
 */
export const menuCategories: MenuCategory[] = [
  {
    id: "helados",
    title: "Helados al gusto",
    titleEn: "Ice cream by the scoop",
    description:
      "Más de 65 sabores de helado artesano a elegir. Pregúntanos por los sabores disponibles del día.",
    descriptionEn:
      "Over 65 artisan ice cream flavors to choose from. Ask us about the flavors available today.",
    items: [
      {
        name: "Copa al gusto (2 bolas)",
        nameEn: "Sundae your way (2 scoops)",
        description: "Dos bolas a elegir entre nuestros sabores",
        descriptionEn: "Two scoops of the flavors you choose",
        popular: true,
        tags: ["popular"],
      },
      {
        name: "Copa al gusto (3 bolas)",
        nameEn: "Sundae your way (3 scoops)",
        description: "Tres bolas a elegir entre nuestros sabores",
        descriptionEn: "Three scoops of the flavors you choose",
      },
      {
        name: "Leche Merengada",
        nameEn: "Leche merengada",
        description: "El auténtico sabor de la leche merengada con canela.",
        descriptionEn: "The authentic taste of leche merengada with cinnamon.",
      },
    ],
  },
  {
    id: "copas",
    title: "Copas de helado",
    titleEn: "Ice cream sundaes",
    description:
      "Nuestras copas de siempre y las creaciones más recientes, con helado artesano, nata, frutas y siropes.",
    descriptionEn:
      "Our classic sundaes and newest creations, with artisan ice cream, whipped cream, fruit and syrups.",
    items: [
      {
        name: "Copa Hawai",
        description: "Exquisita combinación de chocolate, fresa y plátano",
        descriptionEn: "An exquisite combination of chocolate, strawberry and banana",
      },
      {
        name: "Copa Mozart",
        description: "Chocolate y turrón",
        descriptionEn: "Chocolate and turrón",
      },
      {
        name: "Copa Merengada",
        description: "Crema de leche merengada con nueces",
        descriptionEn: "Leche merengada cream with walnuts",
      },
      {
        name: "Copa Olimpia",
        description: "Capricho de vainilla y chocolate",
        descriptionEn: "A vanilla and chocolate treat",
      },
      {
        name: "Copa Viena",
        description: "Turrón suprema con nata",
        descriptionEn: "Supreme turrón with whipped cream",
      },
      {
        name: "Copa Festival",
        description: "Alegre combinación de sabores",
        descriptionEn: "A cheerful combination of flavors",
      },
      {
        name: "Copa Bambi",
        description: "Divertida copa para los más peques",
        descriptionEn: "A fun sundae for the little ones",
      },
      {
        name: "Copa Princesa",
        description: "Helado de fresa con nata y fresas naturales",
        descriptionEn: "Strawberry ice cream with whipped cream and fresh strawberries",
      },
      {
        name: "Copa Pantera",
        description: "Elige tu sabor",
        descriptionEn: "Choose your flavor",
      },
      {
        name: "Copa Ponche",
        description: "Café y caramelo bañado en licor",
        descriptionEn: "Coffee and caramel with a splash of liqueur",
      },
      {
        name: "Copa Suiza",
        description: "Intensos sabores con tutti frutti, pera y fresas",
        descriptionEn: "Intense flavors with tutti frutti, pear and strawberries",
      },
      {
        name: "Copa Cabana",
        description:
          "Vainilla con una selección de sabores afrutados y con frutas tropicales",
        descriptionEn:
          "Vanilla with a selection of fruity flavors and tropical fruit",
      },
      {
        name: "Copa Philadelfia",
        description: "Helado de pastel de queso con fresas y nata",
        descriptionEn: "Cheesecake ice cream with strawberries and whipped cream",
      },
      {
        name: "Copa Fresas con Nata",
        nameEn: "Strawberries & Cream Sundae",
        description:
          "Una base suave de nata montada acompañada de fresas naturales, helado de nata y un toque final de sirope de fresa",
        descriptionEn:
          "A soft whipped cream base with fresh strawberries, cream ice cream and a final touch of strawberry syrup",
      },
      {
        name: "Copa Tiffany",
        description: "Stracciatella, trufa y chocolate con una deliciosa trufa",
        descriptionEn: "Stracciatella, truffle and chocolate with a delicious truffle",
      },
      {
        name: "Copa Tiramisú",
        description:
          "El postre italiano en su versión refrescante, con base de café, galleta y nata",
        descriptionEn:
          "The Italian dessert in its refreshing version, with a base of coffee, biscuit and cream",
      },
      {
        name: "Copa Primavera",
        description: "Sinfonía de sabores frutales",
        descriptionEn: "A symphony of fruit flavors",
      },
      {
        name: "Copa Nugat",
        description: "Mantecado con turrón de yema y trozos de auténtico turrón",
        descriptionEn:
          "Mantecado ice cream with yolk turrón and pieces of authentic turrón",
      },
      {
        name: "Copa Nata con Nueces",
        nameEn: "Cream & Walnut Sundae",
        description: "Nata cremosa con helado y nueces: sencilla, elegante y deliciosa.",
        descriptionEn:
          "Creamy whipped cream with ice cream and walnuts: simple, elegant and delicious.",
      },
      {
        name: "Copa Melba",
        description: "Cremosa vainilla rodeada de melocotón",
        descriptionEn: "Creamy vanilla surrounded by peach",
      },
      {
        name: "Copa Capuccino",
        description:
          "Deliciosa combinación de nata y crema de café sobre una base de café",
        descriptionEn:
          "A delicious combination of cream and coffee custard over a coffee base",
      },
      {
        name: "Copa Canadá",
        description: "Chocolate blanco acompañado de trufas de chocolate",
        descriptionEn: "White chocolate with chocolate truffles",
      },
      {
        name: "Copa Aitana",
        description: "Góndola de helado variado con piña y melocotón",
        descriptionEn: "A boat of assorted ice cream with pineapple and peach",
      },
      {
        name: "Copa Banana Split",
        description: "Chocolate, fresa y vainilla con banana y nata",
        descriptionEn: "Chocolate, strawberry and vanilla with banana and whipped cream",
      },
      {
        name: "Copa Active sin azúcar",
        nameEn: "Copa Active (sugar-free)",
        description: "Apto para diabéticos",
        descriptionEn: "Suitable for diabetics",
        tags: ["sin-azucar"],
      },
      {
        name: "Copa Mexicana",
        description: "Capricho tropical con piña y helado variado",
        descriptionEn: "A tropical treat with pineapple and assorted ice cream",
      },
      {
        name: "Copa Roquetas",
        description: "Helado variado como base para unas fresas con nata",
        descriptionEn:
          "Assorted ice cream as a base for strawberries and whipped cream",
        popular: true,
        tags: ["popular"],
      },
      {
        name: "Copa Fresa & Cream",
        description: "Fresas, melocotón y delicioso helado de limón",
        descriptionEn: "Strawberries, peach and delicious lemon ice cream",
      },
      {
        name: "Copa Génova",
        description: "Fantasía de sabores con trozos de fresa y kiwi coronada con nata",
        descriptionEn:
          "A fantasy of flavors with pieces of strawberry and kiwi topped with cream",
      },
      {
        name: "Copa Pijama",
        description: "Helado variado con flan y fruta",
        descriptionEn: "Assorted ice cream with flan and fruit",
      },
      {
        name: "Copa Negrita",
        description:
          "Variaciones sobre chocolate, fino helado, trufas y cobertura crujiente",
        descriptionEn:
          "Variations on chocolate, fine ice cream, truffles and a crunchy coating",
      },
      {
        name: "Copa del Bosque",
        description: "Sabores de frutas del bosque con nata y siropes",
        descriptionEn: "Forest berry flavors with whipped cream and syrups",
      },
      {
        name: "Copa Suprema de Turrón",
        description: "Capricho de turrón con nata y nueces",
        descriptionEn: "A turrón treat with whipped cream and walnuts",
        popular: true,
        tags: ["popular"],
      },
      {
        name: "Copa Tartufo",
        description: "Trufa rellena de caramelo con helado y nata",
        descriptionEn: "Caramel-filled truffle with ice cream and whipped cream",
      },
      {
        name: "Copa Crema Catalana",
        description: "Postre tradicional en su versión más original",
        descriptionEn: "The traditional dessert in its most original version",
      },
      {
        name: "Copa Oreo",
        tags: ["nuevo", "popular"],
        popular: true,
      },
      {
        name: "Copa 50 aniversario",
        nameEn: "50th Anniversary Sundae",
        description:
          "¡Medio siglo de dulzura en una copa! Sorbetes con fruta fresca, sirope de fresa y caramelo",
        descriptionEn:
          "Half a century of sweetness in one sundae! Sorbets with fresh fruit, strawberry syrup and caramel",
        tags: ["nuevo", "popular"],
        popular: true,
      },
      {
        name: "Copa Gandía",
        description: "El sabor de siempre: vainilla, tutti frutti, fruta y nata",
        descriptionEn: "The classic taste: vanilla, tutti frutti, fruit and cream",
      },
      {
        name: "Copa Duetto",
        description: "Dúo de sabores, helado de chocolate y nata",
        descriptionEn: "A duo of flavors, chocolate ice cream and whipped cream",
      },
      {
        name: "Copa Royal",
        description: "Gran combinación de flan con helado y frutas naturales",
        descriptionEn: "A great combination of flan with ice cream and fresh fruit",
      },
      {
        name: "Copa Cheesecake",
        description:
          "Tentadora combinación de helado de tarta de queso con fresas, frutos rojos, nata montada y sirope de fresa.",
        descriptionEn:
          "A tempting combination of cheesecake ice cream with strawberries, red berries, whipped cream and strawberry syrup.",
      },
      {
        name: "Copa Málaga",
        description: "Crema de ron con pasas",
        descriptionEn: "Rum and raisin cream",
      },
      {
        name: "Copa Bocattis",
        description: "Trufas de chocolate con nata montada, fresas y chocolate",
        descriptionEn: "Chocolate truffles with whipped cream, strawberries and chocolate",
      },
      {
        name: "Cocktail de Frutas",
        nameEn: "Fruit Cocktail",
        description: "Combinado de helado y frutas naturales decoradas con nata",
        descriptionEn: "Ice cream and fresh fruit topped with whipped cream",
      },
      {
        name: "Copa Tentazione",
        description: "Tentación de fresa, vainilla y chocolate con trufas y macedonia",
        descriptionEn:
          "A temptation of strawberry, vanilla and chocolate with truffles and fruit salad",
      },
      {
        name: "Copa Café Crème",
        description: "Aromático helado de café bañado en licor",
        descriptionEn: "Aromatic coffee ice cream with a splash of liqueur",
      },
    ],
  },
  {
    id: "batidos",
    title: "Jarritas y batidos",
    titleEn: "Milkshake jars & shakes",
    description:
      "Jarritas de helado con galleta y chocolate, y batidos con el sabor de helado que elijas.",
    descriptionEn:
      "Ice cream jars with biscuit and chocolate, plus shakes made with the ice cream flavor you choose.",
    items: [
      {
        name: "Filipina",
        description: "Helado de chocolate blanco con galletas Filipinos",
        descriptionEn: "White chocolate ice cream with Filipinos biscuits",
      },
      {
        name: "Happy Happy",
        description: "Helado Happy Happy de crema de avellana",
        descriptionEn: "Happy Happy hazelnut cream ice cream",
      },
      {
        name: "Brownie",
        description: "Helado de brownie con trocitos de brownie y nata",
        descriptionEn: "Brownie ice cream with brownie pieces and whipped cream",
        popular: true,
        tags: ["popular"],
      },
      {
        name: "Más que Bueno!",
        description: "Chocoavellana Crunch, sabor avellanas y cereal",
        descriptionEn: "Chocoavellana Crunch, hazelnut and cereal flavor",
      },
      {
        name: "Huevo de Chocolate",
        nameEn: "Chocolate Egg",
        description: "Chocolate blanco con veteado de cacao y avellanas",
        descriptionEn: "White chocolate marbled with cocoa and hazelnuts",
      },
      {
        name: "Chips Cookie",
        description: "Helado de galletas Chips Ahoy!",
        descriptionEn: "Chips Ahoy! cookie ice cream",
      },
      {
        name: "Pink Panther",
        description: "Con dulce Pantera Rosa y Kinder Bueno",
        descriptionEn: "With Pink Panther cake and Kinder Bueno",
      },
      {
        name: "Biscuit Oreo",
        description: "Helado Chocobiscuit y galletas Oreo",
        descriptionEn: "Chocobiscuit ice cream and Oreo cookies",
      },
      {
        name: "Lotus Cookie",
        description: "Con helado y galleta Lotus",
        descriptionEn: "With ice cream and Lotus biscuit",
      },
      {
        name: "Nata con Oreo",
        nameEn: "Cream & Oreo",
        description: "Helado de nata con galleta Oreo",
        descriptionEn: "Cream ice cream with Oreo cookies",
      },
      {
        name: "Batido Clásico",
        nameEn: "Classic Shake",
        description:
          "¡Escoge el sabor de helado que más te guste para preparar tu batido!",
        descriptionEn: "Pick your favorite ice cream flavor and we'll blend your shake!",
      },
      {
        name: "Batido con Nata",
        nameEn: "Shake with Whipped Cream",
        description: "Tu batido favorito coronado con nata montada",
        descriptionEn: "Your favorite shake topped with whipped cream",
      },
      {
        name: "Batido sin azúcar",
        nameEn: "Sugar-free Shake",
        description: "Con helado sin azúcar añadido",
        descriptionEn: "Made with no-added-sugar ice cream",
        tags: ["sin-azucar"],
      },
    ],
  },
  {
    id: "cafeteria",
    title: "Cafetería y frapés",
    titleEn: "Café & frappés",
    description:
      "Frapés de café con helado y nata, y nuestros cafés especiales de siempre.",
    descriptionEn:
      "Coffee frappés with ice cream and whipped cream, plus our classic specialty coffees.",
    items: [
      { name: "Frappé Solo", nameEn: "Frappé Solo" },
      {
        name: "Frappé Créme",
        description: "Con nata",
        descriptionEn: "With whipped cream",
      },
      {
        name: "Frappé Chocolate",
        description: "Con nata y chocolate",
        descriptionEn: "With whipped cream and chocolate",
        popular: true,
        tags: ["popular"],
      },
      { name: "Frappé con Hielo", nameEn: "Iced Frappé" },
      { name: "Frappé Batido", nameEn: "Blended Frappé" },
      {
        name: "Frappé Irlandés",
        nameEn: "Irish Frappé",
        description: "Con helado, café, nata y whisky",
        descriptionEn: "With ice cream, coffee, whipped cream and whisky",
      },
      {
        name: "Frappé Gelat",
        description: "Con helado y nata",
        descriptionEn: "With ice cream and whipped cream",
      },
      {
        name: "Frappé Gelat con Baileys",
        nameEn: "Frappé Gelat with Baileys",
        description: "Con nata y chocolate",
        descriptionEn: "With whipped cream and chocolate",
      },
      { name: "Café Vienés", nameEn: "Viennese Coffee" },
      { name: "Café Cream", nameEn: "Coffee Cream" },
      { name: "Affogato", nameEn: "Affogato" },
      { name: "Café Irlandés", nameEn: "Irish Coffee" },
      { name: "Café Escocés", nameEn: "Scottish Coffee" },
      { name: "Barraquito", nameEn: "Barraquito" },
      {
        name: "Bombón Batido con Nata",
        nameEn: "Blended Bombón with Whipped Cream",
      },
    ],
  },
  {
    id: "smoothies",
    title: "Smoothies",
    titleEn: "Smoothies",
    description: "Batidos de fruta natural, sin lácteos, preparados al momento.",
    descriptionEn: "Natural fruit blends, dairy-free, made to order.",
    items: [
      {
        name: "Ginger Boost",
        description: "Jengibre, zanahoria, manzana y pera",
        descriptionEn: "Ginger, carrot, apple and pear",
      },
      {
        name: "Berries Paradise",
        description: "Fresa, arándanos, cereza y mango",
        descriptionEn: "Strawberry, blueberry, cherry and mango",
      },
      {
        name: "Dragon Fruit Mix",
        description: "Pitaya, fresa y mango",
        descriptionEn: "Dragon fruit, strawberry and mango",
      },
      {
        name: "Tropical Heaven",
        description: "Mango, melón, piña y kiwi",
        descriptionEn: "Mango, melon, pineapple and kiwi",
        popular: true,
        tags: ["popular"],
      },
      {
        name: "Caribbean Passion",
        description: "Piña, mango y papaya",
        descriptionEn: "Pineapple, mango and papaya",
      },
      {
        name: "Colada Jungle",
        description: "Plátano, coco y piña",
        descriptionEn: "Banana, coconut and pineapple",
      },
      {
        name: "Vitality",
        description: "Fresa y plátano",
        descriptionEn: "Strawberry and banana",
      },
      {
        name: "Delicia Mix",
        description: "Mango, plátano, açaí y arándanos",
        descriptionEn: "Mango, banana, açaí and blueberries",
      },
    ],
  },
  {
    id: "bowls",
    title: "Bowl de frutas",
    titleEn: "Fruit bowls",
    description:
      "Cremoso batido de fruta con muesli y toppings. Normal 5,50 € · Maxi 6,50 €. Extras: leche de soja, avena o sin lactosa, chocolate negro o blanco, miel, sirope de dulce de arce, galletas Oreo/Cookies/Lotus, Lacasitos, fruta fresca, coco, almendra o nueces, mango o plátano deshidratado (+0,50 €); crema de cacahuete (+1,00 €).",
    descriptionEn:
      "Creamy fruit blend with muesli and toppings. Regular 5.50 € · Maxi 6.50 €. Extras: soy, oat or lactose-free milk, dark or white chocolate, honey, maple syrup, Oreo/Cookies/Lotus biscuits, Lacasitos, fresh fruit, coconut, almond or walnuts, dehydrated mango or banana (+0.50 €); peanut butter (+1.00 €).",
    items: [
      {
        name: "Colada Jungle Bowl",
        description:
          "Cremoso batido de plátano, coco y piña acompañado de muesli, plátano, coco, arándanos y coco rallado.",
        descriptionEn:
          "Creamy banana, coconut and pineapple blend with muesli, banana, coconut, blueberries and shredded coconut.",
        price: "5,50 € · Maxi 6,50 €",
        tags: ["nuevo"],
      },
      {
        name: "Vitaly Bowl",
        description:
          "Cremoso batido de fresas y plátano acompañado de muesli, fresas, plátano y frutos rojos.",
        descriptionEn:
          "Creamy strawberry and banana blend with muesli, strawberries, banana and red berries.",
        price: "5,50 € · Maxi 6,50 €",
        tags: ["nuevo"],
      },
      {
        name: "Delicia Mix Bowl",
        description:
          "Cremoso batido de mango, plátano, açaí y arándanos acompañado de muesli, plátano, fresas y arándanos.",
        descriptionEn:
          "Creamy mango, banana, açaí and blueberry blend with muesli, banana, strawberries and blueberries.",
        price: "5,50 € · Maxi 6,50 €",
        tags: ["nuevo"],
      },
      {
        name: "Dragon Fruit Bowl",
        description:
          "Cremoso batido de fruta del dragón, fresas y mango acompañado de muesli, fresas, arándanos y mango natural.",
        descriptionEn:
          "Creamy dragon fruit, strawberry and mango blend with muesli, strawberries, blueberries and fresh mango.",
        price: "5,50 € · Maxi 6,50 €",
        tags: ["nuevo"],
      },
      {
        name: "Caribbean Passion Bowl",
        description:
          "Cremoso batido de piña, mango y papaya acompañado de muesli, piña, mango natural y papaya.",
        descriptionEn:
          "Creamy pineapple, mango and papaya blend with muesli, pineapple, fresh mango and papaya.",
        price: "5,50 € · Maxi 6,50 €",
        tags: ["nuevo"],
      },
      {
        name: "Berries Paradise Bowl",
        description:
          "Cremoso batido de fresas, arándanos, cereza y mango acompañado de muesli, fresas, arándanos y grosellas con un toque de canela.",
        descriptionEn:
          "Creamy strawberry, blueberry, cherry and mango blend with muesli, strawberries, blueberries, currants and a touch of cinnamon.",
        price: "5,50 € · Maxi 6,50 €",
        tags: ["nuevo"],
      },
    ],
  },
  {
    id: "granizados",
    title: "Granizados y horchata",
    titleEn: "Slushes & horchata",
    description: "Lo más refrescante de la carta para los días de playa.",
    descriptionEn: "The most refreshing part of the menu for beach days.",
    items: [
      {
        name: "Granizado de Limón",
        nameEn: "Lemon Slush",
        popular: true,
        tags: ["popular"],
      },
      { name: "Horchata", nameEn: "Horchata" },
      { name: "Blanco & Negro", nameEn: "Blanco & Negro (coffee slush with ice cream)" },
      { name: "Granizado de Café", nameEn: "Coffee Slush" },
      { name: "Sorbete de Frambuesa", nameEn: "Raspberry Sorbet" },
      { name: "Sorbete de Mango", nameEn: "Mango Sorbet" },
      { name: "Leche Preparada", nameEn: "Leche preparada" },
      { name: "Mojito Granizado", nameEn: "Frozen Mojito" },
    ],
  },
  {
    id: "templada",
    title: "Carta templada",
    titleEn: "Warm menu",
    description:
      "Chocolate caliente y copas templadas: helado frío sobre chocolate recién hecho.",
    descriptionEn:
      "Hot chocolate and warm sundaes: cold ice cream over freshly made hot chocolate.",
    items: [
      {
        name: "Copa Templada Oreo",
        nameEn: "Warm Oreo Sundae",
        description:
          "Chocolate caliente, helado de nata con Oreo, galletas Oreo y barquillos de canela",
        descriptionEn:
          "Hot chocolate, Oreo cream ice cream, Oreo cookies and cinnamon wafers",
        popular: true,
        tags: ["popular"],
      },
      {
        name: "Copa Chocolates",
        nameEn: "Warm Chocolate Sundae",
        description:
          "Chocolate caliente, helado de brownie, trozos de brownie y barquillos de canela.",
        descriptionEn:
          "Hot chocolate, brownie ice cream, brownie pieces and cinnamon wafers.",
      },
      {
        name: "Delicia de Café y Chocolate",
        nameEn: "Coffee & Chocolate Delight",
      },
      { name: "Chocolate Excepción", nameEn: "Chocolate Excepción" },
      { name: "Chocolate con Menta", nameEn: "Mint Hot Chocolate" },
      { name: "Chocolate Caliente con Nata", nameEn: "Hot Chocolate with Whipped Cream" },
    ],
  },
  {
    id: "desayunos",
    title: "Desayunos",
    titleEn: "Breakfast",
    description:
      "¡Personaliza tu tostada! Pan rústico, de semillas, de molde, mollete o sin gluten. Bases: tomate, aceite, mantequilla/Lorenzana, mayonesa, alioli, queso de untar, queso roquefort, paté ibérico, sobrasada, Nocilla, dulce de arce y miel. Ingredientes: jamón york, jamón serrano, pavo braseado, lomo sajonia, lomo de orza, atún, salmón ahumado, queso de burgos, mezcla de quesos, rulo de cabra, queso viejo, aguacate, mermelada fresa/melocotón y rúcula. Finalista del concurso Un Mar de Desayunos II.",
    descriptionEn:
      "Build your own toast! Rustic, seeded, sandwich bread, soft roll or gluten-free. Bases: tomato, oil, butter/Lorenzana, mayonnaise, aioli, cream cheese, Roquefort, Iberian pâté, sobrasada, Nocilla, maple syrup and honey. Toppings: cooked ham, Serrano ham, braised turkey, sajonia loin, orza loin, tuna, smoked salmon, Burgos cheese, cheese mix, goat cheese log, aged cheese, avocado, strawberry/peach jam and rocket. Finalist of Un Mar de Desayunos II.",
    items: [
      {
        name: "Tostada a tu gusto",
        nameEn: "Toast your way",
        description: "Elige el pan, la base y los ingredientes que quieras",
        descriptionEn: "Choose your bread, base and toppings",
        tags: ["nuevo"],
      },
      {
        name: "Especial tomate, atún y york",
        nameEn: "Special tomato, tuna & ham",
        description: "Tomate, atún, york, orégano y queso fundido",
        descriptionEn: "Tomato, tuna, cooked ham, oregano and melted cheese",
        tags: ["nuevo"],
      },
      {
        name: "Especial serrano y rúcula",
        nameEn: "Special Serrano & rocket",
        description: "Queso de untar, rúcula, jamón serrano y AOVE",
        descriptionEn: "Cream cheese, rocket, Serrano ham and olive oil",
        tags: ["nuevo"],
      },
      {
        name: "Especial salmón y aguacate",
        nameEn: "Special salmon & avocado",
        description: "Queso de untar, salmón ahumado y aguacate",
        descriptionEn: "Cream cheese, smoked salmon and avocado",
        popular: true,
        tags: ["nuevo", "popular"],
      },
      {
        name: "Especial roquefort y atún",
        nameEn: "Special Roquefort & tuna",
        description: "Roquefort, atún y queso fundido",
        descriptionEn: "Roquefort, tuna and melted cheese",
        tags: ["nuevo"],
      },
      {
        name: "Especial Lorenzana y york",
        nameEn: "Special Lorenzana & ham",
        description: "Lorenzana, york y queso fundido",
        descriptionEn: "Lorenzana, cooked ham and melted cheese",
        tags: ["nuevo"],
      },
      {
        name: "Especial tomate y sajonia",
        nameEn: "Special tomato & sajonia",
        description: "Tomate, sajonia y queso fundido",
        descriptionEn: "Tomato, sajonia and melted cheese",
        tags: ["nuevo"],
      },
      {
        name: "Especial alioli y orza",
        nameEn: "Special aioli & orza",
        description: "Alioli y lomo de orza / sajonia",
        descriptionEn: "Aioli with orza or sajonia loin",
        tags: ["nuevo"],
      },
      {
        name: "Especial Nocilla y plátano",
        nameEn: "Special Nocilla & banana",
        description: "Nocilla y plátano",
        descriptionEn: "Nocilla and banana",
        tags: ["nuevo"],
      },
    ],
  },
  {
    id: "gofres-crepes",
    title: "Gofres, crepes y tortitas",
    titleEn: "Waffles, crepes & pancakes",
    description:
      "Recién hechos y montados a tu gusto. Salsas a elegir: chocolate, chocolate blanco, Nocilla, chocolate Kinder, Lotus, dulce de leche y dulce de arce. Complementos a elegir: helado, nata, fruta (fresas, plátano, arándanos, frutos rojos, melocotón, piña y kiwi), galletas (Oreo, cookies, Filipinos, barritas Kinder, Happy Hippo y Lotus), Lacasitos y fideo de chocolate, coco rallado, nueces y almendra laminada, y nubes.",
    descriptionEn:
      "Freshly made and built your way. Sauces to choose from: chocolate, white chocolate, Nocilla, Kinder chocolate, Lotus, dulce de leche and maple syrup. Toppings to choose from: ice cream, whipped cream, fruit (strawberry, banana, blueberry, red berries, peach, pineapple and kiwi), biscuits (Oreo, cookies, Filipinos, Kinder bars, Happy Hippo and Lotus), Lacasitos and chocolate sprinkles, grated coconut, walnuts and flaked almond, and marshmallows.",
    items: [
      {
        name: "Tortitas",
        nameEn: "Pancakes",
        description: "Con la salsa y los complementos que elijas",
        descriptionEn: "With the sauce and toppings you choose",
        popular: true,
        tags: ["popular"],
      },
      {
        name: "Gofres",
        nameEn: "Waffles",
        description: "Con la salsa y los complementos que elijas",
        descriptionEn: "With the sauce and toppings you choose",
        popular: true,
        tags: ["popular"],
      },
      {
        name: "Crepes",
        nameEn: "Crepes",
        description: "Con la salsa y los complementos que elijas",
        descriptionEn: "With the sauce and toppings you choose",
      },
      {
        name: "Crepe salado",
        nameEn: "Savory Crepe",
        description: "La alternativa salada de la carta dulce",
        descriptionEn: "The savory alternative on the dessert menu",
      },
      {
        name: "Torre de tortitas",
        nameEn: "Pancake Tower",
        description: "Tortitas apiladas para compartir",
        descriptionEn: "Stacked pancakes to share",
      },
    ],
  },
  {
    id: "pasteleria",
    title: "Postres y dulces",
    titleEn: "Desserts & sweets",
    description: "Dulces recién hechos para acompañar el café o cerrar la merienda.",
    descriptionEn: "Freshly made sweets to go with your coffee or finish an afternoon treat.",
    items: [
      {
        name: "Donut Especial",
        nameEn: "Special Donut",
      },
      {
        name: "Coulant",
        nameEn: "Chocolate Coulant",
      },
      {
        name: "Brownie",
        nameEn: "Brownie",
        description: "Con helado y nata",
        descriptionEn: "With ice cream and whipped cream",
        popular: true,
        tags: ["popular"],
      },
    ],
  },
];

/** Productos destacados como “sabores / novedades del mes”. */
export const seasonalHighlights = [
  {
    categoryId: "copas",
    name: "Copa 50 aniversario",
    nameEn: "50th Anniversary Sundae",
    description:
      "¡Medio siglo de dulzura en una copa! Sorbetes con fruta fresca, sirope de fresa y caramelo",
    descriptionEn:
      "Half a century of sweetness in one sundae! Sorbets with fresh fruit, strawberry syrup and caramel",
  },
  {
    categoryId: "copas",
    name: "Copa Oreo",
    nameEn: "Copa Oreo",
    description: "Nuestra copa más reciente, para los incondicionales de la Oreo",
    descriptionEn: "Our newest sundae, for die-hard Oreo fans",
  },
  {
    categoryId: "copas",
    name: "Copa Suprema de Turrón",
    nameEn: "Copa Suprema de Turrón",
    description: "Capricho de turrón con nata y nueces",
    descriptionEn: "A turrón treat with whipped cream and walnuts",
  },
  {
    categoryId: "templada",
    name: "Copa Templada Oreo",
    nameEn: "Warm Oreo Sundae",
    description: "Chocolate caliente, helado de nata con Oreo y barquillos de canela",
    descriptionEn: "Hot chocolate, Oreo cream ice cream and cinnamon wafers",
  },
];
