// /src/stores/useExploreStore.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useExploreStore = defineStore("explore", () => {
  const activeSection = ref(null);
  const activeSlideId = ref(null);
  const showProducts = ref(false);

  function explore(section, slideId) {
    activeSection.value = section;
    activeSlideId.value = slideId;
    showProducts.value = true;
  }

  function goBack() {
    showProducts.value = false;
    activeSection.value = null;
    activeSlideId.value = null;
  }

  return {
    activeSection,
    activeSlideId,
    showProducts,
    explore,
    goBack,
  };
});
