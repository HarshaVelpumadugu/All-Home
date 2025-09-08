<template>
  <div class="search-overlay">
    <div class="frame-parent">
      <div class="frame-group">
        <div class="search-normal-parent">
          <div class="search-normal">
            <img
              class="vuesaxoutlinesearch-normal-icon"
              alt="Search"
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

    <div class="rectangle-div" @click="uiStore.closeSearch" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUiStore } from "../stores/useUiStore";

const uiStore = useUiStore();
const searchQuery = ref("");

const clearSearch = () => {
  searchQuery.value = "";
};
</script>

<style scoped lang="scss">
.search-overlay {
  position: fixed;
  top: 2.75rem;
  left: 0;
  width: 100%;
  height: calc(100vh - 2.75rem);
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
    padding: 1.5rem 18.75rem 3rem;
    box-sizing: border-box;
    gap: 3rem;
    text-align: left;
    font-size: 1.25rem;
    color: #121212;
    font-family: $font-nunito;

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
        gap: 0.75rem;

        .search-normal {
          width: 1.25rem;
          height: 1.25rem;
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
          font-size: 1rem;
        }
      }

      .notificationsdismiss-button {
        border-radius: 0.375rem;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        .search-normal {
          width: 1.25rem;
          height: 1.25rem;
        }
      }
    }

    .quick-searches-parent {
      align-self: stretch;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      font-size: 0.875rem;

      .quick-searches {
        align-self: stretch;
        font-weight: 500;
      }

      .sliding-system-parent {
        align-self: stretch;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        color: #9ca3af;

        .quick-searches {
          font-weight: 500;
        }
      }
    }

    .suggested-searches-parent {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 0.875rem;

      .suggested-searches {
        font-weight: 500;
      }

      .frame-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        color: #363636;

        .rectangle-parent {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0.75rem;

          .frame-child {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 0.25rem;
            object-fit: cover;
          }

          .texture-name-parent {
            display: flex;
            flex-direction: column;
            gap: 0.125rem;

            .texture-name {
              font-weight: 500;
            }

            .by-colour-codes {
              font-size: 0.625rem;
              color: #9ca3af;
            }
          }
        }
      }
    }
  }

  .rectangle-div {
    flex: 1;
    backdrop-filter: blur(1.5625rem);
    background-color: rgba(255, 255, 255, 0.3);
  }
}

@media (max-width: 768px) {
  .search-overlay {
    margin-top: 0.6875rem;
    height: calc(100vh - 3.4475rem);
    .frame-parent {
      padding: 1.5rem 12.5rem 3rem;
      gap: 3rem;
      font-size: 1.25rem;
    }

    .quick-searches-parent {
      gap: 1.5rem;
      font-size: 1rem;
    }
    .suggested-searches-parent {
      gap: 1.5rem;
      font-size: 1rem;

      .frame-container {
        gap: 1.25rem;

        .rectangle-parent {
          align-items: flex-start;
        }
      }
    }
  }
}
</style>
