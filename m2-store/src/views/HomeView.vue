<template>
  <div class="home">
    <HomeProducts />
  </div>
</template>

<script>
import HomeProducts from '../pages/home/HomeProducts.vue';
export default {
  name: 'HomeView',
  components: {
    HomeProducts,
  },
};
</script>
