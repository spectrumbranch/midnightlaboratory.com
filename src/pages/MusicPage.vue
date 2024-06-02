<template>
  <q-page class="row justify-evenly">
    <section class="col subpage">
      <article class="container">
        <h1 class="bio-heading zilla-slab">Music by Midnight Laboratory</h1>
      </article>
    </section>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MusicPage',
  components: {},
  setup() {
    return {
      //
    };
  },
});
</script>

<style lang="scss">
.bio-heading {
  text-align: center;
  color: $primary-text;
  font-weight: 300;
  font-size: 2.5rem;
}

.piano-img {
  margin: 25px auto;
  display: block;
  width: 100%;
  max-width: 690px;
  border-radius: 39px;
}

.subpage {
  padding: 40px 0 30px 0;
}
</style>
