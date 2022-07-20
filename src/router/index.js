import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Course from '../views/Course.vue'
import Favourites from '../views/Favourites.vue'
import Cart from '../views/Cart.vue'
import Member from '../views/Member.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/course',
      name: 'course',
      component: Course
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: Favourites
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    }
  ]
})

export default router
