<template>
  <transition name="bg-fade">
    <div id="background" v-if="isVisible">
      <div class="first">N<span>o</span></div>
      <div class="second">B<span>athroom</span></div>
      <div class="third">B<span>reaks</span></div>
    </div>
  </transition>
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

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Playfair+Display:700');

#background {
  color: #fff;
  font-family: "Playfair Display", serif;
  font-size: 8em;
  line-height: 1.25em;

  position: absolute;
  left: 0.5em;
  bottom: 0.5em;
}

.first {
  transition: opacity 1.8s ease 0.25s;
}
.second {
  transition: opacity 2.2s ease 0.5s;
}
.third {
  transition: opacity 1.6s ease 1s;
}
.bg-fade-enter .first, .bg-fade-leave-to .first,
.bg-fade-enter .second, .bg-fade-leave-to .second,
.bg-fade-enter .third, .bg-fade-leave-to .third {
  opacity: 0;
}
</style>