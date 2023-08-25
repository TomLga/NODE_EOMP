
<template>

<div>
    <b-modal v-model="showModal" title="Add Product">
      <div>
        <input v-model="newProduct.prodID" placeholder="id">
        <input v-model="newProduct.prodUrl" placeholder="url">
        <input v-model="newProduct.prodName" placeholder=" name">
        <input v-model="newProduct.amount" placeholder="amount">
        <input v-model="newProduct.category" placeholder="category">
        <button @click="addProduct">Add</button>
      </div>
    </b-modal>
  </div>

</template>

  <script>
  export default {
  data() {
    return {
      newProduct: {
        prodID: '',
        prodUrl: '',
        prodName: '',
        amount: '',
        category: ''
       
      }
    };
  },
  methods: {
    addProduct() {
      this.$emit('addProduct', this.newProduct);
    }
  }
};
  </script>