import { defineStore } from "pinia";
import { ref } from "vue";

export const useViewStore = defineStore("view", () => {
  const showDetail = ref(false);
  const showImageUpload = ref(false);

  function openDetail() {
    showDetail.value = true;
  }

  function closeDetail() {
    showDetail.value = false;
  }

  function openImageUpload() {
    showImageUpload.value = true;
  }

  function closeImageUpload() {
    showImageUpload.value = false;
  }

  return {
    showDetail,
    showImageUpload,
    openDetail,
    closeDetail,
    openImageUpload,
    closeImageUpload,
  };
});
