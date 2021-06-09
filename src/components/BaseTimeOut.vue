<template lang="pug">
  section.timeout
    HomeClouds
    TypoH1 Нужен отдых
    .timeout__info
      .timeout__clock
        BasePreloaderClock
      .timeout__text-container
        .timeout__text
          p Нужно сделать перерыв!
          p Нельзя долго сидеть за экраном без перерыва.
          p Дай глазкам отдохнуть, сделай разминку или гимнастику.
        .timeout__timer
          BaseTimeOutTimer
          button.button.t-orange.timeout__continue(
            @click="$emit('reset-timer')"
          ) Продолжить

      img.timeout__hero(src="@/assets/img/other/about.svg" alt="главный герой")

</template>

<script>
import HomeClouds from "./HomeClouds";
import BasePreloaderClock from "./BasePreloaderClock";
import Parallax from 'parallax-js';
import BaseTimeOutTimer from "./BaseTimeOutTimer";

export default {
  components: {BaseTimeOutTimer, BasePreloaderClock, HomeClouds},
  methods: {
    init() {
      let clouds = document.getElementById('clouds');
      if (clouds != null) {
        new Parallax(clouds);
      }
    }
  },
  mounted() {
    this.init()
  }
}
</script>

<style lang="scss">
.timeout {
  position:   fixed;
  top:        0;
  bottom:     0;
  left:       0;
  right:      0;
  z-index:    5000;
  background: $color-background;

  &__info {
    display:               grid;
    grid-template-rows:    1fr;
    grid-template-columns: 20% 1.5fr 1fr;
    height:                calc(100% - 98px);
    width:                 auto;
    margin:                0 auto;
  }

  &__text-container {
    padding:    20px;
    margin-top: -98px;
    height:     fit-content;
    box-sizing: border-box;
    z-index:    100;
    align-self: center;
  }

  &__clock {
    display:    block;
    padding:    0 30px;
    margin-top: -98px;
    align-self: center;
    width:      100%;

    .preloader__icon {
      transform: scale(2);
      margin:    0 auto;
    }

    .preloader__minute-hand {
      animation:        clockHandAnimation 25s linear infinite;
      transform-origin: bottom right;
    }

    .preloader__hour-hand {
      animation:        clockHandAnimation 300s linear infinite;
      transform-origin: bottom left;
    }
  }

  &__timer {
    display:         flex;
    flex-direction:  row;
    align-items:     center;
    justify-content: space-evenly;
    width:           100%;
    margin-top:      10%;
    text-align:      center;
  }

  &__text {
    text-align: center;
    padding:    0 20px;

    p {
      font-size:   32px;
      line-height: 38px;
    }
  }

  &__continue {
    width: 50% !important;
  }

  &__hero {
    height:     70%;
    max-height: 650px;
    width:      auto;
    margin:     0 auto;
    align-self: flex-end;
    z-index:    100;
  }
}
</style>