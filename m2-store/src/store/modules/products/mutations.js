const mutations = {
  GET_PRODUCT_ITEMS(state, payload) {
    state.productItems = payload;
  },
  GET_PRODUCT_ID(state, payload) {
    state.itemCartId = payload;
  },
};

export default mutations;
