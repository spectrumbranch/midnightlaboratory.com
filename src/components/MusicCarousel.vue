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
      <q-carousel-slide v-for="(featuredSlide, index) in slides" :key="featuredSlide" :name="index" :img-src="featuredSlide">
        <div class="carousel-slide" />
      </q-carousel-slide>
    </q-carousel>
  </section>
</template>

<script lang="ts">
import VGMACC1AlbumArtUrl from '../assets/vgm-acc-volume-i-cover.png';
import AnamnesisAlbumArtUrl from '../assets/anamnesis.png';
import CommissionsAlbumArtUrl from '../assets/commissions_volI.png';
import PotentFlaskAlbumArtUrl from '../assets/potent_flask.png';

import {
  defineComponent,
  ref,
} from 'vue';

export default defineComponent({
  name: 'MusicCarousel',
  setup () {
    const carouselState = ref(0);

    const featuredSlides = [VGMACC1AlbumArtUrl, AnamnesisAlbumArtUrl, CommissionsAlbumArtUrl, PotentFlaskAlbumArtUrl];
    const slides = ref(featuredSlides);
    return {
      carouselState,
      slides,
    };
  },
});
</script>

<style lang="scss">
.carousel-container {
  width: fit-content;
  margin: 0 auto;
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
}

</style>
