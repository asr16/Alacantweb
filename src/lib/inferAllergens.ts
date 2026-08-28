import type { AllergenId } from "@/data/allergens";
import { ALLERGEN_IDS } from "@/data/allergens";
import type { MenuItem } from "@/data/menu";

const VAGUE_DESCRIPTION =
  /\b(combinaci[oó]n de sabores|sinfon[ií]a de sabores|elige tu sabor|a elegir|a tu gusto|capricho de|alegre combinaci[oó]n|postre italiano en su versi[oó]n refrescante)\b/i;

/** Reglas por ingredientes habituales en la carta (ES + EN). */
const INFERENCE: Record<AllergenId, RegExp> = {
  gluten: /\b(galleta|galletas|oreo|cookies|lotus|barquillo|barquillos|tostada|tostadas|\bpan\b|crepe|crapes|gofre|gofres|muesli|nutella|kinder|bizcocho|waffle|cheesecake|filipinos|chips ahoy|turr[oó]n|brownie|galleton|rebozado|mollete|molde|semillas|r[uú]stico|biscuit)\b/i,
  crustaceos: /\b(crust[aá]ceo|gamba|langostino|camar[oó]n|shrimp|prawn)\b/i,
  huevos: /\b(huevo|huevos|mayonesa|mayonnaise|merengue|tortilla)\b/i,
  pescado: /\b(at[uú]n|salm[oó]n|pescado|anchoa|boquer[oó]n|tuna|salmon|fish|smoked salmon)\b/i,
  cacahuetes: /\b(cacahuete|cacahuetes|mantequilla de cacahuete|crema de cacahuete|peanut)\b/i,
  soja: /\b(soja|tofu|edamame|\bsoy\b|leche de soja)\b/i,
  lacteos: /\b(helado|nata|yogur|yogurt|leche|merengada|mascarpone|philadelphia|queso|mantequilla|batido|frapp[eé]|milkshake|jarrita|stracciatella|vainilla|chocolate|tiramis[uú]|lor[eé]nzana|burgos|roquefort|cabra|nocilla|dulce de leche|moka|capuccino|cappuccino|colacao|cacau|milk|cream|cheese|whipped cream|ice cream|smoothie bowl|york|ib[eé]rico|sobrasada|pat[eé]|jam[oó]n|granizado(?! de lim[oó]n| de caf[eé])|horchata|leche preparada|bomb[oó]n batido)\b/i,
  "frutos-cascara": /\b(nueces?|avellana|almendra|pistacho|pi[nñ]ones|pecan|macadamia|frutos secos|walnut|almond|hazelnut)\b/i,
  apio: /\b(apio|celery)\b/i,
  mostaza: /\b(mostaza|mustard)\b/i,
  sesamo: /\b(s[eé]samo|sesame)\b/i,
  sulfitos: /\b(sulfito|vino|whisky|licor|liqueur|bañado en licor)\b/i,
  altramuces: /\b(altramuz|altramuces|lupin)\b/i,
  moluscos: /\b(molusco|calamar|pulpo|mejill[oó]n|ostra|mussel|squid|octopus)\b/i,
};

/** Base por categoría cuando la descripción es genérica (p. ej. copas de helado). */
export const CATEGORY_DEFAULT_ALLERGENS: Partial<Record<string, AllergenId[]>> = {
  copas: ["lacteos"],
  batidos: ["lacteos"],
  cafeteria: ["lacteos"],
  templada: ["lacteos"],
  "bowls-yogur": ["lacteos"],
  pasteleria: ["gluten", "lacteos", "huevos"],
};

function itemText(item: MenuItem) {
  return [item.name, item.nameEn, item.description, item.descriptionEn]
    .filter(Boolean)
    .join(" ");
}

function isVagueItem(item: MenuItem) {
  const text = itemText(item);
  return (
    item.allergensVariable === true ||
    VAGUE_DESCRIPTION.test(text) ||
    /\b(tu gusto|your way|build your own|personaliza)\b/i.test(text)
  );
}

function inferFromText(text: string): AllergenId[] {
  const found: AllergenId[] = [];
  for (const id of ALLERGEN_IDS) {
    if (INFERENCE[id].test(text)) found.push(id);
  }
  return found;
}

function uniqueSorted(ids: AllergenId[]) {
  return [...new Set(ids)].sort(
    (a, b) => ALLERGEN_IDS.indexOf(a) - ALLERGEN_IDS.indexOf(b),
  );
}

/** Alérgenos a mostrar para un artículo de la carta interactiva. */
export function getMenuItemAllergens(
  item: MenuItem,
  categoryId: string,
): { allergens: AllergenId[]; variable: boolean } {
  if (item.allergensVariable || isVagueItem(item)) {
    return { allergens: [], variable: true };
  }

  if (item.allergens) {
    return { allergens: uniqueSorted(item.allergens), variable: false };
  }

  const text = itemText(item);
  let allergens = inferFromText(text);

  const categoryDefaults = CATEGORY_DEFAULT_ALLERGENS[categoryId];
  if (categoryDefaults && (allergens.length === 0 || text.length < 48)) {
    allergens = uniqueSorted([...allergens, ...categoryDefaults]);
  }

  return { allergens: uniqueSorted(allergens), variable: false };
}
