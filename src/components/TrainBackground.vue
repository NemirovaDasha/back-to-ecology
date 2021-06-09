<template lang="pug">
  .train__container
    TrainBackgroundHuman(
      v-for="human in humansList"
      :key="human.id"
      :human-parameter="human"
      @click-human="checkPassenger"
    )

    TrainBackgroundCloud(
      :position-class="currentHuman"
      :show-cloud="showCloud"
    )

    BaseGameHelp(
      v-if="helpParameter.show"
      :class="helpParameter.class"
      @close="helpParameter.show=false"
    ) {{helpParameter.text}}

    .train__train-container
      transition(name="train")
        .train__train-with-passengers(
          v-if="gameCounter<7"
          :key="1"
        )
          .train__passengers
            TrainBackgroundPassenger.mod-hide(
              v-for="passenger in passengerList"
              :key="passenger.id"
              :passenger-parameter="passenger"
            )
          .train__train
            img.picture(src="assets/img/game/train/train.svg" alt="Поезд")

    img.train__trees(src="assets/img/game/train/trees.svg" alt="Декор")
    img.train__background(src="assets/img/game/train/background_2.svg" alt="Задний фон")

</template>

<script>

import TrainBackgroundHuman from "./TrainBackgroundHuman";
import TrainBackgroundPassenger from "./TrainBackgroundPassenger";
import BaseGameHelp from "./BaseGameHelp";
import TrainBackgroundCloud from "./TrainBackgroundCloud";

export default {
  components: {TrainBackgroundCloud, BaseGameHelp, TrainBackgroundPassenger, TrainBackgroundHuman},
  data() {
    return {
      humansList: [
        {
          id: 'human-1',
          isPassenger: true,
          src: 'assets/img/game/train/people/human1-1.svg',
          alt: 'Человек 1',
          class: 'human1'
        },
        {
          id: 'human-2',
          isPassenger: true,
          src: 'assets/img/game/train/people/human2-1.svg',
          alt: 'Человек 2',
          class: 'human2'
        },
        {
          id: 'human-3',
          isPassenger: true,
          src: 'assets/img/game/train/people/human3-1.svg',
          alt: 'Человек 3',
          class: 'human3'
        },
        {
          id: 'human-4',
          isPassenger: true,
          src: 'assets/img/game/train/people/human4-1.svg',
          alt: 'Человек 4',
          class: 'human4'
        },
        {
          id: 'human-5',
          isPassenger: true,
          src: 'assets/img/game/train/people/human5-1.svg',
          alt: 'Человек 5',
          class: 'human5'
        },
        {
          id: 'human-6',
          isPassenger: true,
          src: 'assets/img/game/train/people/human6-1.svg',
          alt: 'Человек 6',
          class: 'human6'
        },
        {
          id: 'human-7',
          isPassenger: true,
          src: 'assets/img/game/train/people/human7-1.svg',
          alt: 'Человек 7',
          class: 'human7'
        },
        {
          id: 'human-8',
          isPassenger: false,
          src: 'assets/img/game/train/people/human8.svg',
          alt: 'Человек 8',
          class: 'human8'
        },
        {
          id: 'human-9',
          isPassenger: false,
          src: 'assets/img/game/train/people/human9.svg',
          alt: 'Человек 9',
          class: 'human9'
        }
      ],
      passengerList: [
        {
          id: 'passenger-1',
          src: 'assets/img/game/train/people/human1-2.svg',
          alt: 'Пассажир 1',
          position: {
            right: '26.49%',
            topPosition: false
          }
        },
        {
          id: 'passenger-2',
          src: 'assets/img/game/train/people/human2-2.svg',
          alt: 'Пассажир 2',
          position: {
            right: '34.3%',
            topPosition: true
          }
        },
        {
          id: 'passenger-3',
          src: 'assets/img/game/train/people/human3-2.svg',
          alt: 'Пассажир 3',
          position: {
            right: '4.3%',
            topPosition: false
          }
        },
        {
          id: 'passenger-4',
          src: 'assets/img/game/train/people/human4-2.svg',
          alt: 'Пассажир 4',
          position: {
            right: '23.2%',
            topPosition: false
          }
        },
        {
          id: 'passenger-5',
          src: 'assets/img/game/train/people/human5-2.svg',
          alt: 'Пассажир 5',
          position: {
            right: '15.8%',
            topPosition: true
          }
        },
        {
          id: 'passenger-6',
          src: 'assets/img/game/train/people/human6-2.svg',
          alt: 'Пассажир 6',
          position: {
            right: '19.9%',
            topPosition: false
          }
        },
        {
          id: 'passenger-7',
          src: 'assets/img/game/train/people/human7-2.svg',
          alt: 'Пассажир 7',
          position: {
            right: '29.75%',
            topPosition: false
          }
        }
      ],
      width: 0,
      helpParameter: {
        show: false,
        class: '',
        text: '',
        textList: [
          {
            id: 0,
            text: 'ой, это же работник кафе, он не может уйти с работы'
          },
          {
            id: 0,
            text: 'ой, это же работник камеры хранения, он не может уйти'
          }
        ]
      },
      gameCounter: 0,
      currentHuman: 'human1',
      showCloud: false,
      gameSetPassengers: {}
    }
  },
  methods: {
    checkPassenger(human) {
      const humanId = human.id.split('-')[1];
      if (human.name === "passenger") {
        this.currentHuman = 'human' + humanId;
        this.showCloud = true;
        setTimeout(() => this.showCloud = false, 1000);
        const passenger = document.getElementById('passenger-' + humanId);
        passenger.classList.remove('mod-hide');
        human.classList.add('mod-hide');
        setTimeout(() => human.style.display = 'none', 700);
        this.gameSetPassengers.add(humanId);
        this.gameCounter = this.gameSetPassengers.size

        if (this.gameCounter === 7) {
          setTimeout(this.endGameTrains, 4000)
        }
      } else {
        this.helpParameter.class = 'human' + humanId;
        this.helpParameter.text = this.helpParameter.textList[humanId - 8].text;
        this.helpParameter.show = true;
      }
    },
    endGameTrains() {
      this.$emit('end-game-train');
    }
  },
  mounted() {
    this.gameSetPassengers = new Set();
  }
}
</script>

