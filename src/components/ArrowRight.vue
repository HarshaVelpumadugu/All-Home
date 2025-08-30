<template>
  <div class="arrow-right">
    <img
      class="vuesaxoutlinearrow-right-icon"
      alt=""
      src="../assets/vuesax/outline/arrow-right.svg"
    />
  </div>
</template>

<style lang="scss" scoped>
.arrow-right {
  width: 100%;
  position: relative;
  height: 48px;

  .vuesaxoutlinearrow-right-icon {
    position: absolute;
    height: 48px;
    width: 48px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    max-width: 48px;
    max-height: 48px;
    overflow: hidden;
  }
}
@media (max-width: 768px) {
  .arrow-right {
    width: 40px;
    position: relative;
    height: 40px;

    .vuesaxoutlinearrow-right-icon {
      position: absolute;
      height: 40px;
      width: 40px;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      max-width: 100%;
      max-height: 100%;
      overflow: hidden;
    }
  }
}
</style>
