<template>
  <div id="app">
    <Background class="background" />
    <Record :route="$route.path" />
    <Nav class="nav" />
    <transition name="fade">
      <router-view class="content" v-if="contentIsVisible" />
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
  },
  data() {
    return {
      contentIsVisible: false
    }
  },
  mounted() {
    setTimeout(() => this.contentIsVisible = true, 1000);
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "content content"
    "background nav";
  height: 100%;
  margin: 0 auto;
  max-width: 940px;
  width: 90%;
  padding-bottom: 1.5em !important;
  box-sizing: border-box;
  font-family: $font-default;
  font-weight: 300;
  font-size: $font-size-sm;
  @media (min-width: $break-tablet) {
    font-size: $font-size-md;
    width: 80%;
  }
  @media (min-width: $break-laptop) {
    width: 67%;
  }

  color: $color-white;
  text-shadow: 0 0 1px $color-dark-gray;
  position: relative;
  ::selection {
    background: $color-theme-tertiary;
  }

  .background {
    grid-area: background;
    overflow: visible;
    align-self: end;
    z-index: 1;
  }
  .nav {
    grid-area: nav;
    align-self: end;
  }
  .content {
    grid-area: content;
    .content-heading {
      color: $color-theme-primary;
      font-weight: 400;
      font-size: $font-size-md;
      text-transform: uppercase;
      @media (min-width: $break-tablet) {
        font-size: $font-size-lg;
      }
    }
  }
  .main-copy {
    @media (min-width: $break-laptop-lg) {
      padding-right: 8em;
    }
  }
}

/*
 * Utility classes
 */
ul.list-plain {
  list-style: none;
  margin: 0;
  padding: 0;
}
.accent-primary {
  color: $color-theme-primary;
}
.accent-secondary {
  color: $color-theme-secondary;
}
.bold {
  font-weight: 400;
}
.hidden {
  display: none;
}


/*
 * Animations
 */
.fade-enter-active {
  position: absolute;
  transition: opacity $transition-duration*2.5 ease-in;
}
.fade-leave-active {
  position: absolute;
  transition: opacity $transition-duration*2.5 ease-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
