<template lang="pug">
  router-link.t-link2(:to="href")
    slot
</template>

<script>
export default {
  props: {
    href: {
      type: Object,
      require: true
    }
  }
}
</script>

<style lang="scss">
.t-link2 {
  position:      absolute;
  top:           16px;
  right:         16px;
  border-radius: 14px;
  padding:       6px 12px;
  box-sizing:    border-box;
  font-size:     18px;
  line-height:   20px;
  font-family:   $font-family-second;
  color:         black;
  background:    transparent;

  @include hover {
    color:      white;
    background: $color-blue;
  }

  @include w-from($screen-lg) {
    font-size:   28px;
    line-height: 32px;
    right:       24px;
  }
  @include w-from($screen-xl) {
    font-size:   34px;
    line-height: 42px;
    right:       24px;
  }
}
</style>