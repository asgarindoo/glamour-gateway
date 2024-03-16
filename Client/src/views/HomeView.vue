<template>
  <div class="font-quicksand max-h-screen">
    <NavbarHome />

    <div class="text-left ml-20 text-9xl tracking-widest font-switzer w-1/2">
      <p class="text-3xl mb-10 mt-10 font-quicksand">
        Transcend the limits of elegance with
      </p>
      <p>GLAMOUR</p>
    </div>
    <div class="text-right mr-20 text-9xl tracking-widest font-switzer">
      <!-- <img src="../assets/laura-chouette-uS78XVCAsLc-unsplash.jpg" /> -->
      <p>GATEWAY</p>
    </div>
  </div>
</template>

<script>
import NavbarHome from "@/components/NavbarHome.vue";

export default {
  name: "HomeView",
  components: {
    NavbarHome,
  },
};
</script>

<style scoped>
* {
  border: red 1px solid;
}
</style>
