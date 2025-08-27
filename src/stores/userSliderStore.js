// stores/useSliderStore.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useSliderStore = defineStore("slider", () => {
  const currentSlide = ref(0);

  const goToSlide = (index) => {
    currentSlide.value = index;
  };

  return {
    currentSlide,
    goToSlide,
  };
});
