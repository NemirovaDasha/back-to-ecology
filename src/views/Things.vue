<template lang="pug">
  main.main
    ThingsInfo

</template>

<script>
import ThingsInfo from "../components/ThingsInfo";
export default {
  components: {ThingsInfo},
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