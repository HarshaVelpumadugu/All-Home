<template>
  <div class="image-1-parent">
    <!-- Logo -->
    <img
      class="image-1-icon"
      alt="Logo"
      src="../assets/image1.png"
      @click="goHome"
    />

    <!-- Tablet: Search + Menu -->
    <div class="search-normal-parent">
      <div class="search-normal">
        <img
          class="vuesaxoutlinesearch-normal-icon"
          alt="Search"
          src="../assets/vuesax/outline/search-normal.svg"
          @click="uiStore.toggleSearch"
        />
      </div>
      <div class="menu">
        <img
          class="vuesaxoutlinesearch-normal-icon"
          alt="Menu"
          src="../assets/vuesax/outline/menu.svg"
        />
      </div>
    </div>

    <!-- Desktop nav -->
    <div
      class="colour-coats"
      :class="{ active: sliderStore.currentSlide === 0 }"
      @mouseenter="handleNavHover(0, 'COLOUR COATS')"
    >
      COLOUR COATS
    </div>
    <div
      class="colour-coats"
      :class="{ active: sliderStore.currentSlide === 1 }"
      @mouseenter="handleNavHover(1, 'THE HOUSE OF W')"
    >
      THE HOUSE OF W
    </div>
    <div
      class="colour-coats"
      :class="{ active: sliderStore.currentSlide === 2 }"
      @mouseenter="handleNavHover(2, 'METALIA')"
    >
      METALIA
    </div>
    <div class="colour-coats">FIAMARC</div>

    <!-- Desktop search -->
    <img
      class="item-button-search-applec"
      alt="Search"
      src="../assets/searchIcon.svg"
      @click="uiStore.toggleSearch"
    />
  </div>
</template>

<script setup>
import { useSliderStore } from "../stores/userSliderStore.js";
import { useUiStore } from "../stores/useUiStore.js";
import { useExploreStore } from "../stores/useExploreStore.js";
import { useRouter, useRoute } from "vue-router";

const sliderStore = useSliderStore();
const { goToSlide } = sliderStore;

const uiStore = useUiStore();
const exploreStore = useExploreStore();
const router = useRouter();
const route = useRoute();

function goHome() {
  uiStore.closeDropdown();
  uiStore.closeSearch();
  exploreStore.goBack();
  router.push("/");
}

function handleNavHover(index, section) {
  goToSlide(index);
  uiStore.openDropdown(section);
  if (route.name === "home" && exploreStore.showProducts) {
    exploreStore.explore(section, index);
  }
}
</script>

<style lang="scss" scoped>
.image-1-parent {
  background-color: $color-white;
  width: 100%;
  max-width: 85.375rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5.0625rem;
  text-align: center;
  font-size: $font-size-14;
  color: $color-darkgray;
  font-family: $font-nunito;

  .image-1-icon {
    width: 4.1875rem;
    max-height: 100%;
    object-fit: cover;
  }

  .search-normal-parent {
    display: none;
  }

  .colour-coats {
    display: block;
    font-weight: 500;
    font-size: 0.875rem;
    font-family: $font-nunito;
    cursor: pointer;
    transition: color 0.3s ease;

    &.active {
      color: $color-gray;
    }

    &:hover {
      color: $color-gray;
    }
  }

  .item-button-search-applec {
    display: block;
    width: 0.9375rem;
    height: 2.75rem;
  }
}

@media (max-width: 1024px) {
  .image-1-parent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1.5rem;
    width: 100%;
    box-sizing: border-box;
    background-color: #fff;

    .image-1-icon {
      width: 5.6875rem;
      max-height: 100%;
      object-fit: contain;
    }

    /* Tablet icons */
    .search-normal-parent {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 1.5rem;

      .search-normal {
        width: 1.5rem;
        height: 1.5rem;
        position: relative;

        .vuesaxoutlinesearch-normal-icon {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }
      }
      .menu {
        width: 2rem;
        height: 2rem;
        position: relative;

        .vuesaxoutlinesearch-normal-icon {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }
      }
    }

    /* Desktop nav links and search */
    .colour-coats,
    .item-button-search-applec {
      display: none;
    }
  }
}
</style>
