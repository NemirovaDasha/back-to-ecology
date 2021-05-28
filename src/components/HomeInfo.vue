<template lang="pug">
  section.main-info
    TypoH1.main-info__title Назад в экологию

    .main-info__back
      transition(name="main-info")
        div(
          v-if="showTrees"
        )
          img(
            v-for="tree in trees"
            :key="tree.id"
            :src="tree.src"
            :class="tree.class"
            alt='дерево'
            ref="trees"
          )

      .main-info__hero(
        id="js-main-hero"
        :class="{'m-hidden': showMenu, 'mod-only-lg': elementOnlyLg}"
      )
        .main-info__text
          p
            | Привет!
            br
            | Меня зовут Женя.
            br
            | Давай вместе узнаем больше про природу!
        img(src="@/assets/img/other/hero.svg" alt='главный герой')

    HomeInfoMenu(
      :class="{'m-show': showMenu}"
    )

</template>

<script>
import HomeInfoMenu from "./HomeInfoMenu";

export default {
  components: {HomeInfoMenu},
  data() {
    return {
      showMenu: false,
      showTrees: true,
      elementOnlyLg: false,
      trees: [
        {
          id: 0,
          src: 'assets/img/trees/tree1.svg',
          class: 'main-info__tree-1',
          translate: '-156px'
        },
        {
          id: 1,
          src: 'assets/img/trees/tree2.svg',
          class: 'main-info__tree-2',
          translate: '-270px'
        },
        {
          id: 2,
          src: 'assets/img/trees/tree3.svg',
          class: 'main-info__tree-3',
          translate: '-300px'
        },
        {
          id: 3,
          src: 'assets/img/trees/tree4.svg',
          class: 'main-info__tree-4',
          translate: '220px'
        },
        {
          id: 4,
          src: 'assets/img/trees/tree5.svg',
          class: 'main-info__tree-5',
          translate: '220px'
        }
      ]
    }
  },
  methods: {
    init() {
      this.showMenu = true;

      this.$refs.trees.forEach((tree, key) => {
        tree.style.transform = 'translateX(' + this.trees[key].translate + ')';
        if (window.innerWidth < 1280) {
          setTimeout(() => {
            this.showTrees = false;
          }, 1000)
        }
      });
    }
  },
  mounted() {
    setTimeout(this.init, 3000);
  }
}
</script>

<style lang="scss">
.main-info {
  position:       absolute;
  bottom:         0;
  left:           0;
  right:          0;
  top:            0;
  z-index:        100;
  height:         100vh;
  display:        flex;
  flex-direction: column;

  &__back {
    position: relative;
    width:    100%;
    height:   100%;

    img {
      position: absolute;
    }
  }

  &__tree-1 {
    left:       0;
    bottom:     -8px;
    z-index:    3;
    transition: transform 1s;
    //height:     96vh;
    height:     51vw;
    max-height: 95vh;

    @include w-from($screen-lg) {
      bottom: -35px;
    }
  }

  &__tree-2 {
    //height:     67vh;
    height:     35vw;
    max-height: 75vh;
    //left:       242px;
    left:       19vw;
    bottom:     -26px;
    z-index:    5;
    transition: transform 1.4s;

    @include w-from($screen-lg) {
      bottom: -120px;
    }
  }

  &__tree-3 {
    //height:     78vh;
    height:     41vw;
    max-height: 80vh;
    //left:       420px;
    left:       33vw;
    bottom:     -2px;
    z-index:    4;
    transition: transform 1.5s;

    @include w-from($screen-lg) {
      bottom: -44px;
    }
  }

  &__tree-4 {
    //height:     74vh;
    height:     38vw;
    max-height: 80vh;
    //right:      233px;
    right:      18vw;
    bottom:     -6px;
    z-index:    3;
    transition: transform 1.3s;

    @include w-from($screen-lg) {
      bottom: -28px;
    }
  }

  &__tree-5 {
    //height:     93vh;
    height:     49vw;
    max-height: 95vh;
    bottom:     -6px;
    right:      0;
    z-index:    2;
    transition: transform 1.5s;

    @include w-from($screen-lg) {
      bottom: -30px;
    }
  }

  &__hero {
    position:        absolute;
    right:           50px;
    bottom:          0;
    display:         flex;
    align-items:     flex-end;
    justify-content: flex-end;
    flex-direction:  column;
    width:           72vw;
    //height:          45vh;
    z-index:         6;
    opacity:         1;
    max-width:       300px;
    max-height:      250px;

    img {
      position:   static;
      height:     45vw;
      max-height: 54vh;
    }

    &.m-hidden {
      opacity:    0;
      transition: opacity 1s;
    }

    @include w-from($screen-lg) {
      max-width:  600px;
      max-height: 90vh;
    }
  }

  &__text {
    position:        static;
    margin-bottom:   -50px;
    height:          30vh;
    width:           49vw;
    max-width:       160px;
    min-height:      104px;
    background:      url("~@/assets/img/other/window.svg") no-repeat;
    background-size: contain;
    align-self:      flex-start;

    p {
      text-align:  center;
      padding-top: 18px;
      font-size:   12px;
      line-height: 14px;
    }

    @include w-from($screen-lg) {
      width:      72vw;
      height:     16vh;
      max-width:  277px;
      min-height: 180px;

      p {
        padding-top: 34px;
        font-size:   22px;
        line-height: 24px;
      }
    }
  }

  &__title {
    padding-top: 22px;
  }

  &-enter-active, &-leave-active {
    transition: opacity .5s;
  }
  &-enter, &-leave-to{
    opacity: 0;
  }
}
</style>