<template>
  <div
    class="py-4 px-6 flex justify-between items-center border-b-2 border-slate-500 mx-20 font-quicksand text-xl font-medium">
    <div class="flex space-x-12 -ml-6">
      <router-link :to="{ name: 'home' }" class="hover:text-gray-300"
        >Home</router-link
      >
      <router-link :to="{ name: 'about' }" class="hover:text-gray-300"
        >About</router-link
      >
      <router-link :to="{ name: 'products' }" class="hover:text-gray-300"
        >Product</router-link
      >
    </div>
    <div>
      <router-link :to="{ name: 'cart' }" class="px-4 -mr-10">
        <button
          class="bg-pink-300 hover:bg-pink-500 text-white py-2 px-4 rounded">
          Cart
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarHome",
};
</script>

<style></style>
