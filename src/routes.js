import { createWebHistory, createRouter } from "vue-router";
import LoginComponent from "./components/Login.vue";
import SecureComponent from "./components/Secure.vue";

const routes = [
  {
    path: "/",
    redirect: {
      name: "login",
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginComponent,
  },
  {
    path: "/secure",
    name: "secure",
    component: SecureComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
