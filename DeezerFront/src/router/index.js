import { createRouter, createWebHistory } from "vue-router";
//import Layout from '../layouts/Layout.vue';

const routes = [
  {
    path: "/",
    name: "Deezer",
    component: () => import("../views/Deezer.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  window.scrollTo(0, 0);

  next();
});

export default router;