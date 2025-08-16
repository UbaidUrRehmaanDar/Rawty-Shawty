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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Unbounded:wght@200..900&family=Zen+Dots&display=swap');


::-webkit-scrollbar {
  width: 18px;
}

::-webkit-scrollbar-track {
  background: rgba(250, 244, 229, 0.8);
  border-radius: 20px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #0A3E36, #164A41);
  border-radius: 20px;
  border: 3px solid #FAF4E5;
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 0 15px rgba(10, 62, 54, 0.2);
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(45deg, #164A41, #1F5A4F);
  box-shadow: 0 0 25px rgba(10, 62, 54, 0.4);
  transform: scale(1.1);
}

::-webkit-scrollbar-button { display: none; }

html, * { 
  scroll-behavior: smooth; 
  -webkit-overflow-scrolling: touch; 
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  background-color: #FAF4E5;
}

main {
  padding: 20px;
}

h1 {
  font-family: 'Zen Dots', sans-serif;
}

h2,
h3,
h4,
h5,
h6 {
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
