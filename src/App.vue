<template>
  <Header />
  
  <main>
    <router-view /> 
  </main>
  
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
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

main {
  padding: 20px;
}
</style>
