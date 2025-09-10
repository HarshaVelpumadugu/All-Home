<template>
  <div v-show="!viewStore.showDetail" class="product-gallery">
    <div class="main-content">
      <div class="gallery-section">
        <!-- Thumbnails -->
        <div class="thumbnail-list">
          <div
            v-for="(thumb, index) in thumbnails"
            :key="'thumb-' + index"
            class="thumbnail-item"
            @click="setMainImage(thumb)"
          >
            <img class="thumbnail-image" :src="thumb" alt="Thumbnail" />
            <div
              v-show="selectedThumbnail === thumb"
              class="selection-indicator"
            >
              <img
                class="check-icon"
                alt="selected"
                src="https://allhome.foyr.com/assets/tick-e2d504db.svg"
              />
            </div>
          </div>
        </div>

        <!-- Main Image -->
        <div class="main-image-container">
          <img class="main-image" :src="mainImage" alt="Main product image" />

          <!-- Action Buttons inside image -->
          <div class="image-overlay-buttons">
            <div class="view-3d-button" @click="viewStore.openImageUpload">
              <img
                class="button-icon"
                alt=""
                src="../assets/vuesax/outline/Group 1000016524.svg"
              />
              <div class="button-text">View in 3D</div>
            </div>
            <div class="restyle-button" @click="viewStore.openDetail">
              <div class="button-text">Restyle in Space</div>
            </div>
          </div>
        </div>

        <!-- Top-right floating button -->
        <div class="floating-3d-button">
          <img
            class="button-icon"
            alt=""
            src="../assets/vuesax/outline/Frame.svg"
          />
          <div class="button-text">3D</div>
        </div>
      </div>

      <!-- Product Information Panel -->
      <div class="product-info-panel">
        <div class="product-header">
          <div class="sku-code">SKU Code : U2123</div>
          <div class="product-title-section">
            <div class="title-wrapper">
              <div class="brand-tag">
                <div class="brand-name">Fusion</div>
              </div>
            </div>
            <div class="brand-subtitle">by Colour Codes</div>
          </div>
        </div>

        <div class="download-section">
          <img
            class="download-icon"
            alt=""
            src="../assets/vuesax/outline/import.svg"
          />
          <div class="download-text">Download File</div>
        </div>

        <!-- Product Details -->
        <div class="product-details">
          <div class="detail-section">
            <div class="section-header">
              <div class="section-title">Product Description</div>
            </div>
            <div class="section-content">
              Inspired by the muted elegance of desert horizons, Desert Mist
              Luxe Finish is crafted from hand-harvested mineral pigments
              sourced from Italy and Morocco. Each batch is precision-blended in
              small quantities, then applied in layered coats by master
              craftsmen using Japanese trowels. After a 72-hour air cure, the
              finish is sealed with an invisible protective layer, preserving
              its velvety texture and timeless tone for decades.
            </div>
          </div>

          <div class="detail-section">
            <div class="section-header">
              <div class="section-title">Dimensions</div>
            </div>
            <div class="dimensions-text">250X232X15ft</div>
          </div>
        </div>

        <!-- Similar Products -->
        <div class="similar-products-section">
          <div class="similar-products-title">Similar Products</div>
          <div class="similar-products-grid">
            <div
              v-for="(similar, index) in similarProducts"
              :key="'similar-' + index"
              class="similar-product-item"
              @click="setMainImage(similar)"
            >
              <img
                class="similar-product-image"
                :src="similar"
                alt="Similar product"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Video Section with Overlay -->
    <div class="video-section">
      <video
        class="background-video"
        :style="{ transform: `scale(${videoScale})` }"
        src="https://allhome.foyr.com/assets/house-of-w-slider-bg-video-21d207c3.mp4"
        autoplay
        loop
        muted
        playsinline
      ></video>

      <!-- Overlay Content -->
      <div
        v-if="showOverlay"
        class="video-overlay"
        :class="{ 'overlay-visible': overlayVisible }"
      >
        <!-- Left Content Slider -->
        <div class="overlay-left-panel">
          <div class="content-slider">
            <div
              v-for="(slide, index) in slides"
              :key="index"
              class="content-slide"
              :class="{ active: currentSlide === index }"
              :style="{
                transform: `translateX(${(index - currentSlide) * 100}%)`,
              }"
            >
              <h2 class="slide-title">{{ slide.title }}</h2>
              <p class="slide-description">{{ slide.description }}</p>
            </div>
          </div>
        </div>

        <!-- Right Image Slider -->
        <div class="overlay-right-panel">
          <div class="image-slider">
            <div
              v-for="(slide, index) in slides"
              :key="index"
              class="image-slide"
              :class="{ active: currentSlide === index }"
              :style="{
                transform: `translateX(${(index - currentSlide) * 100}%)`,
              }"
            >
              <img class="slide-image" :src="slide.image" :alt="slide.title" />
            </div>
          </div>

          <!-- Navigation Dots -->
          <div class="navigation-dots">
            <span
              v-for="(slide, index) in slides"
              :key="index"
              class="nav-dot"
              :class="{ active: currentSlide === index }"
              @click="currentSlide = index"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <product-detail v-show="viewStore.showDetail" />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useViewStore } from "../stores/useViewStore";
