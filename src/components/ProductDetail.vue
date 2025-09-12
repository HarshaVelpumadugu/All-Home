<template>
  <div class="container">
    <div class="left-section">
      <div class="header-section">
        <div class="back-button-wrapper">
          <div class="back-button-container" @click="viewStore.closeDetail">
            <div class="back-arrow-icon">
              <img
                class="arrow-left-icon"
                alt=""
                src="../assets/vuesax/outline/arrow-left.svg"
              />
            </div>
            <div class="page-title">Product Detail</div>
          </div>
        </div>
      </div>

      <div class="image-container">
        <div
          class="transition-overlay"
          :class="{ active: isTransitioning }"
        ></div>

        <img
          class="main-product-image day-image"
          :class="{ visible: isDayTheme }"
          alt="Day preset"
          loading="lazy"
          :src="productStore.currentDayImage"
        />
        <img
          class="main-product-image night-image"
          :class="{ visible: !isDayTheme }"
          alt="Night preset"
          loading="lazy"
          :src="productStore.currentNightImage"
        />

        <!-- Dynamic Hotspots -->
        <div
          v-for="hotspot in productStore.hotspots"
          :key="hotspot.id"
          class="hotspot-icon"
          @click="toggleHotspot(hotspot.id)"
          :style="{ top: hotspot.position.top, left: hotspot.position.left }"
          :title="hotspot.label"
        >
          <div
            class="hotspot-inner"
            :class="{ active: activeHotspot === hotspot.id }"
          ></div>
          <!-- Optional: Add tooltip on hover -->
          <div class="hotspot-tooltip" v-if="hoveredHotspot === hotspot.id">
            {{ hotspot.description }}
          </div>
        </div>

        <div class="view-room-button" @click="viewStore.openImageUpload">
          <img class="ar-icon" alt="" src="../assets/Group 1000016524.svg" />
          <div class="view-room-text">View in your Room</div>
        </div>

        <div class="theme-toggle-container" @click="toggleTheme">
          <div class="theme-icon" :class="{ active: isDayTheme }">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="5"
                stroke="currentColor"
                stroke-width="2"
              />
              <line
                x1="12"
                y1="1"
                x2="12"
                y2="3"
                stroke="currentColor"
                stroke-width="2"
              />
              <line
                x1="12"
                y1="21"
                x2="12"
                y2="23"
                stroke="currentColor"
                stroke-width="2"
              />
              <line
                x1="4.22"
                y1="4.22"
                x2="5.64"
                y2="5.64"
                stroke="currentColor"
                stroke-width="2"
              />
              <line
                x1="18.36"
                y1="18.36"
                x2="19.78"
                y2="19.78"
                stroke="currentColor"
                stroke-width="2"
              />
              <line
                x1="1"
                y1="12"
                x2="3"
                y2="12"
                stroke="currentColor"
                stroke-width="2"
              />
              <line
                x1="21"
                y1="12"
                x2="23"
                y2="12"
                stroke="currentColor"
                stroke-width="2"
              />
              <line
                x1="4.22"
                y1="19.78"
                x2="5.64"
                y2="18.36"
                stroke="currentColor"
                stroke-width="2"
              />
              <line
                x1="18.36"
                y1="5.64"
                x2="19.78"
                y2="4.22"
                stroke="currentColor"
                stroke-width="2"
              />
            </svg>
          </div>
          <div class="theme-icon" :class="{ active: !isDayTheme }">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                stroke="currentColor"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="right-section">
      <div class="tab-navigation">
        <div
          class="tab"
          :class="{ 'active-tab': activeTab === 'in-room' }"
          @click="setActiveTab('in-room')"
        >
          In room Items
        </div>
        <div
          class="tab"
          :class="{ 'active-tab': activeTab === 'swap' }"
          @click="setActiveTab('swap')"
        >
          Swap Items
        </div>
      </div>

      <div class="product-cards">
        <template v-if="activeTab === 'in-room'">
          <div
            v-for="item in productStore.inRoomItems"
            :key="item.sku"
            class="product-card clickable"
            @click="handleProductClick(item)"
          >
            <img class="product-thumbnail" alt="" :src="item.image" />
            <div class="product-info">
              <div class="sku-info">
                <div class="label">SKU Code : {{ item.sku }}</div>
                <div class="product-name">{{ item.name }}</div>
              </div>
              <div class="brand-info">
                <div class="label">Brand Name</div>
                <div class="brand-name">{{ item.brand }}</div>
              </div>
            </div>
          </div>
        </template>

        <template v-if="activeTab === 'swap'">
          <div
            v-for="item in swapItems"
            :key="item.sku"
            class="product-card selectable"
            @click="selectProduct(item)"
          >
            <div class="product-card-content">
              <img class="product-thumbnail" alt="" :src="item.image" />
              <!-- Selection Indicator -->
              <div
                class="selection-indicator"
                v-if="productStore.isProductSelected(item)"
              >
                <img
                  src="https://allhome.foyr.com/assets/tick-e2d504db.svg"
                  alt="Selected"
                  class="tick-icon"
                />
              </div>
            </div>
            <div class="product-info">
              <div class="sku-info">
                <div class="label">SKU Code : {{ item.sku }}</div>
                <div class="product-name">{{ item.name }}</div>
              </div>
              <div class="brand-info">
                <div class="label">Brand Name</div>
                <div class="brand-name">{{ item.brand }}</div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <ImageUpload
      v-if="modalStore.isImageUploadOpen"
      @close="modalStore.closeImageUpload"
    />
  </div>
