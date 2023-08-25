<template>
  <div class="container">
<!-- Modal -->
<div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <form class="form" @submit.prevent="addingProduct">
      <h1>Add Product</h1>
      <label class="label">Product Name</label>
      <input type="text" v-model="item.prodName">
      <label class="label">Price</label>
      <input type="number" v-model="items.amount">
      <label class="label">Category</label>
      <input type="text" v-model="items.category">
      <label class="number">Quantity</label>
      <input type="text" v-model="items.quantity">
      <label class="label">Image</label>
      <input type="text" v-model="items.prodURL">
      <!-- <button class="btn btn-success add-btn AddingMod" type="submit">Add Product</button> -->
      <button class="btn btn-success add-btn AddingMod" @click="saveData">Add Product</button>
    </form> 
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>
</div>
  </div>
</template>
<script>
import { useStore } from 'vuex';
import {computed} from '@vue/runtime-core'
  export default {
    data(){
      return {
        item: {
        prodName: "",
        amount: "",
        category: "",
        quantity: "",
        prodURL: ""
      },
          prodName: null,
          amount: null,
          category: null,
          quantity: null,
          prodURL: null
      }
    },
    setup(){
      let store = useStore();

      let items = {
        prodName:'',
        amount:'',
        category:'',
        quantity:'',
        prodURL:''
      }

      let addingProduct = async () => {
      try {
        console.log(this.item); 
        await store.dispatch('addProduct', this.item);
        await store.dispatch('fetchProducts');
        location.reload();
      } catch (error) {
        console.error(error);
      }

      let products = computed(() => store.state.products)

      return{
        items,
        addingProduct,
        products
      }
    }
    
  },
  methods: {
    async saveData() {
      try {
        await this.addingProduct();
        $('#addProductModal').modal('hide'); // Close the modal
        this.resetFormData();
      } catch (error) {
        console.error(error);
      }
    },
    resetFormData() {
      this.item = {
        prodName: "",
        amount: "",
        category: "",
        quantity: "",
        prodURL: ""
      };}


}}
  
  
</script>



<style scoped>
.form{
  display: flex;
  flex-direction: column;
}
</style>