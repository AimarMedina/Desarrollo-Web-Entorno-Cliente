import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ConsultasView from "@/views/ConsultasView.vue";
import TransaccionesView from "@/views/TransaccionesView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/consultas",
      name: "consultas",
      component: ConsultasView,
    },
    {
      path: "/transacciones",
      name: "transacciones",
      component: TransaccionesView,
    },
  ],
});

export default router;
