<template>

    <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
            <img src="" alt="logo" loading="lazy"  >
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                      <router-link class="nav-link active" aria-current="page" to="/" >Home</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link active" aria-current="page" to="/about" >About</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link active" aria-current="page" to="/admin" >Admin</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/products">Products</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link active" aria-current="page" to="/singleProduct" >Single Product</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link active" aria-current="page" to="/contact" >Contact</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
  </template>
  
  <script>
  export default {
   
  }
  </script>
  
  <style scoped>
 

  </style>
  