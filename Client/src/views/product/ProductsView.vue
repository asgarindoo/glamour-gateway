<template>
  <div>
    <NavbarHome
      class="border-none navbar animate__animated animate__fadeInDown" />
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mx-5 md:mx-10 lg:mx-20">
      <!-- Category Section -->
      <div class="col-span-1 mt-10 md:mt-0">
        <!-- Add your category component here -->
        <CategorySidebar class="sticky top-0" />
      </div>

      <!-- Product Grid Section -->
      <div
        class="col-span-2 grid grid-cols-2 md:col-span-3 md:grid-cols-3 gap-6 mt-10 animate__animated animate__fadeInRight">
        <ProductsItem
          v-for="product in paginatedProducts"
          :key="product.id"
          :product="product"
          class="font-quicksand" />
      </div>
    </div>

    <!-- Pagination -->
    <div
      class="flex justify-center mt-10 mx-5 mb-10 md:ml-[28%] md:mr-10 lg:mr-20">
      <button
        v-if="currentPage > 1"
        @click="setCurrentPage(currentPage - 1)"
        class="px-4 py-2 mr-2 rounded cursor-pointer bg-slate-800 hover:bg-slate-900 text-white">
        Prev
      </button>

      <button
        v-for="pageNumber in displayedPages"
        :key="pageNumber"
        @click="setCurrentPage(pageNumber)"
        :class="{
          'bg-slate-800 text-white': currentPage === pageNumber,
          'bg-gray-200 hover:bg-gray-300 text-gray-700':
            currentPage !== pageNumber,
        }"
        class="px-4 py-2 mr-2 rounded cursor-pointer">
        {{ pageNumber }}
      </button>

      <button
        v-if="currentPage < totalPages"
        @click="setCurrentPage(currentPage + 1)"
        class="px-4 py-2 ml-2 rounded cursor-pointer bg-slate-800 hover:bg-slate-900 text-white">
        Next
      </button>
    </div>
    <div>
      <FooterVue />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProductsItem from "@/components/ProductsItem.vue";
import NavbarHome from "@/components/NavbarHome.vue";
import CategorySidebar from "@/components/CategorySidebar.vue";

import FooterVue from "../../components/Footer.vue";

export default {
  components: {
    ProductsItem,
    NavbarHome,
    CategorySidebar,
    FooterVue,
  },
  data() {
    return {
      products: [],
      currentPage: 1,
      itemsPerPage: 27,
      maxDisplayedPages: 5,
    };
  },
  computed: {
    paginatedProducts() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.products.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.products.length / this.itemsPerPage);
    },
    displayedPages() {
      const startPage = Math.max(
        1,
        this.currentPage - Math.floor(this.maxDisplayedPages / 2)
      );
      const endPage = Math.min(
        this.totalPages,
        startPage + this.maxDisplayedPages - 1
      );

      const pages = [];
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
  methods: {
    async fetchData() {
      const result = await axios.get("http://localhost:8000/api/products");
      this.products = result.data.map((product) => ({
        ...product,
        price: product.price.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        }),
      }));
    },
    setCurrentPage(pageNumber) {
      this.currentPage = pageNumber;
    },
  },
  async created() {
    await this.fetchData();
  },
};
</script>

<style scoped>
.navbar {
  border-bottom: 2px solid rgb(100 116 139);
}

/* * {
  border: red 1px solid;
} */
</style>