<style lang="scss">
.train {
  &__container {
    position:       relative;
    min-height:     max-content;
    min-width:      max-content;
    pointer-events: auto;

    @include w-from($screen-lg) {
      width:           100vw;
      height:          100vh;
      background:      url("/assets/img/game/train/background2_2.svg") no-repeat bottom;
      background-size: cover;
    }

    &.block-game {
      pointer-events: none;
    }
  }

  &__background {
    min-width:  100vw;
    min-height: 100vh;

    @include w-from($screen-lg) {
      display: none;
    }
  }

  &__train-container {
    position: absolute;
    right:    0;
    bottom:   63.45%;
    width:    100%;
    overflow: hidden;

    @include w-from($screen-lg) {
      bottom: 35.8vw;
    }
  }

  &__train {
    width: 100%;

    img {
      width: 175%;
      @include w-from($screen-lg) {
        width: 117.2vw;
      }
    }
  }

  &__passengers {
    width: 100%;
  }

  &__train-with-passengers {
    width:       67.4%;
    height:      100%;
    margin-left: auto;

    @include w-from($screen-lg) {
      bottom: 35.8vw;
      width:  67.1vw;
    }
  }

  &__trees {
    position:       absolute;
    left:           2.5%;
    bottom:         63.4%;
    width:          81%;
    z-index:        101;
    pointer-events: none;

    @include w-from($screen-lg) {
      bottom: 35.8vw;
      width:  81vw;
    }
  }

}

.train-enter-active, .train-leave-active {
  transition: color 7s;

  .train__train,
  .train__passenger {
    transition: transform 7s ease-in;
  }
}

.train-enter, .train-leave-to {
  color: white;

  .train__train,
  .train__passenger {
    transform: translateX(-2100px);

    @include w-from($screen-lg) {
      transform: translateX(-180vw);
    }
  }
}
</style>