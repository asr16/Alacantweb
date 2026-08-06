export type ProductTag = "popular" | "vegano" | "sin-gluten" | "temporada";

export type MenuItem = {
  name: string;
  description?: string;
  price?: string;
  popular?: boolean;
  tags?: ProductTag[];
  /** Ruta en /public o URL. Si no hay foto, la carta se muestra solo con texto. */
  image?: string;
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
  vegano: { es: "Vegano", en: "Vegan" },
  "sin-gluten": { es: "Sin gluten", en: "Gluten-free" },
  temporada: { es: "Temporada", en: "Seasonal" },
};

export const menuCategories: MenuCategory[] = [
  {
    id: "helados",
    title: "Helados artesanos",
    titleEn: "Artisan ice cream",
    description:
      "Más de 65 sabores elaborados con tradición alicantina. Los precios pueden variar; confirma en el local.",
    descriptionEn:
      "Over 65 flavors made with Alicante tradition. Prices may vary; confirm at the shop.",
    items: [
      {
        name: "Dos bolas de helado",
        description: "A elegir entre nuestro surtido de sabores",
        price: "3,50 €",
        popular: true,
        tags: ["popular"],
        image:
          "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
      },
      {
        name: "Tres bolas de helado",
        description: "Combinación libre de sabores",
        price: "4,50 €",
      },
      {
        name: "Helado de turrón",
        description: "Sabor emblemático, cremoso y con notas de almendra",
        price: "3,50 €",
        popular: true,
        tags: ["popular", "temporada"],
        image:
          "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80",
      },
      {
        name: "Helado de trufa",
        description: "Chocolate intensamente cremoso",
        price: "3,50 €",
        tags: ["sin-gluten"],
      },
      {
        name: "Sorbete de limón",
        description: "Refrescante y natural",
        price: "3,50 €",
        tags: ["vegano", "sin-gluten", "temporada"],
      },
      {
        name: "Cucurucho",
        description: "Una bola en cucurucho artesanal",
        price: "2,80 €",
      },
      {
        name: "Tarrina pequeña",
        description: "Para llevar, dos sabores",
        price: "5,00 €",
        tags: ["sin-gluten"],
      },
      {
        name: "Tarrina grande",
        description: "Para llevar, hasta cuatro sabores",
        price: "8,00 €",
        tags: ["sin-gluten"],
      },
    ],
  },
  {
    id: "copas",
    title: "Copas y combinados",
    titleEn: "Cups & sundaes",
    description: "Nuestras creaciones más pedidas para los amantes del helado.",
    descriptionEn: "Our most requested creations for ice cream lovers.",
    items: [
      {
        name: "Copa Primavera",
        description: "Helado de frutas con fruta fresca y nata",
        price: "6,50 €",
        popular: true,
        tags: ["popular", "temporada"],
        image:
          "https://images.unsplash.com/photo-1497032628192-86f99bcd04bc?w=800&q=80",
      },
      {
        name: "Mexican Sundae",
        description: "Chocolate, nueces, nata y salsa",
        price: "6,80 €",
        popular: true,
        tags: ["popular"],
        image:
          "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
      },
      {
        name: "Copa Tartufo",
        description: "Trufa, nata montada y virutas de chocolate",
        price: "6,50 €",
      },
      {
        name: "Brownie con helado",
        description: "Brownie caliente con helado de vainilla",
        price: "7,00 €",
        popular: true,
        tags: ["popular"],
        image:
          "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
      },
      {
        name: "Copa de yogur griego",
        description: "Yogur helado con frutas y miel",
        price: "6,00 €",
        tags: ["temporada"],
      },
    ],
  },
  {
    id: "cafeteria",
    title: "Cafetería y batidos",
    titleEn: "Café & shakes",
    description: "Desde un café tranquilo hasta batidos y smoothies refrescantes.",
    descriptionEn: "From a quiet coffee to refreshing shakes and smoothies.",
    items: [
      {
        name: "Café solo / con leche",
        description: "Café de calidad",
        price: "1,50 €",
      },
      {
        name: "Batido de chocolate",
        description: "Cremoso y espeso",
        price: "4,50 €",
      },
      {
        name: "Batido Kinder con nata",
        description: "Un clásico entre nuestros clientes",
        price: "5,00 €",
        popular: true,
        tags: ["popular"],
      },
      {
        name: "Smoothie de piña",
        description: "Tropical y refrescante",
        price: "4,80 €",
        tags: ["vegano", "sin-gluten", "temporada"],
      },
      {
        name: "Té / infusión",
        description: "Variedad de sabores",
        price: "2,00 €",
        tags: ["vegano", "sin-gluten"],
      },
    ],
  },
  {
    id: "gofres-crepes",
    title: "Gofres y crepes",
    titleEn: "Waffles & crepes",
    description: "Dulces recién hechos, ideales para merendar.",
    descriptionEn: "Freshly made sweets, perfect for an afternoon treat.",
    items: [
      {
        name: "Gofre con nata y chocolate",
        description: "Gofre belga caliente",
        price: "5,50 €",
        popular: true,
        tags: ["popular"],
        image:
          "https://images.unsplash.com/photo-1567620905732-2d1ec7ab9f32?w=800&q=80",
      },
      {
        name: "Gofre con helado",
        description: "Gofre con dos bolas a elegir",
        price: "6,50 €",
        tags: ["temporada"],
      },
      {
        name: "Crepe de chocolate",
        description: "Crepe fina con chocolate caliente",
        price: "4,50 €",
      },
      {
        name: "Crepe de Nutella",
        description: "Con frutos secos opcionales",
        price: "5,00 €",
      },
    ],
  },
  {
    id: "pasteleria",
    title: "Pastelería y tartas",
    titleEn: "Pastries & cakes",
    description: "Tartas, bollería y postres para compartir.",
    descriptionEn: "Cakes, pastries and desserts to share.",
    items: [
      {
        name: "Tarta Selva Negra",
        description: "Porción individual",
        price: "4,50 €",
        popular: true,
        tags: ["popular"],
        image:
          "https://images.unsplash.com/photo-1578985545069-69928b1d9587?w=800&q=80",
      },
      {
        name: "Tarta de la abuela",
        description: "Bizcocho con crema y merengue",
        price: "4,50 €",
      },
      {
        name: "Tarta Red Velvet",
        description: "Porción con frosting de queso",
        price: "4,80 €",
        tags: ["temporada"],
      },
      {
        name: "Croissant / napolitana",
        description: "Bollería del día",
        price: "2,00 €",
      },
    ],
  },
  {
    id: "desayunos",
    title: "Desayunos y meriendas",
    titleEn: "Breakfast & snacks",
    description: "Tostadas, desayunos combinados y opciones para empezar el día.",
    descriptionEn: "Toast, breakfast combos and options to start the day.",
    items: [
      {
        name: "Tostada con mantequilla y mermelada",
        description: "Pan recién hecho",
        price: "2,50 €",
      },
      {
        name: "Tostada con tomate y aceite",
        description: "Clásico mediterráneo",
        price: "3,00 €",
        popular: true,
        tags: ["popular", "vegano"],
      },
      {
        name: "Desayuno completo",
        description: "Café, zumo, tostada y bollería",
        price: "5,50 €",
      },
      {
        name: "Churros con chocolate",
        description: "Porción para merendar",
        price: "4,50 €",
        tags: ["temporada"],
      },
    ],
  },
];

/** Productos destacados como “sabores / novedades del mes”. */
export const seasonalHighlights = [
  {
    categoryId: "helados",
    name: "Helado de turrón",
    description: "Clásico alicantino con alma de temporada",
    price: "3,50 €",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80",
  },
  {
    categoryId: "helados",
    name: "Sorbete de limón",
    description: "Ligero, vegano y perfecto para el verano",
    price: "3,50 €",
    image:
      "https://images.unsplash.com/photo-1497032628192-86f99bcd04bc?w=800&q=80",
  },
  {
    categoryId: "copas",
    name: "Copa Primavera",
    description: "Frutas frescas y helado artesano",
    price: "6,50 €",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
  },
  {
    categoryId: "cafeteria",
    name: "Smoothie de piña",
    description: "Refresco tropical sin gluten",
    price: "4,80 €",
    image:
      "https://images.unsplash.com/photo-1623065422902-30a2d94aea1e?w=800&q=80",
  },
];
