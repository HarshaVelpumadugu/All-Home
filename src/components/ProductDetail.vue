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
        <!-- Day Image -->
        <img
          class="main-product-image day-image"
          :class="{ visible: isDayTheme }"
          alt="Day preset"
          src="../assets/preset-img-day.jpg"
        />
        <!-- Night Image -->
        <img
          class="main-product-image night-image"
          :class="{ visible: !isDayTheme }"
          alt="Night preset"
          src="../assets/preset-img-night.jpg"
        />

        <!-- Hotspot Icons -->
        <div
          class="hotspot-icon"
          @click="toggleHotspot(1)"
          style="top: 40%; left: 65%"
        >
          <div
            class="hotspot-inner"
            :class="{ active: activeHotspot === 1 }"
          ></div>
        </div>

        <div
          class="hotspot-icon"
          @click="toggleHotspot(2)"
          style="top: 42%; left: 33%"
        >
          <div
            class="hotspot-inner"
            :class="{ active: activeHotspot === 2 }"
          ></div>
        </div>

        <div class="view-room-button" @click="viewStore.openImageUpload">
          <img class="ar-icon" alt="" src="../assets/Group 1000016524.svg" />
          <div class="view-room-text">View in your Room</div>
        </div>

        <!-- Theme Toggle Container -->
        <div class="theme-toggle-container" @click="toggleTheme">
          <div class="theme-icon" :class="{ active: isDayTheme }">
            <!-- Sun Icon SVG -->
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
            <!-- Moon Icon SVG -->
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
        <!-- In Room Items - Selected items from each pair -->
        <template v-if="activeTab === 'in-room'">
          <div
            v-for="item in inRoomItems"
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

        <!-- Swap Items - Dynamic based on active hotspot -->
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
              <div class="selection-indicator" v-if="isSelected(item)">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="11"
                    fill="white"
                    stroke-width="2"
                  />
                  <path
                    d="M8 12.5L10.5 15L16 9.5"
                    stroke="rgba(0,0,0,0.3)"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
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
import { onUnmounted, ref, computed, reactive } from "vue";
import { useModalStore } from "../stores/useModalStore.js";
import { useViewStore } from "../stores/useViewStore.js";
import ImageUpload from "./ImageUpload.vue";

const modalStore = useModalStore();
const viewStore = useViewStore();
const isDayTheme = ref(true);
const activeHotspot = ref(null);
const activeTab = ref("in-room");

// Track selected items for each pair
const selectedItems = reactive({
  pair1: "GLX-GR01", // Default selected SKU for pair1
  pair2: "0146", // Default selected SKU for pair2
});

// Product data for different pairs
const productPairs = {
  pair2: {
    // Smooth products pair
    products: {
      "0146": {
        sku: "0146",
        name: "Warm Sand Stone",
        brand: "Color Coats",
        image:
          "https://d1b2b4oevn2eyz.cloudfront.net/allhomes/preset/thumbnail/GLX-GR01%20%20GLX-GR02/TXTLMK_0146_SLD.png",
        pairId: "pair2",
      },
      "01260": {
        sku: "01260",
        name: "Deep Sea Green",
        brand: "Color Coats",
        image:
          "https://d1b2b4oevn2eyz.cloudfront.net/allhomes/preset/thumbnail/GLX-GR01%20%20GLX-GR02/BM_BLUE_260_THUMBNAIL.png",
        pairId: "pair2",
      },
    },
  },
  pair1: {
    // Grain products pair
    products: {
      "GLX-GR01": {
        sku: "GLX-GR01",
        name: "Desert Dune Grain",
        brand: "Color Coats",
        image:
          "https://d1b2b4oevn2eyz.cloudfront.net/allhomes/Colour%20Coats/Granuluxe/GLX-GR01-ls.png",
        pairId: "pair1",
      },
      "GLX-GR02": {
        sku: "GLX-GR02",
        name: "Urban Slate Grain",
        brand: "Color Coats",
        image:
          "https://d1b2b4oevn2eyz.cloudfront.net/allhomes/Colour%20Coats/Granuluxe/GLX-GR02-ls.png",
        pairId: "pair1",
      },
    },
  },
};

