<template>
  <li>
    {{ track.name }}
    <template v-if="track.feat"><br />{{ track.feat }}</template>
  </li>
</template>
<script setup lang="ts">
import { type PropType } from 'vue';
import { type AlbumTrack } from 'src/service/albums';
defineProps({
  track: {
    type: Object as PropType<AlbumTrack>,
    required: true,
  },
});
</script>
<style lang="scss"></style>
