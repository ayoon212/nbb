<template>
  <div id="about">
    <p class="content-heading">About</p>
    <p class="main-copy">No Bathroom Breaks started in the back of a tour van, driving across the state of Pennsylvania. NBB blends jazz, hip-hop, and rock with chill and reflective vibes. We invite you to listen to the beats and find connection to your own life.</p>
    <p>NBB is:</p>
    <ul class="list-plain">
      <li><span class="bold colored">Dustin Park</span><span class="instrument">MC</span></li>
      <li><span class="bold colored">Andy Yoon</span><span class="instrument">Guitar</span></li>
      <li><span class="bold colored">Harry Ostrander</span><span class="instrument">Trumpet</span></li>
      <li><span class="bold colored">Lawrence Pi</span><span class="instrument">Tenor Sax</span></li>
      <li><span class="bold colored">Marc Encabo</span><span class="instrument">Keys</span></li>
      <li><span class="bold colored">Jay Hemphill</span><span class="instrument">Bass</span></li>
      <li><span class="bold colored">Brian Gazo</span><span class="instrument">Drums</span></li>
      <li class="hidden"><!-- placeholder --></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/vars";

#about {
  .main-copy {
    @media (min-width: $break-laptop-lg) {
      padding-right: 6em;
    }
  }
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 1em;
      flex: 0 0 30%;
      @media (min-width: $break-tablet) {
        padding-left: 1em;
        flex: 0 0 25%;
      }
      @media (min-width: $break-laptop) {
        padding-left: 1em;
        flex: 0 0 20%;
      }

      .colored {
        color: $color-theme-primary;
      }
    }
  }
}
</style>
