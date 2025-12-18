import { createRouter, createWebHistory } from 'vue-router'
import Home  from "/src/views/HomeView.vue"
import Login from "/src/views/LoginView.vue"
import MisPedidos from "/src/views/MisPedidosView.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/misPedidos",
      name: "misPedidos",
      component: MisPedidos
    },
  ],
})

export default router
