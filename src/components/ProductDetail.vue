<template>
  <div class="container">
    <div class="left-section">
      <div class="header-section">
        <div class="back-button-wrapper">
          <div class="back-button-container">
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
          src="../assets/Rectangle 34626207.png"
        />
        <div class="view-room-button" @click="openModal">
          <img class="ar-icon" alt="" src="../assets/Group 1000016524.svg" />
          <div class="view-room-text">View in your Room</div>
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

    <!-- Modal -->
    <ImageUpload v-if="isModalOpen" @close="closeModal" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ImageUpload from "./ImageUpload.vue";

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  gap: 1.25rem; // 20px
  padding: 1.25rem; // 20px
  max-width: 85.375rem; // 1366px

  .left-section {
    display: flex;
    flex-direction: column;

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
      font-family: Nunito;

      .back-button-wrapper {
        width: 8.75rem; // 140px
        border-radius: 0.5rem; // 8px
        height: 2rem; // 32px
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0.75rem 1rem; // 12px 16px
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

      .main-product-image {
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
        font-family: Nunito;

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
    }
  }

  .right-section {
    display: flex;
    flex-direction: column;
    padding: 1rem; // 16px
    gap: 1.5rem; // 24px

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
        font-family: var(--font-nunito);
        box-sizing: border-box;
        border-radius: 6.25rem; // 100px
        text-align: center;
      }

      .inactive-tab {
        font-size: 0.875rem; // 14px
        font-weight: 600;
        font-family: Nunito;
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
            font-family: var(--font-nunito);

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
              font-family: var(--font-nunito);
              opacity: 0.8;
            }
          }
        }
      }
    }
  }
}
</style>
