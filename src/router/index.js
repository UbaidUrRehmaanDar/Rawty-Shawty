import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Order from '../components/Order.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home, alias: ['/home'] },
  { path: '/order', name: 'Order', component: Order },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition

    // Smooth scroll to hash (e.g., #menu-section) on Home
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }

    return { top: 0, behavior: 'smooth' }
  }
})

export default router