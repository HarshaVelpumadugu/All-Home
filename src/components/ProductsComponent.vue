<template>
  <div class="frame-parent">
    <div class="fiamarc-exterior-handles-parent">
      <div class="fiamarc-exterior-handles">
        <p class="fiamarc">Fiamarc</p>
        <p class="fiamarc">Exterior Handles</p>
      </div>
      <div class="frame-child" />
    </div>

    <div class="image-4-parent">
      <div class="image-wrapper" v-for="(img, i) in images" :key="i">
        <img :src="img" class="image-4-icon" />
        <div class="frame-group">
          <div class="fusion-parent">
            <div class="fusion">Fusion</div>
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
// Your existing desktop styles (keep as-is)
.frame-parent {
  position: relative;
  top: 4.75rem;
  left: 0rem;
  width: 70rem;
  height: 43.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: $gap-40;
  text-align: left;
  font-size: 2.5rem;
  margin: 0 auto;
  color: $color-gray;
  font-family: $font-nunito;

  .fiamarc-exterior-handles-parent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.5rem;

    .fiamarc-exterior-handles {
      position: relative;
      font-size: 2.5rem;
      letter-spacing: 0.125rem;
      font-weight: 300;
      font-family: $font-nunito;
      color: $color-gray;
      text-align: left;

      .fiamarc {
        margin: 0;
      }
    }

    .frame-child {
      height: 0.125rem;
      width: 30%;
      position: relative;
      background-color: $color-gray;
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
    gap: $gap-40;
    font-size: 1rem;
    color: $color-white;
    font-family: $font-inter;

    .image-wrapper {
      position: relative;
      display: inline-block;

      .image-4-icon {
        width: 15.625rem;
        border-radius: 0.25rem;
        object-fit: cover;
        display: block;
      }

      .frame-group {
        width: 14.125rem;
        position: absolute;
        top: 12.375rem;
        left: 0.75rem;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        gap: 0rem;
        z-index: 4;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      &:hover .frame-group {
        opacity: 1;
      }
    }

    .fusion-parent {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 0.25rem;

      .fusion {
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .inr-24999 {
        font-size: 0.875rem;
        font-weight: 500;
      }
    }

    .arrow-right {
      width: 1.5rem;
      height: 1.5rem;
      position: relative;

      .vuesaxoutlinearrow-right-icon {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
}

@media (max-width: 1024px) {
  .frame-parent {
    position: relative;
    top: 2.375rem;
    left: 0px;
    width: 100%;
    box-sizing: border-box;
    height: auto;
    padding: 1.25rem;
    gap: 2.5rem;
    font-size: 2.5rem;
    color: #121212;
    font-family: $font-nunito;

    .fiamarc-exterior-handles-parent {
      padding-left: 1.5625rem;
      .fiamarc-exterior-handles {
        font-size: 2rem;
        letter-spacing: 0.125rem;
        font-weight: 300;
        opacity: 0.8;

        .fiamarc {
          margin: 0;
        }
      }

      .frame-child {
        height: 0.125rem;
        width: 30%;
        background-color: $color-gray;
        opacity: 0.8;
      }
    }

    .image-4-parent {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 1.125rem;
      padding-left: 1.5625rem;
      font-size: 1rem;
      color: #fff;
      font-family: $font-inter;

      .image-wrapper {
        .image-4-icon {
          width: 13.75rem;
          border-radius: 0.25rem;
          object-fit: cover;
        }

        .frame-group {
          width: 12.25rem;
          position: absolute;
          top: 11.8125rem;
          left: 0.75rem;
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          justify-content: space-between;
          z-index: 4;
          opacity: 1;
        }
      }

      .fusion-parent {
        .fusion {
          font-weight: 500;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .inr-24999 {
          // font-size: 14px;
          // font-weight: 500;
          display: none;
        }
      }

      .arrow-right {
        display: none;
        // width: 24px;
        // height: 24px;

        // .vuesaxoutlinearrow-right-icon {
        //   position: absolute;
        //   height: 100%;
        //   width: 100%;
        //   top: 0;
        //   left: 0;
        //   max-width: 100%;
        //   max-height: 100%;
        // }
      }
    }
  }
}
@media (max-width: 820px) {
  .frame-parent {
    .image-4-parent {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 1.875rem;
      font-size: 1rem;
      color: #fff;
      font-family: $font-inter;
    }
  }
}
@media (max-width: 768px) {
  .frame-parent {
    .fiamarc-exterior-handles-parent {
      padding-left: 0rem;
    }
    .image-4-parent {
      padding-left: 0rem;
    }
  }
}
</style>
