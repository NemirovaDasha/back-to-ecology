<template lang="pug">
  .timer
    .timer__container
      span.timer__minute#timer-minutes 00
      span &nbsp;:&nbsp;
      span.rimer__second#timer-seconds 00
</template>

<script>
export default {
  methods: {
    isStopTimer() {
      const isStop = localStorage.getItem('stopGame');
      return (isStop === 'stop')
    },
    startTimer(minute, second) {
      const minutesHtml = document.getElementById('timer-minutes')
      const secondsHtml = document.getElementById('timer-seconds')
      minutesHtml.innerHTML = this.setNumber(minute);
      secondsHtml.innerHTML = this.setNumber(second);

      let timer = setInterval(() => {
        if (!this.isStopTimer()) {
          clearInterval(timer)
        } else {
          if (second === 59) {
            minute += 1;
            minutesHtml.innerHTML = this.setNumber(minute);
            localStorage.setItem('restTimerMinutes', minute);
            if (minute === 59) {
              clearInterval(timer);
            } else {
              second = 0;
            }
          } else {
            second += 1;
          }
          secondsHtml.innerHTML = this.setNumber(second);
          localStorage.setItem('restTimerSeconds', second);
        }
      }, 1000)
    },
    setNumber(number) {
      return (number < 10) ? '0' + number : number.toString()
    }
  },
  mounted() {
    if (this.isStopTimer()) {
      let second = localStorage.getItem('restTimerSeconds')
      let minute = localStorage.getItem('restTimerMinutes')
      if (second && minute) {
        this.startTimer(parseInt(minute), parseInt(second));
      } else {
        if (second) {
          this.startTimer(0, parseInt(second));
        } else {
          this.startTimer(0, 0);
        }
      }
    }
  }
}
</script>

<style lang="scss">
.timer {
  background:    rgba(#568F11, 0.9);
  border-radius: 14px;
  text-align:    center;
  width:         100%;
  margin-bottom: 20px;
  padding:       15px 20px;
  box-sizing:    border-box;

  @include w-from($screen-md) {
    width:   50%;
    padding: 15px 20px;
  }

  @include w-from($screen-lg) {
    width:         16%;
    min-width:     145px;
    padding:       20px;
    margin-bottom: 0;
  }

  span {
    width:       34px;
    color:       white;
    font-size:   22px;
    line-height: 26px;

    @include w-from($screen-md) {
      font-size:   26px;
      line-height: 30px;
    }
    @include w-from($screen-lg) {
      font-size:   32px;
      line-height: 34px;
    }
    @include w-from($screen-xl) {
      font-size:   34px;
      line-height: 36px;
    }
  }
}
</style>