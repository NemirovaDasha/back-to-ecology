<template lang="pug">
  main.main
    BasePreloader
    section.game
      GameClouds
      transition(name='game-transition' tag="div")
        GameText(
          :key="step"
          :text-list="stepList[step].textList"
          :is-button="stepList[step].isButton"
          :link-text="stepList[step].linkText"
          :click-function="'start-game'"
          :is-back-button="false"
          @start-game="startGame"
          @show-next-step="step += 1"
        )

      GameBackground(
        :background-id="1"
        :show-item-id="2"
        :is-rules="true"
      )
      TypoLink2(:href="{name: 'Home'}") Выйти на главную
</template>

<script>
import GameClouds from "../components/GameClouds";
import GameText from "../components/GameText";
import GameBackground from "../components/GameBackground";
import router from "../router";
import BasePreloader from "../components/BasePreloader";

export default {
  components: {BasePreloader, GameBackground, GameText, GameClouds},
  data() {
    return {
      step: 0,
      stepList: [
        {
          id: 0,
          textList: [
            {
              id: 0,
              text: 'Сейчас мы начнем нашу игру.'
            },
            {
              id: 1,
              text: 'В этом окошке будет появляться текст, читай и изучай. Когда прочитаешь, нажимай на кнопку и изучай дальше.'
            },
            {
              id: 2,
              text: 'Внизу есть поле, его можно двигать вправо и влево, чтобы полностью увидеть картинки',
              onlyMobile: true
            }
          ],
          linkText: 'Дальше',
          isButton: false
        },
        {
          id: 0,
          textList: [
            {
              id: 0,
              text: 'Постепенно внизу будут появляться новые картинки. Некоторые из них будут двигаться - это значит, что можно нажать на них, и откроется мини-игра.'
            },
            {
              id: 1,
              text: 'Пример такой фигурки - машинка, она обведена в красный кружочек. Сейчас на нее нажать нельзя, так как игра еще не началась'
            }
          ],
          linkText: 'Дальше',
          isButton: false
        },
        {
          id: 1,
          textList: [
            {
              id: 0,
              text: 'Удачной игры!'
            },
            {
              id: 1,
              text: 'Вы играете с мобильного устройства. В некоторых играх присутствуют мелкие элементы. Для удобства рекомендуем играть с компьютера.',
              onlyMobile: true
            },
            {
              id: 2,
              text: 'Если все понятно, жми на кнопку и давай начем!'
            }
          ],
          linkText: 'Начать игру',
          isButton: true
        }
      ]
    }
  },
  methods:{
    startGame(){
      router.push({name: 'Game'})
    }
  }
}
</script>

<style lang="scss">
.game {
  position: relative;
  width:    100%;
  height:   100vh;
}
</style>
