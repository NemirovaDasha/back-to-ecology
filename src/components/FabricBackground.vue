<template lang="pug">
  .fabric__container
    .fabric__smoke-container
      img.fabric__smoke3(src="assets/img/game/main/smoke/smoke3.svg")
      img.fabric__smoke2(src="assets/img/game/main/smoke/smoke2.svg")
      img.fabric__smoke1(src="assets/img/game/main/smoke/smoke1.svg")
    .fabric__smoke-container
      img.fabric__smoke3(src="assets/img/game/main/smoke/smoke3.svg")
      img.fabric__smoke2(src="assets/img/game/main/smoke/smoke2.svg")
      img.fabric__smoke1(src="assets/img/game/main/smoke/smoke1.svg")
    .fabric__smoke-container
      img.fabric__smoke3(src="assets/img/game/main/smoke/smoke3.svg")
      img.fabric__smoke2(src="assets/img/game/main/smoke/smoke2.svg")
      img.fabric__smoke1(src="assets/img/game/main/smoke/smoke1.svg")
    img.fabric__build(src="assets/img/game/fabric/fabric.svg")

    img.fabric__hero(src="assets/img/game/fabric/hero.svg")
</template>

<script>
export default {}
</script>

<style lang="scss">
.fabric {
  position: relative;
  width:    100%;
  height:   100vh;

  &__container {
    position:       fixed;
    top:            0;
    bottom:         0;
    left:           0;
    right:          0;
    z-index:        100;
    pointer-events: none;
  }

  &__hero {
    position: absolute;
    bottom:   0;
    left:     0;
    height:   32vw;
    z-index:  10;
  }

  &__build {
    position: absolute;
    right:    5vw;
    bottom:   2vw;
    width:    64vw;
    z-index:  10;
  }

  &__smoke-container {
    position: absolute;
    right:    27vw;
    bottom:   36.5vw;

    &:first-child {
      right: 35vw;
    }

    &:nth-child(3) {
      right: 19vw;
    }

    img {
      margin: 0 auto;
    }

  }

  &__smoke1 {
    width:     6vw;
    animation: smoke1 3s infinite ease-in;
  }

  &__smoke2 {
    width:     4.5vw;
    animation: smoke2 3s infinite ease-in;
  }

  &__smoke3 {
    width:     3.8vw;
    animation: smoke3 3s infinite ease-in;
  }
}
</style>