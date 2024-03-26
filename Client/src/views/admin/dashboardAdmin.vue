<template>
  <div>
    <!-- Header -->
    <header class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-semibold text-gray-800">Dashboard</h1>
      <div class="flex items-center space-x-4">
        <button
          class="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
          Add
        </button>
        <button
          class="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
          Settings
        </button>
      </div>
    </header>

    <!-- Widgets -->
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Widget 1 -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">Total Sales</h2>
        <p class="text-3xl font-bold">1000</p>
      </div>
      <!-- Widget 2 -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">New Users</h2>
        <p class="text-3xl font-bold">500</p>
      </div>
      <!-- Widget 3 -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">Revenue</h2>
        <p class="text-3xl font-bold">$10,000</p>
      </div>
      <!-- Widget 4 -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">Visitors</h2>
        <p class="text-3xl font-bold">2000</p>
      </div>
    </section>

    <!-- Charts -->
    <section class="mt-8">
      <h2 class="text-xl font-semibold mb-4">Sales Overview</h2>
      <!-- Add your chart component here -->
    </section>
  </div>
</template>

<script>
export default {
  name: "DashboardAdmin",
  // Komponen dashboard bisa memiliki data, metode, computed properties, dll.
};
</script>

<style>
/* Gaya khusus untuk komponen ini */
</style>
