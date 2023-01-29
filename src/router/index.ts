import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/TableFrame.vue"),
    },
    {
      path: "/new",
      name: "localTable",
      component: () => import("../views/LocalEditTableFrame.vue"),
    },
  ],
});

export default router;
