<template lang="pug">
  #app
    transition(name="timer")
      BaseTimeOut(
        v-if="stopGame"
        key="stopGame"
        @reset-timer="resetTimer"
      )
    transition(
      name="preloader"
      mode="out-in"
    )
      RouterView
</template>

<script>

import BaseTimeOut from "./components/BaseTimeOut";

export default {
  components: {BaseTimeOut},
  data() {
    return {
      startTime: 0,
      maxMinutes: 10,
      stopGame: false
    }
  },
  methods: {
    getTime() {
      const time = localStorage.getItem('startTime');
      const newDate = new Date();
      if (time) {
        const currentTime = new Date(time);
        const checkDif = Math.floor((newDate.getTime() - currentTime.getTime()) / 60000);
        if (checkDif >= 60) {
          this.startTime = newDate;
          localStorage.setItem('startTime', newDate);
        } else {
          this.startTime = currentTime;
        }
      } else {
        this.startTime = newDate;
        localStorage.setItem('startTime', newDate)
      }
    },
    timer() {
      let now = new Date();
      let currentMinutes = Math.floor((now.getTime() - this.startTime.getTime()) / 60000);
      if (currentMinutes >= this.maxMinutes) {
        this.stopGame = true;
        localStorage.setItem('stopGame', 'stop');
        return true;
      } else {
        return false
      }
    },
    minutesCounter() {
      this.timer();
      let maxTime = setInterval(() => {
        let checkTime = this.timer();
        if (checkTime) {
          clearInterval(maxTime);
        }
      }, 60000)
    },
    resetTimer() {
      const now = new Date();
      localStorage.setItem('startTime', now);
      localStorage.setItem('stopGame', 'start');
      localStorage.setItem('restTimerSeconds', 0);
      localStorage.setItem('restTimerMinutes', 0);
      this.stopGame = false;
      this.getTime();
      this.minutesCounter();
    }
  },
  mounted() {
    this.getTime();
    const checkStop = localStorage.getItem('stopGame');
    if (checkStop === 'stop') {
      this.stopGame = true;
    } else {
      this.minutesCounter();
    }
  }
}
</script>

<style lang="scss">
//reset
body {
  margin:                  0;
  -webkit-font-smoothing:  antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width:               320px;
  text-size-adjust:        none;
  color:                   $color-text-default;
}

html,
body {
  background: white;
  width:      100%;
  min-height: 100vh;

  &.mod-popup-is-open {
    position: fixed;
    overflow: hidden;
    width:    100%;
    height:   100%;
  }
}

html {
  background: $color-background;

  &.mod-popup-is-open {
    position: fixed;
    overflow: hidden;
    width:    100%;
    height:   100%;
  }
}

main {
  flex-grow: 1;
}

// Типографика и блоки

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  color:  inherit;
}

a {
  text-decoration:          none;
  color:                    inherit;
  outline:                  none;
  text-decoration-skip-ink: none;
  transition-property:      color, border-color;
  transition-duration:      $transition-hover-off;

  svg {
    transition: fill $transition-hover-off;
  }

  &:hover {
    transition-duration: $transition-hover-on;


    svg {
      transition: fill $transition-hover-on;
    }
  }
}

figure {
  margin: 0;
}

table {
  border-collapse: collapse;
  border-spacing:  0;
}

ul,
ol,
dl {
  margin:     0;
  padding:    0;
  list-style: none;
}

dd {
  margin: 0;
}

label {
  cursor: pointer;
}

// Интерактив и пользовательский ввод

a,
button,
label {
  // Подсветка при тапе
  -webkit-touch-callout:       none;
  -webkit-user-select:         none;
  -khtml-user-select:          none;
  -moz-user-select:            none;
  -ms-user-select:             none;
  user-select:                 none;
  -webkit-tap-highlight-color: transparent;
  cursor:                      pointer;
}

button,
input,
textarea,
select {
  color:                       inherit;
  font-family:                 inherit;
  margin:                      0;
  padding:                     0;
  background:                  none;
  border:                      none;
  border-radius:               0;
  outline:                     none;
  -webkit-appearance:          none;
  -moz-appearance:             none;
  cursor:                      pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

button {
  outline:    initial;
  transition: color $transition-hover-off;

  svg {
    transition: fill $transition-hover-off;
  }

  @include hoverOld() {
    transition: color $transition-hover-on;

    svg {
      transition: fill $transition-hover-on;
    }
  }
}

textarea {
  display: block;
  resize:  none;
}

select::-ms-expand {
  display: none;
}

input::-ms-clear {
  display: none;
}

input[type="number"] {
  -moz-appearance: textfield;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin:             0;
  }
}

hr {
  border: none;
  margin: 0;
}

img,
svg {
  display: block;
}

// Пытаемся прятать подсветку автозаполнения полей
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  background: none !important;
  transition: background-color 999s, color 999s !important;;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button,
input::-webkit-clear-button {
  -webkit-appearance: none;
  display:            none;
  margin:             0;
}

