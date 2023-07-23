<template>
  <article class="albums sub-page">
    <section class="container">
      <h1 class="h1 album-header">Music by Midnight Laboratory</h1>
      <div class="row">
        <div class="col-md-6 album-section">
          <router-link role="link" to="/potent-flask" class="album-link">
            <img class="album-img" src="../assets/images/potent_flask.svg" alt="Potent Flask Album Cover" aria-hidden="true" />
            <h2>Potent Flask</h2>
          </router-link>
        </div>
        <div class="col-md-6 album-section">
          <router-link role="link" to="/commissions-vol-I" class="album-link">
            <img class="album-img" src="../assets/images/commissions_volI.png" alt="Commissions Volume I Album Cover" aria-hidden="true" />
            <h2>Commissions Volume I</h2>
          </router-link>
        </div>
      </div>
    </section>
    <hr>
    <section class="container">
      <h2 class="h2">Latest Singles</h2>
      <div class="soundcloud-player">
        <iframe title="Soundcloud Player" width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/51271767&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      </div>      
    </section>
  </article>
</template>

<script>

export default {
  name: 'albums'
}
</script>

<style scoped lang="less">
@import '~../less/variables.less';
@import '~../less/global.less';

.albums{

  hr {
    border-bottom: 5px solid @xdarkgray;
  }

  .album-section {
    h2 {
      margin: 1rem 0px 2rem 0px;
    }
  }

  .album-link {
    text-decoration: none;
    &:hover {
      .album-img {
        opacity: .8;
      }

      h2 {
        color: @green;
      }
    }
  }

  .album-img {
    width: 100%;
    max-width: 300px;
    display: block;
    background: @darkgray;
    box-shadow: 0px 0px 45px @black;
    margin: 0px auto 25px auto;

    @media (min-width: @min-device-md) {
      max-width: 500px;
    }
  }

  .soundcloud-player{
    max-width: 800px;
    margin: 0 auto;
  }
}
</style>
