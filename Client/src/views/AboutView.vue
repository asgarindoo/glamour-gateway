<template>
  <div class="font-quicksand max-h-screen">
    <!-- NavbarHome -->
    <NavbarHome class="z-50 animate__animated animate__fadeInDown navbar" />

    <div class="mx-5 md:mx-20 mt-10">
      <transition name="custom" class="animate__animated animate__fadeInDown">
        <p
          class="text-3xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl ml-5 md:ml-20 font-switzer tracking-widest font-extralight">
          Glamourous Beauty
        </p>
      </transition>
      <transition name="custom" class="animate__animated animate__fadeInDown">
        <p
          class="text-3xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl ml-5 md:ml-36 mt-5 mr-5 md:mr-20 font-switzer tracking-widest font-extralight text-right">
          Professional Service
        </p>
      </transition>
    </div>

    <!-- Counter Grid -->
    <div class="mx-5 md:mx-20 mt-36">
      <div
        class="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center max-w-6xl">
        <!-- Customers -->
        <div
          class="text-center bg-slate-800 text-white rounded-md shadow-sm p-6 animate__animated animate__fadeInDown">
          <div class="flex justify-center">
            <VueJsCounter
              start="0"
              end="1000"
              duration="2000"
              thousand="."
              decimal=","
              class="text-4xl font-medium font-size-800"></VueJsCounter>
            <span class="ml-2 text-4xl">+</span>
          </div>
          <h4 class="mt-2 font-size-600">Customers</h4>
        </div>

        <!-- Products -->
        <div
          class="text-center bg-slate-800 text-white rounded-md shadow-sm p-6 animate__animated animate__fadeInDown">
          <div class="flex justify-center">
            <VueJsCounter
              start="0"
              end="5000"
              duration="2000"
              thousand="."
              decimal=","
              class="text-4xl font-medium font-size-800"></VueJsCounter>
            <span class="ml-2 text-4xl">+</span>
          </div>
          <h4 class="mt-2 font-size-600">Products</h4>
        </div>

        <!-- Revenue -->
        <div
          class="text-center bg-slate-800 text-white rounded-md shadow-sm p-6 animate__animated animate__fadeInDown">
          <div class="flex justify-center">
            <VueJsCounter
              start="0"
              end="100000"
              duration="2000"
              thousand="."
              decimal=","
              class="text-4xl font-medium font-size-800"></VueJsCounter>
            <span class="ml-2 text-4xl">$</span>
          </div>
          <h4 class="mt-2 font-size-600">Revenue</h4>
        </div>

        <!-- Experience -->
        <div
          class="text-center bg-slate-800 text-white rounded-md shadow-sm p-6 animate__animated animate__fadeInDown">
          <div class="flex justify-center">
            <VueJsCounter
              start="0"
              end="20"
              duration="2000"
              thousand="."
              decimal=","
              class="text-4xl font-medium font-size-800"></VueJsCounter>
            <span class="ml-2 text-2xl">th</span>
          </div>
          <h4 class="mt-2 font-size-600">Experience</h4>
        </div>
        <!-- end count -->
      </div>
    </div>
    <!-- end section -->

    <!-- Who we are section -->
    <div
      class="mx-5 md:mx-20 mt-28 md:mt-48 flex flex-col md:flex-row items-center justify-between">
      <div
        class="w-full mb-10 md:w-1/2 pr-0 md:pr-8 animate__animated animate__fadeInLeft">
        <h2 class="text-3xl md:text-6xl font-semibold mb-8">Who we are</h2>
        <p class="text-lg md:text-xl text-gray-700">
          Your premier destination for luxury beauty shopping from around the
          globe. We specialize in offering a personalized Jastip (Jasa Titip)
          service, ensuring that you have access to the most coveted beauty
          products from international markets.
        </p>
      </div>
      <div
        class="grid grid-cols-2 sm:grid-cols- md:grid-cols-2 gap-2 w-full md:w-1/2 bg-cover animate__animated animate__fadeInRight">
        <img
          src="../assets/photo-1610844228349-76b56e6ac462.jpeg"
          alt=""
          class="rounded-lg" />
        <img
          src="../assets/photo-1610844228349-76b56e6ac462.jpeg"
          alt=""
          class="rounded-lg" />
        <img
          src="../assets/photo-1610844228349-76b56e6ac462.jpeg"
          alt=""
          class="rounded-lg" />
        <img
          src="../assets/photo-1610844228349-76b56e6ac462.jpeg"
          alt=""
          class="rounded-lg" />
      </div>
    </div>

    <!-- Our Mission section -->
    <div
      class="mx-5 md:mx-20 mt-20 md:mt-36 text-center animate__animated animate__fadeInUp">
      <h2 class="text-3xl md:text-6xl font-semibold mb-8">Our Mission</h2>
      <p class="text-lg md:text-xl text-gray-700 mb-10">
        At Glamour Gateway, we are committed to providing beauty enthusiasts
        with unparalleled access to the world's finest beauty products. Our
        mission is to make luxury beauty shopping a seamless and delightful
        experience, allowing you to explore and indulge in the latest trends and
        innovations from renowned brands worldwide.
      </p>
    </div>

    <!-- How It Works section -->
    <div
      class="mx-5 md:mx-20 mt-20 md:mt-36 text-center h-screen animate__animated animate__fadeInUp">
      <h2 class="text-3xl md:text-6xl font-semibold mb-8">How It Works</h2>
      <!-- Your existing code for "How It Works" section here -->
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio unde
      quidem, fugiat necessitatibus reprehenderit autem eveniet minima iste
      provident consequuntur voluptatum facere debitis quos aspernatur, nostrum
      dicta, ipsam natus ipsum? Consequatur reiciendis deleniti labore inventore
      nobis ab excepturi suscipit, eum nam consequuntur, quidem assumenda maxime
      optio. Voluptate sequi pariatur quos quibusdam consequuntur adipisci
      facere maxime libero hic sit autem, natus vel nobis exercitationem
      similique dignissimos, distinctio cupiditate? Commodi libero quos
      blanditiis nam quae nesciunt. Veniam quo, perspiciatis fugiat tempora
      deleniti officiis, dicta, repellat voluptate esse saepe nihil quibusdam
      adipisci? Eum voluptatem accusantium ab? Corporis itaque accusamus
      blanditiis perferendis! Provident, nam.
    </div>
  </div>
</template>

<script>
import "animate.css";
import VueJsCounter from "vue-js-counter";
import NavbarHome from "@/components/NavbarHome.vue";

export default {
  name: "HomeView",
  components: {
    NavbarHome,
    VueJsCounter,
  },
};
</script>

<style scoped>
/* * {
  border: red 1px solid;
} */
.navbar {
  border-bottom: 2px solid rgb(100 116 139);
}
</style>
