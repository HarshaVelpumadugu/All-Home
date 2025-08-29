<template>
  <div class="image-1-parent">
    <img class="image-1-icon" alt="" src="../assets/image1.png" />

    <div
      class="menu-item"
      :class="{ active: activeCategory === 'textures' }"
      @click="$emit('change-category', 'textures')"
    >
      TEXTURES
    </div>

    <div
      class="menu-item"
      :class="{ active: activeCategory === 'handles' }"
      @click="$emit('change-category', 'handles')"
    >
      HANDLES
    </div>

    <div
      class="menu-item"
      :class="{ active: activeCategory === 'kitchen' }"
      @click="$emit('change-category', 'kitchen')"
    >
      KITCHEN
    </div>

    <div
      class="menu-item"
      :class="{ active: activeCategory === 'facades' }"
      @click="$emit('change-category', 'facades')"
    >
      FACADES
    </div>

    <img
      class="item-button-search-applec"
      alt=""
      src="../assets/searchIcon.svg"
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  activeCategory: {
    type: String,
    default: "handles",
  },
});
</script>

<style lang="scss" scoped>
.image-1-parent {
  position: sticky;
  top: 0;
  left: 0;
  background-color: var(--color-white);
  z-index: 1000;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 81px;
  text-align: center;
  font-size: var(--font-size-14);
  color: var(--color-darkgray);
  font-family: var(--font-nunito);

  .image-1-icon {
    width: 67px;
    position: relative;
    max-height: 100%;
    object-fit: cover;
  }

  .menu-item {
    position: relative;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
      color: var(--color-gray);
    }

    &.active {
      color: var(--color-gray);
    }
  }

  .item-button-search-applec {
    width: 31px;
    position: relative;
    height: 44px;
  }
}
</style>
