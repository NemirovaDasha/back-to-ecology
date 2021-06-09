import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/memo',
    name: 'Memo',
    component: () => import('../views/Memo.vue')
  },
  {
    path: '/things',
    name: 'Things',
    component: () => import('../views/Things.vue')
  },
  {
    path: '/rules',
    name: 'Rules',
    component: () => import('../views/Rules.vue')
  },
  {
    path: '/game',
    name: 'Game',
    component: () => import('../views/Game.vue')
  },
  {
    path: '/game-fabric',
    name: 'Fabric',
    component: () => import('../views/Fabric.vue')
  },
  {
    path: '/game-house',
    name: 'House',
    component: () => import('../views/House.vue')
  },
  {
    path: '/game-train',
    name: 'Train',
    component: () => import('../views/Train.vue')
  },
  {
    path: '/game-car',
    name: 'Car',
    component: () => import('../views/Car.vue')
  },
  {
    path: '*',
    name: 'Error',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  },
  routes
})

export default router
