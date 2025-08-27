<template>
  <AppHeader></AppHeader>
  <SliderComponent></SliderComponent>
  <ProductsHeader></ProductsHeader>
  <ProductsComponent></ProductsComponent>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import SliderComponent from "./components/SliderComponent.vue";
import ProductsHeader from "./components/ProductsHeader.vue";
import ProductsComponent from "./components/ProductsComponent.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    SliderComponent,
    ProductsHeader,
    ProductsComponent,
  },
};
</script>
