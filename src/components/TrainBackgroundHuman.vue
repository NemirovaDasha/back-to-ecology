<template lang="pug">
  button.train__human-button(
    :class="humanParameter.class"
    @click="clickHuman"
  )
    img.train__human-image(
      :id="humanParameter.id"
      :name="humanType"
      :src="humanParameter.src"
      :alt="humanParameter.alt"
    )

</template>

<script>
export default {
  props: {
    humanParameter: {
      type: Object,
      require: true
    }
  },
  computed: {
    humanType() {
      if (this.humanParameter.isPassenger) {
        return 'passenger'
      } else {
        return 'worker'
      }
    }
  },
  methods: {
    clickHuman(e) {
      this.$emit('click-human', e.target)
    }
  }
}
</script>

<style lang="scss">
.train {
  &__human-button {
    position:   absolute;
    z-index:    100;
    opacity:    1;
    transition: opacity .5s;

    > img {
      width:  100%;
      height: 100%;
    }
  }

  .human1 {
    width:  8%;
    left:   18%;
    bottom: 63%;

    @include w-from($screen-lg) {
      width:  8.5vw;
      bottom: 35.55vw;
    }
  }

  .human2 {
    width:  3.5%;
    right:  42%;
    bottom: 63.4%;

    @include w-from($screen-lg) {
      width:  3.5vw;
      bottom: 35.8vw;
    }
  }

  .human3 {
    width:  6%;
    right:  5%;
    bottom: 63.4%;

    @include w-from($screen-lg) {
      width:  5.8vw;
      bottom: 35.8vw;
    }
  }

  .human4 {
    width:  5.54%;
    left:   18.64%;
    bottom: 40.75%;

    @include w-from($screen-lg) {
      width:  5.61vw;
      bottom: 22.9vw;
    }
  }

  .human5 {
    width:  5.54%;
    left:   50.5%;
    bottom: 32.9%;

    @include w-from($screen-lg) {
      width:  5.61vw;
      bottom: 18.6vw;
    }
  }

  .human6 {
    width:  6.1%;
    right:  23.55%;
    bottom: 32.85%;

    @include w-from($screen-lg) {
      width:  6vw;
      bottom: 18.5vw;
    }
  }

  .human7 {
    width:  6.05%;
    right:  1.25%;
    bottom: 32.85%;

    @include w-from($screen-lg) {
      width:  6.13vw;
      bottom: 18.5vw;
    }
  }

  .human8 {
    width:  5.7%;
    right:  15%;
    bottom: 43.4%;

    @include w-from($screen-lg) {
      width:  6vw;
      bottom: 24.48vw;
    }
  }

  .human9 {
    width:  4.5%;
    left:   16.1%;
    bottom: 1%;

    @include w-from($screen-lg) {
      width:  4.7vw;
      bottom: 0.45vw;
    }
  }
}
</style>