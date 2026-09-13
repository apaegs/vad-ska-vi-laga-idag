<script setup>
import { maturityDays } from './store';
</script>

<template>
  <header>
    <h1>Vad ska vi laga idag?</h1>
    <p>
      Lagra alla dina favoritrecept och få förslag varje dag!
    </p>
  </header>


  <nav>
    <ul>
      <li>
        <RouterLink to="/">Dagens förslag</RouterLink>
      </li>
      <li>
        <RouterLink to="/alla-recept">Alla recept</RouterLink>
      </li>
    </ul>

    <div class="settings">
      <label>Samma rätt igen efter
        <input v-model.number="maturityDays" type="number" min="1" max="90" />
        <span> dagar</span>
      </label>
    </div>
  </nav>

  <RouterView />
</template>

<style scoped>
nav {
  margin-bottom: var(--space-l);
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

li {
  display: inline;
  margin: var(--space-m);
  padding: 0;
}

.settings {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-s);
  margin-top: var(--space-s);
  font-size: 0.9rem;
  color: var(--text-muted);
}

.settings input {
  width: 4rem;
  text-align: center;
}
</style>
