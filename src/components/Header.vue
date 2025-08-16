<template>
  <header>
    <div class="logo">
      <router-link to="/" aria-label="Home">
        <img src="/rawty-shawty-2.png" alt="Rawty Shawty Home" />
      </router-link>
    </div>
    <nav>
      <router-link to="/" exact :class="{ 'hide-active': isMenuActive }">Home</router-link>
      <a href="#" @click.prevent="scrollToMenu" :class="{ active: isMenuActive }">menu</a>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">contact</router-link>
      <router-link to="/order" class="order-link">order</router-link>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const isMenuActive = ref(false)

const scrollToMenu = () => {
  if (window.location.pathname === '/') {
    setTimeout(() => {
      const menuSection = document.getElementById('menu-section')
      if (menuSection) {
        menuSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }, 100)
  } else {
    router.push('/').then(() => {
      setTimeout(() => {
        const menuSection = document.getElementById('menu-section')
        if (menuSection) {
          menuSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }, 300)
    })
  }
}

const checkMenuInView = () => {
  if (route.path !== '/') {
    isMenuActive.value = false
    return
  }
  
  const menuSection = document.getElementById('menu-section')
  if (menuSection) {
    const rect = menuSection.getBoundingClientRect()
    const windowHeight = window.innerHeight
    
    // Menu is active if it's in the viewport
    isMenuActive.value = rect.top <= windowHeight * 0.3 && rect.bottom >= 0
  }
}

onMounted(() => {
  window.addEventListener('scroll', checkMenuInView)
  checkMenuInView() // Check initial state
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkMenuInView)
})
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  background-color: #0A3E36;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo a {
  display: inline-block;
}

.logo img {
  height: 84px;
  width: auto;
}

nav {
  display: flex;
  gap: 12px;
  letter-spacing: 1px;
}

nav a {
  text-decoration: none;
  color: #0A3E36;
  background-color: #FAF4E5;
  padding: 8px 14px;         
  border-radius: 8px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;
}

nav a:hover,
nav a.router-link-active:not(.hide-active),
nav a.active {
  background-color: #0A3E36;
  color: #FAF4E5;
  border: 2px solid #FAF4E5;
}

nav a.hide-active.router-link-active {
  background-color: #FAF4E5;
  color: #0A3E36;
  border: 2px solid transparent;
}
</style>