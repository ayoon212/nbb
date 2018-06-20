<template>
  <div id="nav">
    <transition name="nav-fade">
      <ul class="list-plain" v-if="isVisible">
        <li>
          <a href="https://www.facebook.com/No-Bathroom-Breaks-246682152550445/" target="_blank">
            <svg class="icon-fb" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 60.734 60.733" style="enable-background:new 0 0 60.734 60.733;" xml:space="preserve"><g><path d="M57.378,0.001H3.352C1.502,0.001,0,1.5,0,3.353v54.026c0,1.853,1.502,3.354,3.352,3.354h29.086V37.214h-7.914v-9.167h7.914   v-6.76c0-7.843,4.789-12.116,11.787-12.116c3.355,0,6.232,0.251,7.071,0.36v8.198l-4.854,0.002c-3.805,0-4.539,1.809-4.539,4.462   v5.851h9.078l-1.187,9.166h-7.892v23.52h15.475c1.852,0,3.355-1.503,3.355-3.351V3.351C60.731,1.5,59.23,0.001,57.378,0.001z" fill="#FFFFFF"/></g></svg>
          </a>
        </li>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/media">Media</router-link></li>
        <li><router-link to="/shows">Shows</router-link></li>
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
  text-align: right;
  @media (min-width: $break-phone-md) {
    font-size: $font-size-md;
  }
  @media (min-width: $break-laptop-lg) {
    font-size: $font-size-lg;
  }

  ul {
    li {
      padding-top: 0.25em;
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

  .icon-fb {
    height: $font-size-md;
    width: $font-size-md;
    @media (min-width: $break-tablet) {
      height: $font-size-lg;
      width: $font-size-lg;
    }
    path {
      transition: fill $transition-duration;
    }
    &:hover path {
      fill: $color-theme-primary;
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
