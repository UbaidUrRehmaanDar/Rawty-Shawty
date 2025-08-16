<template>
  <div class="order-container">
    <div class="order-section">
      <div class="header-section">
        <router-link to="/" class="back-button">
          <span class="material-icons">arrow_back</span>
        </router-link>
        <h1>Place Your Order</h1>
      </div>
      <div class="menu-grid">
        <div class="menu-card" v-for="(section, i) in menuData" :key="i">
          <div class="menu-card-header">
            <h2>{{ section.title }}</h2>
          </div>
          <ul>
            <li v-for="(item, j) in section.items" :key="j">
              <span>{{ item.name }}</span>
              <span class="price">{{ item.price }}</span>
              <button @click="addToCart(item)">Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="cart-section">
      <h2>Your Cart</h2>
      <div v-if="cart.length === 0" class="cart-empty">
        Your cart is empty.
      </div>
      <div v-else>
        <ul>
          <li v-for="(cartItem, index) in cart" :key="index">
            <span>{{ cartItem.name }}</span>
            <span>{{ cartItem.price }}</span>
          </li>
        </ul>
        <hr>
        <div class="cart-total">
          <strong>Total:</strong>
          <strong>{{ calculateTotal() }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      cart: []
    };
  },
  methods: {
    addToCart(item) {
      let price = Number(item.price);
      this.cart.push({
        name: item.name,
        price: isNaN(price) ? item.price : price
      });
    },
    calculateTotal() {
      let total = 0;
      for (let i = 0; i < this.cart.length; i++) {
        let price = Number(this.cart[i].price);
        total += isNaN(price) ? 0 : price;
      }
      return total;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Russo+One&family=Zen+Dots&display=swap');

.order-container {
  width: 90%;
  max-width: 1200px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  align-items: start;
}

.header-section {
  position: relative;
  margin-bottom: 40px;
}

.back-button {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
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

.order-section h1 {
  font-family: 'Zen Dots', sans-serif;
  color: #0A3E36;
  font-size: 36px;
  text-align: center;
  margin: 0;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.menu-card {
  background: #FAF4E5;
  color: #0A3E36;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.3);
}

.menu-card-header {
  padding: 15px;
  background: #f5e8c9;
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
  align-items: center;
  padding: 6px 0;
  font-family: 'Work Sans', sans-serif;
  font-weight: 700;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  gap: 10px;
}

li:last-child {
  border-bottom: none;
}

.price {
  font-weight: 100;
  font-family: 'Russo One', sans-serif;
  min-width: 60px;
  text-align: right;
}

button {
  background: #0A3E36;
  color: #FAF4E5;
  border: none;
  padding: 6px 12px;
  font-family: 'Russo One', sans-serif;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
  margin-left: 8px;
}

button:hover {
  background-color: #FAF4E5;
  color: #0A3E36;
  border: 1px solid #0A3E36;
}

.cart-section {
  background: #0A3E36;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(10, 62, 54, 0.8);
  position: sticky;
  top: 20px;
  height: fit-content;
  margin-top: 0;
  background: linear-gradient(90deg, #0A3E36, #1B5E50, #0A3E36);
  background-size: 200% 100%;
  transition: transform 0.3s ease, background-position 0.5s ease, color 0.3s ease;
}

.cart-section:hover {
  background-position: 100% 0;
  color: #fcedcf;
  transform: scale(1.05);
}

.cart-section h2 {
  font-family: 'Zen Dots', sans-serif; 
  color: #FAF4E5;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 0;
}

.cart-section li span {
  color: #FAF4E5;
}

.cart-empty {
  font-family: 'Zen Dots', sans-serif; 
  color: #f5e8c9;
  text-align: center;
  padding: 20px 0;
}

.cart-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.cart-section li {
  display: flex;
  justify-content: space-between;
  font-family: 'Work Sans', sans-serif;
  padding: 10px 0;
  border-bottom: 1px solid #e5dbc8;
}

.cart-section hr {
  border: none;
  border-top: 2px solid #FAF4E5;
  margin: 15px 0;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  font-family: 'Russo One', sans-serif;
  font-size: 20px;
  color: #FAF4E5;
}

@media (max-width: 768px) {
  .header-section {
    text-align: center;
  }

  .back-button {
    position: static;
    transform: none;
    display: inline-flex;
    margin-bottom: 20px;
  }

  .material-icons {
    font-size: 48px;
  }

  .order-section h1 {
    font-size: 28px;
  }
}
</style>