<template>
  <div class="single-product">
    <div class="product-image">
      <img :src="product.imageUrl" :alt="product.name">
    </div>
    <div class="product-details">
      <h3>{{ product.name }}</h3>
      <p>Price: {{ product.price }}</p>
      <p>Category: {{ product.category }}</p>
      <!-- Add more details as needed -->
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

<style scoped>
/* Add your component's styling here */
</style>



