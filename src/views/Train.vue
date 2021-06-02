<template lang="pug">
  main.main.train
    TrainBackground

</template>

<script>
import TrainBackground from "../components/TrainBackground";

export default {
  components: {TrainBackground}
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
</style>