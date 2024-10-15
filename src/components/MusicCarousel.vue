<template>
  <section class="q-pa-md carousel-container">
    <q-carousel
      swipeable
      animated
      v-model="carouselState"
      thumbnails
      infinite
      height="auto"
      class="carousel-collection"
    >
      <q-carousel-slide
        v-for="(featuredSlide, index) in slides"
        :key="featuredSlide.image"
        :name="index"
        :img-src="featuredSlide.image"
      >
        <RouterLink :to="{ name: featuredSlide.key }">
          <div class="carousel-slide">
            <div class="absolute-top custom-caption">
              <div class="text-h4 zilla-slab">{{ featuredSlide.title }}</div>
            </div>
          </div>
        </RouterLink>
      </q-carousel-slide>
    </q-carousel>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { albumMap, albumDisplayOrder } from 'src/service/albums';

const carouselState = ref(0);

const featuredSlides = albumDisplayOrder.map((key) => {
  return { image: albumMap[key].image, title: albumMap[key].title, key };
});
const slides = ref(featuredSlides);
</script>

<style lang="scss">
.carousel-container {
  width: fit-content;
  margin: 0 auto;
}

.q-carousel__slide,
.q-carousel .q-carousel--padding {
  padding: 0;
}

.q-carousel {
  &.carousel-collection {
    -webkit-box-shadow: 0 0 35px #000;
    box-shadow: 0 0 35px #000;
    background: #1f1b16;
  }

  .q-panel .carousel-slide {
    @media (max-width: $breakpoint-xs-max) {
      height: 300px;
      width: 300px;
    }
    height: 500px;
    width: 500px;
  }
  .custom-caption {
    text-align: center;
    padding: 12px;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>
