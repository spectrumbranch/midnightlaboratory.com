<template>
  <a target="_blank" 
    class="store-logo"
    :href="link"
    :aria-label="ariaLabel"
    rel="noopener noreferrer">
    <img class="store-logo-img" :src="image" :alt="altText" />
  </a>
</template>

<script>

export default {
  name: 'StoreIcons',
  props: {
    link: String,
    ariaLabel: String,
    image: String,
    altText: String,
  }
}
</script>

<style lang="less">
@import '~../less/variables.less';
@import '~../less/global.less';

.store-logo {
  display: block;
  text-align: center;
}

.store-logo-img {
  min-width: 165px;
  max-width: 165px;
  width: 100%;
  text-align: center;
}
</style>
