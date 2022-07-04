<template>
  <section>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HomeComponents />
  </section>
</template>

<script>
import HomeComponents from "./components/home/HomeProducts.vue";

export default {
  name: "App",
  components: {
    HomeComponents,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
