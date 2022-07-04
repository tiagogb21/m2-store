<template>
  <section>
    <HeaderPrincipal />
    <HomeComponents />
    <FooterPrincipal />
  </section>
</template>

<script>
import HeaderPrincipal from "./components/header/HeaderPrincipal.vue";
import HomeComponents from "./pages/home/HomeProducts.vue";
import FooterPrincipal from "./components/footer/FooterPrincipal.vue";

export default {
  name: "App",
  components: {
    HeaderPrincipal,
    HomeComponents,
    FooterPrincipal,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
