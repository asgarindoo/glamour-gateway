<template>
  <div>
    <img :src="product.img" alt="" />
    <h3>{{ product.title }}</h3>
    <p>{{ product.description }}</p>
    <p>{{ product.price }}</p>
    <router-link :to="{ name: 'detail-product', params: { id: product.id } }">
      <button>Detail</button>
    </router-link>
  </div>
</template>
<script>
export default {
  props: ["product"],
  mounted() {
    console.log(this.product);
  },
};
</script>

<style></style>
