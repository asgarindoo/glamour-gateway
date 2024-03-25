<template>
  <div class="font-quicksand border-b-2 border-slate-500 mx-10 md:mx-20">
    <div class="py-4 flex justify-between items-center text-xl font-medium">
      <div class="flex items-center space-x-12">
        <!-- Logo atau Judul Situs -->
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
      <!-- Tombol hamburger untuk tampilan mobile -->
      <button @click="toggleMenu" class="block md:hidden">
        <svg
          class="w-6 h-6 text-slate-800"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      <!-- Daftar menu untuk tampilan desktop -->
      <div class="hidden md:flex items-center space-x-4">
        <router-link :to="{ name: 'login' }">Login</router-link>
        <router-link :to="{ name: 'cart' }">Cart</router-link>
      </div>
    </div>
    <!-- Daftar menu untuk tampilan mobile -->
    <div :class="{ block: showMenu, hidden: !showMenu }" class="md:hidden">
      <router-link
        :to="{ name: 'login' }"
        class="block py-2 px-4 hover:bg-slate-800 hover:text-white"
        >Login</router-link
      >
      <router-link
        :to="{ name: 'cart' }"
        class="block py-2 px-4 hover:bg-slate-800 hover:text-white"
        >Cart</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarHome",
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style></style>
