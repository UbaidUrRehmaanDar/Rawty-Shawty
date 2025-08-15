<template>
  <div class="container">
    <div class="left">
      <h1>About Us</h1>
      <p>Welcome to the About page!</p>
      <p>I'm making Rawty Shawty because I want a fun and modern food website that feels fresh and unique...</p>
    </div>

    <div class="right">
      <h3>Connect with me now: </h3>
      <a href="https://ubaidurrehmaandar.github.io/ubaid-portfolio/">My Portfolio</a>
      <a href="https://github.com/ubaidurrehmaandar">My GitHub</a>
      <a href="https://www.linkedin.com/in/ubaid-ur-rehman-dar-74a56429a/">My LinkedIn</a>
    </div>
  </div>
</template>


<script setup>

</script>

<style scoped>
.container {
  display: flex;
  gap: 20px;
  padding: 40px;
  font-family: 'Inter', sans-serif;
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

a {
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

a:hover {
  background-color: #0A3E36;
  color: #FAF4E5;
  border: 2px solid #FAF4E5;
}
</style>
