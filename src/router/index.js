import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    meta: { layout: "empty" },
    component: () => import("../views/Login")
  },
  {
    path: "/registering",
    name: "registering",
    meta: { layout: "empty" },
    component: () => import("../views/Register")
  },
  {
    path: "/",
    name: "Home",
    meta: { layout: "main" },
    component: () => import("../views/Home")
  },
  {
    path: "/categories",
    name: "categories",
    meta: { layout: "main" },
    component: () => import("../views/Categories")
  },
  {
    path: "/history",
    name: "history",
    meta: { layout: "main" },
    component: () => import("../views/History")
  },
  {
    path: "/planning",
    name: "planning",
    meta: { layout: "main" },
    component: () => import("../views/Planning")
  },
  {
    path: "/profile",
    name: "profile",
    meta: { layout: "main" },
    component: () => import("../views/Profile")
  },
  {
    path: "/record",
    name: "record",
    meta: { layout: "main" },
    component: () => import("../views/Record")
  },
  {
    path: "/record_detail",
    name: "record_detail",
    meta: { layout: "main" },
    component: () => import("../views/RecordDetail")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
