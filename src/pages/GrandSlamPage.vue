<template>
  <q-page class="row justify-evenly">
    <section class="col subpage">
      <article class="album-container">
        <h1 class="music-page-header zilla-slab">Grand Slam (Single)</h1>
        <div class="row justify-center">
          <div class="col-xl-4 col-md-5">
            <AlbumCoverArt :album="album" />
            <p class="album-art-credits">
              Album artwork created by: spectrumbranch and Eggrollbuddy
            </p>
            <AlbumTrackList :track-list="album.trackList" />
          </div>
          <div class="col-xl-8 col-md-7">
            <GrandSlamDescription />
          </div>
        </div>
        <AlbumStores :stores="stores" :is-horizontal="true" />
      </article>
    </section>
  </q-page>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import {
  StoreMeta,
  albumMap,
  GrandSlamKey,
  storeDisplayOrder,
  storeMeta,
} from 'src/service/albums';
import AlbumCoverArt from 'components/albums/AlbumCoverArt.vue';
import AlbumTrackList from 'components/albums/AlbumTrackList.vue';
import AlbumStores from 'components/albums/AlbumStores.vue';
import GrandSlamDescription from 'src/components/albums/grand-slam/GrandSlamDescription.vue';

const album = ref(albumMap[GrandSlamKey]);

const albumStores = storeDisplayOrder.map((key) => {
  const store: StoreMeta = { ...storeMeta[key] };
  if (album.value.stores[key]) {
    store.url = album.value.stores[key];
  }
  return store;
});
const stores = ref(albumStores);
</script>
<style lang="scss">
.music-page-header {
  text-align: center;
  color: $primary-text;
  font-weight: 300;
  font-size: 2.5rem;
  margin-bottom: 40px;
}
.album-art-credits {
  font-size: 0.9rem;
  text-align: center;
}
</style>
