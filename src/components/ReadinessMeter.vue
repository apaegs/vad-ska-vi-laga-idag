<script setup>
import { readiness, daysSince, maturityDays } from '../store.js'

defineProps({
    recipe: Object
})

function readinessColor(recipe) {
    const value = readiness(recipe)

    if (value < 34) {
        return '#6f665e'
    }
    if (value < 67) {
        return '#d98324'
    }
    return '#4a7c59'
}

function statusText(recipe) {
    const value = readiness(recipe)

    if (value >= 67) {
        return 'Dags igen'
    }
    if (value >= 34) {
        return 'Snart dags'
    }
    return 'Om ' + (maturityDays.value - daysSince(recipe)) + ' dagar'
}

function lastCookedText(recipe) {
    const days = daysSince(recipe)

    if (days === null) {
        return 'Aldrig lagad'
    }
    if (days === 0) {
        return 'Lagad idag'
    }
    if (days === 1) {
        return 'Lagad igår'
    }
    return 'Lagad för ' + days + ' dagar sedan'
}

</script>

<template>
    <div class="meter-row">
        <div class="meter">
            <div class="meter-fill"
                :style="{ width: readiness(recipe) + '%', backgroundColor: readinessColor(recipe) }">
            </div>
        </div>
        <span class="status" :style="{ color: readinessColor(recipe) }">{{ statusText(recipe) }}</span>
    </div>

    <p class="last-cooked">{{ lastCookedText(recipe) }}</p>
</template>

<style scoped>
.meter {
    height: 10px;
    background-color: var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    margin: 8px 0;
    flex: 1;
}

.meter-row {
    display: flex;
    align-items: center;
    gap: var(--space-s);
}

.meter-fill {
  height: 100%;
  transition: width 0.4s ease, background-color 0.4s ease;
}

.status {
    font-size: 0.8rem;
    white-space: nowrap;
}

.last-cooked {
    font-size: 0.8rem;
    color: var(--text-muted);
    margin-top: 4px;
}
</style>