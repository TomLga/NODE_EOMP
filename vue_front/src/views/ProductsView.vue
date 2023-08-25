<template>
    <div class="container-fluid">
      <h2>Products</h2>
      <div class="row">
        <div class="col-4" v-for="product in products" :key="product.prodID">
          <div class="card" style="width: 18rem;">
            <img :src="product.prodUrl" class="card-img-top" :alt="product.name">
            <div class="card-body">
              <h5 style="color:black" class="card-title">{{ product.prodName }}</h5>
              <p style="color:black" class="card-text">R{{ product.amount }}</p>
              <p style="color:black" class="card-text">{{ product.category }}</p>
              <router-link :to="'/single/' + product.prodID" class="btn btn-primary">See more</router-link>
              <!-- <router-link :to="{ name: 'single', params: { id: product.prodID } }" class="btn btn-primary">See more</router-link> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
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
      SingleComp,
    },
  }
  </script>
  