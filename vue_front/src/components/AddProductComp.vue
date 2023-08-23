<template>
    <div>
      <h2>Add in Products:</h2>
      <div v-for="(product, index) in products" :key="index">
        {{ product.id }} - {{ product.imageUrl }} - {{ product.name }} - {{ product.price }} - {{ product.category }}
      </div>
  
      <button @click="showModal = true">Add Product</button>
  
   
      <b-modal v-model="showModal" title="Add Product">
        <div>
          <input v-model="newProduct.id" placeholder="id">
          <input v-model="newProduct.imageUrl" placeholder="image">
          <input v-model="newProduct.name" placeholder="name">
          <input v-model="newProduct.price" placeholder="price">
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
        products: [],
        newProduct: {
          id: '',
          imageUrl: '',
          name: '',
          price: '',
          category: '',
        },
        showModal: false, 
    addProduct() {
        const apiAddress = '';
        
        fetch(apiAddress, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.newUser),
        })
          .then(response => response.json())
          .then(data => {
          
            this.users.push(data);
            this.clearNewUserFields();
          })
          .catch(error => {
            console.error('Error adding product:', error);
          });
      },
      clearNewUserFields() {
        this.newProduct.id = '';
        this.newProduct.imageUrl = '';
        this.newProduct.name = '';
        this.newProduct.price = '';
        this.newProduct.category =''
      },
      }
     }
    };

  </script>
  
  <style scoped>

  </style>
  