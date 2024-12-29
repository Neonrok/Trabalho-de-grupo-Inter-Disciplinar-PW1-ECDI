import { createRouter, createWebHistory } from 'vue-router'
import apresentação from "../views/Apresentação.vue"
import home from "../views/Home.vue"
import carrinho from '@/views/Carrinho.vue'
import fight_list from '@/views/fight_list.vue'
import forun_List from '@/views/Forun_List.vue'
import merch_List from '@/views/Merch_List.vue'
import profile from '@/views/profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Apresentação',
      component: apresentação,
    },
    {
      path: '/Home',
      name: 'Home',
      component: home,
    },
    {
      path: '/Car',
      name: 'Carrinho',
      component: carrinho,
    },
    {
      path:'/Fight_List',
      name:'Lutas',
      component:fight_list,
    },
    {
      path:'/Forun_List',
      name:'Foruns',
      component:forun_List,
    },
    {
      path:'/Merch_List',
      name:'Merch',
      component:merch_List,
    },
    {
      path:'/profile',
      name:'Profile',
      component:profile,
    }
  ],
})

export default router
