<template>
  <div class="home">
    <NavbarHome />
    <h1>This is the home page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odio
      molestias corporis eum quia blanditiis quod accusantium, laboriosam atque
      sunt sit, dolorem ex expedita temporibus? Assumenda, eaque consequuntur,
      quibusdam quaerat quasi necessitatibus magni, dolorum tempore dolorem sit
      quisquam! Iure, quidem sint id suscipit dolorum molestiae veritatis
      corrupti labore corporis et.
    </p>
  </div>
</template>

<script>

import NavbarHome from "@/components/NavbarHome.vue";

export default {
  name: "HomeView",
  components: {
    NavbarHome,
  },
};
</script>
