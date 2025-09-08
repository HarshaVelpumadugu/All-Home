// /src/stores/useUiStore.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUiStore = defineStore("ui", () => {
  const showSearch = ref(false);
  const showDropdown = ref(false);
  const activeSection = ref(null);

  function toggleSearch() {
    showSearch.value = !showSearch.value;
  }

  function openDropdown(section) {
    activeSection.value = section;
    showDropdown.value = true;
  }

  function closeDropdown() {
    showDropdown.value = false;
    activeSection.value = null;
  }

  function closeSearch() {
    showSearch.value = false;
  }

  return {
    showSearch,
    showDropdown,
    activeSection,
    toggleSearch,
    openDropdown,
    closeDropdown,
    closeSearch,
  };
});
