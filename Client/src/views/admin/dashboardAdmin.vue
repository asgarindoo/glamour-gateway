<template>
  <div class="">
    <!-- Header -->
    <header class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-semibold text-slate-900">Dashboard</h1>
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
        <p class="text-3xl font-bold">41.065</p>
      </div>
      <!-- Widget 2 -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">New Users</h2>
        <p class="text-3xl font-bold">500</p>
      </div>
      <!-- Widget 3 -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">Total Revenue</h2>
        <p class="text-3xl font-bold">$2.173.000</p>
      </div>
      <!-- Widget 4 -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">Visitors</h2>
        <p class="text-3xl font-bold">2.000</p>
      </div>
    </section>

    <!-- Charts -->
    <section class="mt-8">
      <h2 class="text-3xl font-semibold text-slate-900 mb-10">
        Sales Overview
      </h2>
      <label
        for="year"
        class="font-sm mr-2 px-5 py-3 mt-4 bg-gray-800 text-white rounded-sm font-medium"
        >Select Year:</label
      >
      <select
        id="year"
        v-model="selectedYear"
        @change="updateChartData"
        class="px-5 py-3 border rounded-sm bg-slate-90 bg-gray-800 text-white font-medium">
        <option
          v-for="year in years"
          :key="year"
          :value="year"
          class="bg-slate-900 text-white w-full font-medium">
          {{ year }}
        </option>
      </select>

      <Bar :data="chartData" :options="chartOptions" class="w-full h-[300px]" />
    </section>
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "DashboardAdmin",
  components: { Bar },
  data() {
    return {
      selectedYear: new Date().getFullYear(),
      years: Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i), // Ambil 10 tahun sebelumnya
    };
  },
  computed: {
    chartData() {
      return {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "Sales Data",
            backgroundColor: "rgba(38, 50, 56, 0.2)", // slate-800 dengan transparansi 0.8
            borderColor: "rgba(0, 0, 0, 0.5)", // Border color apa pun yang Anda inginkan
            borderWidth: 1,
            data: this.getSalesDataByYear(this.selectedYear),
          },
        ],
      };
    },

    chartOptions() {
      return {
        responsive: false,
        maintainAspectRatio: false,
      };
    },
  },
  methods: {
    getSalesDataByYear(year) {
      const salesDataByYear = {
        2015: [100, 200, 150, 200, 220, 300, 320, 220, 210, 170, 280, 220],
        2016: [105, 250, 150, 260, 240, 350, 330, 250, 220, 150, 250, 280],
        2017: [120, 200, 180, 200, 230, 370, 380, 270, 230, 120, 230, 240],
        2018: [150, 250, 200, 350, 300, 450, 400, 200, 250, 200, 350, 300],
        2019: [200, 300, 250, 400, 350, 500, 450, 300, 300, 250, 400, 350],
        2020: [250, 350, 300, 450, 400, 550, 500, 400, 350, 300, 450, 400],
        2021: [300, 400, 350, 500, 450, 600, 550, 500, 400, 350, 500, 450],
        2022: [350, 450, 400, 550, 500, 650, 600, 600, 450, 400, 550, 500],
        2023: [400, 500, 450, 600, 550, 700, 650, 700, 500, 450, 600, 550],
        2024: [450, 550, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      };

      return salesDataByYear[year] || [];
    },
    updateChartData() {
      this.chartData.datasets[0].data = this.getSalesDataByYear(
        this.selectedYear
      );
    },
  },
};
</script>
