import { createRouter, createWebHistory } from "vue-router";
import SliderComponent from "../components/SliderComponent.vue";
import ProductContent from "../components/ProductContent.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: SliderComponent,
  },
  {
    path: "/products/:id",
    name: "product-details",
    component: ProductContent,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
