<template lang="pug">
  article.things__wish
    p Используйте свое воображение! Выдумывайте, мастерите и&nbsp;фантазируйте.
    p Старайтесь не&nbsp;использовать одноразовые вещи, а&nbsp;находить им&nbsp;многоразовую замену.
    p Тогда природа скажет нам &laquo;спасибо&raquo;!

    BaseButtons
</template>

<script>
import BaseButtons from "./BaseButtons";
export default {
  components: {BaseButtons}
}
</script>

<style lang="scss">
.things{
  &__wish {
    padding:    20px 0 40px;
    box-sizing: border-box;

    p {
      color:         $color-text-blue;
      text-align:    center;
      margin-bottom: 8px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    @include w-range($screen-md, $screen-lg) {
      grid-row-start: 3;
      grid-row-end:   5;
      align-self:     center;
    }
  }
}
</style>