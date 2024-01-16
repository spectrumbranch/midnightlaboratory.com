<template>
  <div class="col-lg-3 col-md-4 col-6">
    <a
      target="_blank"
      class="store-logo"
      :href="link"
      :aria-label="ariaLabel"
      rel="noopener noreferrer"
    >
      <img class="store-logo-img" :src="imageUrl" :alt="altText" />
    </a>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'StoreIcon',
  props: {
    link: String,
    ariaLabel: String,
    altText: String,
    imageUrl: String,
  },
  setup () {
    return {
      //
    };
  },
});
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
