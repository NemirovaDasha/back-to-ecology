<template lang="pug">
  .wrapper
    .memo__main
      BaseTextItem(
        src="assets/img/memo/stairs.svg"
        :text="['Начните от&nbsp;простого к&nbsp;сложному. Будет проще изучать все постепенно и&nbsp;шаг за&nbsp;шагом двигаться к&nbsp;более экологичной жизни.']"
      )
      BaseTextItem(
        src="assets/img/memo/collab.svg"
        :text="['Рассказывайте своим друзьям и&nbsp;близким, о&nbsp;том что нового вы&nbsp;узнали про экологичный образ жизни. Будьте для них примером. Тогда больше людей будет знать как заботиться о&nbsp;природе. Вместе мы&nbsp;сила!']"
      )

    ul.memo__list
      li.memo__item(
        v-for="advice in adviceList"
        :key="advice.id"
      )
        .memo__text
          p(
            v-for="paragraph in advice.text"
            v-html="paragraph"
            )
          template(v-if="advice.link")
            p (Еще можно почитать нашу
              router-link(:to="{name: 'Things'}" ) &nbsp;страницу&nbsp;
              | про использование вещей)
        img(:src="advice.image")

    .memo__wish
      TypoH2 Даже так мы уже будем помогать природе.
      TypoH2 Главное - начать.

    BaseButtons
</template>

<script>
import BaseTextItem from "./BaseTextItem";
import BaseButtons from "./BaseButtons";

export default {
  components: {BaseButtons, BaseTextItem},
  data() {
    return {
      adviceList: [
        {
          text: [
            "Начните собирать раздельно один или несколько видов отходов. Многие начинают с&nbsp;бумаги, постепенно переходя к&nbsp;другим видам (стекло, пластик).",
            "Узнайте, где можно сдать на&nbsp;переработку разные виды мусора в&nbsp;вашем городе и&nbsp;отвозите их&nbsp;туда (для некоторых городов можно воспользоваться сайтом recyclemap)"
          ],
          image: "assets/img/memo/paper.svg",
          link: false,
          id: 0
        },
        {
          text: ["Используйте мешочки и&nbsp;сумки из&nbsp;ткани вместо пластиковых пакетов. Куда&nbsp;бы вы&nbsp;ни&nbsp;отправлялись за&nbsp;покупками, берите с&nbsp;собой многоразовые сумки из&nbsp;ткани и&nbsp;отказывайтесь от&nbsp;пластиковых пакетов в&nbsp;магазине. Покупки можно носить в&nbsp;красивой сумке и&nbsp;радовать себя, при этом заботясь о&nbsp;природе."],
          image: "assets/img/memo/package.svg",
          link: false,
          id: 1
        },
        {
          text: ["Используйте различные емкости повторно. Прочные емкости из-под продуктов и&nbsp;средств можно использовать несколько раз. Бутылкам, коробкам и&nbsp;пакетам можно найти применение. Например, сделать красивую поделку своими руками для украшения, или использовать баночку для хранения карандашей или вместо вазы для цветов. Используйте свою фантазию!"],
          image: "assets/img/memo/glass.svg",
          link: true,
          id: 2
        },
        {
          text: ["Существуют отходы, которые нельзя использовать повторно или перерабатывать, например, батарейки, телефоны, телевизоры или лампочки. Их&nbsp;нужно выбрасывать в&nbsp;специальные контейнеры. Постарайтесь использовать их&nbsp;как можно меньше и&nbsp;выбрасывать только в&nbsp;специальных местах."],
          image: "assets/img/memo/battery.svg",
          link: false,
          id: 3
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.memo {
  &__main {
    display:               grid;
    grid-template-rows:    repeat(2, auto);
    grid-template-columns: 1fr;
    grid-row-gap:          20px;
    margin-bottom:         20px;


    @include w-from($screen-lg) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows:    1fr;
      grid-column-gap:       26px;
      margin-bottom:         40px;
    }
  }

  &__list {
    width:           100%;
    display:         flex;
    flex-direction:  column;
    align-items:     flex-start;
    justify-content: flex-start;
  }

  &__item {
    width:          100%;
    display:        flex;
    flex-direction: column-reverse;
    margin-bottom:  40px;

    img {
      width:         125px;
      height:        auto;
      align-self:    center;
      margin-bottom: 18px;
    }

    p {
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    @include w-from($screen-md) {
      width:          80%;
      display:        flex;
      flex-direction: row;
      margin-bottom:  50px;

      img {
        margin-left:   50px;
        margin-bottom: 0;
      }

      &:nth-child(even) {
        flex-direction: row-reverse;
        align-self:     flex-end;

        img {
          margin-right: 50px;
        }
      }
    }
  }
}
</style>