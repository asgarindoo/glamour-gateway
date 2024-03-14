<template>
  <div class="products">
    <div>
      <h1>This is a Products page</h1>
      <ProductsItem
        v-for="product in products"
        :key="product.id"
        :product="product" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProductsItem from "@/components/ProductsItem.vue";

export default {
  components: {
    ProductsItem,
  },
  data() {
    return {
      products: [],
    };
  },
  async created() {
    const result = await axios.get("http://localhost:8000/api/products");
    this.products = result.data.map(product => ({
      ...product,
      price: product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" }), // Format harga dalam mata uang Rupiah
    }));
  },
};
</script>
