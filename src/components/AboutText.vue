<template lang="pug">
  section.t-back-color.about.js-no-overflow-md
    h1.t-h1 О проекте "Назад в экологию"

    .about__container
      .about__info
        p &laquo;Назад в&nbsp;экологию&raquo; поможет показать детям, как развивался и&nbsp;изменялся мир под влиянием человека, и&nbsp;почему так необходимо уделять внимание экологии.
        p Сейчас тема экологии волнует многих. Загрязнение воздуха и&nbsp;воды, вырубка лесов, увеличение количества бытовых отходов&nbsp;&mdash; все это нужно решать не&nbsp;только на&nbsp;государственном уровне, ведь многое зависит и&nbsp;от&nbsp;нас самих: от&nbsp;образа жизни, экономии природных ресурсов, коммунальных благ, соблюдения гигиены и&nbsp;от&nbsp;нашего собственного выбора.
        p Экологическое воспитание детей с&nbsp;раннего возраста&nbsp;&mdash; это один из&nbsp;возможных путей к&nbsp;решению таких глобальных проблем.
        p Играя, ребенок повысит интерес к&nbsp;окружающей среде и&nbsp;будет формировать навыки бережного обращения с&nbsp;природой. Давайте беречь планету вместе!

      BaseButtons

      img.about__img(src="@/assets/img/other/about.svg")
</template>

<script>
import BaseButtons from "./BaseButtons";

export default {
  components: {BaseButtons},
  props: {}
}
</script>

<style lang="scss">
.about {
  padding:         20px 0 0 20px;
  box-sizing:      border-box;
  display:         flex;
  flex-direction:  column;
  justify-content: flex-start;
  align-items:     flex-start;
  height:          100%;

  @include w-from($screen-lg) {
    padding:    20px 0 0 80px;
    max-height: 100vh;
  }

  h1 {
    padding-right: 20px;
    box-sizing:    border-box;

    @include w-from($screen-lg) {
      padding-right: 80px;
    }
  }

  &__container {
    display:               grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows:    repeat(2, auto);
    padding-right:         20px;
    box-sizing:            border-box;

    //min-height:            fit-content;
    height:                100%;
    width:                 100%;
    max-width:             1700px;
    margin:                20px auto 0;
    min-height:            calc(100vh - 20px - 46px - 20px);

    @include w-from($screen-lg) {
      padding:               0;
      grid-template-columns: 2fr 1fr;
      grid-template-rows:    repeat(2, 1fr);
      margin:                6vh auto 0;
      height:                calc(100vh - 6vh - 20px - 98px);
      min-height:            calc(100vh - 6vh - 20px - 98px);
    }

    @include w-from($screen-xl) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__info {
    padding-bottom:    20px;
    width:             100%;
    max-width:         1200px;
    font-size:         12px;
    line-height:       18px;
    grid-column-start: 1;
    grid-column-end:   3;

    @include w-from($screen-lg) {
      padding-bottom: 0;
      grid-column:    1;
      font-size:      1.5vw;
      line-height:    2vw;
    }

    @include w-from($screen-xl) {
      font-size:   28px;
      line-height: 38px;
    }

    p {
      margin-bottom: 22px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__img {
    align-self:  flex-end;
    width:       30vw;
    max-height:  60vh;
    flex-shrink: 0;
    min-width:   150px;

    @include w-from($screen-lg) {
      grid-column:    2;
      grid-row-start: 1;
      grid-row-end:   3;
    }
  }
}
</style>