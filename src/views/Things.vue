<template lang="pug">
  main.main
    BasePreloader
    ThingsInfo

</template>

<script>
import ThingsInfo from "../components/ThingsInfo";
import BasePreloader from "@/components/BasePreloader";
export default {
  components: {BasePreloader, ThingsInfo},
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