<template>
  <div class="flex h-screen antialiased bg-gray-100 font-quicksand">
    <!-- Sidebar -->
    <aside class="w-64 bg-white border-r-2 border text-slate-800 shadow-xl">
      <!-- Navigation -->
      <nav class="py-6 mx-1 text-sm">
        <div class="text-2xl font-semibold text-slate-800 text-center mb-3">
          Admin Page GG
        </div>
        <ul>
          <li>
            <a
              @click="setCurrentView('dashboard')"
              :class="{
                'bg-gray-200': currentView === 'dashboard',
                'font-semibold': currentView === 'dashboard',
                'text-slate-800': currentView !== 'dashboard',
              }"
              class="block px-4 py-2 rounded-md hover:bg-gray-200 hover:font-semibold transition duration-150 ease-in-out"
              >Dashboard</a
            >
          </li>
          <li>
            <a
              @click="setCurrentView('products')"
              :class="{
                'bg-gray-200': currentView === 'products',
                'font-semibold': currentView === 'products',
                'text-slate-800': currentView !== 'products',
              }"
              class="block px-4 py-2 rounded-md hover:bg-gray-200 hover:font-semibold transition duration-150 ease-in-out"
              >Products</a
            >
          </li>
          <li>
            <a
              @click="setCurrentView('orders')"
              :class="{
                'bg-gray-200': currentView === 'orders',
                'font-semibold': currentView === 'orders',
                'text-slate-800': currentView !== 'orders',
              }"
              class="block px-4 py-2 rounded-md hover:bg-gray-200 hover:font-semibold transition duration-150 ease-in-out"
              >Orders</a
            >
          </li>
          <li>
            <a
              @click="setCurrentView('reports')"
              :class="{
                'bg-gray-200': currentView === 'reports',
                'font-semibold': currentView === 'reports',
                'text-slate-800': currentView !== 'reports',
              }"
              class="block px-4 py-2 rounded-md hover:bg-gray-200 hover:font-semibold transition duration-150 ease-in-out"
              >Reports</a
            >
          </li>
          <li>
            <a
              @click="setCurrentView('settings')"
              :class="{
                'bg-gray-200': currentView === 'settings',
                'font-semibold': currentView === 'settings',
                'text-slate-800': currentView !== 'settings',
              }"
              class="block px-4 py-2 rounded-md hover:bg-gray-200 hover:font-semibold transition duration-150 ease-in-out"
              >Settings</a
            >
          </li>
          <!-- Add more sidebar items as needed -->
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 bg-white">
      <!-- Navbar -->
      <nav class="bg-white fixed">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex items-center">
              <!-- Navbar Links -->
              <div class="hidden sm:block">
                <a
                  href="#"
                  class="px-3 py-2 rounded-md text-sm font-semibold text-slate-800 hover:text-gray-8 hover:font-medium00 focus:outline-none focus:text-gray-800 transition duration-150 ease-in-out"
                  >Home</a
                >
                <a
                  href="#"
                  class="px-3 py-2 rounded-md text-sm font-semibold text-slate-800 hover:text-gray-8 hover:font-medium00 focus:outline-none focus:text-gray-800 transition duration-150 ease-in-out"
                  >About</a
                >
              </div>
            </div>
            <!-- Navbar Right Items -->
            <div class="hidden sm:flex sm:items-center">
              <div class="">
                <button
                  class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://avatars.githubusercontent.com/u/48755788?s=60&amp;v=4"
                    alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <!-- Content -->
      <div class="p-10 max-w-7xl my-10">
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
    };
  },
  methods: {
    setCurrentView(view) {
      this.currentView = view;
    },
  },
  computed: {
    currentViewComponent() {
      return this.views[this.currentView];
    },
  },
};
</script>

<style>
* {
  border: red 1px solid;
}
</style>
