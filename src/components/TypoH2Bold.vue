<template lang="pug">
  h2.t-h2-bold
    slot
</template>

<script>
export default {}
</script>

<style lang="scss">
.t-h2-bold {
  font-size:   18px;
  line-height: 24px;
  text-align:  center;
  width:       100%;

  @include w-from($screen-lg) {
    font-size:   22px;
    line-height: 26px;
  }
  @include w-from($screen-xl) {
    font-size:   26px;
    line-height: 38px;
  }
}
</style>