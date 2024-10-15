<template>
  <a
    target="_blank"
    class="store-logo"
    :href="store.url"
    :aria-label="ariaLabel"
    rel="noopener noreferrer"
  >
    <img class="store-logo-img" :src="store.image" :alt="altText" />
  </a>
</template>

<script setup lang="ts">
import { type PropType, ref } from 'vue';
import { type StoreMeta } from 'src/service/albums';

const props = defineProps({
  store: { type: Object as PropType<StoreMeta>, required: true },
});

const altText = ref(`${props.store.name} Logo`);
const ariaLabel = ref(`Play on ${props.store.name} (opens in new tab)`);
</script>

<style lang="scss">
.store-logo {
  height: 70px;
  align-items: center;
  justify-content: center;
  display: flex;
}

.store-logo-img {
  min-width: 165px;
  max-width: 165px;
  width: 100%;
  text-align: center;
}
</style>
