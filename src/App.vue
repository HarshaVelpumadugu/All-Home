<template>
  <transition name="fade" mode="out-in">
    <AppHeader
      v-if="!showProductsHeader"
      key="app-header"
      @toggle-search="showSearch = !showSearch"
    />
    <ProductsHeader
      v-else
      key="products-header"
      :active-category="selectedCategory"
      @change-category="selectedCategory = $event"
    />
  </transition>
  <SearchPanel v-if="showSearch" @close="showSearch = false" />
  <SliderComponent />

  <ProductsComponent ref="productsRef" :category="selectedCategory" />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import AppHeader from "./components/AppHeader.vue";
import SliderComponent from "./components/SliderComponent.vue";
import ProductsHeader from "./components/ProductsHeader.vue";
import ProductsComponent from "./components/ProductsComponent.vue";
import SearchPanel from "./components/SearchPanel.vue";

const selectedCategory = ref("handles");
const showProductsHeader = ref(false);
const productsRef = ref(null);
const showSearch = ref(false);

let observer;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.8) {
          showProductsHeader.value = true;
          console.log("true");
        } else {
          showProductsHeader.value = false;
          console.log("false");
        }
      });
    },
    { threshold: [0.8] }
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
watch(showSearch, (newVal) => {
  if (newVal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});
</script>
