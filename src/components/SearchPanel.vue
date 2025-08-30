<template>
  <div class="search-overlay">
    <div class="frame-parent">
      <div class="frame-group">
        <div class="search-normal-parent">
          <div class="search-normal">
            <img
              class="vuesaxoutlinesearch-normal-icon"
              alt=""
              src="../assets/vuesax/outline/search-normal.svg"
            />
          </div>
          <input
            v-model="searchQuery"
            class="search-input"
            placeholder="Search the product"
          />
        </div>

        <div
          v-if="searchQuery"
          class="notificationsdismiss-button"
          @click="clearSearch"
        >
          <img
            class="search-normal"
            alt="close"
            src="../assets/Notifications/X.svg"
          />
        </div>
      </div>

      <!-- QUICK SEARCHES (when no input) -->
      <div v-if="!searchQuery" class="quick-searches-parent">
        <div class="quick-searches">Quick Searches</div>
        <div class="sliding-system-parent">
          <div class="quick-searches">Sliding System</div>
          <div class="quick-searches">Glass Handles</div>
          <div class="quick-searches">Functional Fittings</div>
          <div class="quick-searches">Aluminium Profiles</div>
          <div class="quick-searches">G40 Wall Textures</div>
        </div>
      </div>

      <!-- SUGGESTED SEARCHES (when typing) -->
      <div v-else class="suggested-searches-parent">
        <div class="suggested-searches">Suggested Searches</div>
        <div class="frame-container">
          <div class="rectangle-parent" v-for="i in 3" :key="i">
            <img
              class="frame-child"
              alt=""
              src="../assets/Rectangle 34626208.png"
            />
            <div class="texture-name-parent">
              <div class="texture-name">Texture Name {{ i }}</div>
              <div class="by-colour-codes">by Colour Codes</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- blurred background -->
    <div class="rectangle-div" @click="$emit('close')" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const searchQuery = ref("");

const clearSearch = () => {
  searchQuery.value = "";
};
</script>

<style scoped lang="scss">
/* ---------- Desktop (Default) ---------- */
.search-overlay {
  position: fixed;
  top: 44px;
  left: 0;
  width: 100%;
  height: calc(100vh - 44px);
  z-index: 1000;
  display: flex;
  flex-direction: column;

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

    .frame-group {
      align-self: stretch;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .search-normal-parent {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;

        .search-normal {
          width: 20px;
          height: 20px;
          position: relative;

          .vuesaxoutlinesearch-normal-icon {
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            max-width: 100%;
            max-height: 100%;
            overflow: hidden;
          }
        }

        .search-input {
          border: none;
          outline: none;
          background: transparent;
          color: #121212;
          font-size: 16px;
        }
      }

      .notificationsdismiss-button {
        border-radius: 6px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        .search-normal {
          width: 20px;
          height: 20px;
        }
      }
    }

    .quick-searches-parent {
      align-self: stretch;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      font-size: 14px;

      .quick-searches {
        align-self: stretch;
        font-weight: 500;
      }

      .sliding-system-parent {
        align-self: stretch;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        color: #9ca3af;

        .quick-searches {
          font-weight: 500;
        }
      }
    }

    .suggested-searches-parent {
      display: flex;
      flex-direction: column;
      gap: 16px;
      font-size: 14px;

      .suggested-searches {
        font-weight: 500;
      }

      .frame-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
        color: #363636;

        .rectangle-parent {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 12px;

          .frame-child {
            width: 40px;
            height: 40px;
            border-radius: 4px;
            object-fit: cover;
          }

          .texture-name-parent {
            display: flex;
            flex-direction: column;
            gap: 2px;

            .texture-name {
              font-weight: 500;
            }

            .by-colour-codes {
              font-size: 10px;
              color: #9ca3af;
            }
          }
        }
      }
    }
  }

  .rectangle-div {
    flex: 1;
    backdrop-filter: blur(25px);
    background-color: rgba(255, 255, 255, 0.3);
  }
}

@media (max-width: 768px) {
  .search-overlay {
    margin-top: 11px;
    height: calc(100vh - 55.16px);
    .frame-parent {
      padding: 24px 200px 48px;
      gap: 48px;
      font-size: 20px;
    }

    .quick-searches-parent {
      gap: 24px;
      font-size: 16px;
    }
    .suggested-searches-parent {
      gap: 24px;
      font-size: 16px;

      .frame-container {
        gap: 20px;

        .rectangle-parent {
          align-items: flex-start;
        }
      }
    }
  }
}
</style>
