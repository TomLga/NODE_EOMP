<template>
  <div>
    <div class="container-fluid">
      <div class="contact-us">
        <form>
          <div class="row mb-3">
            <label for="inputName3" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="inputName3">
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="inputEmail3">
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputSubject3" class="col-sm-2 col-form-label">Subject</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="inputSubject3">
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputMessage3" class="col-sm-2 col-form-label">Message</label>
            <div class="col-sm-10">
              <textarea class="form-control" id="inputMessage3" rows="8"></textarea>
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


</script>






<style scoped>
.contact-us{
  width: 50%;
  margin : auto;
  
  
}

.btn {
  background: blueviolet;
  font-weight: 600;
  font-size: 18px;
  width: 10%;
  color: #fff;
  height: 50px;

  margin-top: 20px;
  margin-right: 4rem;
  transition: ease-in all 0.5s;
  text-transform: uppercase;


}

.btn:hover {
  background: #4b4b4c;
  transition: ease-in all 0.5s;
}
</style>

