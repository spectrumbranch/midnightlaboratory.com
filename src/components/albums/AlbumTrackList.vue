<template>
  <div class="album-tracks">
    <h2 class="album-tracks-header zilla-slab">Track List</h2>
    <ol class="album-tracks-listing">
      <AlbumTrackListTrack
        v-for="track in trackList"
        :track="track"
        :key="track.name"
      />
    </ol>
  </div>
</template>
<script setup lang="ts">
import AlbumTrackListTrack from './AlbumTrackListTrack.vue';
import { type AlbumTrack } from 'src/service/albums';
defineProps({
  trackList: Array<AlbumTrack>,
});
</script>
<style lang="scss">
.album-tracks {
  font-size: 0.9rem;
  max-width: 375px;
  margin: auto;
}
.album-tracks-header {
  text-align: center;
  margin: 0;
  padding-bottom: 0.5rem;
  font-size: 1.75rem;
  color: #71c05a;
  font-weight: 300;
  line-height: 1.2;
}
</style>
