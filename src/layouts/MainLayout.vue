<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-btn stretch flat label="Midnight Laboratory" to="/" />
        </q-toolbar-title>

        <q-separator dark vertical />
        <q-btn stretch flat label="Bio" to="about" />
        <q-separator dark vertical />
        <q-btn stretch flat label="Music" to="music" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
      <q-toolbar class="footer-toolbar">
        <div class="footer-copyright col-md-4">
          <q-toolbar-title>© {{ currentYear }} Copyright Midnight Laboratory</q-toolbar-title>
        </div>
        <div class="footer-social col-md-4">
          <FooterSocialMedia />
        </div>
        <div class="footer-credits col-md-4">
          Site Design:
          <a
            href="https://rachelhirshan.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="R.E.H. Designs (opens in new tab)"
          >
            REH Designs
          </a>
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import FooterSocialMedia from 'components/FooterSocialMedia.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    FooterSocialMedia
  },
  setup () {
    const currentYear = computed(() => new Date().getFullYear())
    return {
      currentYear
    }
  }
});
</script>

<style lang="scss">

.footer-toolbar {
  font-size: 14px;
  justify-content: center;
  align-items: center;
  .footer-copyright .q-toolbar__title {
    font-size: 14px;
  }

  @media (max-width: $breakpoint-sm-max) {
    flex-direction: column;
    .footer-copyright, .footer-social, .footer-credits {
      padding: 6px;
    }
  }
}




.footer-social {
  text-align: center;
}

.footer-credits {
  text-align: center;

  @media (min-width: $breakpoint-md-min) {
    text-align: right;
  }
}

.footer-copyright{
  text-align: center;

  @media (min-width: $breakpoint-md-min) {
    text-align: left;
  }
}
</style>
