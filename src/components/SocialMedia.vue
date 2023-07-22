<template>
  <section>
    <a href="https://www.twitch.tv/spectrumbranch" 
      target="_blank"    
      class="social-icon"        
      rel="noopener noreferrer" 
      aria-label="SpectrumBranch/Midnight Laboratory Twitch Stream (opens in new tab)">
      <font-awesome-icon :icon="['fab', 'twitch']" class="icon" />
    </a>
    <a href="https://twitter.com/spectrumbranch" 
      target="_blank"
      class="social-icon"            
      rel="noopener noreferrer" 
      aria-label="SpectrumBranch/Midnight Laboratory Twitter Profile (opens in new tab)">
      <font-awesome-icon :icon="['fab', 'twitter-square']" class="icon" />
    </a>
    <a href="https://www.instagram.com/midnightlaboratory/" 
      target="_blank" 
      class="social-icon"           
      rel="noopener noreferrer" 
      aria-label="SpectrumBranch/Midnight Laboratory Instagram Profile (opens in new tab)">
      <font-awesome-icon :icon="['fab', 'instagram']" class="icon" />
    </a>
    <a href="https://www.facebook.com/midnightlaboratory" 
      target="_blank" 
      class="social-icon"     
      rel="noopener noreferrer" 
      aria-label="SpectrumBranch/Midnight Laboratory Facebook Profile (opens in new tab)">
      <font-awesome-icon :icon="['fab', 'facebook-square']" class="icon" />
    </a> 
  </section>
</template>

<script>
export default {
  name: 'socialMedia',
}
</script>

<style scoped lang="less">
@import '~../less/variables.less';
@import '~../less/global.less';

</style>
