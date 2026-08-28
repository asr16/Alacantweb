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
  color: string;
};

export const allergenCatalog: Record<AllergenId, AllergenInfo> = {
  gluten: {
    id: "gluten",
    labelEs: "Gluten",
    labelEn: "Gluten",
    abbr: "G",
    color: "#c4a035",
  },
  crustaceos: {
    id: "crustaceos",
    labelEs: "Crustáceos",
    labelEn: "Crustaceans",
    abbr: "Cr",
    color: "#4a90a4",
  },
  huevos: {
    id: "huevos",
    labelEs: "Huevos",
    labelEn: "Eggs",
    abbr: "H",
    color: "#e8c547",
  },
  pescado: {
    id: "pescado",
    labelEs: "Pescado",
    labelEn: "Fish",
    abbr: "P",
    color: "#5b8fc7",
  },
  cacahuetes: {
    id: "cacahuetes",
    labelEs: "Cacahuetes",
    labelEn: "Peanuts",
    abbr: "Ca",
    color: "#c4783a",
  },
  soja: {
    id: "soja",
    labelEs: "Soja",
    labelEn: "Soy",
    abbr: "S",
    color: "#7aad4a",
  },
  lacteos: {
    id: "lacteos",
    labelEs: "Lácteos",
    labelEn: "Milk",
    abbr: "L",
    color: "#6b8cae",
  },
  "frutos-cascara": {
    id: "frutos-cascara",
    labelEs: "Frutos de cáscara",
    labelEn: "Tree nuts",
    abbr: "Fc",
    color: "#8b6914",
  },
  apio: {
    id: "apio",
    labelEs: "Apio",
    labelEn: "Celery",
    abbr: "A",
    color: "#6a9e5a",
  },
  mostaza: {
    id: "mostaza",
    labelEs: "Mostaza",
    labelEn: "Mustard",
    abbr: "M",
    color: "#d4a017",
  },
  sesamo: {
    id: "sesamo",
    labelEs: "Sésamo",
    labelEn: "Sesame",
    abbr: "Se",
    color: "#b8956b",
  },
  sulfitos: {
    id: "sulfitos",
    labelEs: "Sulfitos",
    labelEn: "Sulphites",
    abbr: "Su",
    color: "#9b59b6",
  },
  altramuces: {
    id: "altramuces",
    labelEs: "Altramuces",
    labelEn: "Lupin",
    abbr: "Al",
    color: "#e67e22",
  },
  moluscos: {
    id: "moluscos",
    labelEs: "Moluscos",
    labelEn: "Molluscs",
    abbr: "Mo",
    color: "#3498db",
  },
};
