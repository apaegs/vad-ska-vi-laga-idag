import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Dagens förslag",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/alla-recept",
      name: "Alla recept",
      component: () => import("../views/RecipesView.vue"),
    },
  ],
});

router.afterEach((to) => {
  document.title = to.name + ' – Vad ska vi laga idag?'
});
export default router;
