<template lang="pug">
  .game__background
    .game__image-container
      transition(name='game-images' appear)
        .game__train-container(
          v-show="itemId>0 & !isRules"
          key="1"
          :class="{'show-animation': showItemId===1 & !isPreviousStep, 'hide-animation':  isPreviousStep}"
        )
          .game__smoke-container
            img.game__smoke2(src="assets/img/game/main/smoke/smoke3.svg")
            img.game__smoke1(src="assets/img/game/main/smoke/smoke1.svg")
          button.game__image-button(
            type="button"
            @click="$emit('start-game-train')"
          )
            img.game__train(src="assets/img/game/main/train2.svg")

      transition(name='game-images' appear)
        .game__fabric-container(
          v-show="itemId>0 & !isRules"
          key="2"
          :class="{'show-animation': showItemId===1 & !isPreviousStep, 'hide-animation':  isPreviousStep}"
        )
          .game__smoke-container.m-fabric1
            img.game__smoke3(src="assets/img/game/main/smoke/smoke3.svg")
            img.game__smoke2(src="assets/img/game/main/smoke/smoke2.svg")
            img.game__smoke1(src="assets/img/game/main/smoke/smoke1.svg")
          .game__smoke-container.m-fabric2
            img.game__smoke3(src="assets/img/game/main/smoke/smoke3.svg")
            img.game__smoke2(src="assets/img/game/main/smoke/smoke2.svg")
            img.game__smoke1(src="assets/img/game/main/smoke/smoke1.svg")
          .game__smoke-container.m-fabric3
            img.game__smoke3(src="assets/img/game/main/smoke/smoke3.svg")
            img.game__smoke2(src="assets/img/game/main/smoke/smoke2.svg")
            img.game__smoke1(src="assets/img/game/main/smoke/smoke1.svg")
          router-link.game__image-button(:to="{name: 'Fabric'}")
            img.game__fabric(src="assets/img/game/main/fabric.svg")

      transition(name='game-images' appear)
        .game__car-container(
          v-show="itemId>1"
          key="3"
          :class="{'show-animation': showItemId===2 & !isPreviousStep, 'hide-animation':  isPreviousStep}"
        )
          button.game__image-button(
            type="button"
            @click="$emit('start-game-car')"
          )
            img.game__car(src="assets/img/game/main/car.svg")


      .game__car-rules(
        v-if="isRules"
        key="rulesImage"
      )
      .game__house-container
        transition(name='game-houses' appear)
          .game__house1-container(
            v-if="itemId>2"
            key="4"
            :class="{'show-animation': showItemId===3 & !isPreviousStep, 'hide-animation':  isPreviousStep}"
          )
            router-link.game__image-button(:to="{name: 'House'}")
              img.game__house1(src="assets/img/game/main/house1.svg")

        transition(name='game-houses' appear)
          .game__house2-container(
            v-if="itemId>2"
            key="4"
            :class="{'show-animation': showItemId===3 & !isPreviousStep, 'hide-animation':  isPreviousStep}"
          )
            router-link.game__image-button(:to="{name: 'House'}")
              img.game__house2(src="assets/img/game/main/house2.svg")

        transition(name='game-houses' appear)
          .game__house3-container(
            v-if="itemId>2"
            key="4"
            :class="{'show-animation': showItemId===3 & !isPreviousStep, 'hide-animation':  isPreviousStep}"
          )
            router-link.game__image-button(:to="{name: 'House'}")
              img.game__house3(src="assets/img/game/main/house3.svg")

        transition(name='game-houses' appear)
          .game__houses-container(
            v-if="itemId>2"
            key="4"
            :class="{'show-animation': showItemId===3  & !isPreviousStep, 'hide-animation':  isPreviousStep}"
          )
            img.game__houses(src="assets/img/game/main/houses.svg")

      transition(name='game-back')
        .game__background-container
          img.game__back(
            v-if="backgroundId===1"
            src="assets/img/game/back.svg"
          )
      transition(name='game-back')
        .game__background-container.m-second
          img.game__back(
            v-if="backgroundId===2"
            src="assets/img/game/back2.svg"
          )
      transition(name='game-back')
        .game__background-container.m-third
          img.game__back(
            v-if="backgroundId===3"
            src="assets/img/game/back3.svg"
          )
