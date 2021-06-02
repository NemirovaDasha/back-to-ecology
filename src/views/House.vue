<template lang="pug">
  main.main
    HouseInfo(
      :end-game="endGame"
    )
    HouseBackground
    HouseTrash(
      @end-game="endGame=true"
    )

    TypoLink2(:href="{name: 'Home'}") Выйти на главную
    TypoLink2.back-to-game(:href="{name: 'Game'}") Вернуться к игре

</template>

<script>
import HouseInfo from "../components/HouseInfo";
import HouseBackground from "../components/HouseBackground";
import HouseTrash from "../components/HouseTrash";

export default {
  components: {HouseTrash, HouseBackground, HouseInfo},
  data() {
    return {
      endGame: false
    }
  }
}
</script>

<style lang="scss">

</style>
