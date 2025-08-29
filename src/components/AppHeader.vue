<template>
  <div class="image-1-parent">
    <img class="image-1-icon" alt="" src="../assets/image1.png" />

    <div
      class="colour-coats"
      :class="{ active: sliderStore.currentSlide === 0 }"
      @click="goToSlide(0)"
    >
      COLOUR COATS
    </div>
    <div
      class="colour-coats"
      :class="{ active: sliderStore.currentSlide === 1 }"
      @click="goToSlide(1)"
    >
      THE HOUSE OF W
    </div>
    <div
      class="colour-coats"
      :class="{ active: sliderStore.currentSlide === 2 }"
      @click="goToSlide(2)"
    >
      METALIA
    </div>
    <div
      class="colour-coats"
      :class="{ active: sliderStore.currentSlide === 3 }"
    >
      FIAMARC
    </div>

    <img
      class="item-button-search-applec"
      alt=""
      src="../assets/searchIcon.svg"
      @click="$emit('toggle-search')"
    />
  </div>
</template>

<script setup>
import { useSliderStore } from "../stores/userSliderStore.js";

const sliderStore = useSliderStore();
const { goToSlide } = sliderStore;
</script>

<style lang="scss" scoped>
.image-1-parent {
  background-color: var(--color-white);
  width: 1366px;
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
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-gray); /* hover turns gray */
    }

    &.active {
      color: var(--color-gray); /* active stays gray */
    }
  }

  .item-button-search-applec {
    width: 31px;
    height: 44px;
  }
}
</style>
