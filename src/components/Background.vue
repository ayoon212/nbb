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
@import "../styles/vars";

#background {
  color: #fff;
  font-family: "Limelight", sans-serif;
  font-size: 95px;

  position: absolute;
  left: $page-gutter;
  bottom: $page-gutter;
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
