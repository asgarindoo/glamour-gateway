<template>
  <div>
    <div
      class="w-full h-auto rounded overflow-hidden shadow-lg transition-all duration-500 hover:scale-110">
      <img
        class="w-full h-64 object-cover object-center"
        :src="product.img"
        :alt="product.title" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 text-gray-900 overflow-hidden">
          {{ product.title }}
        </div>
        <p class="text-gray-700 text-base h-16 overflow-y-auto">
          {{ product.description }}
        </p>
      </div>
      <div class="px-6 py-4 flex justify-between items-center bg-slate-800">
        <p class="text-white text-lg font-semibold">{{ product.price }}</p>
        <router-link
          :to="{ name: 'detail-product', params: { id: product.id } }"
          class="bg-slate-600 px-3 py-2 rounded-sm text-white hover:text-black hover:bg-slate-300 font-semibold">
          View Details
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
};
</script>

<style scoped>
/* * {
  border: red 1px solid;
} */
</style>
