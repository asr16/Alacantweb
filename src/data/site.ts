export const siteConfig = {
  name: "Heladería Alacant",
  shortName: "Alacant",
  description:
    "Más de 65 sabores de helado artesano, cafetería, gofres, crepes y pastelería en Roquetas de Mar. Tradición alicantina desde hace más de 50 años.",
  descriptionEn:
    "Over 65 artisan ice cream flavors, café, waffles, crepes and pastry in Roquetas de Mar. Alicante tradition for over 50 years.",
  url: "https://heladeria-alacant.es",
  address: {
    street: "Av. Mediterráneo, 107",
    city: "Roquetas de Mar",
    province: "Almería",
    postalCode: "04740",
    country: "España",
    full: "Av. Mediterráneo, 107, 04740 Roquetas de Mar, Almería",
  },
  coords: {
    lat: 36.732696,
    lng: -2.618354,
  },
  phone: "+34 950 33 34 70",
  phoneHref: "tel:+34950333470",
  email: "info@heladeriaalacant.es",
  emailHref: "mailto:info@heladeriaalacant.es",
  instagram: "https://www.instagram.com/heladeriaalacantroquetas/",
  /** Ficha de Google Maps del local (CID). */
  googleMaps: "https://www.google.com/maps?cid=2396138620883418987",
  /** Misma ficha — el usuario ve valoración y reseñas. */
  googleReviews: "https://www.google.com/maps?cid=2396138620883418987",
  googleMapsEmbed:
    "https://www.google.com/maps?q=36.732696,-2.618354&hl=es&z=17&output=embed",
  scheduleNote:
    "Horario orientativo. Puede variar en festivos; confirma por teléfono.",
  scheduleNoteEn:
    "Indicative hours. May vary on holidays; confirm by phone.",
  highlights: [
    { value: "65+", label: "Sabores de helado artesano", labelEn: "Artisan ice cream flavors" },
    { value: "50+", label: "Años de historia", labelEn: "Years of history" },
    { value: "4.1", label: "Valoración Google (1.210+ reseñas)", labelEn: "Google rating (1,210+ reviews)" },
  ],
  nav: [
    { href: "/", labelKey: "nav.home" as const },
    { href: "/carta", labelKey: "nav.menu" as const },
    { href: "/nosotros", labelKey: "nav.about" as const },
    { href: "/contacto", labelKey: "nav.contact" as const },
  ],
};

export const heroContent = {
  title: "Helados artesanos frente al Mediterráneo",
  titleEn: "Artisan ice cream by the Mediterranean",
  subtitle:
    "Más de 65 sabores, tradición alicantina y la calidez de un local con más de 50 años en Roquetas de Mar.",
  subtitleEn:
    "Over 65 flavors, Alicante tradition and the warmth of a local spot with more than 50 years in Roquetas de Mar.",
  ctaPrimary: { label: "Ver carta", labelEn: "View menu", href: "/carta" },
  ctaSecondary: { label: "Cómo llegar", labelEn: "Get directions" },
};

export const historyPreview = {
  title: "Una institución en Roquetas de Mar",
  titleEn: "A Roquetas de Mar institution",
  paragraphs: [
    "La Heladería Alacant es una institución con más de 50 años de historia que se distingue por ofrecer una amplia variedad de más de 65 sabores de helado artesano, manteniendo la tradición de sus orígenes alicantinos.",
    "Además de sus helados, la oferta se extiende a una completa carta de cafetería: gofres, crepes, batidos, tartas y una selección de desayunos y meriendas. Un lugar de toda la vida en la urbanización, conocido por la misma solera y la calidad de siempre.",
  ],
  paragraphsEn: [
    "Heladería Alacant is an institution with more than 50 years of history, known for over 65 artisan ice cream flavors and its Alicante roots.",
    "Beyond ice cream, the menu includes a full café offering: waffles, crepes, shakes, cakes, breakfast and afternoon treats. A neighborhood classic known for its warmth and lasting quality.",
  ],
};

export const aboutContent = {
  title: "Sobre nosotros",
  titleEn: "About us",
  intro:
    "Desde 1974, la Heladería Alacant ha sido parte del día a día de Roquetas de Mar. Lo que empezó como un proyecto familiar con raíces alicantinas se ha convertido en un referente de helado artesano en la costa de Almería.",
  introEn:
    "Since 1974, Heladería Alacant has been part of everyday life in Roquetas de Mar. What began as a family project with Alicante roots is now a reference for artisan ice cream on the Almería coast.",
  sections: [
    {
      title: "Orígenes alicantinos",
      titleEn: "Alicante origins",
      content:
        "Nuestra receta parte de la tradición heladera de Alicante: materias primas de calidad, elaboración artesana y un catálogo que crece cada temporada sin perder la esencia de lo clásico.",
      contentEn:
        "Our recipes come from Alicante ice-cream tradition: quality ingredients, artisan craft and a catalog that grows each season without losing its classic soul.",
    },
    {
      title: "Más que helados",
      titleEn: "More than ice cream",
      content:
        "Helados, copas, batidos, gofres, crepes, tartas y desayunos. Alacant es heladería y cafetería: el sitio perfecto para merendar, celebrar o simplemente darte un capricho antes o después del paseo marítimo.",
      contentEn:
        "Ice cream, sundaes, shakes, waffles, crepes, cakes and breakfast. Alacant is both gelato shop and café — perfect before or after a stroll by the sea.",
    },
    {
      title: "De generación en generación",
      titleEn: "Generation after generation",
      content:
        "En 2024 celebramos nuestro 50º aniversario en Roquetas de Mar, un hito que refleja la confianza de generaciones de clientes y el compromiso de un equipo que lleva la heladería en el corazón.",
      contentEn:
        "In 2024 we celebrated our 50th anniversary in Roquetas de Mar — a milestone that reflects generations of trust and a team that lives for ice cream.",
    },
  ],
  values: [
    {
      title: "Tradición",
      titleEn: "Tradition",
      description: "Recetas artesanas y sabores que evocan la heladería de siempre.",
      descriptionEn: "Artisan recipes and flavors that feel like classic gelato.",
    },
    {
      title: "Calidad",
      titleEn: "Quality",
      description: "Ingredientes seleccionados y elaboración cuidada en cada producto.",
      descriptionEn: "Selected ingredients and careful craft in every product.",
    },
    {
      title: "Cercanía",
      titleEn: "Warmth",
      description: "El mismo local, las mismas caras y un trato familiar que nos define.",
      descriptionEn: "The same place, familiar faces and a family welcome.",
    },
  ],
};

