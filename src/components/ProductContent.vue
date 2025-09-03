<template>
  <div class="projects-empty">
    <div class="frame-parent">
      <div class="frame-group">
        <!-- Thumbnails -->
        <div class="chandigarh-chair-product-shoot-parent">
          <div
            v-for="(thumb, index) in thumbnails"
            :key="'thumb-' + index"
            class="thumbnail-wrapper"
            @click="setMainImage(thumb)"
          >
            <img
              class="projects-empty-chandigarh-chair-product-shoot"
              :src="thumb"
              alt="Thumbnail"
            />
            <div v-show="selectedThumbnail === thumb" class="tick-circle">
              <img
                class="vuesaxboldtick-circle-icon"
                alt="selected"
                src="https://allhome.foyr.com/assets/tick-e2d504db.svg"
              />
            </div>
          </div>
        </div>

        <!-- Main Image -->
        <div class="image-wrapper">
          <img class="image-5-icon" :src="mainImage" alt="Main product image" />
          <!-- Buttons inside image -->
          <div class="image-buttons">
            <div class="group-parent">
              <img
                class="vuesaxoutlineimport-icon"
                alt=""
                src="../assets/vuesax/outline/Group 1000016524.svg"
              />
              <div class="d">View in 3D</div>
            </div>
            <div class="restyle-in-space-wrapper">
              <div class="d">Restyle in Space</div>
            </div>
          </div>
        </div>

        <!-- Top-right floating button -->
        <div class="frame-container">
          <img
            class="frame-icon"
            alt=""
            src="../assets/vuesax/outline/Frame.svg"
          />
          <div class="d">3D</div>
        </div>
      </div>

      <!-- Right Side Info -->
      <div class="frame-div">
        <div class="sku-code-u2123-parent">
          <div class="sku-code">SKU Code : U2123</div>
          <div class="projects-empty-frame-parent">
            <div class="frame-wrapper">
              <div class="fusion-wrapper">
                <div class="fusion">Fusion</div>
              </div>
            </div>
            <div class="by-colour-codes">by Colour Codes</div>
          </div>
        </div>
        <div class="vuesaxoutlineimport-parent">
          <img
            class="vuesaxoutlineimport-icon"
            alt=""
            src="../assets/vuesax/outline/import.svg"
          />
          <div class="d">Download File</div>
        </div>

        <!-- Product Info -->
        <div class="frame-parent2">
          <div class="frame-parent3">
            <div class="product-description-wrapper">
              <div class="product-description">Product Description</div>
            </div>
            <div class="inspired-by-the">
              Inspired by the muted elegance of desert horizons, Desert Mist
              Luxe Finish is crafted from hand-harvested mineral pigments
              sourced from Italy and Morocco. Each batch is precision-blended in
              small quantities, then applied in layered coats by master
              craftsmen using Japanese trowels. After a 72-hour air cure, the
              finish is sealed with an invisible protective layer, preserving
              its velvety texture and timeless tone for decades.
            </div>
          </div>
          <div class="frame-parent3">
            <div class="product-description-wrapper">
              <div class="product-description">Dimensions</div>
            </div>
            <div class="x232x15ft">250X232X15ft</div>
          </div>
        </div>

        <!-- Similar Products -->
        <div class="similar-products-parent">
          <div class="sku-code">Similar Products</div>
          <div class="chandigarh-chair-product-shoot-group">
            <div
              v-for="(similar, index) in similarProducts"
              :key="'similar-' + index"
              class="thumbnail-wrapper"
              @click="setMainImage(similar)"
            >
              <img
                class="chandigarh-chair-product-shoot"
                :src="similar"
                alt="Similar product"
              />
              <!-- No tick circle for similar products -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="video-section">
      <video
        class="product-video"
        :style="{ transform: `scale(${videoScale})` }"
        src="https://allhome.foyr.com/assets/house-of-w-slider-bg-video-21d207c3.mp4"
        autoplay
        loop
        muted
        playsinline
      ></video>
      <!-- Overlay Section -->
      <div class="overlay-content">
        <!-- Left Overlay -->
        <div class="overlay-left">
          <h2 class="overlay-title">{{ slides[currentSlide].title }}</h2>
          <p class="overlay-description">
            {{ slides[currentSlide].description }}
          </p>
        </div>

        <!-- Right Overlay -->
        <div class="overlay-right">
          <img
            class="overlay-image"
            :src="slides[currentSlide].image"
            :alt="slides[currentSlide].title"
          />

          <!-- Navigation Dots -->
          <div class="nav-dots">
            <span
              v-for="(slide, index) in slides"
              :key="index"
              class="dot"
              :class="{ active: currentSlide === index }"
              @click="currentSlide = index"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

