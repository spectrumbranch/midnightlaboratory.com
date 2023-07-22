<template>
  <div class="row store-logo-section">
    <div class="store-logo-group"
      :class="[layoutClass]"
      :album-id="albumId"
      v-show="album[store.storeId]"
      v-for="(store, index) in stores"
      :key="index">
      <store-icons
        v-if="album[store.storeId]"
        :link="album[store.storeId]"
        :ariaLabel="store.ariaLabel"
        :image="getStoreIconsImageUrl(store.image)"
        :altText="store.altText">
      </store-icons>
    </div>
  </div>  
</template>

<script>
import StoreIcons from '@/components/StoreIcons'  
import albumService from '@/service/album.service'  
export default {
  name: 'StoreIconsData',
  components: {
    StoreIcons
  },
  props: {
    layout: String,
    albumId: String
  },
  data () {
    return {
      album: {},

      stores: [
        {
          ariaLabel: "Play on Spotify (opens in new tab)",
          image: "spotify.png",
          altText: "Spotify Logo",
          storeId: "spotify"
        },
        {
          ariaLabel: "Purchase on Apple Music (opens in new tab)",
          image: "apple-music.svg",
          altText: "Apple Music Logo",
          storeId: "appleMusic"
        },
        {
          ariaLabel: "Purchase on Amazon (opens in new tab)",
          image: "amazon.png",
          altText: "Amazon Logo",
          storeId: "amazon"
        },
        {
          ariaLabel: "Purchase on I Tunes (opens in new tab)",
          image: "iTunes.svg",
          altText: "iTunes Logo",
          storeId: "iTunes"
        },
        {
          ariaLabel: "Purchase on You Tube (opens in new tab)",
          image: "youtube.png",
          altText: "YouTube Logo",
          storeId: "youTube"
        },
        {
          ariaLabel: "Play on Napster (opens in new tab)",
          image: "napster.png",
          altText: "Napster Logo",
          storeId: "napster"
        },
        {
          ariaLabel: "Play on I Heart Radio (opens in new tab)",
          image: "iHeartRadio.png",
          altText: "iHeart Radio Logo",
          storeId: "iHeartRadio"
        },
        {
          ariaLabel: "Play on Deezer (opens in new tab)",
          image: "deezer.svg",
          altText: "Deezer Logo",
          storeId: "deezer"
        },
        {
          ariaLabel: "Play on K K Box (opens in new tab)",
          image: "kkbox.png",
          altText: "KKBox Logo",
          storeId: "kkBox"
        },
        {
          ariaLabel: "Play on Tidal (opens in new tab)",
          image: "tidal.png",
          altText: "Tidal Logo",
          storeId: "tidal"
        }
      ],
      sixColumn: 'six-col col-lg-2 col-md-3 col-sm-4',
      fourColumn: 'four-col col-lg-3 col-md-4 col-sm-6',
      threeColumn: 'three-col col-md-4 col-sm-6',
      oneColumn: 'one-col col-12',
    }
  },
  computed: {
    layoutClass () {
      if (this.layout === 'fourColumn') {
        return this.fourColumn
      } else if (this.layout === 'threeColumn') {
        return this.threeColumn
      } else if (this.layout === 'sixColumn') {
        return this.sixColumn 
      } else if (this.layout === 'oneColumn') {
        return this.oneColumn        
      } else {
        return this.fourColumn
      }
    }
  },
  methods: {
    getStoreIconsImageUrl(image) {
      return require('../assets/images/' + image)
    }
  },
  created () {
    this.album = albumService.getAlbumLinksById(this.albumId)
  }
}
</script>

<style lang="less">
@import '~../less/variables.less';
@import '~../less/global.less';

.store-logo-section {
  justify-content: center;
  align-items: center;

  .store-logo-group {
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    &.six-col {
      .store-logo-img { 
        @media (min-width: @min-device-sm) {       
          width: 100%;         
          max-width: 100%;
          min-width: 150px;
        }

        @media (min-width: @min-device-lg) {
          min-width: 130px;
        }

        @media (min-width: @min-device-xl) {
          min-width: 160px;
        }
      }
    }

    &.one-col {
      @media (min-width: @min-device-lg) {
        justify-content: left;
      }
    }
  }
}
</style>
