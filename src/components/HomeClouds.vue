<template lang="pug">
  .clouds(id='clouds')
    .clouds.layer-1(data-depth="0.3")
      img(src="@/assets/img/clouds/clouds-1.png")
    .clouds.layer-2(data-depth="0.2")
      img(src="@/assets/img/clouds/clouds-2.png")
    .clouds.layer-3(data-depth="0.7")
      img(src="@/assets/img/clouds/clouds-3.png")
</template>

<script>
export default {
  props: {}
}
</script>

<style lang="scss">
.clouds {
  width:      100vw;
  height:     100%;
  //min-height: 100vh;
  position:   absolute;
  z-index:    0;
  display:    block;
  box-sizing: border-box;

  img {
    width: 100%;
  }

  &.layer-1 {
    padding-top:  52px;
    padding-left: 134px;

    img {
      width: 60%;
    }
  }

  &.layer-2 {
    padding-top:  185px;
    padding-left: 150px;
  }

  &.layer-3 {
    padding-top:  70px;
    padding-left: 70px;
  }

  @include w-to($screen-lg) {
    padding-left: 0 !important;

    &.layer-1 {
      padding-top: 65px;
    }
    &.layer-2 {
      padding-top: 200px;
    }
    &.layer-3 {
      padding-top: 85px;
    }

    img {
      width: 100% !important;
    }
  }
}
</style>