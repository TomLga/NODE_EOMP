<template>
    <div class="single-product">
      <div class="product-image">
        <img :src="product.imageUrl" :alt="product.name">
      </div>
      <div class="product-details">
        <h3>{{ product.name }}</h3>
        <p>Price: {{ product.amount }}</p>
        <p>Category: {{ product.category }}</p>
        <!-- Add more details as needed -->
      </div>
    </div>

    <div class="Single-product">
    <div class="product-image">
    <div class="col-4">
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
  export default {
    props: {

      product: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
