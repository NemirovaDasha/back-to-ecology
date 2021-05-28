<template lang="pug">
  main.main
    MemoInfo

</template>

<script>
import MemoInfo from "@/components/MemoInfo";

export default {
  components: {MemoInfo},
  methods: {
    init() {
      document.body.classList.add('no-overflow');
    }
  },
  mounted() {
    this.init();
  }
}
</script>
