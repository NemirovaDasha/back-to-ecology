<template lang="pug">
  .buttons-container
    TypoButton.t-orange(:href="{name: 'Game'}") Играть
    TypoButton.t-blue(:href="{name: 'Home'}") На главную
</template>

<script>
export default {

}
</script>

<style lang="scss">
.buttons-container {
  display:         flex;
  flex-direction:  column;
  justify-content: center;
  align-items:     center;
  margin-top:      20px;

  a {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @include w-from($screen-md) {
    flex-direction: row;
    margin-top:     50px;

    a {
      margin-right:  80px;
      margin-bottom: 0;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>