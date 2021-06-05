<template lang="pug">
  .train__info
    GameText(
      :text-list="blockTextList[idBlock].textList"
      :is-button="true"
      :link-text="blockTextList[idBlock].buttonText"
      :click-function="blockTextList[idBlock].functionButton"
      style="z-index: 2000;"
      @start-game="$emit('start-game')"
      @end-game="$emit('end-game')"
    )
</template>

<script>
import GameText from "./GameText";
export default {
  components: {GameText},
  props:{
    idBlock:{
      type: Number,
      require: true
    }
  },
  data() {
    return {
      blockTextList:[
        {
          id: 0,
          buttonText: 'Начать',
          functionButton: 'start-game',
          textList: [
            {
              id: 0,
              text: 'Поезд вот-вот отправляется, но не все пассажиры заняли свои места!'

            },
            {
              id: 1,
              text: 'Найди всех опаздывающих пассажиров, нажми на них, чтобы переместить в вагон.'
            }
          ]
        },
        {
          id: 1,
          buttonText: 'Закончить игру',
          functionButton: 'end-game',
          textList: [
            {
              id: 0,
              text: 'Молодец! Ты помог всем пассажирам сесть в поезд.'
            },
            {
              id: 1,
              text: 'Поезда помогают людям добираться до нужного места, а также перевозят грузы. Но они вредят природе. Ученые стараются придумать экологичное топливо, чтобы ущерб был не такой большой'
            }
          ]
        }
      ]
    }
  }
}
</script>