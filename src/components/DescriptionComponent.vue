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

      .frame-child {
        height: 2px;
        width: 40%;
        background-color: var(--color-white);
        margin-top: 6px;
      }
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
    color: var(--color-white);
    font-family: var(--font-nunito);

    .explore-proudtcs {
      position: relative;
      font-weight: 500;
    }
  }
}
</style>
