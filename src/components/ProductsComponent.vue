<template>
  <div class="frame-parent">
    <div class="fiamarc-exterior-handles-parent">
      <div class="fiamarc-exterior-handles">
        <p class="fiamarc">Fiamarc</p>
        <p class="fiamarc">Facades</p>
      </div>
      <div class="frame-child" />
    </div>

    <div class="image-4-parent">
      <img
        v-for="(img, i) in images"
        :key="i"
        :src="img"
        class="image-4-icon"
      />
      <div class="frame-group" v-if="images.length">
        <div class="fusion-parent">
          <div class="fusion">{{ category }}</div>
          <div class="inr-24999">INR 24,999</div>
        </div>
        <div class="arrow-right">
          <img
            class="vuesaxoutlinearrow-right-icon"
            alt=""
            src="../assets/vuesax/outline/arrow-right.svg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { defineProps } from "vue";

// import images so Vite resolves them
import img4 from "../assets/image 4.png";
import img5 from "../assets/image 5.png";
import img6 from "../assets/image 6.png";
import img7 from "../assets/image 7.png";

const props = defineProps({
  category: {
    type: String,
    default: "handles",
  },
});

const imageSets = {
  textures: [img4, img5, img4, img5, img7, img6],
  handles: [img4, img5, img6, img7, img4],
  kitchen: [img4, img5, img6],
  facades: [img4, img5],
};

const images = computed(() => imageSets[props.category] || []);
</script>

<style lang="scss" scoped>
.frame-parent {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-40);
  text-align: left;
  font-size: 40px;
  color: var(--color-gray);
  font-family: var(--font-nunito);

  .fiamarc-exterior-handles-parent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;

    .fiamarc-exterior-handles {
      position: relative;
      letter-spacing: 2px;
      font-weight: 300;
      opacity: 0.8;

      .fiamarc {
        margin: 0;
      }
    }

    .frame-child {
      height: 2px;
      width: 40%;
      position: relative;
      background-color: var(--color-gray);
      opacity: 0.8;
    }
  }

  .image-4-parent {
    align-self: stretch;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    gap: var(--gap-40);
    font-size: 16px;
    color: var(--color-white);
    font-family: var(--font-inter);

    .image-4-icon,
    .image-5-icon,
    .image-6-icon,
    .image-7-icon {
      width: 250px;
      position: relative;
      border-radius: var(--br-4);
      max-height: 100%;
      object-fit: cover;
    }

    .image-4-icon {
      z-index: 0;
    }
    .image-5-icon {
      z-index: 1;
    }
    .image-6-icon {
      z-index: 2;
    }
    .image-7-icon {
      z-index: 3;
    }

    .frame-group {
      width: 226px;
      margin: 0 !important;
      position: absolute;
      top: 198px;
      left: 12px;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
      gap: 0px;
      z-index: 4;

      .fusion-parent {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 4px;

        .fusion {
          position: relative;
          font-weight: 500;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .inr-24999 {
          position: relative;
          font-size: 14px;
          font-weight: 500;
        }
      }

      .arrow-right {
        width: 24px;
        position: relative;
        height: 24px;

        .vuesaxoutlinearrow-right-icon {
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0%;
          right: 0%;
          bottom: 0%;
          left: 0%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        }
      }
    }
  }

  .image-4-group {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: var(--gap-40);

    .image-4-icon1 {
      width: 250px;
      position: relative;
      border-radius: var(--br-4);
      max-height: 100%;
      object-fit: cover;
    }
  }
}
</style>
