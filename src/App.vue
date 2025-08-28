<template>
  <AppHeader />
  <SliderComponent />
  <ProductsHeader
    :active-category="selectedCategory"
    @change-category="selectedCategory = $event"
  />
  <ProductsComponent :category="selectedCategory" />
</template>

<script setup>
import { ref } from "vue";
import AppHeader from "./components/AppHeader.vue";
import SliderComponent from "./components/SliderComponent.vue";
import ProductsHeader from "./components/ProductsHeader.vue";
import ProductsComponent from "./components/ProductsComponent.vue";

const selectedCategory = ref("handles");
</script>
