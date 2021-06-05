<template lang="pug">
  img.train__passenger(
    :id="passengerParameter.id"
    :src="passengerParameter.src"
    :class="{'m-2': passengerParameter.position.topPosition}"
    :style="passengerPosition"
  )
</template>

<script>
export default {
  props: {
    passengerParameter: {
      type: Object,
      require: false
    }
  },
  computed:{
    passengerPosition(){
      return {
        'right': this.passengerParameter.position.right
      }
    }
  }
}
</script>

<style lang="scss">
.train {
  &__passenger {
    position: absolute;
    width:    2.4%;
    bottom:   52.3%;
    z-index: 100;

    @include w-from($screen-lg) {
      width:  2.36vw;
      bottom: 7.3vw;
    }

    &.m-2{
      width:  1.85%;
      bottom: 61.4%;

      @include w-from($screen-lg) {
        width:  1.8vw;
        bottom: 8.5vw;
      }
    }
  }
}
</style>