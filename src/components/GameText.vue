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
          :class="{'mod-no-lg': paragraph.onlyMobile}"
        ) {{paragraph.text}}
      img(
        v-if="image"
        :src="image"
      )

    .game__buttons-container.m-buttons
      button.button.game__button.t-orange(
        v-if="isStartGameAgain"
        type="button"
        @click="startAgain"
      ) Играть снова
      button.button.game__button.t-blue(
        v-if="isButton"
        type="button"
        @click="clickButton"
      ) {{linkText}}
    .game__buttons-container
      button.t-link1.t-orange.game__link(
        v-if="isBackButton"
        type="button"
        @click="deleteStep"
      ) Назад
      button.t-link1.game__link(
        v-if="!isButton"
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
    },
    isBackButton: {
      type: Boolean,
      require: false
    },
    isStartGameAgain: {
      type: Boolean,
      require: false
    }
  },
  methods: {
    addStep() {
      this.$emit('show-next-step')
    },
    deleteStep() {
      this.$emit('show-previous-step')
    },
    clickButton() {
      this.$emit(this.clickFunction)
    },
    startAgain() {
      this.$emit('reload-game')
    }
  }
}
</script>

<style lang="scss">
.game {
  &__text-box {
    position:        absolute;
    top:             10%;
    left:            50%;
    transform:       translateX(-50%);
    padding:         20px 15px;
    min-width:       280px;

    display:         flex;
    flex-direction:  column;
    justify-content: space-between;
    align-items:     center;

    z-index:         1000;
    text-align:      center;
    background:      $color-light-blue;
    box-shadow:      3px 5px 14px rgba(0, 0, 0, 0.25);
    border-radius:   30px;
    box-sizing:      border-box;

    @include w-from($screen-lg) {
      top:    70px;
      width:  510px;
      height: 340px;
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
        height:     100%;
        max-height: 130px;
        width:      auto;

        @include w-from($screen-lg) {
          max-width:  170px;
          max-height: none;
        }

        @include w-from($screen-xl) {
          max-width: 290px;
        }
      }

      p {
        box-sizing: border-box;

        @include w-from($screen-md) {
          padding-right: 20px;
          margin-bottom: 0;
        }
      }
    }
  }

  &__buttons-container {
    display:         flex;
    width:           100%;
    flex-direction:  row;
    align-items:     center;
    justify-content: space-around;

    &.m-buttons {
      flex-direction: column;

      @include w-from($screen-md) {
        flex-direction: row;
      }

      button {
        width: 65%;

        &:first-child {
          margin-bottom: 15px;

          @include w-from($screen-md) {
            margin-bottom: 0;
          }
        }

        &:last-child {
          margin: 0;
        }

        @include w-from($screen-md) {
          width: fit-content;
        }
      }
    }
  }
}
</style>