<template>
  <div id="shows">
    <p class="content-heading">Upcoming shows</p>
    <ul>
      <li><span>9/20 - Slidebar Rock n' Roll Kitchen - Fullerton, CA</span></li>
    </ul>
    <div class="booking-cta">
      <p class="accent-primary bold">Want to book us for your show?</p>
      <p>Please <a class="accent-secondary bold" href="https://www.facebook.com/No-Bathroom-Breaks-246682152550445/">contact us</a> on Facebook.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/vars";

#shows {
  ul {
    a {
      color: $color-white;
    }
    li {
      color: $color-theme-primary;
      span {
        color: $color-white;
      }
    }
  }
  .booking-cta {
    margin-top: 3em;
  }
}
</style>
