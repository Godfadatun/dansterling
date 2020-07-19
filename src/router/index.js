import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import routes from './route'

Vue.use(VueRouter)

// const routes = [
//   { name: 'dashboard', path: '/dashboard', component: () => import('../views/Dashboard.vue')},
//   { name: 'login', path: '/login', component: () => import('../views/Auth.vue')},
//   ]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL
})

export default router
