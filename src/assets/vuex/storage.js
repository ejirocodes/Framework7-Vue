import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    product: {},
    cart: []
  },
  getters: {
      cartItems: state => {
      return state.cart.length;
    }
  },
  mutations: {
    UPDATE_PRODUCT(state, payload) {
      state.product = payload;
    },
     ADD_TO_CART(state, product) {
      state.cart.push(product);
    }
  },
});