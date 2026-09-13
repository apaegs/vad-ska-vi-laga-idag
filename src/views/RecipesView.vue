<script setup>
import { ref, computed } from 'vue'
import { recipes, addRecipe, readiness } from '../store.js'
import RecipeCard from '../components/RecipeCard.vue'
const newName = ref('')
const newCategory = ref('kött')
const newMinutes = ref(30)
const showDetails = ref(false)
const sortBy = ref('readiness')

const sortedRecipes = computed(() => {
     const list = [...recipes.value]

     if (sortBy.value === 'name') {
          return list.sort((a, b) => a.name.localeCompare(b.name, 'sv'))
     }

     if (sortBy.value === 'minutes') {
          return list.sort((a, b) => a.minutes - b.minutes)
     }

     if (sortBy.value === 'category') {
          return list.sort((a, b) => a.category.localeCompare(b.category, 'sv'))
     }

     return list.sort((a, b) => readiness(b) - readiness(a))
})

function handleSubmit() {
     const nameTrimmed = newName.value.trim()
     if (nameTrimmed === '') {
          return
     }

     addRecipe(nameTrimmed, newCategory.value, newMinutes.value)
     newName.value = ''
}
</script>

<template>
     <h2>Alla recept</h2>

     <section class="add-panel">
          <h3>Lägg till ett nytt recept</h3>
          <form @submit.prevent="handleSubmit">
               <input v-model="newName" type="text" placeholder="Vad heter rätten?" />

               <select v-model="newCategory">
                    <option value="kött">Kött</option>
                    <option value="veg">Vegetariskt</option>
                    <option value="fisk">Fisk</option>
               </select>
               <button type="submit">Lägg till</button>

               <button type="button" class="toggle" @click="showDetails = !showDetails">
                    {{ showDetails ? 'Dölj detaljer' : 'Fler detaljer' }}
               </button>

               <div v-if="showDetails">
                    <label>
                         Minuter:
                         <input v-model.number="newMinutes" type="number" />
                    </label>
               </div>

          </form>
     </section>

     <div class="sort-row">
          <label>
               Sortera:
               <select v-model="sortBy">
                    <option value="readiness">Mognad</option>
                    <option value="name">Namn A–Ö</option>
                    <option value="minutes">Tid</option>
                    <option value="category">Kategori</option>
               </select>
          </label>
     </div>

     <ul>
          <li v-for="recipe in sortedRecipes" :key="recipe.id">
               <RecipeCard :recipe="recipe" />
          </li>
     </ul>
</template>

<style scoped>
h2 {
     text-align: center;
}

ul {
     display: grid;
     grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
     gap: var(--space-m);
}

form {
     display: flex;
     flex-wrap: wrap;
     gap: var(--space-s);
     align-items: center;
}

form input[type="text"] {
  flex: 1;
  min-width: 12rem;
}

form>div {
     flex-basis: 100%;
}

.sort-row {
     display: flex;
     justify-content: flex-end;
     margin: var(--space-l) 0 var(--space-m);
}

.toggle {
     background-color: transparent;
     color: var(--text-muted);
     border: 1px solid var(--border);
}

.toggle:hover {
     background-color: transparent;
     color: var(--accent);
     border-color: var(--accent);
}

.add-panel {
  background-color: var(--panel);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: var(--space-m);
  margin: var(--space-l) 0;
}

.add-panel h3 {
  margin-top: 0;
  margin-bottom: var(--space-m);
  font-size: 1rem;
}
</style>