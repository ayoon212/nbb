<template>
  <div id="app">
    <!-- Header? -->
    <Background />
    <Home />
    <!-- Nav -->
    <!-- Footer -->
  </div>
</template>

<script>
import Background from "./components/Background.vue";
import Home from "./components/Home.vue";

export default {
  name: "app",
  components: {
    Background,
    Home
  }
}
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
}
body {
  /* Background image from Toptal Subtle Patterns */
  background-image: url("assets/background/black-Linen.png");
}
</style>
