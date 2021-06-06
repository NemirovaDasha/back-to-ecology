<template lang="pug">
  .train-cloud(
    :class="cloudPositionClass"
  )
    .train-cloud__clouds
      transition(name="cloud")
        img.train-cloud__main(
          v-show="showClouds"
          src="assets/img/game/train/clouds/cloud.svg"
          alt="Облако"
        )
      transition(name="cloud")
        img.train-cloud__mini.m-1(
          v-show="showMiniCloud1"
          src="assets/img/game/train/clouds/mini1.svg"
          alt="Облако"
        )
      transition(name="cloud")
        img.train-cloud__mini.m-2(
          v-show="showMiniCloud2"
          src="assets/img/game/train/clouds/mini2.svg"
          alt="Облако"
        )
      transition(name="cloud")
        img.train-cloud__mini.m-3(
          v-show="showMiniCloud3"
          src="assets/img/game/train/clouds/mini3.svg"
          alt="Облако"
        )

</template>

<script>
export default {
  props: {
    positionClass: {
      type: String,
      require: true
    },
    showCloud: {
      type: Boolean,
      require: true
    }
  },
  data() {
    return {
      showMiniCloud1: false,
      showMiniCloud2: false,
      showMiniCloud3: false
    }
  },
  computed: {
    cloudPositionClass() {
      const classNumber = Number(this.positionClass.split('human')[1]);
      return (classNumber === 1 || classNumber === 7) ? this.positionClass : 'm-top ' + this.positionClass;
    },
    showClouds() {
      if (this.showCloud) {
        setTimeout(() => this.showMiniCloud1 = true, 100);
        setTimeout(() => this.showMiniCloud2 = true, 250);
        setTimeout(() => this.showMiniCloud3 = true, 500);
        return true;
      } else {
        setTimeout(() => this.showMiniCloud1 = false, 100);
        setTimeout(() => this.showMiniCloud2 = false, 250);
        setTimeout(() => this.showMiniCloud3 = false, 500);
        return false;
      }
    }
  }
}
</script>

<style lang="scss">
.train-cloud {
  position: absolute;
  width:    100%;
  z-index:  1000;

  &.m-top {
    padding-bottom: 1vw;
  }

  &__clouds {
    position:  relative;
    width:     70%;
    height:    100%;
    min-width: 84px;
    margin:    0 auto 20%;

    @include w-from($screen-lg){
      min-width: 5.95vw;
    }
  }

  &__main {
    width:     100%;
    opacity:   0;
  }

  &__mini {
    position:  absolute;
    width:     20%;
    min-width: 24px;
    opacity:   0;

    @include w-from($screen-lg){
      min-width: 1.7vw;
    }

    &.m-1 {
      bottom: 115%;
      left:   80%;
    }

    &.m-2 {
      bottom: -30%;
      left:   65%;
    }

    &.m-3 {
      bottom: 40%;
      left:   -45%;
    }
  }
}

.cloud-enter-active {
  animation: cloud-in 0.6s;
}

@keyframes cloud-in {
  0% {
    transform: scale(0);
    opacity:   1;
  }
  50% {
    transform: scale(1.1);
    opacity:   1;
  }
  100% {
    transform: scale(0.8);
    opacity:   0;
  }
}
</style>