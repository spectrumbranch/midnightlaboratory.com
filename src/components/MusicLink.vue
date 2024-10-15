<template>
  <RouterLink :to="{ name: album.key }" class="album-link" role="link">
    <AlbumCoverArt :album="album" />
    <h2 class="album-title">{{ album.title }}</h2>
  </RouterLink>
</template>
<script setup lang="ts">
import AlbumCoverArt from 'components/albums/AlbumCoverArt.vue';

defineProps({
  album: {
    type: Object,
    required: true,
  },
});
</script>
<style lang="scss">
.album-link {
  text-decoration: none;
  &:hover {
    .album-img {
      opacity: 0.8;
    }
    .album-title {
      color: #71c05a;
    }
  }

  .album-img {
    width: 100%;
    max-width: 300px;
    display: block;
    background: #1f1b16;
    -webkit-box-shadow: 0 0 45px #000;
    box-shadow: 0 0 45px #000;
    margin: 0 auto 25px auto;
  }
  .album-title {
    margin: 1rem 0 2rem 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #fff;
    font-size: 1.75rem;
    font-weight: 300;
    text-align: center;
    line-height: 1.5;
  }
}
</style>
