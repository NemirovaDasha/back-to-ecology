<template lang="pug">
  section.t-back-color.memo.js-no-overflow
    TypoH1 Памятка
    TypoH2.memo__head Здесь вы можете посмотреть информацию о том, как начать заботиться о природе и жить экологично

    MemoInfoText
</template>

<script>
import MemoInfoText from "./MemoInfoText";

export default {
  components: {MemoInfoText}
}
</script>

<style lang="scss">
.memo {
  padding-top: 20px;
  box-sizing:  border-box;

  &__head {
    padding:    10px 16px 0;
    box-sizing: border-box;
  }
}
</style>