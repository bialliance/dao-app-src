import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dash',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/',
    name: 'Investors',
    component: () => import('../views/Investors.vue')
  },
  {
    path: '/managers',
    name: 'Managers',
    component: () => import('../views/Managers.vue')
  },
  {
    path: '/created',
    name: 'Created',
    component: () => import('../views/Created.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
