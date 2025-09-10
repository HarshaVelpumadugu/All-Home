<template>
  <div class="container">
    <div class="left-section">
      <div class="header-section">
        <div class="back-button-wrapper">
          <div class="back-button-container" @click="viewStore.closeDetail">
            <div class="back-arrow-icon">
              <img
                class="arrow-left-icon"
                alt=""
                src="../assets/vuesax/outline/arrow-left.svg"
              />
            </div>
            <div class="page-title">Product Detail</div>
          </div>
        </div>
      </div>

      <div class="image-container">
        <img
          class="main-product-image"
          alt=""
          src="../assets/preset-img-day.jpg"
        />
        <div class="view-room-button" @click="viewStore.openImageUpload">
          <img class="ar-icon" alt="" src="../assets/Group 1000016524.svg" />
          <div class="view-room-text">View in your Room</div>
        </div>

        <!-- Theme Toggle Container -->
        <div class="theme-toggle-container" @click="toggleTheme">
          <div class="theme-icon" :class="{ active: isDayTheme }">
            <!-- Sun Icon SVG -->
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="5"
                stroke="currentColor"
                stroke-width="2"
              />
              <line
                x1="12"
                y1="1"
                x2="12"
                y2="3"
                stroke="currentColor"
                stroke-width="2"
              />
              <line
                x1="12"
                y1="21"
                x2="12"
                y2="23"
                stroke="currentColor"
                stroke-width="2"
              />
              <line
                x1="4.22"
                y1="4.22"
                x2="5.64"
                y2="5.64"
                stroke="currentColor"
                stroke-width="2"
              />
              <line
                x1="18.36"
                y1="18.36"
                x2="19.78"
                y2="19.78"
                stroke="currentColor"
                stroke-width="2"
              />
              <line
                x1="1"
                y1="12"
                x2="3"
                y2="12"
                stroke="currentColor"
                stroke-width="2"
              />
              <line
                x1="21"
                y1="12"
                x2="23"
                y2="12"
                stroke="currentColor"
                stroke-width="2"
              />
              <line
                x1="4.22"
                y1="19.78"
                x2="5.64"
                y2="18.36"
                stroke="currentColor"
                stroke-width="2"
              />
              <line
                x1="18.36"
                y1="5.64"
                x2="19.78"
                y2="4.22"
                stroke="currentColor"
                stroke-width="2"
              />
            </svg>
          </div>
          <div class="theme-icon" :class="{ active: !isDayTheme }">
            <!-- Moon Icon SVG -->
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                stroke="currentColor"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="right-section">
      <div class="tab-navigation">
        <div class="active-tab">In room Items</div>
        <div class="inactive-tab">Swap Items</div>
      </div>

      <div class="product-cards">
        <div class="product-card">
          <img
            class="product-thumbnail"
            alt=""
            src="../assets/block-img-1.png"
          />
          <div class="product-info">
            <div class="sku-info">
              <div class="label">SKU Code : U2123</div>
              <div class="product-name">Fusion</div>
            </div>
            <div class="brand-info">
              <div class="label">Brand Name</div>
              <div class="brand-name">Firmac</div>
            </div>
          </div>
        </div>

        <div class="product-card">
          <img
            class="product-thumbnail"
            alt=""
            src="../assets/block-img-2.png"
          />
          <div class="product-info">
            <div class="sku-info">
              <div class="label">SKU Code : U2123</div>
              <div class="product-name">Fusion</div>
            </div>
            <div class="brand-info">
              <div class="label">Brand Name</div>
              <div class="brand-name">Firmac</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal (controlled by Pinia) -->
    <ImageUpload
      v-if="modalStore.isImageUploadOpen"
      @close="modalStore.closeImageUpload"
    />
  </div>
</template>

<script setup>
import { onUnmounted, ref } from "vue";
import { useModalStore } from "../stores/useModalStore.js";
import { useViewStore } from "../stores/useViewStore.js";
import ImageUpload from "./ImageUpload.vue";

const modalStore = useModalStore();
const viewStore = useViewStore();
const isDayTheme = ref(true);

const toggleTheme = () => {
  isDayTheme.value = !isDayTheme.value;
  // Add your theme switching logic here
  console.log("Theme toggled:", isDayTheme.value ? "Day" : "Night");
};

