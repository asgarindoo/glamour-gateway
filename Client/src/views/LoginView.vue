<template>
  <div class="h-screen font-quicksand">
    <div class="max-w-md mx-auto p-4 mt-36">
      <h2 class="text-2xl font-bold mb-4">Login or Sign Up</h2>
      <form @submit.prevent="loginOrSignUp" class="mb-4">
        <input
          type="text"
          v-model="email"
          placeholder="Email"
          class="border border-gray-300 rounded-md px-3 py-2 w-full mb-2 focus:outline-none focus:ring focus:border-slate-800" />
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          class="border border-gray-300 rounded-md px-3 py-2 w-full mb-2 focus:outline-none focus:ring focus:border-slate-800" />
        <button
          type="submit"
          class="bg-slate-800 text-white rounded-md px-4 py-2 w-full hover:bg-slate-900 focus:outline-none">
          Login / Sign In
        </button>
      </form>
      <p class="mb-4">
        Don't have an account?
        <router-link to="/signup" class="text-blue-900">Sign Up</router-link>
      </p>
      <hr class="mb-4" />
      <p class="mb-2">Login with Google:</p>
      <button
        @click="loginWithGoogle"
        class="bg-slate-800 text-white rounded-md px-4 py-2 w-full hover:bg-slate-900 focus:outline-none">
        Login with Google
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async loginWithGoogle() {
      try {
        window.open("http://localhost:8000/api/auth/google", "_self");
      } catch (error) {
        console.error("Failed to open Google login:", error);
      }
    },
  },
};
</script>

<style scoped>
/* * {
  border: red 1px solid;
} */
</style>
