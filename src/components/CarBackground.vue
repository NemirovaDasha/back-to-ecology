<template lang="pug">
  .car__background
    .car__auto-container
      CarBackgroundAuto(
        v-for="car in cars"
        :key="car.id"
        :car="car"
        :active-car-number="activeCarNumber"
      )

    button.car__station(
      type="button"
      @click="checkType('electric')"
    )
      .car__station-sign
        CarBackgroundSign(
          v-if="answerType==='electric'"
          :is-success="isCorrectAnswer"
        )
        img(src="assets/img/game/car/electric.svg")

    button.car__station.m-gas(
      type="button"
      @click="checkType('gas')"
    )
      .car__station-sign
        CarBackgroundSign.m-gas(
          v-if="answerType==='gas'"
          :is-success="isCorrectAnswer"
        )
        img(src="assets/img/game/car/gas.svg")

    img.car__road(src="assets/img/game/car/road.svg")
</template>

<script>
import CarBackgroundAuto from "./CarBackgroundAuto";
import CarBackgroundSign from "./CarBackgroundSign";

export default {
  components: {CarBackgroundSign, CarBackgroundAuto},
  data() {
    return {
      carsList: [
        {
          id: 'car1',
          number: 1,
          type: 'electric',
          image: 'assets/img/game/car/cars/car1.svg',
          alt: 'машина'
        },
        {
          id: 'car2',
          number: 2,
          type: 'electric',
          image: 'assets/img/game/car/cars/car2.svg',
          alt: 'машина'
        },
        {
          id: 'car3',
          number: 3,
          type: 'gas',
          image: 'assets/img/game/car/cars/car3.svg',
          alt: 'машина'
        },
        {
          id: 'car4',
          number: 4,
          type: 'electric',
          image: 'assets/img/game/car/cars/car4.svg',
          alt: 'машина'
        },
        {
          id: 'car5',
          number: 5,
          type: 'gas',
          image: 'assets/img/game/car/cars/car5.svg',
          alt: 'машина'
        },
        {
          id: 'car6',
          number: 6,
          type: 'electric',
          image: 'assets/img/game/car/cars/car6.svg',
          alt: 'машина'
        },
        {
          id: 'car7',
          number: 7,
          type: 'gas',
          image: 'assets/img/game/car/cars/car7.svg',
          alt: 'машина'
        },
        {
          id: 'car8',
          number: 8,
          type: 'gas',
          image: 'assets/img/game/car/cars/car8.svg',
          alt: 'машина'
        },
        {
          id: 'car9',
          number: 9,
          type: 'electric',
          image: 'assets/img/game/car/cars/car9.svg',
          alt: 'машина'
        },
        {
          id: 'car10',
          number: 10,
          type: 'gas',
          image: 'assets/img/game/car/cars/car10.svg',
          alt: 'машина'
        },
        {
          id: 'car11',
          number: 11,
          type: 'electric',
          image: 'assets/img/game/car/cars/car11.svg',
          alt: 'машина'
        }
      ],
      cars: [],
      activeCarNumber: 1,
      gameCounter: 0,
      isCorrectAnswer: true,
      answerType: ''
    }
  },
  methods: {
    checkType(type) {
      this.answerType = type;
      if (this.cars[this.activeCarNumber - 1].type === type) {
        this.isCorrectAnswer = true;
        this.activeCarNumber += 1;
        this.gameCounter += 1;

        setTimeout(() => this.answerType = '', 2000)

        if (this.gameCounter === this.cars.length)
          this.$emit('end-game-cars')

      } else {
        this.isCorrectAnswer = false;
        setTimeout(() => this.answerType = '', 2000)
      }
    }
  },
  mounted() {
    let currentIndex = 0;
    const maxIndex = this.carsList.length;
    let randomIndex, temporaryValue;

    while (maxIndex > currentIndex) {
      randomIndex = Math.floor(Math.random() * maxIndex);
      temporaryValue = this.carsList[currentIndex];
      temporaryValue.number = randomIndex + 1;
      this.carsList[currentIndex] = this.carsList[randomIndex];
      this.carsList[currentIndex].number = currentIndex + 1;
      this.carsList[randomIndex] = temporaryValue;

      currentIndex += 1;
    }
    this.cars = this.carsList
  }
}
</script>

<style lang="scss">
.car {
  &__road {
    width:      100vw;
    max-height: 90vh;
    height:     100%;
    object-fit: cover;
    position:   absolute;
    bottom:     0;
    left:       0;
    right:      0;
  }

  &__station {
    position:   absolute;
    right:      0;
    bottom:     37%;
    z-index:    99;
    width:      16.2vw;
    min-width:  100px;
    transition: all $transition-fast;

    &.m-gas {
      width:     18.96vw;
      min-width: 117px;
      right:     11%;
      bottom:    2vw;
      z-index:   101;
    }

    img {
      width: 100%;
    }

    @include hover {
      transform:  scale(1.05);
      transition: all $transition-medium;
    }
  }

  &__station-sign {
    width:    100%;
    height:   100%;
    position: relative;
  }

  &__auto-container {
    width:    100vw;
    height:   100vh;
    overflow: hidden;
    position: relative;
  }
}
</style>