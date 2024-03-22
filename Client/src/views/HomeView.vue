<template>
  <div class="font-quicksand max-h-screen">
    <NavbarHome
      class="z-50 animate__animated animate__fadeInDown animate__delay-1s" />

    <div class="flex flex-col lg:flex-row xl:flex-row">
      <transition name="custom" class="animate__animated animate__fadeInLeft">
        <div
          class="text-center tracking-widest font-switzer lg:text-left lg:ml-20 lg:text-7xl lg:w-1/2 xl:text-left xl:ml-20 xl:text-9xl xl:w-1/2">
          <p
            class="text-2xl mx-5 mb-2 mt-5 font-quicksand sm:text-2xl md:text-3xl lg:text-3xl lg:mx-0 lg:mb-10 lg:mt-10 xl:text-3xl xl:mx-0 xl:mb-10 xl:mt-10">
            Transcend the limits of elegance with
          </p>
        </div>
      </transition>

      <transition name="custom" class="animate__animated animate__slideInDown">
        <div
          class="grid mt-7 gap-2 lg:grid-cols-4 lg:gap-5 lg:mr-24 lg:mt-0 xl:grid-cols-4 xl:gap-5 xl:mr-20 xl:mt-0">
          <div class="flex justify-center lg:justify-start xl:justify-start">
            <img
              src="../assets/rosa-rafael.jpg"
              class="sm:block md:block lg:block xl:block mx-5 lg:mx-0 xl:mx-0 w-72 h-14 sm:w-full sm:h-24 lg:w-36 lg:h-96 xl:w-36 xl:h-96 object-cover shadow-sm" />
          </div>
          <div class="flex justify-center lg:justify-start xl:justify-start">
            <img
              src="../assets/rosa-rafael.jpg"
              class="sm:block md:block lg:block xl:block mx-5 lg:mx-0 xl:mx-0 w-72 h-14 sm:w-full sm:h-24 lg:w-36 lg:h-80 xl:w-36 xl:h-80 object-cover shadow-sm item" />
          </div>
          <div class="flex justify-center lg:justify-start xl:justify-start">
            <img
              src="../assets/rosa-rafael.jpg"
              class="sm:block md:block lg:block xl:block mx-5 lg:mx-0 xl:mx-0 w-72 h-14 sm:w-full sm:h-24 lg:w-36 lg:h-96 xl:w-36 xl:h-96 object-cover shadow-sm" />
          </div>

          <div class="flex justify-center lg:justify-start xl:justify-start">
            <img
              src="../assets/rosa-rafael.jpg"
              class="sm:block md:block lg:block xl:block mx-5 lg:mx-0 xl:mx-0 w-72 h-14 sm:w-full sm:h-24 lg:w-36 lg:h-80 xl:w-36 xl:h-80 object-cover shadow-sm" />
          </div>
        </div>
      </transition>
    </div>
    <transition
      name="custom"
      class="animate__animated animate__fadeInUp animate__delay-1s">
      <p
        class="ml-5 mt-10 text-4xl tracking-widest font-switzer sm:ml-10 sm:text-6xl md:ml-20 md:text-7xl lg:ml-20 lg:text-8xl xl:ml-20 xl:text-9xl">
        GLAMOUR
      </p>
    </transition>
    <transition
      name="custom"
      class="animate__animated animate__fadeInUp animate__delay-1s">
      <p
        class="mr-5 text-4xl tracking-widest font-switzer sm:mr-10 sm:text-6xl md:mr-20 md:text-7xl lg:mr-20 lg:text-8xl xl:mr-20 xl:text-9xl text-right">
        * GATEWAY
      </p>
    </transition>
  </div>
</template>

<script>
import "animate.css";
import NavbarHome from "@/components/NavbarHome.vue";

export default {
  name: "HomeView",
  components: {
    NavbarHome,
  },
};
</script>

<style scoped>
/* * {
  border: red 1px solid;
} */
</style>
