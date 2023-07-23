<template>
  <article class="home">
    <section class="banner">
      <router-link role="link" class="banner-link" to="/commissions-vol-I">
        <img class="banner-img" src="../assets/images/commissions_volI.png" alt="Commissions Volume I Learn More" />
        <div class="overlay">
          <div class="overlay-text">
            <h1 class="h1">Commissions Volume I</h1>
            <h2 class="h2">Learn More</h2>
          </div>    
        </div>
      </router-link>
    </section>
    <section class="home-main">
      <div class="container">
        <h1 class="h1">
          <span class="album-title">Commissions Volume I</span>         
          <span class="now-available">Now Available</span>
        </h1>
        <h2 class="h2">Commissions Volume I is available at the following stores/services:</h2>
        <store-icons-data layout="fourColumn" album-id="commissionsVol1"></store-icons-data>    
      </div>
    </section>
  </article>
</template>

<!-- Music Licensing <a target="_blank" href="http://www.mndigital.com/content-experience/music_content/albums/418035081">MediaNet</a>-->

<script>
import StoreIconsData from '@/components/StoreIconsData'  
export default {
  name: 'home',
  components: {
    StoreIconsData
  }
}
</script>

<style scoped lang="less">
@import '~../less/variables.less';
@import '~../less/global.less';

.container {
  padding: 50px 15px;
}

.banner {
  border-bottom: 10px solid @xdarkgray;
  padding: 100px 30px;
}

.banner-img {
  width: 100%;
  box-shadow: 0px 0px 35px @black;
  background: @darkgray;
}

.banner-link {
  position: relative;
  display: block;
  max-width: 500px;
  margin: auto;

  &:hover{
    .overlay{
      opacity: 1;
    }
  } 
}

.overlay{ 
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 1;
  transition: .5s ease;
  background: rgba(31, 27, 22, 0.1);

  @media (min-width: @min-device-lg) {
    opacity: 0;
  }
}

.overlay-text{  
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  max-height: 500px;
  height: 100%;
  width: 100%;

  .h1 {
    position: absolute;
    top: 0px;
    width: 100%;
    color: @darkgray;
    background: @white-transparentA;
    padding: 5px 0px;

    @media (max-width: @max-device-xs) {
      font-size: 1.75rem;
    }
  }

  .h2 {
    position: absolute;
    bottom: 0px;
    color: @darkgray;
    font-family: @font-main;
    font-size: 1.4rem;
    margin: 0px;
    width: 100%;
    background: @white-transparentA;
    padding: 2px 0px;

    @media (max-width: @max-device-xs) {
    font-size: 1rem;
    
    }
  }
}

.home-main {
  background: @darkgray;

  .h1 {
    margin-bottom: 30px; 

    span {
      display: block;
    }

    .album-title {
      margin-bottom: 10px;
    }

    .now-available {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      color: @white;
      font-size: 1.75rem;
      font-weight: 300;
    }
  }

  .h2 {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: @white;
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
}

/* Background pattern from subtlepatterns.com */
</style>
