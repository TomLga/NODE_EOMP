
<template>
    <div>
      <h2>PRODUCTS TABLE</h2>
      <button>add Products</button>
        <table class="table">
            <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Product URL</th>
                </tr>
            </thead>
            <tbody v-if="products">
                <tr v-for="product in products" :key="product.prodID">
                    <td>{{ product.prodID }}</td>
                    <td>{{ product.prodName }}</td>
                    <td>{{ product.quantity }}</td>
                    <td>{{ product.amount }}</td>
                    <td>{{ product.category }}</td>
                    <td>{{ product.prodUrl }}</td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="6">
                        <spinnerComp/>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    
      <div>
        <h2>USERS TABLE</h2>
        <button>add Users</button>
        <table class="table">
    
            <thead>
                <tr>
                    <th>USER ID</th>
                    <th>first Name</th>
                    <th>Surname</th>
                    <th>Gender</th>
                    <th>Role</th>
                    <th>Profile</th>
                </tr>
            </thead>
            <tbody v-if="users">
                <tr v-for="info in users" :key="info.userID">
                  
                    <td>{{ info.userID }}</td>
                    <td>{{ info.firstName }}</td>
                    <td>{{ info.lastName }}</td>
                    <td>{{ info.Gender }}</td>
                    <td>{{ info.userRole }}</td>
                    <td>{{ info.userProfile }}</td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="6">
                        <spinnerComp/>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    
    
    </template>
    
    <script>
    import spinnerComp from '../components/SpinnerComp.vue';
    
    export default {
      computed: {
        products() {
        return this.$store.state.products;
      },
      users() { // Added computed property for users
        return this.$store.state.users;
      },
      },
      mounted() {
        this.$store.dispatch('fetchProds');
        this.$store.dispatch('fetchUsers');
      },
      components: {
        spinnerComp,
      },
    };
    </script>
    