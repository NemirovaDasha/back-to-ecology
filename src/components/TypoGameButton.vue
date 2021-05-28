<template lang="pug">
  button.t-link-game(
    type="button"
    @click="clickButton"
    )
    slot
</template>

<script>
export default {
  props:{
    clickFunction:{
      type: String,
      require: false
    }
  },
  methods:{
    clickButton(){
      this.$emit(this.clickFunction)
    }
  }
}
</script>

<style lang="scss">
.t-link-game {
  @include inc-click-area(5px);
  display:     block;
  margin:      0 auto;
  font-size:   16px;
  line-height: 22px;
  color:       $color-orange;

  @include w-from($screen-lg) {
    font-size:   20px;
    line-height: 24px;
  }

  @include w-from($screen-xl) {
    font-size:   24px;
    line-height: 36px;
  }

  @include hover {
    color: $color-blue;
  }
}
</style>