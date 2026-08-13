function resolveSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return (fromEnv || "https://heladeriaalacant.es").replace(/\/$/, "");
}

export const siteConfig = {
  name: "Heladería Alacant",
  description:
    "Más de 65 sabores de helado artesano, cafetería, gofres, crepes y pastelería en Roquetas de Mar. Tradición alicantina desde hace más de 50 años.",
  descriptionEn:
    "Over 65 artisan ice cream flavors, café, waffles, crepes and pastry in Roquetas de Mar. Alicante tradition for over 50 years.",
  url: resolveSiteUrl(),
  /**
   * Razón social y NIF/CIF: vacíos hasta que el cliente los facilite.
   * No mostrar en UI si están vacíos.
   */
  legalName: "",
  taxId: "",
  address: {
    street: "Avenida del Mediterráneo, 109",
    city: "Roquetas de Mar",
    province: "Almería",
    postalCode: "04740",
    country: "España",
    full: "Avenida del Mediterráneo, 109, 04740 Roquetas de Mar",
  },
  phone: "950 333 470",
  phoneHref: "tel:+34950333470",
  email: "heladeriaalacantroquetas@gmail.com",
  emailHref: "mailto:heladeriaalacantroquetas@gmail.com",
  instagram: "https://www.instagram.com/heladeriaalacantroquetas/",
  instagramHandle: "@heladeriaalacantroquetas",
  tiktok: "https://www.tiktok.com/@heladeriaalacantroquetas",
  tiktokHandle: "@heladeriaalacantroquetas",
  glovo: "https://glovoapp.com/es/es/roquetas-de-mar/stores/heladeria-alacant-roquetas",
  /** Ficha de Google Maps del local (CID). */
  googleMaps: "https://www.google.com/maps?cid=2396138620883418987",
  /** Misma ficha — el usuario ve valoración y reseñas. */
  googleReviews: "https://www.google.com/maps?cid=2396138620883418987",
  /** Coordenadas del local (mismas que el embed de Maps). */
  geo: {
    latitude: 36.732696,
    longitude: -2.618354,
  },
  googleMapsEmbed:
    "https://www.google.com/maps?q=Avenida+del+Mediterr%C3%A1neo+109,+04740+Roquetas+de+Mar&hl=es&z=17&output=embed",
  scheduleNote:
    "Horario orientativo. Puede variar en festivos; confirma por teléfono.",
  scheduleNoteEn:
    "Indicative hours. May vary on holidays; confirm by phone.",
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
  ctaPrimary: { href: "/carta" },
};

export const historyPreview = {
  title: "Nuestra historia",
  titleEn: "Our story",
  paragraphs: [
    "Más de 50 años endulzando momentos en Roquetas de Mar. Abrimos en junio de 1974 y seguimos siendo un negocio familiar con tradición, sabor y recuerdos.",
    "Aquellos niños que venían en los años 70 y 80 con sus padres hoy regresan con sus propios hijos y nietos para compartir la misma tradición.",
  ],
  paragraphsEn: [
    "Over 50 years sweetening moments in Roquetas de Mar. We opened in June 1974 and remain a family business of tradition, flavour and memories.",
    "The children who visited in the 70s and 80s with their parents now return with their own children and grandchildren to share the same tradition.",
  ],
};

