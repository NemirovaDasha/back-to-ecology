<template lang="pug">
  transition(name="preloader")
    main.main
      BasePreloader
      MemoInfo
</template>

<script>
import MemoInfo from "@/components/MemoInfo";
import BasePreloader from "../components/BasePreloader";

export default {
  components: {BasePreloader, MemoInfo},
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
