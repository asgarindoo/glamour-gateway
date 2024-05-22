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
          <button class="px-4 py-2 text-white bg-slate-900 rounded-md">
            <i class="fas fa-search"></i>
          </button>
        </div>
        <!-- Cart Icon -->
        <router-link
          :to="{ name: 'cart' }"
          class="hover:text-gray-300 bg-slate-900 text-white p-2 rounded-md text-sm">
          <i class="fas fa-shopping-cart mr-2"></i> Cart
        </router-link>
        <!-- Profile Info and Logout Button -->
        <template v-if="isAuthenticated">
          <button
            @click="logout"
            class="hover:text-gray-300 bg-slate-900 text-white p-2 rounded-md text-sm">
            <i class="fas fa-sign-out-alt mr-2"></i>
            Logout
          </button>
          <button class="text-slate-900 focus:outline-none">
            <img
              class="w-10 h-10 rounded-full object-cover border-2 border-slate-900 shadow-md"
              v-if="user.picture"
              :src="user.picture"
              alt="User Avatar" />
          </button>
        </template>

        <template v-else>
          <!-- Login Button -->
          <button
            @click="login"
            class="hover:text-gray-300 bg-slate-900 text-white p-2 rounded-md text-sm">
            <i class="fas fa-sign-out-alt mr-2"></i> Login
          </button>
        </template>
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
      <!-- Cart Icon -->
      <router-link
        :to="{ name: 'cart' }"
        class="block w-full py-2 px-4 hover:bg-slate-800 hover:text-white">
        <i class="fas fa-shopping-cart mr-4"></i> Cart
      </router-link>
      <!-- Profile Info and Logout Button (Mobile) -->
      <template v-if="isAuthenticated">
        <div class="relative" @click="toggleDropdown">
          <button
            @click="logout"
            class="block w-full py-2 px-4 hover:bg-slate-800 hover:text-white text-start">
            <i class="fas fa-sign-out-alt mr-4"></i> Logout
          </button>
          <div class="flex flex-col-2">
            <button
              class="rounded-full object-cover border-2 border-slate-900 shadow-md my-2 ml-2">
              <img
                v-if="user.picture"
                :src="user.picture"
                alt="Profile Picture"
                class="w-8 h-8 rounded-full cursor-pointer" />
            </button>
            <p class="ml-2 mt-4 text-sm">Hi {{ user.nickname }}</p>
          </div>
        </div>
      </template>
      <template v-else>
        <!-- Login Button -->
        <button
          @click="login"
          class="block w-full py-2 px-4 hover:bg-slate-800 hover:text-white text-start">
          <i class="fas fa-sign-out-alt mr-2"></i> Login
        </button>
      </template>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  name: "NavbarHome",
  setup() {
    const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
    const showMenu = ref(false);
    const isDropdownOpen = ref(false);

    const login = () => {
      loginWithRedirect();
    };

    const toggleMenu = () => {
      showMenu.value = !showMenu.value;
    };

    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };
    // console.log("user:", user);

    // Gunakan `return` untuk mengekspos ke template
    return {
      login,
      logout,
      user,
      isAuthenticated,
      toggleMenu,
      toggleDropdown,
      showMenu,
      isDropdownOpen,
    };
  },
};
</script>

<style></style>
