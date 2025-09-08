<template>
  <div class="frame-parent">
    <div class="hous-1-parent">
      <img class="hous-1-icon" alt="" src="../assets/hous 1.png" />

      <div class="text-with-underline">
        <p class="premium">Premium</p>
        <p class="premium">Exterior Facades</p>
      </div>
      <div class="frame-child"></div>
    </div>

    <!-- Pass section back when clicked -->
    <div class="explore-proudtcs-wrapper" @click="explore">
      <div class="explore-proudtcs">Explore Products</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useExploreStore } from "../stores/useExploreStore";

const exploreStore = useExploreStore();
const props = defineProps({
  section: {
    type: String,
    required: true,
  },
  slideId: {
    type: Number,
    required: true,
  },
});
function explore() {
  exploreStore.explore(props.section, props.slideId);
}
</script>

<style lang="scss" scoped>
.frame-parent {
  width: 75%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  color: $color-white;
  font-size: 2.5rem;
  font-family: $font-nunito;

  .hous-1-parent {
    width: 20.0625rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;

    .hous-1-icon {
      width: 3.875rem;
      position: relative;
      max-height: 100%;
      object-fit: cover;
    }

    .text-with-underline {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .premium {
        margin: 0;
        line-height: 1.2;
      }
    }
    .frame-child {
      height: 0.125rem;
      width: 40%;
      background-color: $color-white;
      margin-top: 0.375rem;
    }
  }

  .explore-proudtcs-wrapper {
    position: relative;
    backdrop-filter: blur(0.625rem);
    border-radius: 6.25rem;
    background-color: $color-gray;
    width: 10.75rem;
    height: 2.625rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1.5rem;
    box-sizing: border-box;
    text-align: center;
    font-size: 1rem;
    cursor: pointer;
    color: $color-white;
    font-family: $font-nunito;

    .explore-proudtcs {
      position: relative;
      font-weight: 500;
    }
  }
}
/* 📱 Responsive styles */
@media (max-width: 768px) {
  .frame-parent {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0rem 2.5rem 0rem 0rem;
    box-sizing: border-box;
    gap: 2rem;
    text-align: left;
    font-size: 2.5rem;
    color: #fff;
    font-family: $font-nunito;

    .hous-1-parent {
      width: 20.0625rem;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 0.75rem;

      .hous-1-icon {
        width: 5.75rem;
        position: relative;
        max-height: 100%;
        object-fit: cover;
      }

      .text-with-underline {
        display: flex; // ✅ keep flex
        flex-direction: column; // ✅ force vertical stack
        align-items: flex-start;
        letter-spacing: 0.125rem;
        font-weight: 300;
        opacity: 0.8;
        font-family: $font-nunito;

        .premium {
          margin: 0;
          display: block;
          font-size: 2rem;
        }
      }

      .frame-child {
        height: 0.125rem;
        position: relative;
        background-color: #fff;
        width: 30%;
        opacity: 0.8;
      }
    }

    .explore-proudtcs-wrapper {
      backdrop-filter: blur(0.625rem);
      border-radius: 6.25rem;
      background-color: rgba(0, 0, 0, 0.6);
      height: 3rem;
      width: 13.6875rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 0.875rem 2rem;
      box-sizing: border-box;
      text-align: center;
      font-size: 1.25rem;

      .explore-proudtcs {
        position: relative;
        font-weight: 500;
      }
    }
  }
}
</style>
