<template>
  <img
    :src="album.image"
    :alt="album.title + ' Album Cover'"
    aria-hidden="true"
    class="album-img"
  />
</template>
<script setup lang="ts">
defineProps({
  album: { type: Object, required: true },
});
</script>
<style lang="scss">
.album-img {
  width: 100%;
  max-width: 300px;
  display: block;
  background: #1f1b16;
  -webkit-box-shadow: 0 0 45px #000;
  box-shadow: 0 0 45px #000;
  margin: 0 auto 25px auto;
}
</style>
