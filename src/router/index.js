import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Course from '../views/Course.vue'
import Favourites from '../views/Favourites.vue'
import Cart from '../views/Cart.vue'
import Member from '../views/Member.vue'
import Contact from '../views/Contact.vue'
import CreateMember from '../views/CreateMember.vue'
import LoginMember from '../views/LoginMembers.vue'
import EditMember from '../views/EditMember.vue'
import BuyAdvertiser from '../views/BuyAdvertiser.vue'


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
    },
    
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/createmember',
      name: 'createmember',
      component: CreateMember
    },
    {
      path: '/loginmember',
      name: 'loginmember',
      component: LoginMember
    },
    {
      path: '/editmember',
      name: 'editmember',
      component: EditMember
    },
    {
      path: '/buyadvertiser',
      name: 'buyadvertiser',
      component: BuyAdvertiser
    }
  ]
})

export default router
