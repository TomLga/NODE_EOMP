<template>
    <div class="container-fluid pt-5 pb-3">
        <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4"><span class="bg-secondary pr-3">Products</span></h2>
        <div class="card-group">
          <div class="card project-card" v-for="product in products" :key="product.id">
            <img :src="product.image" class="card-img-top img-fluid" alt="">
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <a :href="SingleProductView.vue" class="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>