<template lang="pug">
  .fabric__text
    template(v-if="idBlockShow===0")
      p При работе заводов производиться много отходов, которые попадают в воздух, воду и почву. Из-за этого мы дышим грязным воздухом, вода в водоемах становиться непригодной, как для людей, так и для ее обитателей. А почва загрязняется и на ней не растут растения.
      p Так же многие производства используют дерево для своей работы. Вырубается много лесов. Но ведь деревья очищают наш воздух, а леса это место обитания многих зверей.
      TypoGameButton(
        @next-step="switchStep"
        :click-function="'next-step'"
      ) Что можно сделать?
    template(v-if="idBlockShow===1")
      p(style="text-align: center") Давай посмотрим, чем занимаются на заводах
      TypoGameButton Дальше

      p(style="text-align: center; margin-top: 24px") Давай посадим пару семечек и вырастим целый лес!
      TypoGameButton Дальше
</template>

<script>
export default {
  data() {
    return {
      idBlockShow: 0
    }
  },
  methods: {
    switchStep() {
      this.idBlockShow = this.idBlockShow + 1
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

    @include w-from($screen-lg) {
      max-width: 50vw;
      padding:   50px 0 0 50px;
    }

    p {
      margin-bottom: 20px;
    }
  }


}
</style>