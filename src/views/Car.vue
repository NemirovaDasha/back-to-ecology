<template lang="pug">
  main.main
    CarInfo(
      v-if="!isGameCar"
      :id-block="idBlockShow"
      @start-game="startGame"
      @end-game="endGame"
    )

    CarBackground(
      @end-game-cars="endGameCars"
    )

    TypoLink2.back-to-game(:href="{name: 'Game'}") Вернуться к игре
    TypoLink2(:href="{name: 'Home'}") Выйти на главную

</template>

<script>

import CarBackground from "../components/CarBackground";
import CarInfo from "../components/CarInfo";
import router from "../router";
import CarAuto from "../components/CarBackgroundAuto";
import CarBackgroundAuto from "../components/CarBackgroundAuto";

export default {
  components: {CarInfo, CarBackground},
  data() {
    return {
      isGameCar: false,
      idBlockShow: 0
    }
  },
  methods: {
    startGame() {
      if (this.idBlockShow === 0) {
        this.isGameCar = true;
      }
    },
    endGame() {
      router.push({name: 'Game'})
    },
    endGameCars() {
      this.isGameCar = false;
      this.idBlockShow = 1;
    },
  }
}
</script>

<style lang="scss">
.car {
  width:    100vw;
  height:   100vh;
  overflow: hidden;
}
</style>