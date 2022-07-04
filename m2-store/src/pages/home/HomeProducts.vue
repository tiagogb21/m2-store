<template>
  <main class="container">
    <section class="button__container">
      <button class="button-select">
        <img src="../../assets/cart.png" alt="remove item" />
        CONTINUAR
      </button>
      <button class="button-select">
        <img src="../../assets/remove.png" alt="remove item" />
        DELETE
      </button>
    </section>
    <article class="total__box">
      <p>Total</p>
      <p>R$ /mês</p>
    </article>
    <article class="instalacao__box">
      <p>Taxa de instalação</p>
      <p>Grátis</p>
    </article>
    <section
      class="product__container"
      v-for="product in productList"
      v-bind:key="product.id"
    >
      <h3 class="title">{{ product }}</h3>
      <article v-if="product === 'Fixo'" class="fixo__container">
        <h4>Agora escolha seu pacote de telefone fixo</h4>
        <article class="fixo__item">
          <p>{{ productFixo }}</p>
        </article>
      </article>
      <article v-else-if="product === 'TV'">
        <h4>Agora escolha seu pacote de televisão</h4>
        <article class="tv__box">
          <article
            v-for="prod in productTV"
            v-bind:key="prod.id"
            class="tv__item"
          >
            <p>{{ prod }}</p>
          </article>
        </article>
      </article>
      <article v-else class="internet__container">
        <h4>Selecione um plano de internet para continuar</h4>
        <article class="internet__box">
          <article
            v-for="prod in productInternet"
            v-bind:key="prod.id"
            class="internet__item"
          >
            <p>{{ prod }}</p>
            <p>R$</p>
            <p>+ Detalhes</p>
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
.container {
  width: 70vw;
  display: flex;
  flex-direction: column-reverse;
}

.title {
  text-transform: uppercase;
  color: rgb(185, 147, 210, 1);
}

.fixo__item {
  display: flex;
  width: 50%;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.fixo__item:hover,
.tv__item:hover,
.internet__item:hover {
  cursor: pointer;
  color: white;
  border: none;
  background: rgb(185, 147, 210, 1);
}

.tv__box {
  display: flex;
  justify-content: space-around;
}

.tv__item {
  width: 30%;
  border: 1px solid black;
  text-align: center;
}

.internet__container {
  display: flex;
  flex-direction: column;
}

.internet__box {
  display: flex;
  justify-content: space-around;
}

.internet__item {
  width: 30%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
}

.instalacao__box,
.total__box {
  width: 90%;
  display: flex;
  justify-content: space-between;
}

.total__box {
  color: rgb(185, 147, 210, 1);
}

.button__container {
  width: 80%;
  display: flex;
  justify-content: space-around;
}

.button-select {
  height: 7vh;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: rgb(9, 73, 94);
  color: white;
  font-size: 2vw;
  padding: 3vw;
  opacity: 0.7;
}

.button-select:hover {
  cursor: pointer;
  opacity: 1;
}

.button-select img {
  width: 20%;
}
</style>
