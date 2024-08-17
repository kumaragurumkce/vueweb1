<template>
    <div class="container mt-5">
      <h2>Shopping Cart</h2>
      <ul class="list-group">
        <li v-for="item in cartItems" :key="item.id" class="list-group-item d-flex justify-content-between align-items-center">
          {{ item.name }} - ${{ item.price }} x {{ item.quantity }}
          <button class="btn btn-danger btn-sm" @click="handleRemoveFromCart(item.id)">Remove</button>
        </li>
      </ul>
      <h4 class="mt-3">Total: ${{ cartTotal }}</h4>
      <button class="btn btn-success mt-3" @click="clearCart">Checkout</button>
      <div v-if="message" class="alert alert-success">{{ message }}</div>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions, mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['cartItems', 'cartTotal']),
      ...mapState(['message'])
    },
    methods: {
      ...mapActions(['removeFromCart', 'clearCart']),
      async handleRemoveFromCart(productId) {
      await this.removeFromCart(productId);
      setTimeout(() => {
        this.$store.dispatch('setMessage', '');
      }, 3000);
    }
    }
  };
  </script>
  