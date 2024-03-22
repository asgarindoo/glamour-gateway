<template>
  <div class="border-b border-slate-800 py-4 flex items-center mr-20 mt-10">
    <img :src="product.img" alt="product Image" class="w-16 h-16 mr-4" />
    <div>
      <h3 class="font-bold">{{ product.title }}</h3>
      <p class="text-gray-600">{{ formatPrice(product.price) }}</p>
    </div>
    <button
      class="ml-auto bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
      Remove
    </button>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    formatPrice(price) {
      return price.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      });
    },
  },
  mounted() {
    console.log(this.product);
  },
};
</script>

<style>
/* * {
  border: red 1px solid;
} */
</style>
