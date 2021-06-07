<template lang="pug">
  .fabric__text

    transition(name='base-text' tag="div" appear)
      template(v-if="idBlockShow===0")
        .fabric__text-container
          p При работе заводов производиться много отходов, которые попадают в воздух, воду и почву. Из-за этого мы дышим грязным воздухом, вода в водоемах становиться непригодной, как для людей, так и для ее обитателей. А почва загрязняется и на ней не растут растения.
          p Так же многие производства используют дерево для своей работы. Вырубается много лесов. Но ведь деревья очищают наш воздух, а леса это место обитания многих зверей.
          TypoGameButton(
            @next-step="switchStep"
            :click-function="'next-step'"
          ) Что можно сделать?

    transition(name='base-text' tag="div" appear)
      template(v-if="idBlockShow===1")
        .fabric__text-container
          p(style="text-align: center; margin-top: 24px") Давай посадим пару семечек и вырастим целый лес!
            TypoGameButton(
              @start-trees="startGameTrees"
              :click-function="'start-trees'"
            ) Дальше

    transition(name='base-text' tag="div" appear)
      template(v-if="idBlockShow===2")
        template(v-if="gameTreesEnd")
          GameText(
            :text-list="treesEndText"
            :is-button="true"
            :link-text="'Закончить игру'"
            :click-function="'end-game-trees'"
            :is-start-game-again="true"
            style="z-index: 2000;"
            @end-game-trees="endGameTrees"
          )
        template(v-else)
          .fabric__text-container
            p(style="text-align: center") Давай посадим росточки в ямки и вырастим целый лес!
            p(style="text-align: center") Перетаскивай расточки в ямки с помощью мышки

</template>

<script>
import GameText from "./GameText";

export default {
  components: {GameText},
  props: {
    gameTreesEnd: {
      type: Boolean,
      require: false
    }
  },
  data() {
    return {
      idBlockShow: 0,
      treesEndText: [
        {
          id: 0,
          text: 'Здорово! Ты вырастил целый лес и помог природе.'
        },
        {
          id: 1,
          text: 'Деревья будут очищать воздух и вырабатывать кислород, которым мы дышим. А в лесу будут жить звери.'
        }
      ]
    }
  },
  methods: {
    switchStep() {
      this.idBlockShow = this.idBlockShow + 1
    },
    startGameTrees() {
      this.idBlockShow = 2
      this.$emit('start-game-trees')
    },
    endGameTrees() {
      this.$emit('end-game-trees')
    }
  }
}
</script>

<style lang="scss">
.fabric {
  &__text {
    width:      100%;
    padding:    60px 16px 0;
    box-sizing: border-box;

    p {
      margin-bottom: 20px;
    }

    @include w-from($screen-md) {
      max-width: 58vw;
      padding:   30px 0 0 16px;

      p {
        font-size:   14px;
        line-height: 18px;
        margin-bottom: 10px;
      }
    }

    @include w-from($screen-lg) {
      max-width: 58vw;
      padding:   30px 0 0 50px;

      p {
        font-size:     18px;
        line-height:   24px;
      }
    }

    @include w-from($screen-xl) {
      max-width: 58vw;
      padding:   50px 0 0 50px;
    }
  }
}
</style>