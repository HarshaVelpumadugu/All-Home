<template>
  <div class="modal-overlay">
    <div class="image-upload-overlay">
      <div class="image-section">
        <div class="image-container">
          <img
            v-if="generatedImage"
            class="generated-image"
            alt="Generated room image"
            :src="generatedImage"
          />

          <div v-else>
            <div
              v-if="!isUploading && !uploadSuccess"
              class="image-upload-container"
            >
              <div class="upload-instructions-wrapper">
                <div class="upload-icon-container">
                  <img
                    class="upload-icon"
                    alt=""
                    src="../assets/vuesax/outline/export.svg"
                  />
                </div>
                <div class="upload-text-content">
                  <p class="upload-instruction-text">
                    <span class="upload-link-text">
                      <span class="upload-link-bold">Upload Image </span>
                    </span>
                    <span>or drag and drop</span>
                  </p>
                  <p class="upload-instruction-text">Maximum size 1GB</p>
                </div>
              </div>
              <div class="upload-button-container">
                <div class="upload-button" @click="triggerFileInput">
                  <img
                    class="upload-icon"
                    alt=""
                    src="../assets/vuesax/outline/gallery.svg"
                  />
                  <div class="button-text">Upload Image</div>
                </div>
                <!-- Hidden file input -->
                <input
                  type="file"
                  ref="fileInput"
                  class="hidden-input"
                  @change="handleFileChange"
                />
              </div>
            </div>

            <div v-if="isUploading" class="upload-field">
              <img
                class="loading-icon"
                alt=""
                src="../assets/Dot Loading.gif"
              />
              <div class="message-container">
                <div class="upload-message">Uploading...</div>
              </div>
            </div>

            <div v-if="uploadSuccess" class="upload-success">
              ✅ Image uploaded successfully!
            </div>
          </div>
        </div>
      </div>

      <img
        class="close-btn"
        alt=""
        src="../assets/X.svg"
        @click="handleClose"
      />

      <div class="room-selector-container">
        <div class="content-wrapper">
          <div class="section-header">
            Select the items you'd like to have in your room.
          </div>
          <div class="items-list">
            <div class="item-card">
              <img class="item-image" alt="" src="../assets/block-img-1.png" />
              <div class="item-details">
                <div class="sku-info">
                  <div class="section-header">SKU Code : U2123</div>
                  <div class="item-name">Fusion</div>
                </div>
                <div class="brand-info">
                  <div class="section-header">Brand Name</div>
                  <div class="brand-name">Firmac</div>
                </div>
              </div>
            </div>
            <div class="item-card">
              <img class="item-image" alt="" src="../assets/block-img-2.png" />
              <div class="item-details">
                <div class="sku-info">
                  <div class="section-header">SKU Code : U2123</div>
                  <div class="item-name">Fusion</div>
                </div>
                <div class="brand-info">
                  <div class="section-header">Brand Name</div>
                  <div class="brand-name">Firmac</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="generate-button-container"
          :class="{ disabled: isGenerating }"
          @click="generateImage"
        >
          <div class="generate-button-text">
            {{ isGenerating ? "Generating..." : "Generate Image" }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from "vue";

const emit = defineEmits(["close"]);

const isGenerating = ref(false);
const generatedImage = ref(null);

const isUploading = ref(false);
const uploadSuccess = ref(false);
const fileInput = ref(null);

const randomImages = [
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
];

const handleClose = () => {
  emit("close");
};

const triggerFileInput = () => {
  fileInput.value.click();
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  isUploading.value = true;
  uploadSuccess.value = false;

  setTimeout(() => {
    isUploading.value = false;
    uploadSuccess.value = true;
  }, 3000);
};

const generateImage = () => {
  if (isGenerating.value) return;

  isGenerating.value = true;

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * randomImages.length);
    generatedImage.value = randomImages[randomIndex];
    isGenerating.value = false;
  }, 3000);
};
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(0.3125rem); // 5px
  background-color: rgba(0, 0, 0, 0.3);

  .image-upload-overlay {
    display: flex;
    flex-direction: row;
    width: 72.375rem; // 1158px
    height: 33.875rem; // 542px
    margin: 3.5625rem auto; // 57px
    padding: 1rem; // 16px
    box-sizing: border-box;
    position: relative;

    .image-section {
      width: 45.375rem; // 726px
      height: 31.875rem; // 510px

      .image-container {
        background-color: #f9f9f9;
        width: 100%;
        height: 100%;
        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;

        .generated-image {
          position: absolute;
          width: calc(100% - 2rem); // 32px
          height: calc(100% - 2rem); // 32px
          margin: 1rem; // 16px
          object-fit: cover;
          border-radius: 0;
          opacity: 0.8;
          z-index: 2;
        }

        .image-upload-container {
          width: 32.1875rem; // 515px
          position: absolute;
          bottom: 10.3125rem; // 165px
          left: 6.5625rem; // 105px
          border-radius: none;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 0.8125rem; // 32px 13px
          box-sizing: border-box;
          gap: 1rem; // 16px
          text-align: center;
          font-size: 0.75rem; // 12px
          color: #6b7280;
          font-family: Nunito;
          z-index: 3;

          .upload-instructions-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            gap: 0.25rem; // 4px

            .upload-icon-container {
              width: 1.5rem; // 24px
              height: 1.5rem; // 24px
              position: relative;

              .upload-icon {
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

            .upload-text-content {
              position: relative;
              line-height: 1.25rem; // 20px

              .upload-instruction-text {
                margin: 0;

                .upload-link-text {
                  color: #516ce0;

                  .upload-link-bold {
                    font-weight: 600;
                    font-family: Nunito;
                  }

                  .upload-text-spacer {
                    font-family: Inter;
                  }
                }
              }
            }
          }

          .upload-button-container {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            font-size: 0.875rem; // 14px
            color: #fff;

            .upload-button {
              border-radius: 6.25rem; // 100px
              background-color: #516ce0;
              height: 2rem; // 32px
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: 0.75rem 1rem; // 12px 16px
              box-sizing: border-box;
              gap: 0.25rem; // 4px
              cursor: pointer;

              .button-icon-container {
                width: 1rem; // 16px
                height: 1rem; // 16px
                position: relative;

                .upload-icon {
                  position: absolute;
                  height: 100%;
                  width: 100%;
                }
              }

              .button-text {
                letter-spacing: -0.02em;
                line-height: 1rem; // 16px
                font-weight: 500;
              }
            }
            .hidden-input {
              display: none;
            }
          }
        }
        .upload-field {
          width: 100%;
          position: relative;
          border-radius: 0.375rem; // 6px
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 0.8125rem; // 32px 13px
          box-sizing: border-box;
          gap: 0.5rem; // 8px
          text-align: center;
          font-size: 0.75rem; // 12px
          color: #516ce0;
          font-family: Inter;

          .loading-icon {
            width: 3rem; // 48px
            position: relative;
            max-height: 100%;
            object-fit: cover;
          }

          .message-container {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;

            .upload-message {
              position: relative;
              line-height: 1.25rem; // 20px
            }
          }
        }
        .upload-success {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 5;
          text-align: center;
          font-weight: 600;
          color: rgb(6, 207, 6);
        }
      }
    }

    .close-btn {
      position: absolute;
      margin: 0 !important;
      top: 1.25rem; // 20px
      left: 70rem; // 1120px
      height: 1rem; // 16px
      z-index: 2000;
      cursor: pointer;
    }

    .room-selector-container {
      flex: 1;
      position: relative;
      backdrop-filter: blur(6.25rem); // 100px
      background-color: #fff;
      height: 31.875rem; // 510px
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 1rem; // 16px
      box-sizing: border-box;
      gap: 0rem; // 0px
      text-align: left;
      font-size: 1rem; // 16px
      color: #888;
      font-family: Nunito;

      .content-wrapper {
        align-self: stretch;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 1rem; // 16px

        .section-header {
          align-self: stretch;
          position: relative;
        }

        .items-list {
          align-self: stretch;
          height: 25.5rem; // 408px
          overflow: hidden;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 1.5rem; // 24px
          font-size: 0.75rem; // 12px

          .item-card {
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 1.1875rem; // 19px

            .item-image {
              width: 9.375rem; // 150px
              border-radius: 0.25rem; // 4px
              max-height: 100%;
              object-fit: cover;
            }

            .item-details {
              flex: 1;
              height: 9.375rem; // 150px
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: space-between;
              gap: 0;

              .sku-info {
                display: flex;
                flex-direction: column;
                gap: 0.25rem; // 4px

                .item-name {
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
                gap: 0.25rem; // 4px
                font-size: 0.875rem; // 14px

                .brand-name {
                  font-size: 0.75rem; // 12px
                  letter-spacing: 0.125rem; // 2px
                  font-weight: 300;
                  color: #121212;
                  opacity: 0.8;
                }
              }
            }
          }
        }
      }

      .generate-button-container {
        align-self: stretch;
        border-radius: 6.25rem; // 100px
        background-color: #2b2b2b;
        height: 3rem; // 48px
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.625rem 1rem; // 10px 16px
        box-sizing: border-box;
        color: #fff;
        cursor: pointer;
        transition: opacity 0.3s ease;

        &.disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .generate-button-text {
          font-weight: 600;
          opacity: 0.5;
        }
      }
    }
  }
}
</style>
