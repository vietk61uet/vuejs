<template>
  <div class="product-list">
    <div class="product-row" v-for="(row, index) in productRows" :key="index">
      <div class="product" v-for="product in row" :key="product.title">
        <div class="product-details">
          <div class="product-image">
            <img :src="getImageUrl(product.image)" :alt="product.title">
            <h2>{{ product.title }}</h2>
            <p>{{ product.description }}</p>
            <p>Price: {{ product.price }} USD</p>
            <button @click="addToCart">Add to Cart</button>
          </div>
        </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.product-list {
  width: 900px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto; /* Căn giữa theo chiều ngang */
}

.product-row {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
}

.product-details {
  display: flex;
}

.product {
  flex-basis: 300px; /* Độ rộng cố định cho mỗi sản phẩm */
  flex-grow: 1; /* Cho phép sản phẩm mở rộng nếu không đủ không gian */
}

.product-image img {
  max-width: 200px;
  max-height: 200px;
  width: auto;
  height: auto;
}
</style>

<script>
export default {
  name: 'ProductList',
  data() {
    return {
      products: [
        {
          title: 'Example Product 1',
          description: 'This is the first example product a a a a a a   a  a.  â a a a',
          price: 10,
          image: 'quang_tri.jpg'
        },
        {
          title: 'Example Product 2',
          description: 'This is the second example product.',
          price: 20,
          image: 'quang_tri.jpg'
        },
        {
          title: 'Example Product 2',
          description: 'This is the second example product.',
          price: 20,
          image: 'quang_tri.jpg'
        },
        {
          title: 'Example Product 2',
          description: 'This is the second example product.',
          price: 20,
          image: 'quang_tri.jpg'
        },
        // Thêm các sản phẩm khác vào đây
      ]
    };
  },
  computed: {
    productRows() {
      const rows = [];
      const productsPerRow = 3;
      let rowIndex = 0;

      for (let i = 0; i < this.products.length; i += productsPerRow) {
        const row = this.products.slice(i, i + productsPerRow);
        rows[rowIndex] = row;
        rowIndex++;
      }

      return rows;
    }
  },
  methods: {
    getImageUrl(image) {
      return require(`@/assets/${image}`);
    },
    addToCart() {
    }
  }
};
</script>