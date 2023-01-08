import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from "@/views/CartView";
import ChipsekView from "../views/ChipsekView.vue"
import UditoView from "../views/UditoView.vue"
import CsokiView from "../views/CsokiView.vue"



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path:'/ropogtatnivalok',
    name: 'chipsek',
    component: ChipsekView
  }
  ,
  {
    path:'/uditoitalok',
    name: 'uditok',
    component: UditoView
  }
  ,
  {
    path:'/csokoladek',
    name: 'csokik',
    component: CsokiView
  }
]

const router = new VueRouter({
  routes
})

export default router
