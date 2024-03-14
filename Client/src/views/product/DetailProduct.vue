<template>
  <div>
    <h1>Detail Products</h1>
    <div>
      <p>{{ product.category }}</p>
      <img :src="product.img" />

      <h1>{{ product.title }}</h1>
      <p>{{ product.description }}</p>
      <p>{{ formattedPrice }}</p>
      <button>Buy Now</button>
      <button>Add to cart</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import NotFound from "@/views/errors/NotFound.vue";

export default {
  data() {
    return {
      product: {},
    };
  },
  async created() {
    const id = this.$route.params.id;
    const result = await axios.get(`http://localhost:8000/api/products/${id}`);
    this.product = result.data;
  },
  computed: {
    formattedPrice() {
      // Memformat harga menjadi format mata uang Rupiah
      if (this.product.price) {
        return this.product.price.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        });
      } else {
        return "Price not available";
      }
    },
  },
};
</script>

<style></style>
