<template lang="pug">
  main.main.train
    TrainInfo(
      v-if="!isGameTrain"
      :id-block="idBlockShow"
      @start-game="startGame"
      @end-game="endGame"
    )
    TrainBackground(
      @end-game-train="endGameTrain"
    )

    TypoLink2.back-to-game.t-link2-train(:href="{name: 'Game'}") Вернуться к игре
    TypoLink2.t-link2-train(:href="{name: 'Home'}") Выйти на главную

</template>

<script>
import TrainBackground from "../components/TrainBackground";
import TrainInfo from "../components/TrainInfo";
import router from "../router";

export default {
  components: {TrainInfo, TrainBackground},
  data() {
    return {
      isGameTrain: false,
      idBlockShow: 0
    }
  },
  methods: {
    startGame() {
      if (this.idBlockShow === 0) {
        this.isGameTrain = true;
      }
    },
    endGame() {
      router.push({name: 'Game'})
    },
    endGameTrain() {
      this.isGameTrain = false;
      this.idBlockShow = 1;
    }
  }
}
</script>

<style lang="scss">
.train {
  width:    100vw;
  height:   100vh;
  overflow: auto;

  @include w-from($screen-lg) {
    overflow: hidden;
  }
}

.t-link2-train{
  background: rgba(white, 0.8);
}
</style>