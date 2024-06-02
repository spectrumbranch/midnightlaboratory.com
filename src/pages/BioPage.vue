<template>
  <q-page class="row justify-evenly">
    <section class="col subpage">
      <article class="container">
        <h1 class="bio-heading zilla-slab">About Midnight Laboratory</h1>
        <img
          :src="PianoUrl"
          alt="Midnight Laboratory Keyboard"
          aria-hidden="true"
          class="piano-img"
        />
        <p>
          My journey into music began in 2002, when I received my first
          keyboard. As I learned and practiced music theory, I began to discover
          concepts within music that fascinated me, and ultimately led to the
          creation of Midnight Laboratory. Chord progressions, particularly
          nonstandard developments and jazz, have played a major part in
          developing the unique blend of electronica, funk, psychedelic, and
          progressive music in an undefined and fresh genre of its own.
        </p>
        <p>
          The name "Midnight Laboratory" defines not only my more nocturnal
          nature, but the inquisitive side of me as well. Musical and scientific
          experimentation encompasses the height of my passions, and I hope to
          never lose the drive to continue in the pursuit of truth and knowledge
          not only of the world around me, but of that which is inside me as
          well. Going forward, I hope to share this personal odyssey with all of
          you through my music.
        </p>
        <p>Cheers, and thank you for stopping by.</p>
      </article>
    </section>
  </q-page>
</template>

<script lang="ts">
import PianoUrl from '../assets/piano.png';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BioPage',
  components: {},
  setup() {
    return {
      PianoUrl,
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
