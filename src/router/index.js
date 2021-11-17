import Vue from "vue";
import VueRouter from "vue-router";
import Contactus from "../views/Contactus.vue";
import Main from "../views/Main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "indexpage",
    component: Main,
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contactus",
    name: "Contactus",
    component: Contactus,
  },
  

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  
});

export default router;
