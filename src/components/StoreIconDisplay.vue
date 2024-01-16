<template>
  <section class="q-pa-md store-icon-display-container">
    <h1 class="showcase-header">
      <span class="showcase-title zilla-slab">Midnight Laboratory Music</span>
      <span class="now-available">Now Available</span>
    </h1>
    <h2 class="h2">All published Midnight Laboratory music is available at the following stores/services:</h2>

    <div class="row store-logo-section">
      <store-icon
        v-for="store in stores"
        :key="store.storeId"
        :link="store.url"
        :ariaLabel="store.ariaLabel"
        :altText="store.altText"
        :imageUrl="store.image"
      />
    </div>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
} from 'vue';
import StoreIcon from 'components/StoreIcon.vue';

import SpotifyStoreImageUrl from '../assets/store/spotify.png';
import AppleMusicStoreImageUrl from '../assets/store/apple-music.svg';
import AmazonStoreImageUrl from '../assets/store/amazon.png';
import YouTubeStoreImageUrl from '../assets/store/youtube.png';
import IHeartRadioStoreImageUrl from '../assets/store/iHeartRadio.png';
import DeezerStoreImageUrl from '../assets/store/deezer.svg';
import KKBoxStoreImageUrl from '../assets/store/kkbox.png';
import TidalStoreImageUrl from '../assets/store/tidal.png';

export default defineComponent({
  name: 'StoreIconDisplay',
  components: { StoreIcon },
  setup () {
    const storeData = [
      {
        ariaLabel: 'Play on Spotify (opens in new tab)',
        image: SpotifyStoreImageUrl,
        altText: 'Spotify Logo',
        storeId: 'spotify',
        url: 'https://open.spotify.com/artist/4BnWfLuE1vryG09kvR2Ino'
      },
      {
        ariaLabel: 'Play on Apple Music (opens in new tab)',
        image: AppleMusicStoreImageUrl,
        altText: 'Apple Music Logo',
        storeId: 'appleMusic',
        url: 'https://music.apple.com/us/artist/midnight-laboratory/1265683496'
      },
      {
        ariaLabel: 'Play on Amazon (opens in new tab)',
        image: AmazonStoreImageUrl,
        altText: 'Amazon Logo',
        storeId: 'amazon',
        url: 'https://www.amazon.com/music/player/artists/B074F5PRG1/midnight-laboratory'
      },
      {
        ariaLabel: 'Play on YouTube (opens in new tab)',
        image: YouTubeStoreImageUrl,
        altText: 'YouTube Logo',
        storeId: 'youTube',
        url: 'https://www.youtube.com/@midnightlaboratorymusic'
      },
      {
        ariaLabel: 'Play on I Heart Radio (opens in new tab)',
        image: IHeartRadioStoreImageUrl,
        altText: 'iHeart Radio Logo',
        storeId: 'iHeartRadio',
        url: 'https://www.iheart.com/artist/midnight-laboratory-32799083/'
      },
      {
        ariaLabel: 'Play on Deezer (opens in new tab)',
        image: DeezerStoreImageUrl,
        altText: 'Deezer Logo',
        storeId: 'deezer',
        url: 'https://www.deezer.com/us/artist/12929179'
      },
      {
        ariaLabel: 'Play on K K Box (opens in new tab)',
        image: KKBoxStoreImageUrl,
        altText: 'KKBox Logo',
        storeId: 'kkBox',
        url: 'https://www.kkbox.com/hk/tc/artist/WoKuhvPmMb0q42PW2C'
      },
      {
        ariaLabel: 'Play on Tidal (opens in new tab)',
        image: TidalStoreImageUrl,
        altText: 'Tidal Logo',
        storeId: 'tidal',
        url: 'https://tidal.com/browse/artist/8985784'
      }
    ];

    const stores = ref(storeData);

    return {
      stores,
    };
  },
});
</script>

<style lang="scss">
.store-icon-display-container {
  .showcase-header {
    margin-top: 30px;
    margin-bottom: 30px;

    span {
      display: block;
    }

    .showcase-title {
      margin-bottom: 10px;
      color: $primary-text;
    }

    .now-available {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      color: #fff;
      font-size: 1.75rem;
      font-weight: 300;
    }
  }

  .h2 {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #fff;
    font-size: 1.2rem;
    margin-bottom: 30px;
  }

  .store-logo-section {
    justify-content: center;
    align-items: center;
  }
}
</style>
