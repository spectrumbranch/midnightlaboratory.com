<template>
  <footer id="the-footer">
    <div class="container">
      <div class="row">
        <div class="copyright col-lg-4">
          © {{ currentYear }} Copyright Midnight Laboratory
        </div>
        <div class="social-media col-lg-4">
          <social-media></social-media> 
        </div>
        <div class="site-design col-lg-4">
          Site Design:
          <a target="_blank" 
            class="" 
            href="https://rachelhirshan.com/" 
            rel="noopener noreferrer" 
            aria-label="R.E.H. Designs (opens in new tab)">
            REH Designs
          </a>
        </div>
      </div> 
    </div>
  </footer>
</template>

<script>
import SocialMedia from '@/components/SocialMedia'

export default {
  name: 'theFooter',
  components: {
    SocialMedia
  },
  props: {
    msg: String
  },
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="less">
@import '~../less/variables.less';
@import '~../less/global.less';

#the-footer{
  background-color: @xdarkgray;
  padding: 7px 0px;
  width: 100%;
  bottom: 0px;
  font-size: 14px;

  .row {
    justify-content: center;
    align-items: center;
  }

  .social-icon {
    display: inline-block;
    margin: 0px 10px;
    font-size: 1.25rem;
  }

  .social-media {
    text-align: center;
  }

  .site-design {
    text-align: center;

    @media (min-width: @min-device-lg) {
      text-align: right;
    }    
  }

  .copyright{
    text-align: center;

    @media (min-width: @min-device-lg) {
      text-align: left;
    }      
  }
}
</style>
