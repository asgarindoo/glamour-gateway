<template>
  <div
    class="sidebar col-md-3 px-0 font-quicksand h-screen animate__animated animate__fadeInUp">
    <div
      class="filter-header text-slate-800 px-4 py-3 flex justify-between items-center border-b-2 border-slate-500">
      <h1 class="filter-title text-lg font-semibold">Filter</h1>
    </div>
    <div class="sidebar__inner">
      <div class="filter-body">
        <div>
          <h2
            class="filter-category text-gray-700 font-semibold text-sm mt-4 px-4">
            Price
          </h2>
          <div class="filter-options px-4">
            <input
              type="text"
              class="form-control border rounded py-2 px-3 w-full mt-2"
              placeholder="Min"
              v-model="minPrice" />
            <input
              type="text"
              class="form-control border rounded py-2 px-3 w-full mt-2"
              placeholder="Max"
              v-model="maxPrice" />
          </div>

          <h2
            class="filter-category mt-4 px-4 text-gray-700 font-semibold text-sm">
            Stok
          </h2>
          <div class="filter-options px-4 mt-4">
            <div class="flex items-center">
              <input
                type="checkbox"
                class="form-checkbox h-4 w-4 text-indigo-600"
                id="inStock"
                v-model="inStock" />
              <label for="inStock" class="ml-2 text-sm text-gray-600"
                >In Stock</label
              >
            </div>
          </div>

          <div class="filter-options mt-4 px-4">
            <div class="relative">
              <span
                class="selected-category cursor-pointer text-gray-700 font-semibold text-sm mt-4"
                @click="toggleCountryDropdown"
                >{{ selectedCountry ? selectedCountry : "Country" }}</span
              >
              <div v-show="isCountryDropdownOpen" class="dropdown-menu mt-2">
                <a
                  @click="selectCountry('Korea')"
                  href="#"
                  class="dropdown-item block py-1 px-2 text-sm text-gray-800 hover:bg-gray-200"
                  >Korea</a
                >
                <a
                  @click="selectCountry('China')"
                  href="#"
                  class="dropdown-item block py-1 px-2 text-sm text-gray-800 hover:bg-gray-200"
                  >China</a
                >
                <a
                  @click="selectCountry('Jepang')"
                  href="#"
                  class="dropdown-item block py-1 px-2 text-sm text-gray-800 hover:bg-gray-200"
                  >Jepang</a
                >
                <a
                  @click="selectCountry('Amerika')"
                  href="#"
                  class="dropdown-item block py-1 px-2 text-sm text-gray-800 hover:bg-gray-200"
                  >Amerika</a
                >
                <a
                  @click="selectCountry('German')"
                  href="#"
                  class="dropdown-item block py-1 px-2 text-sm text-gray-800 hover:bg-gray-200"
                  >German</a
                >
              </div>
            </div>
          </div>

          <div class="filter-options mt-4 px-4">
            <div class="relative">
              <span
                class="selected-category cursor-pointer text-gray-700 font-semibold text-sm mt-4"
                @click="toggleDropdown"
                >{{
                  selectedCategory ? selectedCategory : "All Products"
                }}</span
              >
              <div v-show="isDropdownOpen" class="dropdown-menu mt-2">
                <a
                  @click="selectCategory('Perawatan Kulit')"
                  href="#"
                  class="dropdown-item block py-1 px-2 text-sm text-gray-800 hover:bg-gray-200"
                  >Perawatan Kulit</a
                >
                <a
                  @click="selectCategory('Perawatan Rambut')"
                  href="#"
                  class="dropdown-item block py-1 px-2 text-sm text-gray-800 hover:bg-gray-200"
                  >Perawatan Rambut</a
                >
                <a
                  @click="selectCategory('Make Up')"
                  href="#"
                  class="dropdown-item block py-1 px-2 text-sm text-gray-800 hover:bg-gray-200"
                  >Make Up</a
                >
                <a
                  @click="selectCategory('Perawatan Kuku')"
                  href="#"
                  class="dropdown-item block py-1 px-2 text-sm text-gray-800 hover:bg-gray-200"
                  >Perawatan Kuku</a
                >
                <a
                  @click="selectCategory('Parfum')"
                  href="#"
                  class="dropdown-item block py-1 px-2 text-sm text-gray-800 hover:bg-gray-200"
                  >Parfum</a
                >
                <a
                  @click="selectCategory('Aksesoris')"
                  href="#"
                  class="dropdown-item block py-1 px-2 text-sm text-gray-800 hover:bg-gray-200"
                  >Aksesoris</a
                >
                <a
                  @click="selectCategory('Body')"
                  href="#"
                  class="dropdown-item block py-1 px-2 text-sm text-gray-800 hover:bg-gray-200"
                  >Body</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      minPrice: "",
      maxPrice: "",
      inStock: true,
      selectedCountry: "",
      selectedCategory: "",
      isDropdownOpen: false,
      isCountryDropdownOpen: false,
    };
  },
  methods: {
    toggleCountryDropdown() {
      this.isCountryDropdownOpen = !this.isCountryDropdownOpen;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectCountry(country) {
      this.selectedCountry = country;
      this.isCountryDropdownOpen = false;
    },
    selectCategory(category) {
      this.selectedCategory = category;
      this.isDropdownOpen = false;
    },
  },
};
</script>

<style scoped>
/* * {
  border: red 1px solid;
} */
</style>
