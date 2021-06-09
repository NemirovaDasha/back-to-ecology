<template lang="pug">
  .timer
    span.timer__minute#timer-minutes 00
    span &nbsp;:&nbsp;
    span.rimer__second#timer-seconds 00
</template>

<script>
export default {
  methods: {
    isStopTimer(){
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
  padding:       20px;
  background:    rgba(#568F11, 0.9);
  border-radius: 20px;
  text-align:    center;

  span {
    color:       white;
    font-size:   34px;
    line-height: 36px;
  }
}
</style>