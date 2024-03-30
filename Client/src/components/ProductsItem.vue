<template>
  <div>
    <div
      @click="goToProductDetail"
      class="w-full md:w-auto h-auto rounded overflow-hidden shadow-lg transition-all duration-500 hover:scale-110 cursor-pointer">
      <img
        class="w-full h-32 md:h-24 lg:h-64 xl:h-64 object-cover object-center"
        :src="product.img"
        :alt="product.title" />
      <div class="px-4 py-2 md:py-4">
        <div
          class="font-bold text-base md:text-xs lg:text-lg mb-2 text-gray-900 overflow-hidden">
          {{ product.title }}
        </div>
        <p
          class="text-gray-700 text-sm md:text-xs lg:text-md h-6 sm:h-6 md:h-6 lg:h-20 xl:h-20 overflow-y-auto">
          {{ product.description }}
        </p>
      </div>
      <div
        class="px-2 py-2 sm:px-2 sm:py-2 md:px-2 md:py-2 lg:px-4 lg:py-4 flex justify-between items-center bg-slate-800">
        <p
          class="text-white text-xs sm:text-xs md:text-xs lg:text-md xl:text-base font-semibold mr-2">
          {{ product.price }}
        </p>
        <router-link
          :to="{ name: 'detail-product', params: { id: product.id } }"
          class="bg-white px-2 py-1 md:px-2 md:py-1 lg:px-4 lg:py-2 xl:px-4 xl:py-2 text-xs sm:text-xs md:text-xs lg:text-md xl:text-md rounded-sm text-slate-800 hover:text-slate-900 hover:bg-gray-200 font-semibold ml-2">
          Details
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  mounted() {
    console.log(this.product);
  },
  methods: {
    goToProductDetail() {
      // Redirect to product detail page when the card is clicked
      this.$router.push({
        name: "detail-product",
        params: { id: this.product.id },
      });
    },
  },
};
</script>

<style scoped>
/* * {
  border: red 1px solid;
} */
</style>