</template>

<script setup>
import { onUnmounted, ref, computed, watch } from "vue";
import { useModalStore } from "../stores/useModalStore.js";
import { useViewStore } from "../stores/useViewStore.js";
import { useProductStore } from "../stores/useProductStore.js";
import ImageUpload from "./ImageUpload.vue";

const modalStore = useModalStore();
const viewStore = useViewStore();
const productStore = useProductStore();

const isDayTheme = ref(true);
const activeHotspot = ref(null);
const hoveredHotspot = ref(null);
const activeTab = ref("in-room");
const isTransitioning = ref(false);

// Computed property for swap items based on active hotspot
const swapItems = computed(() => {
  if (activeHotspot.value) {
    return productStore.getSwapItemsForHotspot(activeHotspot.value);
  }
  // Default to first pair if no hotspot is active
  return productStore.getSwapItemsForPair("pair1");
});

// Trigger transition animation
const triggerTransition = () => {
  isTransitioning.value = true;
  setTimeout(() => {
    isTransitioning.value = false;
  }, 600);
};

// Watch for changes in selected items
watch(
  () => productStore.selectedItems,
  () => {
    triggerTransition();
  },
  { deep: true }
);

// Watch for theme changes
watch(isDayTheme, () => {
  triggerTransition();
});

// Toggle theme between day and night
const toggleTheme = () => {
  isDayTheme.value = !isDayTheme.value;
  console.log("Theme toggled:", isDayTheme.value ? "Day" : "Night");
};

// Toggle hotspot activation
const toggleHotspot = (hotspotId) => {
  activeHotspot.value = activeHotspot.value === hotspotId ? null : hotspotId;
  if (activeHotspot.value) {
    activeTab.value = "swap";
  }
  console.log("Hotspot toggled:", hotspotId);
};

// Handle product click in "in-room" tab
const handleProductClick = (product) => {
  const hotspot = productStore.getHotspotByPairId(product.pairId);

  if (hotspot) {
    activeHotspot.value = hotspot.id;
    activeTab.value = "swap";
    console.log(
      `Product clicked: ${product.name}, switching to pair: ${product.pairId}`
    );
  }
};

// Select a product for swapping
const selectProduct = (product) => {
  productStore.selectProduct(product);
  console.log(`Selected ${product.name} for ${product.pairId}`);
};

// Set active tab
const setActiveTab = (tab) => {
  activeTab.value = tab;

  if (tab === "in-room") {
    activeHotspot.value = null;
  }
};

