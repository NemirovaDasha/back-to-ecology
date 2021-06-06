<template lang="pug">
  router-link.t-link1(:to="href")
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
.t-link1 {
  @include inc-click-area(5px);
  font-size:   14px;
  line-height: 16px;
  color:       $color-blue;

  @include hover {
    color: $color-orange;
  }

  &.t-orange {
    color: $color-orange;
    @include hover {
      color: $color-blue;
    }
  }

  @include w-from($screen-lg) {
    font-size:   24px;
    line-height: 24px;
  }
}
</style>