<template lang="pug">
  .wrapper.things__container
    BaseTextItem.things__text(
      src="assets/img/things/toothbrush.svg"
      :alt="'Зубная щетка'"
      :text="['Щетка, конечно, не&nbsp;одноразовый предмет, но&nbsp;покупаем мы&nbsp;его часто. Обычную пластиковую зубную щетку можно заменить бамбуковой или щеткой со&nbsp;сменной головкой.']"
    )
    BaseTextItem.things__text(
      src="assets/img/things/cup.svg"
      :alt="'Стакан для карандашей'"
      :text="['Если есть ненужные вещи, например, стаканчик из-под лимонада, то&nbsp;можно делать из&nbsp;них поделки. Можно придумать интересный стаканчик для карандашей и&nbsp;разукрасить его фломастерами.', 'Так вещи не&nbsp;будут валяться без дела и&nbsp;будет меньше мусора.']"
    )
    BaseTextItem.things__text(
      src="assets/img/things/bottle.svg"
      :alt="'Бутылка для воды'"
      :text="['Нам нужно пить воду в&nbsp;течении дня. Можно не&nbsp;покупать воду в&nbsp;пластиковых бутылках очень часто, а&nbsp;например, брать с&nbsp;собой в&nbsp;удобной бутылочке или даже в&nbsp;термосе.', 'Так не будет ненужного пластикового мусора, ведь обычные бутылки выкидывают после одного использования.']"
    )
    BaseTextItem.things__text(
      src="assets/img/things/tubule.svg"
      :alt="'Трубочки'"
      :text="['Если любишь пить из&nbsp;трубочки, то&nbsp;можно заменить одноразовые пластиковые трубочки на&nbsp;металлические. Они прослужат долго, если их&nbsp;мыть после каждого использования специальной щеточкой.']"
    )

    ThingsInfoTextWish

    img.things__image.mod-no-sm(
      src="assets/img/things/imagine.svg"
      alt="главный герой"
      )
</template>

<script>
import BaseTextItem from "./BaseTextItem";
import ThingsInfoTextWish from "./ThingsInfoTextWish";

export default {
  components: {ThingsInfoTextWish, BaseTextItem}
}
</script>

<style lang="scss">
.things {
  padding-top: 20px;
  box-sizing:  border-box;

  &__container {
    display:               grid;
    grid-template-rows:    repeat(5, auto);
    grid-template-columns: 1fr;
    grid-gap:              20px;
    padding-bottom:        0;

    @include w-from($screen-md) {
      grid-template-rows:    repeat(4, auto);
      grid-template-columns: repeat(2, 1fr);
    }

    @include w-from($screen-lg) {
      grid-gap: 32px;
    }
    @include w-from($screen-xl) {
      grid-gap: 40px;
    }
  }

  &__image {
    grid-column:    2;
    grid-row-start: 3;
    grid-row-end:   5;
    width:          100%;
    height:         auto;
    align-self:     end;

    @include w-from($screen-lg) {
      grid-row-start: 2;
      grid-row-end:   5;
    }
  }

  &__text {
    p {
      @include w-to($screen-lg) {
        font-size:   16px;
        line-height: 20px;
      }
    }

    img {
      @include w-to($screen-lg) {
        height: 90px;
      }
    }
  }
}
</style>