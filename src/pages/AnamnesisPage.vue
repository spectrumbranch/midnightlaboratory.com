<template>
  <q-page class="row justify-evenly">
    <section class="col subpage">
      <article class="album-container">
        <h1 class="music-page-header zilla-slab">Anamnesis</h1>
        <div class="row">
          <div class="col-xl-4 col-md-5">
            <AlbumCoverArt :album="album" />
            <p class="album-art-credits">
              Album artwork created by:
              <a
                href="https://rachelhirshan.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="R.E.H. Designs (opens in new tab)"
              >
                REH Designs
              </a>
            </p>
            <AlbumTrackList :track-list="album.trackList" />
          </div>
          <div class="col-xl-8 col-md-7">
            <AnamnesisDescription />
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
  AnamnesisKey,
  storeDisplayOrder,
  storeMeta,
} from 'src/service/albums';
import AlbumCoverArt from 'components/albums/AlbumCoverArt.vue';
import AlbumTrackList from 'components/albums/AlbumTrackList.vue';
import AlbumStores from 'components/albums/AlbumStores.vue';
import AnamnesisDescription from 'src/components/albums/anamnesis/AnamnesisDescription.vue';

const album = ref(albumMap[AnamnesisKey]);

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
