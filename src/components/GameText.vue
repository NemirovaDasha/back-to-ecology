<template lang="pug">
  .game__text-box
    .game__text(
      :class="{'t-with-image': image}"
    )
      template(
        v-for="paragraph in textList"
      )
        TypoH2Bold(
          v-if="paragraph.isTitle"
          :key="paragraph.id"
        ) Что же можно сделать?
        p(
          v-if="!paragraph.isTitle"
          :key="paragraph.id"
        ) {{paragraph.text}}
      img(
        v-if="image"
        :src="image"
      )

    button.button.game__button.t-blue(
      v-if="isButton"
      type="button"
      @click="clickButton"
    ) {{linkText}}
    button.t-link1.game__link(
      v-else
      type="button"
      @click="addStep"
    ) {{linkText}}
</template>

<script>
export default {
  props: {
    textList: {
      type: Array,
      require: true
    },
    image: {
      type: String,
      require: false
    },
    isButton: {
      type: Boolean,
      require: true
    },
    linkText: {
      type: String,
      require: true
    },
    clickFunction: {
      type: String,
      require: false
    }
  },
  methods: {
    addStep() {
      this.$emit('show-next-step')
    },
    clickButton(){
      this.$emit(this.clickFunction)
    }
  }
}
</script>

<style lang="scss">
.game {
  &__text-box {
    position:        absolute;
    top:             50%;
    left:            50%;
    transform:       translate(-50%, -50%);
    padding:         20px 15px;
    min-width:       280px;

    display:         flex;
    flex-direction:  column;
    justify-content: space-between;
    align-items:     center;

    z-index:         100;
    text-align:      center;
    background:      $color-light-blue;
    box-shadow:      3px 5px 14px rgba(0, 0, 0, 0.25);
    border-radius:   30px;
    box-sizing:      border-box;

    @include w-from($screen-lg) {
      top:       70px;
      width:     510px;
      height:    340px;
      transform: translate(-50%, 0);
    }

    @include w-from($screen-xl) {
      width:      38vw;
      height:     21vw;
      min-height: 362px;
      padding:    30px;
    }
  }

  &__text {
    height:          100%;
    display:         flex;
    flex-direction:  column;
    align-items:     center;
    justify-content: center;

    p {
      font-size:     14px;
      line-height:   18px;
      margin-bottom: 12px;

      @include w-from($screen-lg) {
        font-size:     18px;
        line-height:   22px;
        margin-bottom: 16px;
      }

      @include w-from($screen-xl) {
        font-size:     1.2vw;
        line-height:   1.5vw;
        margin-bottom: 22px;
      }
    }

    &.t-with-image {
      flex-direction:  column;
      justify-content: space-between;
      padding-bottom:  30px;

      @include w-from($screen-md) {
        flex-direction: row;
      }

      img {
        height: 100%;
        width:  auto;

        @include w-from($screen-lg) {
          max-width: 170px;
        }

        @include w-from($screen-xl) {
          max-width: 290px;
        }
      }

      p {
        padding-right: 20px;
        margin-bottom: 0;
        box-sizing:    border-box;
      }
    }
  }
}
</style>