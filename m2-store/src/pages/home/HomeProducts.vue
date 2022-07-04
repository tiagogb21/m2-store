<template>
  <main>
    <Products />
    <h1>teste</h1>
  </main>
</template>

<script>
import Products from '../../components/products/AllProducts.vue';

export default {
  name: 'HomeProducts',
  components: {
    Products,
  },
  data() {
    return {};
  },
};
</script>
