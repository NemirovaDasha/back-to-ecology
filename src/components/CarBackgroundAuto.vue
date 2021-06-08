<template lang="pug">
  .car__car-box
    transition(name="hide-car")
      .car__car-container(
        v-if="car.number > activeCarNumber - 2"
        :key="car.id"
        :class="{'m-hide': car.number > activeCarNumber + 1, 'm-left': car.number === activeCarNumber + 1}"
      )
        transition(name="car-electric")
          img.car__auto(
            v-if="car.number >= activeCarNumber& car.type === 'electric'"
            :key="car.id"
            :id="car.id"
            :name="car.type"
            :src="car.image"
            :alt="car.alt"
          )
    transition(name="hide-car")
      .car__car-container.m-gas(
        v-if="car.number > activeCarNumber - 2"
        :key="car.id"
        :class="{'m-hide': car.number > activeCarNumber + 1, 'm-left': car.number === activeCarNumber + 1}"
      )
        transition(name="car-gas")
          img.car__auto(
            v-if="car.number >= activeCarNumber & car.type === 'gas'"
            :key="car.id"
            :id="car.id"
            :name="car.type"
            :src="car.image"
            :alt="car.alt"
          )

</template>

<script>
export default {
  props: {
    activeCarNumber: {
      type: Number,
      require: true
    },
    car: {
      type: Object,
      require: true
    }
  }
}
</script>

<style lang="scss">
.car {
  &__car-container {
    position:   absolute;
    bottom:     71%;
    right:      33.5%;
    width:      30.5%;
    min-width:  180px;
    z-index:    90;
    transition: right 4s;

    &.m-left {
      right:      95%;
      transition: right 4s;
    }

    &.m-hide {
      right:      150%;
      transition: right 4s;
      visibility: hidden;
    }

    &.m-gas {
      z-index: 100;
    }

    @include w-from($screen-md) {
      right: 61.5%;

      &.m-hide {
        right: 150%;
      }
    }
  }

  &__auto {
    width: 100%;

    //&.move-electric {
    //  transition:   transform 4s ease,
    //                margin-right 5s ease-in;
    //
    //  transform:    translate(1vw, 30vh);
    //  margin-right: -85%;
    //
    //  @include w-from($screen-lg) {
    //    transform:    translate(35vw, 100%);
    //    margin-right: -60%;
    //  }
    //}
  }
}

.car-electric-leave-active {
  transition: transform 4s ease,
              margin-left 5s ease-in;
}

.car-electric-leave-to {
  transform:    translate(1vw, 30vh);
  margin-left: 85vw;

  @include w-from($screen-lg) {
    transform:    translate(35vw, 100%);
    margin-left: 60vw;
  }
}

.car-gas-leave-active {
  transition: transform 4s ease,
              margin-left 6s ease-in;
}

.car-gas-leave-to {
  transform:    translate(0, 60vh);
  margin-left: 95vw;

  @include w-from($screen-lg) {
    transform: translate(2vw, 280%);
  }
}

.hide-car-leave-active {
  transition: transform 2s;
}

.hide-car-leave-to {
  transform: translate(100vw, 50%);
}
</style>