/* ------------------------------
   Thumbnails & Main Image
------------------------------ */
const mainImage = ref(
  "https://d1b2b4oevn2eyz.cloudfront.net/allhomes/House%20Of%20W/Sanitary-ISVEA/Blue%20Vanity%20img%202.png"
);
const selectedThumbnail = ref(
  "https://d1b2b4oevn2eyz.cloudfront.net/allhomes/House%20Of%20W/Sanitary-ISVEA/Blue%20Vanity%20img%202.png"
);
const thumbnails = ref([
  "https://d1b2b4oevn2eyz.cloudfront.net/allhomes/House%20Of%20W/thumbnail/RPTBRVNU_00266_THUMBNAIL.png",
  "https://d1b2b4oevn2eyz.cloudfront.net/allhomes/House%20Of%20W/Sanitary-ISVEA/Blue%20Vanity%20img%202.png",
]);
const similarProducts = ref([
  "https://d1b2b4oevn2eyz.cloudfront.net/allhomes/House%20Of%20W/Sanitary-ISVEA/red%20vanity.png",
]);

function setMainImage(img) {
  mainImage.value = img;
  if (thumbnails.value.includes(img)) {
    selectedThumbnail.value = img;
  } else {
    selectedThumbnail.value = null;
  }
}

/* ------------------------------
   Video Scale on Scroll
------------------------------ */
const videoScale = ref(0.2);
let rafId = null;

function updateVideoScale() {
  const section = document.querySelector(".video-section");
  if (!section) return;

  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  let visible = 0;
  if (rect.top < windowHeight && rect.bottom > 0) {
    const visibleHeight =
      Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top);
    visible = visibleHeight / rect.height; // 0 → 1
  }

  // Interpolate between 0.5 (50%) and 1.0 (100%)
  videoScale.value = 0.5 + visible * 0.5;
}

function onScroll() {
  if (rafId !== null) return;
  rafId = requestAnimationFrame(() => {
    updateVideoScale();
    rafId = null;
  });
}

onMounted(() => {
  window.addEventListener("scroll", onScroll);
  updateVideoScale();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  if (rafId) cancelAnimationFrame(rafId);
});

/* ------------------------------
   Overlay Slides
------------------------------ */
const slides = ref([
  {
    title: "Harmony",
    description:
      "Your bathroom is your personal space. At Waterways we define this space, a space which is connected to one’s own senses and needs a place for inner contemplation, regeneration, and revitalization.",
    image: "https://allhome.foyr.com/assets/how-slider-1-d52f6aea.png",
  },
  {
    title: "Serenity",
    description:
      "Step into indulgence, we redefine bathrooms into luxurious escapes, where every detail whispers comfort, elegance, and timeless sophistication.",
    image: "https://allhome.foyr.com/assets/how-slider-2-8a61f89b.png",
  },
  {
    title: "Essence",
    description:
      "Your bathroom should breathe life, we design spaces inspired by nature, bringing harmony, freshness, and the calm of the outdoors into your home.",
    image: "https://allhome.foyr.com/assets/how-slider-3-3bd3662f.png",
  },
]);

const currentSlide = ref(0);
</script>

