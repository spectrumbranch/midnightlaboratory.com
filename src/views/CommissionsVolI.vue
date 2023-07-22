<template>
  <article class="albums sub-page">
    <section class="container">
      <h1 class="h1 album-header">Commissions Volume I</h1>
      <div class="row">
        <div class="col-xl-4 col-lg-5">         
          <img class="album-img" src="../assets/commissions_volI.png" alt="Commissions Volume I Album Cover" aria-hidden="true" />
          <p class="album-art">Album artwork created by: 
            <a href="https://www.twitch.tv/sarulielf" 
              target="_blank"         
              rel="noopener noreferrer" 
              aria-label="SaruliElf Twitch Stream (opens in new tab)">twitch.tv/sarulielf</a>
          </p>
          <div class="album-tracks">
          <h2 class="h3">Track List</h2>
            <ol>
              <li>Reveal</li>
              <li>Let's Go (feat. koallabyninja)</li>
              <li>Ripple of Intrigue</li>
              <li>Electric Apparition</li>
              <li>Star Lightning</li>
              <li>Run it Back</li>
              <li>Sand Ghost Vibes</li>
              <li>Tea Time Sunshowers (feat. Rachel Hirshan)</li>
              <li>Campfire Sunset</li>
            </ol>
          </div>  
        </div>
        <div class="col-xl-8 col-lg-7">
          <div class="album-description">
            <p>Commissions Volume I is a compilation of songs of various genres, which were written for different Twitch streamers.</p>
            <br>
            <p>
              <strong>Reveal</strong><br>
              A synthy introduction with groovy spectral and sprinkle elements.
            </p>
            <p>
              <strong>Let's Go (feat. koallabyninja)</strong><br>
              An energetic synthwave track written for featuring the powerful vocals of
              <a href="https://www.twitch.tv/koallabyninja"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Koallabyninja Twitch Stream (opens in new tab)"
              >twitch.tv/koallabyninja</a>.
            </p>
            <p>
              <strong>Ripple of Intrigue</strong><br>
              A chill "lofi" orchestral song.
            </p>
            <p>
              <strong>Electric Apparition</strong><br>
              An electronic funk hype song.
            </p>
            <p>
              <strong>Star Lightning</strong><br>
              A crunchy synth indie pop track.
            </p>
            <p>
              <strong>Run it Back</strong><br>
              An energetic synthwave track.
            </p>
            <p>
              <strong>Sand Ghost Vibes</strong><br>
              A chill "lofi" jazz song.
            </p>
            <p>
              <strong>Tea Time Sunshowers (feat. Rachel Hirshan)</strong><br>
              A chill "lofi" song featuring the talented Rachel Hirshan on flute.
            </p>
            <p>
              <strong>Campfire Sunset</strong><br>
              A chill nature-themed "lofi" song.
              I made and recorded a fire alongside sounds of various fauna from my backyard to add to the ambience.
            </p>
          </div>
        </div>
      </div>
      <div class="stores">
        <store-icons-data layout="sixColumn" album-id="commissionsVol1"></store-icons-data>
      </div>
    </section>
  </article>
</template>

<script>
import StoreIconsData from '@/components/StoreIconsData'  
export default {
  name: 'albums',
  components: {
    StoreIconsData
  }
}
</script>

<style scoped lang="less">
@import '~../less/variables.less';
@import '~../less/global.less';

.albums{
  .h3 {
    margin: 0px;
    padding-bottom: .5rem;
  }

  .row {
    margin-bottom: 25px;
   }

  p{
    margin-bottom: 1.2rem;
    span{
      display: block;
    }
   }

  .album-art {
    font-size: 0.9rem;
    text-align: center;
  }

  .album-tracks {
    font-size: 0.9rem;
    max-width: 375px;
    margin: auto;
    ol {
      padding-left: 25px;
    }
   }

   .album-story-text {
    font-style: italic;
    margin-top: 35px;
   }

   .album-lyrics {
    text-align: center;
   }

   hr {
    border-bottom: 5px solid @xdarkgray;
   }

  .album-img {
    width: 100%;
    max-width: 375px;
    display: block;
    background: @darkgray;
    box-shadow: 0px 0px 45px @black;
    margin: 0px auto 10px auto;
  }
}
</style>