export const featureCards = [
  {
    title: "Helados artesanos",
    titleEn: "Artisan ice cream",
    description: "Más de 65 sabores: clásicos, frutas, turrón, trufa y creaciones de temporada.",
    descriptionEn: "Over 65 flavors: classics, fruit, turrón, truffle and seasonal creations.",
    href: "/carta#helados",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
    accent: "mar",
  },
  {
    title: "Cafetería",
    titleEn: "Café",
    description: "Batidos, smoothies, cafés y combinados para cualquier momento del día.",
    descriptionEn: "Shakes, smoothies, coffee and combos for any time of day.",
    href: "/carta#cafeteria",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    accent: "terracota",
  },
  {
    title: "Gofres y crepes",
    titleEn: "Waffles & crepes",
    description: "Dulces recién hechos, perfectos para merendar con helado o nata.",
    descriptionEn: "Freshly made sweets, perfect with ice cream or cream.",
    href: "/carta#gofres-crepes",
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab9f32?w=800&q=80",
    accent: "oliva",
  },
  {
    title: "Pastelería",
    titleEn: "Pastry",
    description: "Tartas, bollería y postres para compartir o disfrutar en solitario.",
    descriptionEn: "Cakes, pastries and desserts to share or enjoy alone.",
    href: "/carta#pasteleria",
    image:
      "https://images.unsplash.com/photo-1578985545069-69928b1d9587?w=800&q=80",
    accent: "mar-claro",
  },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1497032628192-86f99bcd04bc?w=800&q=80",
    alt: "Helado artesano en cucurucho",
    altEn: "Artisan ice cream cone",
  },
  {
    src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80",
    alt: "Copa de helado con toppings",
    altEn: "Ice cream cup with toppings",
  },
  {
    src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    alt: "Costa mediterránea de Almería",
    altEn: "Mediterranean coast of Almería",
  },
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    alt: "Ambiente de cafetería",
    altEn: "Café atmosphere",
  },
];

/**
 * Reseñas reales de Google (fuente pública agregada; textos literales).
 * Perfil: Heladería Alacant Roquetas · 4.1/5.
 */
export const reviews = [
  {
    author: "Antonio José Castillo",
    rating: 5,
    date: "23 Nov 2023",
    source: "Google",
    text: "Cuando piensas en Helados o en una Heladería en Roquetas, piensas en este local. La heladería con más solera de Roquetas, toda una vida abierta, y siempre las mismas caras, la misma dueña y los mismo trabajadores, sintoma de que hacen las cosas bien. Un motivo para ir a la Urba en cualquier momento del año, no solo en verano, y además no solo por sus helados Alacant que todos conocemos, si no que también por su bollería, pasteles y tartas. También hay buenos desayunos, con gran variedad de tostadas. 100% recomendable.",
    textEn:
      "When you think of ice cream in Roquetas, you think of this place. The most established ice cream shop in town — same faces, same owner, same staff. A reason to visit the urbanization any time of year, not only in summer. Great ice cream, pastries, cakes and breakfast toast options. 100% recommended.",
  },
  {
    author: "Yolanda Gonzalez",
    rating: 5,
    date: "06 Sep 2023",
    source: "Google",
    text: "El lugar es muy agradable y colorido, y los helados exquisitos y muy variados. A los helados tradicionales se suma una gama de helados veganos, elaborados sin leche, muy sabrosos y ligeros. Hay también bols con frutas y muesli, o con yogur griego, frutas y muesli, además de espectaculares copas de helado, repostería, bollería y tostadas para desayunar. En definitiva, un local muy recomendable.",
    textEn:
      "A lovely, colorful place with exquisite and varied ice cream. Alongside traditional flavors there are vegan, dairy-free options that are tasty and light. They also have fruit bowls with muesli or Greek yogurt, spectacular ice cream cups, pastry, bakery and toast for breakfast. Highly recommended.",
  },
  {
    author: "Paloma Foronda Escudero",
    rating: 5,
    date: "16 Aug 2023",
    source: "Google",
    text: "Mis padres compraron un apartamento en Roquetas hace unos diez años y no he ido a otra heladería en todo este tiempo. Helados riquísimos y con muchísimos sabores, café de calidad, grandísima variedad de tostadas y los bowls de frutas con toppings son una maravilla.",
    textEn:
      "My parents bought an apartment in Roquetas about ten years ago and I haven't been to another ice cream shop since. Delicious ice cream with so many flavors, quality coffee, a huge variety of toast and the fruit bowls with toppings are wonderful.",
  },
];
