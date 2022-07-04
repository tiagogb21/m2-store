<template>
  <main>
    <Products />
  </main>
</template>

<script>
import Products from "../../components/products/AllProducts.vue";

export default {
  name: "HomeProducts",
  components: {
    Products,
  },
  data() {
    return {};
  },
};
</script>
