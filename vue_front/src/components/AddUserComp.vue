<template>
    <div>
      <h2>Add in Users:</h2>
      <div v-for="(product, index) in products" :key="index">
        {{ user.email }} - {{ user.password }}
      </div>
  
      <button @click="showModal = true">Add User</button>
  
   
      <b-modal v-model="showModal" title="Add User">
        <div>
            <input v-model="newUser.id" placeholder="email">
            <input v-model="newUser.password" placeholder="password">
          <button @click="addUser">Add</button>
        </div>
      </b-modal>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [
         
         ],
         newUser: {
           email: '',
           password: '',
        showModal: false, 
    updateUser() {
        const apiAddress = '';
        
        fetch(apiAddress, {
          method: 'PUT',
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
            console.error('Error updating user:', error);
          });
      },
      clearNewProductFields() {
        this.newUser.email = '';
        this.newUser.password = '';
      },
      }
     }
    }
};
  </script>
  
  <style scoped>
 
  </style>
  