// Hotspot to pair mapping
const hotspotToPair = {
  1: "pair2", // Hotspot 1 shows smooth products
  2: "pair1", // Hotspot 2 shows grain products
};

// Get active items for "In room Items" tab - only selected items
const inRoomItems = computed(() => {
  const items = [];

  // Add selected item from pair2
  if (selectedItems.pair2 && productPairs.pair2.products[selectedItems.pair2]) {
    items.push(productPairs.pair2.products[selectedItems.pair2]);
  }

  // Add selected item from pair1
  if (selectedItems.pair1 && productPairs.pair1.products[selectedItems.pair1]) {
    items.push(productPairs.pair1.products[selectedItems.pair1]);
  }

  return items;
});

// Computed property for swap items based on active hotspot
const swapItems = computed(() => {
  if (activeHotspot.value && hotspotToPair[activeHotspot.value]) {
    const pairId = hotspotToPair[activeHotspot.value];
    const pair = productPairs[pairId];
    return Object.values(pair.products);
  }
  // Default to showing pair1 products if no hotspot is active
  return Object.values(productPairs.pair1.products);
});

// Check if a product is selected
const isSelected = (product) => {
  return selectedItems[product.pairId] === product.sku;
};

// Select a product (only one per pair can be selected)
const selectProduct = (product) => {
  selectedItems[product.pairId] = product.sku;
  console.log(`Selected ${product.name} for ${product.pairId}`);
};

const toggleTheme = () => {
  isDayTheme.value = !isDayTheme.value;
  console.log("Theme toggled:", isDayTheme.value ? "Day" : "Night");
};

const toggleHotspot = (hotspotId) => {
  activeHotspot.value = activeHotspot.value === hotspotId ? null : hotspotId;

  // Switch to swap items tab when hotspot is clicked
  if (activeHotspot.value) {
    activeTab.value = "swap";
  }

  console.log("Hotspot toggled:", hotspotId);
};

const handleProductClick = (product) => {
  // Find which pair this product belongs to
  const pairId = product.pairId;

  // Map pair to corresponding hotspot
  const hotspotId = Object.keys(hotspotToPair).find(
    (key) => hotspotToPair[key] === pairId
  );

  if (hotspotId) {
    activeHotspot.value = parseInt(hotspotId);
    activeTab.value = "swap";
    console.log(
      `Product clicked: ${product.name}, switching to pair: ${pairId}`
    );
  }
};

const setActiveTab = (tab) => {
  activeTab.value = tab;

  // Clear hotspot selection when switching to in-room items
  if (tab === "in-room") {
    activeHotspot.value = null;
  }
};

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
        left: 20rem;
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

          &:hover {
            background-color: #f8f9fa;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }
        }

        &.selectable {
          cursor: pointer;
          transition: all 0.2s ease;
          padding: 0.5rem;
          border-radius: 0.5rem;

          &:hover {
            background-color: #f8f9fa;
          }

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
              width: 40px;
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              background: rgba(255, 255, 255, 0.95);
              border-radius: 50%;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
              animation: scaleIn 0.3s ease;

              svg {
                width: 100%;
                height: 100%;
              }
            }

            @keyframes scaleIn {
              0% {
                transform: translate(-50%, -50%) scale(0);
                opacity: 0;
              }
              50% {
                transform: translate(-50%, -50%) scale(1.1);
              }
              100% {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
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
            align-items: flex-start;
            justify-content: flex-start;
            gap: 0.25rem;
            font-size: 0.875rem;

            .label {
              align-self: stretch;
              position: relative;
              font-size: 0.75rem;
              color: #666;
            }

            .brand-name {
              align-self: stretch;
              position: relative;
              font-size: 0.875rem;
              letter-spacing: 0.05rem;
              font-weight: 300;
              color: #121212;
              font-family: $font-nunito;
              opacity: 0.8;
            }
          }
        }
      }
    }
  }
}
</style>
