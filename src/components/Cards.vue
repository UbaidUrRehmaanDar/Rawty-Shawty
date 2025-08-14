<template>
    <div class="slider">
        <button id="prev" @click="prevDeal">
            <span class="material-icons">chevron_left</span>
        </button>
        <div class="cards" v-for="(deal, i) in deals" :key="i" v-show="index === i"
            :style="{ backgroundImage: `url(${deal.image})` }">
            <div class="overlay">
                <h2>{{ deal.heading }}</h2>
                <p>{{ deal.description }}</p>
                <button>{{ deal.button }}</button>
            </div>
        </div>
        <button id="next" @click="nextDeal"> <span class="material-icons">chevron_right</span>
        </button>

        <div class="dots">
            <span v-for="(deal, i) in deals" :key="i" :class="{ active: index === i }" @click="index = i">
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: 0,
            deals: [
                {
                    heading: "Cheesy Pizza",
                    description: "Baked to perfection with a golden crust and melty mozzarella.",
                    button: "Order Now",
                    image: "/pizza.jpg"
                },
                {
                    heading: "Loaded Pizza",
                    description: "Packed with extra toppings for an irresistible bite.",
                    button: "Order Now",
                    image: "/pizza-2.jpg"
                },
                {
                    heading: "Classic Burger",
                    description: "Juicy patty, fresh lettuce, and our signature sauce.",
                    button: "Grab Deal",
                    image: "/borgir.jpg"
                },
                {
                    heading: "Double Burger",
                    description: "Twice the meat, twice the flavor — for true burger lovers.",
                    button: "Grab Deal",
                    image: "/borgir-2.jpg"
                },
                {
                    heading: "Shawarma Wrap",
                    description: "Tender spiced meat wrapped in warm pita bread.",
                    button: "Order Today",
                    image: "/shawarma.jpg"
                },
                {
                    heading: "Chow Mein",
                    description: "Stir-fried noodles with fresh vegetables and bold flavors.",
                    button: "Try Now",
                    image: "/chowmein.jpg"
                },
                {
                    heading: "Chicken Karahi",
                    description: "Rich and spicy curry cooked in traditional style.",
                    button: "Order Now",
                    image: "/karrahi.jpg"
                },
                {
                    heading: "Creamy Pasta",
                    description: "Silky sauce coating perfectly cooked pasta.",
                    button: "Try Now",
                    image: "/pasta.jpg"
                }
            ]
        }
    },
    methods: {
        nextDeal() {
            this.index = (this.index + 1) % this.deals.length
        },

        prevDeal() {
            if (this.index === 0) {
                this.index = this.deals.length - 1
            } else {
                this.index--
            }
        }
    },
    mounted() {
        setInterval(() => {
            this.index = (this.index + 1) % this.deals.length
        }, 7000);
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
    height: 350px;
    display: flex;
    align-items: flex-end;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 500px;
    background-size: cover;
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
    font-size: 30px;
    cursor: pointer;
    border-radius: 20%;
    width: 75px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s ease, transform 0.2s ease;
    z-index: 10;
}

#prev:hover,
#next:hover {
    background-color: #FAF4E5;
    color: #0A3E36;
    border: 2px solid #0A3E36;
}

#prev {
    left: -80px;
}

#next {
    right: -80px;
}
</style>
