import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home";
import Contact from "@/views/Contact";
import Register from "@/views/Register";
import Login from "@/views/Login";
import HookExample from "@/views/HookExample.vue";

const routes = [
  {
    path: "/home",
    name: "Accueil",
    component: Home,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/hook",
    name: "hook",
    component: HookExample,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: About.vue,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
