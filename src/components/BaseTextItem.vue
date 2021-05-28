<template lang="pug">
  article.base-article
    .base-article__text
      p(
        v-for="paragraph in text" v-html="paragraph"
        :key="id")
    img(:src="src")
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      require: true
    },
    text: {
      type: Array,
      require: true
    },
    id:{
      type: Number,
      require: true
    }
  }
}
</script>

<style lang="scss">
.base-article {
  display:         flex;
  flex-direction:  column-reverse;
  align-items:     center;
  justify-content: flex-start;
  padding:         25px 20px;
  box-sizing:      border-box;

  background:      rgba(white, .5);
  border-radius:   25px;

  img {
    height:        125px;
    width:         auto;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @include w-from($screen-md) {
    flex-direction: row;

    p {
      padding-right: 20px;
    }

    img {
      margin-bottom: 0;
    }
  }
}
</style>