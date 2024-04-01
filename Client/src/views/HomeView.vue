<template>
  <div class="font-quicksand max-h-screen">
    <NavbarHome
      class="animate__animated animate__fadeInDown animate__delay-1s" />

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
          class="grid grid-cols-1 sm:grid-cols-2 mx-5 sm:mx-10 mt-7 gap-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-5 lg:mr-24 lg:mt-0 xl:grid-cols-4 xl:gap-5 xl:mr-20 xl:mt-0">
          <div
            v-for="(photo, index) in photos"
            :key="index"
            class="flex justify-center lg:justify-start xl:justify-start">
            <img
              :src="require(`@/assets/${photo}`)"
              :class="{
                'lg:block xl:block w-full h-24 sm:h-48 md:h-48 lg:w-36 lg:h-96 xl:w-36 xl:h-96 object-cover shadow-sm':
                  index % 2 === 1,
                'lg:block xl:block w-full h-24 sm:h-48 md:h-48 lg:w-36 lg:h-80 xl:w-36 xl:h-80 object-cover shadow-sm':
                  index % 2 === 0,
              }" />
          </div>
        </div>
      </transition>
    </div>
    <transition
      name="custom"
      class="animate__animated animate__fadeInUp animate__delay-1s">
      <p
        class="ml-5 mt-10 text-5xl tracking-widest font-switzer sm:ml-10 sm:text-6xl md:ml-20 md:text-7xl lg:ml-20 lg:text-8xl xl:ml-20 xl:text-9xl">
        GLAMOUR
      </p>
    </transition>
    <transition
      name="custom"
      class="animate__animated animate__fadeInUp animate__delay-1s">
      <p
        class="mr-5 text-5xl tracking-widest font-switzer sm:mr-10 sm:text-6xl md:mr-20 md:text-7xl lg:mr-20 lg:text-8xl xl:mr-20 xl:text-9xl text-right">
        * GATEWAY
      </p>
    </transition>

    <!-- Promotional Offers Section -->
    <div class="mt-20 mx-10 sm:mx-10 md:mx-10 lg:mx-20 py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl tracking-widest font-switzer text-right mb-8">
          * Promotional Offers
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <!-- Promotion 1 -->
          <div class="p-6 rounded-lg shadow-md bg-slate-900 text-white">
            <h3 class="text-xl font-semibold mb-4 text-white">
              20% Off Weekend Sale
            </h3>
            <p class="text-white">
              Get 20% off on all products this weekend! Use code: WEEKEND20.
              Hurry, offer ends soon!
            </p>
          </div>
          <!-- Promotion 2 -->
          <div class="p-6 rounded-lg shadow-md bg-slate-900 text-white">
            <h3 class="text-xl font-semibold mb-4 text-white">
              Newsletter Signup Discount
            </h3>
            <p class="text-white">
              Sign up for our newsletter and receive a $10 discount on your
              first purchase!
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Featured Products Section -->
    <div class="mt-20 h-[1000px]">
      <!-- Title for the featured products section -->
      <transition
        name="custom"
        class="animate__animated animate__fadeInUp animate__delay-1s">
        <p class="ml-20 mt-20 text-3xl tracking-widest font-switzer">
          * Featured Products
        </p>
      </transition>

      <div class="flex mx-20">
        <!-- First Carousel -->
        <Carousel
          :itemsToShow="3.7"
          :wrapAround="true"
          :transition="1000"
          :autoplay="3000"
          class="overflow-hidden">
          <!-- Products for the first carousel -->
          <Slide
            v-for="(product, index) in products"
            :key="index"
            class="-mx-2">
            <div class="font-quicksand mt-10 mx-5 text-left w-[300px]">
              <img
                :src="product.image"
                class="w-full h-64 object-cover mb-4"
                alt="Product Image" />
              <div class="px-4">
                <div
                  class="font-bold text-base md:text-xs lg:text-lg mb-2 text-gray-900 overflow-hidden">
                  {{ product.name }}
                  <p
                    class="text-gray-700 text-sm md:text-xs lg:text-md h-4 font-medium">
                    Pruduct Category - From Korea
                  </p>
                </div>

                <p
                  class="text-gray-700 text-sm md:text-xs lg:text-md h-4 mb-4 overflow-y-auto">
                  Description
                </p>
              </div>
              <div
                class="px-2 py-2 sm:px-2 sm:py-2 md:px-2 md:py-2 lg:px-4 lg:py-4 flex justify-between items-center bg-slate-800">
                <p
                  class="text-white text-xs sm:text-xs md:text-xs lg:text-md xl:text-base font-semibold mr-2">
                  Rp. {{ product.price }}
                </p>
                <router-link
                  to="#"
                  class="bg-white px-2 py-1 md:px-2 md:py-1 lg:px-4 lg:py-2 xl:px-4 xl:py-2 text-xs sm:text-xs md:text-xs lg:text-md xl:text-md rounded-sm text-slate-800 hover:text-slate-900 hover:bg-gray-200 font-semibold ml-2">
                  Details
                </router-link>
              </div>
            </div>
          </Slide>
        </Carousel>
      </div>
      <div class="flex mx-20">
        <!-- Second Carousel -->
        <Carousel
          :itemsToShow="3.7"
          :wrapAround="true"
          :transition="1000"
          :autoplay="4000"
          class="overflow-hidden">
          <!-- Products for the first carousel -->
          <Slide
            v-for="(product, index) in products"
            :key="index"
            class="-mx-2">
            <div class="font-quicksand mt-10 mx-5 text-left w-[300px]">
              <img
                :src="product.image"
                class="w-full h-64 object-cover mb-4"
                alt="Product Image" />
              <div class="px-4">
                <div
                  class="font-bold text-base md:text-xs lg:text-lg mb-2 text-gray-900 overflow-hidden">
                  {{ product.name }}
                  <p
                    class="text-gray-700 text-sm md:text-xs lg:text-md h-4 font-medium">
                    Pruduct Category - From Korea
                  </p>
                </div>

                <p
                  class="text-gray-700 text-sm md:text-xs lg:text-md h-4 mb-4 overflow-y-auto">
                  Description
                </p>
              </div>
              <div
                class="px-2 py-2 sm:px-2 sm:py-2 md:px-2 md:py-2 lg:px-4 lg:py-4 flex justify-between items-center bg-slate-800">
                <p
                  class="text-white text-xs sm:text-xs md:text-xs lg:text-md xl:text-base font-semibold mr-2">
                  Rp. {{ product.price }}
                </p>
                <router-link
                  to="#"
                  class="bg-white px-2 py-1 md:px-2 md:py-1 lg:px-4 lg:py-2 xl:px-4 xl:py-2 text-xs sm:text-xs md:text-xs lg:text-md xl:text-md rounded-sm text-slate-800 hover:text-slate-900 hover:bg-gray-200 font-semibold ml-2">
                  Details
                </router-link>
              </div>
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>

    <!-- Testimonial Section -->
    <div class="mt-20 bg-slate-800 py-12">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl tracking-widest font-switzer text-left mb-8 text-white">
          * Testimonials
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <!-- Testimonial 1 -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <p class="text-gray-800 text-base">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
            <div class="flex items-center mt-4">
              <img
                class="h-10 w-10 rounded-full mr-4"
                src="https://via.placeholder.com/50"
                alt="testimonial" />
              <div>
                <p class="text-gray-900 font-semibold">John Doe</p>
                <p class="text-gray-600">CEO, Company Inc.</p>
              </div>
            </div>
          </div>
          <!-- Testimonial 2 -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <!-- Testimonial content goes here -->
            <p class="text-gray-800 text-base">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
            <div class="flex items-center mt-4">
              <img
                class="h-10 w-10 rounded-full mr-4"
                src="https://via.placeholder.com/50"
                alt="testimonial" />
              <div>
                <p class="text-gray-900 font-semibold">John Doe</p>
                <p class="text-gray-600">CEO, Company Inc.</p>
              </div>
            </div>
          </div>
          <!-- Testimonial 3 -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <!-- Testimonial content goes here -->
            <p class="text-gray-800 text-base">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
            <div class="flex items-center mt-4">
              <img
                class="h-10 w-10 rounded-full mr-4"
                src="https://via.placeholder.com/50"
                alt="testimonial" />
              <div>
                <p class="text-gray-900 font-semibold">John Doe</p>
                <p class="text-gray-600">CEO, Company Inc.</p>
              </div>
            </div>
          </div>
          <!-- Testimonial 4 -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <!-- Testimonial content goes here -->
            <p class="text-gray-800 text-base">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
            <div class="flex items-center mt-4">
              <img
                class="h-10 w-10 rounded-full mr-4"
                src="https://via.placeholder.com/50"
                alt="testimonial" />
              <div>
                <p class="text-gray-900 font-semibold">John Doe</p>
                <p class="text-gray-600">CEO, Company Inc.</p>
              </div>
            </div>
          </div>
          <!-- Testimonial 4 -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <!-- Testimonial content goes here -->
            <p class="text-gray-800 text-base">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
            <div class="flex items-center mt-4">
              <img
                class="h-10 w-10 rounded-full mr-4"
                src="https://via.placeholder.com/50"
                alt="testimonial" />
              <div>
                <p class="text-gray-900 font-semibold">John Doe</p>
                <p class="text-gray-600">CEO, Company Inc.</p>
              </div>
            </div>
          </div>
          <!-- Testimonial 6 -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <!-- Testimonial content goes here -->
            <p class="text-gray-800 text-base">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
            <div class="flex items-center mt-4">
              <img
                class="h-10 w-10 rounded-full mr-4"
                src="https://via.placeholder.com/50"
                alt="testimonial" />
              <div>
                <p class="text-gray-900 font-semibold">John Doe</p>
                <p class="text-gray-600">CEO, Company Inc.</p>
              </div>
            </div>
          </div>
          <!-- Testimonial 7 -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <!-- Testimonial content goes here -->
            <p class="text-gray-800 text-base">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
            <div class="flex items-center mt-4">
              <img
                class="h-10 w-10 rounded-full mr-4"
                src="https://via.placeholder.com/50"
                alt="testimonial" />
              <div>
                <p class="text-gray-900 font-semibold">John Doe</p>
                <p class="text-gray-600">CEO, Company Inc.</p>
              </div>
            </div>
          </div>
          <!-- Testimonial 8 -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <!-- Testimonial content goes here -->
            <p class="text-gray-800 text-base">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
            <div class="flex items-center mt-4">
              <img
                class="h-10 w-10 rounded-full mr-4"
                src="https://via.placeholder.com/50"
                alt="testimonial" />
              <div>
                <p class="text-gray-900 font-semibold">John Doe</p>
                <p class="text-gray-600">CEO, Company Inc.</p>
              </div>
            </div>
          </div>
          <!-- Testimonial 9 -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <!-- Testimonial content goes here -->
            <p class="text-gray-800 text-base">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
            <div class="flex items-center mt-4">
              <img
                class="h-10 w-10 rounded-full mr-4"
                src="https://via.placeholder.com/50"
                alt="testimonial" />
              <div>
                <p class="text-gray-900 font-semibold">John Doe</p>
                <p class="text-gray-600">CEO, Company Inc.</p>
              </div>
            </div>
          </div>
          <!-- End Testimonial -->
        </div>
      </div>
    </div>

    <!-- Section Carousel Pengiriman -->
    <div class="mt-10 py-12 mx-20 h-[500px]">
      <div class="container px-4">
        <h2 class="text-3xl tracking-widest font-switzer mb-20">* Shipping</h2>
        <Carousel
          :itemsToShow="4"
          :wrapAround="true"
          :transition="1000"
          :autoplay="true"
          :autoplayInterval="5000"
          class="overflow-hidden">
          <!-- Slides untuk layanan pengiriman -->
          <Slide
            v-for="(deliveryService, index) in deliveryServices"
            :key="index"
            class="px-2">
            <div class="flex items-center justify-center">
              <img
                :src="deliveryService.logo"
                alt="Logo Layanan Pengiriman"
                class="h-36" />
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>

    <!-- Footer Section -->
    <div>
      <FooterVue />
    </div>
  </div>
