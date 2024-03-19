<template>
  <div class="container mx-auto py-8 font-quicksand">
    <div class="flex flex-col lg:flex-row items-center">
      <!-- Product Image -->
      <div class="w-full lg:w-1/2 flex justify-center">
        <img :src="product.img" class="w-96 h-96" />
      </div>

      <!-- Product Details -->
      <div class="w-full lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
        <div class="product-dtl">
          <h2 class="text-2xl font-semibold">{{ product.title }}</h2>
          <div class="flex items-center mt-2">
            <div class="flex items-center mr-2">
              <span class="text-gray-600">3 Reviews</span>
            </div>
            <span class="mx-2">|</span>
            <span class="text-gray-600">{{ formattedPrice }}</span>
          </div>
          <p class="text-gray-700 mt-4">{{ product.description }}</p>

          <!-- Size & Color Select -->
          <div class="flex mt-4">
            <div class="flex">
              <p>stock :</p>
              <p class="pl-3">{{ product.stock }}</p>
            </div>
          </div>

          <!-- Quantity & Add to Cart -->
          <div class="flex items-center mt-4">
            <label for="quantity" class="text-gray-700">Quantity</label>
            <div class="flex ml-4">
              <button
                @click="decrementQuantity"
                class="text-gray-700 px-4 py-2 border border-gray-300 rounded-l">
                -
              </button>
              <input
                type="text"
                v-model="quantity"
                class="w-16 text-center bg-gray-100 border-t border-b border-gray-300 focus:outline-none" />
              <button
                @click="incrementQuantity"
                class="text-gray-700 px-4 py-2 border border-gray-300 rounded-r">
                +
              </button>
            </div>
          </div>
          <button
            @click="addToCart"
            class="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-8 py-2 rounded-full mt-4">
            Add to Cart
          </button>
        </div>
      </div>
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

<style scoped>
/* * {
  border: red 1px solid;
} */
</style>
