<template>
  <div id="app">
    <navigation></navigation>
    <router-view/>
    <the-footer></the-footer>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation'
  import TheFooter from '@/components/TheFooter'
  
  export default {
  name: 'app',
  components: {
    Navigation,
    TheFooter
  },
}

</script>

<style lang="less">
@import '~./less/variables.less';
@import '~./less/global.less';

body {
  background: url("assets/background-pattern.png") @darkgray;
}

#app {
  font-family: @font-main;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(255, 255, 255, 0.5);
}
</style>
