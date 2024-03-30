<template>
  <div>
    <div class="animate__animated animate__fadeInDown">
      <NavbarHome />
    </div>
    <div
      class="max-w-6xl mx-10 lg:mx-auto flex flex-col lg:flex-row mt-10 animate__animated animate__fadeInUp">
      <!-- Bagian Kiri (Daftar Barang) -->
      <div class="flex-1 lg:mr-10">
        <ItemsCarts
          v-for="product in products"
          :key="product._id"
          :product="product" />
      </div>

      <!-- Bagian Kanan (Ringkasan Belanjaan) -->
      <div class="w-full lg:w-[300px] mt-10">
        <div class="bg-white rounded-lg shadow-md p-4 mb-4 lg:sticky lg:top-10">
          <h2 class="text-xl font-bold mb-4">Ringkasan Belanjaan</h2>
          <div class="border-t border-gray-200 pt-4">
            <div class="flex justify-between mb-2">
              <span class="text-gray-600">Total Items:</span>
              <span class="text-lg">{{ products.length }}</span>
            </div>
            <div class="flex justify-between mb-2">
              <span class="text-gray-600">Total:</span>
              <span class="text-lg">{{ totalPrice }}</span>
            </div>
            <button
              class="bg-slate-800 text-white rounded-md px-4 py-2 w-full hover:bg-slate-900">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ItemsCarts from "@/components/CartItem.vue";
import NavbarHome from "@/components/NavbarHome.vue";

export default {
  components: {
    ItemsCarts,
    NavbarHome,
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
      const userId = "1";
      const response = await axios.get(
        `http://localhost:8000/api/cart/${userId}`
      );
      this.products = response.data[0].products;
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  },
};
</script>

<style>
/* * {
  border: red 1px solid;
} */
</style>
