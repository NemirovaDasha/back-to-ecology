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
      .game-trees__hole-container(
        v-for="hole in images"
        :key="hole.id"
        :id="'hole' + hole.id"
        :class="hole.holeClass"
        @dragover.prevent
        @drop.prevent="drop"
      )
        img(
          src="assets/img/game/fabric/trees/hole.svg"
        )

    transition(name="game-transition")
      .game-trees__plants(v-if="plantsCounter!=11")
        img.game-trees__plant.mod-hidden(
          v-for="plant in images"
          :key="plant.id"
          :id="'plant' + plant.id"
          :class="plant.holeClass"
          src="assets/img/game/fabric/trees/plant.svg"
        )

    transition(name="fabric-trees" appear)
      .game-trees__trees-container(
        v-if="plantsCounter===11"
        key="1"
      )
        .game-trees__tree-box(
          v-for="tree in trees"
          :key="tree.id"
          :class="tree.class"
        )
          img.game-trees__tree(
            :src="tree.src"
          )
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          id: 1,
          holeClass: 'hole1'
        },
        {
          id: 2,
          holeClass: 'hole2'
        },
        {
          id: 3,
          holeClass: 'hole3'
        },
        {
          id: 4,
          holeClass: 'hole4'
        },
        {
          id: 5,
          holeClass: 'hole5'
        },
        {
          id: 6,
          holeClass: 'hole6'
        },
        {
          id: 7,
          holeClass: 'hole7'
        },
        {
          id: 8,
          holeClass: 'hole8'
        },
        {
          id: 9,
          holeClass: 'hole9'
        },
        {
          id: 10,
          holeClass: 'hole10'
        },
        {
          id: 11,
          holeClass: 'hole11'
        },
      ],
      trees: [
        {
          id: 'tree1',
          src: 'assets/img/trees/tree1.svg',
          class: 'tree1'
        },
        {
          id: 'tree2',
          src: 'assets/img/trees/tree1.svg',
          class: 'tree2'
        },
        {
          id: 'tree3',
          src: 'assets/img/trees/tree1.svg',
          class: 'tree3'
        },
        {
          id: 'tree4',
          src: 'assets/img/trees/tree2.svg',
          class: 'tree4'
        },
        {
          id: 'tree5',
          src: 'assets/img/trees/tree2.svg',
          class: 'tree5'
        },
        {
          id: 'tree6',
          src: 'assets/img/trees/tree2.svg',
          class: 'tree6'
        },
        {
          id: 'tree7',
          src: 'assets/img/trees/tree2.svg',
          class: 'tree7'
        },
        {
          id: 'tree8',
          src: 'assets/img/trees/tree5.svg',
          class: 'tree8'
        },
        {
          id: 'tree9',
          src: 'assets/img/trees/tree5.svg',
          class: 'tree9'
        }
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

      if (this.plantsCounter === 11) {
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
  position:       absolute;
  top:            0;
  bottom:         0;
  left:           0;
  right:          0;
  z-index:        100;
  pointer-events: none;

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
    pointer-events:  auto;

    @include w-from($screen-md) {
      padding:   0 150px;
      top:       20%;
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

  &__tree-box {
    position:        absolute;
    z-index:         1000;
    display:         flex;
    flex-direction:  column;
    align-items:     center;
    justify-content: flex-end;

    &.tree1 {
      left:      0;
      bottom:    21vw;
      height:    25vw;
      width:     16.6vw;
      transform: scale(-1, 1);
    }

    &.tree2 {
      left:   39.5vw;
      bottom: 16vw;
      height: 33.5vw;
      width:  23vw;
    }

    &.tree3 {
      right:     0.5vw;
      bottom:    -1vw;
      height:    36vw;
      width:     24vw;
      z-index:   1002;
      transform: scale(-1, 1);
    }

    &.tree4 {
      left:    -6vw;
      bottom:  -3vw;
      height:  38vw;
      width:   29vw;
      z-index: 1001
    }

    &.tree5 {
      right:   24vw;
      bottom:  7vw;
      height:  26vw;
      width:   20vw;
      z-index: 1001
    }

    &.tree6 {
      right:  -3vw;
      bottom: 21vw;
      height: 18vw;
      width:  14vw;
    }

    &.tree7 {
      left:    26vw;
      bottom:  26vw;
      height:  18vw;
      width:   13.8vw;
      z-index: 999;
    }

    &.tree8 {
      left:   15vw;
      bottom: 3vw;
      height: 32vw;
      width:  23vw;
    }

    &.tree9 {
      right:  11vw;
      bottom: 10vw;
      height: 32vw;
      width:  23vw;
    }
  }

  &__tree {
    height: 100%;
    width:  auto;
  }

  &__plants {
    width: 100%;
  }

  &__plant {
    position:       absolute;
    width:          6vw;
    z-index:        100;
    pointer-events: none;
  }

  &__holes {
    position:       relative;
    width:          100%;
    height:         100vh;
    min-height:     500px;
    pointer-events: none;
  }

  &__hole-container {
    position:       absolute;
    pointer-events: auto;
    width:          6vw;
    z-index:        100;

    &:after {
      content:  '';
      position: absolute;
      top:      -2vw;
      bottom:   -2vw;
      right:    -2vw;
      left:     -2vw;
    }

    img {
      width: 100%;
    }
  }

  .hole1 {
    left:   2vw;
    bottom: 9vw;
  }

  .hole2 {
    left:   23vw;
    bottom: 4vw;
  }

  .hole3 {
    left:   7vw;
    bottom: 20vw;
  }

  .hole4 {
    left:   28vw;
    bottom: 25vw;
  }

  .hole5 {
    right:  26vw;
    bottom: 27vw;
  }

  .hole6 {
    right:  4vw;
    bottom: 21vw;
  }

  .hole7 {
    left:   44vw;
    bottom: 17vw;
  }

  .hole8 {
    right:  33vw;
    bottom: 20vw;
  }

  .hole9 {
    right:  16vw;
    bottom: 13vw;
  }

  .hole10 {
    right:  34vw;
    bottom: 8vw;
  }

  .hole11 {
    right:  4vw;
    bottom: 3vw;
  }

}

.fabric-trees-enter-active {
  transition: color 5s;

  .game-trees__tree {
    transition: height 5s;
  }
}

.fabric-trees-enter {
  color: white;

  .game-trees__tree {
    height: 0;
  }
}
</style>