<template lang="pug">
  main.main
    BasePreloader
    AboutText

</template>

<script>
import AboutText from "../components/AboutText";
import BasePreloader from "../components/BasePreloader";
export default {
  components: {BasePreloader, AboutText},
  methods:{
    init(){
      document.body.classList.add('no-overflow')
    }
  },
  mounted() {
    this.init();
  }
}
</script>
