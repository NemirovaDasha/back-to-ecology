<template lang="pug">
  router-link.button(:to="href")
    slot

</template>

<script>
export default {
  props:{
    href:{
      type: Object,
      require: true
    }
  }
}
</script>

<style lang="scss">
.button {
  min-width:     124px;
  width:         fit-content;
  border-radius: 14px;
  color:         white;
  padding:       11px 15px;
  font-size:     14px;
  line-height:   16px;
  text-align:    center;
  transition:    all $transition-hover-off;
  box-sizing:    border-box;

  &:active {
    transform:  scale(0.9);
    transition: transform $transition-fast;
  }

  &.t-orange {
    background: $color-orange;
    border:     thin solid $color-orange;

    @include hover {
      color:      $color-orange;
      background: transparent;
      transition: all $transition-hover-on;
    }
  }

  &.t-blue {
    background: $color-blue;
    border:     thin solid $color-blue;

    @include hover {
      color:      $color-blue;
      background: transparent;
      transition: all $transition-hover-on;
    }
  }

  @include w-from($screen-lg) {
    min-width:   180px;
    padding:     16px 20px;
    font-size:   20px;
    line-height: 22px;
  }

  @include w-from($screen-xl) {
    min-width:   200px;
    padding:     19px 26px;
    font-size:   24px;
    line-height: 28px;
  }
}
</style>