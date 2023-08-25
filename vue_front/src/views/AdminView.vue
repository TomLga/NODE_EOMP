<template>
  <div>
    <button @click="sortByProductName">Sort by Product Name</button>
    <button @click="sortByPrice">Sort by Price</button>

    <div class="container">
      <div class="row">
        <div class="col">
          <h1 style="text-decoration:underline">Products</h1>
          <div>
            <UpdateProductComp />
          </div>
        </div>
        <div class="prodAdmin">
          <table>
            <thead>
              <tr>
                <th>#ID</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Image</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="tdSize"
                v-for="item in sortedProducts"
                :key="item.prodID"
              >
                <td>{{ item.prodID }}</td>
                <td>{{ item.prodName }}</td>
                <td>{{ item.amount }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.quantity }}</td>
                <td><img class="adminImg" :src="item.prodUrl" alt="" /></td>
                <td>
                  <div class="btnGroupUser">
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                    >
                      EDIT
                    </button>
                    <button class="btn btn-danger">Delete</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- USER TABLE -->
      <div class="row containerUser">
        <div class="col-12">
          <h1 style="text-decoration:underline">Users</h1>
          <UpdateUserCompVue />
        </div>
        <div>
          <table class="Usertable">
            <thead>
              <tr>
                <th>#ID</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Encrypt Password</th>
                <th>Role</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in user" :key="item.userID">
                <td>{{ item.userID }}</td>
                <td>{{ item.firstName }}</td>
                <td>{{ item.lastName }}</td>
                <td>{{ item.gender }}</td>
                <td>{{ item.emailAdd }}</td>
                <td>{{ item.userPass }}</td>
                <td>{{ item.userRole }}</td>
                <td><img class="tableImg" :src="item.userProfile" alt="" /></td>
                <td>
                  <div class="btnGroupUser">
                    <div>
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#editUserModal"
                      >
                        EDIT
                      </button>
                    </div>
                    <button class="btn btn-danger">Delete</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UpdateProductComp from "@/components/UpdateProductComp.vue";
import UpdateUserCompVue from "@/components/UpdateUserComp.vue";
import AddProductComp from "@/components/AddProductComp.vue";
import AddUser from "@/components/AddUser.vue";
import axios from "axios";

export default {
  components: {
    UpdateProductComp,
    UpdateUserCompVue,
    AddProductComp,
    AddUser,
  },
  data() {
    return {
      product: [],
      user: [],
      ascending: true,
      sortKey: "prodName",
    };
  },
  created() {
    this.getProducts();
    this.getUsers();
  },
  computed: {
    sortedProducts() {
      const sorted = [...this.product];

      sorted.sort((a, b) => {
        if (this.sortKey === "prodName") {
          return this.ascending
            ? a.prodName.localeCompare(b.prodName)
            : b.prodName.localeCompare(a.prodName);
        } else if (this.sortKey === "amount") {
          return this.ascending ? a.amount - b.amount : b.amount - a.amount;
        }
        return 0;
      });

      return sorted;
    },
  },
  methods: {
    async getProducts() {
      try {
        const response = await axios.get(
          "https://node-eomp-vue.onrender.com/products"
        );
        this.product = response.data.results;
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
    async getUsers() {
      try {
        const response = await axios.get(
          "https://node-eomp-vue.onrender.com/users"
        );
        this.user = response.data.results;
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
    sortByProductName() {
      this.ascending = !this.ascending;
      this.sortKey = "prodName";
    },
    sortByPrice() {
      this.sortKey = "amount";
      this.ascending = !this.ascending;
    },
  },
};
</script>

<style>
/* Your styles here */
</style>




<style>
.container{
justify-content: space-evenly;
}

table{
  background: #53554e;
  color:white;
  text-align: center;
}
.prodAdmin table {
    width: 100%;
    border-collapse: collapse;
  }

  .prodAdmin th,
  .prodAdmin td {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: left;
  }

  .prodAdmin td img {
    max-width: 100px;
    max-height: 100px;
  }


  /* user table  */
  .containerUser{

    margin: 20px;
    
  }
  .Usertable {
    width: 100%;
    margin-left: -50px;
  }
 



  .Usertable th,
  .Usertable td {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: left;
    width: 14.28%; 

  }

  .Usertable td img {
    max-width: 80px;
    max-height: 80px;
  }

  .Usertable-container {
    height: 100vh;
    overflow-y: scroll;
  }

  .btnGroupUser{
    display: flex;
    gap:10px;
  
  }
.AddingMod{
  background: #b71d1d;
  margin-left: 0%;
}
</style>