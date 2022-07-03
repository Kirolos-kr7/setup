import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SliderView from "../views/SliderView.vue";
import CollapseView from "../views/CollapseView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/slider",
      name: "slider",
      component: SliderView,
    },
    {
      path: "/collapse",
      name: "collapse",
      component: CollapseView,
    },
  ],
});

export default router;
