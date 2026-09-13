<script setup>
import { suggestion, newSuggestion } from '../store.js'
import RecipeCard from '../components/RecipeCard.vue'

if (suggestion.value === null) {
    newSuggestion()
}

</script>

<template>
    <div class="home">
        <h2>Dagens förslag</h2>

        <div v-if="suggestion" class="suggestion">
            <RecipeCard :recipe="suggestion" />
        </div>
        <button @click="newSuggestion">Ge mig ett nytt förslag</button>
    </div>
</template>

<style scoped>
.home {
  max-width: 420px;
  margin: 0 auto;
}

.home h2 {
  text-align: center;
  margin-bottom: var(--space-l);
}

.home button {
  display: block;
  margin: var(--space-m) auto 0;
}
</style>