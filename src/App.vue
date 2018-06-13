<template>
  <div id="app">
    <!-- Header? -->
    <!-- Background "NBB" -->
    <Home />
    <!-- Nav -->
    <!-- Footer -->
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: "app",
  components: {
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
  background-image: url("assets/background/black-Linen.png");
}
</style>
