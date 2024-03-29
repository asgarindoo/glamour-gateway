<template>
  <div>
    <h1 class="text-3xl font-bold text-gray-800 mb-4">Orders</h1>
    <!-- Daftar Pesanan -->
    <div v-if="orders.length">
      <div v-for="order in orders" :key="order.id">
        <div>
          <h2>{{ order.orderNumber }}</h2>
          <p>Status: {{ order.status }}</p>
          <p>Total: {{ order.total }}</p>
          <!-- Tambahkan tombol untuk menampilkan detail pesanan -->
          <button @click="showOrderDetail(order)">View Details</button>
        </div>
      </div>
    </div>
    <div v-else>
      <p>No orders available</p>
    </div>

    <!-- Detail Pesanan -->
    <div v-if="selectedOrder">
      <h2>Order Details</h2>
      <p>Order Number: {{ selectedOrder.orderNumber }}</p>
      <!-- Tampilkan detail pesanan seperti produk yang dibeli, jumlah, harga, dll. -->
      <ul>
        <li v-for="item in selectedOrder.items" :key="item.id">
          <p>{{ item.productName }} - Quantity: {{ item.quantity }}</p>
          <p>Price per item: {{ item.price }}</p>
          <p>Total: {{ item.total }}</p>
        </li>
      </ul>
      <!-- Tambahkan tombol untuk menutup detail pesanan -->
      <button @click="closeOrderDetail">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrdersAdmin",
  data() {
    return {
      orders: [], // Array untuk menyimpan daftar pesanan
      selectedOrder: null, // Variabel untuk menyimpan detail pesanan yang dipilih
    };
  },
  methods: {
    // Metode untuk menampilkan detail pesanan
    showOrderDetail(order) {
      this.selectedOrder = order;
    },
    // Metode untuk menutup detail pesanan
    closeOrderDetail() {
      this.selectedOrder = null;
    },
    // Metode untuk mendapatkan data pesanan dari API atau sumber data lainnya
    fetchOrders() {
      // Implementasi untuk mengambil data pesanan
    },
  },
  created() {
    // Panggil fetchOrders() saat komponen dibuat
    this.fetchOrders();
  },
};
</script>

<style>
/* Gaya CSS khusus untuk halaman ini */
</style>
