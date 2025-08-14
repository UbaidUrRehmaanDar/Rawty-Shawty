import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Order from '../components/Order.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router