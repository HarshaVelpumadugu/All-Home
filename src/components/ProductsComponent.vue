<template>
  <div class="frame-parent">
    <div class="fiamarc-exterior-handles-parent">
      <div class="fiamarc-exterior-handles">
        <p class="fiamarc">Fiamarc</p>
        <p class="fiamarc">Exterior Handles</p>
      </div>
      <div class="frame-child" />
    </div>
    <div class="image-4-parent">
      <img class="image-4-icon" alt="" src="../assets/image 4.png" />
      <img class="image-5-icon" alt="" src="../assets/image 5.png" />
      <img class="image-6-icon" alt="" src="../assets/image 6.png" />
      <img class="image-7-icon" alt="" src="../assets/image 7.png" />
      <div class="frame-group">
        <div class="fusion-parent">
          <div class="fusion">Fusion</div>
          <div class="inr-24999">INR 24,999</div>
        </div>
        <div class="arrow-right">
          <img
            class="vuesaxoutlinearrow-right-icon"
            alt=""
            src="../assets/vuesax/outline/arrow-right.svg"
          />
        </div>
      </div>
    </div>
    <div class="image-4-group">
      <img class="image-4-icon1" alt="" src="../assets/image 4.png" />
      <img class="image-4-icon1" alt="" src="../assets/image 5.png" />
      <img class="image-4-icon1" alt="" src="../assets/image 6.png" />
      <img class="image-4-icon1" alt="" src="../assets/image 7.png" />
    </div>
    <div class="image-4-group">
      <img class="image-4-icon1" alt="" src="../assets/image 4.png" />
      <img class="image-4-icon1" alt="" src="../assets/image 5.png" />
      <img class="image-4-icon1" alt="" src="../assets/image 6.png" />
      <img class="image-4-icon1" alt="" src="../assets/image 7.png" />
    </div>
  </div>
</template>
<style scoped>
.fiamarc {
  margin: 0;
}
.fiamarc-exterior-handles {
  position: relative;
  letter-spacing: 2px;
  font-weight: 300;
  opacity: 0.8;
}
/* .frame-child {
  width: 2px;
  position: relative;
  background-color: var(--color-gray);
  height: 100px;
  transform: rotate(-90deg);
  opacity: 0.8;
} */
.frame-child {
  height: 2px;
  width: 50%;
  position: relative;
  background-color: var(--color-gray);
  opacity: 0.8;
}
.fiamarc-exterior-handles-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
}
.image-4-icon {
  width: 250px;
  position: relative;
  border-radius: var(--br-4);
  max-height: 100%;
  object-fit: cover;
  z-index: 0;
}
.image-5-icon {
  width: 250px;
  position: relative;
  border-radius: var(--br-4);
  max-height: 100%;
  object-fit: cover;
  z-index: 1;
}
.image-6-icon {
  width: 250px;
  position: relative;
  border-radius: var(--br-4);
  max-height: 100%;
  object-fit: cover;
  z-index: 2;
}
.image-7-icon {
  width: 250px;
  position: relative;
  border-radius: var(--br-4);
  max-height: 100%;
  object-fit: cover;
  z-index: 3;
}
.fusion {
  position: relative;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.inr-24999 {
  position: relative;
  font-size: 14px;
  font-weight: 500;
}
.fusion-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
}
.vuesaxoutlinearrow-right-icon {
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
.arrow-right {
  width: 24px;
  position: relative;
  height: 24px;
}
.frame-group {
  width: 226px;
  margin: 0 !important;
  position: absolute;
  top: 198px;
  left: 12px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0px;
  z-index: 4;
}
.image-4-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  gap: var(--gap-40);
  font-size: 16px;
  color: var(--color-white);
  font-family: var(--font-inter);
}
.image-4-icon1 {
  width: 250px;
  position: relative;
  border-radius: var(--br-4);
  max-height: 100%;
  object-fit: cover;
}
.image-4-group {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-40);
}
.frame-parent {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-40);
  text-align: left;
  font-size: 40px;
  color: var(--color-gray);
  font-family: var(--font-nunito);
}
</style>