</template>

<script>
export default {
  props: {
    backgroundId: {
      type: Number,
      require: true
    },
    showItemId: {
      type: Number,
      require: true
    },
    isPreviousStep: {
      type: Boolean,
      require: false
    },
    isRules: {
      type: Boolean,
      require: false
    }
  },
  data() {
    return {
      itemId: 0
    }
  },
  methods: {
    initBack() {
      if (this.isPreviousStep) {
        this.itemId = this.showItemId + 1;
        setTimeout(() => this.itemId -= 1, 1)
      } else {
        this.itemId = this.showItemId;
      }
    }
  },
  mounted() {
    this.initBack();
  }
}
</script>

<style lang="scss">
.game {
  &__background {
    position:    absolute;
    bottom:      0;
    left:        0;
    right:       0;
    width:       100%;
    height:      auto;
    overflow-x:  scroll;
    overflow-y:  visible;
    padding-top: 20%;

    @include w-from($screen-md) {
      overflow:    visible;
      padding-top: 0;
    }
  }

  &__image-container {
    position:   relative;
    min-width:  310%;
    width:      auto;
    min-height: 30vh;
    height:     100%;

    @include w-from($screen-md) {
      width:      100%;
      min-width:  100%;
      min-height: 100%;
      height:     auto;
    }
  }

  &__image-button {
    display: block;
    width:   100%;
    height:  100%;

    img {
      width:  auto;
      height: 100%;
    }

    @include w-from($screen-md) {
      height: auto;

      img {
        width:  100%;
        height: auto;
      }
    }

    @include hover() {
      cursor:     pointer;
      transform:  scale(1.1);
      transition: transform $transition-slow;
    }
  }

  &__back {
    width:      100%;
    align-self: flex-end;
    object-fit: cover;
  }

  &__background-container {
    width:           100%;
    margin-top:      0;
    background:      url("/assets/img/game/back.svg") no-repeat bottom;
    background-size: contain;

    @include w-to($screen-md) {
      img {
        height: 100%;
        width:  100%;
      }
    }

    &.m-second {
      background:      url("/assets/img/game/back2.svg") no-repeat bottom;
      background-size: contain;
    }

    &.m-third {
      background:      url("/assets/img/game/back3.svg") no-repeat bottom;
      background-size: contain;
    }
  }

  &__train-container {
    position: absolute;
    width:    auto;
    height:   40%;
    top:      -4%;
    left:     55px;
    z-index:  100;

    @include w-from($screen-md) {
      top:    -1.4vw;
      left:   4.5vw;
      width:  9vw;
      height: auto;
    }
  }

  &__fabric-container {
    position: absolute;
    top:      6%;
    right:    1.4%;
    width:    auto;
    height:   34%;
    z-index:  100;

    @include w-from($screen-md) {
      top:    1.5vw;
      right:  2.2vw;
      width:  24vw;
      height: auto;
    }
  }

  &__car-container {
    position:  absolute;
    bottom:    16%;
    right:     21%;
    width:     auto;
    height:    20%;
    animation: moveTransport 2s infinite;
    z-index:   100;

    @include hover() {
      animation-play-state: paused;
    }

    @include w-from($screen-md) {
      bottom: 4vw;
      right:  22.2vw;
      width:  7.5vw;
      height: auto;
    }
  }

  &__car-rules {
    position:      absolute;
    bottom:        13%;
    right:         19.6%;
    width:         10%;
    height:        25%;
    border:        solid 2px #F00;
    border-radius: 50%;
    z-index:       999;

    @include w-from($screen-md) {
      bottom: 3vw;
      right:  21vw;
      width:  9.5vw;
      height: 27%;
    }
  }

  &__house-container {
    z-index: 100;
  }

  &__houses-container {
    position:       absolute;
    left:           1.5%;
    bottom:         21%;
    width:          auto;
    height:         101%;
    pointer-events: none;
    z-index:        100;

    img {
      width:  auto;
      height: 100%;
    }

    @include w-from($screen-md) {
      left:   2vw;
      bottom: 5vw;
      width:  87vw;
      height: auto;

      img {
        width:  100%;
        height: auto;
      }
    }
  }

  &__house1-container {
    position:  absolute;
    left:      21%;
    bottom:    68%;
    width:     auto;
    height:    40%;
    animation: moveHouses 2s infinite;
    z-index:   100;

    @include w-from($screen-md) {
      left:   22vw;
      bottom: 17vw;
      width:  10vw;
      height: auto;
    }

    @include hover() {
      animation-play-state: paused;
    }
  }

  &__house2-container {
    position:  absolute;
    right:     25.5%;
    bottom:    42%;
    width:     auto;
    height:    45%;
    animation: moveHouses 2s infinite;
    z-index:   100;

    @include hover() {
      animation-play-state: paused;
    }

    @include w-from($screen-md) {
      bottom: 9vw;
      right:  27.5vw;
      width:  10.3vw;
      height: auto;
    }
  }

  &__house3-container {
    position:  absolute;
    bottom:    28%;
    left:      10.5%;
    width:     auto;
    height:    32%;
    animation: moveHouses 2s infinite;
    z-index:   100;

    @include hover() {
      animation-play-state: paused;
    }

    @include w-from($screen-md) {
      bottom: 7vw;
      left:   10.6vw;
      width:  5.3vw;
      height: auto;
    }
  }

  &__smoke-container {
    position:    relative;
    margin-left: 0.3vw;

    &.m-fabric1 {
      width:       33%;
      margin-left: 50%;
    }

    &.m-fabric2 {
      width:       33%;
      margin-left: 61%;
    }

    &.m-fabric3 {
      width:       33%;
      margin-left: 73%;
    }

    @include w-from($screen-md) {
      &.m-fabric1 {
        width:       auto;
        margin-left: 12vw;
      }

      &.m-fabric2 {
        width:       auto;
        margin-left: 14.8vw;
      }

      &.m-fabric3 {
        width:       auto;
        margin-left: 17.5vw;
      }
    }
  }

  &__smoke1 {
    position:  absolute;
    left:      0;
    bottom:    auto;
    top:       -20px;
    width:     20%;
    opacity:   0;
    animation: smoke1 3s infinite ease-in;

    @include w-from($screen-md) {
      bottom: 0.5vw;
      top:    auto;
      width:  1.8vw;
    }
  }

  &__smoke2 {
    position:  absolute;
    bottom:    auto;
    top:       -40px;
    left:      0.1vw;
    width:     15%;
    opacity:   0;
    animation: smoke2 3s infinite ease-in;

    @include w-from($screen-md) {
      bottom: 2.3vw;
      top:    auto;
      width:  1.4vw;
    }
  }

  &__smoke3 {
    position:  absolute;
    left:      0.1vw;
    bottom:    auto;
    top:       -60px;
    width:     13%;
    opacity:   0;
    animation: smoke3 3s infinite ease-in;

    @include w-from($screen-md) {
      bottom: 4vw;
      top:    auto;
      width:  1.2vw;
    }
  }
}

.game-images-enter-active {
  &.show-animation {
    animation: game-images-in 1s;
    z-index:   1000;
  }
}

.game-images-leave-active {
  &.hide-animation {
    animation: game-images-in 0.5s reverse;
    z-index:   1000;
  }
}

.game-houses-enter-active {
  &.show-animation {
    transition: opacity 1s;
    z-index:    1000;
  }
}

.game-houses-enter {
  &.show-animation {
    opacity: 0;
  }
}

.game-houses-leave-active {
  &.hide-animation {
    transition: opacity 1s;
    z-index:    1000;
  }
}

.game-houses-leave-to {
  &.hide-animation {
    opacity: 0;
  }
}

.game-back-enter-active {
  transition: opacity 3s;
  z-index:    5;
}

.game-back-enter {
  opacity: 0;
}

.game-back-enter-to {
  opacity: 1;
}

@keyframes game-images-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes moveHouses {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes moveTransport {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(6px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>