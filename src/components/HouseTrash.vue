<template lang="pug">
  .house__trash-containe
    .house__bins
      img(
        v-for="bin in binList"
        :key="bin.id"
        :id="bin.type"
        :src="bin.image"
        :class="binClass(bin.type)"
        @dragover.prevent
        @drop.prevent="drop"
      )
    .house__shadows
      img(src="assets/img/game/house/bins/shadow1.svg")
      img(src="assets/img/game/house/bins/shadow1.svg")
      img(
        src="assets/img/game/house/bins/shadow1.svg"
        :class="{'m-rotate': unblockGame}"
      )

    .house__trash
      img(
        v-for="trash in trashList"
        :key="trash.id"
        :id="trash.type + '/' + trash.id"
        :src="trash.image"
        :style="trash.position"
        :class="{'block-game': !unblockGame}"
        draggable="true"
        @dragstart="dragStart"
        @dragover.stop
      )
    BaseGameHelp(
      v-if="helpParameter.show"
      :position="helpParameter.position"
      @close="helpParameter.show=false"
    ) {{helpParameter.text}}

</template>

<script>
import BaseGameHelp from "./BaseGameHelp";

export default {
  components: {BaseGameHelp},
  props: {
    unblockGame: {
      type: Boolean,
      require: false
    }
  },
  data() {
    return {
      trashList: [
        {
          id: 1,
          image: 'assets/img/game/house/trash/bottle.svg',
          position: 'left: 40%; ' +
              'bottom: 1vw;',
          type: 'plastic'
        },
        {
          id: 2,
          image: 'assets/img/game/house/trash/bottle.svg',
          position: 'width: 5.5vw;' +
              'right: 15vw; ' +
              'bottom: 15.5vw; ' +
              'transform: scale(-1, 1) rotate(-10deg);',
          type: 'plastic'
        },
        {
          id: 3,
          image: 'assets/img/game/house/trash/bottle.svg',
          position: 'right: 2%; ' +
              'bottom: 38vw;',
          type: 'plastic'
        },
        {
          id: 4,
          image: 'assets/img/game/house/trash/can.svg',
          position: 'right: 35%; ' +
              'bottom: 5vw; ' +
              'width: 6vw; ' +
              'transform: scale(-1, 1) rotate(-17deg);',
          type: 'metal'
        },
        {
          id: 5,
          image: 'assets/img/game/house/trash/can.svg',
          position: 'left: 34%; ' +
              'bottom: 6vw; ' +
              'width: 6vw;',
          type: 'metal'
        },
        {
          id: 6,
          image: 'assets/img/game/house/trash/can.svg',
          position: 'right: 10%; ' +
              'bottom: 0; ' +
              'width: 6vw;',
          type: 'metal'
        },
        {
          id: 7,
          image: 'assets/img/game/house/trash/cup.svg',
          position: 'left: 23%; ' +
              'bottom: 9vw; ' +
              'width: 4vw;',
          type: 'plastic'
        },
        {
          id: 8,
          image: 'assets/img/game/house/trash/cup.svg',
          position: 'width: 3.5vw; ' +
              'right: 20vw; ' +
              'bottom: 11.5vw; ' +
              'transform: scale(-1, 1) rotate(-10deg);',
          type: 'plastic'
        },
        {
          id: 9,
          image: 'assets/img/game/house/trash/paper.svg',
          position: 'width: 2.5vw; ' +
              'right: 14vw; ' +
              'bottom: 12.5vw;',
          type: 'paper'
        },
        {
          id: 10,
          image: 'assets/img/game/house/trash/paper.svg',
          position: 'width: 2.5vw; ' +
              'right: 48%; ' +
              'bottom: 9vw;',
          type: 'paper'
        },
        {
          id: 11,
          image: 'assets/img/game/house/trash/paper.svg',
          position: 'width: 2.5vw; ' +
              'left: 29%; ' +
              'bottom: 0vw;',
          type: 'paper'
        },
        {
          id: 12,
          image: 'assets/img/game/house/trash/paper.svg',
          position: 'width: 2.5vw; ' +
              'left: 13%; ' +
              'bottom: 13vw;',
          type: 'paper'
        }
      ],
      binList: [
        {
          id: 1,
          image: 'assets/img/game/house/bins/plastic.svg',
          type: 'plastic'
        },
        {
          id: 2,
          image: 'assets/img/game/house/bins/metal.svg',
          type: 'metal',
        },
        {
          id: 3,
          image: 'assets/img/game/house/bins/paper.svg',
          type: 'paper'
        }

      ],
      gameCounter: 0,
      helpParameter: {
        show: false,
        text: '',
        position: '',
        textList: [
          {
            id: 0,
            text: '?????? ?????????????????????? ??????????????'
          },
          {
            id: 1,
            text: '?????? ?????????????????????? ?????????????????????? ??????????????????'
          },
          {
            id: 2,
            text: '?????? ?????????????????????????? ??????????'
          },
          {
            id: 3,
            text: '?????? ???????????????? ????????????'
          }
        ]
      }
    }
  },
  methods: {
    drop(e) {
      const trashName = e.dataTransfer.getData('trash_name');
      const trashData = trashName.split('/');
      const trashType = trashData[0];
      const trashId = trashData[1];
      const binType = e.target.id;

      if (trashType === binType) {
        const trashImage = document.getElementById(trashName);
        trashImage.classList.add('mod-hidden');
        this.gameCounter = this.gameCounter + 1;
      } else {
        this.helpParameter.show = true;
        this.helpParameter.position = this.trashList[trashId - 1].position;
        switch (trashType) {
          case 'plastic':
            if (trashId < 4) {
              this.helpParameter.text = this.helpParameter.textList[0].text
            } else {
              this.helpParameter.text = this.helpParameter.textList[1].text
            }
            break;
          case 'metal':
            this.helpParameter.text = this.helpParameter.textList[2].text
            break;
          case 'paper':
            this.helpParameter.text = this.helpParameter.textList[3].text
            break;
        }
      }
      if (this.gameCounter === 12) {
        this.$emit('end-game')
      }
    },
    dragStart(e) {
      const target = e.target;
      e.dataTransfer.setData('trash_name', target.id)
    },
    binClass(binClass) {
      if (this.unblockGame) {
        return (binClass==='paper') ? binClass + ' m-rotate' : binClass
      } else {
        return binClass + ' block-game';
      }
    }
  }
}
</script>

