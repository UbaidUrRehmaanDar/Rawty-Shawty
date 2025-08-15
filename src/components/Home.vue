<template>
  <Cards />
  <Menu />
</template>

<script>
import Cards from './Cards.vue'
import Menu from './Menu.vue'
import About from './About.vue'

export default {
  name: 'Home',
  components: {
    Cards,
    Menu,
    About
  }
}
</script>