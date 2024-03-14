<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: 600;
  color: #2c3e50;
  margin: 20px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: white;
  background-color: #2c3e50;
  border-radius: 5px;
  padding: 10px;
}
</style>
