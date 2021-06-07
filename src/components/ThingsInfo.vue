<template lang="pug">
  section.t-back-color.things.js-no-overflow
    TypoH1 Как использовать вещи с умом

    ThingsInfoText

</template>

<script>
import BaseTextItem from "./BaseTextItem";
import ThingsInfoText from "./ThingsInfoText";

export default {
  components: {ThingsInfoText, BaseTextItem}
}
</script>

<style lang="scss">
.things {
  padding-top: 20px;
  box-sizing:  border-box;
  z-index:     2000;
}
</style>