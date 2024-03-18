<template>
  <div>
    <NavbarHome
      class="z-50 border-none navbar animate__animated animate__fadeInDown" />
    <div class="grid grid-cols-4 gap-6 mx-20">
      <!-- Category Section -->
      <div class="col-span-1 mt-10">
        <!-- Add your category component here -->
        <CategorySidebar />
      </div>

      <!-- Product Grid Section -->
      <div
        class="col-span-3 grid grid-cols-3 gap-6 mt-10 animate__animated animate__fadeInRight ">
        <ProductsItem
          v-for="product in products"
          :key="product.id"
          :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProductsItem from "@/components/ProductsItem.vue";
import NavbarHome from "@/components/NavbarHome.vue";

export default {
  components: {
    ProductsItem,
    NavbarHome,
  },
  data() {
    return {
      products: [],
    };
  },
  async created() {
    const result = await axios.get("http://localhost:8000/api/products");
    this.products = result.data.map((product) => ({
      ...product,
      price: product.price.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      }), // Format harga dalam mata uang Rupiah
    }));
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
