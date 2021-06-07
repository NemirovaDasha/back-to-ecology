<template lang="pug">
  .train__info
    GameText(
      :text-list="blockTextList[idBlock].textList"
      :is-button="true"
      :link-text="blockTextList[idBlock].buttonText"
      :click-function="blockTextList[idBlock].functionButton"
      :is-start-game-again="blockTextList[idBlock].isAgain"
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
          isAgain: false,
          textList: [
            {
              id: 0,
              text: 'Найди на машинах значек молнии или капельки и отправь машину на свою станцию заправки.'
            },
            {
              id: 1,
              text: 'Молнией обозначены электромобили, которые заправляются электричеством, а капелькой обычные машины, которым для работы нужен бензин.'
            },
            {
              id: 2,
              text: 'Машины едут на станции по очереди. Нажимай на нужную колонку и машина сама поедет к заправке.'
            }
          ]
        },
        {
          id: 1,
          buttonText: 'Закончить игру',
          functionButton: 'end-game',
          isAgain: true,
          textList: [
            {
              id: 0,
              text: 'Что же можно сделать',
              isTitle: true
            },
            {
              id: 1,
              text: 'Мы можем лишь выибирать машину, на которой будем ездить. К сожалению, электрические заправки в России не сильно распространены, но со временем все обязательно будет!'
            }
          ]
        }
      ]
    }
  }
}
</script>