export const aboutContent = {
  title: "Nuestra historia",
  titleEn: "Our story",
  subtitle: "Más de 50 años endulzando momentos en Roquetas de Mar",
  subtitleEn: "Over 50 years sweetening moments in Roquetas de Mar",
  intro: [
    "En pleno corazón de la avenida principal de la Urbanización de Roquetas de Mar —uno de los destinos más emblemáticos de Almería y Andalucía— se encuentra Heladería Alacant, un rincón lleno de tradición, sabor y recuerdos.",
    "Nuestras puertas se abrieron por primera vez en junio de 1974, coincidiendo con los inicios de la Urbanización. Desde entonces, hemos mantenido intacta nuestra pasión por el helado evolucionando año tras año para adaptarnos a las nuevas tendencias e incorporar productos novedosos sin perder nunca la esencia que nos vio nacer.",
  ],
  introEn: [
    "In the heart of the main avenue of the Roquetas de Mar Urbanization — one of the most emblematic destinations in Almería and Andalusia — you will find Heladería Alacant, a place full of tradition, flavour and memories.",
    "We first opened our doors in June 1974, at the beginnings of the Urbanization. Since then we have kept our passion for ice cream intact, evolving year after year to adapt to new trends and add new products without ever losing the essence that saw us born.",
  ],
  sections: [
    {
      title: "Un negocio familiar con corazón y tradición",
      titleEn: "A family business with heart and tradition",
      paragraphs: [
        "Desde 1989, la gerencia está en manos de Isabel Soriano, quien sigue al pie del cañón cada día para garantizar la máxima calidad y un trato cercano a cada visitante.",
        "Somos un negocio familiar con vocación de permanencia. Nos llena de orgullo ser un lugar generacional: aquellos niños que venían en los años 70 y 80 con sus padres, hoy regresan acompañados de sus propios hijos y nietos para compartir la misma tradición.",
      ],
      paragraphsEn: [
        "Since 1989, management has been in the hands of Isabel Soriano, who is still on the front line every day to guarantee the highest quality and a warm welcome for every guest.",
        "We are a family business built to last. We are proud to be a generational place: the children who came in the 70s and 80s with their parents now return with their own children and grandchildren to share the same tradition.",
      ],
    },
    {
      title: "Cincuenta años de historia y un futuro lleno de ilusión",
      titleEn: "Fifty years of history and a future full of hope",
      paragraphs: [
        "En 2024 celebramos nuestro 50º aniversario, consolidándonos como el establecimiento más antiguo que continúa con la misma actividad en la Urbanización de Roquetas de Mar. Este hito fue reconocido con un galardón entregado por el alcalde, Don Gabriel Amat; un homenaje que refleja el cariño y la confianza de generaciones de clientes y el esfuerzo de un equipo que lleva esta heladería en el corazón.",
        "Para reflejar todo lo que somos hoy, en 2025 renovamos nuestra imagen con un nuevo logotipo: el símbolo de una heladería con historia, sabor y mucho corazón, preparada para seguir endulzando el futuro.",
      ],
      paragraphsEn: [
        "In 2024 we celebrated our 50th anniversary, confirming ourselves as the oldest establishment that continues with the same activity in the Roquetas de Mar Urbanization. This milestone was recognised with an award presented by the mayor, Don Gabriel Amat — a tribute that reflects the affection and trust of generations of guests and the effort of a team that carries this ice cream shop in its heart.",
        "To reflect everything we are today, in 2025 we renewed our image with a new logo: the symbol of an ice cream shop with history, flavour and a great deal of heart, ready to keep sweetening the future.",
      ],
    },
  ],
  offerTitle: "Mucho más que helados",
  offerTitleEn: "Much more than ice cream",
  offerIntro:
    "En Heladería Alacant nos encanta adaptarnos a ti en cualquier momento del día. Abrimos todos los días para ofrecerte:",
  offerIntroEn:
    "At Heladería Alacant we love adapting to you at any time of day. We open every day to offer you:",
  offerItems: [
    {
      es: "Más de 65 sabores de helado elaborados para sorprender a todos los paladares.",
      en: "Over 65 ice cream flavours crafted to surprise every palate.",
    },
    {
      es: "Espectaculares copas de helado, batidos y refrescantes bebidas.",
      en: "Spectacular ice cream sundaes, milkshakes and refreshing drinks.",
    },
    {
      es: "Servicio de cafetería, desayunos y meriendas ideales para disfrutar en compañía.",
      en: "Café service, breakfasts and afternoon snacks ideal to enjoy with company.",
    },
    {
      es: "Una amplia variedad de productos pensados para hacer de tu visita una experiencia inolvidable.",
      en: "A wide variety of products designed to make your visit an unforgettable experience.",
    },
  ],
  closing: "¡Te esperamos en nuestra casa para seguir creando recuerdos juntos!",
  closingEn: "We look forward to welcoming you and creating more memories together!",
  timeline: [
    {
      year: "1974",
      text: "Abrimos nuestras puertas en junio, coincidiendo con los inicios de la Urbanización.",
      textEn: "We opened our doors in June, at the beginnings of the Urbanization.",
    },
    {
      year: "1989",
      text: "Isabel Soriano asume la gerencia y sigue al pie del cañón cada día.",
      textEn: "Isabel Soriano takes over management and remains on the front line every day.",
    },
    {
      year: "2024",
      text: "Celebramos el 50º aniversario con un galardón del alcalde Don Gabriel Amat.",
      textEn: "We celebrated our 50th anniversary with an award from mayor Don Gabriel Amat.",
    },
    {
      year: "2025",
      text: "Renovamos nuestra imagen con un nuevo logotipo lleno de historia y corazón.",
      textEn: "We renewed our image with a new logo full of history and heart.",
    },
  ],
};

/**
 * Fotos antiguas para el carrusel de historia (`public/images/historia/`).
 */
