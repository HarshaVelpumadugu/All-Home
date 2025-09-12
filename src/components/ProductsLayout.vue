<template>
  <div class="products-container" v-if="exploreStore.showProducts">
    <!-- Header -->
    <div class="header">
      <div class="products-header">
        {{ formattedSection }}
      </div>
      <div class="products-header">Products</div>
      <div class="frame-child"></div>
    </div>
    <!-- Grid -->
    <div class="products-grid">
      <div
        v-for="(product, index) in activeProducts"
        :key="product.sku || index"
        class="product-card"
        @click="handleProductClick(product, index)"
      >
        <div class="product-img">
          <img :src="product.img" :alt="product.name" />
        </div>
        <!-- Overlay -->
        <div class="product-overlay">
          <p class="product-name">{{ product.name }}</p>
          <button class="view-btn">&gt;</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useExploreStore } from "../stores/useExploreStore.js";
import { useProductStore } from "../stores/useProductStore.js";
import { useRouter } from "vue-router";

const exploreStore = useExploreStore();
const productStore = useProductStore();
const router = useRouter();

const screenWidth = ref(window.innerWidth);

// Computed property to get active products based on screen size and selection
const activeProducts = computed(() => {
  if (screenWidth.value <= 820) {
    // Mobile view - based on slide ID
    if (exploreStore.activeSlideId === 1) {
      return productStore.getProductsByCategory("COLOUR COATS");
    } else if (exploreStore.activeSlideId === 2) {
      return productStore.getProductsByCategory("THE HOUSE OF W");
    }
    return productStore.getProductsByCategory("METALIA");
  } else if (screenWidth.value >= 1024) {
    // Desktop view - based on active section
    return productStore.getProductsByCategory(exploreStore.activeSection) || [];
  }
  return [];
});

// Format section name for display
const formattedSection = computed(() => {
  if (!exploreStore.activeSection) return "";
  return exploreStore.activeSection
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
});

// Handle product click
const handleProductClick = (product, index) => {
  // You can store the selected product in the store if needed
  // productStore.setSelectedProduct(product);

  // Navigate to product detail page
  router.push(`/products/${index}`);
};

// Handle window resize
function handleResize() {
  screenWidth.value = window.innerWidth;
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped lang="scss">
.products-container {
  max-width: 75rem;
  margin: 0 auto;
  padding: 2.5rem 1.25rem;

  .header {
    display: flex;
    flex-direction: column;
    margin-bottom: 2.5rem;

    .products-header {
      font-size: 2.5rem;
      font-weight: 300;
      font-family: $font-nunito;
      letter-spacing: 0.125rem;
      color: #000;
      text-align: left;
    }

    .frame-child {
      height: 0.125rem;
      background-color: #000;
      width: 6.25rem;
      opacity: 0.8;
    }
  }

  .products-grid {
    display: grid;
    gap: 2.5rem;
    width: 100%;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-auto-rows: auto;
    padding-bottom: 2.5rem;
    overflow: visible;
    justify-items: stretch;
    align-items: stretch;
    align-content: start;
    justify-content: start;

    @media (max-width: 820px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .product-card {
      position: relative;
      width: 100%;
      aspect-ratio: 1 / 1;
      border-radius: 0.5rem;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.3s ease;
      background: #fff;
      box-shadow: 0 2px 8px #0000001a;

      .product-img {
        width: 100%;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
          box-sizing: border-box;
        }
      }

      &:hover {
        .product-img img {
          transform: scale(1.2); // Image zoom on hover
        }

        .product-overlay {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .product-overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
        padding: 1.25rem;
        opacity: 0;
        transition: opacity 0.3s ease;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        gap: 0.625rem;
        box-sizing: border-box;

        .product-name {
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 0.25rem;
          margin: 0;
          box-sizing: border-box;
        }

        .view-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 1.5rem;
          height: 1.5rem;
          background: #fff;
          border-radius: 50%;
          transition: all 0.3s ease-in;
          flex-shrink: 0;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>
