import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';



Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
    contactlist: [
      { id: 1, name: "Marko", email: "marko.muro@ut.ee", tel: "123456789", address: "Tartu" },
      { id: 2, name: "Aleksandra", email: "aleksandra.doroshenko@ut.ee", tel: "555-01234", address: "Tartu" },
      { id: 3, name: "Uku", email: "fill in", tel: "fill in", address: "Tartu" }
    ],
    posts: []
  },

  actions: {
    async fetchPosts({ commit }) {

      const response = await axios.get('https://api.npoint.io/a63a2287e67bcbc5b7f0');
      // JSON responses are automatically parsed.
      commit('setPosts', response.data)
      console.log(response.data);
    }

  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    }
  },
  getters: {
    posts: state => {
      return state.posts;
    }
  }
});
