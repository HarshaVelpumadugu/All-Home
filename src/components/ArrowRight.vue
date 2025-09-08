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
  height: 3rem;

  .vuesaxoutlinearrow-right-icon {
    position: absolute;
    height: 3rem;
    width: 3rem;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    max-width: 3rem;
    max-height: 3rem;
    overflow: hidden;
  }
}
@media (max-width: 768px) {
  .arrow-right {
    width: 2.5rem;
    position: relative;
    height: 2.5rem;

    .vuesaxoutlinearrow-right-icon {
      position: absolute;
      height: 2.5rem;
      width: 2.5rem;
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
