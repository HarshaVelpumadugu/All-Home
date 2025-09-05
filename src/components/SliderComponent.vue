<template>
  <div class="slider-container">
    <div
      class="slider-wrapper"
      :style="{ transform: `translateX(-${sliderStore.currentSlide * 100}%)` }"
    >
      <div v-for="slide in slides" :key="slide.id" class="slide">
        <div class="slide-images">
          <!-- Left Image -->
          <div class="image-left">
            <img :src="slide.imageLeft" alt="Left" />
          </div>

          <!-- Right Image -->
          <div class="image-right">
            <img :src="slide.imageRight" alt="Right" />
          </div>
        </div>

        <div class="slide-overlay"></div>
        <div class="slide-content">
          <div class="content-wrapper">
            <!-- Pass section name to Description -->
            <DescriptionComponent
              :section="slide.section"
              @explore="handleExplore(slide.id)"
            />
            <ArrowRight class="arrow-btn" @click="nextSlide" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import { useSliderStore } from "../stores/userSliderStore.js";
import DescriptionComponent from "./DescriptionComponent.vue";
import ArrowRight from "./ArrowRight.vue";

const sliderStore = useSliderStore();
const emit = defineEmits(["explore"]);

const slides = ref([
  {
    id: 1,
    section: "COLOUR COATS",
    imageLeft: new URL("../assets/Rectangle 34626212.png", import.meta.url)
      .href,
    imageRight: new URL("../assets/Rectangle 34626213.png", import.meta.url)
      .href,
  },
  {
    id: 2,
    section: "THE HOUSE OF W",
    imageLeft: new URL("../assets/Rectangle 34626211.png", import.meta.url)
      .href,
    imageRight: new URL("../assets/Rectangle 34626214.png", import.meta.url)
      .href,
  },
  {
    id: 3,
    section: "METALIA",
    imageLeft: new URL("../assets/Rectangle 34626215.png", import.meta.url)
      .href,
    imageRight: new URL("../assets/Rectangle 34626210.png", import.meta.url)
      .href,
  },
]);

const nextSlide = () => {
  sliderStore.currentSlide =
    (sliderStore.currentSlide + 1) % slides.value.length;
};

// Relay section to parent
const handleExplore = (slideId) => {
  // Emit section name to App.vue
  // Example: "COLOUR COATS", "THE HOUSE OF W", "METALIA"
  const slide = slides.value.find((s) => s.id === slideId);
  if (slide) {
    emit("explore", { section: slide.section, slideId: slide.id });
  }
};
</script>

<style lang="scss" scoped>
.slider-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 44px);
  overflow: hidden;

  .slider-wrapper {
    display: flex;
    height: 100%;
    transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);

    .slide {
      position: relative;
      width: 100%;
      flex-shrink: 0;
      height: 100%;
      display: flex;
      flex-direction: column;

      .slide-images {
        display: flex;
        width: 100%;
        height: 100%;

        .image-left {
          flex: 3; /* 75% */
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .image-right {
          flex: 1; /* 25% */
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }

      .slide-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          135deg,
          rgba(0, 0, 0, 0.7) 0%,
          rgba(0, 0, 0, 0.3) 100%
        );
      }

      .slide-content {
        position: absolute;
        inset: 0;
        z-index: 10;
        display: flex;
        align-items: flex-end;
        padding: 60px;
        color: white;

        .content-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          width: 100%;
          position: relative;

          .arrow-btn {
            position: absolute;
            bottom: 0;
            right: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            cursor: pointer;

            svg {
              width: 24px;
              height: 24px;
              color: #333;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .slider-container {
    .slider-wrapper {
      .slide {
        .slide-content {
          padding: 40px;

          .arrow-btn {
            position: absolute;
            bottom: 0;
            right: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            cursor: pointer;

            svg {
              width: 24px;
              height: 24px;
              color: #333;
            }
          }
        }
      }
    }
  }
}
</style>
