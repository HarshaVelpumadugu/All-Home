import { createRouter, createWebHistory } from "vue-router";
import SliderComponent from "../components/SliderComponent.vue";
import ProductsLayout from "../components/ProductsLayout.vue";
import ProductContent from "../components/ProductContent.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: SliderComponent,
  },
  {
    path: "/products",
    name: "products",
    component: ProductsLayout,
  },
  {
    path: "/products/:id",
    name: "product-details",
    component: ProductContent,
    props: true, // Pass route params as props
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
