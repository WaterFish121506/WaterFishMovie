import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: {
      name: "Home",
    },
  },
  {
    path: "/:catchAll(.*)",
    redirect: {
      name: "Home",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
