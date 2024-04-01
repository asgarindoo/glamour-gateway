<template>
  <div class="font-quicksand max-h-screen">
    <!-- NavbarHome -->
    <NavbarHome class="z-50 animate__animated animate__fadeInDown navbar" />

    <div class="mx-10 md:mx-20 mt-10">
      <transition name="custom" class="animate__animated animate__fadeInDown">
        <p
          class="text-3xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl ml-5 md:ml-20 font-switzer tracking-widest font-extralight -z-10">
          Glamourous Beauty
        </p>
      </transition>
      <transition name="custom" class="animate__animated animate__fadeInDown">
        <p
          class="text-3xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl ml-5 md:ml-36 mt-5 mr-5 md:mr-20 font-switzer tracking-widest font-extralight text-right">
          Profesional Service
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
        <p class="text-lg md:text-xl">
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
      class="mx-5 md:mx-20 mt-20 md:mt-36 text-center animate__animated animate__fadeInDown">
      <h2 class="text-3xl md:text-6xl font-semibold mb-8">Our Mission</h2>
      <div class="bg-slate-800 py-10 px-6 rounded-lg shadow-lg">
        <p class="text-lg md:text-xl text-white mb-10 px-14">
          At Glamour Gateway, our mission is to
          <span class="font-bold">ignite</span> your passion for beauty. We're
          not just about products, we're about
          <span class="font-bold">empowerment</span> and
          <span class="font-bold">self-expression</span>. Our goal is to
          <span class="font-bold">inspire</span> and
          <span class="font-bold">empower</span> you to embrace your unique
          beauty and style confidently. With us, luxury beauty isn't just a
          purchase, it's a journey of self-discovery and celebration.
        </p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/7198/7198217.png"
          alt="Mission Icon"
          class="mx-auto w-24 h-24 rounded-full object-cover"
          style="filter: brightness(0) invert(1)" />
      </div>
    </div>

    <!-- How It Works section -->
    <div
      class="mt-20 md:mt-36 text-center animate__animated animate__fadeInDown text-slate-900">
      <h2 class="text-3xl md:text-5xl font-semibold mb-10 pt-10">
        How It Works
      </h2>
      <div
        class="grid grid-cols-1 md:grid-cols-5 gap-8 items-center justify-center mx-20">
        <!-- Step 1 -->
        <div class="max-w-xs mx-auto py-20">
          <img
            src="https://static.thenounproject.com/png/29506-200.png"
            alt="Step 1"
            class="w-[120px] h-[120px] border-8 border-slate-800" />
          <p class="text-lg mt-4">Browse</p>
        </div>
        <!-- Step 2 -->
        <div class="max-w-xs mx-auto">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWuIO5GJf42ApHPcw2EboYg9HRroItiC_CyicuslLnuM9zR1MJAK8fajIH7dFMfCIc6l8&usqp=CAU"
            alt="Step 2"
            class="w-[120px] h-[120px] border-8 border-slate-800" />
          <p class="text-lg mt-4">Add to Cart</p>
        </div>
        <!-- Step 3 -->
        <div class="max-w-xs mx-auto">
          <img
            src="https://www.svgrepo.com/show/374806/checkout.svg"
            alt="Step 3"
            class="w-[120px] h-[120px] border-8 border-slate-800" />
          <p class="text-lg mt-4">Checkout</p>
        </div>
        <!-- Step 4 -->
        <div class="max-w-xs mx-auto">
          <img
            src="https://media.istockphoto.com/id/1375716890/vector/same-day-delivery-icon-vector-for-graphic-design-logo-website-social-media-mobile-app-ui.jpg?s=612x612&w=0&k=20&c=f0tCmdUgj9Fq0pC1Ni9V6v6Jp0LV0UdrKXSUOUd-0gs="
            alt="Step 4"
            class="w-[120px] h-[120px] border-8 border-slate-800" />
          <p class="text-lg mt-4">Delivery</p>
        </div>
        <!-- Step 5 -->
        <div class="max-w-xs mx-auto">
          <img
            src="https://cdn-icons-png.flaticon.com/512/284/284128.png"
            alt="Step 5"
            class="w-[120px] h-[120px] border-8 border-slate-800" />
          <p class="text-lg mt-4">Enjoy</p>
        </div>
      </div>
    </div>

    <!-- Contact Us section -->
    <div
      class="bg-slate-800 mt-20 md:mt-36 text-white py-20 px-8 md:px-20 flex flex-col justify-center items-center">
      <div class="mx-auto md:flex justify-between items-center">
        <!-- Contact Information -->
        <div class="md:mr-16 mb-8 w-full md:w-1/2">
          <h2 class="text-3xl md:text-5xl font-semibold mb-4">
            Contact Information
          </h2>
          <p class="text-lg md:text-xl text-white my-6">
            Have questions or need assistance? Feel free to reach out to us
            using the contact information below.
          </p>
          <div class="mb-4 flex items-center">
            <i class="fas fa-envelope mr-2"></i>
            <div>
              <p class="text-gray-400 mt-6">Email:</p>
              <a
                href="mailto:info@glamourgateway.com"
                class="hover:text-gray-300 transition-colors duration-300"
                >info@glamourgateway.com</a
              >
            </div>
          </div>
          <div class="flex items-center">
            <i class="fas fa-phone mr-2"></i>
            <div>
              <p class="text-gray-400">Phone:</p>
              <p>+1 (123) 456-7890</p>
            </div>
          </div>
        </div>
        <!-- Subscribe Newsletter Form -->
        <div class="bg-white w-full lg:w-1/2 rounded-lg shadow-md p-8 md:p-12">
          <h2 class="text-2xl md:text-3xl font-semibold mb-4 text-slate-900">
            Subscribe Newsletter
          </h2>
          <form action="#" method="POST">
            <div class="mb-6">
              <label for="email" class="block text-gray-800 font-medium mb-2"
                >Email:</label
              >
              <div class="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full border-gray-300 text-slate-900 rounded-md p-3 pl-10"
                  placeholder="Your Email"
                  required />
                <div class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <i class="fas fa-envelope text-slate-900"></i>
                </div>
              </div>
            </div>
            <button
              type="submit"
              class="bg-slate-800 text-white px-6 py-3 rounded-md hover:bg-slate-900 transition-colors duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>

    <div>
      <FooterVue />
    </div>
  </div>
</template>

<script>
import "animate.css";
import VueJsCounter from "vue-js-counter";
import NavbarHome from "@/components/NavbarHome.vue";
import FooterVue from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    NavbarHome,
    VueJsCounter,
    FooterVue,
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
