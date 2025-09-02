<template>
  <!-- Header stays -->
  <transition name="fade" mode="out-in">
    <AppHeader
      v-if="$route.name !== 'products' && $route.name !== 'product-details'"
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

  <!-- Search -->
  <SearchPanel v-if="showSearch" @close="showSearch = false" />

  <!-- Route-based views -->
  <transition name="slide-up" mode="out-in">
    <router-view />
  </transition>
</template>

<script setup>
import { ref } from "vue";
import AppHeader from "./components/AppHeader.vue";
import ProductsHeader from "./components/ProductsHeader.vue";
import SearchPanel from "./components/SearchPanel.vue";

const showSearch = ref(false);
const selectedCategory = ref(null);
// const showProducts = ref(false);
// const selectedProduct = ref(null);

// function handleExplore() {
//   showProducts.value = true;
// }
// function openProduct(product) {
//   selectedProduct.value = product;
// }
</script>

<style scoped>
.products-wrapper,
.product-description-wrapper {
  position: fixed;
  top: 44px; /* leave space for header */
  left: 0;
  width: 100%;
  height: calc(100vh - 44px);
  background: #fff;
  overflow-y: auto;
  z-index: 22093;
}

/* Animations */
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
.slide-up-enter-to,
.slide-up-leave-from {
  transform: translateY(0);
  opacity: 1;
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.6s ease, opacity 0.6s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
