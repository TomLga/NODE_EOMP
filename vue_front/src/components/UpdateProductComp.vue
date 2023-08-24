<template>
    <div>
        <h2>Update in Products:</h2>
        <div v-for="(product, index) in products" :key="index">
          {{ product.id }} - {{ product.imageUrl }} - {{ product.name }} - {{ product.price }} - {{ product.category }}
        </div>
    
        <button @click="showModal = true">Update Product</button>
    
     
        <b-modal v-model="showModal" title="Update Product">
          <div>
            <input v-model="newProduct.id" placeholder="id">
            <input v-model="newProduct.imageUrl" placeholder="image">
            <input v-model="newProduct.name" placeholder="name">
            <input v-model="newProduct.price" placeholder="price">
            <input v-model="newProduct.category" placeholder="category">
            <button @click="updateProduct">Update</button>
          </div>
        </b-modal>
      </div>
  </template>
  
  <script>

  </script>
  
  <style scoped>
 
  </style>
  