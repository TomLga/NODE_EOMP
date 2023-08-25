<template>
    <div class="evety">

    <div class="cardSingle mb-3" style="max-width: 70%;">
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="product.prodUrl" class="card-img-top" alt="">
          </div>
          <div class="col-md-8">
            <div class="card-body">
                <h1 class="card-title">{{ product.prodName }}</h1>
                <h3 class="card-text1"> R {{ product.amount }}</h3>
                <h3 class="card-text">{{ product.category }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
               
</template>

<script>

export default {
    computed: {
        product(){
            return this.$store.state.product
        }
    },
    created(){
       this.$store.dispatch('fetchProduct',
        this.$route.params.id)
    }
}
</script>

<style >
.evety{
    margin-left: 30%;
}
h1{
    margin-top: 19%;
    margin-right: 10px;
}

.card-img-top{
  justify-content: center;
  align-items: center;
  pointer-events: none;
    
}

.card-text{
    background-color:rgb(89, 81, 96);
    color: white;

    margin:auto;


}



</style>