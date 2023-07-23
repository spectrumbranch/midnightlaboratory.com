<template>
  <article class="albums sub-page">
    <section class="container">
      <h1 class="h1 album-header">Potent Flask</h1>
      <div class="row">
        <div class="col-xl-4 col-lg-5">         
          <img class="album-img" src="../assets/images/potent_flask.svg" alt="Potent Flask Album Cover" aria-hidden="true" />
          <p class="album-art">Album artwork created by: 
            <a href="https://rachelhirshan.com/" 
              target="_blank"         
              rel="noopener noreferrer" 
              aria-label="R.E.H. Designs (opens in new tab)">REH Designs</a>
          </p>
          <div class="album-tracks">
          <h2 class="h3">Track List</h2>
            <ol>
              <li>Propagation</li>
              <li>The Midnight Laboratory</li>
              <li>Short and Sweet<br> (feat. Jonny Peroxide on electric guitar)</li>
              <li>Potent Flask</li>
              <li>Afterglow</li>
              <li>Madness</li>
              <li>Mellifluous Dream I</li>
              <li>Mellifluous Dream II<br> (feat. Rachel Hirshan on flute)</li>
              <li>Mellifluous Dream III</li>
              <li>Realization</li>
              <li>Rebuild</li>
              <li>Reflection</li>
              <li>Amorphous Victory</li>
              <li>Seaside</li>
            </ol>
          </div>
          <store-icons-data layout="oneColumn" album-id="potentFlask"></store-icons-data>  
        </div>
        <div class="col-xl-8 col-lg-7">
          <div class="album-description">
            <p>This album is intended to be a progressive, mostly instrumental journey through a surreal, symbolic narrative inspired by thoughts and experiences I’ve had throughout my life. The ambiguity behind the track titles and melodic theme is intentional, in hopes that it will encourage the listener to apply their own mental imagery and meaning to the provided motifs and musical expressions.</p>
            <p>If someone is looking for a more concrete explanation, however, I have written a potential explication:</p>
            <div class="album-story-text">
              <p>In a semi-metaphysical realm of the mind, a young scientific individual learns how to develop new ideas in their laboratory. The euphoria of discovery crescendos briefly until it is tragically cut short by the Wobberjacky, a destructive force of unknowable motives and intentions. The Wobberjacky enters the lab on a path of annihilation, leading to the near extinction of the protagonist’s creativity and inspiration.</p>
              <p>Our protagonist narrowly escapes. From the remains of the laboratory, they formulate a solution and put it into a rather potent flask to combat their nightmarish foe. To the surprise of the protagonist, imbibing the contents of the flask instead causes a reality-altering psychedelic effect.</p>
              <p>Sobering up from the solution’s psychedelic trip, the protagonist is left in a state of post-psychotic afterglow, where they exist in a short-lived peace before succumbing to the madness of the situation. Their body’s natural response to this introverted anxiety is a mellifluous dreamlike state in which they face much of their subconscious, including a vision of a peaceful seaside and then a sudden growth of chaos.</p>
              <p>It is from this chaos that the protagonist violently awakens into a harsh realization of what their life has become. They can run all they like, but the Wobberjacky will continue its pursuit unless they make real, impactful changes in their life.</p>
              <p>So, they focus on rebuilding. They project a reflection of themselves in a body of water, leading to a metaphysical self-analysis and the realization that dividing light and dark can lead to a fractured sense of self. The protagonist sees a duplicity in the choices they must make to find peace. They could enter the water and escape into a kind of peace or stand and fight the nightmarish Wobberjacky head-on.</p>
              <p>The listener is left to their own interpretation of the path to victory forged by the protagonist, as the end sees them finding themselves at the peaceful seaside after all.</p>
            </div>
          </div>
          <div class="album-lyrics">
            <h2 class="h3">Lyrics</h2>
            <p class="text-center">Only 2 songs have lyrics</p>
            <h3 class="h4">Mellifluous Dream I</h3>
            <p>
              <span>If I could say</span>
              <span>That I would take you away</span>
              <span>Would you come along with me?</span>
            </p>
            <p>
              <span>Where our music could play</span>
              <span>Every day is our way</span>
              <span>Is it something you can see?</span>
            </p>
            <h3 class="h4">Reflection</h3>
            <p>
              <span>A reflection is where we see ourselves</span>
              <span>like others see us</span>
              <span>Where we live to exist</span>
              <span>and observe that existence</span>
            </p>
            <p>
              <span>Paint your reflection in a ripple of the sea</span>
              <span>Look at yourself and know that this, yourself, is me</span>
              <span>Blessed and cursed by analytical potential</span>
              <span>Locked away for a lifetime, holding the key</span>
            </p>
            <p>&lt; solo section &gt;</p>
            <p>
              <span>A reflection shows what you are in you;</span>
              <span>The dark and light in you; the synergy.</span>
            </p>
            <p>
              <span>But when there’s a conflict with our inner self truth</span>
              <span>When will we know that we have finally reached our goals?</span>
              <span>Paint your reflection in a ripple of the sea</span>
              <span>Paint your reflection in the sea</span>
            </p>
            <p>
              <span>When your past comes back to haunt you</span>
              <span>It should remind you that you are free</span>
            </p>
            <p>
              <span>(To face oneself after being distanced for so long</span>
              <span>There will be constants changing … definitely)</span>
            </p>
            <p>
              <span>(repeat)</span>
              <span>I’m holding back myself from my self</span>
            </p>
        </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import StoreIconsData from '@/components/StoreIconsData'  
export default {
  name: 'albums',
  components: {
    StoreIconsData
  }
}
</script>

<style scoped lang="less">
@import '~../less/variables.less';
@import '~../less/global.less';

.albums{
  .h3 {
    margin: 0px;
    padding-bottom: .5rem;
  }

  .row {
    margin-bottom: 25px;
   }

  p{
    span{
      display: block;
    }
   }

  .album-art {
    font-size: 0.9rem;
    text-align: center;
  }

  .album-tracks {
    font-size: 0.9rem;
    max-width: 375px;
    margin: auto;
    ol {
      padding-left: 25px;
    }
   }

  .album-story-text {
    font-style: italic;
    margin-top: 35px;
  }

   .album-lyrics {
    text-align: center;
   }

   hr {
    border-bottom: 5px solid @xdarkgray;
   }

  .album-img {
    width: 100%;
    max-width: 375px;
    display: block;
    background: @darkgray;
    box-shadow: 0px 0px 45px @black;
    margin: 0px auto 10px auto;
  }
}
</style>
