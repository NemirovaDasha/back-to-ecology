<template lang="pug">
  h1.t-h1
    slot
</template>

<script>
export default {}
</script>

<style lang="scss">
.t-h1 {
  width:       100%;
  margin:      0 auto;
  padding:     0 16px;
  box-sizing:  border-box;
  font-family: $font-family-second;
  font-size:   42px;
  line-height: 46px;
  font-weight: normal;
  text-align:  center;
  color:       $color-text-blue;

  @include w-from($screen-lg) {
    font-size:   90px;
    line-height: 98px;
  }
}
</style>