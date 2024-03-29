<template>
  <div
    class="flex h-screen antialiased bg-gray-50 font-quicksand overflow-x-hidden">
    <!-- Sidebar -->
    <aside
      :class="{ 'w-64': isSidebarOpen, 'w-0': !isSidebarOpen }"
      class="bg-slate-900 fixed h-screen rounded-r-md text-gray-100 text-md font-medium overflow-y-auto transition-all duration-300">
      <!-- Navigation -->
      <nav class="py-6 mx-1 text-sm">
        <div class="w-24 h-24 rounded-full object-cover bg-gray-200 mx-auto">
          <img
            class=""
            src="../../assets/logoLetterG-NoBG.png"
            alt="Admin Page Image" />
        </div>
        <ul class="mt-6">
          <li>
            <a
              @click="setCurrentView('dashboard')"
              :class="{
                'bg-slate-800 text-white px-10 ': currentView === 'dashboard',
              }"
              class="flex items-center px-6 py-3 rounded-md hover:bg-slate-800 hover:pl-10 transition-all duration-150 ease-in-out">
              <i class="fas fa-tachometer-alt mr-2"></i>
              Dashboard
            </a>
          </li>
          <li>
            <a
              @click="setCurrentView('products')"
              :class="{
                'bg-slate-800 text-white px-10 ': currentView === 'products',
              }"
              class="flex items-center px-6 py-3 rounded-md hover:bg-slate-800 hover:pl-10 transition-all duration-150 ease-in-out">
              <i class="fas fa-box mr-2"></i>
              Products
            </a>
          </li>
          <li>
            <a
              @click="setCurrentView('orders')"
              :class="{
                'bg-slate-800 text-white px-10 ': currentView === 'orders',
              }"
              class="flex items-center px-6 py-3 rounded-md hover:bg-slate-800 hover:pl-10 transition-all duration-150 ease-in-out">
              <i class="fas fa-shopping-cart mr-2"></i>
              Orders
            </a>
          </li>
          <li>
            <a
              @click="setCurrentView('reports')"
              :class="{
                'bg-slate-800 text-white px-10 ': currentView === 'reports',
              }"
              class="flex items-center px-6 py-3 rounded-md hover:bg-slate-800 hover:pl-10 transition-all duration-150 ease-in-out">
              <i class="fas fa-chart-bar mr-2"></i>
              Reports
            </a>
          </li>
          <li>
            <a
              @click="setCurrentView('settings')"
              :class="{
                'bg-slate-800 text-white px-10 ': currentView === 'settings',
              }"
              class="flex items-center px-6 py-3 rounded-md hover:bg-slate-800 hover:pl-10 transition-all duration-150 ease-in-out">
              <i class="fas fa-cog mr-2"></i>
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <main
      :class="{ 'ml-64': isSidebarOpen, 'ml-0': !isSidebarOpen }"
      class="flex-1 bg-gray-50 transition-all duration-300 ease-in-out">
      <!-- Navbar -->
      <nav class="bg-glassmorph fixed w-full">
        <div class="px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between sm:h-16 items-center">
            <!-- Navbar Left Content -->
            <button
              @click="toggleSidebar"
              class="block px-4 py-2 focus:outline-none">
              <svg
                class="w-6 h-6 text-slate-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>

            <!-- Navbar Right Items -->
            <div
              class="flex items-center transition-all duration-300 ease-in-out"
              :class="{ 'mr-64': isSidebarOpen }">
              <button
                @click="toggleDropdown"
                class="text-slate-900 focus:outline-none">
                <img
                  class="w-8 h-8 rounded-full object-cover"
                  src="https://avatars.githubusercontent.com/u/48755788?s=60&amp;v=4"
                  alt="User Avatar" />
              </button>

              <!-- Dropdown for logout -->
              <div
                v-if="isDropdownOpen == true"
                :class="{ 'mr-64': isSidebarOpen }"
                class="absolute right-20 mt-2 bg-white rounded-sm shadow">
                <button
                  @click="logout"
                  class="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            </div>
            <!-- End Navbar right items -->
          </div>
        </div>
      </nav>

      <!-- Content -->
      <div class="p-10 max-w-7xl mx-auto my-10">
        <component :is="currentViewComponent"></component>
      </div>
    </main>
  </div>
</template>

<script>
import DashboardAdmin from "@/views/admin/dashboardAdmin.vue";
import ProductsAdmin from "@/views/admin/productsAdmin.vue";
import OrdersAdmin from "@/views/admin/ordersAdmin.vue";
import ReportsAdmin from "@/views/admin/reportsAdmin.vue";
import SettingsAdmin from "@/views/admin/settingsAdmin.vue";

export default {
  data() {
    return {
      currentView: "dashboard",

      views: {
        dashboard: DashboardAdmin,
        products: ProductsAdmin,
        orders: OrdersAdmin,
        reports: ReportsAdmin,
        settings: SettingsAdmin,
      },
      isSidebarOpen: true,
      isDropdownOpen: false,
      logoURL: "../assets/logoLetterG-NoBG.png",
    };
  },
  methods: {
    setCurrentView(view) {
      this.currentView = view;
    },
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    logout() {
      console.log("Logged out");
      // Example: redirect to login page
      // this.$router.push("/login");
    },
  },
  computed: {
    currentViewComponent() {
      return this.views[this.currentView];
    },
  },
};
</script>

<style scoped>
.bg-glassmorph {
  background-color: rgba(244, 244, 244, 0.2);
  backdrop-filter: blur(8px);
}
</style>
