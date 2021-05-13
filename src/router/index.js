import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import Projects from "../views/Projects.vue";
import Skills from "../views/Skills.vue";
import Awards from "../views/Awards.vue";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "About",
    component: About,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills,
  },
  {
    path: "/awards",
    name: "Awards",
    component: Awards,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
