<template>
  <div class="search-overlay">
    <div class="frame-parent">
      <div class="search-normal-parent">
        <div class="search-normal">
          <img
            class="vuesaxoutlinesearch-normal-icon"
            alt=""
            src="../assets/vuesax/outline/search-normal.svg"
          />
        </div>
        <div class="search-the-product-container">
          <span>|</span>
          <span class="search-the-product">Search the product</span>
        </div>
      </div>
      <div class="quick-searches-parent">
        <div class="quick-searches">Quick Searches</div>
        <div class="sliding-system-parent">
          <div class="quick-searches">Sliding System</div>
          <div class="quick-searches">Glass Handles</div>
          <div class="quick-searches">Functional Fittings</div>
          <div class="quick-searches">Aluminium Profiles</div>
          <div class="quick-searches">G40 Wall Textures</div>
        </div>
      </div>
    </div>

    <div class="rectangle-div" @click="$emit('close')" />
  </div>
</template>

<style scoped>
.search-overlay {
  position: fixed;
  top: 44px;
  left: 0;
  width: 100%;
  height: calc(100vh - 44px);
  z-index: 1000;
  display: flex;
  flex-direction: column;
}

.rectangle-div {
  width: 100%;
  position: relative;
  backdrop-filter: blur(25px);
  background-color: rgba(255, 255, 255, 0.3);
  height: 656px;
}

/* keep your existing styles */
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
  gap: 48px;
  text-align: left;
  font-size: 20px;
  color: #121212;
  font-family: Nunito;
}
.search-normal-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
}
.search-normal {
  width: 20px;
  position: relative;
  height: 20px;
}
.vuesaxoutlinesearch-normal-icon {
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
.search-the-product-container {
  position: relative;
}
.search-the-product {
  color: #d0d0d0;
}
.quick-searches-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  font-size: 14px;
}
.quick-searches {
  align-self: stretch;
  position: relative;
  font-weight: 500;
}
.sliding-system-parent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  color: #9ca3af;
}
</style>
