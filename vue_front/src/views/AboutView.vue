<template>
  <div class="about">
    <div class="container">
       <div class="row d_flex">
          <div class="col-md-5">
             <div class="about_img">
                <figure><img id="abtImg" src="https://i.postimg.cc/k5x8780R/apple-watch.jpg" alt="profile"/></figure>
             </div>
          </div>
          <class class="col-md-7">
             <div class="titlepage">
                <h2>About Us</h2>
                <p>Watch is a very popular and practical fashion accessory for men, women and kids. From high-end luxurious watches to reasonable regular watches, endless styles of watches are available in the market today.</p>
                <p>Our watches are made for your wrists Crafted with Love💜 & Care . Beautifully designed at its best and are the World-class watch made for you. The Art of Watch is Here. Time changes, we don’t.</p>
         </div>
         </class>
      </div>
   </div>
</div>


</template>

<script>
    export default {
        name: 'AboutView',
        components: {
  
  }
      }

</script>

<style>
.titlepage{
   border-radius: 0px 40px ;
   box-shadow: inset -20px -20px blueviolet ;

}
h2{
text-shadow: 0px 3px 3px blueviolet;
text-align: center;
}


.about {
   border-bottom: #000 solid 1px;
   padding: 130px 0 90px 0;
 }
 
 
 #abtImg{
   margin-top:10%;
 
   width: 35rem;
  
 }
 .about .titlepage::before {
   position: absolute;
   content: "";
   width: 220px;
   height: 411px;
   right: -30px;
   background: url();
   background-repeat: no-repeat;
   top: -27px;
   z-index: -1;
 }
 
 .about .about_img figure {
   margin: 0;
 }
 
 .about .titlepage {
   border: #000 solid 1px;
   padding: 40px 40px;
   z-index: 10018;
   background: #fff;
   margin-right: 40px;
 }
 
 .about .titlepage p {
   color: #2a2a2c;
   font-size: 17px;
   line-height: 35px;
   font-weight: 400;
   padding-top: 20px;
 }
 
</style>