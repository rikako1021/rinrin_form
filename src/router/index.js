import Vue from "vue";
import VueRouter from "vue-router";
import Top from "../views/Top";

Vue.use(VueRouter);

const routes = [
  {
    path: "../views/Top",
    name: "Top",
    component: Top,
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