onUnmounted(() => {
  viewStore.closeDetail();
});
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 28.25rem;
  gap: 1.25rem; // 20px
  padding: 1.25rem; // 20px
  padding-right: 0rem;
  height: 88vh;

  .left-section {
    display: grid;
    grid-template-rows: max-content 1fr;
    gap: 1rem;
    overflow: hidden;
    .header-section {
      position: relative;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      padding: 0.5rem 1.5rem; // 8px 24px
      padding-left: 0;
      box-sizing: border-box;
      text-align: left;
      font-size: 0.875rem; // 14px
      color: #4b5563;
      font-family: $font-nunito;

      .back-button-wrapper {
        width: 8.75rem; // 140px
        border-radius: 0.5rem; // 8px
        height: 2rem; // 32px
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0.75rem 1rem 0.75rem 0;
        box-sizing: border-box;

        .back-button-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: 0.25rem; // 4px

          .back-arrow-icon {
            width: 1rem; // 16px
            height: 1rem; // 16px
            position: relative;

            .arrow-left-icon {
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            }
          }

          .page-title {
            position: relative;
            letter-spacing: -0.02em;
            line-height: 1rem; // 16px
            font-weight: 500;
          }
        }
      }
    }

    .image-container {
      position: relative;
      overflow: hidden;
      border-radius: 0.5rem;

      .main-product-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.5rem;
        transition: opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .view-room-button {
        position: absolute;
        bottom: 2rem; // 32px
        left: 20rem; // 320px
        border-radius: 6.25rem; // 100px
        cursor: pointer;
        background-color: #fff;
        border: 1px solid #516ce0;
        box-sizing: border-box;
        width: 14.0625rem; // 225px
        height: 3rem; // 48px
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0.625rem 2rem; // 10px 32px
        gap: 0.5rem; // 8px
        text-align: left;
        font-size: 1rem; // 16px
        font-family: $font-nunito;

        .ar-icon {
          width: 0.875rem; // 14px
          height: 0.875rem; // 14px
          position: relative;
        }

        .view-room-text {
          position: relative;
          font-weight: 600;
          background: linear-gradient(144.46deg, #516ce0, #aab9f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      // Theme Toggle Styles
      .theme-toggle-container {
        position: absolute;
        top: 1rem; // 16px
        right: 1rem; // 16px
        width: 2.5rem; // 40px
        height: 1.5rem; // 24px
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 0.75rem; // 12px (half of height for pill shape)
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 0.125rem; // 2px
        box-sizing: border-box;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        transition: all 0.3s ease;

        .theme-icon {
          width: 1.25rem; // 20px
          height: 1.25rem; // 20px
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          color: #666;

          &.active {
            background-color: #fff;
            color: #333;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          svg {
            transition: all 0.3s ease;
          }
        }
      }
    }
  }

  .right-section {
    display: flex;
    flex-direction: column;
    padding: 1rem; // 16px
    padding-left: 0rem;
    gap: 1rem; // 24px

    .tab-navigation {
      display: flex;
      flex-direction: row;
      gap: 1.5625rem; // 25px

      .active-tab {
        width: 13.125rem; // 210px
        height: 2rem; // 32px
        padding: 0.5rem 2rem; // 8px 32px
        background-color: #2b2b2b;
        font-size: 0.875rem; // 14px
        color: #fff;
        font-family: $font-nunito;
        box-sizing: border-box;
        border-radius: 6.25rem; // 100px
        text-align: center;
      }

      .inactive-tab {
        font-size: 0.875rem; // 14px
        font-weight: 600;
        font-family: $font-nunito;
        color: #7c7c7c;
      }
    }

    .product-cards {
      display: flex;
      flex-direction: column;
      gap: 1.5rem; // 24px

      .product-card {
        display: flex;
        flex-direction: row;
        gap: 1.1875rem; // 19px

        .product-thumbnail {
        }

        .product-info {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .sku-info {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 0.25rem; // 4px
            font-family: $font-nunito;

            .label {
              align-self: stretch;
              position: relative;
            }

            .product-name {
              align-self: stretch;
              position: relative;
              font-size: 1.75rem; // 28px
              letter-spacing: 0.125rem; // 2px
              font-weight: 300;
              color: #121212;
              opacity: 0.8;
            }
          }

          .brand-info {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 0.25rem; // 4px
            font-size: 0.875rem; // 14px

            .label {
              align-self: stretch;
              position: relative;
            }

            .brand-name {
              align-self: stretch;
              position: relative;
              font-size: 0.75rem; // 12px
              letter-spacing: 0.125rem; // 2px
              font-weight: 300;
              color: #121212;
              font-family: $font-nunito;
              opacity: 0.8;
            }
          }
        }
      }
    }
  }
}
</style>
