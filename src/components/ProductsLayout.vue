<template>
  <section class="products-container">
    <!-- Header -->
    <div class="header">
      <div class="products-header">
        {{ section.charAt(0).toUpperCase() + section.slice(1).toLowerCase() }}
      </div>
      <div class="products-header">Products</div>
      <div class="frame-child"></div>
    </div>

    <!-- Grid -->
    <div class="products-grid">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="product-card"
        @click="$router.push(`/products/${index}`)"
      >
        <div class="product-img">
          <img :src="product.img" :alt="product.name" />
        </div>

        <!-- Overlay that shows on hover -->
        <div class="product-overlay">
          <p class="product-name">{{ product.name }}</p>
          <button class="view-btn">&gt;</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductsGrid",
  props: {
    section: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      products: [
        {
          name: "Modern Mirror",
          img: "https://d1b2b4oevn2eyz.cloudfront.net/allhomes/House%20Of%20W/Sanitary-ISVEA/red%20vanity.png",
        },
        {
          name: "Luxury Basin",
          img: "https://d1b2b4oevn2eyz.cloudfront.net/allhomes/House%20Of%20W/Sanitary-ISVEA/Blue%20Vanity.png",
        },
        {
          name: "Wall Klozet",
          img: "https://d1b2b4oevn2eyz.cloudfront.net/allhomes/House%20Of%20W/thumbnail/RPTFBTLT_00182_THUMBNAIL.png",
        },
        {
          name: "Asma Klozet",
          img: "https://d1b2b4oevn2eyz.cloudfront.net/allhomes/House%20Of%20W/thumbnail/RPTFBTLT_00184_THUMBNAIL.png",
        },
        {
          name: "Wash Basin",
          img: "https://d1b2b4oevn2eyz.cloudfront.net/allhomes/House%20Of%20W/thumbnail/RPTFBTLT_00184_THUMBNAIL.png",
        },
        {
          name: "Round Mirror",
          img: "https://d1b2b4oevn2eyz.cloudfront.net/allhomes/House%20Of%20W/thumbnail/RPTFBTLT_00182_THUMBNAIL.png",
        },
        {
          name: "Classic Basin",
          img: "https://d1b2b4oevn2eyz.cloudfront.net/allhomes/House%20Of%20W/Sanitary-ISVEA/Blue%20Vanity.png",
        },
        {
          name: "Smart Sink",
          img: "https://d1b2b4oevn2eyz.cloudfront.net/allhomes/House%20Of%20W/Sanitary-ISVEA/red%20vanity.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.products-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}
.header {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
}
.products-header {
  font-size: 2.5rem;
  font-weight: 300;
  font-family: var(--font-nunito);
  letter-spacing: 0.125rem;
  color: #000;
  text-align: left;
}
.frame-child {
  height: 2px;
  background-color: #000;
  width: 100px;
  opacity: 0.8;
}
.products-grid {
  display: grid;
  gap: 2.5rem;
  width: 100%;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-rows: auto;
  padding-bottom: 2.5rem;
  overflow: visible;
  justify-items: stretch;
  align-items: stretch;
  align-content: start;
  justify-content: start;
}

/* Product Card */
.product-card {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #fff;
  box-shadow: 0 2px 8px #0000001a;
}

.product-img {
  width: 100%;
  height: 100%;
}
.product-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
  transition: transform 0.3s ease;
  box-sizing: border-box;
}
.product-card:hover .product-img img {
  transform: scale(1.2); /* Image gets 20% larger but container crops it */
}

/* Overlay */
/* Overlay */
.product-overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  padding: 1.25rem 1.25rem 1.25rem 1.25rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 0.625rem;
  box-sizing: border-box;
}

.product-card:hover .product-overlay {
  opacity: 1;
  transform: translateY(0); /* slide up */
}

.product-name {
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.25rem;
  box-sizing: border-box;
  margin: 0;
}

.view-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  background: #fff;
  border-radius: 50%;
  transition: all 0.3s ease-in;
  flex-shrink: 0;
  box-sizing: border-box;
}

/* .view-btn:hover {
  background: #fff;
  color: #000;
} */
</style>
