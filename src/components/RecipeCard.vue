<script setup>
import { removeRecipe, markAsCooked } from '../store.js'
import ReadinessMeter from './ReadinessMeter.vue'

defineProps({
  recipe: Object
})

function categoryStyle(recipe) {
  if (recipe.category === 'veg') {
    return { icon: '🥬', bg: '#eef5f0', border: '#cfe3d7', text: '#38614a' }
  }
  if (recipe.category === 'fisk') {
    return { icon: '🐟', bg: '#eef2f8', border: '#cfdcec', text: '#2f5883' }
  }
  return { icon: '🥩', bg: '#faf0ec', border: '#ecd6cd', text: '#8f3d26' }
}

</script>

<template>
  <div class="recipe-card"
    :style="{ backgroundColor: categoryStyle(recipe).bg, borderColor: categoryStyle(recipe).border }">

    <div class="card-head">

      <span class="pill">⏱️ {{ recipe.minutes }} min</span>
      <span class="pill" :style="{ color: categoryStyle(recipe).text }">
        {{ categoryStyle(recipe).icon }} {{ recipe.category }}
      </span>

    </div>

    <div class="recipe-name">
      <h3>{{ recipe.name }}</h3>
    </div>

    <ReadinessMeter :recipe="recipe" />

    <div class="card-actions">
      <button @click="markAsCooked(recipe)">Lagade den</button>
      <button @click="removeRecipe(recipe)" class="ghost">Ta bort</button>
    </div>

  </div>
</template>

<style scoped>
.recipe-card {
  border: 2px solid var(--border);
  border-radius: var(--space-m);
  padding: var(--space-m);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.recipe-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05), 0 8px 20px rgba(0, 0, 0, 0.07);
}

h3 {
  margin-top: 0;
}

.card-actions {
  display: flex;
  gap: var(--space-s);
}

.card-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-s);
}

.pill {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 2px 8px;
  border-radius: 999px;
  background-color: var(--surface);
}

.recipe-name {
  text-align: center;
  margin-bottom: var(--space-m);
}

button {
  font-size: 0.75rem;
  padding: 5px 12px;
  border-radius: 999px;
}

.ghost {
  background-color: transparent;
  color: var(--text-muted);
  border: 1px solid var(--border);
}

.ghost:hover {
  background-color: transparent;
  color: var(--accent);
  border-color: var(--accent);
}
</style>