<template>
  <router-link to="/" class="back-button">
    <span class="material-icons">arrow_back</span>
  </router-link>
  <div class="container">
    <div class="left">
      <h1>About Us</h1>
      <p>Welcome to the About page!</p>
      <p>I'm making Rawty Shawty because I want a fun and modern food website that feels fresh and unique. It's my personal project to practice and improve my web development skills while building something creative. I want to make a site that's easy to use, looks stylish, and stands out from typical food websites. This project is also a way for me to try new designs, learn better coding techniques, and show my ideas in a real, working product.</p>
    </div>

    <div class="right">
      <h1>Connect with me now: </h1>
      <a href="https://ubaidurrehmaandar.github.io/ubaid-portfolio/" class="anc">My Portfolio</a>
      <a href="https://github.com/ubaidurrehmaandar"class="anc">My GitHub</a>
      <a href="https://www.linkedin.com/in/ubaid-ur-rehman-dar-74a56429a/"class="anc">My LinkedIn</a>
    </div>
  </div>
</template>


<script setup>

</script>

<style scoped>

.back-button {
  position: absolute;
  left: 20px;
  text-decoration: none;
  color: #FAF4E5;
  background-color: #0A3E36;
  padding: 10px 15px;
  border-radius: 8px;
  border: 2px solid #FAF4E5;
  font-family: 'Russo One', sans-serif;
  font-size: 14px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 5px;
}

.back-button:hover {
  background-color: #FAF4E5;
  color: #0A3E36;
  border: 2px solid #0A3E36;
}

.material-icons {
  font-size: 30px;
}

.container {
  display: flex;
  gap: 20px;
  padding: 70px;
  margin-top: 30px;
}

.left,
.right {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.left {
  flex: 2;
  background-color: #fcedcf;
  color: #0A3E36;
}

.right {
  flex: 1;
  background-color: #0A3E36;
  color: #FAF4E5;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 15px;
}

h1,
h3 {
  font-family: 'Russo One', sans-serif;
}

.left p {
  line-height: 1.6;
}

.anc {
  text-decoration: none;
  color: #0A3E36;
  background-color: #FAF4E5;
  padding: 12px 20px;
  border-radius: 8px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  font-family: 'Russo One', sans-serif;
  display: inline-block;
  width: 180px;
  text-align: center;
}

.anc:hover {
  background-color: #0A3E36;
  color: #FAF4E5;
  border: 2px solid #FAF4E5;
}


</style>
