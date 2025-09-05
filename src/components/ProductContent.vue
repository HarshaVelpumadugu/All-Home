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
              <div class="fusion-wrapper"><div class="fusion">Fusion</div></div>
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
      <div
        v-if="showOverlay"
        class="overlay-content"
        :class="{ 'overlay-visible': overlayVisible }"
      >
        <!-- Sliding Container for Left Overlay -->
        <div class="overlay-left">
          <div class="slides-container">
            <div
              v-for="(slide, index) in slides"
              :key="index"
              class="slide-item"
              :class="{ active: currentSlide === index }"
              :style="{
                transform: `translateX(${(index - currentSlide) * 100}%)`,
              }"
            >
              <h2 class="overlay-title">{{ slide.title }}</h2>
              <p class="overlay-description">{{ slide.description }}</p>
            </div>
          </div>
        </div>

        <!-- Sliding Container for Right Overlay -->
        <div class="overlay-right">
          <div class="image-slides-container">
            <div
              v-for="(slide, index) in slides"
              :key="index"
              class="image-slide-item"
              :class="{ active: currentSlide === index }"
              :style="{
                transform: `translateX(${(index - currentSlide) * 100}%)`,
              }"
            >
              <img
                class="overlay-image"
                :src="slide.image"
                :alt="slide.title"
              />
            </div>
          </div>

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
// let wheelDeltaY = 0;
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
        const overlayElement = document.querySelector(".overlay-content");
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
  height: 98vh;
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
  border-radius: none;
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
  align-items: stretch;
  padding: 30px;
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
  transform: translateY(50px);
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.overlay-content.overlay-visible {
  opacity: 1;
  transform: translateY(0);
}

.overlay-left {
  flex: 1;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 15px;
  overflow: hidden;
  transform: translateX(-30px);
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
}

.overlay-visible .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  flex-shrink: 0;
  height: 100%;
  overflow: hidden;
  transform: translateX(30px);
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
}

.overlay-visible .overlay-right {
  transform: translateX(0);
}

/* Sliding containers */
.slides-container,
.image-slides-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}

.slide-item,
.image-slide-item {
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

.image-slide-item {
  align-items: center;
  justify-content: flex-end;
}

.overlay-title {
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 16px;
  letter-spacing: 0.125rem;
  font-family: var(--font-nunito);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s,
    transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
}

.overlay-visible .overlay-title {
  opacity: 1;
  transform: translateY(0);
}

.overlay-description {
  font-size: 1rem;
  line-height: 1.6;
  max-width: 90%;
  letter-spacing: 0.125rem;
  font-family: var(--font-nunito);
  color: #f5f5f5;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.6s,
    transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
}

.overlay-visible .overlay-description {
  opacity: 1;
  transform: translateY(0);
}

.overlay-image {
  width: 100%;
  height: auto;
  max-height: 95%;
  max-width: 100%;
  object-fit: contain;
  margin-bottom: 5px;
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s,
    transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
}

.overlay-visible .overlay-image {
  opacity: 1;
  transform: scale(1);
}

.nav-dots {
  display: flex;
  gap: 8px;
  z-index: 3;
  margin-bottom: 10px;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.8s,
    transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.8s;
}

.overlay-visible .nav-dots {
  opacity: 1;
  transform: translateY(0);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}

.dot:hover {
  transform: scale(1.1);
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
    margin-left: 20px;
    padding: 12px;
    gap: 24px;
    width: calc(100% - 24px);
  }
  .frame-group {
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
  .overlay-content {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 6rem 3rem;
  }
  .overlay-right {
    order: 1;
    width: 100%;
    max-width: 100%;
    height: auto;
    margin-bottom: 24px;
  }
  .overlay-left {
    order: 2;
    width: 100%;
    max-width: 100%;
  }
  .overlay-title {
    font-size: 2rem;
  }
  .overlay-description {
    font-size: 0.95rem;
    max-width: 100%;
  }
  .overlay-image {
    width: 80%;
    max-width: 80%;
    height: auto;
    max-height: none;
    margin: 0 auto 12px;
  }
  .nav-dots {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .frame-container {
    right: 150px;
  }
  .overlay-content {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 16px;
  }
  .overlay-left {
    width: 100%;
    max-width: 100%;
    flex: none;
  }
  .overlay-right {
    width: 90%;
    max-width: 90%;
    flex: none;
  }
  .overlay-image {
    width: 80%;
    max-width: 80%;
    height: auto;
    max-height: 40vh;
    object-fit: contain;
  }
  .overlay-title {
    font-size: 1.8rem;
    margin-bottom: 12px;
  }
  .overlay-description {
    font-size: 0.95rem;
    line-height: 1.5;
    max-width: 90%;
    margin: 0 auto;
  }
  .nav-dots {
    margin-top: 12px;
    justify-content: center;
  }
}
</style>
