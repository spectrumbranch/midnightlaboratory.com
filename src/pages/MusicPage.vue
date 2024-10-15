<template>
  <q-page class="row justify-evenly">
    <section class="col subpage">
      <article class="container">
        <h1 class="bio-heading zilla-slab">Music by Midnight Laboratory</h1>
        <div class="row">
          <div
            v-for="album in albums"
            :key="album.title"
            class="col-sm-12 col-md-6 album-section"
          >
            <MusicLink :album="album" />
          </div>
        </div>
      </article>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MusicLink from 'components/MusicLink.vue';
import { albumMap, albumDisplayOrder } from 'src/service/albums';

const musicPageAlbums = albumDisplayOrder.map((key) => {
  return { ...albumMap[key], key };
});
const albums = ref(musicPageAlbums);
</script>

<style lang="scss">
.bio-heading {
  text-align: center;
  color: $primary-text;
  font-weight: 300;
  font-size: 2.5rem;
  margin-bottom: 40px;
}
.piano-img {
  margin: 25px auto;
  display: block;
  width: 100%;
  max-width: 690px;
  border-radius: 39px;
}
.subpage {
  padding: 40px 0 30px 0;
}
.album-section {
  margin: 0 auto;
}
</style>
