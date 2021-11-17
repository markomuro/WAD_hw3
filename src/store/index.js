import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contactlist: [
      {id:1, name: "Marko", email: "marko.muro@ut.ee", tel: "123456789", address: "Tartu" },
      {id:2, name: "Aleksandra", email: "fill in", tel: "fill in", address: "Tartu" },
      {id:3, name: "Uku", email: "fill in", tel: "fill in", address: "Tartu" }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
});
