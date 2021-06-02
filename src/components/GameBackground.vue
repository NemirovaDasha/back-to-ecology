<template lang="pug">
  .game__background
    .game__image-container
      transition(name='game-images')
        .game__train-container(
          v-show="showItemId>0"
          key="1"
          )
          .game__smoke-container
            img.game__smoke2(src="assets/img/game/main/smoke/smoke3.svg")
            img.game__smoke1(src="assets/img/game/main/smoke/smoke1.svg")
          button.game__image-button(
            type="button"
            @click="$emit('start-game-train')"
            )
            img.game__train(src="assets/img/game/main/train2.svg")

      transition(name='game-images')
        .game__fabric-container(
          v-show="showItemId>0"
          key="2"
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

      transition(name='game-images')
        .game__car-container(
          v-show="showItemId>1"
          key="3"
        )
          button.game__image-button(type="button")
            img.game__car(src="assets/img/game/main/car.svg")

      transition(name='game-images')
        .game__house-container(
          v-if="showItemId>2"
          key="4"
        )
          .game__house1-container
            router-link.game__image-button(:to="{name: 'House'}")
              img.game__house1(src="assets/img/game/main/house1.svg")
          .game__house2-container
            router-link.game__image-button(:to="{name: 'House'}")
              img.game__house2(src="assets/img/game/main/house2.svg")
          .game__house3-container
            router-link.game__image-button(:to="{name: 'House'}")
              img.game__house3(src="assets/img/game/main/house3.svg")

          .game__houses-container
            img.game__houses(src="assets/img/game/main/houses.svg")

      transition(name='game-back')
        img.game__back(
          :src="background"
          )
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      require: true
    },
    showItemId: {
      type: Number,
      require: true
    }
  }
}
</script>

<style lang="scss">
.game {
  &__background {
    position: absolute;
    bottom:   0;
    left:     0;
    right:    0;
    width:    100%;
    height:   auto;
  }

  &__image-container {
    width:    100%;
    height:   100%;
    position: relative;
  }

  &__image-button {
    display: block;
    width:   100%;

    img {
      width: 100%;
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

  &__train-container {
    position: absolute;
    top:      -1.4vw;
    left:     4.5vw;
    width:    9vw;
  }

  &__fabric-container {
    position: absolute;
    top:      1.5vw;
    right:    2.2vw;
    width:    24vw;
  }

  &__car-container {
    position:  absolute;
    bottom:    4vw;
    right:     22.2vw;
    width:     7.5vw;
    animation: moveTransport 2s infinite;

    @include hover() {
      animation-play-state: paused;
    }
  }

  &__houses-container {
    position:       absolute;
    left:           2vw;
    bottom:         5vw;
    width:          87vw;
    pointer-events: none;

    img {
      width: 100%;
    }
  }

  &__house1-container {
    position:  absolute;
    left:      22vw;
    width:     10vw;
    bottom:    17vw;
    animation: moveHouses 2s infinite;

    @include hover() {
      animation-play-state: paused;
    }
  }

  &__house2-container {
    position:  absolute;
    bottom:    9vw;
    right:     27.5vw;
    width:     10.3vw;
    animation: moveHouses 2s infinite;

    @include hover() {
      animation-play-state: paused;
    }
  }

  &__house3-container {
    position:  absolute;
    bottom:    7vw;
    left:      10.6vw;
    width:     5.3vw;
    animation: moveHouses 2s infinite;

    @include hover() {
      animation-play-state: paused;
    }
  }

  &__smoke-container {
    position:    relative;
    margin-left: 0.3vw;

    &.m-fabric1 {
      margin-left: 12vw;
    }

    &.m-fabric2 {
      margin-left: 14.8vw;
    }

    &.m-fabric3 {
      margin-left: 17.5vw;
    }
  }

  &__smoke1 {
    position:  absolute;
    bottom:    0.5vw;
    left:      0;
    width:     1.8vw;
    opacity:   0;
    animation: smoke1 3s infinite ease-in;
  }

  &__smoke2 {
    position:  absolute;
    bottom:    2.3vw;
    left:      0.1vw;
    width:     1.4vw;
    opacity:   0;
    animation: smoke2 3s infinite ease-in;
  }

  &__smoke3 {
    position:  absolute;
    bottom:    4vw;
    left:      0.1vw;
    width:     1.2vw;
    opacity:   0;
    animation: smoke3 3s infinite ease-in;
  }
}

.game-images-enter-active {
  animation: game-images-in .5s;
}
.game-images-leave-active {
  animation: game-images-in .5s reverse;
}

.game-back-enter-active, .game-back-leave-active {
  transition: opacity .5s;
}
.game-back-enter, .game-back-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

@keyframes game-images-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
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
    transform: scale(1.01);
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