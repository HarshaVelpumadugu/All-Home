import { defineStore } from "pinia";
import { ref, computed } from "vue";

// Import preset images
import presetImg1Day from "../assets/preset-img-1-day.jpg";
import presetImg1Night from "../assets/preset-img-1-night.jpg";
import presetImg2Day from "../assets/preset-img-2-day.jpg";
import presetImg2Night from "../assets/preset-img-2-night.jpg";
import presetImg3Day from "../assets/preset-img-3-day.jpg";
import presetImg3Night from "../assets/preset-img-3-night.jpg";
import presetImg4Day from "../assets/preset-img-4-day.jpg";
import presetImg4Night from "../assets/preset-img-4-night.jpg";

export const useProductStore = defineStore("product", () => {
  // State for selected items
  const selectedItems = ref({
    pair1: "GLX-GR01",
    pair2: "0146",
  });

  // All products organized by category/brand
  const allProducts = ref({
    "THE HOUSE OF W": [
      {
        name: "Modern Mirror",
        img: "https://d1b2b4oevn2eyz.cloudfront.net/allhomes/House%20Of%20W/Sanitary-ISVEA/red%20vanity.png",
        sku: "HOW-001",
        brand: "The House of W",
      },
      {
        name: "Luxury Basin",
        img: "https://d1b2b4oevn2eyz.cloudfront.net/allhomes/House%20Of%20W/Sanitary-ISVEA/Blue%20Vanity.png",
        sku: "HOW-002",
        brand: "The House of W",
      },
      {
        name: "Wall Klozet",
        img: "https://d1b2b4oevn2eyz.cloudfront.net/allhomes/House%20Of%20W/thumbnail/RPTFBTLT_00182_THUMBNAIL.png",
        sku: "HOW-003",
        brand: "The House of W",
      },
      {
        name: "Asma Klozet",
        img: "https://d1b2b4oevn2eyz.cloudfront.net/allhomes/House%20Of%20W/thumbnail/RPTFBTLT_00184_THUMBNAIL.png",
        sku: "HOW-004",
        brand: "The House of W",
      },
    ],
    METALIA: [
      {
        name: "Aluminum Profile",
        img: "https://d1b2b4oevn2eyz.cloudfront.net/allhomes/Metalia/Aluminium%20Profile/ALPEXT%20img%201.png",
        sku: "MET-001",
        brand: "Metalia",
      },
      {
        name: "Coin Matrix",
        img: "https://d1b2b4oevn2eyz.cloudfront.net/allhomes/Metalia/Coin%20Matrix/COINEXT%20img%201.png",
        sku: "MET-002",
        brand: "Metalia",
      },
    ],
    "COLOUR COATS": [
      {
        name: "Desert Dune Grain",
        img: "https://d1b2b4oevn2eyz.cloudfront.net/allhomes/Colour%20Coats/Granuluxe/GLX-GR01-ls.png",
        sku: "GLX-GR01",
        brand: "Color Coats",
      },
      {
        name: "Urban Slate Grain",
        img: "https://d1b2b4oevn2eyz.cloudfront.net/allhomes/Colour%20Coats/Granuluxe/GLX-GR02-ls.png",
        sku: "GLX-GR02",
        brand: "Color Coats",
      },
    ],
  });

  // Product pairs configuration for swapping
  const productPairs = ref({
    pair1: {
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
    pair2: {
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
  });

  // Dynamic hotspots configuration
  const hotspots = ref([
    {
      id: 1,
      position: { top: "40%", left: "65%" },
      pairId: "pair2",
      label: "Wall Texture",
      description: "Click to change wall texture",
    },
    {
      id: 2,
      position: { top: "42%", left: "33%" },
      pairId: "pair1",
      label: "Floor Finish",
      description: "Click to change floor finish",
    },
  ]);

  // Preset images mapping based on product combinations
  const presetImages = ref({
    "0146_GLX-GR01": {
      day: presetImg1Day,
      night: presetImg1Night,
    },
    "0146_GLX-GR02": {
      day: presetImg2Day,
      night: presetImg2Night,
    },
    "01260_GLX-GR01": {
      day: presetImg3Day,
      night: presetImg3Night,
    },
    "01260_GLX-GR02": {
      day: presetImg4Day,
      night: presetImg4Night,
    },
  });

  // Computed properties
  const inRoomItems = computed(() => {
    const items = [];

    Object.keys(selectedItems.value).forEach((pairKey) => {
      const selectedSku = selectedItems.value[pairKey];
      if (selectedSku && productPairs.value[pairKey]?.products[selectedSku]) {
        items.push(productPairs.value[pairKey].products[selectedSku]);
      }
    });

    return items;
  });

  const getCurrentImageKey = computed(() => {
    const skus = inRoomItems.value.map((item) => item.sku).sort();
    return skus.join("_");
  });

  const currentDayImage = computed(() => {
    const imageKey = getCurrentImageKey.value;
    return presetImages.value[imageKey]?.day || presetImg1Day;
  });

  const currentNightImage = computed(() => {
    const imageKey = getCurrentImageKey.value;
    return presetImages.value[imageKey]?.night || presetImg1Night;
  });

  // Actions
  const selectProduct = (product) => {
    if (product && product.pairId) {
      selectedItems.value = {
        ...selectedItems.value,
        [product.pairId]: product.sku,
      };
    }
  };

  const getSwapItemsForHotspot = (hotspotId) => {
    const hotspot = hotspots.value.find((h) => h.id === hotspotId);
    if (hotspot && productPairs.value[hotspot.pairId]) {
      return Object.values(productPairs.value[hotspot.pairId].products);
    }
    return [];
  };

  const getSwapItemsForPair = (pairId) => {
    if (productPairs.value[pairId]) {
      return Object.values(productPairs.value[pairId].products);
    }
    return [];
  };

  const isProductSelected = (product) => {
    return selectedItems.value[product.pairId] === product.sku;
  };

  const getHotspotByPairId = (pairId) => {
    return hotspots.value.find((h) => h.pairId === pairId);
  };

  const getProductsByCategory = (category) => {
    return allProducts.value[category] || [];
  };

  const getAllCategories = () => {
    return Object.keys(allProducts.value);
  };

  // Add new product pair
  const addProductPair = (pairId, products) => {
    productPairs.value[pairId] = { products };
  };

  // Add new hotspot
  const addHotspot = (hotspot) => {
    const newId = Math.max(...hotspots.value.map((h) => h.id), 0) + 1;
    hotspots.value.push({
      id: newId,
      ...hotspot,
    });
    return newId;
  };

  // Update hotspot position
  const updateHotspotPosition = (hotspotId, position) => {
    const hotspot = hotspots.value.find((h) => h.id === hotspotId);
    if (hotspot) {
      hotspot.position = position;
    }
  };

  // Remove hotspot
  const removeHotspot = (hotspotId) => {
    const index = hotspots.value.findIndex((h) => h.id === hotspotId);
    if (index !== -1) {
      hotspots.value.splice(index, 1);
    }
  };

  return {
    // State
    selectedItems,
    allProducts,
    productPairs,
    hotspots,
    presetImages,

    // Computed
    inRoomItems,
    currentDayImage,
    currentNightImage,
    getCurrentImageKey,

    // Actions
    selectProduct,
    getSwapItemsForHotspot,
    getSwapItemsForPair,
    isProductSelected,
    getHotspotByPairId,
    getProductsByCategory,
    getAllCategories,
    addProductPair,
    addHotspot,
    updateHotspotPosition,
    removeHotspot,
  };
});
