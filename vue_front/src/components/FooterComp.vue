<template>
  <div class="container-fluid">
    <div class="footer">
      <div class="info_logo">
        <h2>
          Time Vogue
        </h2>
      </div>
      <div class="row">

        <div class="col-md-3">
          <div class="info_contact">
            <h5>
              About Shop
            </h5>
            <div>
              <p>
                +27 439 111 0002
              </p>
            </div>
            <div>
              <div class="icon">
               
              </div>
              <p>
                info@timevogue.com
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="info_info">
            <h5>
              Informations
            </h5>
            <p>
              To get our latest trends and news, please subscribe to our newsletters.
              
              Thank you for your time ⌚, please come again!
            </p>
          </div>
        </div>

        <h5 class="col-md-3">Quick Shop</h5>
          <div class="links">
              <a href="../views/HomeView.vue" class="btn btn-primary">Home</a>
              <a href="../views/AboutView.vue" class="btn btn-primary">About</a>
              <a href="../views/AdminView.vue" class="btn btn-primary">Admin</a>
              <a href="../views/ProductsView.vue" class="btn btn-primary">Products</a>
              <a href="../views/ProductsView.vue" class="btn btn-primary">Products</a>
          </div>

        <div class="col-md-3">
          <div class="info_form ">
            <h5>
              Newsletter
            </h5>
            <form action="">
              <input type="email" placeholder="Enter your email">
              <button>
                Subscribe
              </button>
            </form>
            <div class="social_box">
              <a href="">
                <img src="images/fb.png" alt="">
              </a>
              <a href="">
                <img src="images/twitter.png" alt="">
              </a>
              <a href="">
                <img src="images/linkedin.png" alt="">
              </a>
              <a href="">
                <img src="images/youtube.png" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  <section class="footer_section">
    <div class="container">
      <p class="lead">Copyright &copy;{{ cyear }}. All Rights Reserved by Time Vogue</p>
    </div>
  </section>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        cyear: new Date().getFullYear()
      };
    }
  };
  
</script>

<style>

.footer_section {
      background-color: rgb(54, 22, 22);
      color: white;
      padding: 20px 0;
    }

    .footer_section a {
      color: white;
      text-decoration: none;
      margin-right: 10px;
    }

    .footer_section a:hover {
      text-decoration: underline;
    }

    .footer{
      background:blueviolet;
    }

    .h5{
      color:aliceblue;
      background-color: blanchedalmond;
    }
     p{
      color: aliceblue;
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

     }

    .container-fluid{
      justify-content: center;
      align-content: center;
      align-items: baseline;
    }



    .footer {
      background: black;
      color: white;
      text-align: center;
      padding: 30px 0;
    }
    
    .info_logo h2 {
      color: white;
    }
    
    .info_contact h5,
    .info_info h5,
    .info_form h5 {
      color: aliceblue;
    }
    
    .info_contact p,
    .info_info p {
      color: aliceblue;
    }
    
    .links {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 10px;
    
    }
    
    .links a {
      color: white;
      text-decoration: none;
      width: fit-content;
      margin-left: 60%;
      
    }
    
    .links a:hover {
      text-decoration: underline;

    }
    
    .social_box {
      display: flex;
      gap: 10px;
    }
    
    .footer_section {
      background-color: blueviolet;
      color: white;
      text-align: center;
      padding: 20px 0;
    }
</style>