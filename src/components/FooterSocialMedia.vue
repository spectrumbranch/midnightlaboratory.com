<template>
  <section>
    <a href="https://www.twitch.tv/spectrumbranch"
       target="_blank"
       class="social-icon"
       rel="noopener noreferrer"
       aria-label="SpectrumBranch/Midnight Laboratory Twitch Stream (opens in new tab)">
      <q-icon name="fa-brands fa-twitch" />
    </a>
    <a href="https://twitter.com/spectrumbranch"
       target="_blank"
       class="social-icon"
       rel="noopener noreferrer"
       aria-label="SpectrumBranch/Midnight Laboratory Twitter Profile (opens in new tab)">
      <q-icon name="fa-brands fa-twitter" />
    </a>
    <a href="https://www.instagram.com/midnightlaboratory/"
       target="_blank"
       class="social-icon"
       rel="noopener noreferrer"
       aria-label="SpectrumBranch/Midnight Laboratory Instagram Profile (opens in new tab)">
      <q-icon name="fa-brands fa-instagram" />
    </a>
    <a href="https://www.facebook.com/midnightlaboratory"
       target="_blank"
       class="social-icon"
       rel="noopener noreferrer"
       aria-label="Midnight Laboratory Facebook Profile (opens in new tab)">
      <q-icon name="fa-brands fa-square-facebook" />
    </a>
    <a href="https://www.patreon.com/midnightlaboratory"
       target="_blank"
       class="social-icon"
       rel="noopener noreferrer"
       aria-label="SpectrumBranch/Midnight Laboratory Patreon Profile (opens in new tab)">
      <q-icon name="fa-brands fa-patreon" />
    </a>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'FooterSocialMedia'
});
</script>

<style lang="scss">
.social-icon {
  display: inline-block;
  margin: 0px 10px;
  font-size: 1.25rem;
}
</style>
