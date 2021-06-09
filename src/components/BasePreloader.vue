<template lang="pug">
  .preloader
    BasePreloaderClock
</template>

<script>
import BasePreloaderClock from "./BasePreloaderClock";
export default {
  components: {BasePreloaderClock}
}
</script>

<style lang="scss">
.preloader {
  position:        fixed;
  top:             0;
  bottom:          0;
  left:            0;
  right:           0;
  display:         none;
  flex-direction:  column;
  justify-content: center;
  align-items:     center;
  z-index:         10000;
  background:      $color-background;
}

</style>