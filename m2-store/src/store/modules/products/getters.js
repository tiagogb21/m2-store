const getters = {
  productItems: (state) => state.productItems,
  // Acessando o nome das categorias:

  productList: (state) => Object.keys(state.productItems),
  // Acessando o valor armazenado no objeto fixo:

  productFixo: (state) => Object.values(state.productItems)[0][0].title,

  productTV: (state) =>
    Object.values(state.productItems)[1].map((item) => item.title),

  productInternet: (state) =>
    Object.values(state.productItems)[2].map((item) => item),

  addProductToCart: (state) => (id) => {
    const isProductInCart = state.cartItems.find((val) => val.id === id);
    const getProduct = state.productItems.find((val) => val.id === id);
    if (isProductInCart) {
      isProductInCart.quantity += 1;
    } else {
      getProduct.quantity = 1;
      state.cartItems.push(getProduct);
    }
  },
};

export default getters;
