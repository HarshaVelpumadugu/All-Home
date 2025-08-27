<template>
  <div class="image-1-parent">
    <img class="image-1-icon" alt="" src="../assets/image1.png" />
    <div class="textures">TEXTURES</div>
    <div class="handles">HANDLES</div>
    <div class="textures">KITCHEN</div>
    <div class="textures">FACADES</div>
    <img
      class="item-button-search-applec"
      alt=""
      src="../assets/searchIcon.svg"
    />
  </div>
</template>
<style scoped>
.image-1-icon {
  width: 67px;
  position: relative;
  max-height: 100%;
  object-fit: cover;
}
.textures {
  position: relative;
  font-weight: 500;
}
.handles {
  position: relative;
  font-weight: 500;
  color: var(--color-gray);
}
.item-button-search-applec {
  width: 31px;
  position: relative;
  height: 44px;
}
.image-1-parent {
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 81px;
  text-align: center;
  font-size: var(--font-size-14);
  color: var(--color-darkgray);
  font-family: var(--font-nunito);
}
</style>