<style scoped>
.projects-empty {
  width: 100%;
  position: relative;
  border-radius: 8px;
  height: 100%;
  text-align: left;
  font-size: 16px;
  color: #9ca3af;
  font-family: Nunito;
  overflow: hidden;
  overflow-y: auto;
}

.frame-parent {
  margin-top: 76px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  padding-left: 123px;
  gap: 32px;
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.75);
  width: calc(100% - 40px);
}

.frame-group {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: 24px;
}

.chandigarh-chair-product-shoot-parent {
  height: 411px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: 16px;
  z-index: 0;
}

.chandigarh-chair-product-shoot {
  width: 80px;
  position: relative;
  border-radius: 4px;
  max-height: 100%;
  object-fit: cover;
  z-index: 0;
}

.projects-empty-chandigarh-chair-product-shoot {
  width: 80px;
  position: relative;
  border-radius: 4px;
  max-height: 100%;
  object-fit: cover;
  z-index: 1;
}

.thumbnail-wrapper {
  position: relative;
  display: inline-block;
}

.tick-circle {
  width: 24px;
  position: absolute;
  margin: 0 !important;
  top: 28px;
  left: 28px;
  height: 24px;
  opacity: 0.75;
  z-index: 2;
}

.vuesaxboldtick-circle-icon {
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

.image-wrapper {
  position: relative;
  display: inline-block;
}

.image-5-icon {
  width: 661px;
  position: relative;
  border-radius: 4px;
  max-height: 100%;
  object-fit: cover;
  z-index: 1;
}

.image-buttons {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  z-index: 2;
}

.group-parent {
  width: 300px;
  backdrop-filter: blur(10px);
  border-radius: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  box-sizing: border-box;
  gap: 8px;
}

.restyle-in-space-wrapper {
  width: 300px;
  border-radius: 100px;
  background-color: #fff;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  box-sizing: border-box;
  color: #121212;
}

.frame-container {
  margin: 0 !important;
  position: absolute;
  top: 16px;
  left: 689px;
  backdrop-filter: blur(10px);
  border-radius: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  gap: 6px;
  z-index: 2;
}

.frame-icon {
  width: 16px;
  position: relative;
  max-height: 100%;
}

.d {
  position: relative;
  font-weight: 600;
}

.frame-div {
  width: 406px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
  color: #888;
}

.sku-code-u2123-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
}

.sku-code {
  align-self: stretch;
  position: relative;
}

.projects-empty-frame-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
  font-size: 40px;
  color: #121212;
}

.frame-wrapper {
  width: 405px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.fusion-wrapper {
  width: 191px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.fusion {
  align-self: stretch;
  position: relative;
  letter-spacing: 2px;
  font-weight: 300;
  opacity: 0.8;
}

.by-colour-codes {
  align-self: stretch;
  position: relative;
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 300;
  opacity: 0.8;
}

.vuesaxoutlineimport-parent {
  backdrop-filter: blur(10px);
  border-radius: 100px;
  background-color: #f0f0f0;
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4px 16px;
  box-sizing: border-box;
  gap: 6px;
  color: #404040;
}

.vuesaxoutlineimport-icon {
  width: 16px;
  position: relative;
  height: 16px;
}

.frame-parent2 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
}

.frame-parent3 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
}

.product-description-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.product-description {
  position: relative;
}

.inspired-by-the {
  align-self: stretch;
  position: relative;
  font-size: 14px;
  letter-spacing: 1px;
  color: #404040;
}

.x232x15ft {
  position: relative;
  font-size: 14px;
  letter-spacing: 1px;
  color: #404040;
}

.similar-products-parent {
  width: 406px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
}

.chandigarh-chair-product-shoot-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  gap: 12px;
}

.projects-empty-tick-circle {
  width: 24px;
  position: absolute;
  margin: 0 !important;
  top: 28px;
  left: 28px;
  height: 24px;
  opacity: 0.75;
  z-index: 2;
}

.video-section {
  position: relative;
  width: 100%;
  height: 80vh;
  padding: 32px;
  box-sizing: border-box;
  overflow: hidden;
}

