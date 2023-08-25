import { createStore } from 'vuex';
import axios from 'axios';

const cUrl = "https://node-eomp-vue.onrender.com/";

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
        prodUrl: "",
      },
    },
  },
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setSpinner(state, value) {
      state.spinner = value;
    },
    setToken(state, token) {
      state.spinner = token;
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
    setProducts(state, value) {
      state.products = value;
    },
    setProduct(state, value) {
      state.product = value;
    },
    setMessage(state, value) {
      state.message = value;
    },
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
        const { data } = await axios.get(`${cUrl}users`);
        context.commit("setUsers", data.results);
      } catch (e) {
        context.commit("setMsg", "error occ");
      }
    },

    async updateUser(context, updatedUser) {
      try {
        const response = await axios.patch(
          `${cUrl}users/${updatedUser.userID}`,
          updatedUser
        );
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    async fetchProducts(context) {
      try {
        context.commit("setSpinner", true);
        const response = await axios.get(`${cUrl}products`);
        context.commit("setProducts", response.data.results);
        context.commit("setSpinner", false);
      } catch (err) {
        console.log(err);
      }
    },
    async fetchProduct(context, id) {
      try {
        const response = await axios.get(`${cUrl}product/${id}`);
        const { results, err } = response.data;
        if (results) {
          context.commit("setProduct", results[0]);
        } else {
          context.commit("setMessage", err);
        }
      } catch (err) {
        console.log(err);
      }
    },
    async addProduct(context, payload) {
      try {
        const response = await axios.post(`${cUrl}products`, payload);
        const { msg, err } = response.data;

        if (msg) {
          context.commit("setMessage", msg);
        } else if (err) {
          console.log(err);
          context.commit("setMessage", err);
        }

        await context.dispatch('fetchProducts');
      } catch (error) {
        console.error(error);
        context.commit("setMessage", "Error adding product");
        throw error;
      }
    },
    async getProducts(context) {
      try {
        context.commit("setSpinner", true);
        const response = await axios.get(`${cUrl}products`);
        context.commit("setProducts", response.data.results);
        context.commit("setSpinner", false);
      } catch (err) {
        console.log(err);
      }
    },
    async getUsers(context) {
      try {
        context.commit("setSpinner", true);
        const response = await axios.get(`${cUrl}users`);
        context.commit("setUsers", response.data.results);
        context.commit("setSpinner", false);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
