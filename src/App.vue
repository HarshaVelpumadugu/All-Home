<template>
  <transition name="fade" mode="out-in">
    <AppHeader v-if="!showProductsHeader" key="app-header" />
    <ProductsHeader
      v-else
      key="products-header"
      :active-category="selectedCategory"
      @change-category="selectedCategory = $event"
    />
  </transition>

  <SliderComponent />
  <ProductsComponent ref="productsRef" :category="selectedCategory" />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import AppHeader from "./components/AppHeader.vue";
import SliderComponent from "./components/SliderComponent.vue";
import ProductsHeader from "./components/ProductsHeader.vue";
import ProductsComponent from "./components/ProductsComponent.vue";

const selectedCategory = ref("handles");
const showProductsHeader = ref(false);
const productsRef = ref(null);

let observer;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.8) {
          showProductsHeader.value = true;
        } else {
          showProductsHeader.value = false;
        }
      });
    },
    { threshold: [0, 0.8] }
  );

  if (productsRef.value?.$el) {
    observer.observe(productsRef.value.$el);
  }
});

onBeforeUnmount(() => {
  if (productsRef.value?.$el) {
    observer.unobserve(productsRef.value.$el);
  }
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
