<template>
  <div class="container-fluid">
    <div class="row">
      <h2>Products</h2>
      <div class="col" v-if="products">
        <div v-for="product in products" class="card" style="width: 18rem;" :key="product.productID">
          <img :src="product.imageUrl" class="card-img-top" :alt="product.name">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.price }}</p>
            <p class="card-text">{{ product.category }}</p>
            <router-link :to="'/singleProduct/' + product.productID" class="btn btn-primary">Add to cart</router-link>
          </div>
        </div>
      </div>
      <div v-else class="col"> 
        <spinnerComp/>
      </div>
    </div>
  </div>

</template>

<script>
import SpinnerComp from "@/components/SpinnerComp"; 

export default {
  components: {
    SpinnerComp,
  },
  data() {
    return {
      products: [

      ],
    };
  },
};
</script>

<style scoped>

</style>
