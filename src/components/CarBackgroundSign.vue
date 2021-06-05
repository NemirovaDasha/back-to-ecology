<template lang="pug">
  .checkbox()
    svg.checkbox__svg(
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      style="enable-background:new 0 0 100 100;"
      xml:space="preserve"
    )
      template(v-if="isSuccess")
        polyline.checkbox__line.m-success(points="3.5,51.5 40.5,82.5 96.7,15.3")
      template(v-else)
        polyline.checkbox__line.m-wrong-1(points="90.5,5.5 5.5,90.5")
        polyline.checkbox__line.m-wrong-2(points="5.5,5.5 90.5,90.5")
</template>

<script>
export default {
  props: {
    isSuccess: {
      type: Boolean,
      require: true
    }
  }
}
</script>

<style lang="scss">
.checkbox {
  position:       absolute;
  bottom:         15%;
  left:           46%;
  z-index:        1000;
  pointer-events: none;

  &.m-gas {
    left: 40%;
  }

  &__svg {
    width:     4vw;
    min-width: 25px;
  }

  &__line {
    fill:              none;
    stroke-width:      20;
    stroke-miterlimit: 10;

    &.m-success {
      stroke:           #70AB13;
      stroke-dasharray: 0, 154;
      animation:        checked 1s ease 1 forwards;
    }

    &.m-wrong-1 {
      stroke:           #FFA500;
      stroke-dasharray: 0, 154;
      animation:        wrong1 1s ease 1 forwards;
    }

    &.m-wrong-2 {
      stroke:           #FFA500;
      stroke-dasharray: 0, 154;
      animation:        wrong2 1s ease 1 forwards;
    }
  }
}

@keyframes checked {
  from {
    stroke-dasharray: 0, 154;
  }
  to {
    stroke-dasharray: 140, 154;
  }
}

@keyframes wrong1 {
  0% {
    stroke-dasharray: 0, 154;
  }
  50% {
    stroke-dasharray: 140, 154;
  }
  100% {
    stroke-dasharray: 140, 154;
  }
}


@keyframes wrong2 {
  0% {
    stroke-dasharray: 0, 154;
  }
  50% {
    stroke-dasharray: 0, 154;
  }
  100% {
    stroke-dasharray: 140, 154;
  }
}
</style>