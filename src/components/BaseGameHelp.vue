<template lang="pug">
  button.help-message(
    :style="position"
    type="button"
    @click="$emit('close')"
  )
    p
      slot
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      require: false
    }
  }
}
</script>

<style lang="scss">
.help-message {
  width:           11% !important;
  min-width:       170px;
  height:          8% !important;
  min-height:      80px;
  text-align:      center;
  background:      url("/assets/img/game/help.svg") no-repeat;
  background-size: contain;
  position:        absolute;
  z-index:         9000;
  transform:       none !important;

  @include w-from($screen-lg) {
    width:      16vw !important;
    max-width:  240px;
    height:     8vw !important;
    max-height: 120px;
  }

  p {
    font-size:   12px;
    line-height: 16px;
    padding:     1.3% 11.2%;

    @include w-from($screen-lg) {
      font-size:   14px;
      line-height: 18px;
      padding:     1.3vw 1.2vw;
    }

    @include w-from($screen-xl) {
      font-size:   18px;
      line-height: 24px;
    }
  }
}
</style>