import ProductDetail from "./ProductDetail.vue";

const viewStore = useViewStore();

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

const videoScale = ref(0.2);
const showOverlay = ref(false);
const overlayVisible = ref(false);
const isAtBottom = ref(false);
let rafId = null;

// Touchpad detection variables
let lastWheelTime = 0;
let isTrackpadScrolling = false;

function checkIfAtBottom() {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;

  const wasAtBottom = isAtBottom.value;
  isAtBottom.value = scrollTop + clientHeight >= scrollHeight - 5;

  if (wasAtBottom !== isAtBottom.value) {
    console.log("🔄 Bottom status changed:", isAtBottom.value);
    console.log("📏 Scroll info:", {
      scrollHeight,
      scrollTop,
      clientHeight,
      diff: scrollHeight - (scrollTop + clientHeight),
    });
  }
}

function updateVideoScale() {
  const section = document.querySelector(".video-section");
  if (!section) return;
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  let visible = 0;
  if (rect.top < windowHeight && rect.bottom > 0) {
    const visibleHeight =
      Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top);
    visible = visibleHeight / rect.height;
  }

  const wasOverlayShown = showOverlay.value;
  videoScale.value = 0.5 + visible * 0.5;
  showOverlay.value = visible >= 0.99;

  if (wasOverlayShown !== showOverlay.value) {
    console.log(
      "🎥 Video overlay status changed:",
      showOverlay.value,
      "visible:",
      visible
    );
  }

  // Check if at bottom of page
  checkIfAtBottom();
}

function onScroll() {
  if (rafId !== null) return;
  rafId = requestAnimationFrame(() => {
    updateVideoScale();
    rafId = null;
  });
}

