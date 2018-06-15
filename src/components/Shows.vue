<template>
  <div id="shows">
    <p class="content-heading">Upcoming shows</p>
    <ul>
      <li><span>6/24 - Ashley's on 4th - Long Beach, CA</span></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/vars";

#shows {
  li {
    color: $color-theme-primary;
    span {
      color: $color-white;
    }
  }
  .accent-primary {
    color: $color-theme-primary;
  }
  .accent-secondary {
    color: $color-theme-secondary;
  }
}
</style>
