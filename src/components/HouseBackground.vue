<template lang="pug">
  .house__background
    .house__trees
      img(src="assets/img/game/house/trees/tree1_1.svg")
      img(src="assets/img/game/house/trees/tree2.svg")
      img(src="assets/img/game/house/trees/tree3.svg")


    img.house__table(src="assets/img/game/house/table.svg")
    img.house__glade(src="assets/img/game/house/background.svg")
</template>

<script>
export default {}
</script>

<style lang="scss">
.house {
  &__glade {
    position:   absolute;
    bottom:     0;
    left:       0;
    right:      0;
    width:      100vw;
    object-fit: cover;
  }

  &__trees {
    img {
      position: absolute;
      z-index:  100;

      &:first-child {
        left:       0;
        //bottom:     -2vw;
        bottom:     0;
        height:     65vw;
        max-height: 109vh;
        //transform:  translateX(-53%);
      }

      &:nth-child(2) {
        left:       0;
        bottom:     0;
        height:     42vw;
        max-height: 79vh;
        z-index:    99;
      }

      &:last-child {
        right:      0;
        bottom:     8vw;
        height:     45vw;
        max-height: 75vh;
      }
    }
  }

  &__table {
    position: absolute;
    bottom:   5vw;
    right:    8vw;
    height:   14vw;
    z-index:  101;
  }
}
</style>