function handleWheel(e) {
  console.log("🖱️ Wheel event:", {
    deltaY: e.deltaY,
    deltaX: e.deltaX,
    ctrlKey: e.ctrlKey,
    type: e.type,
    target: e.target?.tagName,
  });

  const currentTime = Date.now();

  // More robust trackpad detection
  const isLikelyTrackpad =
    (Math.abs(e.deltaY) < 100 && // Smooth scrolling
      e.deltaY % 1 !== 0) || // Has decimal values
    Math.abs(e.deltaX) > 0; // Has horizontal component

  if (isLikelyTrackpad) {
    isTrackpadScrolling = true;
    console.log("✋ Trackpad detected");
  } else {
    console.log("🖱️ Mouse wheel detected");
  }

  // Check current scroll position (but don't interfere with normal scrolling)
  setTimeout(() => checkIfAtBottom(), 0);

  console.log("📊 Current state:", {
    isAtBottom: isAtBottom.value,
    isTrackpadScrolling: isTrackpadScrolling,
    showOverlay: showOverlay.value,
    overlayVisible: overlayVisible.value,
    deltaY: e.deltaY,
  });

  // Hide overlay if scrolling up (away from bottom) regardless of position
  if (e.deltaY < 0 && overlayVisible.value) {
    console.log("⬆️ Scrolling up - hiding overlay");
    overlayVisible.value = false;
    return;
  }

  // Show overlay if at bottom, using trackpad, and trying to scroll down more
  if (
    isAtBottom.value &&
    isTrackpadScrolling &&
    showOverlay.value &&
    e.deltaY > 0
  ) {
    console.log("⬇️ At bottom + trackpad + scrolling down - showing overlay");
    // Only prevent default when we're actually showing the overlay
    e.preventDefault();
    if (!overlayVisible.value) {
      overlayVisible.value = true;
      console.log("✅ Overlay now visible");

      // Debug overlay element
      setTimeout(() => {
        const overlayElement = document.querySelector(".video-overlay");
        if (overlayElement) {
          console.log("🎭 Overlay element found:", {
            display: window.getComputedStyle(overlayElement).display,
            opacity: window.getComputedStyle(overlayElement).opacity,
            transform: window.getComputedStyle(overlayElement).transform,
            zIndex: window.getComputedStyle(overlayElement).zIndex,
            visibility: window.getComputedStyle(overlayElement).visibility,
            hasVisibleClass:
              overlayElement.classList.contains("overlay-visible"),
          });
        } else {
          console.log("❌ Overlay element not found in DOM");
        }
      }, 100);
    }
  } else if (e.deltaY > 0) {
    console.log("❌ Conditions not met for showing overlay:", {
      isAtBottom: isAtBottom.value,
      isTrackpadScrolling: isTrackpadScrolling,
      showOverlay: showOverlay.value,
    });
  }

  // Reset trackpad detection after some time
  lastWheelTime = currentTime;
  setTimeout(() => {
    if (Date.now() - lastWheelTime >= 200) {
      if (isTrackpadScrolling) {
        console.log("⏰ Resetting trackpad detection");
      }
      isTrackpadScrolling = false;
    }
  }, 200);
}

function handleTouch(e) {
  console.log("👆 Touch event:", {
    type: e.type,
    touches: e.touches?.length || 0,
    target: e.target?.tagName,
  });

  // Handle direct touch events for better touchpad detection
  if (isAtBottom.value && showOverlay.value) {
    isTrackpadScrolling = true;
    console.log("👆 Touch trackpad detection activated");
  }
}

function handlePointer(e) {
  console.log("🖱️ Pointer event:", {
    type: e.type,
    pointerType: e.pointerType,
    target: e.target?.tagName,
  });

  // Additional detection for pointer events (touchpad fingers)
  if (e.pointerType === "touch" && isAtBottom.value && showOverlay.value) {
    // This can provide additional confirmation of finger input
    isTrackpadScrolling = true;
    console.log("🖱️ Pointer trackpad detection activated");
  }
}

onMounted(() => {
  console.log("🚀 Component mounted - setting up event listeners");
  window.addEventListener("scroll", onScroll);
  window.addEventListener("wheel", handleWheel, { passive: false });
  window.addEventListener("pointerdown", handlePointer);
  window.addEventListener("touchstart", handleTouch, { passive: false });
  window.addEventListener("touchmove", handleTouch, { passive: false });
  updateVideoScale();

  // Initial state logging
  setTimeout(() => {
    console.log("🔍 Initial state check:", {
      isAtBottom: isAtBottom.value,
      showOverlay: showOverlay.value,
      overlayVisible: overlayVisible.value,
      videoScale: videoScale.value,
    });
  }, 1000);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("wheel", handleWheel);
  window.removeEventListener("pointerdown", handlePointer);
  window.removeEventListener("touchstart", handleTouch);
  window.removeEventListener("touchmove", handleTouch);
  if (rafId) cancelAnimationFrame(rafId);
});

