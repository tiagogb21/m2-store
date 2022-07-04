import axios from 'axios';
import { BASE_URL } from '../../../services/data';

const actions = {
  getProductItems({ commit }) {
    axios.get(BASE_URL).then((response) => {
      commit('GET_PRODUCT_ITEMS', response.data);
    });
  },
  getProductId({ commit }, id) {
    commit('GET_PRODUCT_ID', id);
  },
};

export default actions;
