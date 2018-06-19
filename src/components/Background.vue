<template>
  <div>
    <!-- SEO? -->
    <h1 class="hidden">No Bathroom Breaks</h1>

    <transition name="bg-fade">
      <div id="background" v-if="isVisible">
        <div class="first">No</div>
        <div class="second">Bathroom</div>
        <div class="last-row">
          <span class="third">Breaks</span>
          <span class="fourth location">Long Beach, CA</span>
        </div>
      </div>
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
};
</script>

<style lang="scss" scoped>
@import "../styles/vars";

.hidden {
  display: none;
}

#background {
  > div {
    color: $color-white;
    font-family: "Limelight", sans-serif;
  }
  .first, .second, .third {
    font-size: $font-size-lg;
    @media (min-width: $break-phone-lg) {
      font-size: $font-size-xl;
    }
    @media (min-width: $break-laptop-lg) {
      font-size: $font-size-huge;
    }
  }

  .last-row {
    white-space: nowrap;
    @media (min-width: $break-laptop) {
      /* Align bottom with bottom of nav (different line-heights) */
      margin-bottom: -10px;
    }
    @media (min-width: $break-laptop-lg) {
      margin-bottom: -20px;
    }

    .location {
      display: block;
      font-family: $font-default;

      @media (min-width: $break-laptop) {
        display: inline-block;
        margin-left: 3em;
      }
    }
  }
}

.first {
  transition: opacity 1.8s ease 0.15s;
}
.second {
  transition: opacity 2.2s ease 0.5s;
}
.third {
  transition: opacity 1.6s ease 1s;
}
.fourth {
  display: inline-block;
  transition: opacity 1s ease-out 1.5s, transform 0.6s ease-out 1.5s;
}
.bg-fade-enter .first, .bg-fade-leave-to .first,
.bg-fade-enter .second, .bg-fade-leave-to .second,
.bg-fade-enter .third, .bg-fade-leave-to .third,
.bg-fade-enter .fourth, .bg-fade-leave-to .fourth {
  opacity: 0;
}
.bg-fade-enter .fourth, .bg-fade-leave-to .fourth {
  transform: translateX(-15%);
}
</style>
