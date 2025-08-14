<template>
  <header>
    <div class="logo">
      <img src="/rawty-shawty-2.png" alt="My Website" />
    </div>
    <nav>
      <a href="#" @click.prevent="$emit('openMenu')">menu</a>
      <a href="#">about</a>
      <a href="#">contact</a>
      <a href="#">facebook</a>
      <a href="#">twitter</a>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center; 
  padding: 0 15px;
  background-color: #0A3E36;
}

.logo img {
  height: 120px; 
  width: auto;
}

nav {
  display: flex;
  gap: 12px;
  font-family: 'Russo One', sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
}

nav a {
  text-decoration: none;
  color: #0A3E36;
  background-color: #FAF4E5;
  padding: 9px 15px;
  border-radius: 8px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

nav a:hover {
  background-color: #0A3E36;
  color: #FAF4E5;
  border: 2px solid #FAF4E5;
}
</style>