//fonts
@font-face {
  font-family: 'Anitype Redwood1';
  src:         url('~@/assets/fonts/anitype-redwood/anitype-redwood.otf');
  font-weight: normal;
  font-style:  normal;
}

@font-face {
  font-family: 'Gotham';
  src:         url('~@/assets/fonts/gotham/GothamPro.woff') format('woff');
  font-weight: normal;
  font-style:  normal;
}

//services
body {
  //@include display-flex(column, stretch, stretch);
  @include font-size(20px, normal, 24px);
  max-width:  100vw;
  min-width:  100vw;
  width:      100vw;
  min-height: 100vh;
  max-height: 100vh;
  height:     100vh;
  background: $color-background;
  position:   relative;
  overflow:   hidden;

  &.no-overflow {
    overflow-y: auto;
    max-height: none;
    height:     100%;
  }

  &.no-overflow-md {
    @include w-to($screen-lg) {
      overflow-y: auto;
      max-height: none;
      height:     100%;
    }
  }
}

footer,
header,
main {
  font-family: $font-family-default;

  a {
    color:      $color-blue;
    transition: color $transition-hover-off;

    @include hover() {
      color:      $color-orange;
      transition: color $transition-hover-on;
    }
  }
}

.wrapper {
  padding:    16px;
  box-sizing: border-box;
  max-width:  1800px;
  margin:     0 auto;

  @include w-from($screen-md) {
    padding: 24px;
  }

  @include w-from($screen-lg) {
    padding: 40px;
  }

  @include w-from($screen-xl) {
    padding: 80px;
  }
}

.mod-visible {
  visibility: visible;
}

.mod-hidden {
  visibility: hidden;
}

.mod-only-lg {
  @include w-to($screen-lg) {
    display: none !important;
  }
}

.mod-only-sm {
  @include w-from($screen-md) {
    display: none !important;
  }
}

.mod-no-sm {
  @include w-to($screen-md) {
    display: none !important;
  }
}

.mod-no-lg {
  @include w-from($screen-lg) {
    display: none !important;
  }
}

.mod-translate {
  @include w-to($screen-lg) {
    opacity:   0;
    animation: transformTree 1s;
  }
}

.t-back-color {
  width:           100%;
  height:          100%;
  min-height:      100vh;
  background:      url("~@/assets/img/other/background2.svg") no-repeat fixed;
  background-size: cover;
}

.t-p1 {
  @include font-size(26px, normal, 46px);
  margin-bottom: 116px;
  width:         740px;
}

.t-p2 {
  @include font-size(26px, normal, 46px);
  margin-bottom: 56px;
}

a, p {
  font-size:   16px;
  line-height: 22px;
  box-sizing:  border-box;

  @include w-from($screen-lg) {
    font-size:   20px;
    line-height: 24px;
  }
  @include w-from($screen-xl) {
    font-size:   24px;
    line-height: 36px;
  }
}

.back-to-game {
  left:    16px !important;
  right:   auto !important;
  z-index: 2000;

  @include w-from($screen-md) {
    right: 132px !important;
    left:  auto !important;
  }

  @include w-from($screen-lg) {
    right: 212px !important;
    left:  auto !important;
  }
}

.mod-hide {
  opacity:    0 !important;
  transition: opacity .5s;
}

.game-transition-enter-active, .game-transition-leave-active {
  transition: opacity .5s;
}

.game-transition-enter, .game-transition-leave-to {
  opacity: 0;
}

.base-text-enter-active {
  animation: animationText 0.4s reverse linear;
}

.base-text-enter, .base-text-leave-to {
  display: none;
}

.base-text-leave-active {
  animation: animationText 0.4s linear;
}

@keyframes animationText {
  0% {
    opacity: 1;
  }
  49% {
    opacity: 0;
    display: block;
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


@keyframes transformTree {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}

@keyframes smoke1 {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  35% {
    opacity: 1;
  }
  70% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@keyframes smoke2 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes smoke3 {
  0% {
    opacity: 0;
  }
  35% {
    opacity: 0;
  }
  60% {
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.preloader-enter-active, .preloader-leave-active {
  transition: opacity 1.5s ease-out;

  .preloader {
    display:   flex;
    animation: preloaderOut 1.5s linear;
  }

  .preloader__icon {
    animation: preloaderIn 1.5s linear;
  }

  .preloader__minute-hand {
    animation:        clockHandAnimation 1s linear infinite;
    transform-origin: bottom right;
  }

  .preloader__hour-hand {
    animation:        clockHandAnimation 10s linear infinite;
    transform-origin: bottom left;
  }
}

.preloader-enter, .preloader-leave-to {
  opacity: 0;
}

.preloader-enter-to, .preloader-leave {
  opacity: 1;

  .preloader {
    display: none;
  }
}

.timer-enter-active, .timer-leave-active {
  transition: opacity 1s;
}

.timer-enter, .timer-leave-to {
  opacity: 0;
}

@keyframes clockHandAnimation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes mainAnimation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes preloaderIn {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes preloaderOut {
  0% {
    opacity: 1;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  99% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>
