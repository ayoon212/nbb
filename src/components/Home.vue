<template>
  <div id="home">
    <p class="content-heading">No Bathroom Breaks</p>
    <div class="main-copy">
      <p>A brand new band from Long Beach, serving up good vibes with jazz and hip-hop.</p>
      <p>We're currently working on our first album. Please join our mailing list to stay updated!</p>
    </div>
    <cta />
  </div>
</template>

<script>
import Cta from "./Cta.vue";

export default {
  components: {
    Cta
  }
};
</script>
