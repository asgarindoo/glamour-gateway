<template>
  <div>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-link :to="{ name: 'products' }">Product</router-link>
    <router-link :to="{ name: 'cart' }">
      <button>Cart</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NavbarHome",
};
</script>

<style></style>
