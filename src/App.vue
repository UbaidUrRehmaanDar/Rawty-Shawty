<template>
  <Header />

  <main>
    <router-view />
  </main>
  <About />
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

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Unbounded:wght@200..900&family=Zen+Dots&display=swap');

h1 {
  font-family: 'Zen Dots', sans-serif;
}

h2,
h3,
h4,
h5,
h6,
button {
  font-family: 'Unbounded', sans-serif;
}

p {
  font-family: 'Montserrat', sans-serif;
  font-weight: 550;
}

a,
button {
  text-decoration: none;
  font-family: 'Russo One', sans-serif;
  text-transform: uppercase;
}
</style>
