<template>
  <footer class="bg-slate-900 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="mb-8 md:mb-0">
          <h5 class="text-lg font-bold mb-4">About Us</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            finibus felis ac leo consequat, eget aliquam tortor interdum.
          </p>
        </div>
        <div class="mb-8 md:mb-0">
          <h5 class="text-lg font-bold mb-4">Quick Links</h5>
          <ul class="list-none">
            <li><a href="#" class="text-gray-300 hover:text-white">Home</a></li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white">About</a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white">Services</a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 class="text-lg font-bold mb-4">Contact Us</h5>
          <p class="text-gray-300">
            Company Name<br />123 Street Name, City<br />Country<br />Phone:
            (123) 456-7890
          </p>
        </div>
      </div>
      <hr class="my-8 border-gray-700" />
      <div class="text-center">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
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
