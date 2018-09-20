<template>
  <div id="media">
    <p class="content-heading">Media</p>
    <p>Expect our debut album in October 2018.</p>
    <p>Check out some shots from our studio session below.</p>
    <div class="image-container" @click="advanceImage()" @mouseenter="stopAutoplay()" @mouseleave="autoplay()">
      <transition-group name="fade">
        <img :key="0" v-if="activeImage===0" src="../assets/images/media-0.jpg" alt="Dustin" />
        <img :key="1" v-if="activeImage===1" src="../assets/images/media-1.jpg" alt="Jay" />
        <img :key="2" v-if="activeImage===2" src="../assets/images/media-2.jpg" alt="Brian" />
        <img :key="3" v-if="activeImage===3" src="../assets/images/media-3.jpg" alt="Lawrence" />
        <img :key="4" v-if="activeImage===4" src="../assets/images/media-4.jpg" alt="Harry" />
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeImage: 0,
      autoplayRef: null
    }
  },
  mounted() {
    this.autoplay();
  },
  methods: {
    autoplay() {
      this.autoplayRef = setTimeout(() => {
        this.advanceImage();
        this.autoplay();
      }, 6000);
    },
    stopAutoplay() {
      clearTimeout(this.autoplayRef);
    },
    advanceImage() {
      if (this.activeImage === 4) {
        this.activeImage = 0;
      } else {
        this.activeImage += 1;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/vars";

#media {
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    // absolute to make it work with existing fade animation
    position: absolute;
    transform: translateX(-50%);
    max-width: 100%;
    max-height: 60%;
  }
}
</style>
