<template>
    <div>
     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" fdprocessedid="yz8vr">Add Product</button>

      <div class="container">

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">ADD NEW PRODUCT</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>

                <div class="mb-3">
                    <label for="product-name" class="col-form-label">Product Name:</label>
                    <input type="text" class="form-control" id="product-name" v-model="productName">
                  </div>
                  <div class="mb-3">
                    <label for="stock-on-hand" class="col-form-label">Stock On Hand:</label>
                    <input type="number" class="form-control" id="stock-on-hand" v-model="stockOnHand">
                  </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Product Name:</label>
                  <input type="number" class="form-control" id="recipient-name">
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Stock On Hand:</label>
                  <input type="number" class="form-control" id="recipient-name">
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Price:</label>
                  <input type="number" class="form-control" id="recipient-name">
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Category:</label>
                  <input type="text" class="form-control" id="recipient-name">
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Img Url:</label>
                  <input type="url" class="form-control" id="recipient-name">
                </div>
                 
              </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="addProduct">Add Product</button>
              </div>
          </div>
        </div>
      </div>
    </div>
      
  
    </div>
  </template>
  

  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        productName: '',
        stockOnHand: 0,
        price: 0,
        category: '',
        imgUrl: ''
      };
    },
    methods: {
        async addProduct() {
  const newProduct = {
    prodName: this.productName,
    quantity: this.stockOnHand,
    amount: this.price,
    category: this.category,
    prodURL: this.imgUrl
  }

  try {
    await axios.post(`${cUrl}products`, newProduct);
    this.clearForm();
    this.$store.dispatch("fetchProducts"); // Move this line here
  } catch (error) {
    console.error(error);
  }
}

      },
      clearForm() {
        this.productName = '';
        this.stockOnHand = 0;
        this.price = 0;
        this.category = '';
        this.imgUrl = '';
      }
    }
  
  </script>