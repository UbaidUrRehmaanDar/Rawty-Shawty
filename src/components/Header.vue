<template>
  <header>
    <div class="logo">
      <router-link to="/" aria-label="Home">
        <img src="/rawty-shawty-2.png" alt="Rawty Shawty Home" />
      </router-link>
    </div>
    <nav>
      <router-link to="/" exact>Home</router-link>
      <a href="#" @click.prevent="scrollToMenu">menu</a>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">contact</router-link>
      <router-link to="/order" class="order-link">order</router-link>

    </nav>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

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
nav a.router-link-active {
  background-color: #0A3E36;
  color: #FAF4E5;
  border: 2px solid #FAF4E5;
}
</style>