<template>
  <div class="image-1-parent">
    <img class="image-1-icon" alt="" src="../assets/image1.png" />

    <div class="colour-coats" @click="goToSlide(0)">COLOUR COATS</div>
    <div class="colour-coats" @click="goToSlide(1)">THE HOUSE OF W</div>
    <div class="colour-coats" @click="goToSlide(2)">METALIA</div>
    <div class="colour-coats">FIAMARC</div>

    <img
      class="item-button-search-applec"
      alt=""
      src="../assets/searchIcon.svg"
    />
  </div>
</template>

<script setup>
import { useSliderStore } from "../stores/userSliderStore.js";

const { goToSlide } = useSliderStore();
</script>

<style lang="scss" scoped>
.image-1-parent {
  position: fixed; /* ✅ keep it fixed at top */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
  background-color: var(--color-white); /* ensure it has background */
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
    max-height: 100%;
    object-fit: cover;
  }

  .colour-coats {
    font-weight: 500;
    cursor: pointer;
  }

  .item-button-search-applec {
    width: 31px;
    height: 44px;
  }
}
</style>
