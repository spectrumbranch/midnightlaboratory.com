<template>
  <b-navbar id="nav" toggleable="lg" type="dark" variant="info" role="main">
    <div class="container">
      <b-navbar-brand role="banner" aria-labelledby="brandName">
        <router-link to="/">
          <span aria-hidden="true">Midnight Laboratory</span>
          <span id="brandName" class="sr-only">Midnight Laboratory (Links to Home Page)</span>
        </router-link>      
      </b-navbar-brand>

      <b-navbar-toggle target="nav_collapse" aria-label="Toggle Navigation" />

      <b-collapse is-nav id="nav_collapse" role="navigation">
        <b-navbar-nav class="ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Bio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/albums">Music</router-link>
          </li>                  
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
  export default {
    name: 'navigation',
    props: {
      msg: String
    }
  }
</script>

<style lang="less">
@import '~../less/variables.less';
@import '~../less/global.less';

#nav {
  background-color: @xdarkgray!important;

  a {
    text-decoration: none;
  }
}

.navbar-brand {
  a {
    color: @green;
    font-size: 1.4rem;
    font-family: 'Zilla Slab', serif;

    &:hover {
      text-decoration: none;
    } 
  }
}

.nav-item {
  &.icon {
    font-size: 22px;

    &:last-child {
      .nav-link {
        padding-left: 10px;
      }
    }
  }
}

.navbar-nav {
  align-items: center;
} 
</style>
