<template>
  <div>
    <div
      id="carouselExampleAutoplaying"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="carousel-text">
            <h1>Kiddies Fashion Watches</h1>
          </div>
          <img
            src="https://i.postimg.cc/QxvXTBLx/Kids-profile.png"
            class="d-block w-100"
            style="height: 40rem"
            alt="Kids Profile"
          />
        </div>
        <div class="carousel-item">
          <div class="carousel-text">
            <h1 id="mensText">Mens Fashion Watches</h1>
          </div>
          <img
            src="https://i.postimg.cc/1R2xWLvv/Mens-profile1.jpg"
            class="d-block w-100"
            style="height: 40rem"
            alt="Mens Profile"
          />
        </div>
        <div class="carousel-item">
          <div class="carousel-text">
            <h1>Womens Fashion Watches</h1>
          </div>
          <img
            src="https://i.postimg.cc/jSqGCt2d/Womens-profile.jpg"
            class="d-block w-100"
            style="height: 40rem"
            alt="Womens Profile"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="container-fluid pt-5">
      <div class="row px-xl-5 pb-3" id="home_icons">
        <div class="col-lg-3 col-md-6 col-sm-12 pb-1" id="home_icons1">
          <div class="d-flex flex-column align-items-center mb-4">
            <h1 class="fa fa-check text-primary m-0"></h1>
            <i class="bi bi-emoji-heart-eyes fa-10x"></i>
            <h5 class="font-weight-semi-bold m-0">Quality Product</h5>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 pb-1" id="home_icons2">
          <div class="d-flex flex-column align-items-center mb-4">
            <h1 class="fa fa-shipping-fast text-primary m-0"></h1>
            <i class="bi bi-truck"></i>
            <h5 class="font-weight-semi-bold m-0">Free Shipping</h5>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 pb-1" id="home_icons3">
          <div class="d-flex flex-column align-items-center mb-4">
            <h1 class="fa fa-shipping-fast text-primary m-0"></h1>
            <i class="bi bi-arrow-return-left"></i>
            <h5 class="font-weight-semi-bold m-0">10 days return</h5>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />

    <h2 id="ftText">Featured Products</h2>

    <div class="card-group">
      <div class="card">
        <img 
          src="https://i.postimg.cc/cJJJLYsm/Noise-Champ.jpg"
          class="card-img-top img-fluid"
          alt="kids watch"
          style="width: 17rem; margin: auto"
        />
        <div class="card-body">
          <h5 class="card-price">R150</h5>

          <router-link class="seeMoreBtnlink" to="products"
            >SEE MORE</router-link
          >
        </div>
      </div>
      <div class="card">
        <img
          src="https://i.postimg.cc/V6rLj800/Tempo-Pulse-2-0-Smart-watch.jpg"
          class="card-img-top img-fluid"
          alt="womans watch"
          style="width: 17rem; margin: auto"
        />
        <div class="card-body">
          <h5 class="card-price">R999</h5>
          <router-link class="seeMoreBtnlink" to="products"
            >SEE MORE</router-link
          >
        </div>
      </div>
      <div class="card">
        <img
          src="https://i.postimg.cc/d0SVk13K/Volkano-Serene-Series.jpg"
          class="card-img-top img-fluid"
          alt="mans watch"
          style="width: 17rem; margin: auto"
        />
        <div class="card-body">
          <h5 class="card-price">R799</h5>
          <router-link class="seeMoreBtnlink" to="products"
            >SEE MORE</router-link
          >
        </div>
      </div>
    </div>

    <button id="seeAllProducts">see all products</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
#home_icons1,
#home_icons2,
#home_icons3 {
  justify-content: space-between;

  height: 85px;
  font-size: 60px;
  box-shadow: 4px 4px 4px 4px black;
  background: linear-gradient(
    360deg,
    rgb(167, 85, 244),
    rgba(255, 255, 255, 0.533)
  );
  margin: auto;
  width: 15%;
}
#home_icons {
  justify-content: space-between;
  border-left: none;
  border-right: none;
  border-bottom: none;
}

h5 {
  font-weight: bolder;
  color: blueviolet;

  font-family: Georgia, "Times New Roman", Times, serif;
}

/*
   #home_icons2{
      height: 80px;
      justify-content: space-between;
      box-shadow: 4px 4px 4px 4px ;
      background: linear-gradient(40deg ,blueviolet, rgba(255, 255, 255, 0.533));
      width: 990px;
      margin: auto;
  }
  #home_icons3{
      height: 80px;
      justify-content: space-between;
      box-shadow: 4px 4px 4px 4px ;
      background: linear-gradient(40deg ,blueviolet, rgba(255, 255, 255, 0.533));
      width: 990px;
      margin: auto;
  } 
  */
.card-group {
  display: flex;
  justify-content: space-between;
  margin: auto;
}

.card {
  margin: 5%;
  box-shadow: 0px 2px 2px 2px rgb(168, 162, 183);

  border: none;
}

.card-img-top {
  width: 100%;
  height: auto;
}

.card-body {
  text-align: center;
}

#ftText {
  font-size: 60px;
  text-align: center;
  box-shadow: 4px 4px 4px 4px rgb(175, 123, 223);
  margin-top: 5rem;
}

#home_icons1,
#home_icons2,
#home_icons3 {
  background: linear-gradient(rgb(241, 240, 240), rgb(104, 100, 100));
  animation: slideAnimation 6s infinite;
}
@keyframes slideAnimation {
  0% {
    transform: scale(1.15);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.15);
  }
}

.seeMoreBtnlink {
  color: black;
  font-style: italic;
}

.card:hover {
  transform: scale(1.15);
  box-shadow: 15px 15px rgba(0, 0, 0, 0.493);
}
#seeAllProducts {
  margin: 50px;
  margin-left: 20%;

  width: 50%;
  height: 2.5rem;
  border-radius: 20px;
  font-style: italic;
  font-size: 20px;
}
#seeAllProducts:hover {
  background: linear-gradient(rgb(0, 0, 0), rgb(143, 132, 132));
  color: white;
  text-transform: uppercase;
}

h1 {
  font-size: 5rem;
  text-shadow: 4px 6px #edd7d7;
  text-align: center;
}

.carousel-text {
  position: absolute;
  top: 35%;
  left: 45%;
  transform: translate(-50%, -50%);
  /* background-color: rgba(255, 255, 255, 0.377);
*/
  background: linear-gradient(
    40deg,
    rgb(118, 116, 226),
    rgba(255, 255, 255, 0.533)
  );
  padding: 10px;
  color: rgb(0, 0, 0);
  font-size: 24px;
  text-align: center;
}

.bi {
  padding: 3%;
}

.container-fluid {
  justify-content: center;
  align-items: center;
}

.send_btn {
  background: blueviolet;
  font-weight: 600;
  font-size: 18px;
  width: 25%;
  color: #fff;
  height: 50px;
  border-radius: 30px;
  margin-top: 20px;
  transition: ease-in all 0.5s;
}

.send_btn:hover {
  background: #4b4b4c;
  transition: ease-in all 0.5s;
}

@media (max-width: 1031px) {
  .carousel-text {
    font-size: 18px;
  }

}

@media (max-width: 585px) {
 .card-body{
  font-size: 10px;
 }
 #ftText{
  font-size: 20px;
  
 }

}
</style>