// Cleanup on unmount
onUnmounted(() => {
  viewStore.closeDetail();
});
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 28.25rem;
  gap: 1.25rem;
  padding: 1.25rem;
  padding-right: 0rem;
  padding-top: 0rem;
  height: 88vh;

  .left-section {
    display: grid;
    grid-template-rows: max-content 1fr;
    gap: 1rem;
    overflow: hidden;
    .header-section {
      position: relative;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      padding: 0.5rem 1.5rem;
      padding-left: 0;
      box-sizing: border-box;
      text-align: left;
      font-size: 0.875rem;
      color: #4b5563;
      font-family: $font-nunito;

      .back-button-wrapper {
        width: 8.75rem;
        border-radius: 0.5rem;
        height: 2rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0.75rem 1rem 0.75rem 0;
        box-sizing: border-box;

        .back-button-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: 0.25rem;
          cursor: pointer;

          .back-arrow-icon {
            width: 1rem;
            height: 1rem;
            position: relative;

            .arrow-left-icon {
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            }
          }

          .page-title {
            position: relative;
            letter-spacing: -0.02em;
            line-height: 1rem;
            font-weight: 500;
          }
        }
      }
    }

    .image-container {
      position: relative;
      overflow: hidden;
      border-radius: 0.5rem;

      // Transition overlay
      .transition-overlay {
        position: absolute;
        top: 0;
        left: 100%;
        width: 100%;
        height: 100%;
        background: #565555;
        z-index: 20;
        pointer-events: none;
        transition: none;

        &.active {
          animation: sweepTransition 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      }

      @keyframes sweepTransition {
        0% {
          width: 95%;
          opacity: 0;
          filter: blur(24px);
        }
        10% {
          width: 5%;
          opacity: 0.2;
          filter: blur(10px);
        }
        90% {
          width: 1%;
          opacity: 0.1;
          filter: blur(2px);
        }
        100% {
          left: -100%;
          opacity: 0;
        }
      }

      .main-product-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.5rem;
        opacity: 0;
        transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);

        &.day-image {
          z-index: 1;
        }

        &.night-image {
          z-index: 2;
        }

        &.visible {
          opacity: 1;
        }
      }

      // Hotspot Icon Styles
      .hotspot-icon {
        position: absolute;
        width: 16px;
        height: 16px;
        cursor: pointer;
        z-index: 15;
        transform: translate(-50%, -50%);

        .hotspot-inner {
          position: absolute;
          width: 16px;
          height: 16px;
          background: hsl(0, 100%, 100%);
          border: 5px solid hsl(0, 2%, 75%);
          border-radius: 50%;
          animation: blink 2s ease-in-out infinite;
          backdrop-filter: blur(5px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

          &.active {
            border: 5px solid #516ce0;
            box-shadow: 0 0 0 2px rgba(81, 108, 224, 0.3);
          }
        }
      }

      @keyframes blink {
        0%,
        100% {
          opacity: 1;
          transform: scale(1);
        }
        50% {
          opacity: 0.7;
          transform: scale(0.85);
        }
      }

      .view-room-button {
        position: absolute;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 6.25rem;
        cursor: pointer;
        background-color: #fff;
        border: 1px solid #516ce0;
        box-sizing: border-box;
        width: 14.0625rem;
        height: 3rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0.625rem 2rem;
        gap: 0.5rem;
        text-align: left;
        font-size: 1rem;
        font-family: $font-nunito;
        z-index: 10;

        .ar-icon {
          width: 0.875rem;
          height: 0.875rem;
          position: relative;
        }

        .view-room-text {
          position: relative;
          font-weight: 600;
          background: linear-gradient(144.46deg, #516ce0, #aab9f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      // Theme Toggle Styles
      .theme-toggle-container {
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 2.5rem;
        height: 1.5rem;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 0.75rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 0.125rem;
        box-sizing: border-box;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        transition: all 0.3s ease;
        z-index: 10;

        .theme-icon {
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          color: #666;

          &.active {
            background-color: #fff;
            width: 1rem;
            height: 1rem;
            color: #333;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          svg {
            transition: all 0.3s ease;
          }
        }
      }
    }
  }

  .right-section {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    padding-left: 0rem;
    gap: 1rem;

    .tab-navigation {
      display: flex;
      flex-direction: row;
      gap: 1rem;

      .tab {
        width: 13.125rem;
        height: 2rem;
        padding: 0.5rem 2rem;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 0.875rem;
        font-weight: 600;
        font-family: $font-nunito;
        box-sizing: border-box;
        color: #7c7c7c;
        text-align: center;

        &:hover {
          color: #2b2b2b;
        }

        &.active-tab {
          background-color: #2b2b2b;
          color: #fff;
          border-radius: 6.25rem;
        }
      }
    }

    .product-cards {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      .product-card {
        display: flex;
        flex-direction: row;
        gap: 1.1875rem;

        &.clickable {
          cursor: pointer;
          transition: all 0.2s ease;
          padding: 0.5rem;
          border-radius: 0.5rem;

          // &:hover {
          //   background-color: #f8f9fa;
          //   transform: translateY(-2px);
          //   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          // }
        }

        &.selectable {
          cursor: pointer;
          transition: all 0.2s ease;
          padding: 0.5rem;
          border-radius: 0.5rem;

          // &:hover {
          //   background-color: #f8f9fa;
          // }

          .product-card-content {
            position: relative;
            width: 150px;
            height: 150px;

            .product-thumbnail {
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 0.5rem;
            }

            .selection-indicator {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 2rem; // 32px
              height: 2rem; // 32px
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 10;
              animation: tickFadeIn 0.3s ease;

              .tick-icon {
                width: 100%;
                height: 100%;
              }
            }

            @keyframes tickFadeIn {
              from {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.8);
              }
              to {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
              }
            }
          }
        }

        .product-thumbnail {
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 0.5rem;
        }

        .product-info {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;

          .sku-info {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 0.25rem;
            font-family: $font-nunito;

            .label {
              align-self: stretch;
              position: relative;
              font-size: 0.75rem;
              color: #666;
            }

            .product-name {
              align-self: stretch;
              position: relative;
              font-size: 1.25rem;
              letter-spacing: 0.05rem;
              font-weight: 400;
              color: #121212;
              opacity: 0.8;
            }
          }

          .brand-info {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;

            .label {
              color: #888;
              font-size: 0.875rem;
              font-family: $font-nunito;
            }

            .brand-name {
              color: #121212;
              font-size: 0.75rem;
              font-weight: 300;
              font-family: $font-nunito;
              letter-spacing: 0.125rem;
              text-transform: capitalize;
            }
          }
        }
      }
    }
  }
}
</style>
