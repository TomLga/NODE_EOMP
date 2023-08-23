<template>
     <div class="row">
       <div class="col-md-6">
         <form id="request" class="main_form" @submit.prevent="submitForm">
           <div class="row">
             <div class="col-md-12">
               <h3>Contact Us</h3>
             </div>
             <div class="col-md-12">
               <input v-model="formData.name" class="contact" placeholder="Name" type="text" name="Name" />
             </div>
             <div class="col-md-12">
               <input v-model="formData.phone" class="contact" placeholder="Phone Number" type="text" name="Phone Number" />
             </div>
             <div class="col-md-12">
               <input v-model="formData.email" class="contact" placeholder="Email" type="email" name="Email" />
             </div>
             <div class="col-md-12">
               <input v-model="formData.message" class="contact1" placeholder="Message" type="text" name="Message" />
             </div>
             <div class="col-md-12">
               <button class="send_btn" type="submit">Send</button>
             </div>
           </div>
         </form>
       </div>
     </div>
  

 </template>
 
 <script>
 export default {
   data() {
  return {
    formData: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  };
},
 name: 'ContactView',
   conponents: {

   }

 }
 </script>
 <style>

 .container-fluid{
  
   height: 100hv;
   background-color: white;
   margin: auto;
   width: fit-content;
   margin-left: 40%;
   margin-bottom: 7%;
   
   }
   
   
   main {
    
       background: white;
       padding:20px;
       border-radius: 10px;
       
   }
   
   .contact::placeholder,
   .contact1::placeholder {
         color: #aaa;
       }  
   
   .contact:focus,
   .contact1:focus {
         border-color: #2980b9;
       }
       
   
   .contact {
     width: 100%;
     padding: 10px;
     border: 2px solid #3498db;
     border-radius: 5px;
     margin-bottom: 15px;
     transition: border-color 0.3s ease;
     font-size: 16px;
     color: #3498db;
     
   }
   
   .contact1 {
   border-bottom: blue solid ;
   padding: 40px;
   width: 100%;
   height: 80%;
   background: transparent;
   color: blue;
   font-size: 18px;
   font-weight: normal;
     
     
   }
   
   .send_btn {
       background: blue;
       font-weight: 600;
       font-size: 18px;
       width: 25%;
       color: #fff;
       height: 50px;
       border-radius: 30px;
       margin-top: 20px;
       transition: ease-in all 0.5s;
       text-transform: uppercase;
      margin-left: 30%
    
   }
   
   .send_btn:hover {
       background: #4b4b4c;
       transition: ease-in all 0.5s;
   }
</style>