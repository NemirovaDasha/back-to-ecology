<template lang="pug">
  .train__container

    TrainBackgroundHuman(
      v-for="human in humansList"
      :key="human.id"
      :human-parameter="human"
      @click-human="checkPassenger"
    )

    TrainBackgroundPassenger.mod-hidden(
      v-for="passenger in passengerList"
      :key="passenger.id"
      :passenger-parameter="passenger"
    )

    BaseGameHelp(
      v-if="helpParameter.show"
      :class="helpParameter.class"
      @close="helpParameter.show=false"
    ) {{helpParameter.text}}

    img.train__background(src="assets/img/game/train/background.svg" alt="Задний фон")

</template>

<script>

import TrainBackgroundHuman from "./TrainBackgroundHuman";
import TrainBackgroundPassenger from "./TrainBackgroundPassenger";
import BaseGameHelp from "./BaseGameHelp";

export default {
  components: {BaseGameHelp, TrainBackgroundPassenger, TrainBackgroundHuman},
  data() {
    return {
      humansList: [
        {
          id: 'human-1',
          isPassenger: true,
          src: 'assets/img/game/train/people/human1-1.svg',
          class: 'human1'
        },
        {
          id: 'human-2',
          isPassenger: true,
          src: 'assets/img/game/train/people/human2-1.svg',
          class: 'human2'
        },
        {
          id: 'human-3',
          isPassenger: true,
          src: 'assets/img/game/train/people/human3-1.svg',
          class: 'human3'
        },
        {
          id: 'human-4',
          isPassenger: true,
          src: 'assets/img/game/train/people/human4-1.svg',
          class: 'human4'
        },
        {
          id: 'human-5',
          isPassenger: true,
          src: 'assets/img/game/train/people/human5-1.svg',
          class: 'human5'
        },
        {
          id: 'human-6',
          isPassenger: true,
          src: 'assets/img/game/train/people/human6-1.svg',
          class: 'human6'
        },
        {
          id: 'human-7',
          isPassenger: true,
          src: 'assets/img/game/train/people/human7-1.svg',
          class: 'human7'
        },
        {
          id: 'human-8',
          isPassenger: false,
          src: 'assets/img/game/train/people/human8.svg',
          class: 'human8'
        },
        {
          id: 'human-9',
          isPassenger: false,
          src: 'assets/img/game/train/people/human9.svg',
          class: 'human9'
        }
      ],
      passengerList: [
        {
          id: 'passenger-1',
          src: 'assets/img/game/train/people/human1-2.svg',
          position: {
            right: '26.49%',
            topPosition: false
          }
        },
        {
          id: 'passenger-2',
          src: 'assets/img/game/train/people/human2-2.svg',
          position: {
            right: '34.31%',
            topPosition: true
          }
        },
        {
          id: 'passenger-3',
          src: 'assets/img/game/train/people/human3-2.svg',
          position: {
            right: '4.4%',
            topPosition: false
          }
        },
        {
          id: 'passenger-4',
          src: 'assets/img/game/train/people/human4-2.svg',
          position: {
            right: '23.2%',
            topPosition: false
          }
        },
        {
          id: 'passenger-5',
          src: 'assets/img/game/train/people/human5-2.svg',
          position: {
            right: '15.9%',
            topPosition: true
          }
        },
        {
          id: 'passenger-6',
          src: 'assets/img/game/train/people/human6-2.svg',
          position: {
            right: '19.9%',
            topPosition: false
          }
        },
        {
          id: 'passenger-7',
          src: 'assets/img/game/train/people/human7-2.svg',
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
      }
    }
  },
  methods: {
    checkPassenger(human) {
      const humanId = human.id.split('-')[1];
      if (human.name === "passenger") {
        const passenger = document.getElementById('passenger-' + humanId)
        passenger.classList.remove('mod-hidden')
        human.classList.add('mod-hidden')

      } else {
        this.helpParameter.class = 'human' + humanId;
        this.helpParameter.text = this.helpParameter.textList[humanId - 8].text
        this.helpParameter.show = true;
      }
    }
  }
}
</script>

<style lang="scss">
.train {
  &__container {
    position:   relative;
    min-height: max-content;
    min-width:  max-content;

    @include w-from($screen-lg) {
      width:           100vw;
      height:          100vh;
      background:      url("/assets/img/game/train/background2.svg") no-repeat bottom;
      background-size: cover;
    }
  }

  &__background {
    min-width:  100vw;
    min-height: 100vh;

    @include w-from($screen-lg) {
      display: none;
    }
  }

  &__background-sm {
    width:  100vw;
    height: 100%;
  }


}
</style>