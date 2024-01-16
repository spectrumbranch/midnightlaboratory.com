<template>
  <q-page class="row items-center justify-evenly">
    <section class="col">
      <article>
        <div class="banner-container">
          <MusicCarousel/>
        </div>
        <div class="stores-container">
          <StoreIconDisplay/>
        </div>
      </article>
    </section>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MusicCarousel from 'components/MusicCarousel.vue';
import StoreIconDisplay from 'components/StoreIconDisplay.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { MusicCarousel, StoreIconDisplay },
  setup () {
    return {
      //
    };
  }
});
</script>



<style lang="scss">
.banner-container {
  border-bottom: 10px solid $primary;
  padding: 100px 30px;
}
.stores-container {
  background-color: $body-background;
  text-align: center;
}
</style>
