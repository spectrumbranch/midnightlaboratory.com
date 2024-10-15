<template>
  <section class="q-pa-md store-icon-display-container">
    <h1 class="showcase-header">
      <span class="showcase-title zilla-slab">Midnight Laboratory Music</span>
      <span class="now-available">Now Available</span>
    </h1>
    <h2 class="h2">
      All published Midnight Laboratory music is available at the following
      stores/services:
    </h2>

    <div class="row store-logo-section">
      <div
        v-for="store in stores"
        :key="store.key"
        class="col-lg-3 col-md-4 col-6"
      >
        <StoreIcon :store="store" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import StoreIcon from 'components/StoreIcon.vue';
import { storeDisplayOrder, storeMeta } from 'src/service/albums';

const genericStores = storeDisplayOrder.map((key) => {
  return { ...storeMeta[key], key };
});
const stores = ref(genericStores);
</script>

<style lang="scss">
.store-icon-display-container {
  .showcase-header {
    margin-top: 30px;
    margin-bottom: 30px;

    span {
      display: block;
    }
    .showcase-title {
      font-size: 40px;
      margin-bottom: 10px;
      color: $primary-text;
    }
    .now-available {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      color: #fff;
      font-size: 1.75rem;
      font-weight: 300;
    }
  }
  .h2 {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #fff;
    font-size: 1.2rem;
    margin-bottom: 30px;
    line-height: 28px;
  }
  .store-logo-section {
    justify-content: center;
    align-items: center;
  }
}
</style>