const slides = ref([
  {
    title: "Harmony",
    description:
      "Your bathroom is your personal space. At Waterways we define this space, a space which is connected to one's own senses and needs a place for inner contemplation, regeneration, and revitalization.",
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

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
}

function prevSlide() {
  currentSlide.value =
    (currentSlide.value - 1 + slides.value.length) % slides.value.length;
}

function handleKeyDown(e) {
  if (e.key === "ArrowRight") {
    nextSlide();
  } else if (e.key === "ArrowLeft") {
    prevSlide();
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeyDown);
});
</script>

<style lang="scss" scoped>
// Variables

// Base Component
.product-gallery {
  width: 100%;
  position: relative;
  border-radius: 0.5rem;
  height: 100%;
  text-align: left;
  font-size: 1rem;
  color: #9ca3af;
  font-family: $font-nunito;
  overflow: hidden;
  overflow-y: auto;
}

// Main Content Layout
.main-content {
  margin-top: 0rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.25rem;
  padding-left: 7.6875rem;
  gap: 2rem;
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.75);
  width: calc(100% - 2.5rem);
}

// Gallery Section
.gallery-section {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: 1.5rem;
}

// Thumbnails
.thumbnail-list {
  height: 25.6875rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: 1rem;
  z-index: 0;
}

.thumbnail-item {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.thumbnail-image {
  width: 5rem;
  position: relative;
  border-radius: 0.25rem;
  max-height: 100%;
  object-fit: cover;
  z-index: 1;
  aspect-ratio: 1/1;
}

.selection-indicator {
  width: 1.5rem;
  position: absolute;
  margin: 0 !important;
  top: 1.75rem;
  left: 1.75rem;
  height: 24px;
  opacity: 0.75;
  z-index: 2;

  .check-icon {
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

// Main Image
.main-image-container {
  position: relative;
  display: inline-block;

  .main-image {
    width: 41.3125rem;
    position: relative;
    border-radius: 0.25rem;
    max-height: 100%;
    object-fit: cover;
    z-index: 1;
  }
}

.image-overlay-buttons {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  z-index: 2;
}

.view-3d-button {
  width: 18.75rem;
  backdrop-filter: blur(0.625rem);
  border-radius: 6.25rem;
  background-color: rgba(0, 0, 0, 0.5);
  height: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 1rem;
  box-sizing: border-box;
  gap: 0.5rem;
  cursor: pointer;
}

.restyle-button {
  width: 18.75rem;
  border-radius: 6.25rem;
  background-color: #fff;
  height: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 1rem;
  box-sizing: border-box;
  color: #121212;
  cursor: pointer;
}

.floating-3d-button {
  margin: 0 !important;
  position: absolute;
  top: 1rem;
  left: 43.0625rem;
  backdrop-filter: blur(0.625rem);
  border-radius: 6.25rem;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  gap: 0.375rem;
  z-index: 2;
  cursor: pointer;

  .button-icon {
    width: 1rem;
    position: relative;
    max-height: 100%;
  }

  .button-text {
    position: relative;
    font-weight: 600;
  }
}

.button-text {
  position: relative;
  font-weight: 600;
}

// Product Information Panel
.product-info-panel {
  width: 25.375rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5rem;
  color: #888;
}

.product-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;

  .sku-code {
    align-self: stretch;
    position: relative;
  }
}

.product-title-section {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25rem;
  font-size: 2.5rem;
  color: #121212;

  .title-wrapper {
    width: 25.3125rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    .brand-tag {
      width: 11.9375rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      .brand-name {
        align-self: stretch;
        position: relative;
        letter-spacing: 0.125rem;
        font-weight: 300;
        opacity: 0.8;
      }
    }
  }

  .brand-subtitle {
    align-self: stretch;
    position: relative;
    font-size: 0.875rem;
    letter-spacing: 0.125rem;
    font-weight: 300;
    opacity: 0.8;
  }
}

.download-section {
  backdrop-filter: blur(0.625rem);
  border-radius: 6.25rem;
  background-color: #f0f0f0;
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 1rem;
  box-sizing: border-box;
  gap: 0.375rem;
  color: #404040;
  cursor: pointer;

  .download-icon {
    width: 1rem;
    position: relative;
    height: 1rem;
  }

  .download-text {
    position: relative;
    font-weight: 600;
  }
}

// Product Details
.product-details {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
}

.detail-section {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25rem;

  .section-header {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    .section-title {
      position: relative;
    }
  }

  .section-content {
    align-self: stretch;
    position: relative;
    font-size: 0.875rem;
    letter-spacing: 0.0625rem;
    color: #404040;
  }

  .dimensions-text {
    position: relative;
    font-size: 0.875rem;
    letter-spacing: 0.0625rem;
    color: $light-text;
  }
}

// Similar Products
.similar-products-section {
  width: 25.375rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;

  .similar-products-title {
    align-self: stretch;
    position: relative;
  }

  .similar-products-grid {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    gap: 0.75rem;
  }

  .similar-product-item {
    position: relative;
    display: inline-block;
    cursor: pointer;

    .similar-product-image {
      width: 5rem;
      position: relative;
      border-radius: 0.25rem;
      max-height: 100%;
      object-fit: cover;
      z-index: 0;
    }
  }
}

// Video Section
.video-section {
  position: relative;
  width: 100%;
  height: 98vh;
  padding: 2rem;
  box-sizing: border-box;
  overflow: hidden;

  .background-video {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    width: calc(100% - 4rem);
    height: calc(100% - 4rem);
    object-fit: cover;
    border-radius: none;
    transform-origin: bottom right;
    transform: scale(0.5);
    transition: transform 0.05s linear;
    z-index: 1;
  }
}

// Video Overlay
.video-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 1.875rem;
  box-sizing: border-box;
  z-index: 2;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  background-clip: content-box;
  color: #fff;
  opacity: 0;
  transform: translateY(3.125rem);
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  &.overlay-visible {
    opacity: 1;
    transform: translateY(0);

    .overlay-left-panel {
      transform: translateX(0);
    }

    .overlay-right-panel {
      transform: translateX(0);
    }

    .slide-title {
      opacity: 1;
      transform: translateY(0);
    }

    .slide-description {
      opacity: 1;
      transform: translateY(0);
    }

    .slide-image {
      opacity: 1;
      transform: scale(1);
    }

    .navigation-dots {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.overlay-left-panel {
  flex: 1;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0.9375rem;
  overflow: hidden;
  transform: translateX(-1.875rem);
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
}

.overlay-right-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  flex-shrink: 0;
  height: 100%;
  overflow: hidden;
  transform: translateX(1.875rem);
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
}

// Sliding containers
.content-slider,
.image-slider {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}

.content-slide,
.image-slide {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  top: 0;
  left: 0;
}

.image-slide {
  align-items: center;
  justify-content: flex-end;
}

.slide-title {
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
  letter-spacing: 0.125rem;
  font-family: $font-nunito;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s,
    transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
}

.slide-description {
  font-size: 1rem;
  line-height: 1.6;
  max-width: 90%;
  letter-spacing: 0.125rem;
  font-family: $font-nunito;
  color: #f5f5f5;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.6s,
    transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
}

.slide-image {
  width: 100%;
  height: auto;
  max-height: 95%;
  max-width: 100%;
  object-fit: contain;
  margin-bottom: 0.3125rem;
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s,
    transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
}

.navigation-dots {
  display: flex;
  gap: 0.5rem;
  z-index: 3;
  margin-bottom: 0.625rem;
  opacity: 0;
  transform: translateY(0.625rem);
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.8s,
    transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.8s;

  .nav-dot {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    transition: background 0.3s, transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }

    &.active {
      background: #fff;
    }
  }
}

// Responsive Styles
@media (max-width: 1180px) {
  .main-content {
    gap: 1.25rem;
    padding: 1rem;
    margin-left: 2.5rem;
    overflow-x: hidden;
    box-sizing: border-box;
  }

  .gallery-section {
    gap: 1rem;
  }

  .main-image {
    width: 31.25rem;
  }

  .floating-3d-button {
    left: 33.0625rem;
  }

  .product-info-panel {
    width: 21.875rem;
  }

  .title-wrapper {
    width: 21.875rem;
  }

  .similar-products-section {
    width: 21.875rem;
  }

  .product-title-section {
    font-size: 2.25rem;
  }

  .image-overlay-buttons {
    width: 95%;
    gap: 0.75rem;

    .view-3d-button,
    .restyle-button {
      width: 15rem;
      height: 2.75rem;
      font-size: 0.875rem;
    }
  }
}

@media (max-width: 1024px) {
  .main-content {
    margin-left: 0.3125rem;
  }
}

@media (max-width: 820px) {
  .product-gallery {
    height: auto;
    min-height: 50rem;
  }

  .main-content {
    flex-direction: column;
    position: relative;
    margin-left: 1.25rem;
    padding: 0.75rem;
    gap: 1.5rem;
    width: calc(100% - 1.5rem);
  }

  .gallery-section {
    gap: 2.5rem;
    width: 100%;
  }

  .thumbnail-list {
    flex-direction: column;
    height: auto;
    gap: 0.75rem;
    justify-content: center;
    order: 2;
  }

  .main-image-container {
    order: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-self: center;

    .main-image {
      width: 100%;
      max-width: 37.3125rem;
      height: auto;
    }
  }

  .floating-3d-button {
    position: absolute;
    top: 1rem;
    right: 10.625rem;
    left: auto;
  }

  .image-overlay-buttons {
    width: 90%;
    gap: 0.5rem;
    align-items: center;

    .view-3d-button,
    .restyle-button {
      width: 17.5rem;
      height: 2.5rem;
      font-size: 0.875rem;
    }
  }

  .product-info-panel {
    width: 100%;
    order: 3;

    .title-wrapper {
      width: 100%;
    }

    .similar-products-section {
      width: 100%;

      .similar-products-grid {
        justify-content: flex-start;
        overflow-x: auto;
        padding-bottom: 0.5rem;
      }
    }
  }

  .product-title-section {
    font-size: 2rem;
  }

  .thumbnail-item {
    flex-shrink: 0;

    .thumbnail-image {
      width: 4.375rem;
    }

    .selection-indicator {
      top: 1.4375rem;
      left: 1.4375rem;
      width: 1.25rem;
      height: 1.25rem;
    }
  }

  .video-overlay {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 6rem 3rem;

    .overlay-right-panel {
      order: 1;
      width: 100%;
      max-width: 100%;
      height: auto;
      margin-bottom: 1.5rem;
    }

    .overlay-left-panel {
      order: 2;
      width: 100%;
      max-width: 100%;
    }

    .slide-title {
      font-size: 2rem;
    }

    .slide-description {
      font-size: 0.95rem;
      max-width: 100%;
    }

    .slide-image {
      width: 80%;
      max-width: 80%;
      height: auto;
      max-height: none;
      margin: 0 auto 0.75rem;
    }

    .navigation-dots {
      justify-content: center;
    }
  }
}

@media (max-width: 768px) {
  .floating-3d-button {
    right: 9.375rem;
  }

  .video-overlay {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem;

    .overlay-left-panel {
      width: 100%;
      max-width: 100%;
      flex: none;
    }

    .overlay-right-panel {
      width: 90%;
      max-width: 90%;
      flex: none;
    }

    .slide-image {
      width: 80%;
      max-width: 80%;
      height: auto;
      max-height: 40vh;
      object-fit: contain;
    }

    .slide-title {
      font-size: 1.8rem;
      margin-bottom: 0.75rem;
    }

    .slide-description {
      font-size: 0.95rem;
      line-height: 1.5;
      max-width: 90%;
      margin: 0 auto;
    }

    .navigation-dots {
      margin-top: 0.75rem;
      justify-content: center;
    }
  }
}
</style>
