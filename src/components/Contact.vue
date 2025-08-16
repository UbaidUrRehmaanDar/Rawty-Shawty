<template> 
  <router-link to="/" class="back-button">
    <span class="material-icons">arrow_back</span>
  </router-link>
  <div class="container">
    <div class="left">
      <h1>Contact Us</h1>
      <p>Get in touch with Rawty Shawty! We'd love to hear from you.</p>

      <div class="contact-info">
        <div class="contact-item">
          <h3><span class="material-icons">location_on</span> Address</h3>
          <p>Lahore, Pakistan</p>
        </div>

        <div class="contact-item">
          <h3><span class="material-icons">phone</span> Phone</h3>
          <p>0340-4835034</p>
        </div>

        <div class="contact-item">
          <h3><span class="material-icons">email</span> Email</h3>
          <p>ubaidurrehmaan2004@gmail.com<br>
            hello@rawtyshawty.com<br>
            orders@rawtyshawty.com</p>
        </div>

        <div class="contact-item">
          <h3><span class="material-icons">access_time</span> Hours</h3>
          <p>Monday - Thursday: 11:00 AM - 10:00 PM<br>
            Friday - Saturday: 11:00 AM - 11:00 PM<br>
            Sunday: 12:00 PM - 9:00 PM</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container {
  display: flex;
  gap: 20px;
  font-family: 'Inter', sans-serif;
  flex-wrap: wrap;
  padding: 70px;
  margin-top: 30px;
}

.left {
  flex: 2;
  background-color: #fcedcf;
  color: #0A3E36;
  min-width: 300px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1,
h3 {
  font-family: 'Russo One', sans-serif;
}

.left p {
  line-height: 1.6;
  margin-bottom: 30px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.contact-item h3 {
  margin-bottom: 8px;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.contact-item p {
  margin: 0;
  line-height: 1.4;
}

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

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    padding: 20px;
  }

  .left {
    min-width: unset;
  }

  .contact-info {
    gap: 20px;
  }
}
</style>
