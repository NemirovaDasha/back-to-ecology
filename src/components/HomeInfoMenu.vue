<template lang="pug">
  article.main-menu
    .main-menu__text
      p Сегодня мы вместе узнаем больше про то, что нас окружает.
      p Я расскажу о том как развивались люди и как это влияло на экологию. А так же о том, что нужно делать теперь, чтобы помочь природе восстановиться.
      p Чтобы начать - нажми на кнопку!

    TypoButton.t-orange(:href="{name: 'Game'}") Начать

    .main-menu__links
      TypoLink1(:href="{name: 'About'}") О проекте
      TypoLink1(:href="{name: 'Memo'}") Памятка
</template>

<script>
export default {}
</script>

<style lang="scss">
.main-menu {
  position:       absolute;
  top:            50%;
  left:           50%;
  transform:      translate(-50%, -50%);
  min-width:      300px;
  max-width:      680px;
  display:        flex;
  flex-direction: column;
  align-items:    center;
  padding:        20px;
  opacity:        0;
  background:     white;
  border-radius:  26px;
  z-index:        12;
  box-sizing:     border-box;

  @include w-range($screen-lg, $screen-xl) {
    top:       55%;
    transform: translate(-50%, -55%);
  }

  @include w-from($screen-lg) {
    padding: 42px 70px;
  }

  &.m-show {
    opacity:   1;
    animation: showMenu 1s ease-in;
  }

  p {
    margin-bottom: 15px;
    text-align:    center;

    &:last-child {
      margin-bottom: 8px;
      text-align:    center;
    }

    @include w-from($screen-lg) {
      margin-bottom: 15px;

      &:last-child {
        margin-bottom: 40px;
      }
    }
  }

  &__links {
    display:         flex;
    flex-direction:  row;
    justify-content: space-between;
    width:           100%;
    margin-top:      18px;
  }
}

@keyframes showMenu {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
}
</style>