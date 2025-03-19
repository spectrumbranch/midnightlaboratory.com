<template>
  <div class="row store-logo-section">
    <div
      v-for="store in stores"
      :key="store.name"
      class="store-logo-group"
      :class="columnClasses"
    >
      <StoreIcon :store="store" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { StoreMeta } from 'src/service/albums';
import StoreIcon from 'components/StoreIcon.vue';

const { stores = [], isHorizontal = false } = defineProps({
  stores: Array<StoreMeta>,
  isHorizontal: Boolean,
});

const columnClasses = computed(() => {
  return isHorizontal ? 'col-md-4 col-6' : 'col-12';
});
</script>
<style lang="scss">
.store-logo-section {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}
.store-logo-group {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
}
</style>
