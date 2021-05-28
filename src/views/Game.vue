<template lang="pug">
  main.main
    section.game
      GameClouds
      transition(name='game-transition' tag="div")
        GameText(
          v-if="step<8"
          :text-list="nextStep.info.textList"
          :image="nextStep.info.image"
          :is-button="false"
          :link-text="'Дальше'"
          @show-next-step="switchStep"
          :key="step"
        )

      GameBackground(
        :background="nextStep.background.mainImage"
        :show-item-id="nextStep.background.addElementId"
        :key="nextStep.background.addElementId"
      )
      TypoLink2(:href="{name: 'Home'}") Выйти на главную

      transition(name='game-transition' tag="div")
        button.t-link2.game__start-again(
          v-if="step===8"
          type="button"
          @click="startAgain"
        ) Начать с начала
</template>

<script>
import GameClouds from "../components/GameClouds";
import GameText from "../components/GameText";
import GameBackground from "../components/GameBackground";

export default {
  components: {GameBackground, GameText, GameClouds},
  data() {
    return {
      states: [
        {
          info: {
            textList: [
              {
                id: 0,
                text: 'Со временем люди захотели сделать свою жизнь проще. Тогда начали появляться различные приспособления, которые облегчали труд человека.'
              }
            ],
            image: ''
          },
          background: {
            mainImage: 'assets/img/game/back.svg',
            addElementId: 0
          }
        },
        {
          info: {
            textList: [
              {
                id: 0,
                text: 'Раньше на производствах трудилось много рабочих. Люди стали придумывать способы, которые помогали бы быстрее и лучше работать. Тогда изобрели первый паровой двигатель, стало появляться больше производств, а также первые паровозы '
              }
            ],
            image: 'assets/img/game/main/train.svg'
          },
          background: {
            mainImage: 'assets/img/game/back.svg',
            addElementId: 0
          }
        },
        {
          info: {
            textList: [
              {
                id: 0,
                text: 'Раньше на производствах трудилось много рабочих. Люди стали придумывать способы, которые помогали бы быстрее и лучше работать. Тогда изобрели первый паровой двигатель, стало появляться больше производств, а также первые паровозы '
              }
            ],
            image: ''
          },
          background: {
            mainImage: 'assets/img/game/back2.svg',
            addElementId: 1
          }
        },
        {
          info: {
            textList: [
              {
                id: 0,
                text: 'Ученые изучали все вокруг и делали много открытий. Появилось электричество, стали строить много железных дорог и даже изобрели первые машины'
              }
            ],
            image: 'assets/img/game/main/car.svg'
          },
          background: {
            mainImage: 'assets/img/game/back2.svg',
            addElementId: 1
          }
        },
        {
          info: {
            textList: [
              {
                id: 0,
                text: 'Ученые изучали все вокруг и делали много открытий. Появилось электричество, стали строить много железных дорог и даже изобрели первые машины'
              }
            ],
            image: ''
          },
          background: {
            mainImage: 'assets/img/game/back2.svg',
            addElementId: 2
          }
        },
        {
          info: {
            textList: [
              {
                id: 0,
                text: 'Технологии не стоят на месте, появляются первые компьютеры и телефоны, и роботы, люди теперь в основном живут в городах'
              }
            ],
            image: ''
          },
          background: {
            mainImage: 'assets/img/game/back2.svg',
            addElementId: 2
          }
        },
        {
          info: {
            textList: [
              {
                id: 0,
                text: 'Такое развитие принесло как плюсы, так и минусы. Жизнь стала комфортной, мы привыкли к таким удобствам, но какой ценой?'
              }
            ],
            image: ''
          },
          background: {
            mainImage: 'assets/img/game/back3.svg',
            addElementId: 3
          }
        },
        {
          info: {
            textList: [
              {
                id: 0,
                text: 'Теперь ты можешь осмотреться и узнать к чему привели новые изобретения'
              }
            ],
            image: ''
          },
          background: {
            mainImage: 'assets/img/game/back3.svg',
            addElementId: 3
          }
        }
      ],
      step: 0
    }
  },
  computed: {
    nextStep() {
      if (this.step < 8) {
        return this.states[this.step]
      } else {
        return this.states[this.states.length - 1]
      }
    }
  },
  methods: {
    switchStep() {
      this.step = this.step + 1;
      localStorage.step = this.step;
    },
    startAgain(){
      this.step = 0
      localStorage.step = this.step;
    }
  },
  mounted() {
    if (localStorage.step) {
      this.step = Number(localStorage.step);
    } else {
      localStorage.setItem('step', '0');
    }
  }
}
</script>

<style lang="scss">
.game {
  position: relative;
  width:    100%;
  height:   100vh;

  &__start-again {
    left:  16px;
    right: auto;

    @include w-from($screen-md) {
      right: 132px;
      left:  auto;
    }

    @include w-from($screen-lg) {
      right: 212px;
      left:  auto;
    }
  }
}

.game-transition-enter-active, .game-transition-leave-active {
  transition: opacity .5s;
}

.game-transition-enter, .game-transition-leave-to /* .fade-leave-active до версии 2.1.8 */
{
  opacity: 0;
}
</style>
