<template>
  <Header />
  <Cards />
  <Menu />
  <router-view />
  <Footer />
</template>

<script>
import Cards from './components/Cards.vue';
import Menu from './components/Menu.vue';
import Order from './components/Order.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Cards,
    Menu,
    Order,
    Header,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Russo+One&family=Zen+Dots&display=swap');

body {
  margin: 0;
  padding: 0;
  background-color: #FAF4E5;
}
</style>