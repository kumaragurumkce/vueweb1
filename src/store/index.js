import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [
      { id: 1, name: 'Product 1', price: 100, quantity: 0 },
      { id: 2, name: 'Product 2', price: 200, quantity: 0 },
      { id: 3, name: 'Product 3', price: 300, quantity: 0 }
    ],
    cart: [],
    message: ''
  },
  mutations: {
    ADD_TO_CART(state, product) {
      const item = state.cart.find(p => p.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(p => p.id !== productId);
    },
    CLEAR_CART(state) {
      state.cart = [];
    },
    SET_MESSAGE(state, message) {
      state.message = message;
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId);
    },
    clearCart({ commit }) {
      commit('CLEAR_CART');
    },
    setMessage({ commit }, message) {
      commit('SET_MESSAGE', message);
    }
  },
  getters: {
    cartTotal(state) {
      return state.cart.reduce((total, product) => total + product.price * product.quantity, 0);
    },
    cartItems(state) {
      return state.cart;
    },
    message(state) {
      return state.message;
    }
  }
});
