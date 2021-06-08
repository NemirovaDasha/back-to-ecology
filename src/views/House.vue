<template lang="pug">
  main.main.house.js-no-overflow
    BasePreloader
    HouseInfo(
      :end-game="endGame"
      @unblock-game="unblockGame = true"
    )
    HouseBackground
    HouseTrash(
      :unblock-game="unblockGame"
      @end-game="endGame=true"
    )

    TypoLink2(:href="{name: 'Home'}") Выйти на главную
    TypoLink2.back-to-game(:href="{name: 'Game'}") Вернуться к игре

</template>

<script>
import HouseInfo from "../components/HouseInfo";
import HouseBackground from "../components/HouseBackground";
import HouseTrash from "../components/HouseTrash";
import BasePreloader from "../components/BasePreloader";

export default {
  components: {BasePreloader, HouseTrash, HouseBackground, HouseInfo},
  data() {
    return {
      endGame: false,
      unblockGame: false
    }
  },
  methods: {
    init() {
      document.body.classList.add('no-overflow');
    }
  },
  mounted() {
    this.init();
  }
}
</script>

<style lang="scss">
.house {
  position:   relative;
  height:     100vh;
  min-height: 515px;
  overflow-y: auto;

  @include w-from($screen-lg) {
    min-height: 640px;
  }
}
</style>
