<template lang="pug">
  main.main.fabric
    BasePreloader
    FabricInfo(
      :game-trees-end="isGameTreesEnd"
      @start-game-trees="isGameTrees=true"
      @end-game-trees="redirectToMain"
      @reload-game="reloadGame"
    )

    TypoLink2(:href="{name: 'Home'}") Выйти на главную

    transition(name="fabric-back")
      FabricBackground(v-if="!isGameTrees")

    transition(name="fabric-game")
      FabricGameTrees(
        v-if="isGameTrees"
        :key="keyTrees"
        @end-game="endGameTrees"
      )

    img.fabric__background(src="assets/img/game/fabric/background.svg")

    TypoLink2.back-to-game(:href="{name: 'Game'}") Вернуться к игре

</template>

<script>
import FabricInfo from "../components/FabricInfo";
import FabricBackground from "../components/FabricBackground";
import FabricGameTrees from "../components/FabricGameTrees";
import router from "../router";
import BasePreloader from "../components/BasePreloader";

export default {
  components: {BasePreloader, FabricGameTrees, FabricBackground, FabricInfo},
  data() {
    return {
      isGameTrees: false,
      isGameTreesEnd: false,
      keyTrees: 0
    }
  },
  methods: {
    redirectToMain() {
      router.push({name: "Game"})
    },
    init() {
      document.body.classList.add('no-overflow');
    },
    endGameTrees() {
      setTimeout(() => this.isGameTreesEnd = true, 5000)
    },
    reloadGame(){
      this.isGameTreesEnd = false;
      this.isGameTrees = true;
      this.keyTrees += 1;
    }
  },
  mounted() {
    this.init();
  }
}
</script>

<style lang="scss">
.fabric {
  height:     100vh;
  min-height: 650px;
  overflow:   hidden;

  @include w-from($screen-md) {
    min-height: 500px;
  }

  &__background {
    width:          100vw;
    position:       absolute;
    bottom:         0;
    left:           0;
    right:          0;
    z-index:        5;
    pointer-events: none;
  }
}

.fabric-back-enter-active, .fabric-back-leave-active {
  transition: opacity 1s;
}

.fabric-back-enter, .fabric-back-leave-to {
  opacity: 0;
}

.fabric-game-enter-active, {
  animation: fabricGame 1s;
}

@keyframes fabricGame {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
