<template lang="pug">
  main.main.fabric
    FabricInfo

    TypoLink2(:href="{name: 'Home'}") Выйти на главную
    FabricBackground
</template>

<script>
import FabricInfo from "../components/FabricInfo";
import FabricBackground from "../components/FabricBackground";

export default {
  components: {FabricBackground, FabricInfo}
}
</script>
