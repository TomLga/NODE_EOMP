<template>
    <div>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img :src="product.prodUrl" class="card-img-top" alt="...">
                    <div class="card-body">
                        {{ product.prodName }}
                    </div>
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
  
        