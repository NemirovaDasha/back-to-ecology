<template lang="pug">
  main.main.fabric
    template(v-if="!isConveyor")
      FabricInfo(
        @start-game-conveyor="isConveyor=true"
        @start-game-trees="isGameTrees=true"
        @end-game-trees="redirectToMain"
        :game-trees-end="isGameTreesEnd"
      )

      TypoLink2(:href="{name: 'Home'}") Выйти на главную
      FabricBackground(v-if="!isGameTrees")
      FabricGameTrees(
        v-if="isGameTrees"
        @end-game="isGameTreesEnd=true"
        )
      img.fabric__background(src="assets/img/game/fabric/background.svg")

    template(v-else)
      FabricConveyor

    TypoLink2.back-to-game(:href="{name: 'Game'}") Вернуться к игре

</template>

<script>
import FabricInfo from "../components/FabricInfo";
import FabricBackground from "../components/FabricBackground";
import FabricConveyor from "../components/FabricConveyor";
import FabricGameTrees from "../components/FabricGameTrees";
import router from "../router";

export default {
  components: {FabricGameTrees, FabricConveyor, FabricBackground, FabricInfo},
  data() {
    return {
      isConveyor: false,
      isGameTrees: false,
      isGameTreesEnd: false
    }
  },
  methods:{
    redirectToMain(){
      router.push({name:"Game"})
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
</style>
