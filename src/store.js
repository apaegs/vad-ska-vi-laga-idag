import { ref } from "vue";
import recipeData from "./data/recipes.json";

export const recipes = ref(recipeData);
export const maturityDays = ref(14);
export const suggestion = ref(null);

export function removeRecipe(recipe) {
  recipes.value = recipes.value.filter((i) => i.id !== recipe.id);
}

export function addRecipe(name, category, minutes) {
  recipes.value.push({
    id: Date.now(),
    name,
    category,
    minutes,
    lastCooked: null,
  });
}

export function markAsCooked(recipe) {
  recipe.lastCooked = new Date().toISOString().slice(0, 10);
}

export function readiness(recipe) {
  const days = daysSince(recipe);
  if (days === null) {
    return 100;
  }
  return Math.min(100, Math.round((days / maturityDays.value) * 100));
}

export function daysSince(recipe) {
  if (recipe.lastCooked === null) {
    return null;
  }
  return Math.floor(
    (Date.now() - new Date(recipe.lastCooked)) / (1000 * 60 * 60 * 24),
  );
}

export function newSuggestion() {
  const mogna = recipes.value.filter((r) => readiness(r) >= 50);
  const urval = mogna.length > 0 ? mogna : recipes.value;

  const index = Math.floor(Math.random() * urval.length);
  suggestion.value = urval[index];
}