.product-video {
  position: absolute;
  bottom: 32px;
  right: 32px;
  width: calc(100% - 64px);
  height: calc(100% - 64px);
  object-fit: cover;
  border-radius: 12px;
  transform-origin: bottom right;
  transform: scale(0.5);
  transition: transform 0.05s linear;
  z-index: 1;
}

/* Overlay */
.overlay-content {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 48px;
  z-index: 2;
  color: #fff;
}

.overlay-left {
  flex: 1;
  max-width: 50%;
}

.overlay-title {
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 16px;
  letter-spacing: 0.125rem;
  font-family: var(--font-nunito);
}

.overlay-description {
  font-size: 1rem;
  line-height: 1.6;
  max-width: 90%;
  letter-spacing: 0.125rem;
  font-family: var(--font-nunito);
  color: #f5f5f5;
}

.overlay-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.overlay-image {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.nav-dots {
  display: flex;
  gap: 8px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background 0.3s;
}

.dot.active {
  background: #fff;
}

/* Responsive Styles */

/* 1180px Breakpoint */
@media (max-width: 1180px) {
  .frame-parent {
    gap: 20px;
    padding: 16px;
    margin-left: 40px;
    overflow-x: hidden;
    box-sizing: border-box;
  }

  .frame-group {
    gap: 16px;
  }

  .image-5-icon {
    width: 500px;
  }

  .frame-container {
    left: 529px;
  }

  .frame-div {
    width: 350px;
  }

  .frame-wrapper {
    width: 350px;
  }

  .similar-products-parent {
    width: 350px;
  }

  .projects-empty-frame-parent {
    font-size: 36px;
  }

  .image-buttons {
    width: 95%;
    gap: 12px;
  }

  .group-parent,
  .restyle-in-space-wrapper {
    width: 240px;
    height: 44px;
    font-size: 14px;
  }
}
@media (max-width: 1024px) {
  .frame-parent {
    margin-left: 5px;
  }
}

/* 820px Breakpoint */
@media (max-width: 820px) {
  .projects-empty {
    height: auto;
    min-height: 800px;
  }

  .frame-parent {
    flex-direction: column;
    position: relative;
    /* top: 20px; */
    margin-left: 20px;
    padding: 12px;
    gap: 24px;
    width: calc(100% - 24px);
  }

  .frame-group {
    /* flex-direction: row-reverse; */
    gap: 40px;
    width: 100%;
  }

  .chandigarh-chair-product-shoot-parent {
    flex-direction: column;
    height: auto;
    gap: 12px;
    justify-content: center;
    order: 2;
  }

  .image-wrapper {
    order: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-self: center;
  }

  .image-wrapper {
    width: fit-content;
    max-width: 100%;
  }

  .image-5-icon {
    width: 100%;
    max-width: 597px;
    height: auto;
  }

  .image-wrapper {
    position: relative;
  }

  .frame-container {
    position: absolute;
    top: 16px;
    right: 170px;
    left: auto;
  }

  .image-buttons {
    /* flex-direction: column; */
    width: 90%;
    gap: 8px;
    align-items: center;
  }

  .group-parent,
  .restyle-in-space-wrapper {
    width: 280px;
    height: 40px;
    font-size: 14px;
  }

  .frame-div {
    width: 100%;
    order: 3;
  }

  .frame-wrapper {
    width: 100%;
  }

  .similar-products-parent {
    width: 100%;
  }

  .projects-empty-frame-parent {
    font-size: 32px;
  }

  .chandigarh-chair-product-shoot-parent .thumbnail-wrapper {
    flex-shrink: 0;
  }

  .projects-empty-chandigarh-chair-product-shoot,
  .chandigarh-chair-product-shoot {
    width: 70px;
  }

  .tick-circle {
    top: 23px;
    left: 23px;
    width: 20px;
    height: 20px;
  }

  .chandigarh-chair-product-shoot-group {
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: 8px;
  }
}
</style>
