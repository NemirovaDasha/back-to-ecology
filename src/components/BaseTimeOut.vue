<template lang="pug">
  section.timeout
    .timeout__container
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
  width:      100vw;
  z-index:    5000;
  background: $color-background;
  overflow:   hidden !important;

  &__container {
    position: relative;
    width:    100vw;
    height:   100vh;
    overflow: hidden;
  }

  &__info {
    display:               grid;
    grid-template-rows:    1fr 1fr;
    grid-template-columns: 40% 60%;
    height:                calc(100vh - 46px);
    width:                 auto;
    margin:                0 auto;

    @include w-from($screen-md) {
      grid-template-rows:    1fr;
      grid-template-columns: 20% 1.5fr 1fr;
    }

    @include w-from($screen-lg) {
      height: calc(100vh - 98px);
    }
  }

  &__text-container {
    padding:    20px;
    height:     fit-content;
    box-sizing: border-box;
    z-index:    100;
    align-self: center;

    @include w-to($screen-md) {
      grid-column-start: 1;
      grid-column-end:   3;
      grid-row:          1;
    }

    @include w-from($screen-md) {
      margin-top: -46px;
    }
    @include w-from($screen-lg) {
      margin-top: -98px;
    }
  }

  &__clock {
    display:    block;
    padding:    0 30px;
    width:      100%;
    align-self: flex-start;

    .preloader__icon {
      transform: scale(0.8);
      margin:    0 auto;
    }

    @include w-from($screen-md) {
      margin-top: -46px;
      align-self: center;

      .preloader__icon {
        transform: scale(1);
        margin:    0 auto;
      }
    }

    @include w-from($screen-lg) {
      margin-top: -98px;

      .preloader__icon {
        transform: scale(1.5);
        margin:    0 auto;
      }
    }

    @include w-from($screen-xl) {
      .preloader__icon {
        transform: scale(2);
        margin:    0 auto;
      }
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
    flex-direction:  column;
    align-items:     center;
    justify-content: space-evenly;
    width:           100%;
    margin-top:      10%;
    text-align:      center;
    padding:         0 40px;
    box-sizing:      border-box;

    @include w-from($screen-md) {
      padding: 0;
    }
    @include w-from($screen-lg) {
      flex-direction: row;
    }
  }

  &__text {
    text-align: center;

    @include w-from($screen-lg) {
      padding:    0 20px;
      box-sizing: border-box;
    }

    p {
      font-size:   18px;
      line-height: 24px;

      @include w-from($screen-md) {
        font-size:   20px;
        line-height: 24px;
      }

      @include w-from($screen-lg) {
        font-size:   26px;
        line-height: 34px;
      }

      @include w-from($screen-xl) {
        font-size:   32px;
        line-height: 38px;
      }
    }
  }

  &__continue {
    width:       100% !important;
    font-size:   18px !important;
    line-height: 26px !important;
    padding:     15px !important;

    @include w-from($screen-md) {
      width:       50% !important;
      font-size:   20px !important;
      line-height: 30px !important;
    }

    @include w-from($screen-lg) {
      padding:     20px 15px !important;
      font-size:   26px !important;
      line-height: 34px !important;
    }

    @include w-from($screen-xl) {
      font-size:   32px !important;
      line-height: 36px !important;
    }
  }

  &__hero {
    height:     auto;
    max-height: 100%;
    width:      auto;
    max-width:  100%;
    margin:     0 auto;
    align-self: flex-end;
    z-index:    100;

    @include w-from($screen-md) {
      height:     auto;
      max-height: 60%;
    }

    @include w-from($screen-lg) {
      height: 70%;
      max-height: 650px;
    }
  }
}
</style>