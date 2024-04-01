<template>
  <footer class="bg-slate-900 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="mb-8 md:mb-0">
          <h5 class="text-lg font-bold mb-4">About Us</h5>
          <p>
            We're dedicated to providing top-notch online shopping experiences.
            Join us as we bring you quality products at great prices.
          </p>
        </div>

        <div class="mb-8 md:mb-0">
          <h5 class="text-lg font-bold mb-4">Quick Links</h5>
          <ul class="list-none">
            <li>
              <router-link to="/" class="text-gray-300 hover:text-white"
                >Home</router-link
              >
            </li>
            <li>
              <router-link to="/about" class="text-gray-300 hover:text-white"
                >About</router-link
              >
            </li>
            <li>
              <router-link to="/products" class="text-gray-300 hover:text-white"
                >Products</router-link
              >
            </li>
            <li>
              <router-link to="/about" class="text-gray-300 hover:text-white"
                >Contact</router-link
              >
            </li>
          </ul>
        </div>

        <div>
          <h5 class="text-lg font-bold mb-4">Contact Us</h5>
          <p class="text-gray-300">
            info@glamourgateway.com<br />Jl. Ketintang, Surabaya<br />Indonesia<br />Phone:
            (123) 456-7890
          </p>
        </div>
      </div>
      <hr class="my-8 border-gray-700" />
      <div class="text-center">
        <p>
          &copy; 2024 Made with <span style="color: #ffffff">&#10084;</span> in
          Surabaya
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterVue",
};
</script>

<style scoped>
/* No additional styling required as Tailwind classes are used inline */
</style>
