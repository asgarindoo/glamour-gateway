<template>
  <div class="font-quicksand max-h-screen">
    <!-- NavbarHome -->
    <NavbarHome
      class="z-50 animate__animated animate__fadeInDown border-none navbar" />

    <div class="mx-20 mt-10">
      <transition name="custom" class="animate__animated animate__fadeInDown">
        <p class="text-7xl ml-20 font-switzer tracking-widest font-extralight">
          Glamourous Beauty
        </p>
      </transition>
      <transition name="custom" class="animate__animated animate__fadeInDown">
        <p
          class="ml-36 mt-5 mr-20 font-switzer tracking-widest font-extralight text-7xl text-right">
          Professional Service
        </p>
      </transition>
    </div>

    <!-- Counter Grid -->
    <div class="mx-20 mt-20">
      <div class="mx-20 grid grid-cols-2 gap-10 justify-center">
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
    <div>
      <div
        class="mx-auto gap-20 max-w-6xl mt-40 flex items-center justify-between">
        <div class="w-1/2 pr-8 animate__animated animate__fadeInLeft">
          <h2 class="text-6xl font-semibold mb-8">Who we are</h2>
          <p class="text-xl text-gray-700">
            Your premier destination for luxury beauty shopping from around the
            globe. We specialize in offering a personalized Jastip (Jasa Titip)
            service, ensuring that you have access to the most coveted beauty
            products from international markets.
          </p>
        </div>
        <div
          class="grid grid-cols-2 gap-2 w-1/2 bg-cover animate__animated animate__fadeInRight">
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
      <div class="mx-56 mt-36 text-center animate__animated animate__fadeInUp">
        <h2 class="text-6xl font-semibold mb-8">Our Mission</h2>
        <p class="text-xl text-gray-700 mb-10">
          At Glamour Gateway, we are committed to providing beauty enthusiasts
          with unparalleled access to the world's finest beauty products. Our
          mission is to make luxury beauty shopping a seamless and delightful
          experience, allowing you to explore and indulge in the latest trends
          and innovations from renowned brands worldwide.
        </p>
      </div>
    </div>

    <div
      class="mx-56 mt-36 text-center h-screen animate__animated animate__fadeInUp">
      <h2 class="text-6xl font-semibold mb-8">How It Works</h2>
      <p class="text-xl text-gray-700 mt-8">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta ab
        eaque labore quod, nisi possimus modi eum sequi, voluptatum non impedit
        sint porro laudantium eius dolorum voluptas omnis ea? Dolorem deserunt
        consequuntur perferendis tempora officiis facilis laudantium.
        Necessitatibus, perferendis vitae nihil nisi repellat, veritatis unde
        velit iste animi, dolorum quasi.
      </p>
      <p class="text-xl text-gray-700 mt-8">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo amet
        hic optio nostrum vel aliquam porro quisquam, eum libero similique
        itaque! Tempore aperiam quam voluptate, corporis laboriosam soluta
        magnam expedita. Cumque laboriosam itaque, dicta doloremque ipsum autem
        modi quos unde excepturi numquam nesciunt voluptas. Nobis ea voluptatum
        recusandae dolor aspernatur.
      </p>
      <p class="text-xl text-gray-700 mt-8">
        Effortless Delivery: Sit back and relax as we take care of the
        logistics. We handle all aspects of shipping, customs clearance, and
        delivery to ensure that your beauty treasures arrive safely and swiftly
        at your doorstep.
      </p>
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
