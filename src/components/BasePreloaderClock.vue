<template lang="pug">
  .preloader__icon
    img.preloader__clock(src="assets/img/preloader/clock.svg")
    img.preloader__clock-center(src="assets/img/preloader/center.svg")
    img.preloader__minute-hand(src="assets/img/preloader/minuteHand.svg")
    img.preloader__hour-hand(src="assets/img/preloader/hourHand.svg")
</template>

<script>
export default {}
</script>

<style lang="scss">
.preloader{
  &__icon {
    position: relative;
    width:    fit-content;
  }

  &__clock-center {
    position:  absolute;
    top:       50%;
    left:      50%;
    z-index:   1;
    transform: translate(-50%, -50%);
  }

  &__minute-hand {
    position: absolute;
    top:      28.5%;
    left:     26%;
  }

  &__hour-hand {
    position: absolute;
    top:      35%;
    left:     50%;
  }
}
</style>