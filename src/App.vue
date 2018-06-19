<template>
  <div id="app">
    <Background class="background" />
    <Record />
    <Nav class="nav" />
    <transition name="fade">
      <router-view class="content" />
    </transition>
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
  height: 100%;
}
body {
  /* Background image from Toptal Subtle Patterns */
  background-image: url("assets/background/black-Linen.png");
}
#app {
  font-family: $font-default;
  font-weight: 300;
  font-size: 32px;
  color: $color-white;
  padding: 0 $page-gutter;
  position: relative;
  ::selection {
    background: $color-theme-tertiary;
  }

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "content content"
    "background nav";
  height: 100%;
  margin: 0 auto;
  max-width: 1040px;
  width: 100%;
  padding-bottom: 1.5em;
  box-sizing: border-box;
  @media (min-width: 768px) {
    width: 80%;
  }
  @media (min-width: 1024px) {
    width: 67%;
  }

  .background {
    grid-area: background;
    overflow: visible;
    align-self: end;
  }
  .nav {
    grid-area: nav;
    align-self: end;
  }
  .content {
    grid-area: content;
    font-size: 24px;
    max-width: 800px;
    .content-heading {
      font-weight: 400;
      font-size: 32px;
      color: $color-theme-primary;
      text-transform: uppercase;
    }
  }
}

ul.list-plain {
  list-style: none;
  margin: 0;
  padding: 0;
}


/*
 * Animations
 */
.fade-enter-active {
  position: absolute;
  transition: opacity $transition-duration ease-in;
}
.fade-leave-active {
  position: absolute;
  transition: opacity $transition-duration ease-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
