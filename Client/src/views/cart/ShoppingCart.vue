<template>
  <div>
    <h1>Shopping Cart</h1>
    <div v-for="product in products" :key="product._id">
      <ItemsCarts :product="product" />
    </div>

    <p>Total Items: {{ products.length }}</p>
    <p>Total:{{ totalPrice }}</p>
    <button>Checkout</button>
  </div>
</template>

<script>
import axios from "axios";
import ItemsCarts from "@/components/CartItem.vue";

export default {
  components: {
    ItemsCarts,
  },
  data() {
    return {
      products: [],
    };
  },
  computed: {
    totalPrice() {
      const total = this.products.reduce(
        (sum, product) => sum + Number(product.price),
        0
      );
      return total.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      });
    },
  },
  async created() {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/orders/user/1"
      );
      this.products = response.data[0].products;
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  },
};
</script>

<style></style>
