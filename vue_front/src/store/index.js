import { createStore } from 'vuex'
import axios from 'axios'
const cUrl = "https://node-eomp-vue.onrender.com/"

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    spinner: false,
    token: null,
    msg: null,
    state: {
      product: {
        prodUrl: '',
      },
    }
    
  },
  getters: {
  },
  mutations: {
    
    setUsers(state, users) {
      state.users = users
    },
    setUser(state, user) {
      state.user = user
    },
    setProducts(state, products) {
      state.products = products
    },
    setProduct(state, product) {
      state.product = product
    },
    setSpinner(state, value) {
      state.spinner = value
    },
    setToken(state, token) {
      state.spinner = spinner
    },
    setMsg(state, msg) {
      state.msg = msg
    },
    // logan
    setProducts(state, value) {
      state.products = value
    },
    setProduct( state, value) {
      state.product = value
    },
    setMessage(state, value){
      state.message = value
    }
  },

  actions: {
    async fetchProds(context) {
      try {
        const { data } = await axios.get(`${cUrl}products`);
        context.commit("setProducts", data.results); 
      } catch (e) {
        context.commit("setMsg", "error occ");
      }
    },

    async fetchUsers(context) {
      try {
        const { data } = (await axios.get(`${cUrl}users`));
        context.commit("setUsers", data.results); 
      } catch (e) {s
        context.commit("setMsg", "error occ");
      }
    },

      async addProduct(context, newProduct) {
        try {
          const response = await axios.post(`${cUrl}products`, newProduct);
          return response.data;
        } catch (error) {
          throw error;
        }
      },
    
    
      async updateUser(context, updatedUser) {
        try {
          const response = await axios.patch(`${cUrl}users/${updatedUser.userID}`, updatedUser);
          return response.data;
        } catch (error) {
          throw error;
        }
      },
// logan 
async fetchProducts(context) {
  const res = await axios.get(`${cUrl}products`)
  const {results, err} = await res.data;
  if(results) {
    context.commit('setProducts', results)
  }else {
    context.commit('setMessage', err)
  }
},
async fetchProduct(context, id) {
  const res = await axios.get(`${cUrl}product/${id}`)
  const {results, err} = await res.data;
  if(results) {
    context.commit('setProduct', results[0])
  }else{
    context.commit('setMessage', err)
  }
},
async addProduct(context, payload) {
  const res = await axios.post(`${cUrl}products`, payload)
  const {msg, err} = await res.data;
  if(msg) {
    context.commit('setMessage', msg)
  }else if (err) {
    console.log(err);
    context.commit('setMessage', err)
  }
}

    }
  

  },
)
  modules: {
  }

  


