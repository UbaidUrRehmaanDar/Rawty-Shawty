import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Order from '../components/Order.vue'
import About from '../components/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router