<template>
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <img src="https://i.postimg.cc/sfLgCSsg/LT-logo.png" alt="logo" loading="lazy" style="width: 5rem" >
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav  mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link id="linkName" class="nav-link active" aria-current="page" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link id="linkName" class="nav-link active" aria-current="page" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link id="linkName" class="nav-link active" aria-current="page" to="/admin">Admin</router-link>
            </li>
            <li class="nav-item">
              <router-link id="linkName" class="nav-link active" aria-current="page" to="/products">Products</router-link>
            </li>
            
            <li class="nav-item">
              <router-link id="linkName" class="nav-link active" aria-current="page" to="/contact">Contact</router-link>
            </li>
           </ul>

           <div  id="serachBar" class="input-group">
          <input type="text" class="form-control" placeholder="Search">
            <button class="btn btn-outline-secondary" type="button">Search</button>
          </div>

        </div>
      </div>
    </nav>
    
  </template>
  
  <script>
  export default {
   
  }
  </script>
  
  <style scoped>

#serachBar>input{
  background: #a49d9d;
}


 img{
  margin-left: 0%;
 }

 #linkName{
  font-size: 30px;
  color: black;
  font-size: 25px;
  font-family: 'Times New Roman', Times, serif;
  font-weight:bolder;
  margin-top: 10px;
  border-radius: 30px;
  text-shadow: 4px 4px 4px white;
  transition: ease-in all 0.5s;

 }

#linkName:hover {
  background: white;
  transition: ease-in all 0.5s;
}
  </style>

  <style>
  .navbar-nav{
    margin: auto;
   
    width: 600px;
    height: 70px;
    border-radius: 20px;

  }
  #linkName{
    margin: auto;
    font-size: 20px;
  }
  .nav-item{
    margin: auto;
  }

  .nav-item:hover{
    text-decoration: underline;
    transform: scale(1.08);
   
    
  }


</style>
  