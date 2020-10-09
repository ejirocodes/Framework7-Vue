import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    product: {},
    cart: []
  },

  actions: {
    userLogged ({commit}, user) {
      commit('USER_LOGGED', user);
    }
  },

  mutations: {
    USER_LOGGED (state, user) {
      state.user = user;
    },
    UPDATE_PRODUCT(state, payload) {
      state.product = payload;
    },
     ADD_TO_CART(state, product) {
      state.cart.push(product);
    }
  },
});