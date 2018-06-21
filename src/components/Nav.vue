<template>
  <div id="nav">
    <transition name="nav-fade">
      <ul class="list-plain" v-if="isVisible">
        <li>
          <a class="icon fb" href="https://www.facebook.com/No-Bathroom-Breaks-246682152550445/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 60.734 60.733" style="enable-background:new 0 0 60.734 60.733;" xml:space="preserve"><g><path d="M57.378,0.001H3.352C1.502,0.001,0,1.5,0,3.353v54.026c0,1.853,1.502,3.354,3.352,3.354h29.086V37.214h-7.914v-9.167h7.914   v-6.76c0-7.843,4.789-12.116,11.787-12.116c3.355,0,6.232,0.251,7.071,0.36v8.198l-4.854,0.002c-3.805,0-4.539,1.809-4.539,4.462   v5.851h9.078l-1.187,9.166h-7.892v23.52h15.475c1.852,0,3.355-1.503,3.355-3.351V3.351C60.731,1.5,59.23,0.001,57.378,0.001z" fill="#FFFFFF"/></g></svg>
          </a>
          <a class="icon ig" href="https://www.instagram.com/nobathroombreaks" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 169.063 169.063" style="enable-background:new 0 0 169.063 169.063;" xml:space="preserve"><g><path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752   c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407   c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752   c17.455,0,31.656,14.201,31.656,31.655V122.407z" fill="#FFFFFF"/><path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561   C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561   c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z" fill="#FFFFFF"/><path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78   c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78   C135.661,29.421,132.821,28.251,129.921,28.251z" fill="#FFFFFF"/></g></svg>
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

  .icon {
    padding-left: 16px;
    > svg {
      height: $font-size-md;
      width: $font-size-md;
      path {
        transition: fill $transition-duration;
      }
      &:hover path {
        fill: $color-theme-primary;
      }
    }
  }
}

.nav-fade-enter li, .nav-fade-leave-to li {
  opacity: 0;
  transform: translateX(-10%);
}
.list-plain > li {
  transition: opacity 1s ease-out, transform 0.6s ease-out;
  &:first-child {
    transition-delay: 1.1s;
  }
  &:nth-child(2) {
    transition-delay: 1.18s;
  }
  &:nth-child(3) {
    transition-delay: 1.26s;
  }
  &:nth-child(4) {
    transition-delay: 1.34s;
  }
  &:nth-child(5) {
    transition-delay: 1.42s;
  }
}
</style>
