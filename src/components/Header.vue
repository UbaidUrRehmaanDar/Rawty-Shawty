<template>
  <header>
    <div class="logo">
      <router-link to="/" aria-label="Home" class="logo-link">
        <img src="/rawty-shawty-2.png" alt="Rawty Shawty Home" class="logo-background" />
        <img src="/rawty-shawty-text.png" alt="Rawty Shawty Text" class="logo-text" />
        <div class="green-background"></div>
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
  overflow: visible; /* Allow the text to overflow when it pops out */
}

.logo {
  position: relative;
  z-index: 1001;
}

.logo-link {
  display: inline-block;
  position: relative;
}

.logo-background {
  height: 84px;
  width: auto;
  display: block;
  transition: opacity 0.3s ease;
}

.green-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0A3E36;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 4px; /* Optional: add slight rounding */
}

.logo-text {
  position: absolute;
  top: 0;
  left: 0;
  height: 84px;
  width: auto;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  filter: drop-shadow(0 0 0px transparent);
  z-index: 2;
}

/* Hover effects */
.logo-link:hover .logo-background {
  opacity: 0;
}

.logo-link:hover .green-background {
  opacity: 1;
}

.logo-link:hover .logo-text {
  transform: translateY(-12px) scale(1.08);
  filter: drop-shadow(0 10px 25px rgba(250, 244, 229, 0.6))
          drop-shadow(0 0 20px rgba(250, 244, 229, 0.8))
          drop-shadow(0 0 40px rgba(250, 244, 229, 0.4))
          drop-shadow(0 0 60px rgba(250, 244, 229, 0.2));
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