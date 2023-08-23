<template>
   
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
  
  