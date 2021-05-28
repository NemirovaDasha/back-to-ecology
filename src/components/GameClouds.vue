<template lang="pug">
  .game-clouds__container(id='clouds')
    .game-clouds__cloud-1(data-depth="0.2")
      img(src="assets/img/game/clouds/cloud-1.svg")
    .game-clouds__cloud-2(data-depth="0.1")
      img(src="assets/img/game/clouds/cloud-2.svg")
    .game-clouds__cloud-3(data-depth="0.4")
      img(src="assets/img/game/clouds/cloud-4.svg")
    .game-clouds__cloud-4(data-depth="0.2")
      img(src="assets/img/game/clouds/cloud-5.svg")
    .game-clouds__clouds(data-depth="0.1")
      .game-clouds__box
        img(src="assets/img/game/clouds/clouds.svg")
</template>

<script>
export default {}
</script>

<style lang="scss">
.game-clouds {
  &__container {
    position: absolute;
    top:      0;
    bottom:   0;
    left:     0;
    right:    0;
  }

  &__clouds {
    position: absolute;
    height:   100%;
    width:    100%;
    //padding-top:  42vh;
    //padding-left: 6vw;

    img {
      width: 90vw;
    }
  }

  &__cloud-1 {
    position:     absolute;
    padding-top:  22vh;
    padding-left: 4px;

    img {
      width: 16vw;
    }
  }

  &__cloud-2 {
    position:     absolute;
    padding-top:  23px;
    padding-left: 7vw;

    img {
      width: 26vw;
    }
  }

  &__cloud-3 {
    position:     absolute;
    padding-top:  25px;
    padding-left: 55vw;

    img {
      width: 14vw;
    }
  }

  &__cloud-4 {
    position:     absolute;
    padding-top:  14vh;
    padding-left: 68vw;

    img {
      width: 30vw;
    }
  }

  &__box {
    height:          100%;
    width:           100%;
    display:         flex;
    flex-direction:  column;
    justify-content: flex-end;
    padding-bottom:  30vh;
    box-sizing:      border-box;
  }
}
</style>