/* eslint-disable vue/no-unused-vars */ /* eslint-disable no-unused-vars */
<template>
  <div class="slider-container">
    <div
      class="slider-wrapper"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div
        v-for="slide in slides"
        :key="slide.id"
        class="slide"
        :style="{ backgroundImage: `url(${slide.image})` }"
      >
        <div class="slide-overlay"></div>
        <div class="slide-content">
          <div class="content-wrapper">
            <description-component />
            <arrow-right class="arrow-btn" @click="nextSlide" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable no-unused-vars */
/* eslint-disable vue/no-unused-vars */
/* eslint-disable */
import { ref, onMounted, onBeforeUnmount } from "vue";
import DescriptionComponent from "./DescriptionComponent.vue";
import ArrowRight from "./ArrowRight.vue";

const currentSlide = ref(0);
const autoSlideInterval = ref(null);

const slides = ref([
  {
    id: 1,
    title: "Premium",
    subtitle: "Exterior Facades",
    description: "Explore Products",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop&auto=format",
  },
  {
    id: 2,
    title: "Modern",
    subtitle: "Interior Design",
    description: "Discover Collections",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop&auto=format",
  },
  {
    id: 3,
    title: "Luxury",
    subtitle: "Living Spaces",
    description: "View Gallery",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1200&h=800&fit=crop&auto=format",
  },
]);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
  resetAutoSlide();
};

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + slides.value.length) % slides.value.length;
  resetAutoSlide();
};

// const goToSlide = (index) => {
//   currentSlide.value = index;
//   resetAutoSlide();
// };

const startAutoSlide = () => {
  autoSlideInterval.value = setInterval(() => {
    nextSlide();
  }, 5000);
};

const stopAutoSlide = () => {
  if (autoSlideInterval.value) {
    clearInterval(autoSlideInterval.value);
  }
};

const resetAutoSlide = () => {
  stopAutoSlide();
  startAutoSlide();
};

onMounted(() => {
  startAutoSlide();
});

onBeforeUnmount(() => {
  stopAutoSlide();
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
  width: 100%;
}

.slider-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 44px);
  margin: 0;
  border-radius: 0;
  overflow: hidden;
}

.slider-wrapper {
  display: flex;
  height: 100%;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide {
  position: relative;
  width: 100%;
  flex-shrink: 0;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
  position: relative;
  z-index: 10;
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding: 60px;
  color: white;
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  position: relative;
}

.explore-btn {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 1.1rem;
  font-weight: 500;
  color: white;
  text-decoration: none;
  opacity: 0;
  transform: translateY(30px);
  animation: slideUp 0.8s ease forwards 0.6s;
  transition: all 0.3s ease;
}

.explore-btn:hover {
  gap: 20px;
  opacity: 0.8;
}

.arrow-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

/* .arrow-btn:hover {
  background: rgba(255, 255, 255, 1);
  transform: scale(1.1);
} */

.arrow-btn svg {
  width: 24px;
  height: 24px;
  color: #333;
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .slide-content {
    padding: 40px 30px;
  }

  .content-wrapper {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }

  .arrow-btn {
    position: static;
    align-self: flex-end;
  }
}
</style>
