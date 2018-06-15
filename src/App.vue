<template>
  <div id="app">
    <Background />
    <Record />
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Background from "./components/Background.vue";
import Home from "./components/Home.vue";
import Nav from "./components/Nav.vue";
import Record from "./components/Record.vue";

export default {
  name: "app",
  components: {
    Background,
    Home,
    Nav,
    Record
  }
}
</script>

<style lang="scss">
@import "./styles/vars";

html, body {
  margin: 0;
  padding: 0;
}
body {
  /* Background image from Toptal Subtle Patterns */
  background-image: url("assets/background/black-Linen.png");
}
#app {
  font-family: "Lato", sans-serif;
  font-size: 32px;
  color: $color-white;
  padding: 0 $page-gutter;
}

ul.list-plain {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
