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
        GameText(
          v-if="isMiniGame"
          :text-list="miniGameStates[miniGameIndex].gameItems[stepMiniGame].textList"
          :image="miniGameStates[miniGameIndex].gameItems[stepMiniGame].image"
          :is-button="false"
          :link-text="miniGameStates[miniGameIndex].gameItems[stepMiniGame].linkText"
          @show-next-step="nextStepMiniGame"
          :key="stepMiniGame"
        )

      GameBackground(
        :background="nextStep.background.mainImage"
        :show-item-id="nextStep.background.addElementId"
        :key="nextStep.background.addElementId"
        @start-game-train="isMiniGame=true"
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
import router from "../router";

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
      step: 0,
      isMiniGame: false,
      miniGameIndex: 0,
      stepMiniGame: 0,
      miniGameStates: [
        {
          id: 0,
          gameItems: [
            {
              id: 0,
              textList: [
                {
                  id: 0,
                  text: 'Все начиналось с таких паровозов. А сейчас существует много разных видов. Большинство из них во время работы выпускает дым, что вредно влияет на климат. Портиться воздух и из - за этого всем становиться тяжело.'
                }
              ],
              image: 'assets/img/game/main/train.svg',
              linkText: 'Что можно сделать?'
            },
            {
              id: 1,
              textList: [
                {
                  id: 0,
                  text: 'Давай посмотрим как применяются паровозы в нашей жизни. К паровозу прикрепляют много вагонов и они перевозят грузы от одного места к другому. А еще есть специальные пассажирские поезда, которые вместо груза перевозят людей.'
                }
              ],
              linkText: 'Дальше'
            },
          ]
        },
        {
          id: 1,
          gameItems: [
            {
              id: 0,
              textList: [
                {
                  id: 0,
                  text: 'Раньше машины выглядели примерно так и были диковинкой. Сейчас марок и видов машин очень много и машина есть практически у каждой семьи. Машина работает за счет двигателя. Но он во время работы выделяет выхлопные газы в воздух. Портится воздух и из-за этого всем становиться тяжело.'
                }
              ],
              image: 'assets/img/game/main/car.svg',
              linkText: 'Что можно сделать?'
            },
            {
              id: 1,
              textList: [
                {
                  id: 0,
                  text: 'Раньше машины работали только на топливе, которое вырабатывает выхлопные газы, но теперь люди изобрели электромобили.'
                },
                {
                  id: 1,
                  text: 'Электромобили работают от электричества, примерно как обычный телефон. Такую машину вместо заправки топливом нужно просто заряжать. Они не насоят такой вред воздуху.'
                }
              ],
              linkText: 'Дальше'
            },
          ]
        }
      ]
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
    startAgain() {
      this.step = 0
      localStorage.step = this.step;
    },
    nextStepMiniGame() {
      if (this.stepMiniGame > 0) {
        switch (this.miniGameIndex) {
          case 0:
            router.push({name: "Train"});
            break;
          case 1:
            router.push({name: "Car"});
            break;
        }
      } else {
        this.stepMiniGame += 1
      }
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
