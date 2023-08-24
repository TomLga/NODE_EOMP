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

</template>

<script>
import SpinnerComp from "@/components/SpinnerComp"; 


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
    };
</script>

<style scoped>

</style>
