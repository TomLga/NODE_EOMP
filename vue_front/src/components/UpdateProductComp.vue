<template>
  <div >
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProductModal" data-bs-whatever="@mdo">ADD NEW</button>


<div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Adding New User</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">ProdID:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">ProdName:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Price:</label> <br>
            <input type="number">
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Category:</label> 
            <label for="category">Select: </label>
            <select id="category" name="category">
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
            </select>
        
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Stock on Hand(Qty):</label> <br>
           <input type="number">
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Img:</label> <br>
         <input type="url">
          </div>
          
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Add</button>
      </div>
    </div>
  </div>
</div>


  </div>
</template>
<script>
  export default {
  }
</script>
<style scoped>
.modal-body, .modal-footer{
 background: #474242;
 color: white;
}
</style>