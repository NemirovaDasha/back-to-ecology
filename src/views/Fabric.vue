<template lang="pug">
  main.main.fabric
    FabricInfo(
      @start-game-trees="isGameTrees=true"
      @end-game-trees="redirectToMain"
      :game-trees-end="isGameTreesEnd"
    )

    TypoLink2(:href="{name: 'Home'}") Выйти на главную

    transition(name="fabric-back")
      FabricBackground(v-if="!isGameTrees")

    transition(name="fabric-game")
      FabricGameTrees(
        v-if="isGameTrees"
        @end-game="isGameTreesEnd=true"
      )

    img.fabric__background(src="assets/img/game/fabric/background.svg")

    TypoLink2.back-to-game(:href="{name: 'Game'}") Вернуться к игре

</template>

<script>
import FabricInfo from "../components/FabricInfo";
import FabricBackground from "../components/FabricBackground";
import FabricGameTrees from "../components/FabricGameTrees";
import router from "../router";

export default {
  components: {FabricGameTrees, FabricBackground, FabricInfo},
  data() {
    return {
      isGameTrees: false,
      isGameTreesEnd: false
    }
  },
  methods: {
    redirectToMain() {
      router.push({name: "Game"})
    }
  }
}
</script>

<style lang="scss">
.fabric {
  &__background {
    width:    100vw;
    position: absolute;
    bottom:   0;
    left:     0;
    right:    0;
    z-index:  5;
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
