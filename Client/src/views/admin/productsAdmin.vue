<template>
  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-semibold text-gray-800 mb-6">Products</h1>

    <!-- Filter Kategori -->
    <label
      for="year"
      class="font-sm mr-2 px-5 py-3 mt-4 bg-gray-800 text-white rounded-sm font-medium"
      >Select Category:</label
    >
    <select
      v-model="selectedCategory"
      @change="filterProducts"
      class="px-5 py-3 bg-gray-800 text-white font-medium">
      <option value="" class="font-medium">All Categories</option>
      <option
        v-for="category in categories"
        :value="category.id"
        :key="category.id"
        class="bg-slate-900 text-white font-medium">
        {{ category.name }}
      </option>
    </select>

    <!-- Tabel Produk -->
    <div class="overflow-auto h-[500px] text-sm">
      <table class="min-w-full bg-white shadow-md my-6">
        <thead class="bg-gray-800 text-white">
          <tr>
            <th class="py-3 px-6 text-left">Image</th>
            <th class="py-3 px-6 text-left">Name</th>
            <th class="py-3 px-6 text-left">Description</th>
            <th class="py-3 px-6 text-left">Category</th>
            <th class="py-3 px-6 text-left">Price</th>
            <th class="py-3 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody class="text-gray-700">
          <tr
            v-for="product in filteredProducts"
            :key="product.id"
            class="h-10">
            <td class="py-4 px-6">
              <img
                :src="product.img"
                alt="Product Image"
                class="w-10 h-10 object-cover rounded" />
            </td>
            <td class="py-4 px-6">{{ product.title }}</td>
            <td class="py-4 px-6">{{ product.description }}</td>
            <td class="py-4 px-6">{{ product.category }}</td>
            <td class="py-4 px-6">{{ product.price }}</td>
            <td class="py-4 px-6 flex">
              <button
                @click="editProduct(product)"
                class="bg-slate-700 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded">
                Edit
              </button>
              <button
                @click="deleteProduct(product.id)"
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProductsAdmin",

  data() {
    return {
      products: [], // Array produk dari database
      categories: [], // Daftar kategori produk
      selectedCategory: "", // Kategori yang dipilih untuk disaring
      showAddProductModal: false, // Menampilkan atau menyembunyikan modal tambah produk
    };
  },
  computed: {
    filteredProducts() {
      if (!this.selectedCategory) return this.products;
      return this.products.filter(
        (product) => product.category === this.selectedCategory
      );
    },
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get("http://localhost:8000/api/products");
        this.products = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    // Fungsi untuk menambahkan produk baru
    addProduct(newProduct) {
      // Lakukan penambahan produk ke database atau sumber data lainnya
      this.products.push(newProduct);
      // Tutup modal tambah produk
      this.showAddProductModal = false;
    },
    // Fungsi untuk menghapus produk berdasarkan ID
    deleteProduct(productId) {
      this.products = this.products.filter(
        (product) => product.id !== productId
      );
    },
    // Fungsi untuk menyaring produk berdasarkan kategori yang dipilih
    filterProducts() {
      // Lakukan filter produk
    },
  },
  created() {
    // Panggil fetchData() saat komponen dibuat untuk mengambil data produk dari database
    this.fetchData();

    // Simulasikan pengambilan data kategori dari database
    // Gantilah ini dengan logika pengambilan data sesungguhnya
    this.categories = [
      { id: "Category A", name: "Category A" },
      { id: "Category B", name: "Category B" },
      // Tambahkan kategori lainnya...
    ];
  },
};
</script>

<style scoped></style>
