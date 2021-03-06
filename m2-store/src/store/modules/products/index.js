import { createStore } from 'vuex';

import state from './states';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {},
});
