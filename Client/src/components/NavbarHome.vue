<template>
  <div
    class="font-quicksand border-b-2 border-slate-500 mx-10 md:mx-10 lg:mx-20">
    <div
      class="py-4 flex justify-between items-center text-sm md:text-lg lg:text-lg xl:text-xl font-medium">
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
          class="w-6 h-6 text-slate-800 ml-4"
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
        <!-- Search Bar -->
        <div class="md:flex items-center bg-white rounded-md text-sm">
          <input
            type="search"
            class="px-4 py-2 md:w-36 lg:w-full xl:w-full ml-5"
            placeholder="Search..." />
          <button class="px-4 text-white bg-slate-900 rounded-md">
            <i class="fas fa-search p-2"></i>
          </button>
        </div>
        <!-- Login Icon -->
        <router-link
          :to="{ name: 'login' }"
          class="hover:text-gray-300 bg-slate-900 text-white p-2 rounded-md text-sm">
          <i class="fas fas fa-user mr-2"></i> Login
        </router-link>
        <!-- Cart Icon -->
        <router-link
          :to="{ name: 'cart' }"
          class="hover:text-gray-300 bg-slate-900 text-white p-2 rounded-md text-sm">
          <i class="fas fa-shopping-cart mr-2"></i> Cart
        </router-link>
      </div>
    </div>
    <!-- Daftar menu untuk tampilan mobile -->
    <div
      :class="{ block: showMenu, hidden: !showMenu }"
      class="md:hidden animate__animated animate__fadeIn">
      <!-- Mobile Search Bar -->
      <div class="px-4 py-2">
        <input type="search" class="px-4 py-2 w-full" placeholder="Search..." />
        <button
          class="px-4 py-2 text-white bg-slate-900 rounded-md mt-2 w-full">
          Search
        </button>
      </div>
      <!-- Login Icon -->
      <router-link
        :to="{ name: 'login' }"
        class="block py-2 px-4 hover:bg-slate-800 hover:text-white">
        <i class="fas fa-user mr-4"></i> Login
      </router-link>
      <!-- Cart Icon -->
      <router-link
        :to="{ name: 'cart' }"
        class="block py-2 px-4 hover:bg-slate-800 hover:text-white">
        <i class="fas fa-shopping-cart mr-4"></i> Cart
      </router-link>
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
