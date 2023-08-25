<template>
    <div>

        <div class="container-fluid">
        <div class="contact-us">
          <form>
            <div class="row mb-3">
              <label for="inputName3" class="col-sm-2 col-form-label">Name</label>
              <div class="col-sm-10">
                <input type="name" class="form-control" id="inputName3">
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-10">
                <input type="email" class="form-control" id="inpuEmail3">
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputSubject3" class="col-sm-2 col-form-label">subject</label>
              <div class="col-sm-10">
                <input type="subject" class="form-control" id="inputSubject3">
              </div>
            </div>

            <div class="row mb-3">
              <label for="inputMessage3" class="col-sm-2 col-form-label">Message</label>
              <div class="col-sm-10">
                <textarea type="message" class="form-control" id="inputMessage3" row="8"></textarea>
              </div>
            </div>
           
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>



        </div>
      </div>
    </div>
  </template>
  


  <script>
  export default {
    name: 'ContactView',
    components: {
      // Your components
    },
    methods: {
      async fetchData() {
      try {
        // Fetch data
      } catch (error) {
        this.errorMessage = 'An error occurred while fetching data.';
        console.error('Error:', error);
      }
    },
  },
};
   
<style >

  
</style>