<style lang="scss">
.house {
  &__bins {
    pointer-events: auto;

    .block-game {
      pointer-events: none;
    }

    img {
      position: absolute;
      bottom:   14vw;
      height:   16vw;
      z-index:  1000;

      &.plastic {
        left: 32vw;
      }

      &.metal {
        left: 44vw;
      }

      &.paper {
        width:      16vw;
        height:     auto;
        left:       56vw;
        bottom:     13vw;
        transition: all 1s;

        &.m-rotate {
          bottom:     16.7vw;
          left:       53.5vw;
          transform:  rotate(-90deg);
          transition: all 1s;
        }
      }
    }
  }

  &__shadows {
    img {
      position: absolute;
      bottom:   13vw;
      width:    16vw;
      z-index:  999;

      &:first-child {
        left: 29.5vw;
      }

      &:nth-child(2) {
        left: 40.5vw;
      }

      &:last-child {
        width:      18vw;
        left:       55vw;
        bottom:     11.5vw;
        z-index:    100;
        transition: all 1s;
      }

      &.m-rotate {
        width:      16vw;
        bottom:     13vw;
        left:       53vw;
        transition: all 1s;
      }
    }
  }

  &__trash {
    pointer-events: auto;

    .block-game {
      pointer-events: none;
    }

    img {
      position: absolute;
      z-index:  1000;
      width:    7vw;

      @include hover {
        cursor: pointer;
      }
    }
  }
}
</style>