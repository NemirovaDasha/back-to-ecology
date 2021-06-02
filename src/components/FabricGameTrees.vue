<template lang="pug">
  .game-trees
    .game-trees__seeds
      img(
        v-for="seed in images"
        :key="seed.id"
        :id="'seed' + seed.id"
        src="assets/img/game/fabric/trees/seed.svg"
        draggable="true"
        @dragstart="dragStart"
        @dragover.stop
      )
    .game-trees__holes
      img(
        v-for="hole in images"
        :key="hole.id"
        :id="'hole' + hole.id"
        :class="hole.holeClass"
        src="assets/img/game/fabric/trees/hole.svg"
        @dragover.prevent
        @drop.prevent="drop"
      )

    .game-trees__plants(v-if="plantsCounter!=11")
      img.game-trees__plant.mod-hidden(
        v-for="plant in images"
        :key="plant.id"
        :id="'plant' + plant.id"
        :class="plant.holeClass"
        src="assets/img/game/fabric/trees/plant.svg"
      )

    .game-trees__trees(
      v-if="plantsCounter===11"
      key="1"
    )
      img(
        src="assets/img/trees/tree1.svg"
        style="left:0; bottom: 21vw; height: 25vw; transform: scale(-1, 1);"
      )
      img(
        src="assets/img/trees/tree1.svg"
        style="left:39.5vw; bottom: 16vw; height: 33.5vw;"
      )
      img(
        src="assets/img/trees/tree1.svg"
        style="right:0.5vw; bottom: -1vw; height: 36vw; z-index:1002; transform: scale(-1, 1);"
      )
      img(
        src="assets/img/trees/tree2.svg"
        style="left:-6vw; bottom: -3vw; height: 38vw; z-index:1001"
      )
      img(
        src="assets/img/trees/tree2.svg"
        style="right: 24vw; bottom: 7vw; height: 26vw; z-index:1001"
      )
      img(
        src="assets/img/trees/tree2.svg"
        style="right: -1vw; bottom: 21vw; height: 18vw;"
      )
      img(
        src="assets/img/trees/tree2.svg"
        style="left: 26vw; bottom: 26vw; height: 18vw;"
      )
      img(
        src="assets/img/trees/tree5.svg"
        style="left: 15vw; bottom: 3vw; height: 32vw;"
      )
      img(
        src="assets/img/trees/tree5.svg"
        style="right: 11vw; bottom: 10vw; height: 32vw;"
      )
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          id: 1,
          holeClass: 'game-trees__hole1'
        },
        {
          id: 2,
          holeClass: 'game-trees__hole2'
        },
        {
          id: 3,
          holeClass: 'game-trees__hole3'
        },
        {
          id: 4,
          holeClass: 'game-trees__hole4'
        },
        {
          id: 5,
          holeClass: 'game-trees__hole5'
        },
        {
          id: 6,
          holeClass: 'game-trees__hole6'
        },
        {
          id: 7,
          holeClass: 'game-trees__hole7'
        },
        {
          id: 8,
          holeClass: 'game-trees__hole8'
        },
        {
          id: 9,
          holeClass: 'game-trees__hole9'
        },
        {
          id: 10,
          holeClass: 'game-trees__hole10'
        },
        {
          id: 11,
          holeClass: 'game-trees__hole11'
        },
      ],
      plantsCounter: 0
    }
  },
  methods: {
    drop(e) {
      const seedId = e.dataTransfer.getData('seed_id');
      const seed = document.getElementById(seedId);
      const id = e.target.id.split('hole')[1];
      const plant = document.getElementById('plant' + id);

      seed.classList.add('mod-hidden');
      e.target.classList.add('mod-hidden');
      plant.classList.remove('mod-hidden');
      this.plantsCounter = this.plantsCounter + 1;

      if (this.plantsCounter===11){
        this.$emit('end-game')
      }
    },
    dragStart(e) {
      const target = e.target;
      e.dataTransfer.setData('seed_id', target.id)
    }
  }
}
</script>

<style lang="scss">
.game-trees {
  &__seeds {
    position:        absolute;
    right:           0;
    top:             50%;
    display:         flex;
    flex-direction:  row;
    align-items:     center;
    justify-content: space-evenly;
    flex-wrap:       wrap;
    width:           100%;
    padding:         0 16px;
    box-sizing:      border-box;
    transform:       translatey(-50%);
    z-index:         100;

    @include w-from($screen-md) {
      padding:   0 150px;
      top:       30%;
      transform: translatey(0);

    }

    @include w-from($screen-lg) {
      padding:   0;
      right:     10vw;
      top:       5.5vw;
      max-width: 38vw;
    }

    img {
      width: 15vw;

      @include hover {
        cursor: pointer;
      }

      @include w-from($screen-md) {
        width: 10vw;
      }

      @include w-from($screen-lg) {
        width: 6.3vw;
      }
    }
  }

  &__trees {
    img {
      position: absolute;
      z-index:  1000;
    }
  }

  &__holes, &__plants {
    width: 100%;

    img {
      position: absolute;
      width:    6vw;
      z-index:  100;
    }
  }

  &__hole1 {
    left:   2vw;
    bottom: 9vw;
  }

  &__hole2 {
    left:   23vw;
    bottom: 4vw;
  }

  &__hole3 {
    left:   7vw;
    bottom: 20vw;
  }

  &__hole4 {
    left:   28vw;
    bottom: 25vw;
  }

  &__hole5 {
    right:  26vw;
    bottom: 27vw;
  }

  &__hole6 {
    right:  4vw;
    bottom: 21vw;
  }

  &__hole7 {
    left:   44vw;
    bottom: 17vw;
  }

  &__hole8 {
    right:  33vw;
    bottom: 20vw;
  }

  &__hole9 {
    right:  16vw;
    bottom: 13vw;
  }

  &__hole10 {
    right:  34vw;
    bottom: 8vw;
  }

  &__hole11 {
    right:  4vw;
    bottom: 3vw;
  }
}
</style>