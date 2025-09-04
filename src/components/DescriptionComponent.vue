<template>
  <div class="frame-parent">
    <div class="hous-1-parent">
      <img class="hous-1-icon" alt="" src="../assets/hous 1.png" />

      <div class="text-with-underline">
        <p class="premium">Premium</p>
        <p class="premium">Exterior Facades</p>
      </div>
      <div class="frame-child"></div>
    </div>

    <!-- Pass section back when clicked -->
    <div class="explore-proudtcs-wrapper" @click="$emit('explore', section)">
      <div class="explore-proudtcs">Explore Products</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  section: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.frame-parent {
  width: 75%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  color: var(--color-white);
  font-size: 40px;
  font-family: var(--font-nunito);

  .hous-1-parent {
    width: 321px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    .hous-1-icon {
      width: 62px;
      position: relative;
      max-height: 100%;
      object-fit: cover;
    }

    .text-with-underline {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .premium {
        margin: 0;
        line-height: 1.2;
      }
    }
    .frame-child {
      height: 2px;
      width: 40%;
      background-color: var(--color-white);
      margin-top: 6px;
    }
  }

  .explore-proudtcs-wrapper {
    position: relative;
    backdrop-filter: blur(10px);
    border-radius: 100px;
    background-color: var(--color-gray);
    width: 172px;
    height: 42px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 8px 24px;
    box-sizing: border-box;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    color: var(--color-white);
    font-family: var(--font-nunito);

    .explore-proudtcs {
      position: relative;
      font-weight: 500;
    }
  }
}
/* 📱 Responsive styles */
@media (max-width: 768px) {
  .frame-parent {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 40px 0px 0px;
    box-sizing: border-box;
    gap: 32px;
    text-align: left;
    font-size: 40px;
    color: #fff;
    font-family: var(--font-nunito);

    .hous-1-parent {
      width: 321px;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 12px;

      .hous-1-icon {
        width: 92px;
        position: relative;
        max-height: 100%;
        object-fit: cover;
      }

      .text-with-underline {
        display: flex; // ✅ keep flex
        flex-direction: column; // ✅ force vertical stack
        align-items: flex-start;
        letter-spacing: 2px;
        font-weight: 300;
        opacity: 0.8;
        font-family: var(--font-nunito);

        .premium {
          margin: 0;
          display: block;
          font-size: 32px;
        }
      }

      .frame-child {
        height: 2px;
        position: relative;
        background-color: #fff;
        width: 30%;
        opacity: 0.8;
      }
    }

    .explore-proudtcs-wrapper {
      backdrop-filter: blur(10px);
      border-radius: 100px;
      background-color: rgba(0, 0, 0, 0.6);
      height: 48px;
      width: 219px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 14px 32px;
      box-sizing: border-box;
      text-align: center;
      font-size: 20px;

      .explore-proudtcs {
        position: relative;
        font-weight: 500;
      }
    }
  }
}
</style>
