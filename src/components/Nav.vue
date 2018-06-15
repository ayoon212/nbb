<template>
  <div id="nav">
    <transition name="nav-fade">
      <ul class="list-plain" v-if="isVisible">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/media">Media</router-link></li>
        <li><router-link to="/shows">Shows</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false
    }
  },
  mounted() {
    this.isVisible = true;
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/vars";

#nav {
  position: absolute;
  right: $page-gutter;
  bottom: $page-gutter;
  text-align: right;

  ul {
    li {
      padding: 5px 10px;
      a {
        color: $color-white;
        text-decoration: none;
        transition: color $transition-duration ease-out;
        &:hover {
          cursor: pointer;
          color: $color-theme-primary;
        }
        &.router-link-exact-active {
          color: $color-theme-primary;
        }
      }
    }
  }
}

.nav-fade-enter li, .nav-fade-leave-to li {
  opacity: 0;
  transform: translateX(-25%);
}
.list-plain > li {
  transition: opacity 1s ease-out, transform 0.6s ease-out;
  &:first-child {
    transition-delay: 1.7s;
  }
  &:nth-child(2) {
    transition-delay: 1.78s;
  }
  &:nth-child(3) {
    transition-delay: 1.86s;
  }
  &:nth-child(4) {
    transition-delay: 1.94s;
  }
  &:nth-child(5) {
    transition-delay: 2.02s;
  }
}
</style>
