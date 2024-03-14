<template>
  <div>
    <img :src="product.img" alt="product Image" />
    <h3>{{ product.title }}</h3>
    <p>{{ formatPrice(product.price) }}</p>
    <button>Remove</button>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    formatPrice(price) {
      return price.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
    },
  },
  mounted() {
    console.log(this.product);
  },
};
</script>

<style></style>
