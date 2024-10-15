<template>
  <q-page class="row justify-evenly">
    <section class="col subpage">
      <article class="album-container">
        <h1 class="music-page-header zilla-slab">
          Video Game Music Assorted Covers Collection, Volume I
        </h1>
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
            <VGMACCV1Description />
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
  VGMACCV1Key,
  storeDisplayOrder,
  storeMeta,
} from 'src/service/albums';
import AlbumCoverArt from 'components/albums/AlbumCoverArt.vue';
import AlbumTrackList from 'components/albums/AlbumTrackList.vue';
import AlbumStores from 'components/albums/AlbumStores.vue';
import VGMACCV1Description from 'src/components/albums/vgmaccv1/VGMACCV1Description.vue';

const album = ref(albumMap[VGMACCV1Key]);

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
.horizontal-album-stores {
  justify-content: center;
  align-items: center;
}
</style>
