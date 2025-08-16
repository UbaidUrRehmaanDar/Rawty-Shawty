<template>
    <div class="slider">
        <button id="prev" @click="prevDeal">
            <span class="material-icons">arrow_left</span>
        </button>
        
        <div style="display: none;">
            <img v-for="deal in deals" :key="deal.image" :src="deal.image" alt="preload">
        </div>
        
        <div class="cards" v-for="(deal, i) in deals" :key="i" v-show="index === i"
            :style="{ backgroundImage: `url(${deal.image})` }">
            <div class="overlay">
                <h2>{{ deal.heading }}</h2>
                <p>{{ deal.description }}</p>

                <router-link to="/order" class="order-link">{{ deal.button }}</router-link>
            </div>
        </div>
        <button id="next" @click="nextDeal">
            <span class="material-icons">arrow_right</span>
        </button>

        <div class="dots">
            <span v-for="(deal, i) in deals" :key="i" :class="{ active: index === i }" @click="index = i"></span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: 0,
            deals: [
                { heading: "Cheesy Pizza", description: "Baked to perfection with a golden crust and melty mozzarella.", button: "Order Now", image: "/pizza.webp" },
                { heading: "Loaded Pizza", description: "Packed with extra toppings for an irresistible bite.", button: "Order Now", image: "/pizza-2.webp" },
                { heading: "Classic Burger", description: "Juicy patty, fresh lettuce, and our signature sauce.", button: "Grab Deal", image: "/borgir.webp" },
                { heading: "Double Burger", description: "Twice the meat, twice the flavor — for true burger lovers.", button: "Grab Deal", image: "/borgir-2.webp" },
                { heading: "Shawarma Wrap", description: "Tender spiced meat wrapped in warm pita bread.", button: "Order Today", image: "/shawarma.webp" },
                { heading: "Chow Mein", description: "Stir-fried noodles with fresh vegetables and bold flavors.", button: "Try Now", image: "/chowmein.webp" },
                { heading: "Chicken Karahi", description: "Rich and spicy curry cooked in traditional style.", button: "Order Now", image: "/karrahi.webp" },
                { heading: "Creamy Pasta", description: "Silky sauce coating perfectly cooked pasta.", button: "Try Now", image: "/pasta.webp" }
            ]
        }
    },
    methods: {
        nextDeal() {
            this.index = (this.index + 1) % this.deals.length
        },
        prevDeal() {
            this.index = (this.index === 0) ? this.deals.length - 1 : this.index - 1
        },
        preloadImages() {
            this.deals.forEach(deal => {
                const link = document.createElement('link')
                link.rel = 'preload'
                link.as = 'image'
                link.href = deal.image
                document.head.appendChild(link)
            })
        }
    },
    mounted() {
        this.preloadImages()
        
        setInterval(() => {
            this.index = (this.index + 1) % this.deals.length
        }, 7000)
    }
};
</script>

<style scoped>
.slider {
    width: 90%;
    max-width: 1000px;
    margin: 50px auto;
    position: relative;
}

.cards {
    background-size: cover;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    height: 500px;
    display: flex;
    align-items: flex-end;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background-position: center;
}

.overlay {
    background: rgba(10, 62, 54, 0.7);
    padding: 25px;
    width: 100%;
}

h2 {
    font-size: 26px;
    margin-bottom: 10px;
    font-family: 'Zen Dots', sans-serif;
    color: #FAF4E5;
}

p {
    font-size: 15px;
    margin-bottom: 20px;
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    color: #FAF4E5;
}

button {
    background: #FAF4E5;
    border: none;
    padding: 10px 18px;
    font-family: 'Russo One', sans-serif;
    border-radius: 5px;
    cursor: pointer;
    color: #0A3E36;
    transition: background 0.3s ease;
}

button:hover {
    background-color: #0A3E36;
    color: #FAF4E5;
    border: 2px solid #FAF4E5;
}

a {
    text-decoration: none;
    color: #0A3E36;
    background-color: #FAF4E5;
    padding: 9px 15px;
    border-radius: 8px;
    border: 2px solid transparent;
    transition: all 0.3s ease;
}

a:hover {
    background-color: #0A3E36;
    color: #FAF4E5;
    border: 2px solid #FAF4E5;
}

.dots {
    margin-top: 15px;
    text-align: center;
}

.dots span {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    background: #bbb;
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.3s;
}

.dots .active {
    background: #0A3E36;
}

#prev,
#next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #0A3E36;
    border: none;
    color: #FAF4E5;
    cursor: pointer;
    border-radius: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
}

#prev:hover,
#next:hover {
    background-color: #FAF4E5;
    color: #0A3E36;
    border: 2px solid #0A3E36;
}

#prev {
    left: -60px;
}

#next {
    right: -60px;
}

#prev .material-icons,
#next .material-icons {
    font-size: 32px;
}
</style>