export const historyGallery: {
  src: string;
  width: number;
  height: number;
  alt: string;
  altEn: string;
  caption?: string;
  captionEn?: string;
}[] = [
  {
    src: "/images/historia/inicios-heladeria-1.webp",
    width: 1600,
    height: 1123,
    alt: "Heladería Alacant en sus inicios",
    altEn: "Heladería Alacant in its early years",
    caption: "Los inicios en la Urbanización de Roquetas de Mar",
    captionEn: "The early years in the Roquetas de Mar Urbanization",
  },
  {
    src: "/images/historia/inicios-heladeria-2.webp",
    width: 1600,
    height: 1184,
    alt: "El local de Heladería Alacant en sus primeros años",
    altEn: "The Heladería Alacant shop in its first years",
    caption: "Los primeros años del negocio familiar",
    captionEn: "The first years of the family business",
  },
  {
    src: "/images/historia/inicios-heladeria-3.webp",
    width: 1200,
    height: 1600,
    alt: "Interior de Heladería Alacant en sus inicios",
    altEn: "Interior of Heladería Alacant in its early years",
    caption: "Así era Alacant al principio",
    captionEn: "This is how Alacant looked at the beginning",
  },
  {
    src: "/images/historia/isabel-en-sus-inicios-de-heladera.webp",
    width: 1200,
    height: 1600,
    alt: "Isabel Soriano en sus inicios como heladera",
    altEn: "Isabel Soriano in her early days as an ice-cream maker",
    caption: "Isabel Soriano en sus inicios",
    captionEn: "Isabel Soriano in her early days",
  },
  {
    src: "/images/historia/heladeria-alacant-en-los-90.webp",
    width: 960,
    height: 669,
    alt: "Heladería Alacant en los años 90",
    altEn: "Heladería Alacant in the 1990s",
    caption: "Los años 90",
    captionEn: "The 1990s",
  },
  {
    src: "/images/historia/plantilla-2002.webp",
    width: 1600,
    height: 1200,
    alt: "El equipo de Heladería Alacant en 2002",
    altEn: "The Heladería Alacant team in 2002",
    caption: "Plantilla, 2002",
    captionEn: "The team, 2002",
  },
  {
    src: "/images/historia/plantilla-2014.webp",
    width: 960,
    height: 638,
    alt: "El equipo de Heladería Alacant en 2014",
    altEn: "The Heladería Alacant team in 2014",
    caption: "Plantilla, 2014",
    captionEn: "The team, 2014",
  },
  {
    src: "/images/historia/plantilla-2017.webp",
    width: 540,
    height: 960,
    alt: "El equipo de Heladería Alacant en 2017",
    altEn: "The Heladería Alacant team in 2017",
    caption: "Plantilla, 2017",
    captionEn: "The team, 2017",
  },
  {
    src: "/images/historia/plantilla-2018.webp",
    width: 960,
    height: 720,
    alt: "El equipo de Heladería Alacant en 2018",
    altEn: "The Heladería Alacant team in 2018",
    caption: "Plantilla, 2018",
    captionEn: "The team, 2018",
  },
  {
    src: "/images/historia/2020-despues-del-covid.webp",
    width: 720,
    height: 960,
    alt: "Heladería Alacant en 2020, después del COVID",
    altEn: "Heladería Alacant in 2020, after COVID",
    caption: "2020, después del COVID",
    captionEn: "2020, after COVID",
  },
  {
    src: "/images/historia/50-aniversario.webp",
    width: 1200,
    height: 1600,
    alt: "Celebración del 50 aniversario de Heladería Alacant",
    altEn: "Heladería Alacant 50th anniversary celebration",
    caption: "50º aniversario, 2024",
    captionEn: "50th anniversary, 2024",
  },
];

export const featureCards = [
  {
    title: "Helados artesanos",
    titleEn: "Artisan ice cream",
    description: "Más de 65 sabores: clásicos, frutas, turrón, trufa y creaciones de temporada.",
    descriptionEn: "Over 65 flavors: classics, fruit, turrón, truffle and seasonal creations.",
    href: "/carta#helados",
    image: "/images/tarrina-alacant.webp",
    imageAlt: "Tarrina de helado artesano de Heladería Alacant",
    imageAltEn: "Artisan ice cream tub from Heladería Alacant",
  },
  {
    title: "Cafetería",
    titleEn: "Café",
    description: "Frapés, cafés especiales, batidos y smoothies para cualquier momento del día.",
    descriptionEn: "Frappés, specialty coffees, shakes and smoothies for any time of day.",
    href: "/carta#cafeteria",
    image: "/images/heladeria-local.webp",
    imageAlt: "Interior de Heladería Alacant en Roquetas de Mar",
    imageAltEn: "Heladería Alacant interior in Roquetas de Mar",
  },
  {
    title: "Gofres y crepes",
    titleEn: "Waffles & crepes",
    description: "Gofres, crepes y tortitas recién hechos, con salsas y complementos a elegir.",
    descriptionEn: "Freshly made waffles, crepes and pancakes with sauces and toppings to choose.",
    href: "/carta#gofres-crepes",
    image: "/carta/dulce/pagina-1.webp",
    imageAlt: "Carta dulce: gofres, crepes y tortitas",
    imageAltEn: "Sweet menu: waffles, crepes and pancakes",
  },
  {
    title: "Postres",
    titleEn: "Desserts",
    description: "Coulant, brownie con helado y donut especial, recién hechos.",
    descriptionEn: "Coulant, brownie with ice cream and our special donut, freshly made.",
    href: "/carta#pasteleria",
    image: "/carta/principal/pagina-1.webp",
    imageAlt: "Selección de la carta de Heladería Alacant",
    imageAltEn: "A selection from the Heladería Alacant menu",
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
