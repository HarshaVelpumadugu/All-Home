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
import { useRouter } from "vue-router";

const sliderStore = useSliderStore();
const { goToSlide } = sliderStore;

const uiStore = useUiStore();
const exploreStore = useExploreStore();
const router = useRouter();

function goHome() {
  uiStore.closeDropdown();
  uiStore.closeSearch();
  exploreStore.goBack();
  router.push("/");
}

function handleNavHover(index, section) {
  goToSlide(index); // still move slider
  uiStore.openDropdown(section); // show dropdown
}
</script>

<style lang="scss" scoped>
.image-1-parent {
  background-color: var(--color-white);
  width: 100%;
  max-width: 1366px;
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

  .search-normal-parent {
    display: none;
  }

  .colour-coats {
    display: block;
    font-weight: 500;
    font-size: 14px;
    font-family: var(--font-nunito);
    cursor: pointer;
    transition: color 0.3s ease;

    &.active {
      color: var(--color-gray);
    }

    &:hover {
      color: var(--color-gray);
    }
  }

  .item-button-search-applec {
    display: block;
    width: 15px;
    height: 44px;
  }
}

@media (max-width: 1024px) {
  .image-1-parent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;
    width: 100%;
    box-sizing: border-box;
    background-color: #fff;

    .image-1-icon {
      width: 91px;
      max-height: 100%;
      object-fit: contain;
    }

    /* Tablet icons */
    .search-normal-parent {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 24px;

      .search-normal {
        width: 24px;
        height: 24px;
        position: relative;

        .vuesaxoutlinesearch-normal-icon {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }
      }
      .menu {
        width: 32px;
        height: 32px;
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
