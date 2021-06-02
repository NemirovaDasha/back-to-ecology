<template lang="pug">
  .conveyor
    .conveyor__text
      p На заводах производят какие-то вещи. Это могут быть игрушки, бумага, мебель и другие вещи. Dо время изготовление продукта могут получаться дргуие ненужные продукты, например газ, который выходит через трубы или жидкость, которую сбрасывают в реки.
      p Давай посмотрим как работает манипулятор. Разложи игрушки по коробкам.
    .conveyor__background
      .conveyor__boxes
        img.conveyor__box(src="assets/img/game/fabric/game/box.svg")
        img.conveyor__box.m-left(src="assets/img/game/fabric/game/box2.svg")


      img.conveyor__belt(src="assets/img/game/fabric/game/belt.svg")
      img.conveyor__belt.m-right(src="assets/img/game/fabric/game/belt.svg")
      img.conveyor__conveyor(src="assets/img/game/fabric/game/conveyor.svg")
</template>

<script>
export default {}
</script>

<style lang="scss">
.conveyor {
  width:    100%;
  height:   100vh;
  position: relative;

  &__text {
    width:       100%;
    max-width:   1200px;
    padding-top: 40px;
    margin:      0 auto;
    box-sizing:  border-box;

    p {
      margin-bottom: 20px;
    }
  }

  &__belt {
    position: absolute;
    bottom:   0;
    left:     0;
    width:    35vw;

    &.m-right {
      transform: scale(-1, 1);
      left:      auto;
      right:     0;
    }
  }

  &__conveyor {
    position:  absolute;
    bottom:    0;
    left:      50%;
    height:    35vw;
    transform: translateX(-25%);
  }
}
</style>