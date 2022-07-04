<template>
  <main>
    <section
      class="product_container"
      v-for="product in productList"
      v-bind:key="product.id"
    >
      <h3>{{ product }}</h3>
      <article v-if="product === 'Fixo'">
        <p>{{ productFixo }}</p>
      </article>
      <article v-else-if="product === 'TV'">
        <article v-for="prod in productTV" v-bind:key="prod.id">
          <p>{{ prod }}</p>
        </article>
      </article>
      <article v-else class="tv__container">
        <p>Selecione um plano de internet para continuar</p>
        <article class="tv__box">
          <article
            v-for="prod in productInternet"
            v-bind:key="prod.id"
            class="tv__item"
          >
            <p>{{ prod }}</p>
          </article>
        </article>
      </article>
    </section>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HomeProducts',
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'productItems',
      'productList',
      'productFixo',
      'productTV',
      'productInternet',
    ]),
  },
  created() {
    this.$store.dispatch('getProductItems');
  },
};
</script>

<style scoped>
.tv__container {
  display: flex;
  flex-direction: column;
}
.tv__box {
  display: flex;
  justify-content: space-around;
}
.tv__item {
  display: flex;
  border: 1px solid black;
}
</style>
