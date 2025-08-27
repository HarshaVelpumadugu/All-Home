<template>
  <div class="frame-parent">
    <div class="hous-1-parent">
      <img class="hous-1-icon" alt="" src="../assets/hous 1.png" />

      <div class="text-with-underline">
        <p class="premium">Premium</p>
        <p class="premium">Exterior Facades</p>
        <div class="frame-child"></div>
      </div>
    </div>

    <div class="explore-proudtcs-wrapper">
      <div class="explore-proudtcs">Explore Products</div>
    </div>
  </div>
</template>

<style scoped>
.hous-1-icon {
  width: 62px;
  position: relative;
  max-height: 100%;
  object-fit: cover;
}

.premium {
  margin: 0;
  line-height: 1.2;
}

.text-with-underline {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.frame-child {
  height: 2px; /* thin line */
  width: 40%; /* matches text width */
  background-color: var(--color-white);
  margin-top: 6px; /* space between text and underline */
}

.hous-1-parent {
  width: 321px;
  display: flex;
  flex-direction: column; /* vertical stack */
  align-items: flex-start;
  gap: 10px;
}

.explore-proudtcs {
  position: relative;
  font-weight: 500;
}

.explore-proudtcs-wrapper {
  backdrop-filter: blur(10px);
  border-radius: 100px;
  background-color: var(--color-gray);
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 24px;
  font-size: 16px;
}

.frame-parent {
  width: 75%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  color: var(--color-white);
  font-size: 40px;
  font-family: var(--font-nunito);
}
</style>