</template>

<script>
import "animate.css";
import NavbarHome from "@/components/NavbarHome.vue";
import FooterVue from "../components/Footer.vue";
import "vue3-carousel/dist/carousel.css";

import { Carousel, Slide } from "vue3-carousel";

export default {
  name: "HomeView",
  components: {
    Carousel,
    Slide,
    NavbarHome,
    FooterVue,
  },
  data() {
    return {
      photos: [
        "rosa-rafael.jpg",
        "rosa-rafael.jpg",
        "rosa-rafael.jpg",
        "rosa-rafael.jpg",
      ],
      products: [
        {
          id: 1,
          name: "Product 1",
          image: "https://via.placeholder.com/300",
          price: 1000000,
        },
        {
          id: 2,
          name: "Product 2",
          image: "https://via.placeholder.com/300",
          price: 1500000,
        },
        {
          id: 3,
          name: "Product 3",
          image: "https://via.placeholder.com/300",
          price: 800000,
        },
        {
          id: 4,
          name: "Product 4",
          image: "https://via.placeholder.com/300",
          price: 1200000,
        },
        // Add more products as needed
      ],
      promotions: [
        {
          title: "20% Off Weekend Sale",
          description:
            "Get 20% off on all products this weekend! Use code: WEEKEND20. Hurry, offer ends soon!",
          image: "https://via.placeholder.com/300",
        },
        {
          title: "Newsletter Signup Discount",
          description:
            "Sign up for our newsletter and receive a $10 discount on your first purchase!",
          image: "https://via.placeholder.com/300",
        },
      ],
      deliveryServices: [
        {
          name: "SAP Express",
          logo: "https://www.sap-express.id/assets/img/logo/sapx-logo-og-image.png",
        },
        {
          name: "Arahin Id",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTRj4boMvd_B2bNbBQLZ-TrSfilRqjgwZQOEEtryqMug&s",
        },
        {
          name: "JNT Express",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4suisXsn-dIb5bUs-CjpwlaGN1j7A8EaqKM5tz_Tkl5GEvO6qzokpcJ9vmeoumG0tEw&usqp=CAU",
        },
        {
          name: "JNE Express",
          logo: "https://pkk.uma.ac.id/wp-content/uploads/2023/06/jne2.png",
        },
        // Tambahan layanan pengiriman lainnya
      ],
    };
  },
};
</script>

<style scoped>
/* * {
  border: red 1px solid;
} */
</style>
