<template>
  <div class="shop">
    <header>
      <h1>Shop Online</h1>
    </header>
    <main>
      <div class="product-list">
        <div v-for="product in products" :key="product.id" class="product">
          <div class="product-image-wrapper" 
          @mouseenter="setHovered(product, true)"
          @mouseleave="setHovered(product, false)">
          <img :src="product.image" :alt="product.title" class="product-image">
          <h2>{{ product.title }}</h2>
          <p>Price: {{ product.price }} USD</p>
          <div class="button-container">
            <button v-show="product.hovered" @click="addToCart(product)" class="add-to-cart-button">
              <i class="fas fa-cart-plus"></i>
            </button>
            <button v-show="product.hovered" @click="cancelFromCart(product)" class="cancel-from-cart-button">
              <i class="fa fa-times"></i>
            </button>
          </div>
        </div>
      </div>
      </div>
    </main>
    <footer>
      <p>Cart: {{ cartItems.length }} items</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          title: 'Áo thun Huế',
          price: 10,
          image: require("./assets/hue.jpg"),
          hovered: false
        },
        {
          id: 2,
          title: 'Áo thun Quảng Trị',
          price: 15,
          image: require("./assets/quang_tri.jpg"),
          hovered: false
        },
        {
          id: 3,
          title: 'Áo thun Vũng Tàu',
          price: 15,
          image: require("./assets/vung_tau.jpg"),
          hovered: false
        },
        {
          id: 3,
          title: 'Áo thun Vũng Tàu',
          price: 15,
          image: require("./assets/vung_tau.jpg"),
          hovered: false
        },
        {
          id: 3,
          title: 'Áo thun Vũng Tàu',
          price: 15,
          image: require("./assets/vung_tau.jpg"),
          hovered: false
        },
        // Thêm các sản phẩm khác vào đây
      ],
      cartItems: []
    };
  },
  methods: {
    addToCart(product) {
      this.cartItems.push(product);
    },
    cancelFromCart(product) {
      this.cartItems.pop(product);
    },
    setHovered(product, isHovered) {
      product.hovered = isHovered;
    },
    handleImageClick(product) {
      if (product.hovered) {
        this.addToCart(product);
      }
    }
  }
};
</script>

<style scoped>
/* CSS cho các phần tử trong trang web */
.shop {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 20px;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

.product {
  text-align: center;
  position: relative;
}

.product-image-wrapper {
  position: relative;
  display: inline-block;
}

.product-image {
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
}

.product:hover .add-to-cart-button .cancel-from-cart-button{
  display: block;
  background-color: #45a049;
}

.button-container {
  display: relative;
  align-items: center;
}

.add-to-cart-button{
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-color: #4CAF50;
  color: black;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-to-cart-button i {
  margin: 5px;
}

.cancel-from-cart-button{
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-color: #4CAF50;
  color: black;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cancel-from-cart-button i {
  margin: 5px;
}

footer {
  text-align: center;
  margin-top: 20px;
}
</style>