<template lang="pug">
  .house__info
    transition(name="house-text")
      .house__text-with-image(v-if="showBlockId===0 & !endGame")
        img(src="assets/img/game/house/moose.svg")
        .house__text
          p В обычной жизни человек производит много отходов. Житель города в среднем производит около 300 кг отходов в год. По весу это сравнимо со средним лосем, а по объему – с тремя большими холодильниками.
          TypoGameButton(
            @next-step="switchStep"
            :click-function="'next-step'"
          ) Что можно сделать?
        img(src="assets/img/game/house/fridges.svg")

    transition(name="house-text")
      .house__text(v-if="showBlockId===1 & !endGame")
        p Посмотрите как может выглядеть парк, если люди кидают мусор на улице и не убирают за собой после отдыха.
        p Никому не нравится находиться в таком месте. Давай посмотрим как правильно можно за собой прибираться.
        TypoGameButton(
          @next-step="switchStep"
          :click-function="'next-step'"
        ) Дальше

    transition(name="house-text")
      .house__text(v-if="showBlockId===2 & !endGame")
        p На баках подписано какой вид мусора туда можно выбрасывать. Найди все предметы и разложи их в правильные баки.
        p Перетягивай предметы мышкой.

    transition(name="house-text")
      .house__text(v-if="endGame & showBlockId===2")
        p Молодец! Ты правильно рассортировал весь мусор.
        p Давай теперь узнаем как не допускать такой ситуации с мусором.
        TypoGameButton(
          @next-step="switchStep"
          :click-function="'next-step'"
        ) Что можно сделать?

    transition(name="house-text")
      .house__text(v-if="endGame & showBlockId===3")
        TypoH2Bold Что же можно сделать?
        p Не бросай мусор на улице, выкидывай только в специальные места.
        p Старайся использовать некоторые вещи повторно и находить им новое применение, а вместо одноразовых вещей использовать многоразовые.
        p Тогда будет меньше мусора, а вокруг будет чище.
        router-link.t-link1.game__link(:to="{name: 'Things'}") Как это сделать?

</template>

<script>
export default {
  data() {
    return {
      showBlockId: 0
    }
  },
  props: {
    endGame: {
      type: Boolean,
      require: true
    }
  },
  methods: {
    switchStep() {
      this.showBlockId += 1
      if (this.showBlockId === 2) {
        this.$emit('rotate-bin')
      }
    }
  }
}
</script>

<style lang="scss">
.house {
  &__info {
    position:   absolute;
    top:        0;
    left:       0;
    width:      100%;
    padding:    70px 16px 0;
    box-sizing: border-box;

    @include w-from($screen-lg) {
      padding: 50px 0 0;
    }

    @include w-range($screen-lg, $screen-xl) {
      padding-top: 30px;

      p {
        font-size:     18px;
        line-height:   24px;
        margin-bottom: 10px !important;
      }
    }

    @include w-from($screen-md) {
      padding:   50px 0 0;
      left:      50%;
      transform: translateX(-50%);
      width:     55%;
    }
  }

  &__text-with-image {
    width:           100%;
    display:         flex;
    flex-direction:  row;
    align-items:     center;
    justify-content: center;

    img {
      width: 60px;

      @include w-from($screen-lg) {
        width: auto;
      }
    }
  }

  &__text {
    padding:    0 20px;
    box-sizing: border-box;
    text-align: center;

    p {
      margin-bottom: 20px;

      @include w-to($screen-lg) {
        margin-bottom: 5px;
        font-size:     15px;
        line-height:   19px;
      }
    }
  }
}

.house-text-enter-active {
  animation: animationText 0.4s reverse linear;
}

.house-text-enter, .house-text-leave-to {
  display: none;
}

.house-text-leave-active {
  animation: animationText 0.4s linear;
}

@keyframes animationText {
  0% {
    opacity: 1;
  }
  49% {
    opacity: 0;
    display: flex;
  }
  50% {
    opacity: 0;
    display: none;
  }
  100% {
    opacity: 0;
    display: none;
  }
}
</style>