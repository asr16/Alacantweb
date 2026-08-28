/** Los 14 alérgenos de declaración obligatoria (UE / España). */
export const ALLERGEN_IDS = [
  "gluten",
  "crustaceos",
  "huevos",
  "pescado",
  "cacahuetes",
  "soja",
  "lacteos",
  "frutos-cascara",
  "apio",
  "mostaza",
  "sesamo",
  "sulfitos",
  "altramuces",
  "moluscos",
] as const;

export type AllergenId = (typeof ALLERGEN_IDS)[number];

export type AllergenInfo = {
  id: AllergenId;
  labelEs: string;
  labelEn: string;
  /** Abreviatura visible en el icono */
  abbr: string;
};

export const allergenCatalog: Record<AllergenId, AllergenInfo> = {
  gluten: {
    id: "gluten",
    labelEs: "Gluten",
    labelEn: "Gluten",
    abbr: "G",
  },
  crustaceos: {
    id: "crustaceos",
    labelEs: "Crustáceos",
    labelEn: "Crustaceans",
    abbr: "Cr",
  },
  huevos: {
    id: "huevos",
    labelEs: "Huevos",
    labelEn: "Eggs",
    abbr: "H",
  },
  pescado: {
    id: "pescado",
    labelEs: "Pescado",
    labelEn: "Fish",
    abbr: "P",
  },
  cacahuetes: {
    id: "cacahuetes",
    labelEs: "Cacahuetes",
    labelEn: "Peanuts",
    abbr: "Ca",
  },
  soja: {
    id: "soja",
    labelEs: "Soja",
    labelEn: "Soy",
    abbr: "S",
  },
  lacteos: {
    id: "lacteos",
    labelEs: "Lácteos",
    labelEn: "Milk",
    abbr: "L",
  },
  "frutos-cascara": {
    id: "frutos-cascara",
    labelEs: "Frutos de cáscara",
    labelEn: "Tree nuts",
    abbr: "Fc",
  },
  apio: {
    id: "apio",
    labelEs: "Apio",
    labelEn: "Celery",
    abbr: "A",
  },
  mostaza: {
    id: "mostaza",
    labelEs: "Mostaza",
    labelEn: "Mustard",
    abbr: "M",
  },
  sesamo: {
    id: "sesamo",
    labelEs: "Sésamo",
    labelEn: "Sesame",
    abbr: "Se",
  },
  sulfitos: {
    id: "sulfitos",
    labelEs: "Sulfitos",
    labelEn: "Sulphites",
    abbr: "Su",
  },
  altramuces: {
    id: "altramuces",
    labelEs: "Altramuces",
    labelEn: "Lupin",
    abbr: "Al",
  },
  moluscos: {
    id: "moluscos",
    labelEs: "Moluscos",
    labelEn: "Molluscs",
    abbr: "Mo",
  },
};
