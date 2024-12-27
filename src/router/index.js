import { createRouter, createWebHistory } from 'vue-router'
import Apresentação from "../views/Apresentação.vue"
import Home from "../views/Home.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Apresentação',
      component: Apresentação,
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
    },
  ],
})

export default router
