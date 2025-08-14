<template>
  <div class="menu-wrapper">
    <h1 class="menu-title">RAWTY SHAWTY MENU</h1>
    <div class="menu-grid">
      <div class="menu-card" v-for="(section, i) in menuData" :key="i">
        <div class="menu-card-header">
          <h2>{{ section.title }}</h2>
        </div>
        <ul>
          <li v-for="(item, j) in section.items" :key="j">
            <span>{{ item.name }}</span>
            <span class="price">{{ item.price }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
<div class="order-btn-wrapper">
  <a href="#order-section" class="order-link">Place Your Order</a>
</div>
  <Order />
</template>

<script>
export default {
  name: "RawtyShawtyMenu",
  data() {
    return {
      menuData: [
        {
          title: "Crispy Burger",
          items: [
            { name: "Patty", price: "350" },
            { name: "Zinger", price: "490" },
            { name: "Mighty", price: "550" },
            { name: "Tower", price: "550" },
          ],
        },
        {
          title: "Grilled Burger",
          items: [
            { name: "Shawty", price: "550" },
            { name: "Salsa", price: "550" },
            { name: "Peri Peri", price: "650" },
            { name: "Smokey Cheese", price: "650" },
            { name: "Mad Monster", price: "650" },
            { name: "Double Extreme", price: "750" },
            { name: "Mad Smash", price: "950" },
          ],
        },
        {
          title: "Wings",
          items: [
            { name: "Wings 5pcs", price: "430" },
            { name: "Wings 10pcs", price: "580" },
            { name: "BBQ Wings", price: "430" },
            { name: "Buffalo Wings", price: "500" },
            { name: "Nuggets", price: "370" },
          ],
        },
        {
          title: "Fries",
          items: [
            { name: "Meat Fries", price: "700" },
            { name: "Chilli Lava Fries", price: "550" },
          ],
        },
        {
          title: "Sandwiches",
          items: [
            { name: "Club Sandwich", price: "600" },
            { name: "Cheese Grilled", price: "600" },
          ],
        },
        {
          title: "Wraps (Choose Any 2 Sauces)",
          items: [
            { name: "Chipotle", price: "600" },
            { name: "Honey Mustard", price: "600" },
            { name: "Salsa", price: "600" },
            { name: "BBQ", price: "600" },
            { name: "Chilli Lava", price: "600" },
            { name: "Peri Peri", price: "600" },
            { name: "Garlic", price: "600" },
          ],
        },
        {
          title: "Pastas",
          items: [
            { name: "Smokey BBQ", price: "650" },
            { name: "Spicy Garlic", price: "650" },
            { name: "Alfredo", price: "650" },
          ],
        },
        {
          title: "Add On",
          items: [
            { name: "Cheese Slice", price: "50" },
            { name: "Extra Dip Sauce", price: "80" },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Russo+One&family=Zen+Dots&display=swap');

.menu-wrapper {
  width: 90%;
  max-width: 1100px;
  margin: 50px auto;
}

.menu-title {
  text-align: center;
  font-family: 'Zen Dots', sans-serif;
  color: #FAF4E5;
  background: #0A3E36;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.menu-card {
  background: rgba(10, 62, 54, 0.9);
  color: #FAF4E5;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.3);
}

.menu-card-header {
  padding: 15px;
  background: #0A3E36;
}

.menu-card-header h2 {
  font-family: 'Russo One', sans-serif;
  font-size: 18px;
  margin: 0;
  letter-spacing: 1px;
}

ul {
  list-style: none;
  padding: 10px 15px;
}

li {
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  font-family: 'Work Sans', sans-serif;
  font-weight: 700;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

li:last-child {
  border-bottom: none;
}

.price {
  font-weight: 100;
  font-family: 'Russo One', sans-serif;
}
.order-btn-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

a {
  text-decoration: none;
  color: #FAF4E5;
  background-color: #0A3E36;
  padding: 9px 15px;
  border-radius: 8px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  font-family: 'Russo One', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
}

a:hover {
  background-color: #FAF4E5;
  color: #0A3E36;
  border: 2px solid #0A3E36;
}
</style>