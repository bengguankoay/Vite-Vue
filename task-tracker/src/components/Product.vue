<template>
  <div>
    <h1>Product</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <h2>Title: {{ product.title }}</h2>
        <p><strong>Description:</strong> {{ product.description }}</p>
        <p>Price: ${{ product.price }}</p>
      </li>
    </ul>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'ProductList',
  data() {
    return {
      currentPage: 1
    };
  },
  computed: {
    ...mapState(['products']),
    ...mapGetters(['totalProducts', 'productsPerPage']),
    totalPages() {
      return Math.ceil(this.totalProducts / this.productsPerPage);
    }
  },
  methods: {
    ...mapActions(['fetchProducts']),
    async loadProducts() {
      await this.fetchProducts({ page: this.currentPage, limit: this.productsPerPage });
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.loadProducts();
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.loadProducts();
      }
    }
  },
  created() {
    this.loadProducts();
  }
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
button {
  margin: 0 10px;
}
</style>
