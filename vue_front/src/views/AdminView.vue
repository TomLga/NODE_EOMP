<template>
    <div>
      <div class="ProductsTable">
        <h4>Products</h4>
        <AddProductComp/>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>QTY</th>
              <th>Price</th>
              <th>Category</th>
              <th>Image</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody v-for="details in products" :key="details.prodID">
            <tr>
              <td>{{ details.prodName }}</td>
              <td>{{ details.quantity }}</td>
              <td>{{ details.amount }}</td>
              <td>{{ details.category }}</td>
              <td>{{ details.prodURL }}</td>
              <td> <button>Edit</button> </td>
              <td>
                <button>delete</button>
                 </td>
              <td>
                <img :src="details.prodURL" alt="" width="10rem"/>
              </td>
            
        
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="UserTable">
        <h4>Users</h4>
        <AddUserComp/>

        <table>
          <thead>
            <tr>
              <th>UserID</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>UserAge</th>
              <th>Gender</th>
              <th>UserRole</th>
              <th>EmailAdd</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="details in users" :key="details.userID">
              <td>{{ details.UserID }}</td>
              <td>{{ details.firstName }}</td>
              <td>{{ details.lastName }}</td>
              <td>{{ details.userAge }}</td>
              <td>{{ details.gender }}</td>
              <td>{{ details.userRole }}</td>
              <td>{{ details.emailAdd }}</td>
              <td>
             
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  
  </template>
  
  
  <script>
  import AddProductComp from '@/components/AddProductComp.vue'
  import AddUserComp from '@/components/AddUserComp.vue'

  export default {
    components:{
        AddProductComp,
        AddUserComp
    },

    computed: {
   
      products() {
        return this.$store.state.products;
      },
      users() {
        return this.$store.state.users;
      },
    },
    mounted() {
      this.$store.dispatch("fetchUsers");
      this.$store.dispatch("fetchProducts");
    },
  
  };
  </script>
  
 

  <style>





</style>