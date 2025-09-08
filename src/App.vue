<template>
  <!-- Header -->
  <transition name="fade" mode="out-in">
    <AppHeader
      key="app-header"
      @toggle-search="showSearch = !showSearch"
      @open-dropdown="openDropdown"
      @go-home="goHome"
    />
  </transition>

  <!-- Dropdown -->
  <transition name="dropdown-fade">
    <DropDown
      v-if="showDropdown"
      :section="exploreStore.activeSection"
      @close="showDropdown = false"
    />
  </transition>

  <!-- Search -->
  <SearchPanel v-if="showSearch" @close="showSearch = false" />

  <!-- Main Views -->
  <transition name="slide-up" mode="out-in">
    <component
      :is="activeView"
      :key="activeKey"
      :section="exploreStore.activeSection"
      :active-slide-id="exploreStore.activeSlideId"
    />
  </transition>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useExploreStore } from "./stores/useExploreStore.js";

import AppHeader from "./components/AppHeader.vue";
import SearchPanel from "./components/SearchPanel.vue";
import SliderComponent from "./components/SliderComponent.vue";
import ProductsLayout from "./components/ProductsLayout.vue";
import ProductContent from "./components/ProductContent.vue";
import DropDown from "./components/DropDown.vue";

const route = useRoute();
const router = useRouter();

const showSearch = ref(false);
const showDropdown = ref(false);

const exploreStore = useExploreStore();

function openDropdown(section) {
  exploreStore.activeSection = section;
  showDropdown.value = true;
}

function goHome() {
  exploreStore.goBack();
  router.push("/");
}

const activeView = computed(() => {
  if (route.name === "home") {
    return exploreStore.showProducts ? ProductsLayout : SliderComponent;
  }
  if (route.name === "product-details") {
    return ProductContent;
  }
  return null;
});

const activeKey = computed(() => {
  if (route.name === "home") {
    return exploreStore.showProducts ? "products-layout" : "slider";
  }
  if (route.name === "product-details") {
    return `product-${route.params.id}`;
  }
  return "unknown";
});
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

/* Slide up animation */
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

/* Fade for headers */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* Dropdown Animation */
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.3s ease;
}
.dropdown-fade-enter-from {
  opacity: 0;
  transform: translateY(-15px);
}
.dropdown-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.dropdown-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
</style>
