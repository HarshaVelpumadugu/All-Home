import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => ({
    isImageUploadOpen: false,
  }),
  actions: {
    openImageUpload() {
      this.isImageUploadOpen = true;
    },
    closeImageUpload() {
      this.isImageUploadOpen = false;
    },
    toggleImageUpload() {
      this.isImageUploadOpen = !this.isImageUploadOpen;
    },
  },
});
