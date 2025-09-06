<template>
  <!-- Headers -->
  <!-- v-if="$route.name === 'home' && !showProducts" -->
  <transition name="fade" mode="out-in">
    <AppHeader
      key="app-header"
      @toggle-search="showSearch = !showSearch"
      @open-dropdown="openDropdown"
      @go-home="goHome"
    />
    <!-- <ProductsHeader
      v-else
      key="products-header"
      :active-category="selectedCategory"
      @change-category="selectedCategory = $event"
    /> -->
  </transition>
  <transition name="dropdown-fade">
    <DropDown
      v-if="showDropdown"
      :section="activeSection"
      @close="showDropdown = false"
    />
  </transition>

  <!-- Search -->
  <SearchPanel v-if="showSearch" @close="showSearch = false" />
  <ProductDetail />

  <!-- Main views -->
  <!-- <transition name="slide-up" mode="out-in">
    <component
      :is="activeView"
      :key="activeKey"
      @explore="handleExplore"
      @back="showProducts = false"
      :section="activeSection"
      :active-slide-id="activeSlideId"
    />
  </transition> -->
</template>

<script setup>
// computed
import { ref } from "vue";
//useRoute
import { useRouter } from "vue-router";

import AppHeader from "./components/AppHeader.vue";
// import ProductsHeader from "./components/ProductsHeader.vue";
import ProductDetail from "./components/ProductDetail.vue";
import SearchPanel from "./components/SearchPanel.vue";
// import ImageUpload from "./components/ImageUpload.vue";
// import SliderComponent from "./components/SliderComponent.vue";
// import ProductsLayout from "./components/ProductsLayout.vue";
// import ProductContent from "./components/ProductContent.vue";
import DropDown from "./components/DropDown.vue";

// const route = useRoute();
const router = useRouter();

const showSearch = ref(false);
// const selectedCategory = ref(null);
// const activeSlideId = ref(null);
const showProducts = ref(false);
const showDropdown = ref(false);
const activeSection = ref(null);

// const handleExplore = ({ section, slideId }) => {
//   activeSection.value = section;
//   activeSlideId.value = slideId; // save slide id
//   showProducts.value = true;
// };

function openDropdown(section) {
  activeSection.value = section;
  showDropdown.value = true;
}

function goHome() {
  // Reset product state if needed
  showProducts.value = false;
  router.push("/");
}

// const activeView = computed(() => {
//   if (route.name === "home") {
//     return showProducts.value ? ProductsLayout : SliderComponent;
//   }
//   if (route.name === "product-details") {
//     return ProductContent;
//   }
//   return null;
// });

// 🔑 Give each state a unique key for transitions
// const activeKey = computed(() => {
//   if (route.name === "home") {
//     return showProducts.value ? "products-layout" : "slider";
//   }
//   if (route.name === "product-details") {
//     return `product-${route.params.id}`;
//   }
//   return "unknown";
// });
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
