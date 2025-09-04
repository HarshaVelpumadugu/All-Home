<template>
  <div class="dropdown-overlay">
    <div class="frame-parent">
      <div class="explore-products-parent">
        <div class="explore-products">Explore Products</div>
        <div class="frame-wrapper">
          <div class="faucets-parent">
            <div
              v-for="product in productList"
              :key="product"
              class="explore-products"
            >
              {{ product }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rectangle-div" @click="$emit('close')" />
  </div>
</template>

<script setup>
import { computed, defineProps, defineEmits } from "vue";

const props = defineProps({
  section: {
    type: String,
    required: true,
  },
});

defineEmits(["close"]);

const productList = computed(() => {
  switch (props.section) {
    case "COLOUR COATS":
      return ["Granuluxe", "Moromist", "Silk Texture", "G40", "Santorini"];
    case "THE HOUSE OF W":
      return ["ISVEA", "IDEVIT", "Olympia", "O+P Solutions", "Wellness"];
    case "METALIA":
      return ["Aluminium Profile", "Coin Matrix", "C-Channel"];
    default:
      return [];
  }
});
</script>

<style scoped>
.dropdown-overlay {
  position: fixed;
  top: 44px;
  left: 0;
  width: 100%;
  height: calc(100vh - 44px);
  z-index: 1000;
  display: flex;
  flex-direction: column;
}
.frame-parent {
  width: 100%;
  position: relative;
  background-color: #fafafc;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 24px 300px 48px;
  box-sizing: border-box;
  text-align: left;
  font-size: 14px;
  color: #121212;
  font-family: Nunito;
}
.explore-products-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
}
.explore-products {
  align-self: stretch;
  position: relative;
  font-weight: 500;
}
.frame-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  color: #9ca3af;
}
.faucets-parent {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
}
.wellness-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.wellness {
  position: relative;
  font-weight: 500;
}
.rectangle-div {
  flex: 1;
  backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
