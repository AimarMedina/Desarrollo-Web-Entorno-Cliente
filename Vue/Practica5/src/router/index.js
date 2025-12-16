import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ConsultasView from "@/views/ConsultasView.vue";
import TransaccionesView from "@/views/TransaccionesView.vue";

function isLoggedIn() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  return !!usuario;
}

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView },
  {
    path: "/consultas",
    name: "consultas",
    component: ConsultasView,
    meta: { requiresAuth: true }
  },
  {
    path: "/transacciones",
    name: "transacciones",
    component: TransaccionesView,
     meta: { requiresAuth: true }
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

 router.beforeEach((to, from, next) => {
   if (to.meta.requiresAuth && !isLoggedIn()) {
     next({ path: "/" });
   } else {
     next();
   }
 });

export default router;
