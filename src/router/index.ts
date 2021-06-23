import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Dashboard from "../views/Dashboard.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/Quiz",
    name: "Quiz",
    // route level code-splitting
    // this generates a separate chunk (Quiz.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Quiz" */ "../views/Quiz.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
