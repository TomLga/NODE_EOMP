<template>

  <div class="container-fluid">
    <h2>Products</h2>
    <div class="row">
      <div class="col-4" v-for="product in products" :key="product.prodID">
        <div class="card" style="width: 18rem;">
          <img :src="product.prodUrl" class="card-img-top" :alt="product.name">
          <div class="card-body">
            <h5 class="card-title">{{ product.prodName }}</h5>
            <p class="card-text">{{ product.amount }}</p>
            <p class="card-text">{{ product.category }}</p>
            <router-link :to="'/singleProduct/' + product.prodID" class="btn btn-primary">See  more </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>


<script>
import SpinnerComp from "@/components/SpinnerComp";

import SingleComp from "@/components/SingleView.vue";



export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
      users() { 
        return this.$store.state.users;
      },
      },
      mounted() {
        this.$store.dispatch('fetchProds');
        this.$store.dispatch('fetchUsers');
  },
  components: {
    SpinnerComp,
  },
  methods: {
    sortProductsByPrice() {
    this.sortedProducts.sort((a, b) => a.amount - b.amount);
    },
    sortProductsByCategory() {
     this.sortedProducts.sort((a, b) => a.category.localeCompare(b.category));
    },
  },
  computed: {
    sortedProducts() {
    return this.products.slice(); // Make sure to provide the sorting logic here
    },
  },
     props: {
     product: {
      type: Object,
      required: true
     }
  }
};
    
</script>

<style scoped>

</style>